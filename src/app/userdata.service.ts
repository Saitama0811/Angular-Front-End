import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userdata = [
    {UserId: 'user1', username: 'user', password: 'user' , fname: 'user', lname: 'user' }
  ];

  bookedCars = [{CarId: 'Car1', name: 'Chevrolet Beat', type: 'HatchBack', price: '1000',
  cardesc: 'We are a family owned, boutique dealership, 5 minutes from the CBD of Sydney.',
  image: 'https://auto.ndtvimg.com/car-images/medium/jeep/compass/jeep-compass.jpg?v=2'}
  ];
  id = 2;
  constructor() { }
}
