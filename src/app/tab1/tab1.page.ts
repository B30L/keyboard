import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public searchTerm: string;
  public users: any;

  constructor() {}

  getUsersSearch() {
    this.users = [
      {
        businessName: 'Biz 1',
        businessAddress: '12345 Mexico City, MX',
      },
      {
        businessName: 'Biz 2',
        businessAddress: '12345 Mexico City, MX',
      },
      {
        businessName: 'Biz 3',
        businessAddress: '12345 Mexico City, MX',
      }
    ];
    setTimeout(()=>{
      Keyboard.hide();
    }, 800);
  }

  userClear(){
    this.searchTerm = '';
  }

}
