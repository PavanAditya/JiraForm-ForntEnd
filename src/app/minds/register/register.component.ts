import { Component, OnInit } from '@angular/core';
import { MindsService } from '../../minds.service';
import { FormGroup, FormControl, FormBuilder, FormArray, DefaultValueAccessor } from '@angular/forms';
import { TracksService } from 'src/app/tracks.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  tracks: string[] = [];
  default: string = '';

  minds = new FormGroup({
    mindName: new FormControl(''),
    mindMID: new FormControl(''),
    mindTrack: new FormControl(null),
    // capabilities: new FormControl(null)
    capabilities: this._fb.array([])
  })

  get capabilities() {
    return this.minds.get('capabilities') as FormArray;
  }

  addcapabilities() {
    this.capabilities.push(this._fb.control(''))
  }

  constructor(private _addMinds: MindsService, private _fb: FormBuilder, private _tracksService: TracksService) {
    this._tracksService.getTracks()
    .subscribe(caps => {
      caps.forEach(element => {
        this.tracks.push(element.trackName);
      });
    })
    this.minds.controls['mindTrack'].setValue(this.default, { onlySelf: true });
  }

  loadCaps(){
    this._tracksService.getTrackWithName(this.minds.value)
      .subscribe(caps => {
        caps = JSON.parse(JSON.stringify(caps));
        console.log(caps[0].koS)
        this.minds.setControl('capabilities', this._fb.array(caps[0].koS));
        // console.log(this.minds.value, "JTDTGFDYHGUJFU")
        // console.log("Capabilities retreived Successfully!")
      });
  }

  ngOnInit() {
  }

  defaultValue(){
    this.minds.reset();
    // this.minds.setControl('capabilities', this._fb.array(['']));
  }

  onSubmit() {
    // this.loadCaps()
    alert(this.minds.value.mindName + ' is registered as Campus Mind');
      this._addMinds.postMinds(this.minds.value)
      .subscribe(data => console.log(data));
      this.defaultValue()
    // this._router.navigate(['']);
  }

}
