import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-diet-child',
  templateUrl: './diet-child.component.html',
  styleUrls: ['./diet-child.component.css']
})
export class DietChildComponent {
@Input() diets:any;
errors: string[] = [];
id_no:any;
dietarea:any;
Pdate:any;
currentDate :any=new Date();

constructor(private PS:PatientService,private ar:ActivatedRoute){
  this.ar.params.subscribe(
    {
      next: (params:any)=>{ 
       this.id_no =params['id']
      },
      error: () => this.id_no = 0
    }
  )
  // this.dietarea=this.diets.food_list

}
submit() {
  this.errors = []
  // console.log("Diet value",this.diets.food_list)

  this.dietarea= (<HTMLInputElement>document.getElementById("pooja")).value;
  
  // console.log("Diettttt",this.dietarea)
  if (this.Pdate == undefined )
    this.errors.push("Date must be selected")

  if (this.dietarea == undefined || this.dietarea.length < 3)
    this.errors.push("Diet should be filled")


  if (this.errors.length == 0) {
    let obj = {
      id_no:this.id_no,
      diet_date: this.Pdate,
      diet_given: this.dietarea,
    }

    this.PS.postDiet(obj).subscribe({
      next: () => {
        alert("Diet Posted sucessfully...")
        this.Pdate = "",
          this.dietarea = ""
          location.reload();
        },
      error: () => alert("there is a problem posting this prescription")
    }
    )
  }
}
}
