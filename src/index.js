import _ from 'lodash';
import './style.css';
import Data from './data.xml'
var Icon = require('./Icon.jpg');
function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack','&#xe91b;'], ' ');
    element.classList.add('hello');
    
    // 将图像添加到现有DIV
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data)
  
    return element;
  }
  
  document.body.appendChild(component());