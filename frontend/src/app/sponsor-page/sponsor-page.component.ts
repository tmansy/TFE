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
  modalUrl: string = "";

  ngOnInit(): void {
    this.groupedSponsors =
      [
        [
          { name: "Error 404", source: "../../assets/img/ea_logo.png", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!", website: "https://www.ea.com/sports" },
          { name: "Shitori", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!", website: "https://www.ea.com/sports" },
          { name: "", source: "", description: "", website: "https://www.ea.com/sports" }
        ],
        [
          { name: "Error 404", source: "../../assets/img/ea_logo.png", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!", website: "https://www.ea.com/sports" },
          { name: "Shitori", source: "", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!", website: "https://www.ea.com/sports" },
          { name: "", source: "", description: "", website: "https://www.ea.com/sports" }
        ],
      ]
  }
  showModalDialog(sponsorToShow: Sponsor) {
    this.modalHeaderText = sponsorToShow.name;
    this.modalBodyText = sponsorToShow.description;
    this.modalUrl = sponsorToShow.website;
    this.displayModal = true;
  }
}
interface Sponsor {
  name: string;
  source: string;
  description: string;
  website: string;
}
