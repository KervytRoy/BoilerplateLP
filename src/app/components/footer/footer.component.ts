import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  colsFirstGrid = 2;
  colsSecondGrid = 3;
  heightRowFirstGrid = "270px";
  isMobileView = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobileView = state.matches;
        if (this.isMobileView) {
          this.colsFirstGrid = 1;
          this.colsSecondGrid = 1;
        } else {
          this.colsFirstGrid = 2;
          this.colsSecondGrid = 3;
          this.heightRowFirstGrid = "400px";
        }
      });
  }
}
