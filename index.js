const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = '#ff69b4'

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
	if (left > 0) {
		dodger.style.left = `${left - 1}px` // Move dodger left only if he isn't already at the leftmost position
	}
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
	if (left < 360) {
		dodger.style.left = `${left + 1}px` // Move dodger right only if he isn't already at the rightmost position
	}
}

document.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowLeft') {
		moveDodgerLeft()
        // console.log('move left')
	}
})

document.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowRight') {
        moveDodgerRight()
        // console.log('move right')
    }
})
