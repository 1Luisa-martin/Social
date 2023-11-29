import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { InstagramComponent } from './instagram/instagram.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { WhatsAppComponent } from './whats-app/whats-app.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes =[
  {path: 'instagram', component:InstagramComponent},
  {path: 'facebook', component:FacebookComponent},
  {path: 'tiktok', component:TiktokComponent},
  {path: 'whats-app',component:WhatsAppComponent},
  {path: 'inicio',component:InicioComponent},
  
  ]
@NgModule({
  declarations: [
    AppComponent,
    InstagramComponent,
    FacebookComponent,
    TiktokComponent,
    WhatsAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
