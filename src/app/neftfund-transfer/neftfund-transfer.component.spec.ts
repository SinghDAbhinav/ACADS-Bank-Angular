import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeftfundTransferComponent } from './neftfund-transfer.component';

describe('NeftfundTransferComponent', () => {
  let component: NeftfundTransferComponent;
  let fixture: ComponentFixture<NeftfundTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeftfundTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeftfundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
