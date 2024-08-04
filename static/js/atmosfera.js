(() => {
  const suggestedMinimum = document.getElementById('atmosfera_altitude_suggested_minimum');
  const suggestedMaximum = document.getElementById('atmosfera_altitude_suggested_maximum');
  const altitudeChart = new AltitudeChart('atmosfera_altitude_canvas');

  let chart = altitudeChart.getChart()

  suggestedMinimum.innerText = altitudeChart.getSuggestedMinimum(chart);
  suggestedMaximum.innerText = altitudeChart.getSuggestedMaximum(chart);

  document.getElementById('atmosfera_altitude_add_suggested_minimum_button').onclick = () => {
    chart = altitudeChart.addToSuggestedMinimum(chart);
    suggestedMinimum.innerText = altitudeChart.getSuggestedMinimum(chart);
  }
  document.getElementById('atmosfera_altitude_subtract_suggested_minimum_button').onclick = () => {
    chart = altitudeChart.subtractFromSuggestedMinimum(chart);
    suggestedMinimum.innerText = altitudeChart.getSuggestedMinimum(chart);
  }
  document.getElementById('atmosfera_altitude_add_suggested_maximum_button').onclick = () => {
    chart = altitudeChart.addToSuggestedMaximum(chart);
    suggestedMaximum.innerText = altitudeChart.getSuggestedMaximum(chart);
  }
  document.getElementById('atmosfera_altitude_subtract_suggested_maximum_button').onclick = () => {
    chart = altitudeChart.subtractFromSuggestedMaximum(chart);
    suggestedMaximum.innerText = altitudeChart.getSuggestedMaximum(chart);
  }

  setInterval(() => {
    chart.update();
  }, 200);
})();
