webpackJsonp([1],{0:function(n,t,l){n.exports=l("cDNt")},cDNt:function(n,t,l){"use strict";function e(n){return r._16(0,[(n()(),r._15(-1,null,["\n"])),(n()(),r._3(1,0,null,null,13,"html",[],null,null,null,null,null)),(n()(),r._15(-1,null,["\n  "])),(n()(),r._3(3,0,null,null,2,"head",[],null,null,null,null,null)),(n()(),r._15(-1,null,["\n    "])),(n()(),r._15(-1,null,["\n  "])),(n()(),r._15(-1,null,["\n    "])),(n()(),r._3(7,0,null,null,6,"body",[],null,null,null,null,null)),(n()(),r._15(-1,null,["\n        "])),(n()(),r._3(9,0,null,null,1,"h1",[["align","center"],["id","container"]],null,null,null,null,null)),(n()(),r._15(-1,null,["Whats Flying !!"])),(n()(),r._15(-1,null,[" \n      "])),(n()(),r._3(12,0,null,null,0,"div",[["id","googleMap"]],null,null,null,null,null)),(n()(),r._15(-1,null,["\n  "])),(n()(),r._15(-1,null,["\n"])),(n()(),r._15(-1,null,["\n\n"]))],null,null)}function i(n){return r._16(0,[(n()(),r._3(0,0,null,null,1,"app-root",[],null,null,null,e,p)),r._1(1,114688,null,0,g,[s],null,null)],function(n,t){n(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var r=l("/oeL"),o={production:!0},u=function(){function n(){}return n}(),a=(l("GQSG"),l("CPp0")),s=function(){function n(n){this._http=n}return n.prototype.getFlights=function(){return this._http.get("https://opensky-network.org/api/states/all").map(function(n){return n.json()})},n.ctorParameters=function(){return[{type:a.d}]},n}(),c=function(){function n(){}return n}(),g=function(){function n(n){this.flightService=n,this.flightList=new Array,this.markersArray=new Array}return n.prototype.loadFlightsDetails=function(n,t){this.flightList=[],this.flights=n.states;for(var l=0,e=this.flights;l<e.length;l++){var i=e[l],r=new c;r.id=i[0],r.origin_country=i[2],r.longitude=i[5],r.latitude=i[6],r.altitude=i[7],r.on_ground=i[8],r.velocity=i[9],r.heading=i[10],r.vertical_rate=i[11],r.baro_altitude=i[13],this.flightList.push(r)}this.updateMapWithFlightList(this.flightList,t),console.log(this.flightList)},n.prototype.flightDetailsError=function(n){console.log("flight update service faileed"+n)},n.prototype.stopRefreshing=function(){this.clearMarkers()},n.prototype.updateMapWithFlightList=function(n,t){console.log("updating map with"+n.length+"flights");for(var l=0,e=n;l<e.length;l++){var i=e[l],r={lat:i.latitude,lng:i.longitude},o=new google.maps.Marker({position:r,icon:"/assets/icon18.png",map:t,title:"Flight Details: \nOrgin : "+i.origin_country+"\nAltitude : "+i.altitude+" ft \nSpeed : "+i.velocity+" mph \nVertical Speed : "+i.vertical_rate});this.markersArray.push(o)}},n.prototype.clearMarkers=function(){console.log("clearing "+this.markersArray.length+"markers from map");for(var n=0;n<this.markersArray.length;n++)this.markersArray[n].setMap(null);this.markersArray.length=0},n.prototype.updateFlights=function(n,t){var l=this;n.getFlights().subscribe(function(n){return l.loadFlightsDetails(n,t)},function(n){return l.flightDetailsError(n)},function(){return l.stopRefreshing()})},n.prototype.setCurrentLocation=function(n,t){var l={lat:t.coords.latitude,lng:t.coords.longitude};n.setCenter(l)},n.prototype.ngOnInit=function(){var n=this,t={lat:0,lng:0},l={center:t,zoom:6,fullscreenControl:!0},e=new google.maps.Map(document.getElementById("googleMap"),l);window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(null,e)),this.flightService.getFlights().subscribe(function(t){return n.loadFlightsDetails(t,e)},function(t){return n.flightDetailsError(t)},function(){return n.stopRefreshing()}),setInterval(this.updateFlights.bind(this,this.flightService,e),2e3)},n.ctorParameters=function(){return[{type:s}]},n}(),h=[""],_=["#googleMap[_ngcontent-%COMP%] {\n          height: 100%;\n          position: absolute; \n          top: 0; \n          bottom: -200px; \n          left: 0; \n          right: 0; \n          z-index: 0;\n       } \n       #container[_ngcontent-%COMP%] {\n        z-index: 100;\n        position: relative;\n      }",h],p=r._0({encapsulation:0,styles:_,data:{}}),f=r.Y("app-root",g,i,{},{},[]),d=l("qbdv"),y=l("fc+i"),v=r.Z(u,[g],function(n){return r._12([r._13(512,r.i,r.W,[[8,[f]],[3,r.i],r.x]),r._13(4608,a.c,a.c,[]),r._13(4608,a.g,a.b,[]),r._13(5120,a.i,a.j,[]),r._13(4608,a.h,a.h,[a.c,a.g,a.i]),r._13(4608,a.f,a.a,[]),r._13(5120,a.d,a.k,[a.h,a.f]),r._13(5120,r.v,r._11,[[3,r.v]]),r._13(4608,d.d,d.c,[r.v]),r._13(4608,r.h,r.h,[]),r._13(5120,r.a,r._4,[]),r._13(5120,r.t,r._9,[]),r._13(5120,r.u,r._10,[]),r._13(4608,y.b,y.s,[d.b]),r._13(6144,r.H,null,[y.b]),r._13(4608,y.e,y.f,[]),r._13(5120,y.c,function(n,t,l,e){return[new y.k(n),new y.o(t),new y.n(l,e)]},[d.b,d.b,d.b,y.e]),r._13(4608,y.d,y.d,[y.c,r.z]),r._13(135680,y.m,y.m,[d.b]),r._13(4608,y.l,y.l,[y.d,y.m]),r._13(6144,r.F,null,[y.l]),r._13(6144,y.p,null,[y.m]),r._13(4608,r.L,r.L,[r.z]),r._13(4608,y.g,y.g,[d.b]),r._13(4608,y.i,y.i,[d.b]),r._13(4608,s,s,[a.d]),r._13(512,a.e,a.e,[]),r._13(512,d.a,d.a,[]),r._13(1024,r.l,y.q,[]),r._13(1024,r.b,function(n,t){return[y.r(n,t)]},[[2,y.h],[2,r.y]]),r._13(512,r.c,r.c,[[2,r.b]]),r._13(131584,r._2,r._2,[r.z,r.X,r.r,r.l,r.i,r.c]),r._13(2048,r.e,null,[r._2]),r._13(512,r.d,r.d,[r.e]),r._13(512,y.a,y.a,[[3,y.a]]),r._13(512,u,u,[])])});o.production&&Object(r.R)(),Object(y.j)().bootstrapModuleFactory(v).catch(function(n){return console.log(n)})},gFIY:function(n,t){function l(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="gFIY"}},[0]);