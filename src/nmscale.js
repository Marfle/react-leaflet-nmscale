// @flow
import { MapControl, withLeaflet } from "react-leaflet";
import LeafletNmScale from "./leafletnmscale";

import type { MapControlProps } from "react-leaflet";

type LeafletElement = LeafletNmScale;

type Props = {
  nautical?: boolean,
  imperial?: boolean,
  maxWidth?: number,
  metric?: boolean,
  updateWhenIdle?: boolean
} & MapControlProps;

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
