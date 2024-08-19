const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const calendar = document.querySelector('.calendar');
const month = document.getElementById('month');
const days = document.querySelector('.days');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let date = new Date();
let curMonth = date.getMonth();
let curYear = date.getFullYear();

const renderCalendar = () => {
  const firstDayOfMonth = new Date(curYear, curMonth, 1);
  const lastDayOfMonth = new Date(curYear, curMonth + 1, 0);
  const totalDays = lastDayOfMonth.getDate();
  const firstDayIndex = firstDayOfMonth.getDay();

  month.textContent = `${monthNames[curMonth]} ${curYear}`;

  let daysHtml = '';

  for (let i = 0; i < firstDayIndex; i++) {
    daysHtml += '<div class="day"></div>';
  }

  for (let i = 1; i <= totalDays; i++) {
    daysHtml += `<div class="day">${i}</div>`;
  }

  days.innerHTML = daysHtml;
};

renderCalendar();

prev.addEventListener('click', () => {
  curMonth--;
  if (curMonth < 0) {
    curMonth = 11;
    curYear--;
  }
  renderCalendar();
});

next.addEventListener('click', () => {
  curMonth++;
  if (curMonth > 11) {
    curMonth = 0;
    curYear++;
  }
  renderCalendar();
});