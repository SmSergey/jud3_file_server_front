import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FileEditComponent } from './dialogs/file-edit/file-edit.component';
import { ApplicationItem } from './interfaces/applicationItem';

@Component({
  selector: 'app-projects-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.css'],
})
export class ApplicationsPageComponent {
  constructor(public dialog: MatDialog) {}

  public projects: ApplicationItem[] = [
    {
      displayName: 'Authentication-server',
      description: 'Main auth entry point',
      actions: [
        {
          actionTitle: 'Edit .env files',
          action: () => {
            const dialogRef = this.dialog.open(FileEditComponent);
            dialogRef.componentInstance.projectName = 'jud3';
            dialogRef.componentInstance.fileName = 'authorization_server';
            dialogRef.componentInstance.getEnvFile();
            dialogRef.componentInstance.onClose.subscribe(() => dialogRef.close());
          },
        },
      ],
    },
    {
      displayName: 'File-server-backend',
      description: 'Storage for used in build files',
      actions: [
        {
          actionTitle: 'Edit .env files',
          action: () => {
            const dialogRef = this.dialog.open(FileEditComponent);
            dialogRef.componentInstance.projectName = 'jud3';
            dialogRef.componentInstance.fileName = 'file-server-backend';
            dialogRef.componentInstance.getEnvFile();
            dialogRef.componentInstance.onClose.subscribe(() => dialogRef.close());
          },
        },
      ],
    },
    {
      displayName: 'File-server-front',
      description: 'App for managing file-server storage and applications',
      actions: [],
    },
    {
      displayName: 'Aspect-backend',
      description: 'Api for aspect application',
      actions: [
        {
          actionTitle: 'Edit .env files',
          action: () => {
            const dialogRef = this.dialog.open(FileEditComponent);
            dialogRef.componentInstance.projectName = 'jud3';
            dialogRef.componentInstance.fileName = 'aspect-backend';
            dialogRef.componentInstance.getEnvFile();
            dialogRef.componentInstance.onClose.subscribe(() => dialogRef.close());
          },
        },
      ],
    },
    {
      displayName: 'Aspect-front',
      description: 'Aspect application front app',
      actions: [],
    },
  ];
}
