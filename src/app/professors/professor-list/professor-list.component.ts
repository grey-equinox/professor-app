import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/shared/professor';
import { ProfessorService } from 'src/app/shared/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  constructor(public professorService: ProfessorService) { }

  ngOnInit(): void {
      //Life Cycle hook
      this.professorService.getAllProfessors();
  }

  populateProfessorForm(pro: Professor){

    this.professorService.formData=pro;
  }

}
