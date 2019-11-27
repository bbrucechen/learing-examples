function animate(obj,target,callback) {
	clearInterval(timer);
	obj.timer = setInterval(function(){
		if(obj.offsetLeft == target) {
			clearInterval(obj.timer);
			if(callback) {
				callback();
			}
		}
		var step = (target - obj.offsetLeft) / 10;
		step = step > 0? Math.ceil(step):Math.floor(step);
		obj.style.left = obj.offsetLeft + step + 'px';
	},15)
}