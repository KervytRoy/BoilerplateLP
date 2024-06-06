import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { InformationCardComponent } from '../information-card/information-card.component';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [MatGridListModule, InformationCardComponent],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  colsFirstGrid = 2;
  colsSecondGrid = 3;
  heightRowFirstGrid = "300px";

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.colsFirstGrid = 1;
          this.colsSecondGrid = 1;
        } else {
          this.colsFirstGrid = 2;
          this.colsSecondGrid = 3;
          this.heightRowFirstGrid = "400px"
        }
      });
  }
}
