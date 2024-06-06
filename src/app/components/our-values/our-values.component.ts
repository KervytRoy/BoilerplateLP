import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent implements OnInit {
  colsFirstGrid = 2;
  colsSecondGrid = 3;
  heightRowFirstGrid = "400px";
  isMobileView = false;

  values = [
    {
      icon: 'star',
      title: 'Excelencia',
      subtitle: 'Nos comprometemos a mantener los más altos estándares de calidad en todo lo que hacemos, desde la asesoría hasta la implementación de las soluciones.'
    },
    {
      icon: 'groups',
      title: 'Colaboración',
      subtitle: 'Valoramos el trabajo en equipo y la colaboración con nuestros clientes para alcanzar resultados óptimos y satisfacer sus necesidades de manera integral.'
    },
    {
      icon: 'rocket_launch',
      title: 'Innovación',
      subtitle: 'Buscamos constantemente nuevas formas de mejorar los procesos y ofrecer soluciones avanzadas que impulsen el progreso de la industria del concreto.'
    },
    {
      icon: 'handshake',
      title: 'Compromiso',
      subtitle: 'Estamos comprometidos con el éxito y la satisfacción de nuestros clientes, brindando un servicio excepcional y cumpliendo con nuestras promesas de venta.'
    },
    {
      icon: 'diversity_3',
      title: 'Sostenibilidad',
      subtitle: 'Nos preocupamos por el medio ambiente y nos esforzamos en promover prácticas sostenibles en la producción de concreto, minimizando así el impacto en el entorno.'
    },
    {
      icon: 'favorite',
      title: 'Integridad',
      subtitle: 'Actuamos siempre con honestidad, transparencia y ética en todas nuestras relaciones comerciales y decisiones empresariales.'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobileView = state.matches;
        if (this.isMobileView) {
          this.colsFirstGrid = 1;
          this.colsSecondGrid = 1;
          this.heightRowFirstGrid = "auto";
        } else {
          this.colsFirstGrid = 2;
          this.colsSecondGrid = 3;
          this.heightRowFirstGrid = "100%";
        }
      });
  }
}
