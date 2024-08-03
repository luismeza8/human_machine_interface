const temperatureCanvas = document.getElementById('temperature_canvas');

const temperatureAddMaxRange = document.getElementById('temperature_add_max_range');
const temperatureMinusMaxRange = document.getElementById('temperature_minus_max_range');
const temperatureAddMinRange = document.getElementById('temperature_add_min_range');
const temperatureMinusMinRange = document.getElementById('temperature_minus_min_range');

const temperatureMaxRange = document.getElementById('temperature_max_range');
const temperatureMinRange = document.getElementById('temperature_min_range');

const temperatureChartConfig = {
  type: 'line',
  data: {
    labels: xAxisValues,
    datasets: [{
      data: temperatureValues,
      borderColor: 'red'
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
const temperatureChart = new Chart(temperatureCanvas, temperatureChartConfig);

temperatureMaxRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMax;
temperatureMinRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMin;

temperatureAddMaxRange.onclick = () => {
  temperatureChartConfig.options.scales.y.suggestedMax += 5;
  temperatureMaxRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMax;
}

temperatureMinusMaxRange.onclick = () => {
  temperatureChartConfig.options.scales.y.suggestedMax -= 5;
  temperatureMaxRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMax;
}

temperatureAddMinRange.onclick = () => {
  temperatureChartConfig.options.scales.y.suggestedMin += 5;
  temperatureMinRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMin;
}

temperatureMinusMinRange.onclick = () => {
  temperatureChartConfig.options.scales.y.suggestedMin -= 5;
  temperatureMinRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMin;
}

setInterval(() => {temperatureChart.update()}, 200)
