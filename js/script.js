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
    document.getElementById('hideShow').style.display = 'block';
    
    var nome = document.getElementById('nome').value;
    document.getElementById('clickPasseggero').innerHTML = nome;

    var carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById('carrozza').innerHTML = carrozza;

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

