# React-Leaflet-NmScale

React nautical mile component for [`React-Leaflet`](https://github.com/PaulLeCam/react-leaflet)

## Install

```bash
npm install @marfle/react-leaflet-nmscale
```

## Usage

Import:
```javascript
import { Map, TileLayer } from "react-leaflet";
import NmScale from "@marfle/react-leaflet-nmscale";
```

Use:
```jsx
<Map center={[0, 0]} zoom={10}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <TileLayer
    url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png" />
  <NmScale />
</Map>
```


## License

MIT
See [LICENSE](LICENSE) file.

## About us

[Marfle](https://www.marfle.com) makes software for workboat fleets
