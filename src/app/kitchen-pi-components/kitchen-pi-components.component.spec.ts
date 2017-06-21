import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPiComponentsComponent } from './kitchen-pi-components.component';

describe('KitchenPiComponentsComponent', () => {
  let component: KitchenPiComponentsComponent;
  let fixture: ComponentFixture<KitchenPiComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenPiComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenPiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
