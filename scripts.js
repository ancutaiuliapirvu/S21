var masina = {
    marca: 'Ford',
    model: 'Focus',
    an: 2010,
    pret: 10000,
    nrKm: 80000
}

//a)modif nr km

var kmNoi = 5000;
masina.nrKm = kmNoi;
// console.log('km noi', masina.nrKm);

// b) propr noua

masina.description = 'fulloption';
// console.log('description', masina.description);

// c) stergem descriere din obiect:

delete masina.description;



// 20. 

function tuneCar (car) {
    car.nrKm = 400;
    var newCar = Object.assign({}, car);
    newCar.nrKm = newCar.nrKm / 2;
    newCar.pret = newCar.pret * 1.5;


}

var tunedCar = tuneCar(masina);


//21. 

// var time = new Date('December 17, 1995 03:04:01');
// console.log("Este ora: ",
// ("0" + time.getHours()).slice(-2)   + ":" +
// ("0" + time.getMinutes()).slice(-2) + ":" +
// ("0" + time.getSeconds()).slice(-2));


var dataAzi = new Date();

var ora = dataAzi.getHours();
var minute = dataAzi.getMinutes();
var secunde = dataAzi.getSeconds();

if (ora<10){
    ora = '0' + ora; 
}

if (minute<10){
    minute = '0' + minute; 
}

if (secunde < 10){
    secunde = '0' + secunde;
}

// console.log(ora + ':' + minute + ':' + secunde)


var timeA = new Date('December 17, 1995 23:24:21');
var timeB = new Date('December 17, 1995 03:04:01')
// console.log("Este ora: ",
// ("0" + time.getHours()).slice(-2)   + ":" +
// ("0" + time.getMinutes()).slice(-2) + ":" +
// ("0" + time.getSeconds()).slice(-2));

// var oraOpt = ("0" + time.getHours()).slice(-2);

var oraOptA = ("0" + timeA.getHours());

var oraOptB = ("0" + timeB.getHours());

var oraOptASliced = oraOptA.slice(-2);
var oraOptBSliced = oraOptB.slice(-2);
// "0" + 3 <=> "0" + "3" <=> "03" 

// console.log('oraOptA', oraOptA, 'sliced', oraOptASliced);
// console.log('oraOptB', oraOptB, 'sliced', oraOptBSliced);


//23 MegaJS
const testGrades = "9.80/6.85/9.10/7.80/8.20";

var testGradesArray = testGrades.split('/');
console.log('testGradesArr', testGradesArray);

//o variabila in care sa ne tinem totalul (suma notelor)

var sumaNote = 0;



for (var i = 0; i < testGradesArray.length; i++){
    console.log('element arr', testGradesArray[i]);
    sumaNote = sumaNote + Number(testGradesArray[i]);
    console.log('sumaNote in for', sumaNote);
}
console.log('sumaNote in afara', sumaNote);

var media = sumaNote / testGradesArray.length;

console.log('media', media);


// pt primul Element, nota 9.80:
//  sumaNote = 0 + '9.80' = "0" + "9.80" = "09.80";

// sumaNote = 0 + 9.8 = 9.8

//pt al doilea element, adica nota 6.85

//suma note = 9.8 + 6.85 = 16.65

