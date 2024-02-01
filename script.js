let sections = document.querySelectorAll('section');
let menu = document.querySelectorAll('li');
const navLi = document.querySelectorAll("nav ul li");

window.onscroll = () => {
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
       
        let sectionTop = sec.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = sec.getAttribute("id"); }
        
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animation');

        } else {
            sec.classList.remove('show-animation');
        }
        
        
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
}
navLi[0].addEventListener('click', function(){
  window.location.href='#homee';
});
navLi[1].addEventListener('click', function(){
  window.location.href='#about';
});
navLi[2].addEventListener('click', function(){
  window.location.href='#educationn';
});
navLi[3].addEventListener('click', function(){
  window.location.href='#experiencee';
});
navLi[4].addEventListener('click', function(){
  window.location.href='#portfolioo';
});
navLi[5].addEventListener('click', function(){
  window.location.href='#contact';
});