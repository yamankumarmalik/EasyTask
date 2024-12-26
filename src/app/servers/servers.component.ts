import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  standalone: false,
})
export class ServersComponent {
  buttonStatus: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  userName: string = '';
  serverCreated: boolean = false;
  servers: String[] = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.buttonStatus = true;
    }, 2000);
  }

  createNewServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus =
      'New server was created successfully!' +
      ' with server name as' +
      this.serverName;
    this.servers.push(this.serverName);
  }

  updateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.userName = '';
  }
}
