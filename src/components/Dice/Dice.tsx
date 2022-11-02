import React, { useState } from "react";
import "./Dice.css";
import Board from "../Board/Board";


interface childToParentdata {
  childToParent: number;
  arrOfAllInput: any;
}

let PositionOfPlayers: number[] = [];
let count = 0;
let Name: string[] = [];
let Winners: string[] = [];
let stopDice: number[] = [];

const Dice = (props: childToParentdata) => {
  const [win,setWin] = useState('')
  let totalMembers = props.childToParent;
  let input = props.arrOfAllInput;
  for (let i = 0; i < totalMembers; i++) {
    PositionOfPlayers.push(0);
    let name = String(`Enter Player-${i + 1} Name`);
    Name.push(name);
  }
  const [prevRoll, currentRoll] = useState(0);
  function roll() {
    if (players[count].playerPosition === 100) {
      stopDice.push(count);
      let uniqueNumb = [...new Set(stopDice)];
      if (totalMembers === uniqueNumb.length) {
        alert("Game Over");
      }
    }
    let number = Math.floor(Math.random() * 6 + 1);
    currentRoll(number);
    PlayerResultCalculation(number);
  }

  // 🐍 🚀
  let snakeAndLadder = {
    snake: {
      snakeFrom: [99, 96, 92, 61, 56, 41, 16],
      snakeTo: [12, 36, 67, 44, 37, 30, 3],
    },
    ladder: {
      ladderFrom: [84, 76, 66, 35, 26, 21, 2],
      ladderTo: [93, 95, 98, 55, 77, 60, 36],
    },
  };

  let players: any = [];
  const makingPlayers = (num: number) => {
    for (let eachPlayer = 0; eachPlayer < num; eachPlayer++) {
      players.push({
        playerNumber: eachPlayer + 1,
        PlayerIcon: input[eachPlayer].icon,
        playersName: input[eachPlayer].playerName,
        playerPosition: PositionOfPlayers[eachPlayer],
      });
    }
  };
  makingPlayers(totalMembers);

 

  const PlayerResultCalculation = (number: number) => {
    PositionOfPlayers[count] += number;

    for (let runLoop = 0; runLoop <= 6; runLoop++) {
      if (
        PositionOfPlayers[count] === snakeAndLadder.snake.snakeFrom[runLoop]
      ) {
        PositionOfPlayers[count] = snakeAndLadder.snake.snakeTo[runLoop];
      } else if (
        PositionOfPlayers[count] === snakeAndLadder.ladder.ladderFrom[runLoop]
      ) {
        PositionOfPlayers[count] = snakeAndLadder.ladder.ladderTo[runLoop];
      }
    }
    if (PositionOfPlayers[count] >= 94) {
      if (PositionOfPlayers[count] < 100) {
        PositionOfPlayers[count] = PositionOfPlayers[count] + 0;
      } else if (PositionOfPlayers[count] === 100) {
        Winners.push("player" + (count + 1));
        winnersPTag(Winners)
        PositionOfPlayers[count] = 100;
      } else if (PositionOfPlayers[count] > 100) {
        PositionOfPlayers[count] = PositionOfPlayers[count] - number;
      }
    } else {
      PositionOfPlayers[count] = PositionOfPlayers[count] + 0;
    }
    count++;
    if (count > totalMembers - 1) {
      count = 0;
    }
  };
  const winnersPTag=(Winners:any)=>{
    Winners.map((e: any) => {
      setWin(e)
    })
  }

  return (
    <div className="diceeee">
      <button className="Dice-btn" onClick={roll}>
        Dice
      </button>
      <div className="board-information">
        <p className="output">{prevRoll}</p>
        <p className="playerTurn">
          player -{count + 1}
          {players[count].playerName}
        </p>
        <div className="PlayerDetails">
          {}
          {players.map((data: any) => {
            return (
              <div className="eachPlayer">
                <p>
                  Player-{data.playerNumber} Name:{data.playersName}
                </p>
                <p id="pi">Player Icon : {data.PlayerIcon}</p>
                <p id="pp">Player Position:{data.playerPosition}</p>
              </div>
            );
          })}

          <div id="win">
            Winners
            <p>
              {win}
            </p>
          </div>
        </div>
      </div>

      <Board player={players} />
    </div>
  );
};

export default React.memo(Dice);
