import React from "react";

function FacebookLoginButton() {
  return (
    <form action={process.env.REACT_APP_SERVER_URL + '/api/auth/facebook'}>
      <button type="submit">Entrar com Facebook</button>
    </form>
  );
}

export default FacebookLoginButton;
