let array=JSON.parse(localStorage.getItem("addtocart"));

let URL=`https://63c9170d320a0c4c9540575f.mockapi.io/products`;

window.addEventListener("load",(e)=>{
    e.preventDefault();

    async function fetchedData(){
        try{
            let res= await fetch(URL);
            let data= await res.json();
            cartData(data);         
        }catch(err){
            console.log(err);
        }
    }

    fetchedData()
})
let cartdiv=document.getElementById("cart_div");

async function cartData(fecheddata){
    for(let i=0; i<array.length; i++){
        let finalcartData=fecheddata.filter((ele)=>{
            if(ele.id==array[i]){
               
    let vari =`<div class="card" >
    <div class="img_div">
       <a href="">
         <img src="${ele.src}">
       </a>
     </div>
     <div class="desc">
       <h2>${ele.name}</h2>
       <div class="star-div">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
       </div>
       <h4>Love - I have this in three colors.
         Why? Because you can throw it on, and
         the fit is seamless, it's comfy it's breezy.
       </h4>
       <div class="button-div">
         <a href="">Remove from Cart</a>
         <a href="">Buy Now</a>
       </div>
     </div>
   </div>`;
    cartdiv.innerHTML=vari;
            }
        })
    }
}
