// Creiamo un finto biglietto del treno con:

// Step 1 Inserire il nome passeggero

// Step 2 Inserire il codice treno (numero casuale tra 90000 e 100000 escluso)

// Step 3 Inserire il numero della carrozza (numero casuale tra 1 e 9 incluso)

// Step 4 Inserire il prezzo calcolato in base al vecchio esercizio

// Step 5 Categoria selezionata dall'utente (minorenne/maggiorenne/over65)

// Step 6 Al click su "Genera" appare la schermata con le caratteristiche del biglietto

// Step 7 Al click su "Annulla" dobbiamo ripulire il form e far sparire la sezione che calcola il prezzo del biglietto.

// Step 8 Bonus: aggiungete qualche controllo sui dati di input!





// Genera

var genera = document.getElementById('genera');

genera.addEventListener('click', function(){
    // hide & show del tuo biglietto
    document.getElementById('hideShow').style.display = 'block';
    

    // valori del nome passeggero
    var nome = document.getElementById('nome').value;
    document.getElementById('clickPasseggero').innerHTML = nome;

    // alert inserire il nome
    if(nome == ''){
        alert('Si prega di inserire correttamente il nome');
    }

    // valori dei km
    var km = document.getElementById('km').value;

    // alert inserire il nome
    if(km <= 0){
        alert('Si prega di inserire correttamente il numero di km');
    }



    // valori fascia d'età
    var eta = document.getElementById('fasciaEta').value;
    

    // calcolo prezzo del biglietto
    var prezzoBiglietto = 0.21 * km;
    var scontistica= 'Nessuno <br> Sconto';

    
    if(eta < 18){
        prezzoBiglietto = (prezzoBiglietto * 0.8).toFixed(2);
        scontistica = 'Sconto <br> Minorenne';
    } else if(eta > 65){
        prezzoBiglietto = (prezzoBiglietto * 0.6).toFixed(2);
        scontistica = 'Sconto <br> Over 65';
    }
    document.getElementById('offerta').innerHTML = scontistica;
    document.getElementById('costo').innerHTML = prezzoBiglietto + '€'; 



    // valori carrozza random
    var carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById('carrozza').innerHTML = carrozza;



    // valori codice CP random
    var codCP = Math.floor(Math.random() * 10000) + 89999;
    document.getElementById('codCP').innerHTML = codCP;
});














// Annulla

var annulla = document.getElementById('annulla');

annulla.addEventListener('click', function(){
    document.getElementById('hideShow').style.display = 'none';


    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fasciaEta').value = '';
});

