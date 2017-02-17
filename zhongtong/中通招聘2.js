/**
 * Created by Administrator on 2017/2/15 0015.
 */
(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
    })
//    旋转动画
    var music=document.querySelector('.img-1-4');
    var audio=document.querySelector('audio');
    music.onclick=function () {
        if(audio.paused){
            audio.play();
            music.style.webkitAnimationPlayState='running';
        }else{
            audio.pause();
            music.style.webkitAnimationPlayState='paused';
        }
    }

    //横竖屏状态
    window.addEventListener("orientationchange", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            //alert('竖屏状态！');
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            alert('当前为横屏状态,竖屏状态下体验效果更佳!');
        }
    }, false);
})()
