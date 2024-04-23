import { useState, useEffect } from 'react';
import { fetchLogin, fetchLogout, fetchScores, fetchSession, addToServer, fetchFlashCard } from './services';
import { LOGIN_STATUS, SERVER, CLIENT } from './constants';
import Header from './Header';
import LoginForm from './LoginForm';
import Loading from './Loading';
import Status from './Status';
import Scores from './Scores';
import Flashcard from './Flashcard';
import Collections from './Collections';
import BackButton from './BackButton';

function App() {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [scores, setScores] = useState({ total: 0, personalBest: 0 });
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.PENDING);
  const [isCollectionSelected, setIsCollectionSelected] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [flashCard, setFlashCard] = useState({ question: '', answer: '' });

  function onLogin(username) {
    fetchLogin(username)
      .then(() => {
        setError('');
        setUsername(username);
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      })
      .then(() => {
        return fetchScores();
      })
      .then(response => {
        setScores({ total: response.storedScores.total, personalBest: response.storedScores.personalBest });
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function onLogout() {
    resetScores();
    fetchLogout()
      .then(() => {
        setError('');
        setUsername('');
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        setIsCollectionSelected(false);
        setFlashCard({ question: '', answer: '' });
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function checkForSession() {
    username
    fetchSession();
    fetchScores()
      .then(response => {
        setUsername(response.username);
        setScores({ total: response.storedScores.total, personalBest: response.storedScores.personalBest });
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      })
      .then(response => {
        setScores({ total: response.storedScores.total, personalBest: response.storedScores.personalBest });
      })
      .catch(err => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION })
        }
        return Promise.reject(err);
      })
      .catch(err => {
        if (err?.error === CLIENT.NO_SESSION) {
          setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
          return;
        }
        setError(err?.error || 'ERROR');
      });
  }

  function updateScores() {
    return new Promise(resolve => {
      setScores(prevScores => ({
        total: prevScores.total + 1,
        personalBest: Math.max(prevScores.total + 1, prevScores.personalBest)
      }));
      resolve();
    });
  }

  function resetScores() {
    setScores({ total: 0, personalBest: 0 });
    return addToServer(0, scores.personalBest);
  }

  function onAddScores() {
    updateScores()
      .then(() => {
        const newTotal = scores.total + 1;
        const newPersonalBest = Math.max(newTotal, scores.personalBest);
        setScores({ total: newTotal, personalBest: newPersonalBest });
        return addToServer(newTotal, newPersonalBest)
      }).then(() => fetchFlashCard(selectedCollection))
      .then(response => {
        setFlashCard({ question: response.question, answer: response.answer });
      })
      .then(() => {
        fetchScores();
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function onInCorrectAnswer() {
    fetchFlashCard(selectedCollection)
      .then(response => {
        setFlashCard({ question: response.question, answer: response.answer });
      })
      .then(() => {
        setScores({ total: 0, personalBest: scores.personalBest });
        return addToServer(0, scores.personalBest);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function onCollectionSelected(collection) {
    setIsCollectionSelected(true)
    setSelectedCollection(collection);
    fetchFlashCard(collection)
      .then(response => {
        setFlashCard({ question: response.question, answer: response.answer });
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }


  useEffect(
    () => {
      checkForSession();
    },
    []
  );

  return (
    <div className="app">
      {error && <Status error={error} />}
      {loginStatus === LOGIN_STATUS.PENDING && <Loading className="login__waiting">Hold on! Loading...</Loading>}
      {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <LoginForm onLogin={onLogin} />}
      {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
        <div className="content">
          <Header username={username} onLogout={onLogout} />
          {isCollectionSelected ?
            <>
              <Scores scores={scores} />
              <Flashcard onCorrectAnswer={onAddScores} question={flashCard.question} answer={flashCard.answer} onInCorrectAnswer={onInCorrectAnswer} />
              <BackButton onBack={() => setIsCollectionSelected(false)} />
            </> : <Collections onCollectionSelected={onCollectionSelected} />
          }
        </div>
      )}
    </div>
  )
}

export default App
