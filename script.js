const dishUlContainer = document.querySelector('.pizza-list-box');

// Klasa do stworzenia pizzy
class MenuCreator {
	constructor(mainImg, dishHeading, ingredients, smallPizzaPrice, bigPizzaPrice, dishType, calzonePrice) {
			this.mainImg = mainImg,
			this.dishHeading = dishHeading,
			this.ingredients = ingredients,
			this.smallPizzaPrice = smallPizzaPrice,
			this.bigPizzaPrice = bigPizzaPrice,
			this.dishType = dishType,
			this.calzonePrice = calzonePrice
		}
};

// Funkcja powyzszej klasy tworzaca li na stronie z stworzona pizza
MenuCreator.prototype.addPizzaToUl = function (dishType) {
	// Pobieranie elementow z HTML
	

	// Tworzenie elementow HTML
	const li = document.createElement('li');
	const btnSmallPizza = document.createElement('button');
	const btnBigPizza = document.createElement('button');
	const calzonePizza = document.createElement('button');
	const buttonsDiv = document.createElement('div');
	const headingsDiv = document.createElement('div');
	const img = document.createElement('img');
	const paragraph = document.createElement('p')
	const heading = document.createElement('h3');
	
	// Set up elementow dodawanych do strony
	img.setAttribute('src', this.mainImg);
	img.setAttribute('alt', '');
	img.classList.add('menu-image');

	heading.textContent = this.dishHeading
	paragraph.textContent = this.ingredients;
	btnSmallPizza.textContent = this.smallPizzaPrice;
	btnBigPizza.textContent = this.bigPizzaPrice;
	calzonePizza.textContent = this.calzonePrice;

	// Set up klas elementow dodawanych do strony
	li.classList.add('li-pizza');

	headingsDiv.classList.add('headings-div');
	buttonsDiv.classList.add('add-to-cart-buttons');

	// Przypisanie elementow do odpowiednich struktur
	dishUlContainer.append(li);
	li.append(headingsDiv);
	headingsDiv.append(heading);
	headingsDiv.append(img);

	li.append(paragraph);

	li.append(buttonsDiv);

	if(dishType === 'calzone'){
		buttonsDiv.append(calzonePizza);
	}	
	else {
		buttonsDiv.append(btnSmallPizza);
		buttonsDiv.append(btnBigPizza);
	}
}

