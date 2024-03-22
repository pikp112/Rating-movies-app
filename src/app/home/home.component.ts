import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((data) => {
      this.trendingMovies = data;
    });
  }

  getTheatreMovies() {
    this.http
    .get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((data) => {
      this.theatreMovies = data;
    });
  }

  getPopularMovies() {
    this.http
    .get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((data) => {
      this.popularMovies = data;
    });
  }

  goToMovie(type: string, id: string){
    this.router.navigate(['movie', type, id]);
  }
}
