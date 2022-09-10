import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles:[`
    p {
      color: #5f9ea0;
    }

    .offline {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "lavender" : "black";
  }
}
