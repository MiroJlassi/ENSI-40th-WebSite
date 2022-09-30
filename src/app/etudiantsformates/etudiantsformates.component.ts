import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiantsformates',
  templateUrl: './etudiantsformates.component.html',
  styleUrls: ['./etudiantsformates.component.css']
})
export class EtudiantsformatesComponent implements OnInit {
  etudiants = [
    { nom: "Sakli", prenom:"Eya", photo:"assets/Eya.jpg", dateNaissance:new Date(2002, 9,5), moyenne:12.37, boursier: false, ville:"Tunis"},
    { nom: "Mrad", prenom:"Yassine",photo:"assets/Yassine.jpg",  dateNaissance:new Date(2001, 4,28), moyenne:9.95 , boursier: false, ville:"Nabeul"},
    { nom: "Safi", prenom:"Sarra",photo:"assets/Sarra.jpg",  dateNaissance:new Date(2003,2,3), moyenne:14.58, boursier: true, ville:"Sfax"},
    { nom: "Mensi", prenom:"Omar",photo:"assets/Omar.jpg",  dateNaissance:new Date(2002, 8,15), moyenne:16.77, boursier: true, ville:"Kef"}
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
