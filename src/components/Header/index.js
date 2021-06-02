import React from "react";

function Header() {
  return (
    <div class="jumbotron">
      <div class="row">
        <ul class="nav flex-column col-3 nes-list is-disc pl-1">
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Portfolio
            </a>
          </li>{" "}
          <li class="nav-item">
            <a class="nav-link" href="#">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div class="row col-6">
          <h2 class="display-4 mx-auto text-center">Nathan Walsh</h2>
          <p class="lead mx-auto">Full-stack web developer</p>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  );
};

export default Header;