import { Component, HostListener, AfterViewInit } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  ticking = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => this.updateOnScroll());
      this.ticking = true;
    }
  }

  ngAfterViewInit() {
    this.updateOnScroll();
  }

  updateOnScroll() {
    this.parallaxEffect();
    this.handleStickyNav();
    this.ticking = false;
  }

  parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxImage = document.getElementById('parallaxImage');
    const headerLogo = document.getElementById('headerLogo');

    const imageRate = scrolled * -0.7;
    if (parallaxImage) {
      parallaxImage.style.transform = `translateY(${imageRate}px)`;
    }

    const logoRate = scrolled * -0.4;
    if (headerLogo) {
      headerLogo.style.transform = `translate(-50%, -50%) translateY(${logoRate}px)`;
    }
  }

  handleStickyNav() {
    const headerNav = document.getElementById('headerNav');
    const siteHeader = document.getElementById('siteHeader');
    const scrolled = window.pageYOffset;
    // @ts-ignore
    const headerHeight = siteHeader?.offsetHeight - 40;

    if (headerNav) {
      if (scrolled >= headerHeight) {
        headerNav.classList.add('sticky');
        siteHeader!.style.zIndex = '30';
      } else {
        headerNav.classList.remove('sticky');
        siteHeader!.style.zIndex = '0';
      }
    }
  }
}
