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
  @Output("bpCreated") blueprintAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  // If passing serverNameInput.value directly:
  // onAddServer(serverName) {
  //   this.serverAdded.emit({
  //     serverName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
    });
  }
}
