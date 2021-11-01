//Ejercicio de la clase 3.

let votante = prompt( "Quiere votar A o B? ESC para salir" );
let votosA = 0;
let votosB = 0;
let votonulo = 0;

while( votante != "ESC" ){

    if( votante == A ){

        votosA = votosA + 1;

    } else if ( votante == B ){

        votosB = votosB + 1;

    } else {

        console.log(" VOTO NULO ");
        votonulo = votonulo + 1;

    }

    votante = prompt( "Quiere votar A o B? ESC para salir." );

}

if( votosA > votosB ){

    console.log( "El ganador a la votacion es el candidato A, con: " + votosA + " votos" );

} else {

    console.log( "El ganador a la votacion es el candidato B, con: " + votosB + " votos" );

}

console.log( "La cantidad de votos nulos fueron: " + votonulo);