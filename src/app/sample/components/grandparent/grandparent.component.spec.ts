import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandparentComponent } from './grandparent.component';

describe('GrandparentComponent', () => {
  let component: GrandparentComponent;
  let fixture: ComponentFixture<GrandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
