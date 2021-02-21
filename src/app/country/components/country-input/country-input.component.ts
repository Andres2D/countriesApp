import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( term => {
      this.onDebunce.emit(term);
    });
  }
  
  Search(){
    this.onEnter.emit(this.term);
  }

  KeyPress(){
    this.debouncer.next( this.term );
  }
}
