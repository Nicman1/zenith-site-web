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

  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  previousDays: string = '00';
  previousHours: string = '00';
  previousMinutes: string = '00';
  previousSeconds: string = '00';

  flipping = {
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  };

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

    this.previousDays = this.days;
    this.previousHours = this.hours;
    this.previousMinutes = this.minutes;
    this.previousSeconds = this.seconds;

    const newDays = Math.floor(elapsed / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const newHours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const newMinutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const newSeconds = Math.floor((elapsed % (1000 * 60)) / 1000).toString().padStart(2, '0');

    if (newDays !== this.days) {
      this.triggerFlip('days');
    }
    if (newHours !== this.hours) {
      this.triggerFlip('hours');
    }
    if (newMinutes !== this.minutes) {
      this.triggerFlip('minutes');
    }
    if (newSeconds !== this.seconds) {
      this.triggerFlip('seconds');
    }

    this.days = newDays;
    this.hours = newHours;
    this.minutes = newMinutes;
    this.seconds = newSeconds;
  }

  private triggerFlip(unit: 'days' | 'hours' | 'minutes' | 'seconds') {
    this.flipping[unit] = true;

    setTimeout(() => {
      this.flipping[unit] = false;
    }, 300);
  }
}
