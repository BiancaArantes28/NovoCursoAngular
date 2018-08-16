import { Component, OnInit, Input } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() title_icon: string = 'fa fa-user';
  @Input() title: string = 'Dashboard';
  @Input() navegations = [
    {
      'name': 'Home',
      'url': 'teste'
    },
    {
      'name': 'Teste',
      'url': 'teste'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
