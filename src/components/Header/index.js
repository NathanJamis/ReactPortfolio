import React from "react";

function Header() {
  return (
    <div class="jumbotron">
      <div class="container">
        <h2 class="display-4 text-center">Nathan Walsh</h2>
        <p class="lead text-center">Full-stack web developer</p>
        <ul class="nav justify-content-center nes-list is-disc">
          <li class="nav-item mx-2">
            <a class="nav-link pr-3 pl-1" href="#">
              About
            </a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link pr-3 pl-1" href="#">
              Portfolio
            </a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link pr-3 pl-1" href="#">
              Skills
            </a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link pr-3 pl-1" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
