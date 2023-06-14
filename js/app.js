const icon = document.querySelector("#home-icon") 
const foodText = document.querySelector("#foodText") 
const disappearIcon = document.querySelector("#homeDisappearIcon") 

const disapperaToAppear = [
    {transform : "translateX(-20px) scale(0)"},
    {transform : "translateX(0px) scale(1)"},
]

const disapperaToAppearTiming = {
    duration : 3000
}


icon.addEventListener("click", function apperaText() {
        icon.style.display = "none";
        foodText.style.display = "block";
        foodText.animate(disapperaToAppear,disapperaToAppearTiming)
})


disappearIcon.addEventListener("click", function apperaText() {

    icon.style.display = "flex";
    foodText.style.display = "none";
})
