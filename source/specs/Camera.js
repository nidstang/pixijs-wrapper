// @flow
import { IVector2 } from './Vector2';

export interface ICamera {
    init (position : IVector2, size : IVector2, bounds : IVector2) : void;
    center (targetPosition : IVector2, targetSize : IVector2) : void;
    getX () : Number;
    getY () : Number;
    getPositionInCameraCoords (position : IVector2) : IVector2;
}