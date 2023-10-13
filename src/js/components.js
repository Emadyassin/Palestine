import palestine from '../img/palestine.png';
import Gaza from '../img/Gaza.jpg';
import {renderHtml ,el} from './helpers.js'


const navComponent = () => {
  return `
  <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <div class= "d-flex">
    <img src=${palestine} class="logo"/>
      <a class="navbar-brand" href="#">Palestine </a>
    </div>
  </div>
</nav>
      `;
};


const headerComponent = () => {
  return `
  <section class="text-white overflow-hidden vh-100 position-relative">
  <img
    id="header"
    class="position-absolute"
    src=${Gaza}
    alt=""
  />
  <div class="downBg h-100 w-100 position-absolute"></div>
  <div
    class="position-absolute bottom-0 font fs-5 m- p-5 position-absolute"
  >
    <p>
      " <strong>Gaza</strong> carries deep wounds, where its people live
      in constant suffering. Tragic stories tell the tale of life under
      siege, yet hope persists despite harsh circumstances."
    </p>
  </div>
</section>
      `;
};

const statisticsCardComponent = () => {
      return `
      <div class="row col-12 col-md-6">
      <div class="col-12 p-3">
        <div class="cards rounded-5 h-100 overflow-hidden p-3 shadow">
          <div
            class="card-body d-flex flex-column justify-content-between gap-3 text-white bg-color-black"
          >
            <div class="card-info d-flex flex-column">
              <p class="card-text fw-medium z-1">Martyrs of Palestine</p>
              <h5 class="card-title noMartyrs fw-bold text-center fs-1 z-1">0</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 p-3">
        <div class="cards rounded-5 h-100 overflow-hidden p-3 shadow">
          <div
            class="card-body d-flex flex-column justify-content-between gap-3 text-white bg-color-black"
          >
            <div class="card-info d-flex flex-column">
              <p class="card-text fw-medium z-1">
                Dead of the Israeli occupation
              </p>
              <h5 class="card-title noOccupation fw-bold text-center fs-1 z-1">0</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-12 col-md-6">
      <div class="col-12 p-3">
        <div class="cards rounded-5 h-100 overflow-hidden p-3 shadow">
          <div
            class="card-body d-flex flex-column justify-content-between gap-3 text-white bg-color-black"
          >
            <div id="chart" class="d-flex col-12 col-md-6 justify-content-center w-100"></div>
          </div>
        </div>
      </div>
    </div>
        `;
};


const mainComponent = () => {
  return `
  <main class="w-100 position-absolute d-flex justify-content-center align-items-center pt-5 pb-5">
    <div class="container row justify-content-center">
      ${statisticsCardComponent()}
      </div>
    </div>
  </main>   `;
};




export const renderComponents =( )=>{
  renderHtml(navComponent());
  renderHtml(headerComponent());
  renderHtml(mainComponent());
}

   