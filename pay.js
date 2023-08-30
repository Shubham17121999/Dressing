let cod = document.getElementById("cod")
let alert1 = document.querySelector(".alert")

cod.addEventListener("click",()=>{
    alert1.style.display = "block"
    setTimeout(()=>{
        alert1.style.display = "none"
        window.location.assign("index.html")
    },1000)
})