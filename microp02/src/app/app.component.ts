
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coche,EstadoCoche } from './coche';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Concesionario Segunda mano";

  public EstadoCoche:any = EstadoCoche;

  public coches:Array<Coche> = [new Coche("BMW","I8 Coupe Hibrid","coche1.jpg",new Date(2018,1,1), new Date(2018,3,10),82990,EstadoCoche.BUENO),
                new Coche("Honda","CR-V 1.6i-DTEC Elegance 4x2","coche2.png",new Date(2014,5,11), new Date(2017,3,10),14300,EstadoCoche.MALO),
                new Coche("SEAT","Ateca","coche3.jpeg",new Date(2018,1,15), new Date(2019,2,10),19890,EstadoCoche.BUENO),
                new Coche("Renault","Mégane 1.5dCi Energy Zen 81kW","coche4.jpeg",new Date(2017,10,1), new Date(2018,3,10),14990,EstadoCoche.BUENO),
                new Coche("Toyota","Land Cruiser D-4D GX","coche5.jpeg",new Date(2016,10,1), new Date(2018,3,10),34900,EstadoCoche.MALO)];

    public filtro:string='';

    public getFiltrados():Array<number>{
      var filtrados:Array<number>=[];
      var indice:number=0;
      for(var coche of this.coches)
      {
        if (coche.marca.lastIndexOf(this.filtro, 0) === 0) filtrados.push(indice);
        indice=indice+1;
      }
    return filtrados;
    }
    
    public cmd_vender(id)
    {
      this.coches.splice(id,1);
    }
    
    public cmd_rebajar(id)
    {
      this.coches[id].rebajar(); 
  }
}
