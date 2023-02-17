import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Scalebar from "@arcgis/core/widgets/ScaleBar";
import Home from "@arcgis/core/widgets/Home";
import Compass from "@arcgis/core/widgets/Compass";
import LayerList from "@arcgis/core/widgets/LayerList";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

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

    const scalebar = new Scalebar({
      view: view,
      unit: "metric",
    });

    const home = new Home({
      view: view,
    });
    view.ui.add(home, "top-right");

    const compass = new Compass({
      view: view,
    });

    view.ui.add(compass, "top-right");

    const layerList = new LayerList({
      view: view,
    });
    const basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "hybrid",
    });

    // view.ui.add(scalebar, "bottom-left");

    // view.ui.add(compass, "top-left");
    // view.ui.add(layerList, "top-left");
    // view.ui.add(basemapToggle, "top-left");

    return () => {
      if (view && map) {
        view.destroy();
        map.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={viewDiv}
      className="Map"
      style={{ height: 1000, border: "1px solid red" }}
    ></div>
  );
}
