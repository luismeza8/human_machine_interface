const altitude_socket = new WebSocket('ws://localhost:8000/ws/altitude/');
const temperature_socket = new WebSocket('ws://localhost:8000/ws/temperature/');
const pressure_socket = new WebSocket('ws://localhost:8000/ws/pressure/')
const acelerations_socket = new WebSocket('ws://localhost:8000/ws/acelerations/')
const gyros_socket = new WebSocket('ws://localhost:8000/ws/gyros/')
const battery_socket = new WebSocket('ws://localhost:8000/ws/battery/');

const altitude_canvas = document.getElementById('altitude_canvas');
const temperature_canvas = document.getElementById('temperature_canvas');
const pressure_canvas = document.getElementById('pressure_canvas')
const acelerations_canvas = document.getElementById('acelerations_canvas')
const gyros_canvas = document.getElementById('gyros_canvas')
const battery_canvas = document.getElementById('battery_canvas');

const altitude_graph_config = {
  type: 'line',
  data: {
    labels: new Array(15),
    datasets: [{
      label: 'Altura',
      data: new Array(15),
      borderWidth: 4,
    }],
  },
  options: {
    animation: {
      duration: 1
    }
  },
}

const temperature_graph_config = {
  type: 'line',
  data: {
    labels: new Array(15),
    datasets: [{
      label: 'Temperatura',
      data: new Array(15),
      borderWidth: 4,
      borderColor: 'rgb(255, 0, 0)',
    }],
  },
  options: {
    animation: {
      duration: 1
    }
  },
}

const pressure_graph_config = {
  type: 'line',
  data: {
    labels: new Array(15),
    datasets: [{
      label: 'Presion',
      data: new Array(15),
      borderWidth: 4,
      borderColor: 'rgb(0, 255, 0)',
    }],
  },
  options: {
    animation: {
      duration: 1
    }
  },
}

const battery_graph_config = {
  type: 'line',
  data: {
    labels: new Array(15),
    datasets: [{
      label: 'Bateria',
      data: new Array(15),
      borderWidth: 4,
      borderColor: 'rgb(0, 255, 0)',
      fill: true,
    }],
  },
  options: {
    animation: {
      duration: 1
    }
  },
}
var altitude_chart = new Chart(altitude_canvas, altitude_graph_config);
var temperature_chart = new Chart(temperature_canvas, temperature_graph_config);
var pressure_chart = new Chart(pressure_canvas, pressure_graph_config)
var battery_chart = new Chart(battery_canvas, battery_graph_config);

altitude_socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)
  console.log(djangoData)

  var newGraph = altitude_graph_config.data.datasets[0].data;
  var newLabels = altitude_graph_config.data.labels;

  newGraph.shift();
  newGraph.push(djangoData.altitude);

  newLabels.shift();
  newLabels.push(djangoData.medition);

  altitude_graph_config.data.datasets[0].data = newGraph;
  altitude_graph_config.data.labels = newLabels;
  altitude_chart.update();
}

temperature_socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)
  //console.log(djangoData)

  var newGraph = temperature_graph_config.data.datasets[0].data;
  var newLabels = temperature_graph_config.data.labels;

  newGraph.shift();
  newGraph.push(djangoData.temperature);

  newLabels.shift();
  newLabels.push(djangoData.medition);

  temperature_graph_config.data.datasets[0].data = newGraph;
  temperature_graph_config.data.labels = newLabels;
  temperature_chart.update();
}

pressure_socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)

  var newGraph = pressure_graph_config.data.datasets[0].data;
  var newLabels = pressure_graph_config.data.labels;

  newGraph.shift();
  newGraph.push(djangoData.pressure);

  newLabels.shift();
  newLabels.push(djangoData.medition);

  pressure_graph_config.data.datasets[0].data = newGraph;
  pressure_graph_config.data.labels = newLabels;
  pressure_chart.update();
}

battery_socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)
  //console.log(djangoData)

  var newGraph = battery_graph_config.data.datasets[0].data;
  var newLabels = battery_graph_config.data.labels;

  newGraph.shift();
  newGraph.push(djangoData.battery);

  newLabels.shift();
  newLabels.push(djangoData.medition);

  battery_graph_config.data.datasets[0].data = newGraph;
  battery_graph_config.data.labels = newLabels;
  battery_chart.update();
}
