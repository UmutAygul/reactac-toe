import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "KAZANAN O" : "KAZANAN X"}</span>}
      {draw && <span className="win-text">Oyun Berabere</span>}

      <span className="win-history">
        X'in skoru : &nbsp; {winCount.X}
        <br />
        O'nun skoru: {winCount.O}
      </span>

      <button className="btn" onClick={restartGame}>
        Tekrar Oyna
      </button>
      <button className="btn-2" onClick={clearHistory}>
        Skoru Sıfırla
      </button>
    </div>
  );
}

export default EndGame;
