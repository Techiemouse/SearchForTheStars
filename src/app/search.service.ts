import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
    constructor(private http: HttpClient) {}
    searchForMovie(done): void {
      const apiKey = '4d4c71871ee50ad1bc6cd54049672ed5';
      this.http.get('https://api.themoviedb.org/3/movie/76341?api_key='+apiKey).subscribe(done);
    }

    searchForActors(searchString:string, done): void {
      const apiKey = '4d4c71871ee50ad1bc6cd54049672ed5';
      console.log('thesearchstring---', searchString);
      this.http.get('https://api.themoviedb.org/3/search/person?api_key='+apiKey+'&language=en-US&query='+searchString+'&page=1&include_adult=false').subscribe(done);
    }
}