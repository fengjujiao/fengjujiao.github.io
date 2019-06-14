$(function(){
    $(".mine-ul li").click(function(){
        console.log(this)
    })
    //菜单栏显示
    $(".mine-ul li").click(function(){
        $(this).addClass("act").siblings().removeClass("act");
        $(".mine-right-ul>li").eq($(".mine-ul li").index(this)).addClass("open").siblings().removeClass("open")
      })

    //   订单状态显示
    $(".list-class div").click(function(){
        $(this).addClass('select').siblings().removeClass('select');
        $('.order-list').eq($('.list-class div').index(this)).addClass('opened').siblings().removeClass("opened")
    })
})