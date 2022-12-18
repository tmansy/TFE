import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-team-presentation',
  templateUrl: './team-presentation.component.html',
  styleUrls: ['./team-presentation.component.css']
})
export class TeamPresentationComponent implements OnInit {
  // team: Team;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

}
interface Team {
  name: string,
  source: string,
  description: string,
  capitaine: string,
  coach: string
}
