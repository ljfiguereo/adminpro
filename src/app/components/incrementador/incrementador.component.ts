import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor')
  cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange(newValue: number) {
    // let elemHtml: any = document.getElementsByName('progreso')[0];
    // console.log(this.txtProgress);

    if (newValue > 100) {
      this.progreso = 100;
    } else if (this.progreso < 0 || this.progreso === null) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    // elemHtml.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if (valor > 0) {
      if (this.progreso < 100) {
        this.progreso += valor;
      }
    } else {
      if (this.progreso >= 5) {
        this.progreso = this.progreso + valor;
      }
    }

    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
