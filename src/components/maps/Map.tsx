import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export default function ArcgisMap() {
  const viewDiv = useRef(null);

  useEffect(() => {
    const map = new Map({
      basemap: "topo-vector",
    });

    const view = new MapView({
      map: map,
      center: [-80, 35],
      zoom: 3,
      container: viewDiv.current as unknown as HTMLDivElement,
    });

    return () => {
      if (view && map) {
        view.destroy();
        map.destroy();
      }
    };
  }, [viewDiv.current]);

  return (
    <div
      ref={viewDiv}
      className="Map"
      style={{ height: 700, border: "1px solid red" }}
    ></div>
  );
}
