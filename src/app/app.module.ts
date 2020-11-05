import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { ModeOfTransferComponent } from './mode-of-transfer/mode-of-transfer.component';
import { ImpsfundTransferComponent } from './impsfund-transfer/impsfund-transfer.component';
import { NeftfundTransferComponent } from './neftfund-transfer/neftfund-transfer.component';
import { RtgsfundTransferComponent } from './rtgsfund-transfer/rtgsfund-transfer.component';
import { RegisterNetBankingComponent } from './register-net-banking/register-net-banking.component';
import { LoginNetBankingComponent } from './login-net-banking/login-net-banking.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    DashboardHomeComponent,
    CustomerLoginComponent,
    ModeOfTransferComponent,
    ImpsfundTransferComponent,
    NeftfundTransferComponent,
    RtgsfundTransferComponent,
    RegisterNetBankingComponent,
    LoginNetBankingComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
