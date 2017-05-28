import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: Boolean = false;
  serverCreationStatus: String = 'No server Was Found';
  serverName: String = 'TestServer';
  userName: String = '';
  servers: Array<String> = ['TestServer', 'TestServer2'];
  serverCreated: Boolean = false;
  display: Boolean = false;
  log: Array<Number> = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! name is ' + this.serverName;
  }

  onClickDisplay() {
    this.display = !this.display;
    this.log.push(this.log.length + 1);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
