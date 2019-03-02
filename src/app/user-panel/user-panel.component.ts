import { Component, OnInit, Input } from '@angular/core';
import { CardataService } from '../cardata.service';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
tmpprice;
gid;
bookedhrs;
availableCars = true;
bookedCars = false;
carname; cartype; dateofjourney; price; hours;

  constructor(private CarData: CardataService, private UserData: UserdataService) { }

  ngOnInit() {
  }

  changeStatus() {
    this.availableCars = false;
    this.bookedCars = true;
  }

  viewAvailableCars() {
    this.availableCars = true;
    this.bookedCars = false;
  }


  onBookCar() {
    let tempObj = {};
    for (const iterator of this.CarData.car) {
      if (iterator.CarId === this.gid) {
          console.log(this.CarData.car.indexOf(iterator));
          tempObj = iterator;
          this.tmpprice = iterator.price;
          this.CarData.car.splice(this.CarData.car.indexOf(iterator), 1);
      }
    }

    let bookCar;
    bookCar =  tempObj;
    this.UserData.bookedCars.push(bookCar);
    return false;
  }

  getUserId(id) {
    this.gid = id;
  }

  onCancelCar(id) {
    let tempObj = {};
    for (const iterator of this.UserData.bookedCars) {
      if (iterator.CarId === id) {
         // console.log(this.CarData.car.indexOf(iterator));
          tempObj = iterator;
          this.UserData.bookedCars.splice(this.UserData.bookedCars.indexOf(iterator), 1);
      }
    }

    let bookCar;
    bookCar =  tempObj;
    this.CarData.car.push(bookCar);
    return false;
  }

  onCostCalculate() {
    this.CarData.totalCost = Number(this.bookedhrs) * Number(this.tmpprice);
  }

}
