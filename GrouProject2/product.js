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




let dataarr = []
let viewaarr = []





  // console.log(addtocartarr)











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
  mainbody.innerHTML = renderingdata(data)
  let stars = document.querySelectorAll(".star")
  let output = document.querySelector(".displayrating")
  let addtocart = document.querySelectorAll(".addtocart")
  let viewcart = document.querySelectorAll(".img_div")



  



  // let colorchange = document.querySelectorAll(".categoryfilter div")
  

for(let key of addtocart){
  key.addEventListener("click",(e)=>{
    // console.log()
    // console.log(key.id)
    let ide = e.target.id
    dataarr.push(ide)
    localStorage.setItem("addtocart",JSON.stringify(dataarr))
    // console.log(dataarr)
  })
}
for(let key of viewcart){
  // console.log(key)
  key.addEventListener("click",(e)=>{
    // console.log()
    console.log(key.src)
    let ide = e.target.id
    viewaarr.push(ide)
    localStorage.setItem("veiwproduct",JSON.stringify(key.id))
    // console.log(dataarr)
  })
}


 

  for(let key of stars){
    key.addEventListener("click",()=>{
      console.log(key)
    })
  }



  let arr = ["click","mouseover","mouseout"]

for(let i=0;i<stars.length;i++){
  stars[i].starvalue = i+1
  // stars[i].addEventListener("click",()=>{
  //   console.log("nnnn")
  // })
  arr.forEach((e)=>{
    stars[i].addEventListener(e, showrating)
  })
}

function showrating(e){
  let type = e.type
  let starvalue = this.starvalue

// console.log(type)

  stars.forEach((elem,ind)=>{
    if(type === "click"){
      if(ind< starvalue){
        elem.classList.add("orange")
      }else{
        elem.classList.remove("orange")
      }
    }
    if(type === "mouseover"){
      if(ind< starvalue){
        elem.classList.add("yellow")
      }else{
        elem.classList.remove("yellow")
      }
    }
    if(type === "mouseout"){
      elem.classList.remove("yellow")
    }
  })
}





























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
    mainbody.innerHTML = renderingdata(filtered1)
  })




allproductsfilter.addEventListener("click",()=>{
  mainbody.innerHTML = renderingdata(data)
})
mensfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="mens"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
womensfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="women"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
kidsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="kids"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
bagsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="bags"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
decorefilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="homedecore"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
giftsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="gifts"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})








nikefilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="nike"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Adidasfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="adidas"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Louisfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="louis vuitton"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Cartierfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="cartier"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Zarafilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="zara"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})





topsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="top"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
jeanfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="jeans"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
bagpacks.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="bags"){
      return true
    }else{
      return false
    }
  })
  
  mainbody.innerHTML = renderingdata(filtered)
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
mainbody.innerHTML = renderingdata(filtered)

  })
  console.log(data)
  } catch (error) {
    console.log(error)
  }
}

function renderingdata(data){
  return `
    ${data.map((item)=>{
  return getcard(item.id, item.src , item.name,item.brand, item.product_badge, item.category,item.price , item.totalquantity)
}).join("")}

  `
}
function getcard(id,image, title, brand,product_badge , category, price, totalquantity){
  return `
  <div class="card" id="${id}">
  <div class="img_div" id="${id}">
      <a href="">
        <img src="${image}">
    </a>
    </div>
    <div class="desc">
      <h2>${title}</h2>
      <p>${category}</p>
      <h4>
      ${brand}
      </h4>
      <p id="pricedisplay">${price}</p>
      <p ">${product_badge}</p>
      <div class="button-div">
        <a href="#" class="addtocart" id="${id}">Add to Cart</a>
        <a href="#">Buy Now</a>
      </div>
    </div>
  </div>
					
    `
}