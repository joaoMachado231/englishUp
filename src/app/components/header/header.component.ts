import { Component } from '@angular/core';
import { WppButton } from '../../shared/wpp-button/wpp-button';


@Component({
  imports: [WppButton],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
