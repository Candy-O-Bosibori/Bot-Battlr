import { useState } from 'react'

import './App.css'

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]); 

  useEffect(() => {
    // Fetch data from the db.json data created 
    fetch('https://my-json-server.typicode.com/martinwakaba/Bot-Battlr/bots')
    .then((resp) => resp.json())
    .then((data) => setBots(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);

const releaseFromArmy = (updatedEnlistedBots) => {

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
        releaseFromYourBotArmy={releaseFromArmy}/> 

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
