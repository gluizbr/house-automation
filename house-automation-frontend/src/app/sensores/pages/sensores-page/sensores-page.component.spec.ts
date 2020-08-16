import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SensoresPageComponent } from './sensores-page.component';

describe('SensoresPageComponent', () => {
  let component: SensoresPageComponent;
  let fixture: ComponentFixture<SensoresPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensoresPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
