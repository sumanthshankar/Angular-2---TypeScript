import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  REACTIVE_FORM_DIRECTIVES,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { DeveloperService } from '../developer.service';

@Component({
  moduleId: module.id,
  selector: 'app-add-developer',
  templateUrl: 'add-developer.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddDeveloperComponent {
  submitted = false;
  newDeveloperForm: FormGroup;
  //private isNew = true;
  popular = [
    'Yes',
    'No'
  ];

  constructor(public formBuilder: FormBuilder, private developerService: DeveloperService) { 
    this.newDeveloperForm = formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, 
                                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'githubAccount': ['', Validators.required],
      'popularity': ['', Validators.required],
      'programmingLanguages': formBuilder.array([
        ['Angular 2', Validators.required]
      ])
    });
   }

  onSubmit() {
    const newDeveloper = this.newDeveloperForm.value;
      this.developerService.addDeveloper(newDeveloper);
  }
}

  


