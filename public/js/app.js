$(document).ready(function(){new app($("body"))});let app=function(a){this.init(a)};app.prototype={init:function(a){let b=this;b.ele=a,b.helpPanelEle=b.ele.find("#help-panel"),b.helpPanel=new helpPanel(b.helpPanelEle),b.userRegistrationPanelEle=b.ele.find("#user-registration-panel"),b.userRegistrationPanel=new userRegistrationPanel(b.userRegistrationPanelEle)}};