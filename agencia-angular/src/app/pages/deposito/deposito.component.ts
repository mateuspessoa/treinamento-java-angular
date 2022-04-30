import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  form!: FormGroup
  constructor(private formb:FormBuilder, private contaService: ContasService, private router: Router) { }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm(): void {
    this.form = this.formb.group({
      agencia: new FormControl(null,[Validators.required]),
      numeroConta: new FormControl(null,[Validators.required],),
      valor: new FormControl(null,[Validators.required],),
    })
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.form.reset();
  }

  deposito(){
    const deposito : ISaqueDeposito = this.form.value;
    console.log(deposito);
    this.contaService.deposito(deposito).subscribe(contaApi => {
      Swal.fire({
        icon: 'success',
        title: 'Transação Realizada',
        text: 'Depósito efetuado',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/contas']);
    })
  }

}
