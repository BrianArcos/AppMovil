import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespEstablecimientos } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  
  
  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ){

    query = URL + query;
    return this.http.get<T>(query);

  }
        
    gethoteles() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/hoteles`);
    }
    
  
    getHotelDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/hoteles/${ id }?a=1`); 
    }

    // --------------------------------------------------------------

    gethostales() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/hostales`);
    } 

    getHostalDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/hostales/${ id }?a=1`); 
    }
    
    // --------------------------------------------------------------

    getrestaurantes() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/restaurantes`);
    } 

    getrestaurateDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/restaurantes/${ id }?a=1`); 
    }
 
    // --------------------------------------------------------------

    getcafeterias() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/cafeterias`);
    } 

    getcafeteriaDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/cafeterias/${ id }?a=1`); 
    }
  
}


