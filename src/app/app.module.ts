import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponentComponent } from './Components/navigation-component/navigation-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { RegistrationComponentComponent } from './Components/registration-component/registration-component.component';
import { CommunityListComponentComponent } from './Components/community-list-component/community-list-component.component';
import { CommunityDetailsComponentComponent } from './Components/community-details-component/community-details-component.component';
import { CommunityCreationComponentComponent } from './Components/community-creation-component/community-creation-component.component';
import { UserProfileComponentComponent } from './Components/user-profile-component/user-profile-component.component';
import { DiscussionListComponentComponent } from './Components/discussion-list-component/discussion-list-component.component';
import { DiscussionDetailsComponentComponent } from './Components/discussion-details-component/discussion-details-component.component';
import { PostCreationComponentComponent } from './Components/post-creation-component/post-creation-component.component';
import { SurveyCreationComponentComponent } from './Components/survey-creation-component/survey-creation-component.component';
import { VotingComponentComponent } from './Components/voting-component/voting-component.component';
import { ReportsAndDashboardsComponentComponent } from './Components/reports-and-dashboards-component/reports-and-dashboards-component.component';
import { CoinRewardComponentComponent } from './Components/coin-reward-component/coin-reward-component.component';
import { UserSpecificContentComponentComponent } from './Components/user-specific-content-component/user-specific-content-component.component';
import { ModerationPanelComponentComponent } from './Components/moderation-panel-component/moderation-panel-component.component';
import { AdminPanelComponentComponent } from './Components/admin-panel-component/admin-panel-component.component';
import { ManagementPanelComponentComponent } from './Components/management-panel-component/management-panel-component.component';
import { NonLoggedInHomeComponentComponent } from './Components/non-logged-in-home-component/non-logged-in-home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponentComponent,
    LoginComponentComponent,
    RegistrationComponentComponent,
    CommunityListComponentComponent,
    CommunityDetailsComponentComponent,
    CommunityCreationComponentComponent,
    UserProfileComponentComponent,
    DiscussionListComponentComponent,
    DiscussionDetailsComponentComponent,
    PostCreationComponentComponent,
    SurveyCreationComponentComponent,
    VotingComponentComponent,
    ReportsAndDashboardsComponentComponent,
    CoinRewardComponentComponent,
    UserSpecificContentComponentComponent,
    ModerationPanelComponentComponent,
    AdminPanelComponentComponent,
    ManagementPanelComponentComponent,
    NonLoggedInHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
