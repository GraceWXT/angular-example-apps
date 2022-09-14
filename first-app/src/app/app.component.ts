import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Regardless of the order in the object,
  // the <style> for the styles property is always after the <style> for styleUrls
  // therefore "styles" always takes precedence over "styleUrls"
  // Bad practice to use both - always choose one
  // styles:[`
  //   h1 {
  //     color: #5f9ea0;
  //   }
  // `],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
