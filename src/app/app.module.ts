import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LginPageComponent } from './pages/auth/lgin-page/lgin-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectFilesComponent } from './pages/project-files/project-files.component';
import { ApplicationsPageComponent } from './pages/projects/applications-page/applications-page.component';

import { FileEditComponent } from './pages/projects/applications-page/dialogs/file-edit/file-edit.component';
import { RebuildDialogComponent } from './pages/projects/applications-page/dialogs/rebuild-dialog/rebuild-dialog.component';

const routes: Routes = [
  {
    title: 'dashboard',
    pathMatch: 'full',
    path: '',
    component: DashboardComponent,
  },
  {
    title: 'to editFiles',
    pathMatch: 'full',
    path: 'edit',
    component: ProjectFilesComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LginPageComponent,
    ApplicationsPageComponent,
    ProjectFilesComponent,
    DashboardComponent,
    RebuildDialogComponent,
    FileEditComponent,
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
