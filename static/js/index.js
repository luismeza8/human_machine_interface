const pocketqubeSocket = new WebSocket('ws://localhost:8000/ws/pocketqube/')

const altitudeCanvas = document.getElementById('altitude_canvas');
const temperatureCanvas = document.getElementById('temperature_canvas');
const pressureCanvas = document.getElementById('pressure_canvas');
const acelerationsCanvas = document.getElementById('acelerations_canvas');
const gyrosCanvas = document.getElementById('gyros_canvas');

const altitudeLabel = document.getElementById('altitude-label');

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

pocketqubeSocket.onmessage = function(e) {
  const data = JSON.parse(e.data);
  let newLabel = getLabelsFromConfigChart(altitudeChartConfig);

  let newAltitudeDataset = getDataFromConfigChart(altitudeChartConfig, 0);
  let newTemperatureDataset = getDataFromConfigChart(temperatureChartConfig, 0);
  let newPressureDataset = getDataFromConfigChart(pressureChartConfig, 0);
  let newAcelerationsDatasetX = getDataFromConfigChart(acelerationsChartConfig, 0);
  let newAcelerationsDatasetY = getDataFromConfigChart(acelerationsChartConfig, 1);
  let newAcelerationsDatasetZ = getDataFromConfigChart(acelerationsChartConfig, 2);
  let newGyrosDatasetX = getDataFromConfigChart(gyrosChartConfig, 0);
  let newGyrosDatasetY = getDataFromConfigChart(gyrosChartConfig, 1);
  let newGyrosDatasetZ = getDataFromConfigChart(gyrosChartConfig, 2);

  newLabel = insertNewDataInArray(newLabel, data.medition);
  newAltitudeDataset = insertNewDataInArray(newAltitudeDataset, data.altitude);
  altitudeLabel.innerHTML = data.altitude;
  newTemperatureDataset = insertNewDataInArray(newTemperatureDataset, data.temperature);
  newPressureDataset = insertNewDataInArray(newPressureDataset, data.pressure);
  newAcelerationsDatasetX = insertNewDataInArray(newAcelerationsDatasetX, data.aceleration_x);
  newAcelerationsDatasetY = insertNewDataInArray(newAcelerationsDatasetY, data.aceleration_y);
  newAcelerationsDatasetZ = insertNewDataInArray(newAcelerationsDatasetZ, data.aceleration_z);
  newGyrosDatasetX = insertNewDataInArray(newGyrosDatasetX, data.gyro_x);
  newGyrosDatasetY = insertNewDataInArray(newGyrosDatasetY, data.gyro_y);
  newGyrosDatasetZ = insertNewDataInArray(newGyrosDatasetZ, data.gyro_z);

  altitudeChartConfig.data.datasets[0].data = newAltitudeDataset;
  altitudeChartConfig.data.labels = newLabel;

  temperatureChartConfig.data.datasets[0].data = newTemperatureDataset;
  temperatureChartConfig.data.labels = newLabel;

  pressureChartConfig.data.datasets[0].data = newPressureDataset;
  pressureChartConfig.data.labels = newLabel;

  acelerationsChartConfig.data.datasets[0].data = newAcelerationsDatasetX;
  acelerationsChartConfig.data.datasets[1].data = newAcelerationsDatasetY;
  acelerationsChartConfig.data.datasets[2].data = newAcelerationsDatasetZ;
  acelerationsChartConfig.data.labels = newLabel;

  gyrosChartConfig.data.datasets[0].data = newGyrosDatasetX;
  gyrosChartConfig.data.datasets[1].data = newGyrosDatasetY;
  gyrosChartConfig.data.datasets[2].data = newGyrosDatasetZ;
  gyrosChartConfig.data.labels = newLabel;

  altitudeChart.update();
  temperatureChart.update();
  pressureChart.update();
  acelerationsChart.update();
  gyrosChart.update();
}
