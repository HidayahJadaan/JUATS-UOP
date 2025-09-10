import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';


const sharedLayoutComponents = [
  Navbar,
  Footer
];

@NgModule({
  declarations: [
    Navbar,
    Footer
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  exports:[
    ...sharedLayoutComponents
  ]
})
export class SharedModule { }
