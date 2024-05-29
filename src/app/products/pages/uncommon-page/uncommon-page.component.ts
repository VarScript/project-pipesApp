import { Component } from '@angular/core';

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
    'other': 'tenemos # clientes esperando',

  }

  deletedClient(): void {
    this.clients.shift();
  }
}
