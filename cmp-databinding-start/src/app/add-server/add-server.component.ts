import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-server",
  templateUrl: "./add-server.component.html",
  styleUrls: ["./add-server.component.css"],
})
export class AddServerComponent implements OnInit {
  newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverElements.push({
      type: "server",
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: "blueprint",
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
