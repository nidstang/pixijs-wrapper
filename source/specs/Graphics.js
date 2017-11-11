// @flow
import { ISprite } from './Sprite';
import { ISpriteFactory } from './SpriteFactory';
import { IVector2 } from './Vector2';
import type { TextureId } from './Types';

export interface IGraphics {
    init(size: IVector2, view : HTMLCanvasElement, options : Object) : void;
    drawSprite(sprite : ISprite) : void;
    getSpriteFactory() : ISpriteFactory;
    render() : void;
    getSprite(textureId: TextureId) : ISprite;
}
