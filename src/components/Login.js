import { Button } from '@material-ui/core';
import React from 'react';
import styled from "styled-components";
import { auth, provider } from '../firebase';

function Login() {

  const signIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }

  return <LoginContainer>
      <LoginInnerContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nice_Logo_1.svg/1280px-Nice_Logo_1.svg.png" alt="" />
        <h1>Prisijunkite prie mūsų!</h1>
        <p>Naujas pokalbių kambarys</p>
        <Button type="submit" onClick={signIn}>Prsisijungti su Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

> img {
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
}

> button {
  margin-top: 50px;
  text-transform: inherit !important;
  background-color: #ff0000 !important;
  color: white;
}
`;