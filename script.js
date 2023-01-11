const pizzaUlContainer = document.querySelector(".pizza-list-box");
// Klasa do stworzenia pizzy
class PizzaCreator {
  constructor(
    pizzaImg,
    pizzaHeading,
    ingredients,
    smallPizzaPrice,
    bigPizzaPrice,
    pizzaType
  ) {
    (this.pizzaImg = pizzaImg),
      (this.pizzaHeading = pizzaHeading),
      (this.ingredients = ingredients),
      (this.smallPizzaPrice = smallPizzaPrice),
      (this.bigPizzaPrice = bigPizzaPrice),
      (this.pizzaType = pizzaType);
  }
}

// Funkcja powyzszej klasy tworzaca li na stronie z stworzona pizza
PizzaCreator.prototype.addPizzaToUl = function () {
  // Pobieranie elementow z HTML

  // Tworzenie elementow HTML
  const li = document.createElement("li");
  const btnSmallPizza = document.createElement("button");
  const btnBigPizza = document.createElement("button");
  const buttonsDiv = document.createElement("div");
  const headingsDiv = document.createElement("div");
  const img = document.createElement("img");
  const paragraph = document.createElement("p");
  const heading = document.createElement("h3");

  // Set up elementow dodawanych do strony
  img.setAttribute("src", this.pizzaImg);
  img.setAttribute("alt", "");
  img.classList.add("menu-image");

  heading.textContent = this.pizzaHeading;
  paragraph.textContent = this.ingredients;
  btnSmallPizza.textContent = this.smallPizzaPrice;
  btnBigPizza.textContent = this.bigPizzaPrice;

  // Set up klas elementow dodawanych do strony
  li.classList.add("li-pizza");

  headingsDiv.classList.add("headings-div");
  buttonsDiv.classList.add("add-to-cart-buttons");

  // Przypisanie elementow do odpowiednich struktur
  pizzaUlContainer.append(li);
  li.append(headingsDiv);
  headingsDiv.append(heading);
  headingsDiv.append(img);

  li.append(paragraph);

  li.append(buttonsDiv);
  buttonsDiv.append(btnSmallPizza);
  buttonsDiv.append(btnBigPizza);
};

