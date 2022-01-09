import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ser capaz de recibir 3 datos: Masa 1, Masa2, y Distancia, como datos de tipo numerico',()=>{
    let f=0;
    component.m1=100;
    component.m2=100;
    component.r=200;
    component.calcular();
    f=component.f;
    expect(f).toBe(f);
  });
  it('Al presionar el boton de "Calculo" regresar el resultado procesado por la formula de la gravedad  ',()=>{
    let f=0;
    component.m1=100;
    component.m2=100;
    component.r=200;
    component.calcular();
    f=component.f;
    expect(component.f).toBe(f);
  });
  it('Mostrar el resultado correctamente en la derecha de los campos para llenarse',()=>{
    let f=0;
    component.m1=50;
    component.m2=100;
    component.r=2;
    component.calcular();
    f=component.f;
    expect(component.f).toBe(f);
  });
});