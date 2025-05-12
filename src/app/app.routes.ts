import { Routes } from '@angular/router';
import { StaffMainDashboardComponent } from './pages/staff-main-dashboard/staff-main-dashboard.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { StoreComponent } from './components/store/store.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ReportsComponent } from './components/reports/reports.component';

export const routes: Routes = [
    {
        path:"staff",
        component:StaffMainDashboardComponent,
        children:[
            {
                path:"dashboard",
                component:StaffDashboardComponent
            },
            {
                path:"store",
                component:StoreComponent
            },
            {
                path:"orders",
                component:OrdersComponent
            },
            {
                path:"customers",
                component:CustomersComponent
            },
            {
                path:"reports",
                component:ReportsComponent
            }
        ]
    }
];
