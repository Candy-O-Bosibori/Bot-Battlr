import { useState,  useEffect } from 'react'


import BotArmy from './componenets/Botarmy';
import BotCollection from './componenets/Collection';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]); 

  useEffect(() => {
    // Fetch data from the db.json data created 
    fetch('http://localhost:3000/bots')
    .then((resp) => resp.json())
    .then((data) => setBots(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);

const removeFromArmy = (updatedEnlistedBots) => {

  setEnlistedBots(updatedEnlistedBots);
};

function handleBotDischarge(bot) {
  // removee the bot from enlistedBots in the frontend
  const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
  setEnlistedBots(updatedEnlistedBots);
}
 

  return (
    <div className="App">
       <BotArmy
        enlistedBots={enlistedBots} 
        releaseFromYourBotArmy={removeFromArmy}/> 

      <BotCollection
       bots={bots} 
       enlistedBots={enlistedBots} 
       setEnlistedBots={setEnlistedBots}
       handleBotDischarge={handleBotDischarge}
      />
      
      
    </div>
  );

  
}

export default App
