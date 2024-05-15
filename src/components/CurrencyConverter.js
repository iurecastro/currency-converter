// Importa as bibliotecas necessárias: React e Axios.
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  // Define os estados do componente.
  const [amount, setAmount] = useState(1);  // Valor a ser convertido.
  const [fromCurrency, setFromCurrency] = useState('GBP');  // Moeda de origem.
  const [toCurrency, setToCurrency] = useState('BRL');  // Moeda de destino.
  const [currencies, setCurrencies] = useState([]);  // Lista de todas as moedas disponíveis.
  const [result, setResult] = useState(null);  // Resultado da conversão.

  // Hook useEffect para buscar a lista de moedas assim que o componente é montado.
  useEffect(() => {
    // Faz uma requisição GET à API para obter as taxas de câmbio mais recentes.
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        // Define o estado 'currencies' com as moedas obtidas da API.
        setCurrencies(Object.keys(response.data.rates));
      })
      .catch(error => console.error('Error fetching currency data:', error));  // Trata possíveis erros.
  }, []);  // O array vazio faz com que este useEffect execute apenas uma vez, quando o componente é montado.

  // Função que realiza a conversão de moedas.
  const convertCurrency = () => {
    // Faz uma requisição GET à API para obter a taxa de câmbio da moeda de origem.
    axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => {
        // Obtém a taxa de câmbio para a moeda de destino.
        const rate = response.data.rates[toCurrency];
        // Calcula o resultado da conversão e atualiza o estado 'result'.
        setResult((amount * rate).toFixed(2));
      })
      .catch(error => console.error('Error fetching conversion rate:', error));  // Trata possíveis erros.
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        {/* Campo de entrada para o valor a ser convertido */}
        <input 
          type="number" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
        />
        {/* Dropdown para selecionar a moeda de origem */}
        <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        {/* Dropdown para selecionar a moeda de destino */}
        <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        {/* Botão para realizar a conversão */}
        <button onClick={convertCurrency}>Convert</button>
      </div>
      {/* Exibe o resultado da conversão, se disponível */}
      {result && <h3>{amount} {fromCurrency} = {result} {toCurrency}</h3>}
    </div>
  );
};

export default CurrencyConverter;
