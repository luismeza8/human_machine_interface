class AltitudeChart {
  constructor(canvasName) {
    this.altitudeCanvas = document.getElementById(canvasName);
  }
  chartConfig = {
    type: 'line',
    data: {
      labels: xAxisValues,
      datasets: [{
        data: altitudeValues
      }]
    },
    options: {
      scales: {
        y: {
          suggestedMin: -100,
          suggestedMax: 100
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
    return new Chart(this.altitudeCanvas, this.chartConfig);
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
