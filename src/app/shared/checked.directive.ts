import { Task } from './../model/task';
import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appChecked]',
})
export class CheckedDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    let li = this.el.nativeElement;

    //this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked1.png)')

    this.renderer.setStyle(li, 'background', 'aquamarine');
    this.renderer.setStyle(li, 'max-height', '200px');
    this.renderer.setStyle(li, 'max-width', '200px');
    this.renderer.setStyle(li, 'size', '40px');
    this.renderer.setStyle(li, 'size', '40px');

    console.log('zmiana!');
  }
}
