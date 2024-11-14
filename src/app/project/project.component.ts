import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  template: `
    Project Name: {{projectName}}
  `
})
export class ProjectComponent implements OnInit {
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
