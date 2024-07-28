const pocketqubeSocket = new WebSocket('ws://localhost:8000/ws/pocketqube/')

function insertNewDataInArray(array, data) {
  array.shift();
  array.push(data);
  return array;
}

let xAxisValues = new Array(15);
let altitudeValues = new Array(15);
let temperatureValues = new Array(15);
let pressureValues = new Array(15);
let acelerationXValues = new Array(15);
let acelerationYValues = new Array(15);
let acelerationZValues = new Array(15);
let gyroXValues = new Array(15);
let gyroYValues = new Array(15);
let gyroZValues = new Array(15);

pocketqubeSocket.onmessage = function(e) {
  const data = JSON.parse(e.data);
  xAxisValues = insertNewDataInArray(xAxisValues, data.medition);
  altitudeValues = insertNewDataInArray(altitudeValues, data.altitude);
  temperatureValues = insertNewDataInArray(temperatureValues, data.temperature);
  pressureValues = insertNewDataInArray(pressureValues, data.pressure);
  acelerationXValues = insertNewDataInArray(acelerationXValues, data.aceleration_x);
  acelerationYValues = insertNewDataInArray(acelerationYValues, data.aceleration_y);
  acelerationZValues = insertNewDataInArray(acelerationZValues, data.aceleration_z);
  gyroXValues = insertNewDataInArray(gyroXValues, data.gyro_x);
  gyroYValues = insertNewDataInArray(gyroYValues, data.gyro_y);
  gyroZValues = insertNewDataInArray(gyroZValues, data.gyro_z);
}
