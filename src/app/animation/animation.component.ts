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
      //transition('off <=> on', [animate('2s', style({ transform: 'rotate(90deg)'}))]),
      transition('off => on', [animate('2000ms 3s ease-in', style({ transform: 'rotate(90deg)'}))]),
      transition('on => off', [animate('2s ease-out', style({ transform: 'rotate(-90deg)'}))]),
    ]),

    trigger('heightTrigger', [
      state('noHeight', style({
        height: 0
      })),
      state('fullHeight', style({
        height:'*'
      })),
      transition('noHeight <=> fullHeight', [animate('2000ms')])
    ]),
    trigger('groupTrigger', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'red'
      })),
      transition('off => on', [ group([
        animate('4s ease-in', style({ transform: 'rotate(90deg)',})),
        animate('2s ease-out', style({width:'50px'}))
      ])]),
      transition('on => off', [ group([
        animate('3s 1s ease-in', style({ transform: 'rotate(360deg)',})),
        animate('4s', style({opacity:0}))
      ])])
    ])

  ]
})
export class AnimationComponent implements OnInit {

  roomState:string = "off";
  heightState:string = "fullHeight";  
  constructor() { }

  ngOnInit() {
  }



  ToggleLights(){
    this.roomState = (this.roomState == 'off') ? 'on' : 'off';
  }

  ToggleHeight(){
    this.heightState = (this.heightState == 'noHeight') ? 'fullHeight' : 'noHeight';
  }

  animationStarted(event:any){
    console.log('Start Animation');
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
  }

  animationDone(event:any){
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log('Done Animation');
  }

}
