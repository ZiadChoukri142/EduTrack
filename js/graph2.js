document.addEventListener('DOMContentLoaded', (event) => {
  // Get the context of the canvas element we want to select
  var ctx = document.getElementById('myRadarChart2').getContext('2d');

  // Data for the radar chart
  var data = {
    labels: ['Algebra', 'Physics', 'Math', 'Programming'], // Corrected label spelling
    datasets: [{
      label: 'My Radar Chart',
      data: [65, 59, 90, 81],
      backgroundColor: 'rgba(181, 232, 83, 0.2)', // Light green background with transparency
      borderColor: 'rgb(181, 232, 83)', // Green border
      pointBackgroundColor: 'rgb(181, 232, 83)', // Green points
      pointBorderColor: '#fff', // White points border
      pointHoverBackgroundColor: '#fff', // White points on hover
      pointHoverBorderColor: 'rgb(181, 232, 83)' // Green border on hover
    }]
  };

  // Radar chart configuration
  var config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          ticks: {
            display: false, // Hide radial axis labels
            stepSize: 20
          }
        }
      }
    }
  };

  // Create the radar chart
  var myRadarChart = new Chart(ctx, config);
});
