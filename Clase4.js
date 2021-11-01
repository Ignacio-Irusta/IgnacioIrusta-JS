// Ejercicio de la clase 4 + desafio complementario.
let contred = 0;
let contcall = 0;
let contcsgo = 0;
let contrust = 0;
let contforest = 0;
let contday = 0;
let contfifa = 0;
let contnba = 0;
let conthorizon = 0;

primera();

function primera(){
    var usuario = prompt("Ingrese su nombre de usuario");
    var pass = prompt("Ingrese su Contraseña");

    var confirmusuario = usuario;
    var confirmpass = pass;

    for(let i = 0; i <= 2; i++){
        var usuario2 = prompt("Confirme su Usuario");
        var pass2 = prompt("Confirmar su Contraseña");
        var j = 3;

        if(confirmusuario === usuario2 && confirmpass === pass2){
            let cof = true;
            return cof;
        } else {
            alert("Usuario o Contraseña incorrecta, tiene: " + (j - 1) + " intentos");
        }
    }
}

if(cof == true){

    console.log( "Tenemos 3 generos de juegos: Shooter, Survival y Deportivo." );
    let primeragenero = prompt("Ingrese el genero para ver el catalogo o ESC para salir: ");

    segunda();

    function segunda(){

        while(primeragenero != "ESC"){

            if (primeragenero == "Shooter"){

                
                console.log("En la categoria de Shooter tenemos: ");
                console.log("Red Dead Redemption: ARS$ 2,499");
                console.log("Call of Duty: Black Ops 3: ARS$ 999");
                console.log("CS:GO: ARS$ 759");
                var eleccion = prompt("Elija un juego para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero.");

                while(eleccion != "ESC"){

                    if(eleccion == "Red Dead Redemption"){
                        contred = contred + 1;
                    } else if(eleccion == "Call of Duty: Black Ops 3"){
                        contcall = contcall + 1;
                    } else if(eleccion == "CS:GO"){
                        contcsgo = contcsgo + 1;
                    } else {
                        alert("Ingrese el nombre del juego correctamente. (Importante, respete mayusculas)");
                    }
                    var eleccion = prompt("Elija un juego para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero.");
                }

            } else if (primeragenero == "Survival"){

                console.log("En la categoria de Survival tenemos: ");
                console.log("Rust: ARS$ 2,440");
                console.log("The Forest: ARS$ 224");
                console.log("Day Z: ARS$ 1,999");
                var eleccion2 = prompt("Elija uno para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero.");

                while(eleccion2 != "ESC"){

                    if(eleccion2 == "Rust"){
                        contrust = contrust + 1;
                    } else if(eleccion2 == "The Forest"){
                        contforest = contforest + 1;
                    } else if(eleccion2 == "Day Z"){
                        contday = contday + 1;
                    } else {
                        alert("Ingrese el nombre del juego correctamente. (Importante, respete mayusculas)");
                    }
                }

            } else if (primeragenero == "Deportivo"){

                console.log("En la categoria de deportes tenemos: ");
                console.log("Fifa 2022: ARS$ 5,499");
                console.log("NBA2K 2022: ARS$ 4,019");
                console.log("Forza Horizon 4: ARS$ 3,599");
                var eleccion3 = prompt("Elija uno para agregar al carro ingresando su nombre o ESC para vovler a la seleccion de genero.");

                while(eleccion3 != "ESC"){

                    if(eleccion3 == "Fifa 2022"){
                        contfifa = contfifa + 1;
                    } else if(eleccion3 == "NBA2k 2022"){
                        contnba = contnba + 1;
                    } else if(eleccion3 == "Forza Horizon 4"){
                        conthorizon = conthorizon + 1;
                    } else {
                        alert("Ingrese el nombre del juego correctamente. (Importante, respete mayusculas)")
                    }
                }

            } else {
                alert("Ingreso mal la catergoria");
            }
            primeragenero = prompt("Ingrese el genero para ver el catalogo o ESC para salir: ");
        }
    }
}

tercera();

function tercera(){
}