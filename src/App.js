import { useState } from 'react';
import ask from './ask.jpeg';
import yes from './yes.jpeg';
import success from './success.png';
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Think about it!",
  "Don't be shy!",
  "I know you want to say yes!",
  "Please say yes!",
  "I promise I'll be the best Valentine ever!",
  "I can't imagine my life without you!",
  "You make my heart skip a beat!",
];  

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  function handleNoClick() {
    document.querySelector('img').src = ask;
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const buttonWidth = 100;
    const buttonHeight = 40;

    const maxX = cardRect.width - buttonWidth;
    const maxY = cardRect.height - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    const noButton = document.querySelector('.no');
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    
    setNoCount(noCount + 1);
  }

  function handleYesClick() {
    setYesPressed(true);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="App">
      <div className="card">       
        {yesPressed ? (
          <div>
            <img src={yes} className="yes" alt="yes" />
            <h1>I love you! <br /> I knew you would say yes! <br /> Happy Valentine's Day! ❤️</h1>
          </div>
        ) : (
          <div>
            <img src={success} className="success" alt="success" />
            <h1>pookie love ❤️ <br /> will you be my valentine?</h1>
            <div className="buttons">
              <button className="yes" 
                onClick={handleYesClick} 
                style={{ transform: `scale(${noCount >= 5 ? 2 : 1})` }}>
                Yes
              </button>
              {noCount < 9 && (
                <button className="no" onClick={handleNoClick}>
                  {getNoButtonText()}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
