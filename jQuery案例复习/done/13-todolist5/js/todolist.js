$(function(){
	loadData();
	$("#title").keydown(function(e){
		if(e.keyCode == 13 && $(this).val() !== '') {
			var data = getData();
			data.push({"title":$(this).val(),"done":false});
			setData(data);
			loadData();
			$(this).val('');
		}
	})

	function getData() {
		var data = JSON.parse(localStorage.getItem("todolist"));
		if(data !== null) {
			return data;
		} else {
			data = [];
			return data;
		}
	}

	function setData(mydata) {
		localStorage.setItem("todolist",JSON.stringify(mydata));
	}

	function loadData() {
		$("ol").html('');
		$("ul").html('');
		var data = getData();
		$(data).each(function(i,ele) {
			if(ele.done == false) {
				$("ol").prepend("<li><input type='checkbox' />" + ele.title + "<a href='JavaScript:;' id="+ i +"></a></li>");
			} else {
				$("ul").prepend("<li><input type='checkbox' checked/>" + ele.title + "<a href='JavaScript:;' id="+ i +"></a></li>");
			}
		})
		$("#todocount").text($("ol li").length);
		$("#donecount").text($("ul li").length);
	}

	$("ul,ol").on("click","a",function() {
		var data = getData();
		var index = $(this).prop("id");
		data.splice(index,1);
		setData(data);
		loadData();
	})
	$("ul,ol").on("click","input",function(){
		var data = getData();
		var index = $(this).siblings('a').prop("id");
		data[index].done = !data[index].done;
		setData(data);
		loadData();
	})
})