$(function() {
	load();
	$("#title").keydown(function(e) {
		if(e.keyCode == 13 && $(this).val() !== '') {
			var data = getData();
			data.push({title: $(this).val(),done:false});
			setData(data);
			load();
			$(this).val("");
		}
	})
	function getData() {
		var data = JSON.parse(localStorage.getItem("todolist"));
		if(data.length != 0) {
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
	 	var data  = JSON.parse(localStorage.getItem("todolist"));
	 	$(data).each(function(i,ele) {
	 		if(ele.done == false) {
	 			$("ol").prepend("<li><input type='checkbox' /><p>" + ele.title +"</p><a href='JavaScript:;' id=" + i+ "></a></li>");
	 		} else {
	 			$("ul").prepend("<li><input type='checkbox' checked='checked' /><p>" + ele.title +"</p><a href='JavaScript:;' id=" + i+ "></a></li>");
	 		}
	 	})
	 	$("#todocount").text($("ol li").length);
	 	$("#donecount").text($("ul li").length);

	}

	$("ol,ul").on("click","a",function() {
		var data = getData();
		var index  = $(this).prop("id");
		data.splice(index,1);
		setData(data);
		load();
	})

	$("ol,ul").on("click","input",function() {
		var data = getData();
		var index = $(this).siblings("a").prop("id");
		data[index].done = !data[index].done;
		setData(data);
		load();
	})
})