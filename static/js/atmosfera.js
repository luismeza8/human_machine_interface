(() => {
  const altitudeChartAtmosfera = new AltitudeChart('altitude_canvas_atmosfera');
  let atc = altitudeChartAtmosfera.getChart()
  setInterval(() => { atc.update() }, 200);
})();
