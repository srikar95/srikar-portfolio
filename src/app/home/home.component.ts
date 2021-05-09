import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isMenuCollapsed = true;
  aboutList = [
    'Developer with an eye for design, paying attention to detail, passionate about creating fast, responsive and intuitive user experiences for the web and mobile.',
    'Works closely with product owners, UX Designers and Back-End teams to define and refine apps feature specifications.',
    'Implementing web accessibility to the applications created to provide equal access and equal opportunity to people with disabilities.',
    'Self-motivated, highly organized and able to work in a team environment that is fast-paced with multiple projects under minimal supervision.',
    'Adaptable in development of new code or reuse of existing code and perform code reviews.',
  ];
  skillsList = [
    'My till date working web technologies include HTML5, CSS3, Javascript, Angular, Firebase, React Native, Bootstrap4, REST web Services and experience with npm modules.',
    'Developed one-one and group chat application using Angular and Firebase. Familiar with Firebase Functions.',
    'Designed and integrated functionalities for a Mobile Application using React Native (Android & iOS)',
    'Good debugging skills using Browser Debugging Tools of Chrome.',
    'Always open to learn and adapt new trending technologies.',
  ];
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('skills') skillsElement: ElementRef;
  @ViewChild('profile') profileElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;

  public currentActive = 0;
  public aboutOffset: Number = null;
  public skillsOffset: Number = null;
  public profileOffset: Number = null;
  public contactOffset: Number = null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    this.skillsOffset = this.skillsElement.nativeElement.offsetTop;
    this.profileOffset = this.profileElement.nativeElement.offsetTop;
    this.contactOffset = this.contactElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (
      window.pageYOffset >= this.aboutOffset &&
      window.pageYOffset < this.skillsOffset
    ) {
      this.currentActive = 1;
    } else if (
      window.pageYOffset >= this.skillsOffset &&
      window.pageYOffset < this.profileOffset
    ) {
      this.currentActive = 2;
    } else if (
      window.pageYOffset >= this.profileOffset &&
      window.pageYOffset < this.contactOffset
    ) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.contactOffset) {
      this.currentActive = 4;
    } else {
      this.currentActive = 0;
    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
