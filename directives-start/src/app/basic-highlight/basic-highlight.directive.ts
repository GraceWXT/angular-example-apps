import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Only to demo the custom directive
    // Not a good practice to access & change element property directly like this!
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
  }
}
