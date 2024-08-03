const pressureCanvas = document.getElementById('pressure_canvas');

const pressureAddMaxRange = document.getElementById('pressure_add_max_range');
const pressureMinusMaxRange = document.getElementById('pressure_minus_max_range');
const pressureAddMinRange = document.getElementById('pressure_add_min_range');
const pressureMinusMinRange = document.getElementById('pressure_minus_min_range');

const pressureMaxRange = document.getElementById('pressure_max_range');
const pressureMinRange = document.getElementById('pressure_min_range');

const pressureChartConfig = {
  type: 'line',
  data: {
    labels: xAxisValues,
    datasets: [{
      data: pressureValues
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
const pressureChart = new Chart(pressureCanvas, pressureChartConfig);
pressureMaxRange.innerHTML = pressureChartConfig.options.scales.y.suggestedMax;
pressureMinRange.innerHTML = pressureChartConfig.options.scales.y.suggestedMin;

pressureAddMaxRange.onclick = () => {
  pressureChartConfig.options.scales.y.suggestedMax += 5;
  pressureMaxRange.innerHTML = pressureChartConfig.options.scales.y.suggestedMax;
}

pressureMinusMaxRange.onclick = () => {
  pressureChartConfig.options.scales.y.suggestedMax -= 5;
  pressureMaxRange.innerHTML = pressureChartConfig.options.scales.y.suggestedMax;
}

pressureAddMinRange.onclick = () => {
  pressureChartConfig.options.scales.y.suggestedMin += 5;
  pressureMinRange.innerHTML = pressureChartConfig.options.scales.y.suggestedMin;
}

pressureMinusMinRange.onclick = () => {
  pressureChartConfig.options.scales.y.suggestedMin -= 5;
  pressureMinRange.innerHTML = pressureChartConfig.options.scales.y.suggestedMin;
}

setInterval(() => { pressureChart.update() }, 200);
