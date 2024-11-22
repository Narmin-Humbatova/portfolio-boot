
// HAMBURGER-MENU
const hamburgerMenu = document.querySelector(".fa-bars")
hamburgerMenu.addEventListener("click", function () {
  // alert("Hamburger Menu")
  document.querySelector(".mobile-menu").classList.add("aktiv")
})

// MOBILE-MENU
const iconXmark = document.querySelector(".fa-xmark")
iconXmark.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.remove("aktiv")
})

//PARTNERS
const swiper = new Swiper(".companies", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// PROJECTS
const projectsSwiper = new Swiper(".projectSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


//  CARDS Swiper
const cardSwiper = new Swiper(".cardsSlayder", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// CARDS(services) JSON
const cardsDiv = document.getElementsByClassName("cardDiv")[0]
console.log(cardsDiv)
window.addEventListener("DOMContentLoaded", cardsGetir)
async function cardsGetir(){
  const unvan = "assets/information.json"
  try{
    const cavab = await fetch(unvan)
    const melumatlar = await cavab.json()
    console.log(melumatlar)
   for(let i=0; i<5; i++) {
    cardsDiv.innerHTML += `<div class="swiper-slide col-12 col-md-6 col-lg-4">
<div class="card border-0 px-3">
  <img src="${melumatlar[i].card_img}" alt="" width="70" class="py-2">
  <h5 class="my-3">${melumatlar[i].card_name}</h5>
  <p>${melumatlar[i].card_main}</p>
  <ul>
    <li>${melumatlar[i].card_group1}</li>
    <li>${melumatlar[i].card_group2}</li>
    <li>${melumatlar[i].card_group3}</li>
  </ul>
</div>
</div>`
   }
  }
 catch(err){
  console.log(`Serverde Xeta Yarandi: ${err.message}`)
 }
}


// BLOGS API
const blogsDiv = document.querySelector(".blogGetir")
window.addEventListener("DOMContentLoaded" , blogsGetir)
async function blogsGetir () {
  const url = "https://jsonplaceholder.typicode.com/users"
  try{
    const cavab = await fetch(url)
    const blog = await cavab.json()
    for (let i=0; i<10; i++) {
      blogsDiv.innerHTML += `<div class="blog"> 
            <small> <span id="date">${blog[i].id}</span> <span id="time">${blog[i].name}</span>${blog[i].username}</small>
            <h4>${blog[i].email}</h4>
            <a href="" class="nav-link website">${blog[i].website}<img src="./assets/images/blogs/white arrow.svg" alt=""></a>
          </div>`
    }
  }
  catch(err){
    console.log(`Serverde Xeta Yarandi: ${err.message}`)
  }
}

// Accordion js
new Accordion('.accordion-left');
new Accordion('.accordion-right');

