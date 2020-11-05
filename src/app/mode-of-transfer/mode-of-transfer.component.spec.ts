import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeOfTransferComponent } from './mode-of-transfer.component';

describe('ModeOfTransferComponent', () => {
  let component: ModeOfTransferComponent;
  let fixture: ComponentFixture<ModeOfTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeOfTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeOfTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
