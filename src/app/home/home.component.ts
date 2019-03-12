import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  url: string = 'https://www.youtube.com/watch?v=8hKscdTX20s';
  pattern = '^(http(s)??\:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+$';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  fetchVideo() {
    console.log('fetchVideo', this.url);
    this.api.test().subscribe(console.log);
  }

}
