import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clientService: ClientesService,) { }
  clientes: ICliente[] = [];

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.clientService.listarTodosClientes().subscribe((result: ICliente[]) => {
      this.clientes = result;
      console.log(this.clientes);
    });
  }

  confirmar(id: number){
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Tem certeza que deseja excluir esse cliente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, tenho certeza!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.remover(id).subscribe(() => {
          Swal.fire({
            title: 'Parabéns!',
            text: "Cliente removido com sucesso!",
            icon: 'success',
          });
          this.listarTodos();
        });
      }
    })
  }

}