// Tablica zawierajaca wszystkie pizze
const arrayContainingDishes = [
	// Pizza pizza-vege
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 1,
		ingredients: 'Sos pomidorowy, mozzarella',
		smallPizzaPrice: 24,
		bigPizzaPrice: 33,
		dishType: 'pizza-vege',
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 2,
		ingredients: 'Sos pomidorowy, mozzarella, pomidorki koktajlowe, oliwki, świeża bazylia ',
		smallPizzaPrice: 29,
		bigPizzaPrice: 42,
		dishType: 'pizza-vege',
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 3,
		ingredients: 'Sos pomidorowy, mozzarella, gorgonzola, mascarpone, parmezan',
		smallPizzaPrice: 33,
		bigPizzaPrice: 44,
		dishType: 'pizza-vege',
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 4,
		ingredients: 'Biały sos, mozzarella, cukinia, pieczona papryka',
		smallPizzaPrice: 30,
		bigPizzaPrice: 41,
		dishType: 'pizza-vege',
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 5,
		ingredients: 'Biały sos, mozzarella, jalapeno, czerwona cebula, oliwki',
		smallPizzaPrice: 31,
		bigPizzaPrice: 43,
		dishType: 'pizza-vege',
	},
	// Pizza z pizza-szynka/pizza-szynka parmenska
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 6,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-szynka parmeńska, parmezan, pomidorki koktajlowe, rukola",
		smallPizzaPrice: 36,
		bigPizzaPrice: 48,
		dishType: "pizza-szynka",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 7,
		ingredients:
		  "Biały sos, mozzarella, oliwki, pizza-szynka parmeńska, rukola, parmezan",
		smallPizzaPrice: 37,
		bigPizzaPrice: 49,
		dishType: "pizza-szynka",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 8,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-szynka, pieczarki, pieczona papryka, pomidorki koktajlowe",
		smallPizzaPrice: 35,
		bigPizzaPrice: 47,
		dishType: "pizza-szynka",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 9,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-szynka, oliwki, karczochy, rukola",
		smallPizzaPrice: 34,
		bigPizzaPrice: 45,
		dishType: "pizza-szynka",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 10,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-szynka, szpinak, pomidorki koktajlowe, krem serowy",
		smallPizzaPrice: 35,
		bigPizzaPrice: 46,
		dishType: "pizza-szynka",
	 },
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 11,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-szynka, czerwona cebula, oliwki, jalapeno, papryczki peperoncici, ostry sos",
		smallPizzaPrice: 39,
		bigPizzaPrice: 50,
		dishType: "pizza-szynka",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 12,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-szynka, pieczarki, pizza-szynka, pieczarki, kukurydza",
		smallPizzaPrice: 31,
		bigPizzaPrice: 44,
		dishType: "pizza-szynka",
	},
	// Pizza z pizza-salami
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 13,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami napoli, suszone pomidory, cebula, świeża bazylia",
		smallPizzaPrice: 36,
		bigPizzaPrice: 48,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 14,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami napoli, pizza-szynka, pieczarki, oliwa czosnkowa ",
		smallPizzaPrice: 34,
		bigPizzaPrice: 45,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 15,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami napoli / pizza-salami picante",
		smallPizzaPrice: 27,
		bigPizzaPrice: 36,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 16,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami napoli / pizza-salami picante, pieczarki",
		smallPizzaPrice: 29,
		bigPizzaPrice: 40,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 17,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami napoli, karczochy, oliwki",
		smallPizzaPrice: 31,
		bigPizzaPrice: 44,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 18,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami picante, oliwki, suszone pomidory, rukola ",
		smallPizzaPrice: 31,
		bigPizzaPrice: 45,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 19,
		ingredients:
		  "Biały sos, mozzarella, pizza-salami picante, papryczka peperoncini, cebula czerwona",
		smallPizzaPrice: 31,
		bigPizzaPrice: 45,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 20,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami picante, cukinia, pieczona papryka, czerwona cebula",
		smallPizzaPrice: 31,
		bigPizzaPrice: 45,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 21,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-salami picante, mascarpone, gorgonzola, oliwki",
		smallPizzaPrice: 37,
		bigPizzaPrice: 48,
		dishType: "pizza-salami",
	},
	{
		mainImg: '/images/318465835_520087870173847_7725691041688302238_n.jpg',
		dishHeading: 22,
		ingredients:
		  "Sos  pomidorowy, mozzarella, pizza-salami picante, mascarpone, jalapeno",
		smallPizzaPrice: 31,
		bigPizzaPrice: 44,
		dishType: "pizza-salami",
	},
	// Pizza z kielbasa wloska pizza-nduja
	{
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 23,
		ingredients:
		  "Sos pomidorowy, mozzarella, 'pizza-nduja, mascarpone, suszone pomidory, szpinak",
		smallPizzaPrice: 37,
		bigPizzaPrice: 48,
		dishType: "pizza-nduja",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 24,
		ingredients:
		  "Sos pomidorowy, mozzarella, 'pizza-nduja, pieczona papryka, oliwki, rukola",
		smallPizzaPrice: 36,
		bigPizzaPrice: 47,
		dishType: "pizza-nduja",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 25,
		ingredients:
		  "Biały sos, mozzarella, 'pizza-nduja, czerwona cebula, suszone pomidory, świeża bazylia",
		smallPizzaPrice: 36,
		bigPizzaPrice: 47,
		dishType: "pizza-nduja",
	  },
	  //Pizza z pizza-kurczakiem
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 26,
		ingredients: "Sos pomidorowy, mozzarella, pizza-kurczak, mascarpone, szpinak",
		smallPizzaPrice: 31,
		bigPizzaPrice: 44,
		dishType: "pizza-kurczak",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 27,
		ingredients:
		  "Sos pomidorowy, mozzarella, pizza-kurczak, czerwona cebula, kukurydza, zapiekany majonez",
		smallPizzaPrice: 35,
		bigPizzaPrice: 47,
		dishType: "pizza-kurczak",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 28,
		ingredients: "Sos pomidorowy, mozzarella, pizza-kurczak, kukurydza, papryka",
		smallPizzaPrice: 31,
		bigPizzaPrice: 43,
		dishType: "pizza-kurczak",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 29,
		ingredients: "Biały sos, mozzarella, pizza-kurczak, jalapeno, czerwona cebula",
		smallPizzaPrice: 31,
		bigPizzaPrice: 44,
		dishType: "pizza-kurczak",
	  },
	  //Pizza z pizza-tunczykiem
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 30,
		ingredients: "Sos pomidorowy, mozzarella, tuńczyk, oliwki",
		smallPizzaPrice: 29,
		bigPizzaPrice: 42,
		dishType: "pizza-tunczyk",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 31,
		ingredients: "Biały sos, mozzarella, tuńczyk, cebula, kukurydza, szpinak",
		smallPizzaPrice: 36,
		bigPizzaPrice: 47,
		dishType: "pizza-tunczyk",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 32,
		ingredients: "Sos pomidorowy, mozzarella, tuńczyk, cebula, zapiekany majonez",
		smallPizzaPrice: 35,
		bigPizzaPrice: 44,
		dishType: "pizza-tunczyk",
	  },
	  // Calzone
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 1,
		ingredients: "Sos pomidorowy, mozzarella, pizza-salami napoli, jalapeno, pieczona papryka, rukola",
		calzonePrice: 29,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 2,
		ingredients: "Sos pomidorowy, mozzarella, pizza-salami napoli, pizza-szynka, cebula, pieczarki",
		calzonePrice: 31,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 3,
		ingredients: "Biały sos, mozzarella, pizza-szynka, pomidorki koktajlowe, rukola, parmezan",
		calzonePrice: 30,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 4,
		ingredients: "Sos pomidorowy, mozzarella, pizza-salami picante, oliwki, gorgonzola",
		calzonePrice: 33,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 5,
		ingredients: "Sos pomidorowy, mozzarella, pizza-szynka parmeńska, szpinak, suszone pomidory, krem serowy(tylko w formie tradycyjnej)",
		calzonePrice: 32,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 6,
		ingredients: "Sos pomidorowy, mozzarella, pizza-szynka, pomidorki koktajlowe, krem serowy, kukurydza",
		calzonePrice: 30,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 7,
		ingredients: "Sos pomidorowy, mozzarella, pizza-kurczak, pieczona papryka, kukurydza, pieczarki",
		calzonePrice: 30,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 8,
		ingredients: "Sos pomidorowy, mozzarella, pizza-kurczak, cebula, kukurydza, zapiekany majonez",
		calzonePrice: 32,
		dishType: "calzone",
	  },
	  {
		mainImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
		dishHeading: 9,
		ingredients: "Sos pomidorowy, mozzarella, + max. 4 dodatki",
		calzonePrice: 24,
		dishType: "calzone",
	  },
	  

]

