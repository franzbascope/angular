import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component
({
    selector: 'app-persons',
    templateUrl:'./persons.component.html',
})
export class PersonsComponent implements OnInit, OnDestroy
{
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription
  constructor(private prsService:PersonsService)
  {

  }
  ngOnInit(): void {
    this.personList= this.prsService.fetchPersons();
    this.isFetching = true;
    this.personListSubs=this.prsService.personsChanged.subscribe(persons=>
      {
        this.personList=persons;
        this.isFetching=false;
      });
  }
  onRemoveperson(personName:string)
  {
    this.prsService.removePerson(personName);
  }
  ngOnDestroy()
  {
    this.personListSubs.unsubscribe();
  }
  
}