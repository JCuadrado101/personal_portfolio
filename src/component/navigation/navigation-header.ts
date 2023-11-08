export const navigationMenu = (element: HTMLDivElement) => (
element.innerHTML = `
  <nav>
    <div class="header-nav" id="main-nav">
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </nav>
`);

    
