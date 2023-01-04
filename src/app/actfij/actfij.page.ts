import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actfij',
  templateUrl: './actfij.page.html',
  styleUrls: ['./actfij.page.scss'],
})
export class ActfijPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fxBuscar(){
    this.router.navigate(['/detalle-act-fij'])
  }

}
