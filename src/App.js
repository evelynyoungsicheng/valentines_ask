import { useState } from 'react';
import ask from './ask.jpeg';
import yes from './yes.jpeg';
import success from './success.jpeg';
import './App.css';
{/* COPILOT INSTRUCTIONS 
Create a valentine's day card using React. The card should have a heart shape and a message that says "Will you be my Valentine?".
Then two button CTA's one that says "Yes" and another that says "No". When the user clicks on the "Yes" button, it should change the h1 to say "I love you! I knew you would say yes!", also change the img to another one(yes.jpeg) and when the user clicks on the "No" button, the "yes" button should grow double in size.
The button should be in its normal position first, Once the user clicks the "No" button, the No button should change its location randomly on the card and also change the text to a different message each time, after 5 hovers the "No" button should disappear and the "Yes" button should be big enough to fill the card.
*/}

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
  const [noButtonPosition, setNoButtonPosition] = useState({}); //button position should be its original position beside the yes button

  function handleNoClick() {
    document.querySelector('img'). src = ask; // change the image back to the original one when the no button is clicked  
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const buttonWidth = 100; // approximate width of the button
    const buttonHeight = 40; // approximate height of the button

    const maxX = cardRect.width - buttonWidth;
    const maxY = cardRect.height - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoButtonPosition({ left: randomX, top: randomY });
    setNoCount(noCount + 1);
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
      <h1>I love you! I knew you would say yes! <br /> Happy Valentine's Day! ❤️</h1>
    </div>
  ) : (
    <div>
      <img src={success} className="success" alt="success" />
      <h1>pookie love ❤️, will you be my valentine?</h1>
    <div className="buttons">
      <button className="yes" 
      onClick={handleYesClick} style={{ transform: `scale(${noCount >= 5 ? 2 : 1})` }}>
        Yes
      </button>
      {noCount < 9 && (
        <button className="no" onClick={handleNoClick} >
          {getNoButtonText()}
        </button>
      )}
    </div>
    </div>
  )}
  </div>
  </div>
);

  function handleYesClick() {
    setYesPressed(true);
  }
}

export default App;
