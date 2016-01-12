import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';

// import {ItemDetailsPage} from '../item-details/item-details';

@Page({
  templateUrl: 'app/list/list.html'
})
export class ListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['ion-ios-book-outline'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Poesía de Li Bai ' + i,
        note: 'Esta es la poesía #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {

    console.log('You selected:', item.title);

     this.nav.push(ItemDetailsPage, {
     item: item
     });
  }
}
