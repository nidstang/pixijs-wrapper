// @flow
import { IVector2 } from './Vector2';

export interface Sprite {
    setPosition(position : IVector2) : void;
    getPosition() : void;
    setScale(scale : IVector2) : void;
    getScale() : IVector2;
    getDimensions() : IVector2;
    setVisible(visible : Boolean) : void;
    getVisible() : Boolean;
    setTexture() : void;

    update(deltaTime : number) : void;
    addChildSprite(child : Sprite) : void;
    removeChildSprite(child : Sprite) : void;
}
