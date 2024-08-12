import { useState } from "react";
import styled from "styled-components";

const TikTakToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false); 

  const Box = (index, color, borderRadius) => {
    return (
      <Button
        color={color}
        borderRadius={borderRadius}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </Button>
    );
  };

  const handleClick = (index) => {
    if (board[index] || winner || isDraw) return; 
    const newBoard = [...board];
    newBoard[index] = isXturn ? "X" : "O";
    setBoard(newBoard);
    setIsXturn(!isXturn);
    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    } else if (!newBoard.includes(null)) {
      setIsDraw(true);
    }
  };

  const checkWinner = (newBoard) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return combination[i];
      }
    }
    return null;
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXturn(true);
    setWinner(null);
    setIsDraw(false); 
  };

  return (
    <>
      <Container>
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
        </div>

        <div className="DashBox">
          <ContentDiv>
            {Box(0, "#F9D459", "30px 0 0 0")}
            {Box(1, "#F34954", "0")}
            {Box(2, "#F34954", "0 30px 0 0 ")}
            {Box(3, "#F34954", "0")}
            {Box(4, "#F9D459", "0")}
            {Box(5, "#F34954", "0")}
            {Box(6, "#F34954", " 0 0 0 30px")}
            {Box(7, "#F34954", "0")}
            {Box(8, "#F9D459", " 0 0 30px 0 ")}
          </ContentDiv>
        </div>
        {winner && (
          <>
            <div className="winnerdiv">{winner} is the Winner</div>
            <RestartButton onClick={restartGame}>Restart Game</RestartButton>
          </>
        )}
        {isDraw && (
          <>
            <div className="drawdiv">It's a Draw!</div>
            <RestartButton onClick={restartGame}>Restart Game</RestartButton>
          </>
        )}
      </Container>
    </>
  );
};

export default TikTakToe;

const Button = styled.button`
  all: unset;
  font-family: "Baloo Bhaijaan 2", sans-serif;
  font-size: 70px;
  color: white;
  background-color: ${({ color }) => color};
  border: 2px solid white;
  height: 100px;
  width: 100px;
  border-radius: ${({ borderRadius }) => borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);

`;

const ContentDiv = styled.div`
  display: flex;
  max-width: 310px;
  flex-wrap: wrap;
  gap: 0px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 1120px;
  background-image: url("./bg-image.png");
  background-size: cover;
  position: relative;
  border-radius: 40px;
  flex-direction: column;
  gap: 30px;
  cursor: pointer;
  .logo {
    position: absolute;
    top: 50px;
    left: 50px;
  }
  .DashBox {
    height: 330px;
    width: 330px;
    border-radius: 40px;
    background-color: white;
    border: 3px dashed #f34954;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .winnerdiv,
  .drawdiv {
    padding: 20px 80px;
    color: #f34954;
    background-color: #f9d459;
    font-size: 25px;
    font-weight: 700;
    font-family: "Inter", sans-serif;
    border-radius: 80px;
  }
`;

const RestartButton = styled.button`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: #f34954;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  
`;
