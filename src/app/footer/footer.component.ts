import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
  openWindow(data) {
    if (data == 'twitter') {
      window.open('https://twitter.com/ChIkKuSriKaR');
    } else if (data == 'linkedin') {
      window.open('https://www.linkedin.com/in/srikar-malloju-814b95132/');
    } else if (data == 'github') {
      window.open('https://github.com/srikar95');
    } else if (data == 'gmail') {
      window.open(
        'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=srikar.malloju@gmail.com&su=&body=&tf=1'
      );
    }
  }
}
