//Basic modules required
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
//components being used
import { WebServiceComponent } from "./WebService.Component";
import { AddCommentComponent } from "./Forms/AddComments";
import { AppComponent } from './app.component';
import { LoginComponent } from './Login.Component';
import { LogoutComponent } from "./Logout.Component";
import { NotFoundComponent } from "./404/NotFoundComponent.Component";
//Directive to highlight rows
import { HighlighterDirective } from "./Directive/HighlightDirective";
//All config settings
import { RoutingConfig } from "./Routing/Routing.Config";
//Pipes to search the data from table
import { GoPipe } from "./Pipes/GoPipe.Pipe";
//Shared service to share data b/w the components
import { DataService } from "./SharedService/DataService";
import { RouteGuradService } from "./Routing/RouteGuradService.Service";
import { AuthService } from "./SharedService/AuthService.Service";
//Loader modules
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

//Local storage because using temprary data
import { LocalStorageModule } from 'angular-2-local-storage';



@NgModule({
  declarations: [AppComponent, WebServiceComponent,
    HighlighterDirective, AddCommentComponent, NotFoundComponent, GoPipe, LoginComponent,LogoutComponent],

  imports: [BrowserModule, HttpModule, FormsModule,
    NgxPaginationModule, ReactiveFormsModule,
    RouterModule.forRoot(RoutingConfig),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '97px',
      primaryColour: '#FF0000',
      secondaryColour: '#0000FF',
      tertiaryColour: '#008000'
    }),
    LocalStorageModule.withConfig({
      prefix: 'local-store',
      storageType: 'localStorage'
    })],

  bootstrap: [AppComponent],

  providers: [DataService, RouteGuradService, AuthService]
})
export class AppModule { }
