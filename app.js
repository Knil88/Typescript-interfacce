import { addizione } from './function.js';
// let numArray:number[]=[1,2,3,4,5];
// for(let i:number = 0; i<numArray.length; i++){
//     console.log(numArray[i])
// }
// //Creare classe Persona
// class Persona{
//     nome:string='Luca'
//     cognome:string='Rossi'
// }
// //Creare variabile di tipo persona
// let persona:Persona = new Persona();
// console.log(persona);
// //Creare una interfaccia Animale 
// interface Animale {
//     nome:string
//     verso:string
//     emettiVerso():void;
// }
// class Leone implements Animale{
//     nome: string;
//     verso: string;
//     constructor(nome:string,verso:string){
//         this.nome=nome;
//         this.verso=verso;
//     }
//     emettiVerso(): void {
//         console.log(this.verso);
//     }
// }
// class Cane implements Animale{
//     nome: string;
//     verso: string;
//     constructor(nome:string,verso:string){
//         this.nome=nome;
//         this.verso=verso;
//     }
//     emettiVerso(): void {
//         console.log(this.verso);
//     }
// }
// //creare oggetto Cane e Leone
// let cane:Cane = new Cane('Cane','Bau');
// let leone:Leone = new Leone('Leone','Roar');
// console.log(leone);
// console.log(cane);
// leone.emettiVerso();
// cane.emettiVerso();
// class Triangolo{
//     base:number;
//     altezza:number;
//     constructor(base:number,altezza:number){
//         this.base = base;
//         this.altezza=altezza;
//     }
//     calcolaArea(): number {
//         return (this.base * this.altezza) / 2;
//     }
// }
// let triangolo:Triangolo = new Triangolo(34,23);
// console.log("l'area del triangolo è :"+triangolo.calcolaArea());
// Crea una classe Punto che abbia le proprietà x e y. Aggiungi un metodo per calcolare la distanza tra due punti.
// class Punto{
//     x:number;
//     y:number;
//     constructor(x:number,y:number){
//         this.x =x
//         this.y =y
//     }
//     calcolaDistanza(punto:Punto){
//         let distanzaX:number=this.x
//         let distanzaY:number=this.y
//         const distanza = Math.sqrt(distanzaX * distanzaX + distanzaY * distanzaY);
//         return distanza;
//     }
// }
// let punto:Punto=new Punto(2,2);
// console.log(punto.calcolaDistanza(punto));;
//Crea una classe Veicolo con le proprietà marca e anno. Aggiungi un metodo per calcolare l'età del veicolo in base all'anno di fabbricazione.
// class Veicolo {
//     marca:string
//     anno:number
//     constructor(marca:string,anno:number){
//         this.marca=marca;
//         this.anno=anno;
//     }
//     calcolaEtaVeicolo(): number {
//         const annoCorrente = new Date().getFullYear();
//         const eta = annoCorrente - this.anno;
//         return eta;
//     }
// }
// let veicolo:Veicolo=new Veicolo('Volvo',1998);
// console.log(veicolo.calcolaEtaVeicolo());
// function creaElemento(elemento:string,id:string,nome:string){
//   return  function (constructor:any){
//     const container = document.getElementById(id);
//     const persona= new constructor (nome);
//     if(container){
//       container.innerHTML=elemento;
//       container.querySelector('h1')!.textContent = persona.nome;
//     }
//   }
// }
// @creaElemento('<h1></h1>','container','Yari')
// class Persona{
//   constructor(public nome:string){
//       console.log('Sto creando un oggetto di prova');
//   }
// }
console.log(addizione(4, 4));
