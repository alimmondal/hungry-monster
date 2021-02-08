

const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
    //load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML ='';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-items-center my-3 p-3';
        mealDiv.innerHTML = `
        <div class="col-md-9">
        <img onclick="displayMealDetail('${meal.strMeal}')" src="${meal.strMealThumb}"> 
        <h5 class="lyrics-name">${meal.strMeal}</h5>    
       `;
        mealContainer.appendChild(mealDiv);
    });
}

const displayMealDetail = meals => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]))
   
}

const renderMealInfo = meal => {
    console.log(meal);
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}">  
    <h5 class=>Name: ${meal.strMeal}</h5>
    <p class=>Category: <span>${meal.strCategory}</span></p>
    <p class=>Area: <span>${meal.strArea}</span></p>
    <p class="text-danger fw-bolder">Ingredient: </p>
    <p class="text-success">Ingredient1: ✅<span>${meal.strIngredient1}</span></p>
    <p class="text-success">Ingredient2: ✅<span>${meal.strIngredient2}</span></p>
    <p class="text-success">Ingredient3: ✅<span>${meal.strIngredient3}</span></p>
    <p class="text-success">Ingredient4: ✅<span>${meal.strIngredient4}</span></p>
    <p class="text-success">Ingredient5: ✅<span>${meal.strIngredient5}</span></p>
    `



}












