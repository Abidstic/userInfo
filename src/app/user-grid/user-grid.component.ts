import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent {
  title="User Form";
  constructor(private router: Router) {}

  goToPage(){
    this.router.navigate(['/user-form']);

  }
}
