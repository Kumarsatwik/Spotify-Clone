import React, { useEffect } from "react";
import "./App.css";
import Login from "./assets/components/Login";
import {useStateProvider} from "./utils/StateProvider";
import { reducerCases } from "./utils/Constant";
import Spotify from "./assets/components/Spotify";
function App() {
  
  const [{token},dispatch]=useStateProvider();

  useEffect(() => {  
    const hash= window.location.hash
    if(hash){
      const token=hash.substring(1).split("&")[0].split('=')[1];
      dispatch({type:reducerCases.SET_TOKEN,token});
    }
  },[token,dispatch]);

  return (
    <>
    {
      token ? <Spotify/> : <Login/>
    }
    </>
  );
}

export default App;
