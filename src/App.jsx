import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

import './App.css'

function App() {


  return(
    <>
      <Navbar  appName = "TextUtils"  about = "About TextUtils"></Navbar>
      <div className="container">
        <TextForm heading = "Enter the text to analyze:"></TextForm>
      </div>
    </>
  )
}

export default App;
