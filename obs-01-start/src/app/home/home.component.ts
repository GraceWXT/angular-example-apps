import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  private customIntervalSubscription;
  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => console.log('count', count));
    const customIntervalObs = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 3) observer.complete();
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.customIntervalSubscription = customIntervalObs.subscribe(
      (data) => {
        console.log('data', data);
      },
      (error) => {
        alert(`${error.message}`);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnDestroy(): void {
    // this.firstObsSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
  }
}
