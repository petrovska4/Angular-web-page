import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItemsComponent } from './home-items.component';

describe('HomeItemsComponent', () => {
  let component: HomeItemsComponent;
  let fixture: ComponentFixture<HomeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
