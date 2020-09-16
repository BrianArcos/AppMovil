import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RespEstablecimientos } from '../interfaces/interfaces';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosService {
  
  
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

    // --------------------------------------------------------------

    getdiscotecas() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/discotecas`);
    } 

    getdiscotecaDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/discotecas/${ id }?a=1`); 
    }

    // --------------------------------------------------------------

    getbares() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/bares`);
    } 

    getbaresDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/bares/${ id }?a=1`); 
    }

    // --------------------------------------------------------------

    getatractivos() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/atractivos`);
    } 

    getatractivoDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/atractivos/${ id }?a=1`); 
    }
    // --------------------------------------------------------------

    getoperadores() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/operadores`);
    } 

    getoperadorDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/operadores/${ id }?a=1`); 
    }

    // --------------------------------------------------------------

    gettransporte() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/transporte`);
    } 

    gettransporteDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/transporte/${ id }?a=1`); 
    }
  

    //---------------------------------------------------------------

    getcomplejos() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/complejos`);
    } 

    getcomplejosDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/complejos/${ id }?a=1`); 
    }
    ///--------------------------------------------------------------------
    getmonumentos() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/monumentos`);
    } 

    getmonumentosDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/monumentos/${ id }?a=1`); 
    }
    ///-------------------------------------------------------------------------
    getotros() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/otros`);
    } 

    getotrosDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/otros/${ id }?a=1`); 
    }
    ///-------------------------------------------------------------------------
    getiglesias() {
      return this.ejecutarQuery<RespEstablecimientos[]>(`/iglesias`);
    } 

    getiglesiasDetalle( id: string ){

      return this.ejecutarQuery<RespEstablecimientos[]>(`/iglesias/${ id }?a=1`); 
    }


}