import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-full-layout-v2',
  templateUrl: './full-layout-v2.component.html',
  styleUrls: ['./full-layout-v2.component.scss']
})
export class FullLayoutV2Component {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router:Router,private breakpointObserver: BreakpointObserver) {}

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
