function Flashcard({ onCorrectAnswer, question, answer, onInCorrectAnswer }) {


  function handleCorrectBtn() {
    onCorrectAnswer();
  }

  function handleInCorrectBtn() {
    onInCorrectAnswer();
  }

  return (
    <div className="mainDiv">
      <div className='flashcard__container'>
        <div className='flashcard__inner'>
          <div className='flashcard__front'>
            <div className='front__question'><strong>Question</strong>  <p>{question}</p></div>
          </div>
          <div className='flashcard__back'>
            <div className='back__answer'><strong>Answer</strong>
              <p>{answer}
              </p></div>
            <div className="answer__buttons">
              <button className='correct__btn' onClick={handleCorrectBtn}>Correct</button>
              <button className='incorrect__btn' onClick={handleInCorrectBtn}>Incorrect</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Flashcard;