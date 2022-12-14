import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { Noticia26Component } from './pages/noticias/noticia26/noticia26.component';
import { Noticia25Component } from './pages/noticias/noticia25/noticia25.component';
import { Noticia24Component } from './pages/noticias/noticia24/noticia24.component';
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
import { Noticia27Component } from './pages/noticias/noticia27/noticia27.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { Noticia28Component } from './pages/noticias/noticia28/noticia28.component';
import { Noticia23Component } from './pages/noticias/noticia23/noticia23.component';
import { Noticia22Component } from './pages/noticias/noticia22/noticia22.component';
import { NoticiasDestacadasComponent } from './pages/noticias/noticias-destacadas/noticias-destacadas.component';
import { Noticia21Component } from './pages/noticias/noticia21/noticia21.component';
import { Noticia20Component } from './pages/noticias/noticia20/noticia20.component';
import { Noticia19Component } from './pages/noticias/noticia19/noticia19.component';
import { Noticia18Component } from './pages/noticias/noticia18/noticia18.component';
import { Noticia17Component } from './pages/noticias/noticia17/noticia17.component';
import { Noticia16Component } from './pages/noticias/noticia16/noticia16.component';
import { Noticia15Component } from './pages/noticias/noticia15/noticia15.component';
import { Noticia14Component } from './pages/noticias/noticia14/noticia14.component';
import { Noticia13Component } from './pages/noticias/noticia13/noticia13.component';
import { Noticia12Component } from './pages/noticias/noticia12/noticia12.component';
import { Noticia11Component } from './pages/noticias/noticia11/noticia11.component';
import { Noticia10Component } from './pages/noticias/noticia10/noticia10.component';
import { Noticia09Component } from './pages/noticias/noticia09/noticia09.component';
import { Noticia08Component } from './pages/noticias/noticia08/noticia08.component';
import { Noticia07Component } from './pages/noticias/noticia07/noticia07.component';
import { Noticia06Component } from './pages/noticias/noticia06/noticia06.component';
import { Noticia05Component } from './pages/noticias/noticia05/noticia05.component';
import { Noticia04Component } from './pages/noticias/noticia04/noticia04.component';
import { Noticia03Component } from './pages/noticias/noticia03/noticia03.component';
import { Noticia02Component } from './pages/noticias/noticia02/noticia02.component';
import { Noticia01Component } from './pages/noticias/noticia01/noticia01.component';
import { ModalesComponent } from './pages/modales/modales.component';
import { TsutisComponent } from './pages/carreras/tsutis/tsutis.component';
import { BuzonComponent } from './pages/transparencia/buzon/buzon.component';
import { IgualdadLaboralComponent } from './pages/igualdad-laboral/igualdad-laboral.component';
import { SidebarRightComponent } from './views/sidebar-right/sidebar-right.component';
import { Noticia29Component } from './pages/noticias/noticia29/noticia29.component';
import { Noticia30Component } from './pages/noticias/noticia30/noticia30.component';
import { Noticia31Component } from './pages/noticias/noticia31/noticia31.component';
import { Noticia32Component } from './pages/noticias/noticia32/noticia32.component';
import { Noticia33Component } from './pages/noticias/noticia33/noticia33.component';
import { ResultadosExamenAdmisionComponent } from './pages/alumnos/resultados-examen-admision/resultados-examen-admision.component';
import { NavLeftComponent } from './views/nav-left/nav-left.component';
import { Noticia34Component } from './pages/noticias/noticia34/noticia34.component';
import { NormativaComponent } from './pages/transparencia/normativa/normativa.component';
import { Covid19Component } from './pages/covid19/covid19.component';
import { ModalsComponent } from './views/modals/modals.component';
import { ArchivisticaComponent } from './pages/transparencia/archivistica/archivistica.component';
import { IdgsComponent } from './pages/carreras/idgs/idgs.component';
import { DirectorioCjmuComponent } from './pages/universidad/directorio-cjmu/directorio-cjmu.component';
import { HorariosCursoNivelacionComponent } from './pages/alumnos/horarios-curso-nivelacion/horarios-curso-nivelacion.component';
import { Noticia35Component } from './pages/noticias/noticia35/noticia35.component';
import { Noticia36Component } from './pages/noticias/noticia36/noticia36.component';
import { Noticia37Component } from './pages/noticias/noticia37/noticia37.component';
import { Noticia38Component } from './pages/noticias/noticia38/noticia38.component';
import { Noticia39Component } from './pages/noticias/noticia39/noticia39.component';
import { Noticia40Component } from './pages/noticias/noticia40/noticia40.component';
import { Noticia44Component } from './pages/noticias/noticia44/noticia44.component';
import { Noticia45Component } from './pages/noticias/noticia45/noticia45.component';
import { Noticia46Component } from './pages/noticias/noticia46/noticia46.component';
import { Noticia47Component } from './pages/noticias/noticia47/noticia47.component';
import { Noticia48Component } from './pages/noticias/noticia48/noticia48.component';
import { Noticia49Component } from './pages/noticias/noticia49/noticia49.component';

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
    Noticia26Component,
    Noticia25Component,
    Noticia24Component,
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
    Noticia27Component,
    NoticiasComponent,
    Noticia28Component,
    Noticia23Component,
    Noticia22Component,
    NoticiasDestacadasComponent,
    Noticia21Component,
    Noticia20Component,
    Noticia19Component,
    Noticia18Component,
    Noticia17Component,
    Noticia16Component,
    Noticia15Component,
    Noticia14Component,
    Noticia13Component,
    Noticia12Component,
    Noticia11Component,
    Noticia10Component,
    Noticia09Component,
    Noticia08Component,
    Noticia07Component,
    Noticia06Component,
    Noticia05Component,
    Noticia04Component,
    Noticia03Component,
    Noticia02Component,
    Noticia01Component,
    ModalesComponent,
    IgualdadLaboralComponent,
    SidebarRightComponent,
    Noticia29Component,
    Noticia30Component,
    Noticia31Component,
    Noticia32Component,
    Noticia33Component,
    ResultadosExamenAdmisionComponent,
    NavLeftComponent,
    Noticia34Component,
    NormativaComponent,
    Covid19Component,
    ModalsComponent,
    ArchivisticaComponent,
    IdgsComponent,
    DirectorioCjmuComponent,
    HorariosCursoNivelacionComponent,
    Noticia35Component,
    Noticia36Component,
    Noticia37Component,
    Noticia38Component,
    Noticia39Component,
    Noticia40Component,
    Noticia44Component,
    Noticia45Component,
    Noticia46Component,
    Noticia47Component,
    Noticia48Component,
    Noticia49Component,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
        path: 'noticia49',
        component: Noticia49Component
      },
      {
        path: 'noticia48',
        component: Noticia48Component
      },
      {
        path: 'noticia47',
        component: Noticia47Component
      },
      {
        path: 'noticia46',
        component: Noticia46Component
      },
      {
        path: 'noticia45',
        component: Noticia45Component
      },
      {
        path: 'noticia44',
        component: Noticia44Component
      },
      {
        path: 'noticia40',
        component: Noticia40Component
      },
      {
        path: 'noticia39',
        component: Noticia39Component
      },
      {
        path: 'noticia38',
        component: Noticia38Component
      },
      {
        path: 'noticia37',
        component: Noticia37Component
      },
      {
        path: 'noticia36',
        component: Noticia36Component
      },
      {
        path: 'noticia35',
        component: Noticia35Component
      },
      {
        path: 'noticia34',
        component: Noticia34Component
      },
      {
        path: 'noticia33',
        component: Noticia33Component
      },
      {
        path: 'noticia32',
        component: Noticia32Component
      },
      {
        path: 'noticia31',
        component: Noticia31Component
      },
      {
        path: 'noticia30',
        component: Noticia30Component
      },
      {
        path: 'noticia29',
        component: Noticia29Component
      },
      {
        path: 'noticia28-espacio-acuoso-2018',
        component: Noticia28Component
      },
      {
        path: 'noticia27',
        component: Noticia27Component
      },
      {
        path: 'noticia26',
        component: Noticia26Component
      },
      {
        path: 'noticia25',
        component: Noticia25Component
      },
      {
        path: 'noticia24',
        component: Noticia24Component
      },
      {
        path: 'noticia23-instalacion-filtro-prensa',
        component: Noticia23Component
      },
      {
        path: 'noticia22-dia-mundial-del-agua-2018',
        component: Noticia22Component
      },
      {
        path: 'noticia21-Reclutamiento-DnMex',
        component: Noticia21Component
      },
      {
        path: 'noticia20-firma-convenio-de-colaboracion-UTNG-y-UTS',
        component: Noticia20Component
      },
      {
        path: 'noticia19-firma-de-convenio-de-colaboracion-UTT-y-UTS',
        component: Noticia19Component
      },
      {
        path: 'noticia18-firma-convenio-de-colaboracion-la-UG-y-la-UTS',
        component: Noticia18Component
      },
      {
        path: 'noticia17-final-de-beisbol-endcut-2018',
        component: Noticia17Component
      },
      {
        path: 'noticia16-segunda-jornada-encuentros-deportivos-UT',
        component: Noticia16Component
      },
      {
        path: 'noticia15-inaguracion-primer-jornada-endcut-2018',
        component: Noticia15Component
      },
      {
        path: 'noticia14-entrega-de-reconocimientos-a-selectivo-femenil-de-futbol',
        component: Noticia14Component
      },
      {
        path: 'noticia13-entrega-de-facsimil-de-la-constitucion-de-1917-gto',
        component: Noticia13Component
      },
      {
        path: 'noticia12-carrera-atletica-ruta-independencia-septiembre2017',
        component: Noticia12Component
      },
      {
        path: 'noticia11-1er-encuentro-estatal-jovenes-del-Campo-SDAyR',
        component: Noticia11Component
      },
      {
        path: 'noticia10-reunion-trabajo-SICES',
        component: Noticia10Component
      },
      {
        path: 'noticia09-visita-del-presidente-municipal-salamanca-a-uts',
        component: Noticia09Component
      },
      {
        path: 'noticia08-frima-convenio-congreso-estado-y-uts',
        component: Noticia08Component
      },
      {
        path: 'noticia07-Semana-Cultural-(CERESO)-de-Valle-de-Santiago',
        component: Noticia07Component
      },
      {
        path: 'noticia06-Participacion-alumnos-MEXPROTEC-2017',
        component: Noticia06Component
      },
      {
        path: 'noticia05-segunda-jornada-academica-de-la-COEPES',
        component: Noticia05Component
      },
      {
        path: 'noticia04-segunda-feria-empleo-uts',
        component: Noticia04Component
      },
      {
        path: 'noticia03-reunion-comite-directivo',
        component: Noticia03Component
      },
      {
        path: 'noticia02_Panel_Vida_y_obra_Ignacio_Ramirez',
        component: Noticia02Component
      },
      {
        path: 'noticia01-celebracion-5to-Aniversario-UTS',
        component: Noticia01Component
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
