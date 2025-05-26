import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-crash-countdown',
  standalone: true,
  imports: [],
  templateUrl: './crash-countdown.component.html',
  styleUrls: ['./crash-countdown.component.css']
})
export class CrashCountdownComponent implements OnInit, OnDestroy {
  lastCrashDate = new Date("2025-05-18T19:00:00");
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private timer: any;

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateTime() {
    const now = new Date();
    const elapsed = now.getTime() - this.lastCrashDate.getTime();

    this.days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
  }
}
