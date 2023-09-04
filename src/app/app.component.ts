import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuario' ;
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  //creamos un array para almacenar los titulos de un blog, en vez de object con un any, porque sino no funciona bien
  entradas: any[];
//creo un constructor para crear todas las entradas del blog
  constructor(){
    this.entradas=[

      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace 20 años"},
      {titulo:"Javascript cada vez más funcional"},
      {titulo:"Kotlin poténcia para tus apps"},
      {titulo:"¿Dónde quedó Pascal ?"},
    
    ]
  }

  usuarioRegistro (){
    //añado un booleano y lo pongo en true
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito"
  }
}
