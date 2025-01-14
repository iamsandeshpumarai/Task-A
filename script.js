const container = document.getElementById('container');
let isDragging = false;
let startY;
let scrollStart;

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  scrollStart = container.scrollTop;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  container.scrollTop = scrollStart - deltaY;
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

const boxes = document.querySelectorAll('.box');

function checkFocusedBox() {
  boxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const isBoxCentered = rect.top >= containerRect.top && rect.bottom <= containerRect.bottom;
    if (isBoxCentered) {
      box.classList.add('focused');
    } else {
      box.classList.remove('focused');
    }
  });
}

container.addEventListener('scroll', checkFocusedBox);
checkFocusedBox();
