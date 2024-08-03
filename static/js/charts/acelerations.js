const acelerationsCanvas = document.getElementById('acelerations_canvas');

const acelerationsAddMaxRange = document.getElementById('acelerations_add_max_range');
const acelerationsMinusMaxRange = document.getElementById('acelerations_minus_max_range');
const acelerationsAddMinRange = document.getElementById('acelerations_add_min_range');
const acelerationsMinusMinRange = document.getElementById('acelerations_minus_min_range');

const acelerationsMaxRange = document.getElementById('acelerations_max_range');
const acelerationsMinRange = document.getElementById('acelerations_min_range');

const acelerationsChartConfig = {
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
        suggestedMin: 0,
        suggestedMax: 2
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
const acelerationsChart = new Chart(acelerationsCanvas, acelerationsChartConfig);

acelerationsMaxRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMax;
acelerationsMinRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMin;

acelerationsAddMaxRange.onclick = () => {
  acelerationsChartConfig.options.scales.y.suggestedMax += 5;
  acelerationsMaxRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMax;
}

acelerationsMinusMaxRange.onclick = () => {
  acelerationsChartConfig.options.scales.y.suggestedMax -= 5;
  acelerationsMaxRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMax;
}

acelerationsAddMinRange.onclick = () => {
  acelerationsChartConfig.options.scales.y.suggestedMin += 5;
  acelerationsMinRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMin;
}

acelerationsMinusMinRange.onclick = () => {
  acelerationsChartConfig.options.scales.y.suggestedMin -= 5;
  acelerationsMinRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMin;
}

setInterval(() => { acelerationsChart.update(); }, 200);
