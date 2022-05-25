import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userFormLogin = this.formBuilder.group({
    correo: '',
    clave: ''
  });
  
  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
    ) {}

/*
  ngOnInit() {
  }
  ngOnDestroy() {
  }
*/
  userLogin() {
    if (this.userFormLogin.value['correo'] === ''||
      this.userFormLogin.value['clave'] === '') {
      this.openMessage("Falta informacion", "Cerrar");
    } else {
      this.userService.userLogin(this.userFormLogin.value).subscribe(
        () => {
          //Redirigiendo a la ruta actual /User y recargando la ventana
          //this.router.navigate(['/User']).then(() => {
          //  window.location.reload();
          //})
          this.openMessage("User agregado", "Actualizar lista");
        }

      );
    }
  }

  openMessage(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action);
    if (message !== 'Falta información') {
      snackBarRef.afterDismissed().subscribe(() => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/animal']).then(() => {
          window.location.reload();
        });
      });
    }
  }


}
