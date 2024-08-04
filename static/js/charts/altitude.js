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

}


const altitudeCanvas = document.getElementById('altitude_canvas');

const altitudeAddMaxRange = document.getElementById('altitude_add_max_range');
const altitudeMinusMaxRange = document.getElementById('altitude_minus_max_range');
const altitudeAddMinRange = document.getElementById('altitude_add_min_range');
const altitudeMinusMinRange = document.getElementById('altitude_minus_min_range');

const altitudeMaxRange = document.getElementById('altitude_max_range');
const altitudeMinRange = document.getElementById('altitude_min_range');



/*
altitudeMaxRange.innerHTML = chartConfig.options.scales.y.suggestedMax;
altitudeMinRange.innerHTML = chartConfig.options.scales.y.suggestedMin;

altitudeAddMaxRange.onclick = () => {
  chartConfig.options.scales.y.suggestedMax += 10;
  altitudeMaxRange.innerHTML = chartConfig.options.scales.y.suggestedMax;
}

altitudeMinusMaxRange.onclick = () => {
  chartConfig.options.scales.y.suggestedMax -= 10;
  altitudeMaxRange.innerHTML = chartConfig.options.scales.y.suggestedMax;
}

altitudeAddMinRange.onclick = () => {
  chartConfig.options.scales.y.suggestedMin += 10;
  altitudeMinRange.innerHTML = chartConfig.options.scales.y.suggestedMin;
}

altitudeMinusMinRange.onclick = () => {
  chartConfig.options.scales.y.suggestedMin -= 10;
  altitudeMinRange.innerHTML = chartConfig.options.scales.y.suggestedMin;
}

setInterval(() => { altitudeChart.update() }, 200);
*/
