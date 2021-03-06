import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import {Actor} from './actor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [ SearchService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  actors: Actor[];
  movies: any[];

  constructor(private service: SearchService) {}

  getMovies(): void {
    this.service.searchForMovie((list) => {
      console.log('++++ ', list)
      this.movies = list;
    });
  }
  getActors(input:string): void {
    this.service.searchForActors(input, (actors) => {
      this.actors = actors.results;
    });
  }
//TODO add a flag to choose between actors and movies with tabs on ui
  doSearch(input: string) {
    this.getActors(input);
  }

  ngOnInit() {
    this.getMovies();
    this.getActors('Jessica');
  }
}
