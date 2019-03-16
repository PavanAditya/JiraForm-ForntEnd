import { Component, OnInit, Input } from '@angular/core';
import { MindsService } from 'src/app/minds.service';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.scss']
})
export class StatusesComponent implements OnInit {

  @Input()
  mid: string;
  capabs: string[];
  constructor(private _mindsService: MindsService) {
    this._mindsService.getMinds()
      .subscribe(caps => {
        caps.forEach(element => {
          if (element.mindMID == this.mid) {
            this.capabs = element.capabilities;
          }
        });
      })
  }

  ngOnInit() {
  }

  element: string;

  drag(e) {
    this.element = e.target.id
  }
  allowDrop(e) {
    e.preventDefault();
  }
  drop(e) {
    alert(this.element)
    e.target.appendChild(document.getElementById(this.element))
  }

}
