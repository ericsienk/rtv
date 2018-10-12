import { Video } from './../services/channel.service';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmbedService } from '../services/embed.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnChanges {

    @Input() video: Video;
    private iframeScreen: string;
    
    constructor(private embedService: EmbedService) {}

    ngOnChanges(changes: SimpleChanges) {
    if (this.video && this.video.url) {
            this.iframeScreen = this.embedService.embed(this.video.url, { attr: { height: '100%', width: '100%' } });
    } else {
        this.iframeScreen = 'Loading...';
      }
  }

}
