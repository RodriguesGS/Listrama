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
    const scrollPosition = window.screenY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 300) { 
      this.isVisible = true;
      this.renderer.addClass(this.el.nativeElement.querySelector('.backTop'), 'visible');
    } else {
      this.isVisible = false;
      this.renderer.removeClass(this.el.nativeElement.querySelector('.backTop'), 'visible');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
