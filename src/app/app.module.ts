import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { RouterModule }           from '@angular/router';

import { AppComponent }           from './app.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { HeroListComponent }      from './hero-list/hero-list.component';
import { HeroDetailComponent }    from './hero-detail/hero-detail.component';
import { HeroService }            from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroListComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
