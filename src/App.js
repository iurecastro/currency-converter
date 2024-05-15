// Importa a biblioteca React e o componente CurrencyConverter.
import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Renderiza o componente CurrencyConverter */}
        <CurrencyConverter />
      </header>
    </div>
  );
}

export default App;
