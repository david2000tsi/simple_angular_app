import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMessageComponentComponent } from './my-message-component.component';

describe('MyMessageComponentComponent', () => {
  let component: MyMessageComponentComponent;
  let fixture: ComponentFixture<MyMessageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMessageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
