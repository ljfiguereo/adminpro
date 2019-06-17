import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() labelsDona: Label[] = [];
  @Input() dataDona: MultiDataSet = [];
  @Input() leyenda: string;

  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [[350, 450, 100],[50, 150, 120],[250, 130, 70],];
  // public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
