/**
 * Created by ori on 4/27/2017.
 */

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/app.home';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
