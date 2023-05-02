import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickEvent, deleteBot }) {
  return (
    <div style={{ display: "inline-block" }}>
      <div style={{ cursor: "pointer" }} key={bot.id} onClick={() => clickEvent(bot)}>
        <div>
          <img alt="oh no!" src={bot.avatar_url} style={{ borderRadius: "50%" }} />
        </div>
        <div>
          <div>
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div style={{ maxWidth: "150px" }}>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div>
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div style={{ textAlign: "center" }}>
              <button
                style={{ padding: "0", background: "none", border: "none", color: "red" }}
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
