import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower = 'fabio';
  public nameUpper = 'FABIO';
  public nameTitle = 'FaBIo VArgAs';

  public customDate = new Date();
}
