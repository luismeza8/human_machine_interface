(()=>{
  const acelerationsCanvas = document.getElementById('acelerations_canvas');
  const gyrosCanvas = document.getElementById('gyros_canvas');

  const acelerationsAddMaxRange = document.getElementById('acelerations_add_max_range');
  const acelerationsMinusMaxRange = document.getElementById('acelerations_minus_max_range');
  const acelerationsAddMinRange = document.getElementById('acelerations_add_min_range');
  const acelerationsMinusMinRange = document.getElementById('acelerations_minus_min_range');

  const acelerationsMaxRange = document.getElementById('acelerations_max_range');
  const acelerationsMinRange = document.getElementById('acelerations_min_range');

  const gyrosAddMaxRange = document.getElementById('gyros_add_max_range');
  const gyrosMinusMaxRange = document.getElementById('gyros_minus_max_range');
  const gyrosAddMinRange = document.getElementById('gyros_add_min_range');
  const gyrosMinusMinRange = document.getElementById('gyros_minus_min_range');

  const gyrosMaxRange = document.getElementById('gyros_max_range');
  const gyrosMinRange = document.getElementById('gyros_min_range');

  function createChartConfig(datasets, suggestedMin, suggestedMax) {
    return {
      type: 'line',
      data: {
        labels: xAxisValues,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            suggestedMin: suggestedMin,
            suggestedMax: suggestedMax
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
  }
  const acelerationsChartConfig = createChartConfig([
    {label: 'X', data: acelerationXValues, borderWidth: 4, borderColor: 'rgb(255, 255, 0)'},
    {label: 'Y', data: acelerationYValues, borderWidth: 4, borderColor: 'rgb(0, 255, 255)'},
    {label: 'Z', data: acelerationZValues, borderWidth: 4, borderColor: 'rgb(0, 255, 0)'}
  ], 0, 2)
  const gyrosChartConfig = createChartConfig([
    {label: 'X', data: gyroXValues, borderWidth: 4, borderColor: 'rgb(127, 255, 0)'},
    {label: 'Y', data: gyroYValues, borderWidth: 4, borderColor: 'rgb(0, 255, 127)'},
    {label: 'Z', data: gyroZValues, borderWidth: 4, borderColor: 'rgb(0, 127, 0)'},
  ], 0, 2) 

  const acelerationsChart = new Chart(acelerationsCanvas, acelerationsChartConfig);
  const gyrosChart = new Chart(gyrosCanvas, gyrosChartConfig);

  acelerationsMaxRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMax;
  acelerationsMinRange.innerHTML = acelerationsChartConfig.options.scales.y.suggestedMin;
  gyrosMaxRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMax;
  gyrosMinRange.innerHTML = gyrosChartConfig.options.scales.y.suggestedMin;

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

  setInterval(function() {
    acelerationsChart.update();
    gyrosChart.update();
  }, 200);
})();
