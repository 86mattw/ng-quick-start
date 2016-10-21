import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero }               from '../models/hero';

// you are here: https://angular.io/docs/ts/latest/tutorial/toh-pt6.html

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(res => res.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
