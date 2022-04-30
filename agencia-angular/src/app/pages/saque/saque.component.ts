import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  form!: FormGroup
  constructor(private formb:FormBuilder, private contaService: ContasService, private router: Router) { }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm(): void {
    this.form = this.formb.group({
      agencia: new FormControl('', [Validators.required]),
      numeroConta: new FormControl('', [Validators.required],),
      valor: new FormControl('', [Validators.required],),
    })
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.form.reset();
  }

  sacar(){
    const saque: ISaqueDeposito = this.form.value;
    console.log(saque);
    this.contaService.saque(saque).subscribe(contaApi => {
      Swal.fire({
        icon: 'success',
        title: 'Transação Realizada',
        text: 'Saque efetuado!',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/contas']);
    });
  }

}
