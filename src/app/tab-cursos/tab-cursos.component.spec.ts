import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCursosComponent } from './tab-cursos.component';

describe('TabCursosComponent', () => {
  let component: TabCursosComponent;
  let fixture: ComponentFixture<TabCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
