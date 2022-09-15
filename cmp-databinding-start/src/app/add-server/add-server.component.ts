import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

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
  // newServerContent = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

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
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
