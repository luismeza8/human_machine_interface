var socket = new WebSocket('ws://localhost:8000/ws/graph/');

socket.onmessage = function(e) {
  var djangoData = JSON.parse(e.data)

  const title = document.getElementById('title');
  title.innerHTML = djangoData.value;
}
