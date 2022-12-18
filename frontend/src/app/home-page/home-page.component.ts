import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {StyleClassModule} from 'primeng/styleclass';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomePageComponent implements OnInit {
  isLolTeamVisible = true;
  lolLogoPath = "./../assets/img/lol_logo.png";
  tftLogoPath = "./../assets/img/tft_logo.png";
  teams: Team[] = [];
  tftPlayers: TftPlayer[] = [];

  constructor() { }
  
  ngOnInit(): void {
    this.teams = [
      { name : "ERROR 404", 
      source : "./../assets/img/team1.png", 
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
      capitaine : "Mbappe",
      coach : "Didier Deschamps" },
      { name : "BROKEN ARMS", 
      source  : "./../assets/img/team2.png", 
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
      capitaine : "Messi",
      coach : "Pep Guardiola"},
      { name : "SHITORI", 
      source : "./../assets/img/team3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
      capitaine : "Lukaku",
      coach : "Roberto Martinez"}
    ];

    this.tftPlayers = [
      { name : "FALCK0RN",
        source : "./../assets/img/tftPlayer1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
      },
      { name : "AUXILIUM",
        source : "./../assets/img/tftPlayer2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
      },
      { name : "STANLAWL",
        source : "./../assets/img/tftPlayer3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
      }
    ];
  }
}

interface Team{
  name : string,
  source : string,
  description : string,
  capitaine : string,
  coach : string
}

interface TftPlayer{
  name: string,
  source: string,
  description: string
}