import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants = [
    { nom: "Sakli", prenom:"Eya", photo:"Eya.jpg", dateNaissance:new Date(2002, 9,5), moyenne:12.37},
    { nom: "Mrad", prenom:"Yassine",photo:"Yassine.jpg",  dateNaissance:new Date(2001, 4,28), moyenne:15.45},
    { nom: "Safi", prenom:"Sarra",photo:"Sarra.jpg",  dateNaissance:new Date(2003,2,3), moyenne:14.23},
    { nom: "Mensi", prenom:"Omar",photo:"Omar.jpg",  dateNaissance:new Date(2002, 8,15), moyenne:16.77}
  ];
  options =["DSI", "RSI", "SEM"];

  constructor() { }

  ngOnInit(): void {
  }

}
