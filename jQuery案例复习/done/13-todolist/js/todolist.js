$(function() {
    load();
    $("input").on("keydown",function(e){
        if(e.keyCode == 13 && $(this).val() !== '') {
            var data = getData();
            data.push({title:$(this).val(),done:false});
            saveData(data);
            $(this).val('');
            load();
        }
    })
    function getData() {
        var data = JSON.parse(localStorage.getItem("todolist"));
        if(data.length !== 0) {
            return data;
        } else {
            return [];
        }
    }
    function saveData(mydata) {
        localStorage.setItem("todolist",JSON.stringify(mydata));
    }
    function load() {
        $("ol").html('');
        $("ul").html('');
        var data = getData();
        $(data).each(function(i,ele) {
            if(!ele.done) {
                var li = $("<li><input type='checkbox' />"+ ele.title +"<a href='JavaScript:;' id="+ i +"></a></li>")
                $("ol").prepend(li);
                
            } else {
                var li = $("<li><input type='checkbox' checked='checked'/>"+ ele.title +"<a href='JavaScript:;' id="+ i +"></a></li>")
                $("ul").prepend(li);

            }
        })
        $("#todocount").text($("ol li").length);
        $("#donecount").text($("ul li").length);
    }

    $("ol,ul").on("click","a",function() {
        var data = getData();
        var index = $(this).prop("id");
        data.splice(index,1);
        saveData(data);
        load();
    })

    $("ol,ul").on("click","input",function(){
        var data = getData();
        data[$(this).siblings('a').prop("id")].done = !data[$(this).siblings('a').prop("id")].done;
        saveData(data);
        load();
    })
})