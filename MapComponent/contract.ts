export interface LatlngCoords {
  lat: number;
  lng: number;
}

export interface MapComponentProps {
  positionConstraintPosition: LatlngCoords;
}

export type MapFunctionComponent = React.FC<MapComponentProps>;
