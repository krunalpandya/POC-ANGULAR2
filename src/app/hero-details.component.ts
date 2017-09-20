import { Component, Input } from '@angular/core';
import {Hero} from './hero';

@Component({
    selector:'hero-details',
    template:`
            <div *ngIf="hero">
    <h2>{{hero.name}} details!
      <div><label>id: </label>{{hero.id}}</div>
      <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </h2>
    </div>  
    `
})

export class HeroDetailsComponent
{
    @Input() hero:Hero;
}