let progressRings = document.querySelectorAll(".progress-ring");

for (var i = 0, len = progressRings.length; i < len; i++) {
	let progressMin = parseFloat(progressRings[i].dataset.min);
	let progressMax = parseFloat(progressRings[i].dataset.max);
	let progressVal = parseFloat(progressRings[i].dataset.value);
	let radius = progressRings[i].r.baseVal.value;
	let circumference = 2 * Math.PI * radius;
	let k = getProgressKoef(progressMin, progressMax, progressVal);
	progressRings[i].style.strokeDasharray = `${circumference}, ${circumference}`;
	progressRings[i].style.strokeDashoffset = circumference;
	setProgress(progressRings[i], circumference, k);
    //console.log(circumference);
}

function getProgressKoef(min, max, val) {
	if (val > max) {
		val = max;
	} else if (val < min) {
		val = min;
	} 
	return (val-min)/(max-min);
}

function setProgress(circle, circumference, koef) {
	const offset = circumference - koef * circumference;
	console.log(offset);
	circle.style.strokeDashoffset = offset;
}

const sideBarItems = document.getElementsByClassName("sidebar__item");
const blocks = document.getElementsByClassName("top__main");
const mainPage = document.querySelector('.main-page');
if (mainPage) {
	Array.from(sideBarItems).forEach(function(element) {
	console.log("lol");
	// if(element.closest(".main-page")) {
		console.log("hi");
		element.addEventListener('click', (event) => {
		for (let item of sideBarItems) {
			item.classList.remove('sidebar__item_active');
		}
		element.classList.add('sidebar__item_active');
		const i = [].indexOf.call(sideBarItems, element);
		for (let block of blocks) {
			block.classList.remove('top__main_active');
		}
		blocks[i].classList.add('top__main_active');
		console.log(i);
	});
	//}
	
});
}


let deleteBtns = document.querySelectorAll(".delete-btn");
let deleteOverlay = document.querySelector(".modal-overlay");

// Блокировка скролла

const disableScroll = () => {
	const widthScroll = window.innerWidth - document.body.offsetWidth;
	document.body.dbScrollY = window.scrollY;
	document.body.style.cssText = `
		position: fixed;
		top: ${-window.scrollY}px;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		padding-right: ${widthScroll}px;
	`;
}

const enableScroll = () => {
	document.body.style.cssText = ``;
	window.scroll({
		top: document.body.dbScrollY
	});
}

const deleteModalOpen = () => {
	deleteOverlay.classList.add('modal-overlay_open');
	disableScroll();
}
const deleteModalClose = () => {
	deleteOverlay.classList.remove('modal-overlay_open');
	enableScroll();
}

Array.from(deleteBtns).forEach(function(element) {
	element.addEventListener('click', deleteModalOpen);

});	

if (deleteOverlay) {
	deleteOverlay.addEventListener('click', event => {
	const target = event.target;
	if (target.classList.contains('delete-modal__btn') || target.matches('.modal-overlay')) {
		deleteModalClose();
	}
});
}

/*Task switcher*/

const switcher = document.querySelector('.top__heading-switcher');
if (switcher) {
	const switcherBtns = switcher.querySelectorAll('.top__heading-btn');
	for (let switchBtn of switcherBtns) {
		switchBtn.addEventListener('click', function () {
			for (let btn of switcherBtns) {
				btn.classList.remove('top__heading-btn_active');
			}	
			switchBtn.classList.add('top__heading-btn_active');
		});		
	}	
}


/* Checked task */
const tasks = document.getElementsByClassName("task-box");
for (let task of tasks) {
	let taskInput = task.querySelector('input[type=checkbox]');
	taskInput.addEventListener('change', function () {
		if (taskInput.checked) {
			task.classList.add('task-box_checked');
		} else {
			task.classList.remove('task-box_checked');
		}
	});	
}	

/*Text more*/ 

const bigTexts = document.getElementsByClassName("big-text");
for (let bigText of bigTexts) {
	let moreText = bigText.querySelector('.big-text__more');
	let moreTextBtn = bigText.querySelector('.big-text__btn');
	let dots = bigText.querySelector('.big-text__dots');	
	moreTextBtn.addEventListener('click', event => {
		if (dots.style.display === "none") {
    		dots.style.display = "inline";
    		moreTextBtn.innerHTML = "Читать больше"; 
    		moreText.style.display = "none";
		} else {
			dots.style.display = "none";
			moreTextBtn.innerHTML = "уменьшить"; 
			moreText.style.display = "block";
		}
	});
}

/*Burger*/
const sidebar = document.querySelector('.sidebar')
const sidebarItems = document.querySelectorAll('.sidebar__item');
//const burgerBtns = document.querySelectorAll('.burger-btn');
const burgerBtn = document.querySelector('.burger-btn')
// for (let burgerBtn of burgerBtns) {
	burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('burger-btn_active');
	sidebar.classList.toggle('sidebar_active');

	});
//}


for (let sidebarItem of sideBarItems) {
	sidebarItem.addEventListener('click', function(){
		burgerBtn.classList.remove('burger-btn_active');
		sidebar.classList.remove('sidebar_active');
	});		
}	





