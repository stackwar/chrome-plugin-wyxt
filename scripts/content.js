window.onload=function(){
  const v = document.getElementById('vjs_video_3_html5_api')
  if(v){
    // setTimeout(()=>{
    //   player.onPause = function (event) {
    //     v.play()
    //     console.log('restart');
    //    }
    // },3000)
    // setInterval(()=>{
    //   v.onplay()
    // },5000)
    v.setAttribute('autoplay',true)
    v.addEventListener('pause',()=>{
      console.log('pause')
      v.play()
    })
  }
}