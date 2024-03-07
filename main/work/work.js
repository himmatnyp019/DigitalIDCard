

let mainImg = document.getElementById('main-img');

 document.addEventListener('DOMContentLoaded', function(){
     let stopLoop = 0;
    
let clicks = document.getElementsByClassName('nav');
for (let i = 0; i < clicks.length; i++) {
    
  
    clicks[1].addEventListener('click', function(){
        popImage();
        stopLoop++;
        mainImg.style.content='url(../../Resources/logo1.jpg)';
        
      });
      clicks[2].addEventListener('click', function(){
        popImage();
        stopLoop++;
        mainImg.style.content='url(../../Resources/logo2.jpg)';
        
    });
      clicks[3].addEventListener('click', function(){
        popImage();
        stopLoop++;
        mainImg.style.content='url(../../Resources/logo3.jpg)';
        
    });
      clicks[4].addEventListener('click', function(){
        popImage();
        stopLoop++;
        mainImg.style.content='url(Resources/skills.jpg)';
        
    });
      clicks[5].addEventListener('click', function(){
        popImage();
        stopLoop++;
        mainImg.style.content='url(Resources/skills.jpg)';
        
    });
      clicks[6].addEventListener('click', function(){
        popImage();
        stopLoop++;
        mainImg.style.content='url(Resources/skills.jpg)';
        
    });
      clicks[7].addEventListener('click', function(){
        popImage();
        stopLoop++;
        mainImg.style.content='url(Resources/skills.jpg)';
        
    });
    if (stopLoop === i) {
    break;
    console.log(stopLoop);
     }

}
});

function popImage() {
    mainImg.classList.remove('fig');
       mainImg.classList.add('animate');
       
       mainImg.addEventListener('animationend', function(){
        mainImg.classList.remove('animate');
        mainImg.classList.add('fig');
       })
    
}


  function goBack() {
    window.location.href='../home/main.html';
  }

  // For desktop and Mobiole view
const desktop = document.getElementById('desktop');
const mobile = document.getElementById('mobile');
const square = document.getElementById('square');

    function desktopView() {
        checkSize();
        desktop.style.color="#ff004f"
        mobile.style.color="#fff"
        square.style.color="#fff"
        if (windowWidth >= 1000 ) {
        mainImg.style.width='90%'
        mainImg.style.height='97%'
        }
        if (windowWidth <= 1000 ) {
        mainImg.style.width='90%'
        mainImg.style.height='97%'
        }
        if (windowWidth <= 800 ) {
        mainImg.style.width='100%'
        mainImg.style.height='80%'
        }
        if (windowWidth <= 650 ) {
        mainImg.style.width='90%'
        mainImg.style.height='80%'
        }
        if (windowWidth <= 400 ) {
        mainImg.style.width='100%'
        mainImg.style.height='50%'
        }
}
function mobileView() {
       mobile.style.color="#ff004f"
        desktop.style.color="#fff"
        square.style.color="#fff"
    checkSize();
        if (windowWidth >= 1000 ) {
        mainImg.style.width='20%'
        mainImg.style.height='97%'
        }
      if (windowWidth <= 1000 ) {
        mainImg.style.width='35%'
        mainImg.style.height='97%'
        }
       if (windowWidth <= 800 ) {
        mainImg.style.width='40%'
        mainImg.style.height='95%'
        }
       if (windowWidth<=650) {
        mainImg.style.width='50%'
        mainImg.style.height='90%'
        }
        if (windowWidth<=400) {
        mainImg.style.width='70%'
        mainImg.style.height='95%'    
        }
            
          }
  function squareView() {
             checkSize();
             desktop.style.color="#fff"
             square.style.color="#ff004f"
             mobile.style.color="#fff"
            
             mainImg.style.width='420px'
             mainImg.style.height='420px'
            
            if (windowWidth <= 420 ) {
            mainImg.style.width=  windowWidth-50 + 'px'
            mainImg.style.height= windowWidth-50 +'px'
            }
    }

          
    let windowWidth = 0;
          function checkSize() {
           windowWidth = window.innerWidth;
        }

        // ---------/photography script/----------

        let mainPhoto = document.getElementById('mainImg');
        squareView();
       