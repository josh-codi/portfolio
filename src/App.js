import store from "./store";
import { useEffect } from "react";
import { useRef } from "react";
import Home from "./components/Home";
import log from './IMG_1520.mp4'
import './App.css'

function App() {
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
