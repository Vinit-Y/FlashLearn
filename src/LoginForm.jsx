import { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (username) {
      onLogin(username);
    }
    setUsername('');
  }

  return (
    <div className="login">
      <h1 className='login_h1'>FlashLearn</h1>
      <form className="login__form" action="#/login" onSubmit={onSubmit}>
        <label htmlFor="login__username">
          <span>Username:</span>
          <input id="login__username" className="login__username" placeholder='Enter Username.' required value={username} onChange={onChange} />
        </label>
        <button className="login__button" type="submit">Login</button>
      </form>
    </div>
  );

}

export default LoginForm;