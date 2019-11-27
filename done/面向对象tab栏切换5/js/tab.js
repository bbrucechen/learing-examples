var that;
class Tab {
	constructor(id) {
		// that = this;
		this.main = document.querySelector(id);
		this.add = this.main.querySelector(".tabadd");
		this.ul = this.main.querySelector("ul");
		this.tabscon = this.main.querySelector(".tabscon");
		this.init();
	}
	init() {
		this.updataNode();
		this.add.onclick = this.addTab.bind(this.add,this);
		for(var i = 0;i< this.lis.length;i++) {
			this.lis[i].index = i;
			this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);
			this.close[i].onclick = this.removeTab.bind(this.close[i],this);
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
		}
	}
	updataNode() {
		this.lis = this.main.querySelectorAll("li");
		this.sections = this.main.querySelectorAll("section");
		this.close = this.main.querySelectorAll(".icon-guanbi");
		this.spans = this.main.querySelectorAll("li span:first-child");
	}
	clearClass() {
		for(var i = 0;i<this.lis.length;i++) {
			this.lis[i].className = "";
			this.sections[i].className = "";
		}
	}
	addTab(that) {
		that.clearClass();
		var li = '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
		var section = '<section class="conactive">测试1</section>';
		that.ul.insertAdjacentHTML("beforeend",li);
		that.tabscon.insertAdjacentHTML("beforeend",section);
		that.init();
	}
	toggleTab(that) {
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';
	}
	removeTab(that,e) {
		e.stopPropagation();
		this.parentNode.remove();
		that.sections[this.parentNode.index].remove();
		if(!document.querySelector(".liactive")) {
			that.lis[this.parentNode.index - 1].className = "liactive";
			that.sections[this.parentNode.index - 1].className = "conactive";
		}
		that.init();
	}
	editTab() {
		var str = this.innerHTML;
		var input = document.createElement("input");
		input.value = str;
		this.innerHTML = '';
		this.appendChild(input);
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
new Tab("#tab");