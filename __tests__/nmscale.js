/* global describe, expect, it, jest */

import React, { createRef } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

import { Map, TileLayer } from "react-leaflet";

import NmScale from "../src/nmscale.js";
import LeafletNmScale from "../src/leafletnmscale.js";

describe("NmScale", () => {
  it("adds the scale to the map", () => {
    const scaleRef = createRef();

    const mock_updateNautical = jest.fn();
    LeafletNmScale.prototype._updateNautical = mock_updateNautical;

    renderIntoDocument(
      <Map center={[0, 0]} zoom={10}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <NmScale ref={scaleRef} />
      </Map>
    );
    expect(mock_updateNautical.mock.calls.length).toBe(1);
    expect(scaleRef.current.leafletElement.options.position).toEqual(
      "bottomleft"
    );
  });
});
