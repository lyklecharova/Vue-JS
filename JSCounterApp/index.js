let count = 0;

const countHeader = document.getElementById('count');
const countAddBtn = document.getElementById('add');
const countSubstractBtn = document.getElementById('substract');

countHeader.innerText = count;

countAddBtn.addEventListener('click', () => {
    count++;
    countHeader.innerText = count;

});

countSubstractBtn.addEventListener('click', () => {
    count--;
    countHeader.innerHTML = count;
});