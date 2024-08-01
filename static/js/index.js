(()=>{
  const altitudeCanvas = document.getElementById('altitude_canvas');
  const temperatureCanvas = document.getElementById('temperature_canvas');
  const pressureCanvas = document.getElementById('pressure_canvas');
  const acelerationsCanvas = document.getElementById('acelerations_canvas');
  const gyrosCanvas = document.getElementById('gyros_canvas');

  const altitudeAddMaxRange = document.getElementById('altitude_add_max_range');
  const altitudeMinusMaxRange = document.getElementById('altitude_minus_max_range');
  const altitudeAddMinRange = document.getElementById('altitude_add_min_range');
  const altitudeMinusMinRange = document.getElementById('altitude_minus_min_range');

  const altitudeMaxRange = document.getElementById('altitude_max_range');
  const altitudeMinRange = document.getElementById('altitude_min_range');

  const temperatureAddMaxRange = document.getElementById('temperature_add_max_range');
  const temperatureMinusMaxRange = document.getElementById('temperature_minus_max_range');
  const temperatureAddMinRange = document.getElementById('temperature_add_min_range');
  const temperatureMinusMinRange = document.getElementById('temperature_minus_min_range');

  const temperatureMaxRange = document.getElementById('temperature_max_range');
  const temperatureMinRange = document.getElementById('temperature_min_range');

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
  const altitudeChartConfig = createChartConfig([{data: altitudeValues, borderWidth: 4}], -100, 100);
  const temperatureChartConfig = createChartConfig([{label: 'Temperatura', data: temperatureValues, borderWidth: 4, borderColor: 'rgb(255, 0, 0)'}], 20, 30);
  const pressureChartConfig = createChartConfig([{label: 'Presion', data: pressureValues, borderWidth: 4, borderColor: 'rgb(0, 255, 0)'}], 1000, 1100);
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

  const altitudeChart = new Chart(altitudeCanvas, altitudeChartConfig);
  const temperatureChart = new Chart(temperatureCanvas, temperatureChartConfig);
  const pressureChart = new Chart(pressureCanvas, pressureChartConfig);
  const acelerationsChart = new Chart(acelerationsCanvas, acelerationsChartConfig);
  const gyrosChart = new Chart(gyrosCanvas, gyrosChartConfig);

  altitudeMaxRange.innerHTML = altitudeChartConfig.options.scales.y.suggestedMax;
  altitudeMinRange.innerHTML = altitudeChartConfig.options.scales.y.suggestedMin;
  temperatureMaxRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMax;
  temperatureMinRange.innerHTML = temperatureChartConfig.options.scales.y.suggestedMin;

  altitudeAddMaxRange.onclick = () => {
    altitudeChartConfig.options.scales.y.suggestedMax += 10;
    altitudeMaxRange.innerHTML = altitudeChartConfig.options.scales.y.suggestedMax;
  }

  altitudeMinusMaxRange.onclick = () => {
    altitudeChartConfig.options.scales.y.suggestedMax -= 10;
    altitudeMaxRange.innerHTML = altitudeChartConfig.options.scales.y.suggestedMax;
  }

  altitudeAddMinRange.onclick = () => {
    altitudeChartConfig.options.scales.y.suggestedMin += 10;
    altitudeMinRange.innerHTML = altitudeChartConfig.options.scales.y.suggestedMin;
  }

  altitudeMinusMinRange.onclick = () => {
    altitudeChartConfig.options.scales.y.suggestedMin -= 10;
    altitudeMinRange.innerHTML = altitudeChartConfig.options.scales.y.suggestedMin;
  }

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

  setInterval(function() {
    altitudeChart.update();
    temperatureChart.update();
    pressureChart.update();
    acelerationsChart.update();
    gyrosChart.update();
  }, 200);
})();
