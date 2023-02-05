import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import * as geolib from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

export interface IMapProps {
    searchResults: any;
}
export function NavMap(props: IMapProps) {
    const [viewport, setViewport] = React.useState({
        latitude: 37,
        longitude: -122,
        zoom: 8,
        width: "100%",
        height: "100%",
    });

    const [selectedLocation, setSelectedLocation] = React.useState("");

    return (
        <Map
            {...viewport}
            style={{
                borderRadius: props.searchResults.length > 0 ? 0 : 10,
            }}
            mapStyle="mapbox://styles/sieunhandienquang2511/cldnjbu32000001pajyfatq5p"
            mapboxAccessToken={process.env.mapbox_key}
            onMove={(evt) =>
                setViewport({
                    ...viewport,
                    ...evt.viewState,
                })
            }
        >
            {props.searchResults.length > 0 &&
                props.searchResults.map((res: any, index: number) => {
                    return (
                        <div key={res.long}>
                            <Marker
                                longitude={-122 + res.float}
                                latitude={37 + res.float}
                                onClick={() => setSelectedLocation(res.id)}
                            >
                                <p
                                    role="img"
                                    aria-label="push-pin"
                                    className="cursor-pointer text-2xl text-white animate-bounce"
                                >
                                    📌
                                </p>
                            </Marker>

                            <Popup
                                longitude={-122 + res.float}
                                latitude={37 + res.float}
                                closeOnClick={true}
                                offset={[-10, -15]}
                                onClose={() => setSelectedLocation("")}
                            >
                                {res.title}
                            </Popup>
                        </div>
                    );
                })}
        </Map>
    );
}
