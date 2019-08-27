import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderAdminComponent } from './edit-order-admin.component';

describe('EditOrderAdminComponent', () => {
  let component: EditOrderAdminComponent;
  let fixture: ComponentFixture<EditOrderAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrderAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
