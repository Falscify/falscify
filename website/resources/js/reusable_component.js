// Logo
class Logo extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <a class="logo" href="home.html">
        <img src="./resources/graphics/logotype.png" height=30rem>
        <h1>falscify</h1>
      </a>
    `
  }
}
customElements.define('app-logo', Logo)


// Top-right list
class TopRightList extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <div class="list list-right">
        <button class="btn place-items-center" id="theme-toggle-btn" aria-label="auto">
          <i class="ri-sun-line sun-icon"></i>
          <i class="ri-moon-line moon-icon"></i>
        </button>
        <button class="btn place-items-center screen-l-hidden menu-toggle-icon" id="menu-toggle-icon">
          <i class="ri-menu-3-line open-menu-icon"></i>
          <i class="ri-close-line close-menu-icon"></i>
        </button>
        <button class="btn register-btn screen-s-hidden">
          <a href="register.html">Sign up</a>
        </button>
        <button type="button" class="btn login-btn screen-s-hidden">
          <a href="login.html">Sign in</a>
        </button>
      </div>
    `
  }
}
customElements.define('app-top-right-list', TopRightList)


// Footer
class Footer extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <footer class="footer section">
      <div class="footer-container container d-grid">
        <div class="company-data">
          <p class="company-description">

            Falscify is a P2P-driven, innovative database containing
            statistically insignificant results of scientific research
            from across many different fields of science.

          </p>
          <ul class="list social-media">
            <li class="list-item">
              <a href="https://www.linkedin.com/" target="_blank" class="list-link">
                <i class="ri-linkedin-line"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" class="list-link">
                <i class="ri-twitter-line"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" class="list-link">
                <i class="ri-instagram-line"></i>
              </a>
            </li>
          </ul>
          <span class="copyright-notice">&copy; 2023 falscify. All rights reserved.</span>
        </div>
      </div>
    </footer>
    `
  }
}
customElements.define('app-footer', Footer)
