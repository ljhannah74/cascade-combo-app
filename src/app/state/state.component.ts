import { Component, OnInit ,Input} from '@angular/core';
import { Country } from '../country';
import { State } from '../state';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent  {
  @Input() studentForm;

  get states(): State[]{
     return this.selectService.filterStates();
  };

  constructor(private selectService: SelectService) { }

}