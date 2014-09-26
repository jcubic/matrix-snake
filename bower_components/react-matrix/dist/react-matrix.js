!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.Matrix=r(require("react")):e.Matrix=r(e.React)}(this,function(e){return function(e){function r(i){if(s[i])return s[i].exports;var t=s[i]={exports:{},id:i,loaded:!1};return e[i].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}var s={};return r.m=e,r.c=s,r.p="",r(0)}([function(e,r,s){"use strict";s(3);var i=s(1),t=s(7),p=s(5),o=i.createClass({displayName:"Matrix",propTypes:{squareSize:i.PropTypes.number.isRequired,matrix:i.PropTypes.array.isRequired,onCellClick:i.PropTypes.func},render:function(){var e=this.props.squareSize*this.props.matrix[0].length,r=this.props.squareSize*this.props.matrix.length;return t({width:e,height:r},p({className:"Grid",onCellClick:this.props.onCellClick,matrix:this.props.matrix,squareSize:this.props.squareSize}))}});e.exports=o},function(r){r.exports=e},function(e){e.exports={linear:function(e,r){return function(s){return r[0]+(r[1]-r[0])*((s-e[0])/(e[1]-e[0]))}}}},function(){},function(e,r,s){"use strict";var i=s(1),t=i.createClass({displayName:"Cell",propTypes:{x:i.PropTypes.number.isRequired,y:i.PropTypes.number.isRequired,size:i.PropTypes.number.isRequired,state:i.PropTypes.string.isRequired,key:i.PropTypes.number.isRequired,onClick:i.PropTypes.func},handleClick:function(){this.props.onClick&&this.props.onClick({x:this.props.x/this.props.size,y:this.props.y/this.props.size,state:this.props.state})},render:function(){return i.DOM.rect({className:"Cell "+this.props.state,x:this.props.x,y:this.props.y,width:this.props.size,height:this.props.size,onClick:this.handleClick,key:this.props.key})}});e.exports=t},function(e,r,s){"use strict";var i=s(1),t=s(6),p=i.createClass({displayName:"Grid",propTypes:{matrix:i.PropTypes.array.isRequired,squareSize:i.PropTypes.number.isRequired,onCellClick:i.PropTypes.func},render:function(){var e=this.props.matrix.map(function(e,r){return t({onCellClick:this.props.onCellClick,key:r,dataRow:e,squareSize:this.props.squareSize})}.bind(this));return i.DOM.g(null,e)}});e.exports=p},function(e,r,s){"use strict";var i=s(1),t=s(2),p=s(4),o=i.createClass({displayName:"Row",propTypes:{dataRow:i.PropTypes.array.isRequired,squareSize:i.PropTypes.number.isRequired,key:i.PropTypes.number.isRequired,onCellClick:i.PropTypes.func},STATES:{0:"available",1:"barrier",2:"path",3:"pipette",4:"component"},render:function(){var e=t.linear([0,this.props.dataRow.length],[0,this.props.squareSize*this.props.dataRow.length]),r=this.props.dataRow.map(function(r,s){return p({x:e(s),y:e(this.props.key),state:this.STATES[r],size:this.props.squareSize,onClick:this.props.onCellClick,key:this.props.key+1+s})}.bind(this));return i.DOM.g({className:"Row"},r)}});e.exports=o},function(e,r,s){"use strict";var i=s(1),t=(s(2),i.createClass({displayName:"Svg",propTypes:{width:i.PropTypes.number.isRequired,height:i.PropTypes.number.isRequired},render:function(){return i.DOM.svg({width:this.props.width,height:this.props.height,className:"Matrix"},this.props.children)}}));e.exports=t}])});