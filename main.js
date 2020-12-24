window.onload = function() {
	const body = document.querySelector('body')
	const all = document.querySelector('.container-all')
	const ig = document.querySelector('.container-ig')
	const fb = document.querySelector('.container-fb')
	const wp = document.querySelector('.container-wp')
	const logo = document.querySelector('.logotype')
	const slider = document.querySelector('.slider')
	const preloader = document.querySelector('.preloader')
	const title = document.querySelector('.container-title')
	const underline = document.querySelector('.underline')
	const arrowIG = document.querySelector('.arrow-ig')
	const arrowFB = document.querySelector('.arrow-fb')
	const arrowWP = document.querySelector('.arrow-wp')

	ig.onclick = function() {
		window.open ('https://www.instagram.com/amd.impresionesdigitales/')
	}

	fb.onclick = function() {
		window.open ('https://www.facebook.com/AMD.impresiones')
	}

	wp.onclick = function() {
		window.open ('https://api.whatsapp.com/send/?phone=5491163070429&text&app_absent=0')
	}

	title.onmouseover = function() {
		underline.classList.toggle('hide')
	}

	title.onmouseout = function() {
		underline.classList.toggle('hide')
	}


	ig.onmouseover = function() {
		arrowIG.classList.toggle('rotate')
	}

	ig.onmouseout = function() {
		arrowIG.classList.toggle('rotate')
	}

	fb.onmouseover = function() {
		arrowFB.classList.toggle('rotate')
	}

	fb.onmouseout = function() {
		arrowFB.classList.toggle('rotate')
	}

	wp.onmouseover = function() {
		arrowWP.classList.toggle('rotate')
	}

	wp.onmouseout = function() {
		arrowWP.classList.toggle('rotate')
	}
 
 
	function charge() {
		all.classList.toggle('hide')
  		body.classList.toggle('overflow')
  		logo.classList.toggle('hide')
  		slider.classList.toggle('hide')
  		preloader.classList.toggle('hide')
  		title.classList.toggle('ani-title')
  		ig.classList.toggle('ani-ig')
  		fb.classList.toggle('ani-fb')
  		wp.classList.toggle('ani-wp')
  		arrowIG.classList.toggle('ani-arrow')
  		arrowFB.classList.toggle('ani-arrow')
  		arrowWP.classList.toggle('ani-arrow')
	}
	
	setTimeout(charge, 2500)
  
}