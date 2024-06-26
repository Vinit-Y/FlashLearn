import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

import { addSession, deleteSession, getSessionUser } from './sessions.js';
import { isValidUsername, scoresFor } from './users.js';
import { getCollections, getRandomFlashcard } from './flashcards.js';

app.use(cookieParser());
app.use(express.static('./dist'));
app.use(express.json());

// Sessions
app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? getSessionUser(sid) : '';
  if (!sid || !isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});

app.post('/api/session', (req, res) => {
  const { username } = req.body;
  if (!isValidUsername(username)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }
  if (username.toLowerCase() === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }
  const sid = addSession(username);
  res.cookie('sid', sid);
  res.json({ username });
});

app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? getSessionUser(sid) : '';
  if (sid) {
    res.clearCookie('sid');
  }
  if (username) {
    deleteSession(sid);
  }
  res.json({ username });
});


//Scores
app.get('/api/scores', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? getSessionUser(sid) : '';
  if (!sid || !isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const storedScores = scoresFor[username] || { total: 0, personalBest:0 };
  res.json({ username, storedScores });
});

app.post('/api/scores', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? getSessionUser(sid) : '';
  if (!sid || !isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const totalScores  = req.body;
  scoresFor[username] = totalScores;
  res.json({ username, totalScores });
});

//Flashcard
app.get('/api/flashcards', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? getSessionUser(sid) : '';
  if (!sid || !isValidUsername(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const collectionName = req.query.collection;
  const collectionData = getCollections()[collectionName];
  if (collectionData) {
    const randomFlashcard = getRandomFlashcard(collectionData);
    res.json(randomFlashcard);
  } else {
    res.status(404).json({ error: 'Collection-not-found' });
  }
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

