import * as React from 'react';
import { render } from '@testing-library/react';

import { MapContainer, TileLayer } from 'react-leaflet';

import { NmScale } from '../src/nmscale';

describe('NmScale', () => {
  it('adds the scale to the map', () => {
    const { container } = render(
      <MapContainer center={[0, 0]} zoom={10}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <NmScale />
      </MapContainer>
    );

    const scalediv = container.querySelector('.leaflet-control-scale');
    expect(scalediv).not.toBe(null);
  });

  it('removes the scale when unmounted', () => {
    const Component = ({ mount = true }: { mount: boolean }) => (
      <MapContainer center={[0, 0]} zoom={10}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mount ? <NmScale /> : null}
      </MapContainer>
    );

    const { rerender, container } = render(<Component mount={true} />);
    rerender(<Component mount={false} />);

    const scalediv = container.querySelector('.leaflet-control-scale');
    expect(scalediv).toBe(null);
  });
});
