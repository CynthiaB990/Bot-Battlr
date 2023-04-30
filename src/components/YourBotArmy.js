import React from "react";

function YourBotArmy({ botsListed }) {
  const botsListedArray = botsListed.map((bot) => {
    return (
      <div className="column" key={bot.id}>
        <div className="ui card">
          <div className="content">
            <div className="header">{bot.name}</div>
            <div className="meta">
              <span className="date">{bot.date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  console.log(botsListedArray);

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
          {botsListed}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
