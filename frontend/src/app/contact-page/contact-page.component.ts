import { Component, OnInit } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  faDiscord = faDiscord;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
