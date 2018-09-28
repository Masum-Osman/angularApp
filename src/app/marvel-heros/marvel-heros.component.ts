import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css']
})
export class MarvelHerosComponent implements OnInit {

  heros = ['Iron Man', 'Spider Man', 'Black Panther', 'Ant Man', 'Super Man', 'X-Man'];
 
  inputHero = null;
  btnDisable = false; 
  Adding = false;

  addhero () {
      this.heros.push(this.inputHero);
      this.inputHero = null;
      this.Adding = false;
  }

  addMore() {
    this.Adding = !this.Adding;
  }

  constructor() { }

  ngOnInit() {
  }

}
