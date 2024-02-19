import React from "react";
import Single from "./Single";



export default function BotCollection({ bots, enlistedBots, setEnlistedBots, handleBotDischarge  }) {
  return (
    <div className="BotCollection ">
      <h2>The Bot Collection</h2>
      <ul className="bot-collection bg-red-200">
        {bots.map((bot) => (
          <li key={bot.id}>
            <Single
              bot={bot}
              enlistedBots={enlistedBots}
              setEnlistedBots={setEnlistedBots}
              handleBotDischarge={handleBotDischarge}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
