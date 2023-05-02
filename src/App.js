import React, { useEffect, useState } from "react";
import './App.css';
import BotCollection from './components/BotCollection'
import YourBotArmy from './components/YourBotArmy'
import BotSpecs from './components/BotSpecs'

function App() {
  const [botCollection, setBotCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [collectionVisible, setCollectionVisible] = useState(true);
  const [botSpecs, setBotSpecs] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8002/bots`)
      .then(res => res.json())
      .then(bot => {
        setBotCollection(bot);
        setFilteredCollection(bot);
      });
  }, []);

  const addToArmy = (bot) => {
    const newCollection = filteredCollection.filter(
      (card) => card.bot_class !== bot.bot_class
    );
    setFilteredCollection(newCollection);
    setBotArmy([...botArmy, bot]);
    setCollectionVisible(true);
  };

  const removeFromArmy = (bot) => {
    const newArmy = botArmy.filter((card) => card.id !== bot.id);
    const armyClasses = newArmy.map((bot) => bot.bot_class);
    const newCollection = botCollection.filter((bot) => {
      console.log("Filter:", !armyClasses.includes(bot.bot_class));
      return !armyClasses.includes(bot.bot_class);
    });
    console.log("newCollection", newCollection);

    setBotArmy(newArmy);
    setFilteredCollection(newCollection);
  };

  const removeBotPermanently = (bot) => {
    let newCollection = botCollection.filter((card) => card !== bot);
    let newFilteredCollection = filteredCollection.filter(
      (card) => card !== bot
    );
    let newArmy = botArmy.filter((card) => card !== bot);

    setBotCollection(newCollection);
    setFilteredCollection(newFilteredCollection);
    setBotArmy(newArmy);

    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  const displayBotSpecs = (bot) => {
    setCollectionVisible(false);
    setBotSpecs(bot);
  };

  const displayBotCollection = () => {
    setCollectionVisible(true);
  };

  return (
    <div>
      <YourBotArmy
        bots={botArmy}
        action={removeFromArmy}
        removeCard={removeBotPermanently}
      />
      {collectionVisible ? (
        <BotCollection
          botCollection={filteredCollection}
          action={displayBotSpecs}
          removeCard={removeBotPermanently}
        />
      ) : (
        <BotSpecs bot={botSpecs} back={displayBotCollection} enlist={addToArmy} />
      )}
    </div>
  );
}

export default App;
