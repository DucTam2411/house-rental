import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import * as geolib from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

export interface IMapProps {
    searchResults: any;
}
export function NavMap(props: IMapProps) {
    const HCM_coordinates = {
        latitude: 10.8106,
        longitude: 106.7091,
    };
    const [viewport, setViewport] = React.useState({
        ...HCM_coordinates,
        zoom: 12,
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
                                longitude={
                                    HCM_coordinates.longitude + res.float
                                }
                                latitude={HCM_coordinates.latitude + res.float}
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
                                longitude={
                                    HCM_coordinates.longitude + res.float
                                }
                                latitude={HCM_coordinates.latitude + res.float}
                                closeOnClick={true}
                                // offset={[-10, -15]}
                                onClose={() => setSelectedLocation("")}
                            >
                                {res.location}
                            </Popup>
                        </div>
                    );
                })}
        </Map>
    );
}
