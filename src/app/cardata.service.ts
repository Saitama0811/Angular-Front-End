import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardataService {
  car = [
    {CarId: 'Car1', name: 'Chevrolet Beat', type: 'HatchBack', price: '1000',
    cardesc: 'We are a family owned, boutique dealership, 5 minutes from the CBD of Sydney.',
    image: 'https://www.autoblog.com/img/research/styles/photos/performance.jpg'},
    {CarId: 'Car2', name: 'Chevrolet Beat', type: 'Sedan', price: '1000',
    cardesc: 'We are a family owned, boutique dealership, 5 minutes from the CBD of Sydney.',
    image: 'https://www.autoblog.com/img/research/styles/photos/performance.jpg'},
    {CarId: 'Car3', name: 'Chevrolet Beat', type: 'HatchBack', price: '1000',
    cardesc: 'We are a family owned, boutique dealership, 5 minutes from the CBD of Sydney.',
    image: 'https://www.autoblog.com/img/research/styles/photos/performance.jpg'}
  ];

  totalCost = 0;
  constructor() { }
}
