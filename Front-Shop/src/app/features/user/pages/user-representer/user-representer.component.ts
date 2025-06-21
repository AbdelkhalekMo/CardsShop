import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { WhatsappSupportComponent } from '../../layouts/whatsapp-support/whatsapp-support.component';

@Component({
  selector: 'app-user-representer',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappSupportComponent],
  templateUrl: './user-representer.component.html',
  styleUrls: ['./user-representer.component.css']
})
export class UserRepresenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
