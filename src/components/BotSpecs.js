import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot }) {
  return (
    <div style={{ margin: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "25%" }}>
          <img
            alt="oh no!"
            style={{ borderRadius: "50%", border: "3px solid black", width: "100%" }}
            src={bot.avatar_url}
          />
        </div>
        <div style={{ width: "50%", marginLeft: "1em" }}>
          <h2>Name: {bot.name}</h2>
          <p>
            <strong>Catchphrase: </strong>
            {bot.catchphrase}
          </p>
          <strong>
            Class: {bot.bot_class}
            <i style={{ marginLeft: "1em" }} className={botTypeClasses[bot.bot_class]} />
          </strong>
          <br />
          <div style={{ margin: "1em 0" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ textAlign: "center", width: "33%" }}>
                <i style={{ fontSize: "3em", color: "red" }} className="icon circular heartbeat" />
                <strong>{bot.health}</strong>
              </div>
              <div style={{ textAlign: "center", width: "33%" }}>
                <i style={{ fontSize: "3em", color: "yellow" }} className="icon circular lightning" />
                <strong>{bot.damage}</strong>
              </div>
              <div style={{ textAlign: "center", width: "33%" }}>
                <i style={{ fontSize: "3em", color: "blue" }} className="icon circular shield" />
                <strong>{bot.armor}</strong>
              </div>
            </div>
          </div>
          <button
            style={{ marginBottom: "1em" }}
            onClick={() =>
              console.log("connect this to a function that shows all bots")
            }
          >
            Go Back
          </button>
          <button
            onClick={() =>
              console.log(
                "connect this to a function that adds this bot to your bot army list"
              )
            }
          >
            Enlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
