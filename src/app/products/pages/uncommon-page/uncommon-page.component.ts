import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  public name: string = 'Fabio';
  public genre: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Derly';
    this.genre = 'female';
  }

  public clients: string[] = [
    'Maria',
    'Juan',
    'Pedro',
    'Jesus',
    'Andrea',
    'Xiomara',
    'Anouk',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deletedClient(): void {
    this.clients.shift();
  }

  // KeyValue pipe
  public person = {
    name: 'Fabio',
    age: 23,
    address: 'Bogotá, Colombia',
  };

  //Async pipe

  public myObservableTimer: Observable<number> = interval(4000)
  //.pipe(tap(value => console.log('tap: ', value)));

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'otro nombre desde async pipe';
    }, 3500);
  });
}
