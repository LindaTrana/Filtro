const articles = [
{
  id:1,
  title:"Headphones gaming",
  category: "Headphones",
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
  category: "Mouse",
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
  category: "Headphones",
  price: 40.25,
  img:'../imagens/800.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:7,
  title:"earpods",
  category: "Headphones",
  price: 30.50,
  img:'../imagens/700.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:8,
  title:"Mouse Logitech",
  category: "Mouse",
  price: 30.20,
  img:'../imagens/500.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:9,
  title:"Gaming Chair",
  category: "Chair",
  price: 200.10,
  img:'../imagens/1004.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
{
  id:10,
  title:"Office Chair",
  category: "Chair",
  price: 90.80,
  img:'../imagens/1005.jpg',
  desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ad soluta expedita dolorum, distinctio ex placeat voluptate 
  possimus. Fugit porro, rem, voluptates sunt maxime delectus
  aut molestias aliquid blanditiis dolores neque!`
},
]

const seccioncenter = document.querySelector('.section-center');
const btnContainers = document.querySelector('.btn-container')

window.addEventListener("DOMContentLoaded", function(){
  displayMenu(articles)
  displayBtns() 
});


function displayMenu(articles){
  let mostrar = articles.map(function(item){
    return `
    <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price"> $${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>
    
    `
  })

 mostrar=mostrar.join("");
 seccioncenter.innerHTML=mostrar;
}

function displayBtns(){
  const categories = articles.reduce(function(values,item){
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  },
  ['All']
  );
  
  const categoriesBtn = categories.map(function(c){
    return `
    <button type="button" 
      class="filter-btn" 
      data-id=${c}>
      ${c}
      </button>
      `
    }).join('');
    
    btnContainers.innerHTML = categoriesBtn;
    const filterBtns = document.querySelectorAll('.filter-btn');
  
    filterBtns.forEach(function(btn){
      btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.id;
        const artCategory = articles.filter(function(menuItem){
          if(menuItem.category === category){
            console.log(menuItem)
            return menuItem
          }
          
        })
        if(category === 'All'){
          displayMenu(articles)
        } else{
          displayMenu(artCategory)
        }
    
      })
    });
}