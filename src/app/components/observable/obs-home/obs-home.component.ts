import {Component, OnDestroy, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-obs-home',
  templateUrl: './obs-home.component.html',
  styleUrls: ['./obs-home.component.css']
})
export class ObsHomeComponent implements OnInit, OnDestroy {

  numSubscription: Subscription;
  myObservableSubscription: Subscription;

  ngOnDestroy(): void {
    this.numSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
  }

  ngOnInit() {
    const myNumbers: Observable = Observable.interval(1000);
    this.numSubscription = myNumbers.subscribe(
      (num: number)=>{
        console.log(num);
      }
    );

    const myObservable: Observable<string> = Observable.create((observer: Observer<string>) =>{
      /*creating data*/
      setTimeout(()=>{
        observer.next('first package');
      },2000);
      setTimeout(()=>{
        observer.next('second package');
      },4000);
      /*setTimeout(()=>{
        observer.error('error occurred');
      },5000);*/
      setTimeout(()=>{
        observer.complete();
      },5000);
      setTimeout(()=>{
        observer.next('third package');
      },6000);
    });
    /*when subscribe, observable sending the data*/
    this.myObservableSubscription = myObservable.subscribe(
      (data: string) =>{
        console.log(data);
      },
      (error: string) =>{
        console.log(error)
      },()=>{
        console.log('completed');
      });

  }

}
