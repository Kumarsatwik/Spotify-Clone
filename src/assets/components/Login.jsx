import React from "react";
import styled from "styled-components";

const Login = () => {
  const handleClick = () => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUrl = "http://localhost:5173/";
    const apiUrl = "https://account.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    const auth = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      "%20"
    )}&response_type=token`;
    // window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
    //   "%20"
    // )}&response_type=token`;
    // console.log(auth);
    window.location.href = auth;
  };
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt=""
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
  }
`;
