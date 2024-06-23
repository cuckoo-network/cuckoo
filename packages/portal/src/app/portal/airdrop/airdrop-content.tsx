"use client";

import {AuthContext, AuthProvider, IAuthContext, TAuthConfig, TRefreshTokenExpiredEvent} from "react-oauth2-code-pkce"
import {useContext} from "react";

const authConfig: TAuthConfig = {
  clientId: 'SjhJM1A1RUlFNzg3N1g5cUp5YnE6MTpjaQ',
  authorizationEndpoint: 'https://twitter.com/i/oauth2/authorize',
  tokenEndpoint: 'http://localhost:4134/twitter/2/oauth2/token',
  redirectUri: 'http://localhost:3000/portal/airdrop',
  scope: 'users.read tweet.read',
  state: "don't-care",
  decodeToken: true,
  autoLogin: false,
  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => {
    event.logIn(undefined, undefined, "popup");
  },
}


const AirdropInner = () => {
  const { tokenData, token, logOut, idToken, error, logIn }: IAuthContext = useContext(AuthContext)

  if (error) {
    return (
      <>
        <div style={{ color: 'red' }}>An error occurred during authentication: {error}</div>
        <button type='button' onClick={() => logOut()}>
          Log out
        </button>
      </>
    )
  }

  return (
    <>
      {token ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            color: 'grey',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              padding: '10px',
              margin: '10px',
              border: '1px solid white',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>Welcome, John Doe!</p>

            <button type='button' style={{ width: '100px' }} onClick={() => logOut()}>
              Log out
            </button>

            <p>Use this token to authenticate yourself</p>
            <pre
              style={{
                width: '400px',
                margin: '10px',
                padding: '5px',
                border: 'black 2px solid',
                wordBreak: 'break-all',
                whiteSpace: 'break-spaces',
              }}
            >
              {token}
            </pre>

            <pre>
              id token: {idToken}
            </pre>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            color: 'grey',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              padding: '10px',
              margin: '10px',
              border: '1px solid white',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>Please login to continue</p>

            <button type='button' style={{ width: '100px' }} onClick={() => logIn()}>
              Log in
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export const AirdropContent = () => {
  return (
    <AuthProvider authConfig={authConfig}>
      <AirdropInner/>
    </AuthProvider>
  )
}
