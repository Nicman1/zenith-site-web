import { Component } from '@angular/core';
import {CrashCountdownComponent} from '../../components/crash-countdown/crash-countdown.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [
    CrashCountdownComponent,
    RouterLink,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
