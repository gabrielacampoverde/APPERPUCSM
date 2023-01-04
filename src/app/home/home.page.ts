import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fxActFij(){
    this.router.navigate(['/actfij'])
  }
  
  fxInventario(){
    this.router.navigate(['/inventario'])
  }

  fxReporte(){
    this.router.navigate(['/reporte'])
  }

  fxCerrarSesion(){
    this.router.navigate(['/login'])
  }
}
