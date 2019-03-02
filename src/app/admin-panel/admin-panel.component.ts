import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { CardataService } from '../cardata.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  id = 4;
  tempid = '';
  carname; price; cartype; description; imgurl;
  upcarname; upcartype; upprice; updescription; upimgurl;
  formStatus = false;
  formUpdateStatus = false;
  constructor(private cardata: CardataService) { }

  ngOnInit() {
  }

  onShowCar() {
    this.formStatus = !this.formStatus;
    this.formUpdateStatus = false;
  }

  onShowUpdate(id) {
    this.formUpdateStatus = !this.formUpdateStatus;
    this.formStatus = false;
    this.onCarShowUpdate(id);
  }

onAddCar() {
  const newCar = {CarId: 'Car' + this.id, name: this.carname, type: this.cartype, price: this.price,
  cardesc: this.description, image: this.imgurl};
  this.cardata.car.push(newCar);
  this.id = this.id + 1;
  this.formStatus = false;
  return false;
}

onCarShowUpdate(id) {
  this.tempid = id;
  for (const iterator of this.cardata.car) {
    if (iterator.CarId === id) {
      this.upcarname = iterator.name;
      this.upcartype = iterator.type;
      this.upprice = iterator.price;
      this.updescription = iterator.cardesc;
      this.upimgurl = iterator.image;
    }
  }
}

onCarUpdate() {
  for (const iterator of this.cardata.car) {
    if (iterator.CarId === this.tempid) {
      iterator.name = this.upcarname;
      iterator.type = this.upcartype;
      iterator.price = this.upprice;
      iterator.cardesc = this.updescription;
      iterator.image = this.upimgurl;
      this.formUpdateStatus = false;
    }
  }
}

onCarDelete(id) {
  for (const iterator of this.cardata.car) {
    if (iterator.CarId === id) {
        console.log(this.cardata.car.indexOf(iterator));
        this.cardata.car.splice(this.cardata.car.indexOf(iterator), 1);
    }
  }
}

}
