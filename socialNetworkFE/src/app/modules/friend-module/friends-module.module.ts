import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsModuleRoutingModule } from './friends-module-routing.module';
import {AllFriendsComponent} from './components/all-friends/all-friends.component';
import {FriendsComponent} from './components/friend/friends.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PendingRequestsComponent } from './components/pending-requests/pending-requests.component';
import { IncomingComponent } from './components/incoming/incoming.component';
import { OutgoingComponent } from './components/outgoing/outgoing.component';
import { AllOutgoingComponent } from './components/all-outgoing/all-outgoing.component';
import { AllIncomingComponent } from './components/all-incoming/all-incoming.component';


@NgModule({
  declarations: [
    AllFriendsComponent,
    FriendsComponent,
    PendingRequestsComponent,
    IncomingComponent,
    OutgoingComponent,
    AllOutgoingComponent,
    AllIncomingComponent
  ],
  imports: [
    CommonModule,
    FriendsModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class FriendsModuleModule { }
