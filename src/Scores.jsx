
function Scores({ scores }) {

  return (
    <div className="content__scores">
      <h2 className='total_score'>Total Score: {scores.total}</h2>
      <h2 className='personal_best'>Personal Best Score: {scores.personalBest} </h2>
    </div>
  );
}

export default Scores;