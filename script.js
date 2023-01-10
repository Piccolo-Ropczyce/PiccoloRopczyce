// Klasa do stworzenia pizzy
class PizzaCreator {
	constructor(ingredients, smallPizzaPrice, bigPizzaPrice, pizzaType) {
		this.ingredients = ingredients,
		this.smallPizzaPrice = smallPizzaPrice,
		this.bigPizzaPrice = bigPizzaPrice,
		this.pizzaType = pizzaType
	}
};

// Funkcja powyzszej klasy tworzaca li na stronie z stworzona pizza
PizzaCreator.prototype.addPizzaToUl = function () {
	// Pobieranie elementow z HTML
	const pizzaUlContainer = document.querySelector('.pizza-list-box');

	// Tworzenie elementow HTML
	const createLi = document.createElement('li');
	const createBtnSmallPizza = document.createElement('button');
	const createBtnBigPizza = document.createElement('button');
	const createDiv = document.createElement('div');

	// Set up tekstu elementow dodawanych do strony
	createLi.textContent = this.ingredients;
	createBtnSmallPizza.textContent = this.smallPizzaPrice;
	createBtnBigPizza.textContent = this.bigPizzaPrice;

	// Set up klas elementow dodawanych do strony
	createLi.classList.add('li-pizza');
	createDiv.classList.add('add-to-cart-buttons');

	// Przypisanie elementow do odpowiednich struktur
	createDiv.append(createBtnSmallPizza);
	createDiv.append(createBtnBigPizza);
	pizzaUlContainer.append(createLi);
	pizzaUlContainer.append(createDiv);
	createLi.append(createDiv);
}

// Tablica zawierajaca wszystkie pizze
const arrayContainingPizzas = [
	{
		ingredients: 'Sos pomidorowy, mozzarella',
		smallPizzaPrice: 24,
		bigPizzaPrice: 33,
		pizzaType: 'vege',
	},
	{
		ingredients: 'Sos pomidorowy, mozzarella,pomidorki koktajlowe, oliwki, świeża bazylia',
		smallPizzaPrice: 29,
		bigPizzaPrice: 42,
		pizzaType: 'kurczak',
	},
]

// Pobor wszystkich elementow z typami pizzy
const liMenu = document.querySelectorAll('.li-menu');


// H2 z pizzami (tak jak w rozacie) zeby nie bylo samych skladnikow uzupelnic nazwami pizz, typu neapolitanska itp

// Funkcja tworzaca pizze na podstawie jej typu z uzyciem klasy
const getPizza = e => {
	let pizzaType = e.target.dataset.name;

	arrayContainingPizzas.forEach(pizza => {
		for (const key in pizza) {
			if (pizza[key] === pizzaType) {

				const chosenPizza = new PizzaCreator(pizza.ingredients, pizza.smallPizzaPrice, pizza.bigPizzaPrice, pizza.pizzaType);

				chosenPizza.addPizzaToUl();
			}
		}
	})
}


liMenu.forEach(el => el.addEventListener('click', getPizza));
