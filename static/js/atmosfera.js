pocketqubeSocket.onmessage = function(e) {
  console.log('atmos')
  const data = JSON.parse(e.data);
  console.log(data)
}
