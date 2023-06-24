//^ --------- items 'Cross' ---------  
let allCross = document.querySelectorAll('.cross')
let popup = document.querySelector('.cross__popup')

let isOpenPopup = false
let widthWindow = document.body.clientWidth

const closeAllPopups = () => {
	allCross.forEach(el => el.classList.remove('selected'))
	isOpenPopup = false
}
const animateLight = (shape, light) => {
	const x = shape.offsetX
	const y = shape.offsetY

	const keyframes = {
		transform: `translate(${x}px, ${y}px)`
	}

	light.animate(keyframes, {
		duration: 50,
		fill: 'forwards'
	})
}

const fixedLight = (light, time) => {
	const keyframes = {
		transform: 'translate(50%, 50%)'
	}

	light.animate(keyframes, {
		duration: time,
		fill: 'forwards'
	})
}

allCross.forEach(shape => {
	shape.addEventListener('mouseenter', (e) => {
		let cross = e.target.closest('.cross')
		cross.classList.add('hovered')
	})

	shape.addEventListener('mouseleave', (e) => {
		let cross = e.target.closest('.cross')
		cross.classList.remove('hovered')
	})

	shape.addEventListener('mousemove', (e) => {
		let cross = e.target.closest('.cross')
		let light = cross.querySelector('.cross__light')

		if (!cross.classList.contains('selected')) animateLight(e, light)
	})

	shape.addEventListener('click', (e) => {
		let cross = e.target.closest('.cross')
		let light = cross.querySelector('.cross__light')
		let moveTimeLight

		if (document.body.clientWidth > 1239) moveTimeLight = 200
		else moveTimeLight = 0


		if (isOpenPopup) closeAllPopups()

		cross.classList.add('selected')
		fixedLight(light, moveTimeLight)
		isOpenPopup = true
	})
})

//^ --------- Popups --------- 

window.addEventListener('click', (e) => {
	if (isOpenPopup && !e.target.closest('.cross'))
		closeAllPopups()
	if (e.target.classList.contains('popup__btn-close')) {
		e.target.closest('.cross').classList.remove('selected')
		isOpenPopup = false
	}
})


//^ --------- Levels blocks --------- 

let levels = document.querySelectorAll('.level')
let levelTitle = document.querySelectorAll('.level__title')

levelTitle.forEach(title => title.addEventListener('click', (e) => {
	let parent = e.currentTarget.closest('.level')
	if (parent.classList.contains('active')) {
		parent.classList.remove('active')
	} else {
		levels.forEach(el => el.classList.remove('active'))
		types.forEach(el => el.classList.remove('active'))
		parent.classList.add('active')
	}
}))


//^ --------- Types blocks --------- 

let types = document.querySelectorAll('.type')
let typeTitle = document.querySelectorAll('.type__title')

typeTitle.forEach(title => title.addEventListener('click', (e) => {
	let parent = e.currentTarget.closest('.type')
	if (parent.classList.contains('active')) {
		parent.classList.remove('active')
	} else {
		types.forEach(el => el.classList.remove('active'))
		parent.classList.add('active')
	}
}))


