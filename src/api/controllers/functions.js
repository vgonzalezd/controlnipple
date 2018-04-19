import {myRos} from './actionCtrl';

var appuye= false;

var x=0;
var z=0;

function function1() {
    appuye= true;
    while (appuye==true) {
      x=x+0.01;
      z=z+0.01;
    };
};

function function2() {
    appuye= false;
    while (appuye==false && x>0 && z>0) {
        x=x-0.01;
        z=z-0.01;
    };
};

function function3() {
  myRos();
};
