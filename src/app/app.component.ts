import { Component } from '@angular/core';

import {Hero} from './hero';


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onselect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
  
  `,

  //template :'<h2>My Heroes</h2> <ul class="heroes">  <li *ngFor="let hero of heroes">  <span class="badge">{{hero.id}}</span> {{hero.name}}    <!-- each hero goes here -->    </li>  </ul>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

   title = 'Tour of Heroes';
  // // hero='windstorm';
  SelectedHero: Hero;

  heroes = HEROES;
  
  onselect(hero:Hero) : void {
    this.SelectedHero = hero;
  }


}





