const gyrosCanvas = document.getElementById('gyros_canvas');

const gyrosAddMaxRange = document.getElementById('gyros_add_max_range');
const gyrosMinusMaxRange = document.getElementById('gyros_minus_max_range');
const gyrosAddMinRange = document.getElementById('gyros_add_min_range');
const gyrosMinusMinRange = document.getElementById('gyros_minus_min_range');

const gyrosMaxRange = document.getElementById('gyros_max_range');
const gyrosMinRange = document.getElementById('gyros_min_range');

const gyrosChartConfig = {
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

const gyrosChart = new Chart(gyrosCanvas, gyrosChartConfig);

gyrosMaxRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMax;
gyrosMinRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMin;

gyrosAddMaxRange.onclick = () => {
  gyrosChartConfig.options.scales.y.suggestedMax += 5;
  gyrosMaxRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMax;
}

gyrosMinusMaxRange.onclick = () => {
  gyrosChartConfig.options.scales.y.suggestedMax -= 5;
  gyrosMaxRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMax;
}

gyrosAddMinRange.onclick = () => {
  gyrosChartConfig.options.scales.y.suggestedMin += 5;
  gyrosMinRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMin;
}

gyrosMinusMinRange.onclick = () => {
  gyrosChartConfig.options.scales.y.suggestedMin -= 5;
  gyrosMinRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMin;
}

setInterval(function() { gyrosChart.update(); }, 200);
