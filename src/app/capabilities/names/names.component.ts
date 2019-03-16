import { Component, OnInit } from '@angular/core';
import { MindsService } from 'src/app/minds.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {

  capabs: string[];

  constructor(private _minds:MindsService) { 
  }

  public a: boolean = false;

  mid:string;
  
  toggle(mid){
    this.mid = mid;
    this.a = true;
    this._minds.getMinds()
      .subscribe(caps => {
        caps.forEach(element => {
          if (element.mindMID == this.mid) {
            this.capabs = element.capabilities;
          }
        });
      })
      document.getElementById('clearDiv').innerHTML = null;
      document.getElementById('clearDiv1').innerHTML = null;
  }

  public minds=[];

  ngOnInit() {
    this._minds.getMinds().subscribe(data => this.minds=data);
  }

  element: string;

  drag(e) {
    // alert(e)
    this.element = e.target.id
  }
  allowDrop(e) {
    e.preventDefault();
  }
  drop(e) {
    // alert(this.element)
    e.target.appendChild(document.getElementById(this.element))
  }

}
