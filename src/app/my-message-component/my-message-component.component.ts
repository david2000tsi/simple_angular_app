import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'my-message-component',
  templateUrl: './my-message-component.component.html',
  styleUrls: ['./my-message-component.component.css']
})
export class MyMessageComponentComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  public messages: string [];

  ngOnInit() {
  	this.messages = this.messageService.getMessages();
  }

}
