
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { ReplyComponent } from './reply/reply.component';
import { ReplyInputComponent } from './reply-input/reply-input.component';
import { HttpClientModule } from '@angular/common/http';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './state/effects/comments.effects';
import { HeaderComponent } from './header/header.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';

    
@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ReplyComponent,
    ReplyInputComponent,
    HeaderComponent,
    LeftSideComponent,
    RightSideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers,{
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([ItemsEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
