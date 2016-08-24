
import {Component} from "@angular/core";
import {NavController,NavParams} from 'ionic-angular';
import {OnInit} from "@angular/core";
@Component({
  templateUrl: 'build/pages/Dr&Specialist/Dr&Specialist.html'
})
export class DrAndSpecialist implements OnInit {
    
  constructor(public navController: NavController, public navParams: NavParams) {
     
  }
  hospitals;
   ngOnInit() {
      this.hospitals = this.navParams.get("hospitalArray");
      console.log("hospitals :",this.hospitals)
   }
  

}
