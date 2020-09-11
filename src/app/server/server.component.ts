import { Component } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = 100;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): any {
    return this.serverStatus === 'online' ? 'forestgreen' : 'indianred';
  }
}
