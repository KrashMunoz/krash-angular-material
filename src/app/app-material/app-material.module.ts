import { NgModule } from '@angular/core';
// Material Moduless
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


const MaterialComponents = [ 
  MatAutocompleteModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})


export class AppMaterialModule {}
