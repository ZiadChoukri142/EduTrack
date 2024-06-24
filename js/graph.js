document.addEventListener('DOMContentLoaded', (event) => {
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById('myPieChart').getContext('2d');
  
    // Data for the pie chart
    var data = {
      labels: ['Algebra', 'Math', 'physique'],
      datasets: [{
        label: 'Skills',
        data: [30, 20, 50],
        backgroundColor: [
          'rgb(11, 218, 81)',   // Red
          '	rgb(152, 251, 152)',   // Blue
          '	rgb(138, 154, 91)'    // Yellow
        ],
        hoverOffset: 4  // Adds extra space between slices on hover
      }]
    };
  
    // Pie chart configuration
    var config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
              }
            }
          }
        }
      }
    };
  
    // Create the pie chart
    var myPieChart = new Chart(ctx, config);
});
