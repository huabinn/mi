window.onload = function(){
    // 存储图片得数组
    var arrPic = [
        './pictures/mi10.jpg',
        './pictures/redmi.webp',
        './pictures/k30.webp',
        './pictures/zhinengjaiju.webp',
        './pictures/TV.webp'
    ];

    var image = document.getElementById("image");
    var point = document.getElementsByClassName("point");
    var targetleft = document.getElementsByClassName("target-left");
    var targetright = document.getElementsByClassName("target-right");

    var index = 0;

    // 点击切换图片
    for(var i=0 ; i<point.length ; i++){
        point[i].num = i;
        point[i].onclick = function(){
            index = this.num;
            pointer();
            imgShow();
        };
    }
    targetleft[0].onclick = function(){
        index = (arrPic.length + index - 1) % arrPic.length;
        pointer();
        imgShow();
    }
    targetright[0].onclick = function(){
        index = (index + 1) % arrPic.length;
        pointer();
        imgShow();
    }


    // 将显示的图片对应的圆点变白
    function pointer(){
        for(var i=0 ; i<point.length ; i++){
            point[i].style.backgroundColor = "";
        }
        point[index].style.backgroundColor = "#fff";
    }
    // 显示图片函数
    function imgShow(){
        image.src = arrPic[index];
    }
    
    autoChange();
    
    // 设置自动轮播图
    var timer
    function autoChange(){
        console.log("start");
        timer = setInterval(function(){
            pointer();
            imgShow();
            index = (index + 1) % (arrPic.length);
            console.log("endding");
        },5000);
    }
};