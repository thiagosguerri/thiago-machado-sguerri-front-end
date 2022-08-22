import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLivroComponent } from './alterar-livro.component';

describe('AlterarLivroComponent', () => {
  let component: AlterarLivroComponent;
  let fixture: ComponentFixture<AlterarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
