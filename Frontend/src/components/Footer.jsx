import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href="https://www.linkedin.com/in/vansh-kumar-webdev/">
            <i style={{fontSize:'30px'}} class="fa-brands fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/VanshWebDev">
            <i style={{fontSize:'30px'}} class="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/devloper.mind_/">
            <i style={{fontSize:'30px'}} class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
