import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validarMaiorIdade]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidarMaiorIdadeDirective,
    multi: true
  }]
})
export class ValidarMaiorIdadeDirective implements Validator {

  constructor() { }
  
  public validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const dataNascimento = control.value;
    const dataNascimentoDoUsuario = new Date(dataNascimento);
    const dataDezoitoAnosDepois = new Date(dataNascimentoDoUsuario);
    dataDezoitoAnosDepois.setFullYear(dataNascimentoDoUsuario.getFullYear() + 18);

    const ehMaiorDeIdade = dataDezoitoAnosDepois <= new Date();

    return ehMaiorDeIdade ? null : {'validarMaiorIdade': true};
  }
}


