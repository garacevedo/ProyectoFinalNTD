import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userFormLogin = this.formBuilder.group({
    usuario:'',
    nombre:'',
    correo: '',
    clave: '',
    direccion:'',
    telefono:''
  });
  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  userSignup() {
    if (this.userFormLogin.value['usuario'] === ''||
      this.userFormLogin.value['nombre'] === '' ||
      this.userFormLogin.value['correo'] === ''||
      this.userFormLogin.value['clave'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.userService.userSignUp(this.userFormLogin.value).subscribe(
        () => {
          //Redirigiendo a la ruta actual /User y recargando la ventana
          this.router.navigate(['/dashboard']).then(() => {
            window.location.reload();
          })
          //this.openMessage("User agregado exitosamente.", "Ir a inicio");
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
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "<strong>¡Felicidades!</strong> Te has registrado con exito"

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-success alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

}
