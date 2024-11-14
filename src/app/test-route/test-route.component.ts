import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'testRoute',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.css']
})
export class TestRouteComponent implements OnInit {

  constructor(private router: Router) { }

  goToTest() {
    this.router.navigate(['/test-router']);
  }


  ngOnInit(): void {
  }

}
