import "./style.css";
import Swal from "sweetalert2";

const btn = document.querySelector('.search-btn');
const inputCoin = document.querySelector('#coin-input');
const titleCoin = document.querySelector('.coins-title');
const coinsList = document.querySelector('.coins');

btn.addEventListener('click', handleSearch);

function fetchAPI(coin) {
  const url = `https://api.exchangerate.host/latest?base=${coin}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.base !== coin.toUpperCase()) {
        throw new Error('Moeda não existente');
      }
      return data.rates;
    });
}

function handleSearch(event) {
  event.preventDefault();

  const coin = inputCoin.value.toUpperCase();

  if (!coin) {
    Swal.fire({
      icon: 'error',
      title: 'Ops',
      text: 'Moeda inválida'
    });
    return;
  }

  titleCoin.innerHTML = `Valores referentes a 1 ${coin}`;

  fetchAPI(coin)
    .then(renderCoins)
    .catch(error => {
      titleCoin.textContent = '';
      coinsList.innerHTML = '';

      Swal.fire({
        icon: 'error',
        title: 'Ops',
        text: error.message
      });
    });
}

function renderCoins(coins) {
  coinsList.innerHTML = '';

  const coinsArray = Object.entries(coins);

  coinsArray.forEach((coin) => {
    const [coinName, coinValue] = coin;

    const li = document.createElement('li');
    li.textContent = `${coinName} - ${coinValue.toFixed(3)}`;
    coinsList.appendChild(li);
  });
}
