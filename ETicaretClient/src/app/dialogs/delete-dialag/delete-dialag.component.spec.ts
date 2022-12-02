import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialagComponent } from './delete-dialag.component';

describe('DeleteDialagComponent', () => {
  let component: DeleteDialagComponent;
  let fixture: ComponentFixture<DeleteDialagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
