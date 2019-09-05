import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../trainings.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})

export class TutorialsComponent implements OnInit {
  trainings;

  constructor(
    private trainingsService: TrainingsService
  ) { }

  ngOnInit() {
    this.trainings = this.trainingsService.getTrainings();
  }
}
