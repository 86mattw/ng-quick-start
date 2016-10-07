import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Location }                     from '@angular/common';

import { Hero }                         from '../models/hero';
import { HeroService }                  from '../services/hero.service';

// you are here:
// https://angular.io/docs/ts/latest/tutorial/toh-pt5.html#!#revise-the-herodetailcomponent-

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
