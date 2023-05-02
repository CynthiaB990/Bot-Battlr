import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    );
  });
  
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;

