import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TracksService } from 'src/app/tracks.service';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _addTracks: TracksService, private _fb: FormBuilder, private _router: Router) { }

  tracks = new FormGroup({
    trackName: new FormControl(''),
    koS: this._fb.array([
      this._fb.control('')
    ])
  })

  get koS(){
    return this.tracks.get('koS') as FormArray;
  }

  addkoS(){
    this.koS.push(this._fb.control(''))
  }

  ngOnInit() {
  }

  defaultValue(){
    this.tracks.reset();
    this.tracks.setControl('koS', this._fb.array(['']));
  }

  onSubmit() {
    alert(this.tracks.value.trackName + ' is added to Jira');
    this._addTracks.postTracks(this.tracks.value)
    .subscribe(data => console.log(data + "entered Successfully!"));
    this.defaultValue()
    // this._router.navigate(['']);
  }

}
