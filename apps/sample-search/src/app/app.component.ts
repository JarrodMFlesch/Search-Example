import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Renderer2, SimpleChanges } from '@angular/core';

interface TileImage {
  src: string,
  alt: string,
}

@Component({
  selector: 'example-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ){}

  images = [];
  query = '';
  perPage = 25;
  pageNumber = 1;
  imageType = 'photo';
  selectedImage = '';
  pixabayAPIKey = '';

  async getPixaBayImages() {
    if (this.pixabayAPIKey === '') {
      alert('The Pixabay API Key is missing and is needed in the AppComponent.');
    } else {
      const res = await fetch(`https://pixabay.com/api?key=${this.pixabayAPIKey}&q=${this.query}&per_page=${this.perPage}&page=${this.pageNumber}&image_type${this.imageType}`);
      const { hits } = await res.json();

      return hits.reduce((acc: [TileImage], hit: any) => {
        acc.push({
          src: hit.webformatURL,
          alt: hit.tags,
        });

        return acc;
      }, []);
    }
  }

  async fetchAndSetImages() {
    const fetchedImages = await this.getPixaBayImages();
    this.images = [
      ...this.images,
      ...fetchedImages,
    ];
  }

  async searchByQuery(query: string) {
    this.query = query;
    const fetchedImages = await this.getPixaBayImages();
    this.images = fetchedImages;
  }

  loadImages() {
    this.pageNumber = this.pageNumber + 1;
    this.fetchAndSetImages();
  }

  setSelectedImage(src: string) {
    this.selectedImage = src;
  }

  removeScrollLock = () => {
    this.renderer.removeClass(this.document.body, 'overflow-hidden');
  }

  addScrollLock() {
    this.renderer.addClass(this.document.body, 'overflow-hidden');
  }

  @HostListener('tile-image-click', ['$event.detail']) onTileImageClick(event) {
    this.selectedImage = event.src;
    this.addScrollLock();
  };
}
