(()=>{
  const altitudeCanvas = document.getElementById('altitude_canvas_atmosfera');

  function createChartConfig(datasets, suggestedMin, suggestedMax) {
    return {
      type: 'line',
      data: {
        labels: new Array(15),
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            suggestedMin: suggestedMin,
            suggestedMax: suggestedMax
          },
        },
        plugins: {
          legend: {
            display: false,
          },
      },
        animation: {
          duration: 1
        }
      },
    }
  }
  const altitudeChartConfig = createChartConfig([{data: new Array(15), borderWidth: 4}], 0, 100);

  const altitudeChart = new Chart(altitudeCanvas, altitudeChartConfig);

  altitudeChart.data.labels = xAxisValues;
  altitudeChart.data.datasets[0].data = altitudeValues;

  setInterval(function() {
    altitudeChart.update();
  }, 200)
})();
