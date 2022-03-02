import { Component, OnInit ,Input} from '@angular/core';
import { Country } from '../country';
import { State } from '../state';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() studentForm;
  countries: Country[];

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.countries = this.selectService.getCountries();
  }

  
 onSelect(countryid) {
     this.selectService.countryId = countryid;
  }

}