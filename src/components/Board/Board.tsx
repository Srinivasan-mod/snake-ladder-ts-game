import React from "react";
import "./Board.css";

const Board = (props: any) => {
  //props.player
  // console.log(props.player, "h");

  let cellStorage: number[] = [];
  for (let totalRow = 100; totalRow >= 1; totalRow -= 10) {
    if (totalRow % 20 === 0) {
      for (
        let totalColumn = totalRow;
        totalColumn > totalRow - 10;
        totalColumn--
      ) {
        cellStorage.push(totalColumn);
      }
    } else {
      for (let box = totalRow - 9; box <= totalRow; box++) {
        cellStorage.push(box);
      }
    }
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

  function snakeLadderDeclaration(eachElement: number) {
    if (snakeAndLadder.snake.snakeFrom.includes(eachElement)) {
      return (
        "🐍" +
        snakeAndLadder.snake.snakeTo[
          snakeAndLadder.snake.snakeFrom.indexOf(eachElement)
        ].toString()
      );
    } else if (snakeAndLadder.ladder.ladderFrom.includes(eachElement)) {
      return (
        "🚀" +
        snakeAndLadder.ladder.ladderTo[
          snakeAndLadder.ladder.ladderFrom.indexOf(eachElement)
        ].toString()
      );
    }
  }

  function placingPlayer(playerDetails: any, cellNumber: number) {
    if (playerDetails.playerPosition === cellNumber) {
      return <p className="position">{playerDetails.PlayerIcon}</p>;
    }
  }

  return (
    <>
      <div className="Board">
        {cellStorage.map((eachElement) => (
          <div className="cell">
            <div className="CellNumber">{eachElement}</div>
            {props.player.map((element: any) =>
              placingPlayer(element, eachElement)
            )}

            <div className="SnakeOrLadder">
              {snakeLadderDeclaration(eachElement)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
