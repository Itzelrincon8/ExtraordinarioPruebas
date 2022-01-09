import {formula} from './test';

describe ('Calcular',() => {
    let frmla: formula;
    let f: number;
    beforeEach(()=>{
        frmla= new formula();
    });
    
    it(' las dos masas deben ser numeros positivos, si no es asi regresa 0 de resultado',() =>{  
        f=frmla.calcular(-5, 25, 0);
        expect(f).toBe(0);
    });
    it('la distancia debe ser un numero positivo, si no es asi regresa 0 de resultado',() =>{  
        f=frmla.calcular(50, 120, -5);
        expect(f).toBe(0);
    });
    it('si la masa de alguna de las 2 masas es 0 al igual que la distancia entre ellas, retornar 0 de resultado',() =>{  
        f=frmla.calcular(0,0,0);
        expect(f).toBe(0);
    });
    it('si la masa 1 es 10 y la masa 2 de 20, y la distancia entre ellas es de 5 metros, el resultado debe ser 0.0000000005336',() =>{  
        f=frmla.calcular(10,20,5);
        expect(f).toBe(0.0000000005336);
    });
});