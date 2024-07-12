const temperature_socket = new WebSocket('ws://localhost:8000/ws/temperature/');
const altitude_socket = new WebSocket('ws://localhost:8000/ws/altitude/');
const battery_socket = new WebSocket('ws://localhost:8000/ws/battery/');

const temperature_canvas = document.getElementById('temperature_canvas');
const altitude_canvas = document.getElementById('altitude_canvas');
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
  console.log(djangoData)

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

battery_socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)
  console.log(djangoData)

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
