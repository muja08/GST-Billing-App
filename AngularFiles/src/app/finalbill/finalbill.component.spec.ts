import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalbillComponent } from './finalbill.component';

describe('FinalbillComponent', () => {
  let component: FinalbillComponent;
  let fixture: ComponentFixture<FinalbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
