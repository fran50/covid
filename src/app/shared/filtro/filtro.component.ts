import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ifechas } from 'src/app/shared/interface/ifechas';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  Nfecha = Date.now();
  fecha: string;
  fecha2: string;
  wiwi: string;
  semanaEnMilisegundos = 1000 * 60 * 60 * 24 * 7;
  listadoF = {
    fechaAnterior: "",
    fechaPosterior: ""
  }
  //listadoF: Ifechas


  @Output() fechas: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.Nfecha
    this.fecha = formatDate(this.Nfecha, 'yyyy-MM-dd', 'en-US');
    this.Nfecha -= this.semanaEnMilisegundos;
    this.fecha2 = formatDate(this.Nfecha, 'yyyy-MM-dd', 'en-US');
    this.listadoF.fechaAnterior = "";
    this.listadoF.fechaPosterior = "";
  }

  ngOnInit(): void {
  }

  mandarFecha(fechaA: string, fechaP: string) {

    this.listadoF.fechaAnterior = fechaA;
    this.listadoF.fechaPosterior = fechaP;
    this.wiwi = this.listadoF.fechaAnterior;
    this.fechas.emit(this.listadoF);
  };

}
