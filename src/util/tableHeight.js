/**
 * Created by wangyu on 2017/9/15.
 */
let tableHeight = function () {
    //获取浏览器窗口高度
    var winHeight=0;
    // divHeight = document.getElementById(args.id).offsetHeight;
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    //通过Document对body进行检测，获取浏览器可视化高度
    if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight;
    }
    //DIV高度为浏览器窗口高度
    if (winHeight < 300) {
        return 300
    } else {
        return (winHeight - 250)
    }
}

exports.tableHeight = tableHeight;
