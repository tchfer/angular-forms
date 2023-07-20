import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  consultaCEP(event: any) {
    const cep = event?.target?.value;
    return this.consultaCepService.getConsultaCep(cep).subscribe(
      response => console.log(response));
  }

  cadastrar(form: NgForm){
    if(form.valid) {
      this.router.navigate(['./sucesso'])
    } else {
      alert('Preencha os campos corretamente!');
    }
    console.log(form.controls);
    
  }
}
