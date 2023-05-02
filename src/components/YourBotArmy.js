import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  //your bot army code here...
  const botArmy = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={removeBot}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    <div style={{ background: "olive" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1000px" }}>
          {/*...and here...*/}
          {botArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
