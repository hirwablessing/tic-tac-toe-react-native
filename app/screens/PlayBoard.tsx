import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ButtonProps, Props, Squares } from "../../utils/types";
import CustomButton from "../components/CustomButton";
import Square from "../components/Square";

function PlayBoard({}: Props): ReactElement {
  const players = [
    { id: 1, name: "James" },
    { id: 2, name: "Lisa" },
  ];

  const [turn, setTurn] = React.useState(players[0].id);
  const [won, setWon] = React.useState(false);

  let currentTurn = players.find((el) => el.id === turn)?.name;
  let winner = won && players.find((el) => el.id === turn)?.name;

  const props: ButtonProps = {
    bgColor: "#FFF",
    buttonVh: "5%",
    buttonVw: "7%",
    buttonPadding: 15,
    buttonWidth: 395,
    buttonHeight: 109,
    buttonBorderWidth: 2,
    buttonRadius: 24,
    title: `Turn: ${currentTurn}`,
  };

  const [squares, setSquares] = React.useState<Array<Squares>>([
    { id: 1, selected: null },
    { id: 2, selected: null },
    { id: 3, selected: null },
    { id: 4, selected: null },
    { id: 5, selected: null },
    { id: 6, selected: null },
    { id: 7, selected: null },
    { id: 8, selected: null },
    { id: 9, selected: null },
  ]);

  const winOptions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9],
  ];

  const nextTurn = () => {
    setTurn(turn === 1 ? 2 : 1);
  };

  const clickSquare = (id: number) => {
    if (won) {
      alert("Game completed");
      return;
    }

    let isPlayed = false;
    const tempSquares = squares.map((square) => {
      if (square.id === id) {
        if (!square.selected) {
          square.selected = turn;
          isPlayed = true;
        } else {
          alert("Choose another square");
        }
      }
      return square;
    });
    setSquares(tempSquares);

    isPlayed && nextTurn();
  };

  const isSubsetOf = (set: Array<any>, subset: Array<any>) => {
    let mixedSet = new Set([...set, ...subset]);
    let isSubset = mixedSet.size == set.length;
    return isSubset;
  };

  const resetGame = () => {
    setWon(false);
    let newArr = [...squares];
    let i = 0;
    for (i; i < newArr.length; i++) {
      newArr[i].selected = null;
    }

    setSquares(newArr);
  };

  const checkDraw = () => {
    //checking draw
    if (!won) {
      let draw = squares.every((sq) => sq.selected);
      if (draw) {
        setWon(true);
        alert("players draw");
      }
    }
  };

  const getWinnerPlayer = (playerWonFlag: Boolean) => {
    if (playerWonFlag) {
      setWon(true);
      alert(`player 2 (${winner})  won`);
    }
  };

  React.useEffect(() => {
    const checkWinner = () => {
      //checking player winning status
      let i = 0;
      for (i; i < players.length; i++) {
        const player = players[i];
        const playerSelections = squares.filter(
          (sq) => sq.selected === player.id
        );

        if (playerSelections.length < 3) continue;
        let playerWonFlag = false;
        let index = 0;

        for (index; index < winOptions.length; index++) {
          const option = winOptions[index];
          let newPlayerSelections = playerSelections.map((sel) => sel.id);
          if (isSubsetOf(newPlayerSelections, option)) {
            playerWonFlag = true;
          }
        }

        getWinnerPlayer(playerWonFlag);
      }

      checkDraw();
    };

    checkWinner();
  }, [squares]);

  return (
    <View style={styles.board}>
      <CustomButton {...props} title={`Turn: ${currentTurn}`} />
      {squares.map((square) => {
        return (
          <React.Fragment key={square.id}>
            <Square onClick={clickSquare} {...square}></Square>
          </React.Fragment>
        );
      })}
      <CustomButton {...props} title={`Winner: ${winner || "?"}`} />
      <View style={styles.board__reset}>
        <Text style={{ color: "#fff" }} onPress={resetGame}>
          New Game
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  board__reset: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4643D3",
    width: 168,
    height: 57,
    borderRadius: 29,
  },
});

export default PlayBoard;
