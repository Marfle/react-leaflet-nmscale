/* eslint @typescript-eslint/ban-ts-comment: "warn" */
// @ts-ignore
import LeafletNmScale from './leafletnmscale';
import { createControlComponent } from '@react-leaflet/core';
import type { Control } from 'leaflet';

interface NmScaleProps extends Control.ScaleOptions {
  nautical?: boolean;
}

function createNmScaleControl(props: NmScaleProps) {
  const {
    nautical = true,
    imperial = false,
    metric = false,
    ...restProps
  } = props;
  return new LeafletNmScale({ nautical, imperial, metric, ...restProps });
}

const NmScale = createControlComponent<LeafletNmScale, NmScaleProps>(
  createNmScaleControl
);

export default NmScale;
