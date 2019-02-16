export enum EstadoCoche{BUENO, MALO}

export class Coche {
    public marca:string;
    public modelo:string;
    public foto:string;
    public fecha_modelo:Date;
    public fecha_venta:Date;
    public precio:number;
    public estado:EstadoCoche;

    constructor(marca:string,modelo:string,foto:string,fecha_modelo:Date,fecha_venta:Date,precio:number,estado:EstadoCoche){
        this.marca=marca;
        this.modelo=modelo;
        this.fecha_modelo=fecha_modelo;
        this.foto=foto;
        this.fecha_venta=fecha_venta;
        this.precio=precio;
        this.estado=estado;
    }

    public rebajar(){
        this.precio *= 0.9;
    }

    public getPVP(){
        return this.precio*1.21;
    }
}
