import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alojamiento',
    loadChildren: () => import('./pages/alojamiento/alojamiento.module').then( m => m.AlojamientoPageModule)
  },
  {
    path: 'alimentacion',
    loadChildren: () => import('./pages/alimentacion/alimentacion.module').then( m => m.AlimentacionPageModule)
  },
  {
    path: 'espar',
    loadChildren: () => import('./pages/espar/espar.module').then( m => m.EsparPageModule)
  },
  {
    path: 'turismo',
    loadChildren: () => import('./pages/turismo/turismo.module').then( m => m.TurismoPageModule)
  },
  {
    path: 'operadores',
    loadChildren: () => import('./pages/operadores/operadores.module').then( m => m.OperadoresPageModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./pages/transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./pages/otros/otros.module').then( m => m.OtrosPageModule)
  },
  {
    path: 'hoteles',
    loadChildren: () => import('./pages/hoteles/hoteles.module').then( m => m.HotelesPageModule)
  },
  {
    path: 'hostales',
    loadChildren: () => import('./pages/hostales/hostales.module').then( m => m.HostalesPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./pages/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'cafeterias',
    loadChildren: () => import('./pages/cafeterias/cafeterias.module').then( m => m.CafeteriasPageModule)
  },
  {
    path: 'bares',
    loadChildren: () => import('./pages/bares/bares.module').then( m => m.BaresPageModule)
  },
  {
    path: 'discotecas',
    loadChildren: () => import('./pages/discotecas/discotecas.module').then( m => m.DiscotecasPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'detalle-establecimiento',
    loadChildren: () => import('./pages/detalle-establecimiento/detalle-establecimiento.module').then( m => m.DetalleEstablecimientoPageModule)
  },
  {
    path: 'detalle-atractivo',
    loadChildren: () => import('./pages/detalle-atractivo/detalle-atractivo.module').then( m => m.DetalleAtractivoPageModule)
  },
  {
    path: 'detalle-operador',
    loadChildren: () => import('./pages/detalle-operador/detalle-operador.module').then( m => m.DetalleOperadorPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'complejos',
    loadChildren: () => import('./pages/complejos/complejos.module').then( m => m.ComplejosPageModule)
  },
  {
    path: 'atractivos',
    loadChildren: () => import('./pages/atractivos/atractivos.module').then( m => m.AtractivosPageModule)
  },
  {
    path: 'relevancia',
    loadChildren: () => import('./pages/relevancia/relevancia.module').then( m => m.RelevanciaPageModule)
  },
  {
    path: 'iglesias',
    loadChildren: () => import('./pages/iglesias/iglesias.module').then( m => m.IglesiasPageModule)
  },
  {
    path: 'monumentos',
    loadChildren: () => import('./pages/monumentos/monumentos.module').then( m => m.MonumentosPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./pages/historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'detalleotros',
    loadChildren: () => import('./pages/detalleotros/detalleotros.module').then( m => m.DetalleotrosPageModule)
  },
  {
    path: 'detalle-monumentos',
    loadChildren: () => import('./pages/detalle-monumentos/detalle-monumentos.module').then( m => m.DetalleMonumentosPageModule)
  },
  {
    path: 'detalle-iglesias',
    loadChildren: () => import('./pages/detalle-iglesias/detalle-iglesias.module').then( m => m.DetalleIglesiasPageModule)
  },
  
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
