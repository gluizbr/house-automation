import { Component, OnInit, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {

  @HostBinding('class.app-alert')
  hostClass = true;

  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
