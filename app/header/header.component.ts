import {
  Component,
  Input,
  ElementRef,
  Renderer,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('headerHeight') headerHeight: number;
  header: any;
  newHeight: any;

  constructor(public element: ElementRef, public renderer: Renderer) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.header = document.getElementById('header');
    // this.headerHeight = <HTMLElement>this.header.offsetHeight;
  }

  ngAfterViewInit() {
    // this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    document.addEventListener('scroll', (ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(ev) {
    console.log(
      'this.headerHeight:',
      this.headerHeight,
      '*|* window.pageYOffset:',
      window.pageYOffset
    );
    this.newHeight = this.headerHeight - window.pageYOffset / 2;
    console.log('this.newHeight:', this.newHeight);

    if (this.newHeight < 50) {
      this.newHeight = 50;
    }

    let fontsize = this.newHeight / this.headerHeight;
    console.log('fontsize:', fontsize);
    if (fontsize >= 0.5) {
      this.header.style.fontSize = fontsize + 'em';
    }
    // if (this.newHeight >= this.headerHeight) {
    this.header.style.height = this.newHeight + 'px';
    // }

    console.log('-------------------------------------------------');
  }
}
