import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-act-fij',
  templateUrl: './detalle-act-fij.page.html',
  styleUrls: ['./detalle-act-fij.page.scss'],
})
export class DetalleActFijPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fxRegresar(){
    this.router.navigate(['/actfij'])
  }
}
