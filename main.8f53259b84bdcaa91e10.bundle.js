webpackJsonp([1],{0:function(t,n,l){t.exports=l("cDNt")},cDNt:function(t,n,l){"use strict";function e(t){return o._16(0,[(t()(),o._15(-1,null,["\n"])),(t()(),o._3(1,0,null,null,9,"html",[],null,null,null,null,null)),(t()(),o._15(-1,null,["\n    "])),(t()(),o._3(3,0,null,null,6,"body",[],null,null,null,null,null)),(t()(),o._15(-1,null,["\n        "])),(t()(),o._3(5,0,null,null,1,"h1",[["align","center"],["id","container"]],null,null,null,null,null)),(t()(),o._15(-1,null,["Whats Flying !!"])),(t()(),o._15(-1,null,["\n      "])),(t()(),o._3(8,0,null,null,0,"div",[["id","googleMap"]],null,null,null,null,null)),(t()(),o._15(-1,null,["\n  "])),(t()(),o._15(-1,null,["\n"])),(t()(),o._15(-1,null,["\n\n"]))],null,null)}function i(t){return o._16(0,[(t()(),o._3(0,0,null,null,1,"app-root",[],null,null,null,e,d)),o._1(1,114688,null,0,h,[g],null,null)],function(t,n){t(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var o=l("/oeL"),r={production:!0},u=function(){function t(){}return t}(),s=l("9fJC"),a=(l("GQSG"),l("CPp0")),g=function(){function t(t){this._http=t}return t.prototype.getFlights=function(){return this._http.get("https://opensky-network.org/api/states/all").map(function(t){return t.json()})},t.ctorParameters=function(){return[{type:a.d}]},t}(),c=function(){function t(){}return t}(),h=function(){function t(t){this.flightService=t,this.flightList=new Array,this.flightMarkers=new s.Dictionary}return t.prototype.loadFlightsDetails=function(t,n){this.flightList=[];for(var l=0,e=t.states;l<e.length;l++){var i=e[l],o=new c;o.id=i[0],o.origin_country=i[2],o.longitude=i[5],o.latitude=i[6],o.altitude=i[7],o.on_ground=i[8],o.velocity=i[9],o.heading=i[10],o.vertical_rate=i[11],o.baro_altitude=i[13],this.flightList.push(o)}this.updateMapWithFlightList(this.flightList,n)},t.prototype.flightDetailsError=function(t){console.log("flight update service failed"+t)},t.prototype.getFlightImage=function(t){return t>=337.5||t<22.5?"/whatsFlying/assets/North.png":t>=22.5&&t<67.5?"/whatsFlying/assets/NorthEast.png":t>=67.5&&t<112.5?"/whatsFlying/assets/East.png":t>=112.5&&t<157.5?"/whatsFlying/assets/SouthEast.png":t>=157.5&&t<202.5?"/whatsFlying/assets/South.png":t>=202.5&&t<247.5?"/whatsFlying/assets/SouthWest.png":t>=247.5&&t<292.5?"/whatsFlying/assets/West.png":"/whatsFlying/assets/NorthWest.png"},t.prototype.updateMapWithFlightList=function(t,n){console.log("updating map with"+t.length+"flights");for(var l=this,e=0,i=t;e<i.length;e++){var o=i[e];!function(t){if(null!=t.latitude&&null!=t.latitude){var e={lat:t.latitude,lng:t.longitude};if(l.flightMarkers.containsKey(t.id)){var i=l.flightMarkers.getValue(t.id);i.setPosition(e),l.flightMarkers.setValue(t.id,i)}else{var o=new google.maps.Marker({position:e,icon:l.getFlightImage(t.heading),map:n}),r=new google.maps.InfoWindow({content:"Orgin : "+t.origin_country+"<br /> Altitude : "+t.altitude+" ft<br />Speed : "+t.velocity+" mph <br />Vertical Speed : "+t.vertical_rate+" <br />Heading : "+t.heading+" - E"});o.addListener("click",function(){r.open(n,o)}),o.addListener("mouseover",function(){r.open(n,o)}),l.flightMarkers.setValue(t.id,o)}}}(o)}},t.prototype.updateFlights=function(t,n){var l=this;t.getFlights().subscribe(function(t){return l.loadFlightsDetails(t,n)},function(t){return l.flightDetailsError(t)})},t.prototype.setCurrentLocation=function(t,n){var l={lat:n.coords.latitude,lng:n.coords.longitude};t.setCenter(l)},t.prototype.ngOnInit=function(){var t=this,n={lat:41.8781,lng:-87.6298},l={center:n,zoom:8,fullscreenControl:!0},e=new google.maps.Map(document.getElementById("googleMap"),l);window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(null,e)),this.flightService.getFlights().subscribe(function(n){return t.loadFlightsDetails(n,e)},function(n){return t.flightDetailsError(n)}),setInterval(this.updateFlights.bind(this,this.flightService,e),2e3)},t.ctorParameters=function(){return[{type:g}]},t}(),p=["#googleMap[_ngcontent-%COMP%]{height:100%;position:absolute;top:0;bottom:-200px;left:0;right:0;z-index:0}#container[_ngcontent-%COMP%]{z-index:100;position:relative}"],_=[p],d=o._0({encapsulation:0,styles:_,data:{}}),f=o.Y("app-root",h,i,{},{},[]),y=l("qbdv"),b=l("fc+i"),v=o.Z(u,[h],function(t){return o._12([o._13(512,o.i,o.W,[[8,[f]],[3,o.i],o.x]),o._13(4608,a.c,a.c,[]),o._13(4608,a.g,a.b,[]),o._13(5120,a.i,a.j,[]),o._13(4608,a.h,a.h,[a.c,a.g,a.i]),o._13(4608,a.f,a.a,[]),o._13(5120,a.d,a.k,[a.h,a.f]),o._13(5120,o.v,o._11,[[3,o.v]]),o._13(4608,y.d,y.c,[o.v]),o._13(4608,o.h,o.h,[]),o._13(5120,o.a,o._4,[]),o._13(5120,o.t,o._9,[]),o._13(5120,o.u,o._10,[]),o._13(4608,b.b,b.s,[y.b]),o._13(6144,o.H,null,[b.b]),o._13(4608,b.e,b.f,[]),o._13(5120,b.c,function(t,n,l,e){return[new b.k(t),new b.o(n),new b.n(l,e)]},[y.b,y.b,y.b,b.e]),o._13(4608,b.d,b.d,[b.c,o.z]),o._13(135680,b.m,b.m,[y.b]),o._13(4608,b.l,b.l,[b.d,b.m]),o._13(6144,o.F,null,[b.l]),o._13(6144,b.p,null,[b.m]),o._13(4608,o.L,o.L,[o.z]),o._13(4608,b.g,b.g,[y.b]),o._13(4608,b.i,b.i,[y.b]),o._13(4608,g,g,[a.d]),o._13(512,a.e,a.e,[]),o._13(512,y.a,y.a,[]),o._13(1024,o.l,b.q,[]),o._13(1024,o.b,function(t,n){return[b.r(t,n)]},[[2,b.h],[2,o.y]]),o._13(512,o.c,o.c,[[2,o.b]]),o._13(131584,o._2,o._2,[o.z,o.X,o.r,o.l,o.i,o.c]),o._13(2048,o.e,null,[o._2]),o._13(512,o.d,o.d,[o.e]),o._13(512,b.a,b.a,[[3,b.a]]),o._13(512,u,u,[])])});r.production&&Object(o.R)(),Object(b.j)().bootstrapModuleFactory(v).catch(function(t){return console.log(t)})},gFIY:function(t,n){function l(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}l.keys=function(){return[]},l.resolve=l,t.exports=l,l.id="gFIY"}},[0]);