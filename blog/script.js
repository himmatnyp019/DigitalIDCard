
function goBack() {
    window.location.href='../main/home/main.html';
  }

  function readingArea() {
    window.location.href='read.html'
    
  }

  const drawer = document.getElementById('drawer');
  function openDrawer() {
    drawer.classList.add('active');
  }
  function closeDrawer() {
    drawer.classList.remove('active');
    
  }