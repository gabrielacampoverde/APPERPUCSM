import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Buscar Activo Fijo', url: '/actfij', icon: 'search' },
    { title: 'Inventario', url: '/inventario', icon: 'qr-code' },
    { title: 'Reportes', url: '/reporte', icon: 'document' },
    { title: 'Cerrar Session', url: '/login', icon: 'close' },
  ];
  constructor() {}
}
