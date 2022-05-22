import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/shared/professor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  constructor(public professorService: ProfessorService) { }

  ngOnInit(): void {

    //managers binding
    this.professorService.getAllManagers();
  }

  //Submit Form
  onSubmit(form: NgForm){
    console.log(form.value);

    let addId=this.professorService.formData.id;

    //insert
    if(addId==0 || addId==null){

      //Insert
      this.insertRecord(form);

    }else{

      //update
      this.updateRecord(form);
    }
  }

  //Insert
  insertRecord(form: NgForm){
    console.log("Inserting")
    this.professorService.insertProfessor(form.value).subscribe(
      result=>{
        console.log(result)
      }
    );
    window.location.reload();
  }

    //Update
    updateRecord(form: NgForm){
      console.log("Updating")
      this.professorService.updateProfessor(form.value).subscribe(
        result=>{
          console.log(result)
        }
      );
      window.location.reload();
    }
}
