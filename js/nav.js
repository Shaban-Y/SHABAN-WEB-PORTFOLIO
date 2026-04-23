
const NAV_HTML = `
<div id="cursor-dot"  class="cursor-dot"></div>
<div id="cursor-ring" class="cursor-ring"></div>

<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">SHABAN YUSSUF<span></span></a>

  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="skills.html">Skills</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="education.html">Education</a></li>
    <li><a href="certifications.html">Certs</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>

  <button class="nav-hamburger" id="nav-hamburger" aria-label="menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="nav-mobile" id="nav-mobile">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="skills.html">Skills</a>
  <a href="projects.html">Projects</a>
  <a href="education.html">Education</a>
  <a href="certifications.html">Certifications</a>
  <a href="contact.html">Contact</a>
</div>
`;

// write the nav into the body before any other content
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
