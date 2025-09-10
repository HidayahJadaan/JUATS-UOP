import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesList } from './universities-list';

describe('UniversitiesList', () => {
  let component: UniversitiesList;
  let fixture: ComponentFixture<UniversitiesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversitiesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitiesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
