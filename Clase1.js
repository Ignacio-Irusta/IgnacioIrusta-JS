// El ejercicio 1 y 2 realizando una division y usando el If para comparar resultados.

let notauno = prompt( "Ingrese la nota del primer trimestre" );
let notados = prompt( "Ingrese la nota del segundo trimestre" );
let notatres = prompt( "Ingrese la nota del tercer trimestre" );

suma = parseInt(notauno) + parseInt(notados) + parseInt(notatres);
notafinal = suma / 3;

if(notafinal >= 7){

    console.log( "Usted aprobo la materia con: " + notafinal);

} else if(notafinal >= 4){

    console.log( "Necesita clases de recuperacion." );

} else {

    alert( "Usted desaprobo :,(" );

}