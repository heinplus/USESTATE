import './App.css'
import { useState } from 'react' 

function App() {

  const [theme,setTheme]  = useState(false)

  console.log(theme)

  return (
    <>
      <div className={'bg-black text-white h-screen flex justify-center items-center' + 
        (theme ? 'bg-black text-white text-4xl h-screen flex justify-center items-center'  : ' text-4xl text-white bg-red-600 h-screen flex justify-center items-center')} >

          <button  onClick={()=>
            setTheme(!theme)
          } >SUPERCELL</button>
      </div>
    </>
  )
}

export default App