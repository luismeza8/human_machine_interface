(() => {
  const altitudeChart = new AltitudeChart('altitude_canvas');
  const ac = new Chart(altitudeChart.altitudeCanvas, altitudeChart.chartConfig)
  setInterval(() => { ac.update() }, 200);
})();

