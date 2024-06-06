import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlayersComponent } from './flayers.component';

describe('FlayersComponent', () => {
  let component: FlayersComponent;
  let fixture: ComponentFixture<FlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
