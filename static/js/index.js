(()=>{
  const altitudeCanvas = document.getElementById('altitude_canvas');
  const temperatureCanvas = document.getElementById('temperature_canvas');
  const pressureCanvas = document.getElementById('pressure_canvas');
  const acelerationsCanvas = document.getElementById('acelerations_canvas');
  const gyrosCanvas = document.getElementById('gyros_canvas');

  function createChartConfig(datasets, suggestedMin, suggestedMax) {
    return {
      type: 'line',
      data: {
        labels: new Array(15),
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
  const altitudeChartConfig = createChartConfig([{data: new Array(15), borderWidth: 4}], 0, 100);
  const temperatureChartConfig = createChartConfig([{label: 'Temperatura', data: new Array(15), borderWidth: 4, borderColor: 'rgb(255, 0, 0)'}], 20, 30);
  const pressureChartConfig = createChartConfig([{label: 'Presion', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 0)'}], 1000, 1100);
  const acelerationsChartConfig = createChartConfig([
    {label: 'X', data: new Array(15), borderWidth: 4, borderColor: 'rgb(255, 255, 0)'},
    {label: 'Y', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 255)'},
    {label: 'Z', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 0)'}
  ], 0, 2)
  const gyrosChartConfig = createChartConfig([
    {label: 'X', data: new Array(15), borderWidth: 4, borderColor: 'rgb(127, 255, 0)'},
    {label: 'Y', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 127)'},
    {label: 'Z', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 127, 0)'},
  ], 0, 2) 

  const altitudeChart = new Chart(altitudeCanvas, altitudeChartConfig);
  const temperatureChart = new Chart(temperatureCanvas, temperatureChartConfig);
  const pressureChart = new Chart(pressureCanvas, pressureChartConfig);
  const acelerationsChart = new Chart(acelerationsCanvas, acelerationsChartConfig);
  const gyrosChart = new Chart(gyrosCanvas, gyrosChartConfig);

  altitudeChart.data.labels = xAxisValues;
  altitudeChart.data.datasets[0].data = altitudeValues;

  temperatureChartConfig.data.datasets[0].data = temperatureValues;
  temperatureChartConfig.data.labels = xAxisValues;

  pressureChartConfig.data.datasets[0].data = pressureValues;
  pressureChartConfig.data.labels = xAxisValues;

  acelerationsChartConfig.data.datasets[0].data = acelerationXValues;
  acelerationsChartConfig.data.datasets[1].data = acelerationYValues;
  acelerationsChartConfig.data.datasets[2].data = acelerationZValues;
  acelerationsChartConfig.data.labels = xAxisValues;

  gyrosChartConfig.data.datasets[0].data = acelerationXValues;
  gyrosChartConfig.data.datasets[1].data = acelerationYValues;
  gyrosChartConfig.data.datasets[2].data = acelerationZValues;
  gyrosChartConfig.data.labels = xAxisValues;

  setInterval(function() {
    altitudeChart.update();
    temperatureChart.update();
    pressureChart.update();
    acelerationsChart.update();
    gyrosChart.update();
  }, 200)
})();
