$(function(){
	// 打开页面加载本地存储中的信息
	loadData();
	// 设置敲击回车添加备忘录事件
	$("#title").keydown(function(e){
		if(e.keyCode == 13) {
			// 获取本地存储的数据  本地数据存储格式：[{title：备忘录内容，done：完成与否标记},{title：备忘录内容，done：完成与否标记},...]
			var data = getData();
			// 将文本框中内容添加进去，默认为未完成事项
			data.push({"title":$(this).val(),"done":false});
			// 将修改后的数据重新导入本地存储
			setData(data);
			// 渲染本地存储事件
			loadData();
		}
	})

	// 获取本地存储数据函数
	function getData() {
		// 数据都被保存在本地存储的"todolist"项中
		var data = localStorage.getItem("todolist");
		// 如果数据为无，则返回一个空数组
		if(data == null) {
			return [];
		} else {
			// 否则返回解析后的数据
			return JSON.parse(data);
		}
	}

	// 设置本地存储数据的函数 参数为修改后的备忘录内容数据
	function setData(mydata) {
		// 由于本地存储只能存储字符串，所以必须将其序列化再存储
		localStorage.setItem("todolist",JSON.stringify(mydata));
	}

	// 渲染数据函数
	function loadData() {
		// 先获取数据
		var data = getData();
		// 将两个列表清空，反正重复渲染
		$("#todolist").html('');
		$("#donelist").html('');
		// 遍历数据进行渲染
		$(data).each(function(i,ele){
			// 如果是未完成，则添加到未完成，input的状态为未选中，且a中有id属性代表其序数，以便后面进行删除操作
			if(ele.done == false) {
				var li = $("<li><input type='checkbox' name='' id='' /><p>" + ele.title + "</p><a href='JavaScript:;'' id="+i+"></a></li>");
				$("#todolist").append(li);
			} else {
			// 如果是已完成，则添加到已完成，input的状态为选中，a中也有id属性	
				var li = $("<li><input type='checkbox' name='' id='' checked /><p>" + ele.title + "</p><a href='JavaScript:;' id="+i+"></a></li>");
				$("#donelist").append(li);
			}
		})
		// 同时将事项数量写上
		$("#todocount").text($("#todolist")[0].children.length);
		$("#donecount").text($("#donelist")[0].children.length);

	}

	// 删除操作
	$("ul,ol").on("click","a",function(){
		// 获取数据 根据点击的删除键的id属性获取其序数再用splice函数直接删除
		var data = getData();
		data.splice($(this).prop("id"),1);
		setData(data);
		loadData();
	})

	// 修改完成状态操作
	$("ul,ol").on("click","input",function(){
		// 直接获取数据，修改对应对象的done属性，重新渲染即可
		var data = getData();
		data[$(this).siblings('a').prop("id")].done = !data[$(this).siblings('a').prop("id")].done;
		setData(data);
		loadData();
	})
})