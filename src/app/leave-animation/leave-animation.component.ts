import { Component, OnInit, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';

@Component({
  selector: 'app-leave-animation',
  templateUrl: './leave-animation.component.html',
  styleUrls: ['./leave-animation.component.css'],
  animations: [
    trigger('flyInOut',[
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate('1s')   
      ]),
      transition('* => void', [
        animate('1s', style({ transform: 'translateX(100%)'}))   
      ]),
    ]),
    trigger('flyMulInOut',[
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))   
      ]),
      transition('* => void', [
        animate(1000, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))   
      ])
    ])
  ]
})
export class LeaveAnimationComponent implements OnInit {

  showDiv:boolean = true;
  showMulDiv:boolean = true;
  constructor() { }

  ngOnInit() {
    
  }

  toggleDiv(){
    this.showDiv = this.showDiv ? false : true;
  }
  toggleMulDiv(){
    this.showMulDiv = this.showMulDiv ? false : true;
  }

}
