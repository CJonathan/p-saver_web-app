import React from 'react';

const dataset8f = [
  {
    name: "Random Item",
    quantity: 1,
    isDone: true
  },
  {
    name: "Random Item",
    quantity: 1,
    isDone: true
  },
  {
    name: "X Special",
    quantity: 255,
    isDone: true
  },
  {
    name: "Random Item",
    quantity: 1,
    isDone: true
  },
];

const teamData = [
  {
    name: "Mew",
    lvl: "any",
    hp: "any",
    isDone: true
  },
  {
    name: "Pidgey",
    lvl: "any",
    hp: "233",
    isDone: true
  },
  {
    name: "Parasect",
    lvl: "any",
    hp: "any",
    isDone: true
  },
  {
    name: "Onix",
    lvl: "any",
    hp: "any",
    isDone: true
  },
  {
    name: "Tentacool",
    lvl: "any",
    hp: "any",
    isDone: true
  },
  {
    name: "Arbok",
    lvl: "any",
    hp: "any",
    isDone: true
  },
];

const bagSetup = [
  {
    name: "8F",
    quantity: 1,
    isDone: true
  },
  {
    name: "Any item",
    quantity: 89,
    isDone: true
  },
  {
    name: "Dire Hit",
    quantity: 58,
    isDone: true
  },
  {
    name: "Iron",
    quantity: 37,
    isDone: true
  },
  {
    name: "X Accuracy",
    quantity: 119,
    isDone: true
  },
  {
    name: "Water Stone",
    quantity: 62,
    isDone: true
  },
  {
    name: "Burn Heal",
    quantity: 50,
    isDone: true
  },
  {
    name: "Pokeball",
    quantity: 43,
    isDone: true
  },
  {
    name: "Antidote",
    quantity: 43,
    isDone: true
  },
  {
    name: "Protein",
    quantity: 62,
    isDone: true
  },
  {
    name: "PP Up",
    quantity: 60,
    isDone: true
  },
  {
    name: "Ice Heal",
    quantity: 50,
    isDone: false
  },
  {
    name: "Lemonade",
    quantity: 133,
    isDone: false
  },
  {
    name: "Great Ball",
    quantity: 50,
    isDone: true
  },
  {
    name: "Fresh Water",
    quantity: 34,
    isDone: false
  },
  {
    name: "TM 01",
    quantity: "Any",
    isDone: true
  },
];

function renderBagData(item) {
  return item.map((e, i) => {
    return (
      <div className="ui list" key={i}>
        <div className={"ui segment " + (e.isDone ? 'done' : '')}>
          <div className="ui item">
            <div className="header">{e.name}</div>
            {e.quantity}
          </div>
        </div>

      </div>
    );
  });
}

function renderTeamData() {
  return teamData.map((e, i) => {
    return (
      <div className="ui list" key={i}>
        <div className={"ui segment " + (e.isDone ? 'done' : '')}>
          <div className="item">
            <div className="header">{e.name}</div>
            <div className="ui list" key={e.lvl}>
              <div className="item">
                Level: {e.lvl}
              </div>
              <div className="item">
                Current hp: {e.hp}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

const UsefulLinks = () => {

  return (
    <div>
      <div className="ui segment">
        <h2 className="ui header">8F
          <div className="sub header">
            Bag setup
          </div>
        </h2>
        {renderBagData(dataset8f)}
      </div>
      <div className="ui segment">
        <h2 className="ui header">Team
          <div className="sub header">
            Team setup
          </div>
        </h2>
        {renderTeamData()}
      </div>
      <div className="ui segment">
        <h2 className="ui header">Bag setup
          <div className="sub header">
            before executing
          </div>
        </h2>
        {renderBagData(bagSetup)}
      </div>
    </div>
  );
};

export default UsefulLinks;