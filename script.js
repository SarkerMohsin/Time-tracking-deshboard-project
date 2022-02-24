const link = document.querySelectorAll('a');

link[1].addEventListener('click', showWeeklyTimeDesh);

function showWeeklyTimeDesh() {
    const workHour = document.querySelector('.workHour');
    const playTime = document.querySelector('.playTime');
    const studyTime = document.querySelector('.studyTime');
    const exercise = document.querySelector('.exercise');
    const social = document.querySelector('.social');
    const selfCare = document.querySelector('.self-care');
    const allH3 = document.querySelectorAll('h3');
    workHour.textContent = '32hrs';
    playTime.textContent = '10hrs';
    studyTime.textContent = '4hrs';
    exercise.textContent = '4hrs';
    social.textContent = '5hrs';
    selfCare.textContent = '2hrs';
    allH3[0].textContent = 'Last week - 36hrs';
    allH3[1].textContent = 'Last week - 8hrs';
    allH3[2].textContent = 'Last week - 7hrs';
    allH3[3].textContent = 'Last week - 5hrs';
    allH3[4].textContent = 'Last week - 10hrs';
    allH3[5].textContent = 'Last week - 2hrs';
}
