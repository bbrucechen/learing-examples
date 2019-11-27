var that;
class Tab {
	constructor(id) {
		that = this;
		this.tab = document.querySelector(id);
		this.add = this.tab.querySelector('.tabadd');
		this.ul = this.tab.querySelector('firstnav ul');
		this.tabscon = this.tab.querySelector('.tabscon');
		this.init();
	}

	init() {
		this.updateNode();
		for(var i = 0;i < this.lis.length;i ++) {
			this.lis[i].index = i;
			this.lis[i].onclick = this.toggleTab;
			this.remove[i].onclick = this.removeTab;
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
		}
		this.add.onclick = this.addTab;
	}

	updateNode() {
		this.lis = this.tab.querySelectorAll('li');
		this.sections = this.tab.querySelectorAll('section');
		this.remove = this.tab.querySelectorAll('.icon-guanbi');
		this.spans = this.lis.querySelectorAll('span:first-child');
	} 

	clearClass() {
		for(var i =0;i < this.lis.length;i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';		
		}
	}

	toggleTab() {
		clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';
	}

	addTab() {
		clearClass();
		var li = '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
		var section = '<section class="conactive">测试1</section>';
		that.ul.insertAdjacentHTML('beforeend',li);
		that.tabscon.insertAdjacentHTML('beforeend',section);
		thta.init();
	}

	removeTab(e) {
		e.stopPropagation();
		this.parentNode[this.parentNode.index].remove();
		that.sections[this.parentNode.index].remove();
		that.init();
		if(document.querySelector('.liactive')) return;
		that.lis[this.parentNode.index - 1].click();
	}

	editTab() {
		var str = this.innerHTML;
		window.getSelection? window.getSelection().removeAllRanges() : document.selection.empty();
		this.innerHTML = '<input type="text" />';
		var input = this.children[0];
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