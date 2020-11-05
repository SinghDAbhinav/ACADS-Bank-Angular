import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from "./user-profile/user-profile.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { ModeOfTransferComponent } from './mode-of-transfer/mode-of-transfer.component';
import { LoginNetBankingComponent } from './login-net-banking/login-net-banking.component';
import { RegisterNetBankingComponent } from './register-net-banking/register-net-banking.component';
import { ImpsfundTransferComponent } from './impsfund-transfer/impsfund-transfer.component';
import { RtgsfundTransferComponent } from './rtgsfund-transfer/rtgsfund-transfer.component';
import { NeftfundTransferComponent } from './neftfund-transfer/neftfund-transfer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'homeLink',component:HomeComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'customerLoginLink',component:CustomerLoginComponent},
  {path:'dashboardLink',component:DashboardComponent},
   {path:'dashboardHomeLink',component:DashboardHomeComponent},
   {path:'userProfileLink',component:UserProfileComponent},
   {path:'netBankingLink',component:LoginNetBankingComponent},
   {path:'fundsTransferLink',component:ModeOfTransferComponent},
   {path:'registerNetBankingLink',component:RegisterNetBankingComponent},
   {path:'impsLink',component:ImpsfundTransferComponent},
   {path:'rtgsLink',component:RtgsfundTransferComponent},
   {path:'neftLink',component:NeftfundTransferComponent}


  //  {path:'rtgsLink',component:UserProfileComponent}
  //  {path:'userProfileLink',component:UserProfileComponent}

  // {path:'registerLink',component:RegisterComponent},
  // {path:'loginLink',component:LoginComponent},
  // {path:'successLink',component:SuccessComponent},
  // {path:'failureLink',component:FailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
