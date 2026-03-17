const recipes=[

{
name:"Pizza",
country:"Italy",
img:"pizza.jpg",
ingredients:"100g dough, 50g cheese, 30g tomato sauce"
},

{
name:"Fattoush",
country:"Lebanon",
img:"fattoush-salad.jpg",
ingredients:"2 tomatoes, 1 cucumber, 20g lettuce, pita bread"
},

{
name:"Fettuccine Alfredo",
country:"Italy",
img:"fettuccine.jpg",
ingredients:"100g pasta, 20g cheese, 10g butter"
},

{
name:"Sushi",
country:"Japan",
img:"https://images.unsplash.com/photo-1553621042-f6e147245754",
ingredients:"100g rice, 30g fish"
},

{
name:"Tacos",
country:"Mexico",
img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
ingredients:"1 tortilla, 40g beef, lettuce"
},

{
name:"Paella",
country:"Spain",
img:"https://images.unsplash.com/photo-1534080564583-6be75777b70a",
ingredients:"100g rice, 50g seafood"
},

{
name:"Croissant",
country:"France",
img:"https://images.unsplash.com/photo-1509440159596-0249088772ff",
ingredients:"100g flour, 30g butter"
},

{
name:"Pad Thai",
country:"Thailand",
img:"https://images.unsplash.com/photo-1559314809-0d155014e29e",
ingredients:"100g noodles, 1 egg"
},

{
name:"Butter Chicken",
country:"India",
img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
ingredients:"120g chicken, 50g sauce"
},

{
name:"Falafel",
country:"Middle East",
img:"falafel.jpg",
ingredients:"100g chickpeas, herbs"
},

{
name:"Ramen",
country:"Japan",
img:"https://images.unsplash.com/photo-1557872943-16a5ac26437e",
ingredients:"100g noodles, broth"
},

{
name:"Burger",
country:"USA",
img:"https://images.unsplash.com/photo-1550547660-d9450f859349",
ingredients:"1 bun, 80g beef, cheese"
},

{
name:"Hummus",
country:"Lebanon",
img:"hummus.jpg",
ingredients:"100g chickpeas, 20g tahini"
},

{
name:"Pho",
country:"Vietnam",
img:"https://images.unsplash.com/photo-1559314809-0d155014e29e",
ingredients:"100g noodles, broth"
},

{
name:"Lasagna",
country:"Italy",
img:"https://images.unsplash.com/photo-1619895092538-128341789043",
ingredients:"100g pasta sheets, 50g cheese"
},

{
name:"Greek Salad",
country:"Greece",
img:"https://images.unsplash.com/photo-1551248429-40975aa4de74",
ingredients:"tomatoes, cucumber, 40g feta"
},

{
name:"Shakshouka",
country:"Tunisia",
img:"shakshouka.jpg",
ingredients:"2 eggs, tomato sauce"
},

{
name:"Ceviche",
country:"Peru",
img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
ingredients:"100g fish, lemon"
},

{
name:"Churros",
country:"Spain",
img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0",
ingredients:"100g flour, sugar"
},

{
name:"Bibimbap",
country:"Korea",
img:"bibimbap.jpg",
ingredients:"rice, vegetables, egg"
},



]

const container=document.getElementById("recipeContainer")

recipes.forEach(recipe=>{

const card=document.createElement("div")
card.className="recipe-card"

card.innerHTML=`

<img src="${recipe.img}">

<h3>${recipe.name}</h3>

<p><b>Country:</b> ${recipe.country}</p>

<p>${recipe.ingredients}</p>

`

container.appendChild(card)

})