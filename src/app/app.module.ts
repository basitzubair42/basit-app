import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbButtonModule,
  NbContextMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbCardModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDosComponent } from './to-dos/to-dos.component';
import { CommentsComponent } from './comments/comments.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, HomeComponent, PostsComponent, ToDosComponent, CommentsComponent,  MatchResultsComponent, TeamComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbCardModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {}