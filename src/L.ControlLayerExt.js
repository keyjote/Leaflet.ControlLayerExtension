/*
 * L.ControlLayerExt is an extention for the L.control.layer, this will allow the controller to select different layers programatically.
 */

L.ControlLayerExt = L.Control.Layers.extend({
    
    pickLayer: function (layerName) {
        var layerId = 0;

        for(var i in this._layers) {
            if (this._layers[i].name == layerName) {
                layerId = i;
                break;
            }
        }

        if (layerId != 0) {
            var elements = this._form.elements;
            for(var index in elements) {
                if (elements[index] != null && elements[index].layerId == layerId) {
                    elements[index].click();
                    return;
                }
            }
        }
    },

    pickLayerByPosition: function (layerPos) {
        if (isNaN(layerPos) || layerPos < 0) {
            return;
        }

        var elements = this._form.elements;
        if (layerPos < elements.length) {
            elements[layerPos].click();
            return;
        }
    },
});

L.controlLayerExt = function (baseLayers, overlays, options) {
	return new L.ControlLayerExt(baseLayers, overlays, options);
};
