import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'example-org-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss']
})
export class TileGridComponent implements OnInit {
  ngOnInit(): void {}

  @Input()
  images: []
}
