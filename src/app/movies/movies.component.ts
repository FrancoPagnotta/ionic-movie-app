import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MoviesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
