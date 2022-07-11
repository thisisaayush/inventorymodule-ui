import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientMgmtComponent } from './ingredient-mgmt.component';

describe('IngredientMgmtComponent', () => {
  let component: IngredientMgmtComponent;
  let fixture: ComponentFixture<IngredientMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