// Pobor wszystkich elementow z typami pizzy
const liMenu = document.querySelectorAll('.li-menu');


// Funkcja tworzaca pizze na podstawie jej typu z uzyciem klasy
const getDish = e => {
	removeDishes();

	let dishType = e.target.dataset.name;

	arrayContainingDishes.forEach(pizza => {
		
		for (const key in pizza) {
			console.log(pizza[key]);
			if (pizza[key] === dishType) {

				const chosenPizza = new MenuCreator(pizza.mainImg, pizza.dishHeading, pizza.ingredients, pizza.smallPizzaPrice + 'zł', pizza.bigPizzaPrice + 'zł', pizza.dishType, pizza.calzonePrice + 'zł');
	
				chosenPizza.addPizzaToUl(dishType);
			}
		}
	})
}

// Funkcja usuwajaca poprzedni obiekt pizzy
const removeDishes = () => {
	const lisToRemove = document.getElementsByClassName('li-pizza');

		[...lisToRemove].forEach(item => {
			item.remove();
		})
		
	
}


// Funkcja dodajaca menu przy zaladowaniu strony
const showMenu = () => {
	arrayContainingDishes.forEach(dish => {
		
		for (const key in dish) {
			const key2 = dish[key];
			console.log(key2);
			if (dish[key] === 'pizza-vege') {

				const chosenDish = new MenuCreator(dish.mainImg, dish.dishHeading, dish.ingredients, dish.smallPizzaPrice + 'zł', dish.bigPizzaPrice + 'zł', dish.dishType, dish.calzonePrice);
	
				chosenDish.addPizzaToUl();
			}
		}
	})
}

const navigation = document.querySelector(".navigation");
const asideImg = document.querySelector(".main-aside img");
const aside = document.querySelector(".main-aside ");

window.addEventListener("scroll", () => {
  let sizeOnTop = window.scrollY;
  if (sizeOnTop > 100) {
    navigation.classList.add("show");
    asideImg.src = "./logo/piccolo_zote.png";
    aside.classList.add("show");
  } else if (sizeOnTop < 100) {
    navigation.classList.remove("show");
    asideImg.src = "./logo/piccolo_biale.png";
    aside.classList.remove("show");
  }
});


window.addEventListener('DOMContentLoaded', showMenu)

liMenu.forEach(el => el.addEventListener('click', getDish));