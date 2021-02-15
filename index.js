const extend = require('xtend');
const csv2geojson = require('csv2geojson');
const kml2geojson = require('@mapbox/togeojson');
const shp2geojson = require('shapefile');

/**
 * A simple drag and drop component built to be used with Mapbox basemaps. The `type` of data (point, line, & polygon) is auto determined
 * @class MapboxGlDragAndDrop
 * @param {Object} options
 * @param {String} [options.containerId]='#SampleId'
 * @param {Boolean} [options.zoomTo=true]
 * @param {Object} [options.data]
 * @param {Boolean} [options.data.geojson=true]
 * @param {Boolean} [options.data.csv=false]
 * @param {Boolean} [options.data.kml=false]
 * @param {Boolean} [options.data.shapefile=false]
 * @example
 * var dragAndDrop = new MapboxGlDragAndDrop({
 *   mapId: "map",
 *   data: {
 *     geojson: true
 *   }
 * });
 * @return {MapboxGlDragAndDrop} `this`
 *
 */

function MapboxGlDragAndDrop(options) {
  this.options = extend({}, this.options, options);
}

// Used as default settings
MapboxGlDragAndDrop.prototype = {
  containerId: "map",
  zoomTo: true,
  data: {
    geojson: true,
    csv: true,
    kml: true,
    shapefile: true
  },

}

module.exports = MapboxGlDragAndDrop;
