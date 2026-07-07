const productcart = document.querySelector(".productcart")
const close = document.querySelector(".close")
const shopping = document.querySelector(".shopping")
const productcards = document.querySelector(".productcards")
const toggle = document.querySelector(".toggle")
const img = document.querySelector(".img")
const cartitems = document.querySelector(".cartitems")
const total = document.querySelector(".total")


shopping.addEventListener("click",function(){
    productcart.classList.add("active")
})

toggle.addEventListener("click",function(){
    if(document.body.classList.contains("dark")){
         document.body.classList.remove("dark")
         img.setAttribute("src","image/shopping.gif")

    }
    else{
        document.body.classList.add("dark")
          img.setAttribute("src","image/white.webp")
    }

})

close.addEventListener("click",function(){
    productcart.classList.remove("active")
})

let products =[
    {
        name:"product1",
        img:"image/product1.jpg",
        price:2000
    },
     {
        name:"product2",
        img:"image/product2.jpg",
        price:2000
    },
     {
        name:"product3",
        img:"image/product3.jpg",
        price:2000
    },
     {
        name:"product4",
        img:"image/product4.jpg",
        price:2000
    }
]

for (let index = 0; index < products.length; index++) {
    let product = products[index];
    newdiv = document.createElement("div")
    newdiv.innerHTML= `
          
           <img src="${product.img}">
            <div class="title">${product.name}</div>
           <div class="price">${product.price}</div>
           <div class="btn">Add to cart</div>
        `
       
        productcards.append(newdiv)
        newdiv.classList.add("cards")
    
}

const btn = document.querySelectorAll(".btn")

const cart = []

function RenderCart(){
    cartitems.innerHTML =''

    for (let index = 0; index < cart.length; index++) {
      const items = cart[index]
       const newdiv = document.createElement('div')
       newdiv.classList.add("cart-items")

       newdiv.innerHTML = `
        <img src="${items.img}">
        <span>${items.title}</span>
        <span>${items.price}</span>
       
       `
        cartitems.append(newdiv)

        
    }
    

}


for (let index = 0; index < btn.length; index++) {
    const button = btn[index];

    button.addEventListener("click",function(event){
        const quantity = document.querySelector(".quantity")
        let x = Number(quantity.textContent)
        x++
        quantity.textContent = x

       

        const cards = event.target.closest(".cards")
        const img = cards.querySelector("img").getAttribute('src')
        const title = cards.querySelector(".title").textContent
        const price = cards.querySelector(".price").textContent
         let sum = Number(total.textContent)
        sum = sum + Number(price)
        total.textContent = sum
        console.log({title,price,img})
        cart.push({title,price,img})


        RenderCart()

    

    })
    
}



// .closest will et the nearest parent container of an object that trigged an event







