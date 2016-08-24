import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {HospitalList} from "../HospitalList/hospitalList";
import {AddDr} from "../AddDrPage/addDr";
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage{
  constructor(public navController: NavController) {
     
  }
//http://ericcahan.com/wp-content/uploads/2014/02/EC_0654_Venetian_CausewayFL.jpg
//https://image.freepik.com/free-vector/blurred-blue-background-with-bokeh-effect_1095-71.jpg
   hosptlList(){
     this.navController.push(HospitalList)
   }

   addDrPage(){
        this.navController.push(AddDr);
   }
}
