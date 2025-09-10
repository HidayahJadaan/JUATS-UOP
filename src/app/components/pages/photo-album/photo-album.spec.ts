import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbum } from './photo-album';

describe('PhotoAlbum', () => {
  let component: PhotoAlbum;
  let fixture: ComponentFixture<PhotoAlbum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoAlbum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoAlbum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
