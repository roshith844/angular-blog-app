import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterNavbarComponent } from './writer-navbar.component';

describe('WriterNavbarComponent', () => {
  let component: WriterNavbarComponent;
  let fixture: ComponentFixture<WriterNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
