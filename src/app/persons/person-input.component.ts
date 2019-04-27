import {Component,Output,EventEmitter} from '@angular/core';
import { ClassGetter, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PersonsService } from './persons.service';


@Component({
    selector: 'app-person-input',
    templateUrl:'./person-input.component.html',
    styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent
{
    @Output()personCreate = new EventEmitter<string>();
    enteredPersonName='';
    constructor(private prsService:PersonsService)
    {
  
    }
    onCreatePerson()
    {
        console.log('Created a Person: '+this.enteredPersonName)
        this.prsService.addPerson(this.enteredPersonName);
        this.enteredPersonName='';
    }
    
}