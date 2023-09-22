/* crie uma variável para cada figura geométrica, que armazene a fórmula que calcula a sua área. */

function areaRetangulo(b,a){
    let arear = b*a;
    return console.log(arear+"cm²");
}

function areaCirculo(r){
    let areac= 3.14*(r**2);
    return console.log(areac.toFixed(2)+"cm²");
}

function areaTriangulo(b,a){
    let areat = (b*a)/2
    return console.log(areat+"cm²");
}
/* 
2. Com as fórmulas armazenadas nessas variáveis, atribua valores em váriaveis para as bases, alturas e raio das figuras e calcule
a) a área do retângulo
b) a área do círculo
c) a área do triângulo retângulo
Em seguida exiba os resultados do cálculos das áreas, imprimindo as variáveis através do console.log(). */


function areaRetangulo(b,a){
    let arear = b*a;
    return console.log(`Area do Retangulo: ${arear}cm²`);
}

function areaCirculo(r){
    let areac= 3.14*(r**2);
    return console.log(`Area do Circulo: ${areac.toFixed(2)}cm²`);
}

function areaTriangulo(b,a){
    let areat = (b*a)/2
    return console.log(`Area do Triangulo: ${areat}cm²`);
}

console.log(areaRetangulo(10,5));
console.log(areaCirculo(4.2));
console.log(areaTriangulo(2.2,5));