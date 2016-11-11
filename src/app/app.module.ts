import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IndexComponent } from './index/index.component';
import {DeliveryModule} from './delivery/delivery.module';
import {HomeModule} from "./home/home.module";
import {OrderModule} from "./order/order.module";
import { VerifyFormComponent } from './shared/verify-form/verify-form.component';
import { InputControlComponent } from './shared/input-group/input-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    VerifyFormComponent,
    InputControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DeliveryModule,
    HomeModule,
    OrderModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}