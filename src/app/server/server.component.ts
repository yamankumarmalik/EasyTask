import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
  standalone: false,
})
export class ServerComponent {
  serverId: number = 5;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(): String {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
