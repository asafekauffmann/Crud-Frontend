import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputGenericoService } from '../../services/input/input-generico.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  InputInvalido : boolean = false;
  inputID : string = "InputID";
  labelInput : string = "";

  @Input()
  set labelText (label : string){
    this.inputID = label.replace(/ /g,""); // "/ /g" é uma expressão regular onde identifica todas as ocorrencias que possuem espaço de uma string.
    this.labelInput = label;
  };

  @Input()
  inputType : string = " ";

  @Input()
  value : string = " "

  @Input()
  inputPlaceholder : string = " ";

  @Input()
  msgError : string = "Valor inválido";

  @Input()
  set isInvalid(isInvalid : boolean){
    this.inputGenericoService.setIsInvalid(isInvalid);
  }

  @Input()
  parentForm : FormGroup = new FormGroup({input: new FormControl('')});

  @Input()
  controlName : string = "input";

  constructor(public inputGenericoService : InputGenericoService) {
    this.inputGenericoService.getIsInvalid().subscribe(
      isInvalid => this.InputInvalido = isInvalid
    )
  }

  onKey(event : any){
    this.inputGenericoService.setIsInvalid(false);
  }

  ngOnInit(): void {
  }
}
