//ejercicio guiado
function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;

	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;

	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon= function(){
		return("hola, soy" + this.nombre + "y soy de color "+ this.color);
	};

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	};

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque

	}
};
// nueva funcion para que los pokemones se ataquen. 

function pelear(){
	var uno =document.getElementById("boton1").value; //enlazar html con html
	var dos =document.getElementById("boton2").value; //enlazar html con html
	var pokemon = new Pokemon(uno,"azul",Math.floor(Math.random(0,100)*101));//ataque de vida random 
	var pokemon1 = new Pokemon(dos,"azul",Math.floor(Math.random(0,100)*101)); // ataque de vida random 
	//console.log(pokemon.atacar(pokemon1));
	var resul = document.getElementById("imprimir");
	var mostrar = (pokemon.nombre + " ataco a " + pokemon1.nombre + "<br>" + " y " + pokemon1.nombre + " tiene una vida de " + pokemon1.poderDeAtaque);
	resul.innerHTML = mostrar; //innerHTML imprimir en la web
};


	




