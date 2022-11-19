import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor() {
  }

  ngOnInit(): void {
    $(window).resize(function() {
      if ($(window).width() < 990) {
        $('.shop-item').removeClass('shop');
        $('.shop-item2').removeClass('border');
        $('.shop-item2').removeClass('shop-text');
        $('.shop-item2').addClass('nav_hover');
      } else {
        $('.shop-item').addClass('shop');
        $('.shop-item2').addClass('border');
        $('.shop-item2').addClass('shop-text');
        $('.shop-item2').removeClass('nav_hover');
      }
    }).resize();
  }
}
