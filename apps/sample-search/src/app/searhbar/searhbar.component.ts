import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'example-org-searhbar',
  templateUrl: './searhbar.component.html',
  styleUrls: ['./searhbar.component.scss']
})

export class SearhbarComponent implements OnInit {
  ngOnInit(): void {}

  @Output() searchByQueryEmitter = new EventEmitter<string>();

  async onSubmit(f: NgForm) {
    this.searchByQueryEmitter.emit(f.form.value.searchbox);
  }
}
