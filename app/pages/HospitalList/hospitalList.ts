import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {OnInit} from "@angular/core";
import {DrAndSpecialist}  from "../Dr&Specialist/Dr&Specialist"

@Component({
    templateUrl: 'build/pages/HospitalList/hospitalList.html'
})
export class HospitalList implements OnInit {
    hosptls;
    constructor(public navController: NavController) {

    }

    ngOnInit() {
        this.hosptls = [

            {
                HospitalName: "A-One Hospital", HospitalAddress: "Shah Faisal Colony",
            },
            {
                HospitalName: "Abbasi Shaheed Hospital", HospitalAddress: " Block M, North Nazimabad"
            },
            {
                HospitalName: "Ahmed Eye Hospital", HospitalAddress: "B00-76, BL. #15, OPP: Usmania Restaurant, Gulshan-e-Iqbal"
            },
            {
                HospitalName: "Agha Khan Hospital", HospitalAddress: "Stadium Road, Karachi", Specialist: "ATIYA SHEIKH", GenDoctors: "ABDUL RAHMAN ALVI"
            }

        ]
    }

    hosptlList(specialist) {
        //    console.log("hospital array :",this.hosptls);

        this.navController.push(DrAndSpecialist, { hospitalArray: specialist })
    }
}
