function sideMenuAppears() {
     document.getElementById('side-menu').classList.add('show-menu');
  }
  
  document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
  
  function sideMenuDisappears() {
      document.getElementById('side-menu').classList.remove('show-menu');
  }
  
  document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);