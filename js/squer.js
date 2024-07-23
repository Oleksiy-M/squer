const rect = document.getElementById('draggable-rect');
const boxSquer = document.querySelector('.box-squer');
const xCoord = document.getElementById('x-coord');
const yCoord = document.getElementById('y-coord');

let offsetX, offsetY;
let isDragging = false;

rect.addEventListener('mousedown', (e) => {
	isDragging = true;
	const rectBBox = rect.getBoundingClientRect();
	offsetX = e.clientX - rectBBox.left;
	offsetY = e.clientY - rectBBox.top;
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
	if (isDragging) {
		const boxRect = boxSquer.getBoundingClientRect();
		let x = e.clientX - boxRect.left - offsetX;
		let y = e.clientY - boxRect.top - offsetY;

		// Ensure the rectangle stays within the box-squer
		x = Math.max(0, Math.min(x, boxRect.width - rect.width.baseVal.value));
		y = Math.max(0, Math.min(y, boxRect.height - rect.height.baseVal.value));

		rect.setAttribute('x', x);
		rect.setAttribute('y', y);
		xCoord.textContent = x;
		yCoord.textContent = y;
	}
}

function onMouseUp() {
	isDragging = false;
	document.removeEventListener('mousemove', onMouseMove);
	document.removeEventListener('mouseup', onMouseUp);
}




