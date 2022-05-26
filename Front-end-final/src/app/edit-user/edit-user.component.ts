import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userList: any = [];
  displayedColumns: string[] = ['Usuario', 'Nombre', 'Correo', 'Clave', 'Direccion', 'Telefono', 'Editar', 'Eliminar' ];
  userForm = this.formBuilder.group({
    usuario: '',
    nombre: '',
    correo: '',
    clave: '',
    direccion: '',
    telefono: '',
  });
  editableUser: boolean = false;
  idUser: any;


  constructor(private userService : UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) { }


  user_id : String;
  ngOnInit(): void {
    //this.usuario = this.share.getUsuario();
    console.log(localStorage.getItem('user_id'));
    this.user_id = localStorage.getItem('user_id');
    this.getUser();
  }

  getUser() {
    this.userService.getOneUserData(this.user_id).subscribe((data: {}) => {
      console.log(data);
      this.userList = data;
      console.log(this.userList);
      
    })
  }

  updateUserEntry() {
    for (let key in this.userForm.value) {
      if (this.userForm.value[key] === '') {
        this.userForm.removeControl(key);
      }
    }
    this.userService.updateUser(this.idUser, this.userForm.value).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.openMessage("Usuario editado", "Actualizar lista");
      }
    );
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

  deleteUserEntry(id:any){
    console.log(id)
    this.userService.deleteUser(id).subscribe(
      () => {
        this.openMessage("Usuario eliminado", "Actualizar lista");
      }
    )
  }

}
