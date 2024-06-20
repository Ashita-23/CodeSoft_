// nav-toggel-btn 
let nav_toggle_on = document.querySelector(".nav-toggel-on")
let nav_toggle_off = document.querySelector(".nav-toggel-off")
let nav_toggle_bar = document.querySelector(".toggel-bar-nav")

nav_toggle_on.addEventListener("click",()=>{
    nav_toggle_on.style.display="none"
     nav_toggle_off.style.display="initial"
     nav_toggle_bar.style.display="initial"})
nav_toggle_off.addEventListener("click",()=>{
   nav_toggle_off.style.display="none"
   nav_toggle_on.style.display="initial"
   nav_toggle_bar.style.display="none"
   // alert("close")
})

// carousel Cards Section

let carousel_indicators = document.getElementsByClassName("carousel_indicator_btn")
let carousel_inner = document.querySelector(".carousel_inner")
let carousel_cards = document.querySelector(".carousel_item")
let carousel_prev = document.querySelector("#carousel_btn_left")
let carousel_next = document.querySelector("#carousel_btn_right")

let carousel_index = 0

// console.log(carousel_inner)
carousel_indicators[carousel_index].classList.add("active_indicator_btn")
carousel_prev.addEventListener("click",()=>{
   carousel_indicators[carousel_index].classList.remove("active_indicator_btn")
   carousel_index=(carousel_index===0)? carousel_indicators.length-1:carousel_index-1
    carousel_inner.style.transform=`translateX(-${carousel_index*25}%)`
   carousel_indicators[carousel_index].classList.add("active_indicator_btn")
})

carousel_next.addEventListener("click",()=>{
   carousel_indicators[carousel_index].classList.remove("active_indicator_btn")
   carousel_index=(carousel_index===carousel_indicators.length-1)? 0:carousel_index+1
   carousel_inner.style.transform=`translateX(-${carousel_index*25}%)`
   carousel_indicators[carousel_index].classList.add("active_indicator_btn")
})







// trending Cards Section
let tnSlide_box = document.querySelector(".trending-now-outer")
let tnSlides = document.getElementsByClassName("tn-cards-outer")
let tnPrev_btn = document.querySelector(".tn-pre-btn")
let tnNext_btn = document.querySelector(".tn-next-btn")

let tn_slide_index = 1 ;
 
tnSlides[tn_slide_index].classList.add("tn-active-card")

tnPrev_btn.addEventListener("click",()=>{
   tnSlides[tn_slide_index].classList.remove("tn-active-card")

   tn_slide_index = (tn_slide_index === 0)? tnSlides.length-1 : tn_slide_index-1;
   tnSlides[tn_slide_index].classList.add("tn-active-card")
})
tnNext_btn.addEventListener("click",()=>{
   tnSlides[tn_slide_index].classList.remove("tn-active-card")

   tn_slide_index = (tn_slide_index === tnSlides.length-1)? 0 : tn_slide_index+1;
   tnSlides[tn_slide_index].classList.add("tn-active-card")
})

// New Lunch Cards

function newLunchCardShow(){
   document.querySelector(".nl-cards-container").style.height="auto"
   document.querySelector("#showMoreNl").style.display="none"
   document.querySelector("#showLessNl").style.display="initial"
  
}

function newLunchCardHide(){
    document.querySelector(".nl-cards-container").style.height="60rem"
  document.querySelector("#showMoreNl").style.display="initial"
   document.querySelector("#showLessNl").style.display="none"
// alert("new lunch")
}

// influenser cards 

function InfuenserCardShow(){
  document.querySelector("#Influencer-box").style.height = "auto"
  document.querySelector("#showMoreIn").style.display = "none"
    document.querySelector("#showLessIn").style.display = "initial"
}
function InfuenserCardHide(){

  document.querySelector("#Influencer-box").style.height = "18rem"
  document.querySelector("#showMoreIn").style.display = "initial"
  document.querySelector("#showLessIn").style.display = "none"
}

// video slider 

let slider= document.querySelector(".videos-slider")
let slidesCard = document.getElementsByClassName("Video-slides-cards")
let next_Btn = document.querySelector("#next_Btn")
let pre_Btn = document.querySelector("#pre_Btn")

let slide_index = 0 ;
console.log(slide_index)
slidesCard[slide_index].classList.add("active")
 
function perview(){
   slide_index=(slide_index === 0) ? slidesCard.length-1 : slide_index - 1 
   slider.style.transform = `translateX(-${slide_index*25}%)`
}

function next(){
slide_index=(slide_index === slidesCard.length-1) ? 0 : slide_index + 1 
slider.style.transform = `translateX(-${slide_index*25}%)`

}