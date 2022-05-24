import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    userForm = this.formBuilder.group({
        usuario: '',
        nombre: '',
        correo: '',
        clave: '',
        direccion: '',
        telefono: '',
      });
    constructor(private userService: UserService,
        private formBuilder: FormBuilder,
        private router: Router,
        private _snackBar: MatSnackBar) { }
        

    ngOnInit():void {
       
    }
    newUserEntry() {
        if (this.userForm.value['nombre'] === '' ||
          this.userForm.value['tipo'] === '') {
          this.openMessage("Falta informacion", "Cerrar");
        } else {
          this.userService.newUser(this.userForm.value).subscribe(
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
