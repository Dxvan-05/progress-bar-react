import { useState } from 'react'
import { createContext } from 'react';
import Title from './components/Title.jsx';
import ProgressBar from './components/ProgressBar.jsx'
import Button from './components/Button.jsx';
import TextBox from './components/TextBox.jsx';
import './App.css'


export const ProgressContext = createContext();

function App() {

  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState(10);

  return (
    <ProgressContext.Provider value={{progress, setProgress, steps, setSteps}}>

      <Title />
      <ProgressBar />
      <TextBox />
      <div id='button-wrapper'>
        <Button text={"Decrement"} stepBy={-steps}/>
        <Button text={"Increment"} stepBy={steps}/>
      </div>

    </ProgressContext.Provider>
  )
}

export default App
