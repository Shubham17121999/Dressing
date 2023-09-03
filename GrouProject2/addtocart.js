

let cartdata = JSON.parse(localStorage.getItem("addtocart"))
let api = 'https://63c9170d320a0c4c9540575f.mockapi.io/products'
console.log(cartdata)





window.addEventListener("load",(e)=>{
e.preventDefault()
getcartdata()
})

async function getcartdata(){
    try {
        let res = await fetch(api)
    let data = await res.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
}




