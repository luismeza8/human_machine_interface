var socket = new WebSocket('ws://localhost:8000/ws/graph/');

const chart = document.getElementById('altitude_chart');
const graphType = {
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
var mychart = new Chart(chart, graphType);
console.log('yeap')

socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)
  console.log(djangoData)

  var newGraph = graphType.data.datasets[0].data;
  var newLabels = graphType.data.labels;

  newGraph.shift();
  newGraph.push(djangoData.value);

  newLabels.shift();
  newLabels.push(djangoData.medition);

  graphType.data.datasets[0].data = newGraph;
  graphType.data.labels = newLabels;
  mychart.update();

  const title = document.getElementById('title');
  title.innerHTML = djangoData.medition;
}
