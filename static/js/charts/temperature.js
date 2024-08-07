class TemperatureChart {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
  }
  chartConfig = {
    type: 'line',
    data: {
      labels: xAxisValues,
      datasets: [{
        data: temperatureValues
      }]
    },
    options: {
      scales: {
        y: {
          suggestedMin: 20,
          suggestedMax: 40
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

  celsiusToFahrenheit(chart) {
    const convertToFahrenheit = celsius => (celsius * 1.8) + 32;
    const newValues = temperatureValues.map(convertToFahrenheit)
    chart.config.data.datasets[0].data = newValues
    return chart
  }
}
