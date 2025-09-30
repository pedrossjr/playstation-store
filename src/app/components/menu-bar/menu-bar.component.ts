import { Component } from '@angular/core';
import { MenuBarItemComponent } from "./menu-bar-item/menu-bar-item.component";
import { MenuBarLogoComponent } from "./menu-bar-logo/menu-bar-logo.component";

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuBarItemComponent, MenuBarLogoComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  constructor() {}

  ngOninit(): void {}
}
