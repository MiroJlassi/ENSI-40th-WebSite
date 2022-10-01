import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants = [
    { nom: "Sakli", prenom:"Eya", photo:"assets/Eya.jpg", dateNaissance:new Date(2002, 9,5), moyenne:12.37, boursier: false, ville:"Tunis", option:"DSI"},
    { nom: "Mrad", prenom:"Yassine",photo:"assets/Yassine.jpg",  dateNaissance:new Date(2001, 4,28), moyenne:9.95 , boursier: false, ville:"Nabeul", option:"RSI"},
    { nom: "Safi", prenom:"Sarra",photo:"assets/Sarra.jpg",  dateNaissance:new Date(2003,2,3), moyenne:14.58, boursier: true, ville:"Sfax", option:"DSI"},
    { nom: "Mensi", prenom:"Omar",photo:"assets/Omar.jpg",  dateNaissance:new Date(2002, 8,15), moyenne:16.77, boursier: true, ville:"Kef", option:"SEM"}
  ];
  afficher:boolean = false;
  infos:string="";
  afficherInfos(i: number){
    this.afficher = true;
    let boursier = " et est boursier";
    if(!this.etudiants[i].boursier)
      boursier = " et n'est pas boursier";
    this.infos = this.etudiants[i].prenom+ " "+this.etudiants[i].nom.toUpperCase() +
    ", originaire de : "+ this.etudiants[i].ville +
    " a une moyenne de : " + this.etudiants[i].moyenne + boursier;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
