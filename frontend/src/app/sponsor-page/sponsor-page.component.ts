import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sponsor-page',
  templateUrl: './sponsor-page.component.html',
  styleUrls: ['./sponsor-page.component.css']
})
export class SponsorPageComponent implements OnInit {
  groupedSponsors: Sponsor[][] = [];
  displayModal: boolean = false;

  modalHeaderText: string = "";
  modalBodyText: string = "";

  ngOnInit(): void {
    this.groupedSponsors =
      [
        [
          { name: "Error 404", source: "../../assets/img/ea_logo.png", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "Shitori", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "", source: "", description: "" }
        ],
        [
          { name: "test 404", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "dqsdqsd", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "", source: "", description: "" }
        ],
        [
          { name: "tesqdqsd 404", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "tetet", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "", source: "", description: "" }
        ],
        [
          { name: "rerere 404", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "qsdqsd", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
          { name: "", source: "", description: "" }
        ],
      ]
  }
  showModalDialog(sponsorToShow: Sponsor) {
    this.modalHeaderText = sponsorToShow.name;
    this.modalBodyText = sponsorToShow.description;
    this.displayModal = true;
  }
}
interface Sponsor {
  name: string;
  source: string;
  description: string;
}
