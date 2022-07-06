import React from 'react';
import styles from './App.module.scss';
import Chess from "./components/chessGame/Chess";

function App() {
  return (
    <div className={styles.null}>
      <Chess/>
    </div>
  );
}

export default App;
