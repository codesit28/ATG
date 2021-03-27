// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 5 @ 11:59 AM", "Mar 5 @ 11:59 PM", "Mar 6 @ 11:59 AM", "Mar 6 @ 11:59 PM", "Mar 7 @ 11:59 AM", "Mar 7 @ 11:59 PM", "Mar 8 @ 11:59 AM", "Mar 8 @ 11:59 PM", "Mar 9 @ 11:59 AM", "Mar 9 @ 11:59 PM", "Mar 10 @ 11:59 AM", "Mar 10 @ 11:59 PM", "Mar 11 @ 11:59 AM", "Mar 11 @ 11:59 PM", "Mar 12 @ 11:59 AM", "Mar 12 @ 11:59 PM", "Mar 13 @ 11:59 AM", "Mar 13 @ 11:50 PM", "Mar 14 @ 11:59 AM", "Mar 14 @ 11:59 PM",  "Mar 15 @ 11:59 AM", "Mar 15 @ 11:59 PM", "Mar 16 @ 11:59 AM", "Mar 16 @ 11:59 PM", "Mar 17 @ 11:59 AM", "Mar 17 @ 11:59 PM", "Mar 18 @ 11:59 AM", "Mar 18 @ 11:59 PM", "Mar 19 @ 11:59 AM", "Mar 19 @ 11:59 PM", "Mar 20 @ 11:59 AM", "Mar 20 @ 11:59 PM", "Mar 21 @ 11:59 AM", "Mar 21 @ 11:59 PM", "Mar 22 @ 11:59 AM", "Mar 22 @ 11:59 PM ", "Mar 23 @ 11:59 AM", "Mar 23 @ 11:59 PM", "Mar 24 @ 11:59 AM", "Mar 24 @ 11:59 PM", "Mar 25 @ 11:59 AM", "Mar 25 @ 11:59 PM", "Mar 26 @ 11:59 AM", "Mar 26 @ 11:59 PM", "Mar 27 @ 11:59 AM", "Mar 27 @ 11:59 PM", "Mar 28 @ 11:59 AM", "Mar 28 @ 11:59 PM", "Mar 29 @ 11:59 AM", "Mar 29 @ 11:59 PM", "Mar 30 @ 11:59 AM", "Mar 30 @ 11:59 PM", "Mar 31 @ 11:59 AM", "Mar 31 @ 11:59 PM", "Apr 1 @ 11:59 AM,"    ],
    datasets: [{
      label: "Price",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0.02, 0.03, 0.05, 0.07, 0.11, 0.05, 0.06, 0.13, 0.09, 0.10, 0.14, 0.16, 0.10, 0.20, 0.20, 0.20, 0.15, 0.20, 0.26, 0.31, 0.24, 0.28, 0.35, 0.38, 0.29, 0.34, 0.41, 0.45, 0.51, 0.56, 0.55, 0.54, 0.59, 0.60, 0.61, 0.59, 0.27, 0.88, 0.72, 0.73, 0.89, 0.92, 0.95, 0.97,  ],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1.00,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
