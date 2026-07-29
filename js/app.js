fetch("data/recipes.json")
.then(response => response.json())
.then(recipes => {

const container = document.getElementById("recipes");

recipes.forEach(recipe => {

container.innerHTML += `

<div class="card">

<img src="${recipe.image}" alt="${recipe.title}">

<div class="card-content">

<h2>${recipe.title}</h2>

<p>${recipe.description}</p>

<div class="badges">

<span class="badge">⏱ ${recipe.time}</span>

<span class="badge">💪 ${recipe.protein}</span>

<span class="badge">${recipe.season}</span>

</div>

<h4>Zutaten</h4>

<ul>

${recipe.ingredients.map(i=>`<li>${i}</li>`).join("")}

</ul>

<button class="recipe"
onclick="window.open('${recipe.url}','_blank')">

Originalrezept öffnen

</button>

</div>

</div>

`;

});

});
