import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'example-org-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})

export class LoadMoreComponent implements OnInit {
  ngOnInit(): void {}

  @Output() loadMoreEmitter = new EventEmitter();
  @Input()
  images: []

  handleLoadMoreClick() {
    this.loadMoreEmitter.emit();
  }
}
