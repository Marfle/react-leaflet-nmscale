import LeafletNmScale from './leafletnmscale';
import { createControlComponent } from '@react-leaflet/core';

function createNmScaleControl(props) {
  const {
    nautical = true,
    imperial = false,
    metric = false,
    ...restProps
  } = props;
  return new LeafletNmScale({ nautical, imperial, metric, ...restProps });
}

const NmScale = createControlComponent(createNmScaleControl);

export default NmScale;
