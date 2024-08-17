import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-back-top',
  standalone: true,
  imports: [ MatIconModule, CommonModule ],
  templateUrl: './back-top.component.html',
  styleUrl: './back-top.component.scss'
})
export class BackTopComponent implements OnInit {
  isVisible = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window: scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 300;
    const backTopElement = this.el.nativeElement.querySelector('.backTop');
    
    if (backTopElement) { 
      if (scrollPosition > 300) {
        this.isVisible = true;
        this.renderer.addClass(backTopElement, 'visible');
      } else {
        this.isVisible = false;
        this.renderer.removeClass(backTopElement, 'visible');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
