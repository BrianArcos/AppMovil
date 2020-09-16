// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// export class estable{
//   id_Establecimiento?: string;
//   tipo_establecimiento_id_tipo?:string;
//   nombre_estable?: string;
//   direccion?: string;
//   horario?:string;
//   rango_precio?:string;
//   nom_propietario?:string;
//   email?:string;
//   pagina_web?:string;
//   facebook?:string;
//   descripcion?: string;
//   num_plazas?: string;
//   telef_fijo?:string;
//   telef_celular?:string;
//   foto_portada?:string;
//   categoria_estable_id_categoria?:string;
//   galeria_id_galeria?:string;
  
// }
 
// @Injectable({
//   providedIn: 'root'
// })
// export class RestaurantesService {

//   private url = 'http://localhost:3000/api/hoteles';

//   constructor(private http: HttpClient) { }

//   getAll() {
//     return this.http.get<[estable]>(this.url);
//   }

//   // get( id:string){
//     // return this.http.get<establecimientos>(this.url );
    
//   // }

//   get( id: string ){
//     return this.http.get<estable[]>(this.url + '/' + id);
  
// }
  

// }