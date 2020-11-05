import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgsfundTransferComponent } from './rtgsfund-transfer.component';

describe('RtgsfundTransferComponent', () => {
  let component: RtgsfundTransferComponent;
  let fixture: ComponentFixture<RtgsfundTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtgsfundTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtgsfundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
