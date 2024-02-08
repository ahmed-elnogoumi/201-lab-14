'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

const AppState = {
     load_vote_data:function() {
        localStorage.getItem("Product");
    }
}

var voteChart = new Chart(document.getElementById('chart'), {
    type: 'bar', // Change to 'line', 'pie', etc., as needed
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'], // Your labels here
        datasets: [{
            label: 'Dataset Label', // Legend label
            data: [10, 20, 30], // Your data here
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Border color
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

renderChart();
