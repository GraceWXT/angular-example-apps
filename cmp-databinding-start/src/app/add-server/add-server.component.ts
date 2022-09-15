import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-add-server",
  templateUrl: "./add-server.component.html",
  styleUrls: ["./add-server.component.css"],
})
export class AddServerComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
