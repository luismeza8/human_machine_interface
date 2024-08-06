class GyrosChart {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
  }
  chartConfig = {
    type: 'line',
    data: {
      labels: xAxisValues,
        datasets: [
          {label: 'X', data: gyroXValues, borderWidth: 4, borderColor: 'rgb(127, 255, 0)'},
          {label: 'Y', data: gyroYValues, borderWidth: 4, borderColor: 'rgb(0, 255, 127)'},
          {label: 'Z', data: gyroZValues, borderWidth: 4, borderColor: 'rgb(0, 127, 0)'},
        ]
    },
    options: {
      scales: {
        y: {
          suggestedMin: -1,
          suggestedMax: 1
        },
      },
      plugins: {
        legend: {
          display: false,
        },
    },
      animation: {
        duration: 1
      }
    },
  }
  getChart() {
    return new Chart(this.canvas, this.chartConfig);
  }

  getSuggestedMinimum(chart) {
    return chart.config.options.scales.y.suggestedMin;
  }

  getSuggestedMaximum(chart) {
    return chart.config.options.scales.y.suggestedMax;
  }

  addToSuggestedMinimum(chart) {
    chart.config.options.scales.y.suggestedMin += 1;
    return chart;
  }

  subtractFromSuggestedMinimum(chart) {
    chart.config.options.scales.y.suggestedMin -= 1;
    return chart;
  }

  addToSuggestedMaximum(chart) {
    chart.config.options.scales.y.suggestedMax += 1;
    return chart;
  }

  subtractFromSuggestedMaximum(chart) {
    chart.config.options.scales.y.suggestedMax -= 1;
    return chart;
  }
}


