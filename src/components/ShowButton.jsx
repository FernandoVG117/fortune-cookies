import React from 'react';
import arr from '../utils/phrasesEn.json';
import arrImg from '../utils/images.json';
import randomArr from './services/randomArr';

const ShowButton = ({setRandomPhrase, setRandomImage}) => {

    const handleClick = () => {
        const randomPhrase = randomArr(arr);
        const randomImage = randomArr(arrImg);

        setRandomPhrase(randomPhrase);
        setRandomImage(randomImage);

    };

  return (
    <div className='container__button'>
      <button onClick={handleClick} className='app__button'>Try my luck</button>
    </div>
  );
};

export default ShowButton
