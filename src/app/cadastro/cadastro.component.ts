import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../service/consulta-cep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  consultaCEP(event: any, form: NgForm) {
    const cep = event?.target?.value;
    if (cep !== '') {
      this.consultaCepService.getConsultaCep(cep).subscribe((response) => {
        console.log(response);
        this.popularEndereco(response, form)
      });
    }
  }

  popularEndereco(data: any, form: NgForm) {
    form.form.patchValue({
      endereco: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    })
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
    } else {
      alert("Preencha os campos corretamente!");
    }
    console.log(form.controls);
  }
}
