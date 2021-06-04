import React from "react";

function SkillsCard() {
  return (
    <div className="container">
      <div className="card nes-container with-title is-centered mb-5">
        <p className="title nes-container">Skills</p>
        <div className="row justify-content-center">
          <div className="nes-table-responsive mx-auto">
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>Front-end</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul className="nes-list is-disc">
                      <li className="list-item">React</li>
                      <li className="list-item">HTML</li>
                      <li className="list-item">CSS</li>
                      <li className="list-item">JavaScript</li>
                      <li className="list-item">jQuery</li>
                      <li className="list-item">Bootstrap</li>
                      <li className="list-item">Bulma</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="nes-table-responsive mx-auto">
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>Back-end</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul className="nes-list is-disc">
                      <li className="list-item">Node.js</li>
                      <li className="list-item">Express.js</li>
                      <li className="list-item">MySQL</li>
                      <li className="list-item">Handlebars</li>
                      <li className="list-item">Sequelize</li>
                      <li className="list-item">MongoDB</li>
                      <li className="list-item">Mongoose</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
