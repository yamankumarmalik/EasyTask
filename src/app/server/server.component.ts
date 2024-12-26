import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  standalone: false,
})
export class ServerComponent {
  serverId: number = 5;
  serverStatus: string = 'Online';
}
