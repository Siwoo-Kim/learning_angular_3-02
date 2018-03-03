import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as $ from 'jquery/dist/jquery.slim';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    $('ul.navbar-nav > li').toggleClass('active');
    this.featureSelected.emit(feature);
  }
}
