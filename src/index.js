const boardTag = document.getElementById('game-board');
const cellNumbers = 20000;

for (let i = 0; i < cellNumbers; i++) {
  const cellTag = document.createElement('div');
  cellTag.classList.add('cell');
  cellTag.setAttribute('data-id', `${i}`);
  boardTag.appendChild(cellTag);
}

boardTag.addEventListener('click', (e) => {
  e.target.classList.add('cell--life');
  console.log('---------------------->', e.target);
});
