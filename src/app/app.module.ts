import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { NavComponent } from './views/nav/nav.component';
import { SliderPrincipalComponent } from './views/slider-principal/slider-principal.component';
import { SliderNoticiasComponent } from './views/slider-noticias/slider-noticias.component';
import { SliderEventosExternosComponent } from './views/slider-eventos-externos/slider-eventos-externos.component';
import { SliderVideosComponent } from './views/slider-videos/slider-videos.component';
import { EnlacesFrecuentesComponent } from './views/enlaces-frecuentes/enlaces-frecuentes.component';
import { EnlacesOrganismosInteresComponent } from './views/enlaces-organismos-interes/enlaces-organismos-interes.component';
import { FooterComponent } from './views/footer/footer.component';
import { NavRightEnlacesFrecuentesComponent } from './views/nav-right-enlaces-frecuentes/nav-right-enlaces-frecuentes.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AntecedentesComponent } from './pages/universidad/antecedentes/antecedentes.component';
import { DirectorioComponent } from './pages/universidad/directorio/directorio.component';
import { FilosofiaComponent } from './pages/universidad/filosofia/filosofia.component';
import { MensajeDelRectorComponent } from './pages/universidad/mensaje-del-rector/mensaje-del-rector.component';
import { ReconocimientosComponent } from './pages/universidad/reconocimientos/reconocimientos.component';
import { CuerposAcademicosComponent } from './pages/carreras/cuerpos-academicos/cuerpos-academicos.component';
import { IdieComponent } from './pages/carreras/idie/idie.component';
import { IerComponent } from './pages/carreras/ier/ier.component';
import { ImetComponent } from './pages/carreras/imet/imet.component';
import { IpqComponent } from './pages/carreras/ipq/ipq.component';
import { IsipComponent } from './pages/carreras/isip/isip.component';
import { IteaComponent } from './pages/carreras/itea/itea.component';
import { TsuadmComponent } from './pages/carreras/tsuadm/tsuadm.component';
import { TsuerComponent } from './pages/carreras/tsuer/tsuer.component';
import { TsumetComponent } from './pages/carreras/tsumet/tsumet.component';
import { TsupiaComponent } from './pages/carreras/tsupia/tsupia.component';
import { TsuqaiComponent } from './pages/carreras/tsuqai/tsuqai.component';
import { TsuqamComponent } from './pages/carreras/tsuqam/tsuqam.component';
import { ActividadesCulturalesComponent } from './pages/vinculacion/actividades-culturales/actividades-culturales.component';
import { EstadiasComponent } from './pages/vinculacion/estadias/estadias.component';
import { BolsaTrabajoComponent } from './pages/vinculacion/bolsa-trabajo/bolsa-trabajo.component';
import { CeleComponent } from './pages/vinculacion/cele/cele.component';
import { ConocerComponent } from './pages/vinculacion/conocer/conocer.component';
import { ConveniosCooperacionComponent } from './pages/vinculacion/convenios-cooperacion/convenios-cooperacion.component';
import { MovilidadEstudiantilComponent } from './pages/vinculacion/movilidad-estudiantil/movilidad-estudiantil.component';
import { EducacionContinuaComponent } from './pages/vinculacion/educacion-continua/educacion-continua.component';
import { EmprendimientoComponent } from './pages/vinculacion/emprendimiento/emprendimiento.component';
import { ServiciosMedicosComponent } from './pages/vinculacion/servicios-medicos/servicios-medicos.component';
import { ServiciosTecnologicosComponent } from './pages/vinculacion/servicios-tecnologicos/servicios-tecnologicos.component';
import { BolsaTrabajoUtsComponent } from './pages/gestion/bolsa-trabajo-uts/bolsa-trabajo-uts.component';
import { GacetaComponent } from './pages/gestion/gaceta/gaceta.component';
import { ResponsabilidadSocialComponent } from './pages/gestion/responsabilidad-social/responsabilidad-social.component';
import { ContraloriaSocialComponent } from './pages/transparencia/contraloria-social/contraloria-social.component';
import { NormatecaComponent } from './pages/transparencia/normateca/normateca.component';
import { ComiteControlInternoComponent } from './pages/transparencia/comite-control-interno/comite-control-interno.component';
import { EstadosFinancierosComponent } from './pages/transparencia/estados-financieros/estados-financieros.component';
import { AseguramientoEscolarComponent } from './pages/alumnos/aseguramiento-escolar/aseguramiento-escolar.component';
import { BecasComponent } from './pages/alumnos/becas/becas.component';
import { CalendarioEscolarComponent } from './pages/alumnos/calendario-escolar/calendario-escolar.component';
import { CostoDerechosEducativosComponent } from './pages/alumnos/costo-derechos-educativos/costo-derechos-educativos.component';
import { HorariosComponent } from './pages/alumnos/horarios/horarios.component';
import { TramitesInternosComponent } from './pages/alumnos/tramites-internos/tramites-internos.component';
import { PoliticasComponent } from './pages/transparencia/politicas/politicas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MapaSitioComponent } from './pages/mapa-sitio/mapa-sitio.component';
import { SgcComponent } from './pages/sgc/sgc.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ModalesComponent } from './pages/modales/modales.component';
import { TsutisComponent } from './pages/carreras/tsutis/tsutis.component';
import { BuzonComponent } from './pages/transparencia/buzon/buzon.component';
import { IgualdadLaboralComponent } from './pages/igualdad-laboral/igualdad-laboral.component';
import { SidebarRightComponent } from './views/sidebar-right/sidebar-right.component';
import { ResultadosExamenAdmisionComponent } from './pages/alumnos/resultados-examen-admision/resultados-examen-admision.component';
import { NavLeftComponent } from './views/nav-left/nav-left.component';
import { NormativaComponent } from './pages/transparencia/normativa/normativa.component';
import { Covid19Component } from './pages/covid19/covid19.component';
import { ModalsComponent } from './views/modals/modals.component';
import { ArchivisticaComponent } from './pages/transparencia/archivistica/archivistica.component';
import { IdgsComponent } from './pages/carreras/idgs/idgs.component';
import { DirectorioCjmuComponent } from './pages/universidad/directorio-cjmu/directorio-cjmu.component';
import { HorariosCursoNivelacionComponent } from './pages/alumnos/horarios-curso-nivelacion/horarios-curso-nivelacion.component';
import { DetalleNoticiaComponent } from './pages/noticias/detalle-noticia/detalle-noticia.component';
import { NoticiasDestacadasComponent } from './pages/noticias/noticias-destacadas/noticias-destacadas.component';
import { VacantesFiltroPipe } from './services/bolsa-trabajo-uts/vacantes-filtro.pipe';
import { ListadoOficialComponent } from './pages/alumnos/listado-oficial/listado-oficial.component';
import { AdquisicionesComponent } from './pages/transparencia/adquisiciones/adquisiciones.component';
import { Info2024Component } from './pages/transparencia/estados-financieros/info2024/info2024.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    SliderPrincipalComponent,
    SliderNoticiasComponent,
    SliderEventosExternosComponent,
    SliderVideosComponent,
    EnlacesFrecuentesComponent,
    EnlacesOrganismosInteresComponent,
    FooterComponent,
    NavRightEnlacesFrecuentesComponent,
    NotFoundComponent,
    AntecedentesComponent,
    DirectorioComponent,
    FilosofiaComponent,
    MensajeDelRectorComponent,
    ReconocimientosComponent,
    CuerposAcademicosComponent,
    IdieComponent,
    IerComponent,
    ImetComponent,
    IpqComponent,
    IsipComponent,
    IteaComponent,
    TsuadmComponent,
    TsuerComponent,
    TsumetComponent,
    TsupiaComponent,
    TsuqaiComponent,
    TsuqamComponent,
    TsutisComponent,
    ActividadesCulturalesComponent,
    BolsaTrabajoComponent,
    CeleComponent,
    ConocerComponent,
    ConveniosCooperacionComponent,
    MovilidadEstudiantilComponent,
    EducacionContinuaComponent,
    EmprendimientoComponent,
    EstadiasComponent,
    ServiciosMedicosComponent,
    ServiciosTecnologicosComponent,
    BolsaTrabajoUtsComponent,
    GacetaComponent,
    ResponsabilidadSocialComponent,
    BuzonComponent,
    ContraloriaSocialComponent,
    NormatecaComponent,
    ComiteControlInternoComponent,
    EstadosFinancierosComponent,
    AseguramientoEscolarComponent,
    BecasComponent,
    CalendarioEscolarComponent,
    CostoDerechosEducativosComponent,
    HorariosComponent,
    TramitesInternosComponent,
    PoliticasComponent,
    ContactoComponent,
    MapaSitioComponent,
    SgcComponent,
    NoticiasComponent,
    ModalesComponent,
    IgualdadLaboralComponent,
    SidebarRightComponent,
    ResultadosExamenAdmisionComponent,
    NavLeftComponent,
    NormativaComponent,
    Covid19Component,
    ModalsComponent,
    ArchivisticaComponent,
    IdgsComponent,
    DirectorioCjmuComponent,
    HorariosCursoNivelacionComponent,
    DetalleNoticiaComponent,
    NoticiasDestacadasComponent,
    VacantesFiltroPipe,
    ListadoOficialComponent,
    AdquisicionesComponent,
    Info2024Component,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      //MAPA DEL SITIO
      {
        path: 'mapa-sitio',
        component: MapaSitioComponent
      },
      //ENCUESTAS
      {
        path: 'encuestas',
        component: ModalesComponent
      },
      //UNIVERSIDAD
      {
        path: 'antecedentes',
        component: AntecedentesComponent
      },
      {
        path: 'directorio',
        component: DirectorioComponent
      },
      {
        path: 'directorio-enlaces-cjmu',
        component: DirectorioCjmuComponent
      },
      {
        path: 'filosofia',
        component: FilosofiaComponent
      },
      {
        path: 'mje-rector',
        component: MensajeDelRectorComponent
      },
      {
        path: 'reconocimientos',
        component: ReconocimientosComponent
      },
      //CARRERAS
      {
        path: 'cuerpos-academicos',
        component: CuerposAcademicosComponent
      },
      {
        path: 'idgs',
        component: IdgsComponent
      },
      {
        path: 'lgch',
        component: IdieComponent
      },
      {
        path: 'ier',
        component: IerComponent
      },
      {
        path: 'imet',
        component: ImetComponent
      },
      {
        path: 'ipq',
        component: IpqComponent
      },
      {
        path: 'isip',
        component: IsipComponent
      },
      {
        path: 'itea',
        component: IteaComponent
      },
      {
        path: 'tsuadm',
        component: TsuadmComponent
      },
      {
        path: 'tsuer',
        component: TsuerComponent
      },
      {
        path: 'tsumet',
        component: TsumetComponent
      },
      {
        path: 'tsupia',
        component: TsupiaComponent
      },
      {
        path: 'tsuqai',
        component: TsuqaiComponent
      },
      {
        path: 'tsuqam',
        component: TsuqamComponent
      },
      {
        path: 'tsutis',
        component: TsutisComponent
      },
      //ALUMNOS UTS
      {
        path: 'aseguramiento-escolar',
        component: AseguramientoEscolarComponent
      },
      {
        path: 'becas',
        component: BecasComponent
      },
      {
        path: 'calendario-escolar',
        component: CalendarioEscolarComponent
      },
      {
        path: 'costo-derechos-educativos',
        component: CostoDerechosEducativosComponent
      },
      {
        path: 'horarios',
        component: HorariosComponent
      },
      {
        path: 'horarios-curso-nivelacion',
        component: HorariosCursoNivelacionComponent
      },
      {
        path: 'resultados-examen-admision',
        component: ResultadosExamenAdmisionComponent
      },
      {
        path: 'tramites-internos',
        component: TramitesInternosComponent
      },
      {
        path: 'listados-oficiales',
        component: ListadoOficialComponent
      },
      //VINCULACION
      {
        path: 'actividades-culturales-deportivas',
        component: ActividadesCulturalesComponent
      },
      {
        path: 'bolsa-trabajo',
        component: BolsaTrabajoComponent
      },
      {
        path: 'cele',
        component: CeleComponent
      },
      {
        path: 'conocer',
        component: ConocerComponent
      },
      {
        path: 'convenios-cooperacion',
        component: ConveniosCooperacionComponent
      },
      {
        path: 'movilidad-estudiantil',
        component: MovilidadEstudiantilComponent
      },
      {
        path: 'educacion-continua',
        component: EducacionContinuaComponent
      },
      {
        path: 'emprendimiento',
        component: EmprendimientoComponent
      },
      {
        path: 'estadias',
        component: EstadiasComponent
      },
      {
        path: 'servicios-medicos',
        component: ServiciosMedicosComponent
      },
      {
        path: 'servicios-tecnologicos',
        component: ServiciosTecnologicosComponent
      },


      //GESTION
      {
        path: 'bolsa-trabajo-uts',
        component: BolsaTrabajoUtsComponent
      },
      {
        path: 'gaceta',
        component: GacetaComponent
      },
      {
        path: 'responsabilidad-social',
        component: ResponsabilidadSocialComponent
      },
      {
        path: 'sistema-gestion-calidad',
        component: SgcComponent
      },
      //TRANSPARENCIA
      {
        path: 'archivistica',
        component: ArchivisticaComponent
      },
      {
        path: 'buzon',
        component: BuzonComponent
      },
      {
        path: 'normateca',
        component: NormatecaComponent
      },
      {
        path: 'normativa',
        component: NormativaComponent
      },
      {
        path: 'comite-control-interno',
        component: ComiteControlInternoComponent
      },
      {
        path: 'contraloria-social',
        component: ContraloriaSocialComponent
      },
      {
        path: 'estados-financieros',
        component: EstadosFinancierosComponent
      },
      {
        path: 'adquisiciones',
        component: AdquisicionesComponent
      },

      {
        path: 'politicas',
        component: PoliticasComponent
      },

      //CONTACTO
      {
        path: 'contacto',
        component: ContactoComponent
      },

      //NOTICIAS
      {
        path: 'noticias',
        component: NoticiasComponent
      },

      {
        path: 'noticias/:slug',
        component: DetalleNoticiaComponent
      },
      //FIN DEL COMPONENTES NOTICIAS
      
      {
        path: 'igualdad-laboral',
        component: IgualdadLaboralComponent
      },
      {
        path: 'covid-19',
        component: Covid19Component
      },
      {
        path: "404",
        component: NotFoundComponent
      },
      {
        path: "**",
        redirectTo: "/404"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NotFoundComponent],


})
export class AppModule { }
