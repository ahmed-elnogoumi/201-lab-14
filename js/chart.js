'use strict';

let canvasElem = document.getElementById('chart');
let state = new AppState();

function renderChart() {
  state.loadItems(); // Load vote data from localStorage
  let data = {
    labels: state.allProducts.map(product => product.name),
    datasets: [{
      label: '# of Clicks',
      data: state.allProducts.map(product => product.timesClicked),
      borderWidth: 1
    }, {
      label: '# of Views',
      data: state.allProducts.map(product => product.timesShown),
      borderWidth: 1
    }]
  };

  let config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  let myChart = new Chart(canvasElem, config);
}

renderChart();