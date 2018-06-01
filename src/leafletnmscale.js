//@flow
import { Control, DomUtil } from "leaflet";

const LeafletScaleControl = Control.Scale.extend({
  _addScales: function(options, className, container) {
    Control.Scale.prototype._addScales.call(
      this,
      options,
      className,
      container
    );

    if (options.nautical) {
      this._nScale = DomUtil.create("div", className, container);
    }
  },

  _updateScales: function(maxMeters) {
    Control.Scale.prototype._updateScales.call(this, maxMeters);
    if (this.options.nautical && maxMeters) {
      this._updateNautical(maxMeters);
    }
  },

  _updateNautical: function(maxMeters) {
    const maxNm = maxMeters / 1852;

    let nm;
    if (maxMeters < 185) {
      nm = Math.round(maxNm * 100) / 100;
    } else if (maxMeters < 1852) {
      nm = Math.round(maxNm * 10) / 10;
    } else {
      nm = this._getRoundNum(maxNm);
    }
    let label = nm + "nm";

    this._updateScale(this._nScale, label, nm / maxNm);
  }
});

export default LeafletScaleControl;
