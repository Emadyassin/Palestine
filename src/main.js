import "./style/style.css";
import { renderLoadingComponents } from "./js/loadingComponent.js";
import { renderComponents } from "./js/components";
import {renderHtml ,el} from './js/helpers.js'
import ApexCharts from 'apexcharts'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

renderLoadingComponents();
renderComponents();

window.addEventListener("load", () => {
  var element = document.getElementById("loading");

  setTimeout(() => {
    element.classList.add("go-up");
    setTimeout(() => {
      element.classList.add("d-none");
      element.classList.remove("d-flex");
    }, 2000);
  }, 5000);

  var options = {
    series: [1345,1400],
    chart: {
    width: 500,
    type: 'pie',
  },
  labels: ['Martyrs of Palestine ', 'Dead of the Israeli occupation'],
  responsive: [{
    breakpoint: 1900,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom',
        labels: {
          colors: ['#fff', '#fff']
        }
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

});

window.onscroll = function() {
  var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
  );
  var scrollPosition = window.scrollY;
  var newWidth = (scrollPosition / scrollHeight) * 100;
  document.getElementById('header').style.width =100+ (newWidth*5) + '%';
};

var execute1 = false;
var execute2 = false;

function handleIntersection1(entries, observer ,collBackFunction) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          if (!execute1) 
          counterDeadOccupation()
          execute1 = true;
      }
  });
}
function handleIntersection2(entries ,collBackFunction) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          if (!execute2) 
          counterMartyrs();
          execute2 = true;
      }
  });
}

const noOccupation = el(".noOccupation");
const noMartyrs = el(".noMartyrs");

const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5 
};

const observerNoOccupation= new IntersectionObserver(handleIntersection1, options );
const observerNoMartyrs = new IntersectionObserver(handleIntersection2, options );

observerNoOccupation.observe(noOccupation);
observerNoMartyrs.observe(noMartyrs);


function counterDeadOccupation(counter = 0) {
  const noOccupation = 
  setInterval(()=>{
    el(".noOccupation").innerHTML = counter++;
    if (counter === 1401) {
      clearInterval(noOccupation);
    }
  },15)
};

function counterMartyrs(counter = 0) {
  const noMartyrs = 
    setInterval(()=>{
      el(".noMartyrs").innerHTML= counter++;
      if (counter === 1345) {
        clearInterval(noMartyrs);
     }
    },15)
}


