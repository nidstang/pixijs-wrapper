// @flow
import { IVector2 } from './Vector2';

export interface Entity {
    setPosition(position : IVector2) : void;
    getPosition() : IVector2;
    setScale(scala : IVector2) : void;
    getScale() : IVector2;
}
