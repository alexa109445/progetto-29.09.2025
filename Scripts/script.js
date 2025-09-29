/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.*/
/*Ci sono cinque tipi di dato JavaScript:
-Stringhe: servono per rappresentare dei testi scritti. Es."Stefano", "Pluto",""(questa è una stringa ma ha valore vuoto).
-Numeri: possono essere scritti normalmente (0, 1, 12.2,..) ma anche in negativo (-1, -3, .2,5..). Si possono usare anche per
effettuare dei calcoli non troppi complessi. 
-Boolean: indicano il True or False, servono per eseguire il codice come vero o falso.
-Undefined: Indica delle variabili a cui non è ancora stato assegnato un valore.
-Null:  Indica un valore nullo ed inesistente. Là dove prima era stato assegnato un valore ora c'è una totale
assenza di qualsiasi oggetto o valore.*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

Let myName="Alexandra"
console.log("Il mio nome", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1=12
let n2=20
let s1=n1+n2
console.log("Somma di 12+20", s1)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName="Manolache"
console.log("il mio cognome", myName)
//
//const myName="Alexandra"
//myName="Manolache" //<--NON SI PUO FARE



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

Let n3=12
let n4=4
let s2=n3-n4
console.log("Sottrazione di n3-n4", s2)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1="jhon"
let name2="Jhon"
name1!== name2

