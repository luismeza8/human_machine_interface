const general = document.getElementById('general');
const atmosfera = document.getElementById('atmosfera');
const estructura = document.getElementById('estructura');
const mensajeria = document.getElementById('mensajeria');

const generalBtn = document.getElementById('generalBtn');
const atmosferaBtn = document.getElementById('atmosferaBtn');
const estructuraBtn = document.getElementById('estructuraBtn');
const mensajeriaBtn = document.getElementById('mensajeriaBtn');

generalBtn.onclick = () => {
  estructura.classList.add('hidden');
  atmosfera.classList.add('hidden');
  mensajeria.classList.add('hidden');
  general.classList.remove('hidden');
}

atmosferaBtn.onclick = () => {
  estructura.classList.add('hidden');
  general.classList.add('hidden');
  mensajeria.classList.add('hidden');
  atmosfera.classList.remove('hidden');
}

estructuraBtn.onclick = () => {
  general.classList.add('hidden');
  atmosfera.classList.add('hidden');
  mensajeria.classList.add('hidden');
  estructura.classList.remove('hidden');
}

mensajeriaBtn.onclick = () => {
  general.classList.add('hidden');
  atmosfera.classList.add('hidden');
  estructura.classList.add('hidden');
  mensajeria.classList.remove('hidden');
}
