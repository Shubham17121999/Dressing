let api = 'https://63c9170d320a0c4c9540575f.mockapi.io/products'
let form = document.querySelector("#category-filter form")
let min = document.getElementById("min")
let clear1 = document.querySelector(".clear")
let mainbody = document.querySelector("#product-container")
let max = document.getElementById("max")
let priceslider = document.getElementById("priceslider")
let check = document.querySelectorAll(".check")
let allproductsfilter = document.querySelector("#allproducts")
let mensfilter = document.querySelector("#mens")
let womensfilter = document.querySelector("#womens")
let kidsfilter = document.querySelector("#kids")
let bagsfilter = document.querySelector("#bags")
let decorefilter = document.querySelector("#decore")
let giftsfilter = document.querySelector("#gifts")
let nikefilter = document.querySelector("#nike")
let Adidasfilter = document.querySelector("#Adidas")
let Louisfilter = document.querySelector("#Louis")
let Cartierfilter = document.querySelector("#Cartier")
let Zarafilter = document.querySelector("#Zara")
let topsfilter = document.querySelector("#topsfilter")
let jeanfilter = document.querySelector("#jeanfilter")
let bagpacks = document.querySelector("#bagpacks")




let searchform = document.querySelector("#form")

let lowtohigh = document.getElementById("lowtohigh")
let hightolow = document.getElementById("hightolow")


let viewcart = JSON.parse(localStorage.getItem("veiwproduct")) || []

let addtocartarr = JSON.parse(localStorage.getItem("addtocart")) || []





max.value = priceslider.value


priceslider.oninput = function(){
  max.value = priceslider.value
}
clear1.addEventListener("click",()=>{
  max.value = 50
  min.value = 0
  priceslider.value = 50
})

window.addEventListener("load",(e)=>{
  e.preventDefault()
  fetchandremder()
})


async function fetchandremder(){
  try {
    mainbody.innerHTML = null
  let res = await fetch(`${api}`)
  let data = await res.json()
   renderingdata(data)
 

  


  searchform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let searchpara = searchform.search.value
     console.log(searchpara)
    let filtered1 = data.filter((element)=>{
        if(element.name.toUpperCase().includes(searchpara.toUpperCase())===true){
            return true
        }else{
            return false
        }
    })
    renderingdata(filtered1)
  })



  lowtohigh.addEventListener("click",()=>{
    let filtered = data.sort((a,b)=>{
      return a.price - b.price
    })
    renderingdata(filtered)
  })
  hightolow.addEventListener("click",()=>{
    let filtered = data.sort((a,b)=>{
      return b.price - a.price
    })
    renderingdata(filtered)
  })






allproductsfilter.addEventListener("click",()=>{
  
   renderingdata(data)
})



mensfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="mens"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
lowtohigh.addEventListener("click",()=>{
  let filtered = data.sort((a,b)=>{
    return a.price - b.price
  })
  renderingdata(filtered)
})

  
})
womensfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="women"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})
kidsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="kids"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})
bagsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="bags"){
      return true
    }else{
      return false
    }
  })
 renderingdata(filtered)
})
decorefilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="homedecore"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})
giftsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="gifts"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})








nikefilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="nike"){
      return true
    }else{
      return false
    }
  })
  renderingdata(filtered)
})
Adidasfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="adidas"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})
Louisfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="louis vuitton"){
      return true
    }else{
      return false
    }
  })
  renderingdata(filtered)
})
Cartierfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="cartier"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})
Zarafilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="zara"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})





topsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="top"){
      return true
    }else{
      return false
    }
  })
renderingdata(filtered)
})
jeanfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="jeans"){
      return true
    }else{
      return false
    }
  })
 renderingdata(filtered)
})
bagpacks.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="bags"){
      return true
    }else{
      return false
    }
  })
  
renderingdata(filtered)
})







  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let lower = +(min.value)
    let upper = +(max.value)

    console.log(lower+" "+upper)
let filtered = data.filter((element)=>{
  if(element.price>=lower && element.price<=upper){
    return true
  }else{
    return false
  }
})
renderingdata(filtered)

  })
  console.log(data)
  } catch (error) {
    console.log(error)
  }
}

function renderingdata(data){
  mainbody.innerHTML = ""
  data.forEach((element,index)=>{
      let div = document.createElement("div")
      div.classList.add("card")

      let div2 = document.createElement("div")
      div2.classList.add("img_div")
      div2.addEventListener("click",()=>{
          viewcart = [element.id]
          localStorage.setItem("veiwproduct",JSON.stringify(viewcart))
      })

      let img = document.createElement("img")
      img.setAttribute("src",element.src)
      

      let div3 = document.createElement("div")
      div3.classList.add("desc")


      let Name = document.createElement("h2")
      Name.innerText = element.name

      
      let buttondiv = document.createElement("div")
      buttondiv.classList.add("button-div")
      
      
      let Category = document.createElement("p")
      Category.innerText = element.category

      let brand = document.createElement("p")
      brand.innerText = element.brand
      
      let Price = document.createElement("p")
      Price.innerText = element.price

      let product_badge = document.createElement("p")
      product_badge.innerText = element.product_badge


      let addtocartbtn = document.createElement("button")
      addtocartbtn.innerHTML = "Add To Cart"
      addtocartbtn.addEventListener("click",()=>{
          addtocartarr.push(element.id)
          console.log(addtocartarr)
          localStorage.setItem("addtocart",JSON.stringify(addtocartarr))
      })

      let buytbtn = document.createElement("button")
      buytbtn.innerHTML = "Buy"
      
      
      
      div3.append(Name, Category,brand, Price,product_badge,addtocartbtn, buytbtn)
      div2.append(img)
      div.append(div2,div3,buttondiv)
      mainbody.append(div)
      })
}
