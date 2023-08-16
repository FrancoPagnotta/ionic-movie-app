import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MovieComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
