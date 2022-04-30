import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  form!: FormGroup
  constructor(private formb: FormBuilder, private contaService: ContasService, private router: Router) { }

  ngOnInit(): void {
    this.creatForm();
}

  creatForm() {
    this.form = this.formb.group({
      agenciaDestino: new FormControl('', Validators.required),
      agenciaOrigem: new FormControl('', Validators.required),
      numeroContaDestino: new FormControl('', Validators.required),
      numeroContaOrigem: new FormControl('', Validators.required),
      valor: new FormControl(null, Validators.required)
    })
  }

  transferencia() {
    const transferencia: ITransferencia = this.form.value;
    this.contaService.transferencia(transferencia).subscribe(clienteApi =>{
      Swal.fire("Trasação Realizada!", "Transferência realizada com sucesso!", "success")
      console.log(clienteApi)
      this.router.navigate(['/contas'])
    })
  }

}
