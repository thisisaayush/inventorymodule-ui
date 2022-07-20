import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpsComponent } from './nav-bar/helps/helps.component';
import { NotificationsComponent } from './nav-bar/notifications/notifications.component';
import { ProfileComponent } from './nav-bar/profile/profile.component';
import { SettingsComponent } from './nav-bar/settings/settings.component';
import { DashboardComponent } from './side-bar/dashboard/dashboard.component';
import { IngredientMgmtComponent } from './side-bar/ingredient-mgmt/ingredient-mgmt.component';
import { InventoryComponent } from './side-bar/inventory/inventory.component';
import { NewInventoryComponent } from './side-bar/inventory/new-inventory/new-inventory.component';
import { OrderComponent } from './side-bar/order/order.component';
import { ReportsComponent } from './side-bar/reports/reports.component';
import { VendorMgmtComponent } from './side-bar/vendor-mgmt/vendor-mgmt.component';

const routes: Routes = [
  //side-bar routing properties.
{ path: 'dashboard', component:DashboardComponent },
{ path: 'inventory', component:InventoryComponent },
{ path: 'order', component:OrderComponent },
{ path: 'ingredient', component:IngredientMgmtComponent },
{ path: 'vendor', component:VendorMgmtComponent },
{ path: 'reports', component:ReportsComponent},

  //nav-bar routing properties.
{ path: 'profile', component:ProfileComponent },
{ path: 'helps', component:HelpsComponent },
{ path: 'settings', component:SettingsComponent },
{ path: 'notifications', component:NotificationsComponent },

 //side-bar | invnetory | new-inventory routing properties.
 { path: 'newinventory', component:NewInventoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
