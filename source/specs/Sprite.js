// @flow
import { IVector2 } from './Vector2';
import { ITexture } from './Texture';

export interface ISprite {
    setPosition(position : IVector2) : void;
    getPosition() : IVector2;
    setScale(scale : IVector2) : void;
    getScale() : IVector2;
    getDimensions() : IVector2;
    setVisible(visible : boolean) : void;
    getVisible() : boolean;
    setTexture(texture : ITexture) : void;

    addChildSprite(child : ISprite) : void;
    removeChildSprite(child : ISprite) : void;
}
