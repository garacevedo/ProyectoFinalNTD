import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CurriculumService } from 'app/services/curriculum.service';
import { ShareService } from 'app/services/share.service';


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})

export class CurriculumComponent implements OnInit {

  newCurriculumGeneralDatos = this.formBuilder.group({
    nombre_curriculum: '',
    nombre_pagina: '',
    url: ''
  });

  newCurriculumFormNombreCurriculum = this.formBuilder.group({
    nombre_curriculum: '',
  });
  newCurriculumFormPaginaWeb = this.formBuilder.group({
    nombre_pagina: '',
    url: '',
  });
  newCurriculumFormPerfilProfesional = this.formBuilder.group({
    perfil_profesional: '',
  });
  newCurriculumFormExperiencia = this.formBuilder.group({
    puesto_laboral: '',
    empleador: '',
    fecha_inicio: '',
    fecha_fin: '',
    descripcion: '',
  });
  newCurriculumFormFormacionAcademica = this.formBuilder.group({
    titulo: '',
    universidad_entidad: '',
    fecha_inicio_fa: '',
    fecha_fin_fa: '',
    descripcion_fa: '',
  });
  newCurriculumFormReconocimientos = this.formBuilder.group({
    nombre_r: '',
    fecha_inicio_r: '',
    fecha_fin_r: '',
    descripcion_r: '',
  });
  newCurriculumFormProyectos = this.formBuilder.group({
    nombre_p: '',
    descripcion_p: '',
  });
  newCurriculumFormIdiomas = this.formBuilder.group({
    idiomas: '',
  });
  newCurriculumFormTipoCurriculum = this.formBuilder.group({
    tipo_curriculum: ''

  });

  usuario: string;
  constructor(private curriculumService: CurriculumService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private share: ShareService) { }

  user_id: String;
  ngOnInit(): void {
    //this.usuario = this.share.getUsuario();
    console.log(localStorage.getItem('user_id'));
    this.user_id = localStorage.getItem('user_id');
  }

  arr: any = [];
  newCurriculumNC() {
    this.arr = {
      nombre_curriculum: this.newCurriculumGeneralDatos.value.nombre_curriculum,
      pagina_web: [{
        nombre_pagina: this.newCurriculumGeneralDatos.value.nombre_pagina,
        url: this.newCurriculumGeneralDatos.value.url
      }],
      perfil_profesional: this.newCurriculumGeneralDatos.value.perfil_profesional,
      experiencia: [{
        puesto_laboral: this.newCurriculumGeneralDatos.value.puesto_laboral,
        empleador: this.newCurriculumGeneralDatos.value.empleador, fecha_inicio: this.newCurriculumGeneralDatos.value.fecha_inicio,
        fecha_fin: this.newCurriculumGeneralDatos.value.fecha_fin, descripcion: this.newCurriculumGeneralDatos.value.descripcion
      }],
      formacion_academica: [{
        titulo: this.newCurriculumGeneralDatos.value.titulo,
        universidad_entidad: this.newCurriculumGeneralDatos.value.universidad_entidad, fecha_inicio_fa: this.newCurriculumGeneralDatos.value.fecha_inicio_fa,
        fecha_fin_fa: this.newCurriculumGeneralDatos.value.fecha_fin_fa, descripcion_fa: this.newCurriculumGeneralDatos.value.descripcion_fa
      }],
      reconocimientos: [{
        nombre_r: this.newCurriculumGeneralDatos.value.nombre_r,
        fecha_inicio_r: this.newCurriculumGeneralDatos.value.fecha_inicio_r, fecha_fin_r: this.newCurriculumGeneralDatos.value.fecha_fin_r,
        descripcion_r: this.newCurriculumGeneralDatos.value.descripcion_r
      }],

      proyectos: [{
        nombre_p: this.newCurriculumGeneralDatos.value.nombre_p,
        descripcion_p: this.newCurriculumGeneralDatos.value.descripcion_p
      }],
      idiomas: this.newCurriculumGeneralDatos.value.idiomas,
      tipo_curriculum: this.newCurriculumGeneralDatos.value.tipo_curriculum







    };
    console.log(this.arr);

    this.curriculumService.newCurriculum(this.arr).subscribe(
      () => {
        //Redirigiendo a la ruta actual /User y recargando la ventana
        //this.router.navigate(['/User']).then(() => {
        //  window.location.reload();
        //})
        this.openMessage("User agregado exitosamente.", "Ir a inicio");
      }

    );

  }




  newCurriculumGeneral() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormPaginaWeb.value).subscribe(
        () => {
          //Redirigiendo a la ruta actual /User y recargando la ventana
          //this.router.navigate(['/User']).then(() => {
          //  window.location.reload();
          //})
          this.openMessage("User agregado exitosamente.", "Ir a inicio");
        }

      );
    }
  }


  openMessage(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action);
    if (message !== 'Falta información') {
      snackBarRef.afterDismissed().subscribe(() => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });
      });
    }
  }

}
