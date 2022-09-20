import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }]
  },
  {
    path: 'servers',
    // Guard the whole route:
    // canActivate: [AuthGuard],
    // Guard only the child routes:
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver } // Also resolves to an data object
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }
  },
  // Wildcard catch all & redirect: make sure wildcard is the last in the routes array
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  // useHash: true - adds # after the domain and before all paths,
  // so that Angular can take over all the paths parsing in case the browser doesn't support paths parsing in the client
  // imports: [RouterModule.forRoot(appRoutes), { useHash: true }],
  exports: [RouterModule]
})
export class AppRoutingModule {}
