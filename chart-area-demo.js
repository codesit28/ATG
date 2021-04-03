// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [ "Mar 9 @ 11:59 PM", "Mar 10 @ 11:59 PM", "Mar 11 @ 11:59 PM", "Mar 12 @ 11:59 PM", "Mar 13 @ 11:59 PM", "Mar 14 @ 11:59 PM", "Mar 15 @ 11:59 PM", "Mar 16 @ 11:59 PM", "Mar 17 @ 11:59 PM", "Mar 18 @ 11:59 PM", "Mar 19 @ 11:59 PM", "Mar 20 @ 11:59 PM", "Mar 21 @ 11:59 PM", "Mar 22 @ 11:59 PM ", "Mar 23 @ 11:59 PM", "Mar 24 @ 11:59 PM", "Mar 25 @ 11:59 PM", "Mar 26 @ 11:59 PM", "Mar 27 @ 11:59 PM", "Mar 28 @ 11:59 PM", "Mar 29 @ 11:59 PM", "Mar 30 @ 11:59 PM", "Mar 31 @ 11:59 PM", "Apr 1 @ 11:59 PM", "Apr 2 @ 11:59 PM", "Apr 3 @ 11:59 PM",    ],
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
      data: [0.05, 0.05, 0.05, 0.06, 0.05, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.06, 0.06, 0.07, 0.07, 0.07, 0.07, 0.07, 0.27, 10.59, 23.03, 40.30, ],
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
          max: 20,
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
