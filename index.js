const body = document.querySelector('body')
const slider = document.querySelector('.switch-checkbox')

console.log(body.classList)

const handleClick = () => {
	if (slider.checked) {
		body.classList.remove('body-blue')
		body.classList.add('body-green')
	} else {
		body.classList.remove('body-green')
		body.classList.add('body-blue')
	}
}

slider.addEventListener('click', handleClick)
