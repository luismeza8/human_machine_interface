const pocketqubeSocket = new WebSocket('ws://localhost:8000/ws/pocketqube/')

const altitude_canvas = document.getElementById('altitude_canvas');
const temperature_canvas = document.getElementById('temperature_canvas');
const pressure_canvas = document.getElementById('pressure_canvas')
const acelerations_canvas = document.getElementById('acelerations_canvas')
const gyros_canvas = document.getElementById('gyros_canvas')

function getDataFromConfigChart(configChart, datasetIndex) {
  return configChart.data.datasets[datasetIndex].data;
}

function getLabelsFromConfigChart(configChart) {
  return configChart.data.labels;
}

function insertNewDataInArray(array, data) {
  array.shift();
  array.push(data);
  return array;
}

function updateChartDataset(chartConfig, datasetIndex, newDataset) {
  return chartConfig.data.datasets[datasetIndex].data = newDataset;
}

function updateChartLabels(chartConfig, newLabels) {
  return chartConfig.data.labels = newLabels;
}

function createChartConfig(datasets) {
  return {
    type: 'line',
    data: {
      labels: new Array(15),
      datasets: datasets,
    },
    options: {
      animation: {
        duration: 1
      }
    },
  }
}

const altitude_chart_config = createChartConfig([{label: 'Altura', data: new Array(15), borderWidth: 4}]);
const temperature_chart_config = createChartConfig([{label: 'Temperatura', data: new Array(15), borderWidth: 4, borderColor: 'rgb(255, 0, 0)'}]);
const pressure_chart_config = createChartConfig([{label: 'Presion', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 0)'}]);
const aceleration_chart_config = createChartConfig([
  {label: 'X', data: new Array(15), borderWidth: 4, borderColor: 'rgb(255, 255, 0)'},
  {label: 'Y', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 255)'},
  {label: 'Z', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 0)'}
])
const gyros_chart_config = createChartConfig([
  {label: 'X', data: new Array(15), borderWidth: 4, borderColor: 'rgb(127, 255, 0)'},
  {label: 'Y', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 255, 127)'},
  {label: 'Z', data: new Array(15), borderWidth: 4, borderColor: 'rgb(0, 127, 0)'},
])

const altitude_chart = new Chart(altitude_canvas, altitude_chart_config);
const temperature_chart = new Chart(temperature_canvas, temperature_chart_config);
const pressure_chart = new Chart(pressure_canvas, pressure_chart_config);
const acelerations_chart = new Chart(acelerations_canvas, aceleration_chart_config);
const gyros_chart = new Chart(gyros_canvas, gyros_chart_config);

pocketqubeSocket.onmessage = function(e) {
  const data = JSON.parse(e.data);

  let newLabel = getLabelsFromConfigChart(altitude_chart_config);

  let newAltitudeDataset = getDataFromConfigChart(altitude_chart_config, 0);
  let newTemperatureDataset = getDataFromConfigChart(temperature_chart_config, 0);
  let newPressureDataset = getDataFromConfigChart(pressure_chart_config, 0);
  let newAcelerationsDatasetX = getDataFromConfigChart(aceleration_chart_config, 0);
  let newAcelerationsDatasetY = getDataFromConfigChart(aceleration_chart_config, 1);
  let newAcelerationsDatasetZ = getDataFromConfigChart(aceleration_chart_config, 2);
  let newGyrosDatasetX = getDataFromConfigChart(gyros_chart_config, 0);
  let newGyrosDatasetY = getDataFromConfigChart(gyros_chart_config, 1);
  let newGyrosDatasetZ = getDataFromConfigChart(gyros_chart_config, 2);

  newLabel = insertNewDataInArray(newLabel, data.medition);
  newAltitudeDataset = insertNewDataInArray(newAltitudeDataset, data.altitude);
  newTemperatureDataset = insertNewDataInArray(newTemperatureDataset, data.temperature);
  newPressureDataset = insertNewDataInArray(newPressureDataset, data.pressure);
  newAcelerationsDatasetX = insertNewDataInArray(newAcelerationsDatasetX, data.aceleration_x);
  newAcelerationsDatasetY = insertNewDataInArray(newAcelerationsDatasetY, data.aceleration_y);
  newAcelerationsDatasetZ = insertNewDataInArray(newAcelerationsDatasetZ, data.aceleration_z);
  newGyrosDatasetX = insertNewDataInArray(newGyrosDatasetX, data.gyro_x);
  newGyrosDatasetY = insertNewDataInArray(newGyrosDatasetX, data.gyro_y);
  newGyrosDatasetZ = insertNewDataInArray(newGyrosDatasetX, data.gyro_z);

  altitude_chart_config.data.datasets[0].data = newAltitudeDataset;
  altitude_chart_config.data.labels = newLabel;

  temperature_chart_config.data.datasets[0].data = newTemperatureDataset;
  temperature_chart_config.data.labels = newLabel;

  pressure_chart_config.data.datasets[0].data = newPressureDataset;
  pressure_chart_config.data.labels = newLabel;

  aceleration_chart_config.data.datasets[0].data = newAcelerationsDatasetX;
  aceleration_chart_config.data.datasets[1].data = newAcelerationsDatasetY;
  aceleration_chart_config.data.datasets[2].data = newAcelerationsDatasetZ;
  aceleration_chart_config.data.labels = newLabel;

  gyros_chart_config.data.datasets[0].data = newGyrosDatasetX;
  gyros_chart_config.data.datasets[1].data = newGyrosDatasetY;
  gyros_chart_config.data.datasets[2].data = newGyrosDatasetZ;
  gyros_chart_config.data.labels = newLabel;

  altitude_chart.update();
  temperature_chart.update();
  pressure_chart.update();
  acelerations_chart.update();
  gyros_chart.update();
}
