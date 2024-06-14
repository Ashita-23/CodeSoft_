

// New Lunch Cards

function newLunchCardsShow(){
   document.querySelector("nl-cards-container").style.height="auto"
   document.querySelector("#showMoreNl").style.display="none"
   document.querySelector("#showLessNl").style.display="initial"
}

function newLunchCardsHide(){
   document.querySelector("nl-cards-container").style.height="67rem"
  document.querySelector("#showMoreNl").style.display="initial"
   document.querySelector("#showLessNl").style.display="none"
}

// influenser cards 

function InfuenserCardShow(){
  document.querySelector("#Influencer-box").style.height = "40rem"
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