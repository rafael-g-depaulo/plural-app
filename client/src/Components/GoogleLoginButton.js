import React from "react";

function GoogleLoginButton() {
  return (
    <form action={process.env.REACT_APP_SERVER_URL + '/api/auth/google'}>
      <button type="submit">Entrar com Google</button>
    </form>
  );
}

export default GoogleLoginButton;
