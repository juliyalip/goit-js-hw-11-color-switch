const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

refs.start.addEventListener('click', onClick); // кнопка старт
refs.stop.addEventListener('click', stopClick); // кнопка стоп


const TIME_INTERVAL = 1000; //  раз в секунду меняет цвет фона 
let timerId = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; // Для генерации случайного числа (индекс элемента массива цветов)



function onClick() {
  refs.start.disabled = true
   timerId = setInterval(() => {
   document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];  
}, TIME_INTERVAL)
 };


function stopClick() {
  clearInterval(timerId);
  refs.start.disabled = ''
  refs.start.disablet = false
  };
