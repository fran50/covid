import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  Nfecha = Date();
  fecha: string;

  constructor() {
    this.fecha = formatDate(this.Nfecha, 'yyyy-MM-dd', 'en-US');
  }

  ngOnInit(): void {
  }

}
