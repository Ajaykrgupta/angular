import { Component, OnInit, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('lightsOnOff', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'red'
      })),
      //transition('off => on, on => off', [animate('2s', style({ transform: 'rotate(90deg)'}))]),
      //transition('on => off', [animate('2s')]),
      transition('off <=> on', [animate('2s', style({ transform: 'rotate(90deg)'}))]),
    ])

  ]
})
export class AnimationComponent implements OnInit {

  roomState:string = "off";  
  constructor() { }

  ngOnInit() {
  }



  ToggleLights(){
    this.roomState = (this.roomState == 'off') ? 'on' : 'off';
  }

}
