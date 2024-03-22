import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {

  @Input() rating: any;
  @Input() isReadOnly: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
