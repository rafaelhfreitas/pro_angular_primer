import { Observable, Observer, Subject } from "rxjs";
function recieveEvents(observable: Observable<string>) {
    observable.subscribe({
        next: str => {
            console.log(`Event received: ${str}`);
        },
        complete: () => console.log("Sequence ended")
    });
}
function sendEvents(observer: Observer<string>) {
    let count = 5;
    for (let i = 0; i < count; i++) {
        observer.next(`${i + 1} of ${count}`);
    }
    observer.complete();
}
let subject = new Subject<string>();
recieveEvents(subject);
sendEvents(subject);


// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
