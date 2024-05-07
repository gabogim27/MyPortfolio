import { Component, OnInit } from '@angular/core';
import { GitconnectedService } from '../../core/services/gitconnected.service';
import { Basics } from '../../core/models/basics';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  basicProfile! : Basics;

  constructor(private gitconnectedService: GitconnectedService) {}

  ngOnInit(): void {
    this.gitconnectedService.getProfile().subscribe(x => {
      this.basicProfile = x.basics;
     });
  }


}
