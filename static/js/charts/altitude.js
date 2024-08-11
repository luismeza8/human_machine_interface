class AltitudeChart {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
  }
  metersToKilometersConstructor() {
    const divideToKilometers = num => num / 1000;
    const newValues = altitudeValues.map(divideToKilometers);
    console.log(newValues)
    return newValues;
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

  metersToKilometers(chart) {
    const divideToKilometers = num => num / 1000;
    const newValues = altitudeValues.map(divideToKilometers);
    chart.config.data.datasets[0].data = newValues
    return chart;
  }
}
