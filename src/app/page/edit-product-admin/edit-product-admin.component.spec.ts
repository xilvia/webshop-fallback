import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductAdminComponent } from './edit-product-admin.component';

describe('EditProductAdminComponent', () => {
  let component: EditProductAdminComponent;
  let fixture: ComponentFixture<EditProductAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
