import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    protected backgroundImage: string = 'assets/logo.png';
}
