class Tab {
	constructor(id) {
		this.main = document.querySelector(id);
		this.add = this.main.querySelector('.tabadd');
		this.ul = this.main.querySelector('.firstnav ul');
		this.tabscon = this.main.querySelector('.tabscon');
		this.init();
	}
	init() {
		this.updateObject();
		this.add.onclick = this.tabAdd.bind(this.add,this);
		for(var i = 0;i < this.lis.length;i++) {
			this.lis[i].index = i;
			this.lis[i].onclick = this.tabToggle.bind(this.lis[i],this);
			this.close[i].onclick = this.tabRemove.bind(this.close[i],this);
			this.spans[i].ondblclick = this.tabEdit;
			this.sections[i].ondblclick = this.tabEdit;
		}
		
	}
	updateObject() {
		this.lis = this.main.querySelectorAll('li');
		this.sections = this.main.querySelectorAll('section');
		this.close = this.main.querySelectorAll('span.icon-guanbi');
		this.spans = this.main.querySelectorAll('li span:first-child');
	}
	clearClass() {
		for(var i = 0 ;i < this.lis.length;i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}
	tabToggle(that) {
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';
	}

	tabAdd(that) {
		that.clearClass();
		var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
		var section = '<section class="conactive">测试1</section>';
		that.ul.insertAdjacentHTML('beforeend',li);
		that.tabscon.insertAdjacentHTML('beforeend',section);
		that.init();
	}

	tabRemove(that,e) {
		e.stopPropagation();
		this.parentNode.remove();
		that.sections[this.parentNode.index].remove();
		that.init();
		if(document.querySelector('.liactive')) return;
		that.lis[this.parentNode.index - 1] && that.lis[this.parentNode.index - 1].click();	
	}

	tabEdit() {
		var str = this.innerHTML;
		window.getSelection? window.getSelection().removeAllRanges() : document.selection.empty();
		this.innerHTML = '<input type="text" />';
		var input  = this.querySelector('input');
		input.value = str;
		input.select();
		input.onblur = function() {
			this.parentNode.innerHTML = this.value;
		}
		input.onkeyup = function(e) {
			if(e.keyCode == 13) {
				this.blur();
			}
		}
	}
}
new Tab('#tab');