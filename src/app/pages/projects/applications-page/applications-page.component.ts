import {Component, OnInit} from '@angular/core';
import {ApplicationItem} from "./interfaces/ApplicationItem";


@Component({
  selector: 'app-projects-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.css']
})
export class ApplicationsPage implements OnInit {
  panelOpenState = false;
  public projects: ApplicationItem[] = [
    {
      name: "Authentication-server",
      description: "Main auth entry point",
      actions: [
        'Edit .env files',
        "Rebuild app"
      ]
    },
    {
      name: "File-server-backend",
      description: "Storage for used in build files",
      actions: [
        'Edit .env files',
        "Rebuild app"
      ]
    },
    {
      name: "File-server-front",
      description: "App for managing file-server storage and applications",
      actions: [
        'Edit .env files',
        "Rebuild app"
      ]
    },
    {
      name: "Aspect-backend",
      description: "Api for aspect application",
      actions: [
        'Edit .env files',
        "Rebuild app"
      ]
    },
    {
      name: "Aspect-frontend",
      description: "Aspect application front app",
      actions: [
        'Edit .env files',
        "Rebuild app"
      ]
    },
    {
      name: "Postgres",
      description: "DB server",
      actions: [
        'Edit .env files',
        "Rebuild app"
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
