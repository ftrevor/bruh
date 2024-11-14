import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dev-ops-defects',
  templateUrl: './dev-ops-defects.component.html',
  styleUrls: ['./dev-ops-defects.component.css'],
  template: `
    Project Name: {{projectName}}
  `
})
export class DevOpsDefectsComponent implements OnInit {
  @Input() projectName = '';
  @Output() productClicked = new EventEmitter();
  show = false;
  x = document.getElementById("project");

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    // this.productClicked.emit();

  }

}
