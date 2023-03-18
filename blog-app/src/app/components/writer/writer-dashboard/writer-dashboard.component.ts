import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { WriterDashboardService } from 'src/app/services/writer/dashboard/writer-dashboard.service';

@Component({
  selector: 'app-writer-dashboard',
  templateUrl: './writer-dashboard.component.html',
  styleUrls: ['./writer-dashboard.component.css']
})
export class WriterDashboardComponent {
  statusCount = { "published": 0, "rejected": 0, "pending": 0 }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  constructor(private writerDashboardService:  WriterDashboardService ) { }
  ngOnInit(): void {
    this.writerDashboardService.getStatistics().subscribe((response: any) => {
      console.log(response)
      this.statusCount.published = Number(response.statusCount.published)
      this.statusCount.rejected = Number(response.statusCount.rejected)
      this.statusCount.pending = Number(response.statusCount.pending)

      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [
            'pending',
            'Published',
            'rejected'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [this.statusCount.pending, this.statusCount.published, this.statusCount.rejected],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ]
          }]
        }
      });
    })
  }
}
