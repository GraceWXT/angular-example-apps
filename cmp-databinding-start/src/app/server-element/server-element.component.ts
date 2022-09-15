import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // ViewEncapsulation: Default Emulated,
  // can be changed to none which removes the component ng attribute for html tags
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
