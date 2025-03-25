/*CODE QUESTION 1*/

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // ?
// console.log(secondBurger.name ); // ?

/* DOMANDE 1:
-Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

RISPOSTA : Verrà stampato sempre Double Cheese Burger in entrambi i casi perchè la variabile secondBurger è un riferimento a hamburger e quindi se viene modificato uno viene modificato anche l'altro. E' una copia per riferimento.

-Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA: Gli oggetti creati in memoria di fatto sono 1 solo.


 */



/*CODE QUESTION 2
P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento!
*/

// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = {...hamburger};
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?


/* DOMANDE 2: 
-Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

RISPOSTA: Verrà stampato in entrambi i casi Salad perchè secondBurger è una copia effettuata con il metodo spread che è una shallow copy, di conseguenza non copia anche gli oggetti annidati ma solo i riferimenti ad essi.

-Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA: Gli oggetti creati in memoria di fatto sono 2, uno per hamburger e uno per secondBurger più un singolo array a cui fanno riferimento entrambi gli oggetti

*/

/*CODE QUESTION 3*/

// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

/* DOMANDE 3:

- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA: In totale gli oggetti creati in memoria sono 9, 3 per hamburger, 3 per secondBurger e 3 per thirdBurger. Infatti structuredClone crea una copia profonda dell'oggetto e quindi crea nuovi oggetti per ogni proprietà dell'oggetto clonato.

*/

/*CODE QUESTION 4*/

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };

/* DOMANDE 4: 
    -Qual è il metodo migliore per clonare l’oggetto chef, e perché?

    RISPOSTA: il metodo migliore per clonare l'oggetto chef è con l'operatore spread in quanto permette di creare una shallow copy copiando anche le funzioni. Lo considero il metodo migliore perché non ci sono oggetti annidati e c'è una funzione da copiare.

    -Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

    RISPOSTA: il metodo migliore per clonare l'oggetto restaurant è il structureClone() in quanto possiede sia un oggetto annidato che abbiamo la necessità di copiare ma soprattutto un oggetto complesso come la data. Se avessimo usato JSONParse e JSONStringify avremmo perso la formattazione della data.

*/

/*CODE QUESTION 5 (BONUS)*/

// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const newRestaurant = {...hamburger.maker.restaurant};
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = {...hamburger};
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // ?
// console.log(secondBurger.maker.name); // ?
// console.log(hamburger.maker.restaurant.name); // ?
// console.log(secondBurger.maker.restaurant.name); // ?

/* DOMANDE 5: 

-Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

RISPOSTA: Verranno stampati in ordine: 

Chef Hyur
Chef Hyur
Hyur's II
Hyur's II


-Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA: In totale gli oggetti che vengono creati in memoria sono 5, 1 per hamburger, 1 per newRestaurant, 1 per secondBurger e 2 per i due oggetti restaurant annidati.


*/

/*CODE QUESTION 6 (BONUS)*/

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

/* DOMANDE 6: 
  - Qual è il metodo migliore per clonare l’oggetto chef, e perché?

  RISPOSTA: Il metodo migliore per clonare l'oggetto chef è con l'operatore spread in quanto permette di creare una shallow copy copiando anche le funzioni. Lo considero il
  metodo migliore anche se più complesso a livello di sintassi perché è l'unico che ci permette di copiare l'oggetto e le sue funzioni. Ovviamente essendoci oggetti annidati sarà necessario eseguire lo spread per ognuno di essi.

  const newChef = 
  {...chef, 
  restaurant: {...chef.restaurant, 
                  address: {...chef.restaurant.address}}};

*/

/*SNACK 7 (BONUS)*/

/* Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).*/

/*DEFINIZIONE FUNZIONE RICORSIVA: 
Una funzione si dice ricorsiva quando, nel suo corpo, effettua una chiamata a sé stessa.

ES: NUMERO FATTORIALE
function fattoriale(n) {
  if (n === 0) {
    return 1; // ✅ Caso base
  }
  return n * fattoriale(n - 1); // 🔁 Chiamata ricorsiva
}*/

// ESECUZIONE ESERCIZIO


function ObjectDeepCopy(object){
  if (typeof object !== 'object' || object === null){
    return object
  }
  const copy = {};
  for (let key in object){
    const value = object[key];

    if(typeof value === 'function'){
      copy[key] = value;
    }
    else if(typeof value === 'object' && value !== null){
      copy[key] = ObjectDeepCopy(value)
    } 
    else {
      copy[key] = value;
    }
  }
  return copy
}

console.log(ObjectDeepCopy(chef))