window.onload = function(){
	var ul = document.querySelector(".focus ul");
	var ol = document.querySelector(".focus ol");
	var focus = document.querySelector(".focus");
	var index = 0;
	var focusWidth = focus.offsetWidth; 
	var timer = setInterval(function(){
		index ++;
		ul.style.transition = 'all .3s';
		ul.style.transform = "translateX(" + -index * focusWidth + "px)";
	},2000);

	ul.addEventListener("transitionend",function(){
		if(index >= ul.children.length - 2) {
			// console.log(1);
			index = 0;
			ul.style.transition = 'none';
			ul.style.transform = "translateX(" + -index * focusWidth + "px)";
		}
		if(index < 0) {
			index = 2;
			ul.style.transition = 'none';
			ul.style.transform = "translateX(" + -index * focusWidth + "px)";
		}
		for(var i = 0;i < ol.children.length;i++) {
			ol.children[i].classList.remove("current");
			ol.children[index].classList.add("current");
		}
	})

	var startX = 0;
	var moveX = 0;
	ul.addEventListener("touchstart",function(e){
		startX =  e.targetTouches[0].pageX;
		// console.log(startX);
		clearInterval(timer);
		// timer = null;
	})
	ul.addEventListener("touchmove",function(e){
		moveX =  e.targetTouches[0].pageX - startX;
		ul.style.transition = 'none';
		ul.style.transform = "translateX(" +  ((-index * focusWidth)+moveX) + "px)";
		e.preventDefault();
	})
	ul.addEventListener("touchend",function(e){
		if(Math.abs(moveX) > 50) {
			if(moveX > 0) {
				index --;
				ul.style.transition = 'all .3s';
				ul.style.transform = "translateX(" +  -index * focusWidth + "px)";
			} 
			if(moveX < 0) {
				index ++;
				ul.style.transition = 'all .3s';
				ul.style.transform = "translateX(" +  -index * focusWidth + "px)";
			}
		} else {
			ul.style.transition = 'all .3s';
			ul.style.transform = "translateX(" +  -index * focusWidth + "px)";
		}
		clearInterval(timer);
		timer = setInterval(function(){
		index ++;
		ul.style.transition = 'all .3s';
		ul.style.transform = "translateX(" + -index * focusWidth + "px)";
	},2000);
	})
	
	var goback = document.querySelector(".goBack");
	var nav = document.querySelector("nav");
	window.onscroll = function(e){
		console.log(1);
		if(window.pageYOffset >= nav.offsetTop) {
			goback.style.display = 'block';
		} else {
			goback.style.display = 'none';
		}
	}
	
	goback.onclick = function(){
		window.scroll(0,0);
	}
}