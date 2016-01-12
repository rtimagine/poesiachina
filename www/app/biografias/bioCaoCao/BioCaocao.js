import {Page, NavController} from 'ionic/ionic';

import "./bioCaoCao.scss";

@Page({
  templateUrl: 'app/biografias/bioCaoCao/bioCaoCao.html'
})
export class bioCaoCao {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
