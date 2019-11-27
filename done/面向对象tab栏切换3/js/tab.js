// 切换 添加 删除 改写
var that;
class Tab {
	constructor(id){
		that= this;
		this.tab = document.querySelector(id);
		this.add = this.tab.querySelector(".tabadd");
		this.ul = this.tab.querySelector("ul");
		this.tabscon = this.tab.querySelector(".tabscon");
		this.init();
	}
	init() {
		this.updateNode();
		this.add.onclick = this.addTab;
		for(var i = 0;i < this.lis.length;i++) {
			this.lis[i].index = i;
			this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);
			this.remove[i].onclick = this.removeTab.bind(this.remove[i],this);
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
		}
	}
	clearClass() {
		for(var i = 0;i < this.lis.length;i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}
	updateNode(){
		this.lis = this.tab.querySelectorAll("li");
		this.sections = this.tab.querySelectorAll("section");
		this.remove = this.tab.querySelectorAll(".icon-guanbi");
		this.spans = this.tab.querySelectorAll("li span:first-child");
	}
	toggleTab(that){
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';
	}
	addTab() {
		// var li = '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
		// that.ul.insertAdjacentHTML("beforeend",li);
		var li = that.tab.querySelector("li.liactive").cloneNode(true);
		var section = that.tab.querySelector("section.conactive").cloneNode(true);
		that.clearClass();
		that.ul.appendChild(li);
		that.tabscon.appendChild(section);
		that.init();
	}
	removeTab(that,e){
		e.stopPropagation();
		this.parentNode.remove();
		that.sections[this.parentNode.index].remove();
		that.init();
		if(document.querySelector('.liactive')) return;
		that.lis[this.parentNode.index - 1].click();
	}
	editTab(){
		window.getSelection? window.getSelection().removeAllRanges() : document.selection.empty();
		var str = this.innerHTML;
		this.innerHTML ='<input type="text" />';
		var input = this.querySelector('input');
		input.value = str;
		input.select();
		input.onblur = function(){
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