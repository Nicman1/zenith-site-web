import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {CrashCountdownComponent} from '../crash-countdown/crash-countdown.component';
import {MainComponent} from '../main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CrashCountdownComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
