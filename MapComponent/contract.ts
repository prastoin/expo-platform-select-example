export interface LatlngCoords {
  lat: number;
  lng: number;
}

export interface MapComponentProps {
  defaultMapCenterCoords: LatlngCoords;
}

export type MapFunctionComponent = React.FC<MapComponentProps>;
