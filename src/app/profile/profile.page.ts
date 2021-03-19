import { Component, OnInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public superTabs: SuperTabs) { }

  ngOnInit() {
  }

}
