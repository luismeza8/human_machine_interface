(() => {
  // Altitude Chart start
  const altitudeSuggestedMinimum = document.getElementById('general_altitude_suggested_minimum');
  const altitudeSuggestedMaximum = document.getElementById('general_altitude_suggested_maximum');
  const altitudeChartClass = new AltitudeChart('general_altitude_canvas');

  let altitudeChart = altitudeChartClass.getChart()

  altitudeSuggestedMinimum.innerText = altitudeChartClass.getSuggestedMinimum(altitudeChart);
  altitudeSuggestedMaximum.innerText = altitudeChartClass.getSuggestedMaximum(altitudeChart);

  document.getElementById('general_altitude_add_suggested_minimum_button').onclick = () => {
    altitudeChart = altitudeChartClass.addToSuggestedMinimum(altitudeChart);
    altitudeSuggestedMinimum.innerText = altitudeChartClass.getSuggestedMinimum(altitudeChart);
  }
  document.getElementById('general_altitude_subtract_suggested_minimum_button').onclick = () => {
    altitudeChart = altitudeChartClass.subtractFromSuggestedMinimum(altitudeChart);
    altitudeSuggestedMinimum.innerText = altitudeChartClass.getSuggestedMinimum(altitudeChart);
  }
  document.getElementById('general_altitude_add_suggested_maximum_button').onclick = () => {
    altitudeChart = altitudeChartClass.addToSuggestedMaximum(altitudeChart);
    altitudeSuggestedMaximum.innerText = altitudeChartClass.getSuggestedMaximum(altitudeChart);
  }
  document.getElementById('general_altitude_subtract_suggested_maximum_button').onclick = () => {
    altitudeChart = altitudeChartClass.subtractFromSuggestedMaximum(altitudeChart);
    altitudeSuggestedMaximum.innerText = altitudeChartClass.getSuggestedMaximum(altitudeChart);
  }
  // Altitude Chart end

  // Temperature Chart start
  const temperatureSuggestedMinimum = document.getElementById('general_temperature_suggested_minimum');
  const temperatureSuggestedMaximum = document.getElementById('general_temperature_suggested_maximum');
  const temperatureChartClass = new TemperatureChart('general_temperature_canvas');

  let temperatureChart = temperatureChartClass.getChart();

  temperatureSuggestedMinimum.innerText = altitudeChartClass.getSuggestedMinimum(altitudeChart);
  temperatureSuggestedMaximum.innerText = altitudeChartClass.getSuggestedMaximum(altitudeChart);

  document.getElementById('general_temperature_add_suggested_minimum_button').onclick = () => {
    temperatureChart = temperatureChartClass.addToSuggestedMinimum(temperatureChart);
    temperatureSuggestedMinimum.innerText = temperatureChartClass.getSuggestedMinimum(temperatureChart);
  }
  document.getElementById('general_altitude_subtract_suggested_minimum_button').onclick = () => {
    altitudeChart = altitudeChartClass.subtractFromSuggestedMinimum(altitudeChart);
    altitudeSuggestedMinimum.innerText = altitudeChartClass.getSuggestedMinimum(altitudeChart);
  }
  document.getElementById('general_altitude_add_suggested_maximum_button').onclick = () => {
    altitudeChart = altitudeChartClass.addToSuggestedMaximum(altitudeChart);
    altitudeSuggestedMaximum.innerText = altitudeChartClass.getSuggestedMaximum(altitudeChart);
  }
  document.getElementById('general_altitude_subtract_suggested_maximum_button').onclick = () => {
    altitudeChart = altitudeChartClass.subtractFromSuggestedMaximum(altitudeChart);
    altitudeSuggestedMaximum.innerText = altitudeChartClass.getSuggestedMaximum(altitudeChart);
  }

  // Temperature Chart end
  setInterval(() => {
    temperatureChart.update();
    altitudeChart.update();
  }, 200);
})();

