import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPiPanelComponent } from './kitchen-pi-panel.component';

describe('KitchenPiPanelComponent', () => {
  let component: KitchenPiPanelComponent;
  let fixture: ComponentFixture<KitchenPiPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenPiPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenPiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
