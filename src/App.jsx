import './index.css'
import ShowButton from "./components/ShowButton"
import ShowPhrase from "./components/ShowPhrase"
import randomArr from "./components/services/randomArr"
import arr from './utils/phrasesEn.json'
import arrImg from "./utils/images.json"
import { useState } from 'react'

function App() {

  const quote = randomArr(arr)
  const [randomPhrase, setRandomPhrase] = useState(quote)

  const photo = randomArr(arrImg);
  const [randomImage, setRandomImage] = useState(photo)

  const appStyle = {
    backgroundImage: `url(${randomImage})`,
  }

  return (
    <div className='app' style={appStyle}>
      <h1 className='app__title'>Fortune cookies</h1>
      <ShowButton
        setRandomPhrase={setRandomPhrase}
        setRandomImage={setRandomImage}
      />
      <ShowPhrase 
        randomPhrase={randomPhrase}
      />
    </div>
  )
}

export default App
