function BackButton({ onBack }) {
  return (
    <div className="backBtn_container">
      <button className="backBtn" onClick={onBack}>Back to Collection</button>
    </div>
  )
}

export default BackButton;