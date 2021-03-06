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
  public show: boolean = false;
  public address: string;
  public business: string;
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

  setUser(type){
    this.show = true;
    this.business = type.businessName;
    this.address = type.businessAddress;
    this.users = [];
  }

  userClear(){
    this.show = false;
    this.users = [];
    this.searchTerm = '';
  }

}
