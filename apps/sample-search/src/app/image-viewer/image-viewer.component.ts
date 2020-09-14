import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface ImageProps {
  src: string,
}

@Component({
  selector: 'example-org-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})

export class ImageViewerComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() images: ImageProps[];
  @Input() selectedImage: string;
  @Output() setSelectedImage: EventEmitter<string> = new EventEmitter();
  @Input() removeScrollLock: Function;

  getCurrentImageIndex() {
    return this.images.findIndex(({ src }) => src === this.selectedImage);
  }

  closeViewer() {
    this.setSelectedImage.emit('');
    this.removeScrollLock();
  }

  getNextImage() {
    const currentIndex = this.getCurrentImageIndex();
    if (currentIndex !== -1) {
      const nextImageIndex = currentIndex + 1 < this.images.length - 1 ? currentIndex + 1 : 0;
      this.setSelectedImage.emit(this.images[nextImageIndex].src);
    }
  }

  getPrevImage() {
    const currentIndex = this.getCurrentImageIndex();
    if (currentIndex !== -1) {
      const prevImageIndex = currentIndex - 1 > 0 ? currentIndex - 1 : this.images.length - 1;
      this.setSelectedImage.emit(this.images[prevImageIndex].src);
    }
  }
}
