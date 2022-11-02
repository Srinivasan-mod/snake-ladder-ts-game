import React, { useState } from "react";
import "./App.css";
import Dice from "./components/Dice/Dice";
import Popup from "./components/Popup/Popup";


interface playerInput {
  playerName: string;
  icon: string;
}

let arrOfAllInput: playerInput[] = [];
function App() {
  const [startGame, setstartGame] = useState(false);
  const [data, setData] = useState(true); //FirstPopup
  const [popup, setPopup] = useState(false); //SecondPopup
  const [player, TotalPlayers] = useState(0); //TotalPlayerCount
  const [name, setName] = useState<string>(""); //GettingNameFromUser
  const [iconReturn, setIconReturn] = useState<string>(""); //GettingIconFromUser
  const [arrayOfPlayersList, setArrayOfPlayersList] = useState<number[]>([]); //CreatingArrayOfPlayersList
  const [arrOfObj, setArrOfObj] = useState<any>([]);//sending Obj informaton to dice component
  const childToParent = (childdata: number) => {
    let temporaryArrayForStore: number[] = [];
    for (let i = 0; i < childdata; i++) {
      temporaryArrayForStore.push(i);
    }
    setArrayOfPlayersList(temporaryArrayForStore);
    setData(false);
    TotalPlayers(childdata);
    setPopup(true);
  };
  function inputValue() {
    let objOfEachInput: playerInput = {
      playerName: name,
      icon: iconReturn,
    };
    arrOfAllInput.push(objOfEachInput);
    setArrOfObj(arrOfAllInput);
  }

  const submit = () => {
    setPopup(false);
    setstartGame(true);
  };

  return (
    <div className="App">
      <Popup trigger={data}>
        <div className="wrap">
        <h1 className="title-first-Popup">
          Welcome TO GreatGiriKalan Snake & Ladder Game
        </h1>
        <p id="playersposition-tag">Select Number Of Players</p>
        <button id="twoplayer-btn" onClick={() => childToParent(2)}>
          Two Players
        </button>

        <button id="threeplayer-btn" value={3} onClick={() => childToParent(3)}>
          Three Players
        </button>

        <button id="fourplayer-btn" value={4} onClick={() => childToParent(4)}>
          Four players
        </button>
        </div>
      </Popup>
      <Popup trigger={popup}>
        <h1 className="title-first-Popup">
          Welcome TO GreatGiriKalan Snake & Ladder Game
        </h1>
        {/* <p className="Note">Kindly Don't Use Same Icon!!</p> */}
        <div className="wholeComponent">
          {arrayOfPlayersList.map((player) => {
            return (
              <div className="eachComponent">
                <label className="wordName">Player-{player + 1} Name</label>
                <input
                  className="nameInputBox"
                  placeholder="Enter Your Name"
                  required={true}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                ></input>
                <label className="wordIcon">Select Your Icon</label>
                <select
                  className="dropDownInput"
                  onChange={(e: any) => {
                    setIconReturn(e.target.value);
                  }}
                >
                  <option value="1">Icon</option>
                  <option value="🦚">🦚</option>
                  <option value="🦅">🦅</option>
                  <option value="🦋">🦋</option>
                  <option value="🐦">🐦</option>
                  <option value="🦇">🦇</option>
                  <option value="🐝">🐝</option>
                  <option value="🐥">🐥</option>
                  <option value="🦆">🦆</option>
                  <option value="🐧">🐧</option>
                  <option value="🦉">🦉</option>
                  <option value="🐓">🐓</option>
                  <option value="🐌">🐌</option>
                </select>
                <button className="save-btn" onClick={inputValue}>
                  save
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={submit}>Sumit</button>
      </Popup>
      {startGame ? (
        <Dice childToParent={player} arrOfAllInput={arrOfObj} />
      ) : null}
    </div>
  );
}

export default App;
