(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{483:function(t,e,a){"use strict";a.r(e);var o=a(53),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"embedding-a-map-with-mapkit"}},[t._v("Embedding a map with MapKit")]),t._v(" "),a("p",[t._v("If you would like to display a location on a map in your application, there are only a few steps you need to take.  The first step is dragging a Map Kit View subview on to your main view.  In this example, there is also a text field that allows the user to enter an address, and a button that calls an action that will attempt to locate the input address on the map.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/EmbeddingMapKit_1.png",alt:"Embedding MapKit"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("When entering an address, you should be specific and make sure that the city name is included.")])]),t._v(" "),a("p",[t._v("Next, you must import the Map Kit library at the top of your ViewController class like this:")]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("MapKit")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("In the button action, if the text field is not empty, an instance of the CLGeocoder object is created.  Then it's method geocodeAddressString is called, passing in the address from the text field and the name of a function that will handle any geocoded addresses generated.")]),t._v(" "),a("p",[t._v("The geocodeAddressString function will attempt to  return an array of locations matching the address.  The handler function receives an array of any CLPlacemark objects generated by the geocodeAddressString method, and an error object that will be created if something goes wrong.")]),t._v(" "),a("p",[t._v("A CLPlacemark object contains information about the location found, including its latitude and longitude.  To use this location with your Map Kit object, the CLPlacemark object needs to be converted to an MKPlacemark object which contains the same information formatted for use with the Map Kit API.")]),t._v(" "),a("p",[t._v("By calling the addAnnotation method from your Map Kit object, you can pass in your MKPlacemark object in order to centre your map on the given location.  You can determine the default zoom around the marker by creating an MKCoordinateRegion object.  This is done by passing your MKPlacemark object with the width and height (in meters) to a function called MKCoordinateRegionMakeWithDistance.")]),t._v(" "),a("p",[t._v("All you need to do then is pass the MKCoordinateRegion object back to a method in your map called setRegion. The following shows the code described above.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/F2020/assets/img/EmbeddingMapKit_2.png",alt:"Embedding MapKit"}})]),t._v(" "),a("p",[t._v("This example will zoom the map to 3000 by 3000 meters, or 3km by 3km centered on what ever location it has found.")])])}),[],!1,null,null,null);e.default=n.exports}}]);