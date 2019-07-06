import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Subs ', numero),
      error  => console.error('Se ha producido un error ', error),
      () => console.log('Proceso Completado')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('Pagna Cerrada');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        };


        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   //clearInterval(intervalo);
        //   observer.error('Se ha producido un error');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if((valor % 2) === 1){
          // Numero Impar
          return true;
        }
        else {
          // Numero Par
          return false;
        }
        })
    );
  }

}
