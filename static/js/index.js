var socket = new WebSocket('ws://localhost:8000/ws/graph/');

const chart = document.getElementById('altitude_chart');
const graphType = {
  type: 'line',
  data: {
    labels: ['monday', 'tuesday', 'wendsday'],
    datasets: [{
      label: 'Altura',
      data: [1, 2, 3],
      borderWidth: 1,
    }]
  }
}
var mychart = new Chart(chart, graphType);
console.log('yeap')

socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)

  var newGraph = graphType.data.datasets[0].data;
  newGraph.shift()
  newGraph.push(djangoData.value)

  graphType.data.datasets[0].data = newGraph;
  mychart.update();

  const title = document.getElementById('title');
  title.innerHTML = djangoData.value;
}
