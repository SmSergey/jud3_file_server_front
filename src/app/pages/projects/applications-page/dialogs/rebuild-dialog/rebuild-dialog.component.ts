import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';

import { ApplicationsApiService } from '../../services/applications-api.service';

@Component({
  selector: 'app-rebuild-dialog',
  templateUrl: './rebuild-dialog.component.html',
  styleUrls: ['./rebuild-dialog.component.css'],
})
export class RebuildDialogComponent {
  constructor(private applicationsApiService: ApplicationsApiService, private snackBar: MatSnackBar) {}

  public sendRequest(token: string) {
    this.applicationsApiService
      .rebuildApp('authorization-server', token)
      .pipe(
        catchError((err) => {
          this.snackBar.open(err.message, '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 1000,
          });
          throw new Error(err);
        })
      )
      .subscribe(() => {
        this.snackBar.open('Done!');
      });
  }
}
