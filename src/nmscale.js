// @flow
import { Control } from "leaflet";

import { MapControl, withLeaflet } from "react-leaflet";
import LeafletNmScale from "./leafletnmscale";

import type { ScaleControl } from "react-leaflet";

type LeafletElement = Control.Scale;

type Props = {
  nautical: boolean
} & ScaleControl;

class NmScale extends MapControl<LeafletElement, Props> {
  static defaultProps = {
    nautical: true,
    metric: false,
    imperial: false
  };

  createLeafletElement(props: Props): LeafletElement {
    return new LeafletNmScale(props);
  }
}

export default withLeaflet(NmScale);
