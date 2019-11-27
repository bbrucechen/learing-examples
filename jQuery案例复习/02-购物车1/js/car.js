$(function(){
	getSum();
	// 全选功能 将全选按钮的状态赋予三个小的按钮
	$(".checkall").change(function(){
		$(".j-checkbox").prop("checked",$(this).prop("checked"));
		$(".checkall").prop("checked",$(this).prop("checked"));
		$(".j-checkbox").parents(".cart-item").removeClass('check-cart-item');
		$(".j-checkbox:checked").parents(".cart-item").addClass('check-cart-item');
		getSum();
	})
	// 如果复选框被选中的个数等于3，就应该把全选按钮选上，否则全选按钮不选 可以利用：checked 选择器确定被选中的表单
	$(".j-checkbox").change(function() {
		if($(".j-checkbox:checked").length == 3) {
			// 添加属性值时，如果是布尔值则不用加引号
			$(".checkall").prop("checked",true);
		} else {
			$(".checkall").prop("checked",false);
		}
		$(".j-checkbox").parents(".cart-item").removeClass('check-cart-item');
		$(".j-checkbox:checked").parents(".cart-item").addClass('check-cart-item');
		getSum();
	})
	// 增减商品数量模块 声明变量 点击加号则加一并赋予表单
	var num;
	$(".increment").click(function(){
		// 表单获取的值是字符串
		num = parseInt($(this).siblings(".itxt").val()) + 1;
		$(this).siblings(".itxt").val(num);
		var price = parseFloat($(this).parents(".p-num").siblings('.p-price').text().substr(1));
		$(this).parents(".p-num").siblings('.p-sum').text("￥" + (num * price).toFixed(2));
		getSum();
	})
	$(".decrement").click(function(){
		num = parseInt($(this).siblings(".itxt").val()) - 1;
		if(num >= 0) {
			$(this).siblings(".itxt").val(num);
			var price = parseFloat($(this).parents(".p-num").siblings('.p-price').text().substr(1));
			$(this).parents(".p-num").siblings('.p-sum').text("￥" + (num * price).toFixed(2));
		}
		getSum();
	})

	// 计算总计和总额模块
	function getSum() {
		$(".amount-sum em").text($(".j-checkbox:checked").length);
		var sum = 0;
		$(".j-checkbox:checked").each(function(i,ele) {
			sum += parseFloat($(this).parents().siblings('.p-sum').text().substr(1));
		})
		$(".price-sum em").text("￥" + sum.toFixed(2));
	}
	// 删除商品模块
	// 1.商品后面的删除按钮
	$(".p-action").click(function(){
		$(this).parents(".cart-item").remove();
	})
	// 2.删除选中的商品
	$(".remove-batch").click(function(){
		$(".j-checkbox:checked").parents(".cart-item").remove();
	})
	// 3.清理购物车
	$(".clear-all").click(function(){
		$(".cart-item").remove();
	})
})	