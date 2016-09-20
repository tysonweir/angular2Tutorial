import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent{
    heroes: Hero[] =[];

    constructor(private heroService: HeroService, 
                private router: Router){}

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }

    goToDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

 }