# React-Leaflet-NmScale
[![npm (scoped)](https://img.shields.io/npm/v/@marfle/react-leaflet-nmscale.svg)](https://www.npmjs.com/package/@marfle/react-leaflet-nmscale)

React nautical mile scale component for [`React-Leaflet`](https://github.com/PaulLeCam/react-leaflet)

<img width="283" alt="screenshot_nmscale" src="https://user-images.githubusercontent.com/2248637/40827407-2664d240-6586-11e8-9d37-675437f4845f.png">

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
