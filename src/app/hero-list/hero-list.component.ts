import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})

export class HeroListComponent implements OnInit {
  title = "Hero List";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
