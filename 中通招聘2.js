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
})()