export interface RespEstablecimientos {
  id_establecimiento?: string;
  tipo_establecimiento_id_tipo?: number;
  nom_estable?: string;
  direccion?: string;
  horario?: string;
  rango_precio?: string;
  nom_propietario?: string;
  email?: string;
  pagina_web?: string;
  facebook?: string;
  descripcion?: string;
  num_plazas?: number;
  num_hab_mesas?: number;
  telef_fijo?: string;
  telef_celular?: string;
  foto_portada?: string;
  categoria_estable_id_categoria?: number;
  galeria_id_galeria?: number;
  lat?: string;
  lng?:string;
}


export interface RespAtractivos {
  id_atractivo?: number;
  nombre?: string;
  descripcion?: string;
  horario?: string;
  rango_precio?: string;
  direccion?: string;
  foto_portada?: string;
  lat?: string;
  lng?: string;
}

export interface RespOperadores {
  id_operador?: number;
  nombre?: string;
  direccion?: string;
  descripcion?: string;
  email?: string;
  pagina_web?: string;
  facebook?: string;
  telef_fijo?: string;
  telef_celular?: string;
  foto_portada?: string;
  galeria_id_galeria?: number;
  lat?: string;
  lng?:string;
}

export interface RespTransporte {
  id_transporte?: number;
  tipo_trasporte_id_tipo?: number;
  nom_coop?: string;
  descripcion?: string;
  direccion_oficina?: string;
  telef_fijo?: string;
  telef_celular?: string;
  foto_portada?: string;
  galeria_id_galeria?: number;
  lat?: string;
  lng?:string;
}

export interface Respmonumentos {
  idmonumentos?: number;
  nombre?: string;
  Direccion?: string;
  Descripcion?: string;
  foto_portada?: string;
  lat?: string;
  lng?:string;
  
}

export interface Respotros {
  idserv_Generales?: number;
  tipo?: string;
  nombre?: string;
  Direccion?: string;
  horario?:string;
  telefono?:string;
  Descripcion?: string;
  foto_portada?: string;
  lat?: string;
  lng?:string;
  
}