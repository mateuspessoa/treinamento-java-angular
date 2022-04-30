import { Component, OnInit } from '@angular/core';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css'],
})
export class ContasComponent implements OnInit {

  constructor(private contaservice: ContasService) { }
  contas: any[] = [];

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.contaservice.listarTodasContas().subscribe((result: any) => {
      this.contas = result;
      console.log(this.contas);
    })
  }

}
