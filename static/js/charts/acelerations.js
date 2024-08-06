class AcelerationsChart {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
  }
  chartConfig = {
    type: 'line',
    data: {
      labels: xAxisValues,
        datasets: [
          {label: 'X', data: acelerationXValues, borderWidth: 4, borderColor: 'rgb(255, 255, 0)'},
          {label: 'Y', data: acelerationYValues, borderWidth: 4, borderColor: 'rgb(0, 255, 255)'},
          {label: 'Z', data: acelerationZValues, borderWidth: 4, borderColor: 'rgb(0, 255, 0)'}
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
    chart.config.options.scales.y.suggestedMin += 50;
    return chart;
  }

  subtractFromSuggestedMinimum(chart) {
    chart.config.options.scales.y.suggestedMin -= 50;
    return chart;
  }

  addToSuggestedMaximum(chart) {
    chart.config.options.scales.y.suggestedMax += 50;
    return chart;
  }

  subtractFromSuggestedMaximum(chart) {
    chart.config.options.scales.y.suggestedMax -= 50;
    return chart;
  }
}


