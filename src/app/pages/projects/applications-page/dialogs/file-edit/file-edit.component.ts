import { Component, EventEmitter } from '@angular/core';

import { ApplicationsApiService } from '../../services/applications-api.service';

@Component({
  selector: 'app-file-edit',
  templateUrl: './file-edit.component.html',
  styleUrls: ['./file-edit.component.css'],
})
export class FileEditComponent {
  public projectName = '';
  public fileName = '';
  public envContent: string | undefined = undefined;
  public onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private appService: ApplicationsApiService) {}

  public getEnvFile() {
    this.appService.getAppEnv(this.projectName, this.fileName).subscribe((response) => {
      this.envContent = response;
    });
  }

  public updateEnvFile() {
    this.appService.updateAppEnv(this.projectName, this.fileName, this.envContent!).subscribe(() => {
      this.onClose.emit();
    });
  }
}
