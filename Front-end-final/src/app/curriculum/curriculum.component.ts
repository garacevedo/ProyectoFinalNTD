import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CurriculumService } from 'app/services/curriculum.service';


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

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
  constructor(private curriculumService: CurriculumService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  newCurriculumNC() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormNombreCurriculum.value).subscribe(
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




  newCurriculumPaginaWeb() {
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

  newCurriculumPerfilProfesional() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormPerfilProfesional.value).subscribe(
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

  newCurriculumExperiencia() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormExperiencia.value).subscribe(
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

  newCurriculumFormacionAcademica() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormFormacionAcademica.value).subscribe(
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

  newCurriculumReconocimientos() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormReconocimientos.value).subscribe(
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

  newCurriculumProyectos() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormProyectos.value).subscribe(
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

  newCurriculumIdiomas() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormIdiomas.value).subscribe(
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

  newCurriculumTipoCurriculum() {
    if (this.newCurriculumFormNombreCurriculum.value['usuario'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.curriculumService.newCurriculum(this.newCurriculumFormTipoCurriculum.value).subscribe(
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
