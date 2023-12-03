const articles = [
{
  id:1,
  title:"Headphones gaming",
  category: "Gaming Headset",
  price: 25.20,
  img:'../imagens/9.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:2,
  title:"Laptop Dell",
  category: "Laptop",
  price: 600.00,
  img:'../imagens/DellSurfaceLaptop.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:3,
  title:"Macbook Air",
  category: "Laptop",
  price: 1500.00,
  img:'../imagens/MacBookAir.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:4,
  title:"Mouse Elite",
  category: "mouse",
  price: 25.20,
  img:'../imagens/HpSpectreMouse.jpeg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:5,
  title:"HP EliteBook",
  category: "Laptop",
  price: 800.00,
  img:'../imagens/HpEliteBookx360.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:6,
  title:"Headphones gaming",
  category: "Gaming Headset",
  price: 25.20,
  img:'../imagens/800.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:7,
  title:"earpods",
  category: "Gaming Headset",
  price: 15.20,
  img:'../imagens/700.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:8,
  title:"Mouse Logitech",
  category: "mouse",
  price: 30.20,
  img:'../imagens/500.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
]

const seccioncenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded',function(){
  let mostrar = articles.map(function(item){
    return `
    <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price"> $${item.price}</h4>
          </header>
        </div>
        <p class="item-text">
        ${item.desc}
        </p>
      </article>
    
    `
  })

 mostrar=mostrar.join("");
 seccioncenter.innerHTML=mostrar;
})