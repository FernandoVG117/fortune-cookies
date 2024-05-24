import React from 'react';

const ShowPhrase = ({randomPhrase}) => { 

  return (
    <div className='container__phrase'>
        <h3 className='quote'>{randomPhrase.phrase}</h3>

        <h4 className="author">{randomPhrase.author}</h4>
    </div>
  )
}

export default ShowPhrase
