import { Component } from '@angular/core';
import { Opciones } from './model/opciones.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-siavi';
  perfil: String;

  showOpcion(opcion): boolean {
    this.perfil = "ADMINISTRADOR";
    for (var i=0; i < Opciones.length; i++) {
      if(Opciones[i].role === this.perfil && Opciones[i].opcion === opcion)
        return true;
    }
    return false;
  }
}
