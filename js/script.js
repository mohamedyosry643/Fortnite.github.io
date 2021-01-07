var onlineUser= document.querySelector("#online_user");
var v2500 = document.querySelector("#v2500")
var v3500 = document.querySelector("#v3500")
var v7500 = document.querySelector("#v7500")
var userNameInput = document.querySelector("#userName")
var modalNumber = document.querySelector("#exampleModalLabel")
var firstModal = document.querySelector("#exampleModal")
var secondModal = document.querySelector("#staticBackdrop")
var secondModalOpener = document.querySelector(".ios")
var loading = document.querySelector(".loading")
var loading2 = document.querySelector(".loading2")

var hideElement = document.querySelector(".hide");

var random = Math.floor(Math.random() * 100);
function randomNumber(){
    var random = Math.floor(Math.random() * 240);
    while(random < 170){
        var random = Math.floor(Math.random() * 240);
    }
    return random
}
v2500.addEventListener("click", function(){
    modalNumber.innerHTML = "2500 V-BUCKS"
})
v3500.addEventListener("click", function(){
    modalNumber.innerHTML = "3500 V-BUCKS"
})
v7500.addEventListener("click", function(){
    modalNumber.innerHTML = "7500 V-BUCKS"
})

onlineUser.innerHTML = randomNumber()
function hide(){
    loading.style.visibility = "hidden"
    loading2.style.visibility = "hidden"

    hideElement.style.display = "block"

}

// secondModalOpener.addEventListener("click", function(e){
//     e.preventDefault()
//     if (userNameInput.value === "") {
//         alert("Enter you username")
//         secondModal.style.visibility = "hidden"
        
//     }else{
        
//         // hideandshow()
//         secondModal.style.visibility = "visible"
//         firstModal.style.visibility = "hidden"
//         setTimeout("hide()", 7000)

//     }
// })
function check() {
    if (userNameInput.value === "") {
        alert("Enter you username")
        secondModal.style.visibility = "hidden"
        
    }else{
        
        // hideandshow()
        secondModal.style.visibility = "visible"
        firstModal.style.visibility = "hidden"
        setTimeout("hide()", 7000)

    }
}
