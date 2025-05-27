import { Component } from '@angular/core';
import {CrashCountdownComponent} from '../../components/crash-countdown/crash-countdown.component';

@Component({
  selector: 'app-main',
  imports: [
    CrashCountdownComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
