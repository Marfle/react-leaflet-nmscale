/* global describe, expect, it, jest */

import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

import { MapContainer, TileLayer } from 'react-leaflet';

import NmScale from '../src/nmscale';
import LeafletNmScale from '../src/leafletnmscale';

describe('NmScale', () => {
  it('adds the scale to the map', (done) => {
    const spy_updateNautical = jest.spyOn(
      LeafletNmScale.prototype,
      '_updateNautical'
    );
    renderIntoDocument(
      <MapContainer
        center={[0, 0]}
        zoom={10}
        whenCreated={() => {
          expect(spy_updateNautical).toHaveBeenCalledTimes(1);
          done();
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <NmScale />
      </MapContainer>
    );
  });
});
