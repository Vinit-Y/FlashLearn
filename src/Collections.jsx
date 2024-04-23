
function Collections({ onCollectionSelected }) {
  return (
    <div className="collection_container">
      <h1 className="collection_title">Collections</h1>
      <div className="collection">
        <button className="collection_btn" onClick={() => onCollectionSelected('javascript')}>JavaScript</button>
        <button className="collection_btn" onClick={() => onCollectionSelected('java')}>Java</button>
      </div>
    </div>
  )
}

export default Collections;