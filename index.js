import Dog from "/Dog.js"
import dogs from "/data.js"

const divMainImage = document.getElementById("image_dog")
const divStamp = document.getElementById("image_stamp")
let currentDog = {}

// Event listeners

document.addEventListener("click", (e) => {
    if(e.target.id === "btn_nope" || e.target.id === "img_nope") {
        addStamp("nope")
    } else if(e.target.id === "btn_like" ||e.target.id === "img_like") {
        addStamp("like")
    }
})

// Functions

function addStamp(type) {
    if(!currentDog.hasBeenLiked) {
        divStamp.innerHTML = `<img src="images/badge-${type}.png" class="image_stamp">`
        currentDog.hasBeenLiked = true;
        setTimeout(nextDog, 1500) 
    }    
}

function removeStamp() {
    divStamp.innerHTML = ""
}

function nextDog() {
    removeStamp()

    if(dogs.length > 0) {
        currentDog = new Dog(dogs.shift())
        renderDog()
    } else {
        renderPostCreditScene()
    }
}

function renderPostCreditScene() {
    divMainImage.innerHTML =   `<img src="images/forev-alone.png" class="main_image">`
    document.querySelector("footer").innerHTML = ""
}

function renderDog() {
    const {name, avatar, age, bio} = currentDog

    divMainImage.innerHTML =   `<img src=${avatar} class="main_image">
                                <div class="image_text">
                                    <p class="image_heading">${name} (${age})</p>
                                    <p class="image_subheading">${bio}</p>
                                </div>`
}

// Build the initial page

currentDog = new Dog(dogs.shift())
renderDog()