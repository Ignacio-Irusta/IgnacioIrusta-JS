//Ejercicio de la clase 3.

let votante = prompt( "Quiere votar A o B? ESC para salir" );
let votanteA = 0;
let votanteB = 0;

while( votante != "ESC" ){

    if( votante == A ){

        votosA = votosA + 1;

    } else if ( votante == B ){

        votosB = votosB + 1;

    } else {

        console.log(" VOTO NULO ");

    }

    votante = prompt( "Quiere votar A o B? ESC para salir." );

}

if( votanteA > votanteB ){

    console.log( "El ganador a la votacion es el candidato A, con: " + votanteA + " votos" );

} else {

    console.log( "El ganador a la votacion es el candidato B, con: " + votanteB + " votos" );

}