$(function(){
	load();
	$("#title").on("keydown",function(e){
		if(e.keyCode == 13) {
			var data = getData();
			data.push({title:$(this).val(),done:false});
			setData(data);
			load();
		}
	})

	function getData(){
		var data = JSON.parse(localStorage.getItem("todolist"));
		if(data.length !== 0) {
			return data;
		} else {
			return [];
		}
	}

	function setData(mydata) {
		localStorage.setItem("todolist",JSON.stringify(mydata));
	}

	function load() {
		$("ol").html('');
		$("ul").html('');
		var data = getData();
		$(data).each(function(i,ele) {
			if(ele.done == false) {
				$("ol").append("<li><input type='checkbox' />" + ele.title + "<a href='JavaScript:;' id=" + i + "></a></li>");
			} else {
				$("ul").append("<li><input type='checkbox' checked='checked' />" + ele.title + "<a href='JavaScript:;' id=" + i + "></a></li>");
			}
		})
		$("#todocount").text($("ol li").length);
		$("#donecount").text($("ul li").length);
	}

	$("ul,ol").on("click","a",function(){
		var data = getData();
		var index = $(this).prop("id");
		data.splice(index,1);
		setData(data);
		load();
	})

	$("ul,ol").on("click","input",function() {
		var data = getData();
		data[$(this).siblings().prop("id")].done = !data[$(this).siblings().prop("id")].done;
		setData(data);
		load();
	})


})