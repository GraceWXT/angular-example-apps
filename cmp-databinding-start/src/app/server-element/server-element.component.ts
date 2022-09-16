import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // ViewEncapsulation: Default Emulated,
  // can be changed to none which removes the component ng attribute for html tags
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;

  constructor() {
    console.log("server element constructor called");
  }

  // This will only be called when binding the name directly
  // When binding the element object, the element.name change will not trigger ngOnChange
  // since the reference to the object didn't change
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log("changes", changes);
  }

  ngOnInit(): void {
    console.log("server element ngOnInit called");
    console.log("header text content:", this.header.nativeElement.textContent);
  }

  // A custom change-detection function to run in addition to the default change detector
  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  // After the <ng-content> has been initialized
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  // After each default change detector has checked the projected content
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  // After the component's view has been fully initialized
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("header text content:", this.header.nativeElement.textContent);
  }

  // After each default change detector has checked the component template(view)
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
}

// Component life cycle
// Constructor -> properties get initialized -> ngOnChanges -> ngOnInit -> default change detector -> ngDoCheck
// ng-content get initialized -> ngAfterContentInit -> ngDoCheck
// the full view initialized ->ngAfterViewInit
// after each default change detector -> ngAfterContentChecked & ngAfterViewChecked
