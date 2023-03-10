import store from "./store";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { bugAdded, bugResolved } from "./actions";
import Home from "./components/Home";
import log from './IMG_1520.mp4'
import './App.css'

function App() {
  const state = useRef(store.getState())
  const isMount = useRef(false)
  useEffect(()=>{
    if(isMount.current === false){
      store.subscribe(()=>{
        console.log(store.getState())
      })
      return ()=>{
        isMount.current = true;
      }
    }
    
  }, [])
  let x = 0;
  const changed = () => {
    // store.dispatch(bugAdded('what the fuck'))
    bugAdded('what the fuck')
  }
  const resolved = () => {
    bugResolved(1)
  }
  const appStyle = {
    minHeight: '100vh',
    position: 'relative'
  }
  
  return (
    <div className="App" style={appStyle}>
      <video muted autoPlay loop style={{width: '100%',position:'absolute', top: '0', left: '0', bottom:'0', zIndex: '0'}} src={log} className='img-fit'></video>
      <Home/>
    </div>
  );
}

export default App;
