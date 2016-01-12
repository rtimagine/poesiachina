import {Page, NavController} from 'ionic/ionic';

import "./poema1.scss";

@Page({
  templateUrl: 'app/poemas/poema1/poema1.html'
})
export class poema1 {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
