
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoviService } from 'src/app/core/servicio/covi.service';
import { Ifechas } from 'src/app/shared/interface/ifechas';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';


@Component({
  selector: 'app-espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.css']
})
export class EspanaComponent implements OnInit {

  Nfecha = Date();
  fecha: string;

  constructor(private coviService: CoviService) {

    this.fecha = formatDate(this.Nfecha, 'yyyy-MM-dd', 'en-US');
  }


  Spain: Imundo;
  entrefechas: Imundo[];

  ngOnInit(): void {

    this.devuelveSpain();

  }
  ngOnChange() {

    this.fecha = formatDate(this.Nfecha, 'yyyy-MM-dd', 'en-US');
  }

  devuelveSpain() {
    this.coviService.getAllMundo(this.fecha, 'Spain')
      .subscribe(datosmundo => {
        //let fecha="2020-11-25";
        this.Spain = datosmundo.dates[this.fecha].countries.Spain;
      })
  }
  buscaporFechas(fechas: Ifechas) {
    // console.log(fechas.fechaAnterior + " " + fechas.fechaPosterior);
    this.coviService.getAllMundoFechas(fechas.fechaAnterior, fechas.fechaPosterior, 'Spain')
      .subscribe(datosmundo => {
        //let fecha="2020-11-25";
        let listFecha = datosmundo.dates;
        //  let fechica = fechas.fechaAnterior;

        //for (let x = 0; x < listFecha.length; x++) {
        // this.entrefechas[x] = listaFecha[x];
        //   console.log(x);
        //}

        console.log(listFecha);//[fechas.fechaAnterior]);
        //console.log(this.entrefechas[1]);
        //console.log(this.entrefechas[2]);
      })
  }

}
