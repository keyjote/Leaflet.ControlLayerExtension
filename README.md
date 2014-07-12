Leaflet.ControlLayerExtension
=============================

It is a simple extension on ghte L.control.layer controller which will allow the developer to switch between layers programatically when needed

This extention only has two funtions:
* Switch to layer by name **(picklayer(layerName)**
* Switch to layer by position **(picklayerByPosition(number)**

## Example code:

    // initialize it like you would the standard controls layer
    var layerControl = L.controlLayerExt(baseLayers, overlays);
    // OR
    //var layerControl = new L.ControlLayerExt(baseLayers, overlays);
    layerControl.addTo(map);
    
    ...
    ...

    // to change to layer called 'myMap3'
    layerControl.pickLayer('myMap3');
    // the method is case sensitive, so the line bellow would do nothing
    layerControl.pickLayer('mymap3'); // FAIL

    // to jump to the the first layer
    layerControl.picklayerByPosition(0);


## Supported versions

I have tested successfully with the following Leaflet versions:

* 0.4.5
* 0.6.4
* 0.7.1
* 0.7.2
* 0.7.3

