import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpsfundTransferComponent } from './impsfund-transfer.component';

describe('ImpsfundTransferComponent', () => {
  let component: ImpsfundTransferComponent;
  let fixture: ComponentFixture<ImpsfundTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpsfundTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpsfundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
