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

  temperatureSuggestedMinimum.innerText = temperatureChartClass.getSuggestedMinimum(temperatureChart);
  temperatureSuggestedMaximum.innerText = temperatureChartClass.getSuggestedMaximum(temperatureChart);

  document.getElementById('general_temperature_add_suggested_minimum_button').onclick = () => {
    temperatureChart = temperatureChartClass.addToSuggestedMinimum(temperatureChart);
    temperatureSuggestedMinimum.innerText = temperatureChartClass.getSuggestedMinimum(temperatureChart);
  }
  document.getElementById('general_temperature_subtract_suggested_minimum_button').onclick = () => {
    temperatureChart = temperatureChartClass.subtractFromSuggestedMinimum(temperatureChart);
    temperatureSuggestedMinimum.innerText = temperatureChartClass.getSuggestedMinimum(temperatureChart);
  }
  document.getElementById('general_temperature_add_suggested_maximum_button').onclick = () => {
    temperatureChart = temperatureChartClass.addToSuggestedMaximum(temperatureChart);
    temperatureSuggestedMaximum.innerText = temperatureChartClass.getSuggestedMaximum(temperatureChart);
  }
  document.getElementById('general_temperature_subtract_suggested_maximum_button').onclick = () => {
    temperatureChart = temperatureChartClass.subtractFromSuggestedMaximum(temperatureChart);
    temperatureSuggestedMaximum.innerText = temperatureChartClass.getSuggestedMaximum(temperatureChart);
  }

  // Temperature Chart end
  
  // Acelerations Chart start
  const acelerationsSuggestedMinimum = document.getElementById('general_acelerations_suggested_minimum');
  const acelerationsSuggestedMaximum = document.getElementById('general_acelerations_suggested_maximum');
  const acelerationsChartClass = new AcelerationsChart('general_acelerations_canvas');

  let acelerationsChart = acelerationsChartClass.getChart();

  acelerationsSuggestedMinimum.innerText = acelerationsChartClass.getSuggestedMinimum(acelerationsChart);
  acelerationsSuggestedMaximum.innerText = acelerationsChartClass.getSuggestedMaximum(acelerationsChart);

  document.getElementById('general_acelerations_add_suggested_minimum_button').onclick = () => {
    acelerationsChart = acelerationsChartClass.addToSuggestedMinimum(acelerationsChart);
    acelerationsSuggestedMinimum.innerText = acelerationsChartClass.getSuggestedMinimum(acelerationsChart);
  }
  document.getElementById('general_acelerations_subtract_suggested_minimum_button').onclick = () => {
    acelerationsChart = acelerationsChartClass.subtractFromSuggestedMinimum(acelerationsChart);
    acelerationsSuggestedMinimum.innerText = acelerationsChartClass.getSuggestedMinimum(acelerationsChart);
  }
  document.getElementById('general_acelerations_add_suggested_maximum_button').onclick = () => {
    acelerationsChart = acelerationsChartClass.addToSuggestedMaximum(acelerationsChart);
    acelerationsSuggestedMaximum.innerText = acelerationsChartClass.getSuggestedMaximum(acelerationsChart);
  }
  document.getElementById('general_acelerations_subtract_suggested_maximum_button').onclick = () => {
    acelerationsChart = acelerationsChartClass.subtractFromSuggestedMaximum(acelerationsChart);
    acelerationsSuggestedMaximum.innerText = acelerationsChartClass.getSuggestedMaximum(acelerationsChart);
  }

  // Acelerations Chart end
  // Gyros Chart start
  const gyrosSuggestedMinimum = document.getElementById('general_gyros_suggested_minimum');
  const gyrosSuggestedMaximum = document.getElementById('general_gyros_suggested_maximum');
  const gyrosChartClass = new GyrosChart('general_gyros_canvas');

  let gyrosChart = gyrosChartClass.getChart();

  gyrosSuggestedMinimum.innerText = gyrosChartClass.getSuggestedMinimum(gyrosChart);
  gyrosSuggestedMaximum.innerText = gyrosChartClass.getSuggestedMaximum(gyrosChart);

  document.getElementById('general_gyros_add_suggested_minimum_button').onclick = () => {
    gyrosChart = gyrosChartClass.addToSuggestedMinimum(gyrosChart);
    gyrosSuggestedMinimum.innerText = gyrosChartClass.getSuggestedMinimum(gyrosChart);
  }
  document.getElementById('general_gyros_subtract_suggested_minimum_button').onclick = () => {
    gyrosChart = gyrosChartClass.subtractFromSuggestedMinimum(gyrosChart);
    gyrosSuggestedMinimum.innerText = gyrosChartClass.getSuggestedMinimum(gyrosChart);
  }
  document.getElementById('general_gyros_add_suggested_maximum_button').onclick = () => {
    gyrosChart = gyrosChartClass.addToSuggestedMaximum(gyrosChart);
    gyrosSuggestedMaximum.innerText = gyrosChartClass.getSuggestedMaximum(gyrosChart);
  }
  document.getElementById('general_gyros_subtract_suggested_maximum_button').onclick = () => {
    gyrosChart = gyrosChartClass.subtractFromSuggestedMaximum(gyrosChart);
    gyrosSuggestedMaximum.innerText = gyrosChartClass.getSuggestedMaximum(gyrosChart);
  }
  // Acelerations Chart end
  // Pressure Chart start
  const pressureSuggestedMinimum = document.getElementById('general_pressure_suggested_minimum');
  const pressureSuggestedMaximum = document.getElementById('general_pressure_suggested_maximum');
  const pressureChartClass = new PressureChart('general_pressure_canvas');

  let pressureChart = pressureChartClass.getChart()

  pressureSuggestedMinimum.innerText = pressureChartClass.getSuggestedMinimum(pressureChart);
  pressureSuggestedMaximum.innerText = pressureChartClass.getSuggestedMaximum(pressureChart);

  document.getElementById('general_pressure_add_suggested_minimum_button').onclick = () => {
    pressureChart = pressureChartClass.addToSuggestedMinimum(pressureChart);
    pressureSuggestedMinimum.innerText = pressureChartClass.getSuggestedMinimum(pressureChart);
  }
  document.getElementById('general_pressure_subtract_suggested_minimum_button').onclick = () => {
    pressureChart = pressureChartClass.subtractFromSuggestedMinimum(pressureChart);
    pressureSuggestedMinimum.innerText = pressureChartClass.getSuggestedMinimum(pressureChart);
  }
  document.getElementById('general_pressure_add_suggested_maximum_button').onclick = () => {
    pressureChart = pressureChartClass.addToSuggestedMaximum(pressureChart);
    pressureSuggestedMaximum.innerText = pressureChartClass.getSuggestedMaximum(pressureChart);
  }
  document.getElementById('general_pressure_subtract_suggested_maximum_button').onclick = () => {
    pressureChart = pressureChartClass.subtractFromSuggestedMaximum(pressureChart);
    pressureSuggestedMaximum.innerText = pressureChartClass.getSuggestedMaximum(pressureChart);
  }


  // Pressure Chart end
  setInterval(() => {
    altitudeChart.update();
    temperatureChart.update();
    acelerationsChart.update();
    gyrosChart.update();
    pressureChart.update();
  }, 200);
})();

