function Header({ username, onLogout }) {
  return (
    <div className="content__header">
      <h1>Hello, {username} !</h1>
      <button className="logout_btn" onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Header;