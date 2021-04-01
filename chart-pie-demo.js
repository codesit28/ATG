// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["CCtip.io", "Founders", "ATG Holders", "Ready For Centralised Exchange"],
    datasets: [{
      data: [50000, 5500, 7031.034, 944500.963 ],
  
  
  backgroundColor: ['#17a2b8', '#dc3545', '#fd7e14', '#38b495'],
    }],
  },
});
