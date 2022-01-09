export class formula{
    f=0;
    calcular(m1:number, m2:number, r:number){
        if(m1<=0 || m2<=0 || r<=0){
            return 0;
        }
        this.f=(0.0000000000667*m1*m2)/(r*r);
        return this.f;
    }
}