// Tablica zawierajaca wszystkie pizze
const arrayContainingPizzas = [
  // Pizza vege
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 1,
    ingredients: "Sos pomidorowy, mozzarella",
    smallPizzaPrice: 24,
    bigPizzaPrice: 33,
    pizzaType: "vege",
  },
  {
    pizzaImg: "/images/pizzaKurczak",
    pizzaHeading: 2,
    ingredients:
      "Sos pomidorowy, mozzarella, pomidorki koktajlowe, oliwki, świeża bazylia ",
    smallPizzaPrice: 29,
    bigPizzaPrice: 42,
    pizzaType: "vege",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 3,
    ingredients: "Sos pomidorowy, mozzarella, gorgonzola, mascarpone, parmezan",
    smallPizzaPrice: 33,
    bigPizzaPrice: 44,
    pizzaType: "vege",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 4,
    ingredients: "Biały sos, mozzarella, cukinia, pieczona papryka",
    smallPizzaPrice: 30,
    bigPizzaPrice: 41,
    pizzaType: "vege",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 5,
    ingredients: "Biały sos, mozzarella, jalapeno, czerwona cebula, oliwki",
    smallPizzaPrice: 31,
    bigPizzaPrice: 43,
    pizzaType: "vege",
  },
  // Pizza z szynka/szynka parmenska
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 6,
    ingredients:
      "Sos pomidorowy, mozzarella, szynka parmeńska, parmezan, pomidorki koktajlowe, rukola",
    smallPizzaPrice: 36,
    bigPizzaPrice: 48,
    pizzaType: "szynka",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 7,
    ingredients:
      "Biały sos, mozzarella, oliwki, szynka parmeńska, rukola, parmezan",
    smallPizzaPrice: 37,
    bigPizzaPrice: 49,
    pizzaType: "szynka",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 8,
    ingredients:
      "Sos pomidorowy, mozzarella, szynka, pieczarki, pieczona papryka, pomidorki koktajlowe",
    smallPizzaPrice: 35,
    bigPizzaPrice: 47,
    pizzaType: "szynka",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 9,
    ingredients:
      "Sos pomidorowy, mozzarella, szynka, oliwki, karczochy, rukola",
    smallPizzaPrice: 34,
    bigPizzaPrice: 45,
    pizzaType: "szynka",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 10,
    ingredients:
      "Sos pomidorowy, mozzarella, szynka, szpinak, pomidorki koktajlowe, krem serowy",
    smallPizzaPrice: 35,
    bigPizzaPrice: 46,
    pizzaType: "szynka",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 11,
    ingredients:
      "Sos pomidorowy, mozzarella, szynka, czerwona cebula, oliwki, jalapeno, papryczki peperoncici, ostry sos",
    smallPizzaPrice: 39,
    bigPizzaPrice: 50,
    pizzaType: "szynka",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 12,
    ingredients:
      "Sos pomidorowy, mozzarella, szynka, pieczarki, szynka, pieczarki, kukurydza",
    smallPizzaPrice: 31,
    bigPizzaPrice: 44,
    pizzaType: "szynka",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 13,
    ingredients:
      "Sos pomidorowy, mozzarella, salami napoli, suszone pomidory, cebula, świeża bazylia",
    smallPizzaPrice: 36,
    bigPizzaPrice: 48,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 14,
    ingredients:
      "Sos pomidorowy, mozzarella, salami napoli, szynka, pieczarki, oliwa czosnkowa ",
    smallPizzaPrice: 34,
    bigPizzaPrice: 45,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 15,
    ingredients: "Sos pomidorowy, mozzarella, salami napoli / salami picante",
    smallPizzaPrice: 27,
    bigPizzaPrice: 36,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 16,
    ingredients:
      "Sos pomidorowy, mozzarella, salami napoli / salami picante, pieczarki",
    smallPizzaPrice: 29,
    bigPizzaPrice: 40,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 17,
    ingredients: "Sos pomidorowy, mozzarella, salami napoli, karczochy, oliwki",
    smallPizzaPrice: 31,
    bigPizzaPrice: 44,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 18,
    ingredients:
      "Sos pomidorowy, mozzarella, salami picante, oliwki, suszone pomidory, rukola ",
    smallPizzaPrice: 31,
    bigPizzaPrice: 45,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 19,
    ingredients:
      "Biały sos, mozzarella, salami picante, papryczka peperoncini, cebula czerwona",
    smallPizzaPrice: 31,
    bigPizzaPrice: 45,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 20,
    ingredients:
      "Sos pomidorowy, mozzarella, salami picante, cukinia, pieczona papryka, czerwona cebula",
    smallPizzaPrice: 31,
    bigPizzaPrice: 45,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 21,
    ingredients:
      "Sos pomidorowy, mozzarella, salami picante, mascarpone, gorgonzola, oliwki",
    smallPizzaPrice: 37,
    bigPizzaPrice: 48,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 22,
    ingredients:
      "Sos  pomidorowy, mozzarella, salami picante, mascarpone, jalapeno",
    smallPizzaPrice: 31,
    bigPizzaPrice: 44,
    pizzaType: "salami",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 23,
    ingredients:
      "Sos pomidorowy, mozzarella, 'nduja, mascarpone, suszone pomidory, szpinak",
    smallPizzaPrice: 37,
    bigPizzaPrice: 48,
    pizzaType: "nduja",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 24,
    ingredients:
      "Sos pomidorowy, mozzarella, 'nduja, pieczona papryka, oliwki, rukola",
    smallPizzaPrice: 36,
    bigPizzaPrice: 47,
    pizzaType: "nduja",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 25,
    ingredients:
      "Biały sos, mozzarella, 'nduja, czerwona cebula, suszone pomidory, świeża bazylia",
    smallPizzaPrice: 36,
    bigPizzaPrice: 47,
    pizzaType: "nduja",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 26,
    ingredients: "Sos pomidorowy, mozzarella, kurczak, mascarpone, szpinak",
    smallPizzaPrice: 31,
    bigPizzaPrice: 44,
    pizzaType: "kurczak",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 27,
    ingredients:
      "Sos pomidorowy, mozzarella, kurczak, czerwona cebula, kukurydza, zapiekany majonez",
    smallPizzaPrice: 35,
    bigPizzaPrice: 47,
    pizzaType: "kurczak",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 28,
    ingredients: "Sos pomidorowy, mozzarella, kurczak, kukurydza, papryka",
    smallPizzaPrice: 31,
    bigPizzaPrice: 43,
    pizzaType: "kurczak",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 29,
    ingredients: "Biały sos, mozzarella, kurczak, jalapeno, czerwona cebula",
    smallPizzaPrice: 31,
    bigPizzaPrice: 44,
    pizzaType: "kurczak",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 30,
    ingredients: "Sos pomidorowy, mozzarella, tuńczyk, oliwki",
    smallPizzaPrice: 29,
    bigPizzaPrice: 42,
    pizzaType: "tunczyk",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 31,
    ingredients: "Biały sos, mozzarella, tuńczyk, cebula, kukurydza, szpinak",
    smallPizzaPrice: 36,
    bigPizzaPrice: 47,
    pizzaType: "tunczyk",
  },
  {
    pizzaImg: "/images/318465835_520087870173847_7725691041688302238_n.jpg",
    pizzaHeading: 32,
    ingredients:
      "Sos pomidorowy, mozzarella, tuńczyk, cebula, zapiekany majonez",
    smallPizzaPrice: 35,
    bigPizzaPrice: 44,
    pizzaType: "tunczyk",
  },
];

// Pobor wszystkich elementow z typami pizzy
const liMenu = document.querySelectorAll(".li-menu");

// Funkcja tworzaca pizze na podstawie jej typu z uzyciem klasy
const getPizza = (e) => {
  removePizzas();

  let pizzaType = e.target.dataset.name;

  arrayContainingPizzas.forEach((pizza) => {
    for (const key in pizza) {
      if (pizza[key] === pizzaType) {
        const chosenPizza = new PizzaCreator(
          pizza.pizzaImg,
          pizza.pizzaHeading,
          pizza.ingredients,
          pizza.smallPizzaPrice + "zł",
          pizza.bigPizzaPrice + "zł",
          pizza.pizzaType
        );

        chosenPizza.addPizzaToUl();
      }
    }
  });
};

// Funkcja usuwajaca poprzedni obiekt pizzy
const removePizzas = () => {
  const lisToRemove = document.getElementsByClassName("li-pizza");

  [...lisToRemove].forEach((item) => {
    item.remove();
  });
};

const menu = () => {
  arrayContainingPizzas.forEach((pizza) => {
    for (const key in pizza) {
      if (pizza[key] === "vege") {
        const chosenPizza = new PizzaCreator(
          pizza.pizzaImg,
          pizza.pizzaHeading,
          pizza.ingredients,
          pizza.smallPizzaPrice + "zł",
          pizza.bigPizzaPrice + "zł",
          pizza.pizzaType
        );

        chosenPizza.addPizzaToUl();
      }
    }
  });
};

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

window.addEventListener("DOMContentLoaded", menu);

liMenu.forEach((el) => el.addEventListener("click", getPizza));
