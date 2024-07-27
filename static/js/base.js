const pocketqubeSocket = new WebSocket('ws://localhost:8000/ws/pocketqube/')
var v = 'yeap boludo';

function insertNewDataInArray(array, data) {
  array.shift();
  array.push(data);
  return array;
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
function getLabelsFromConfigChart(configChart) {
  return configChart.data.labels;
}
function getDataFromConfigChart(configChart, datasetIndex) {
  return configChart.data.datasets[datasetIndex].data;
}
const altitudeChartConfig = createChartConfig([{data: new Array(15), borderWidth: 4}], 0, 100);
let newLabelBase = getLabelsFromConfigChart(altitudeChartConfig);
let newAltitudeDatasetBase = getDataFromConfigChart(altitudeChartConfig, 0);

pocketqubeSocket.onmessage = function(e) {
  const data = JSON.parse(e.data);
  newLabelBase = insertNewDataInArray(newLabelBase, data.medition);
  newAltitudeDatasetBase = insertNewDataInArray(newAltitudeDatasetBase, data.altitude);
}
