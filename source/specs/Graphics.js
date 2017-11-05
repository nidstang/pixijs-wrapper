// @flow
import { Sprite } from './Sprite';
import { SpriteFactory } from './SpriteFactory';

export interface Graphics {
    init() : void;
    drawSprite(sprite : Sprite) : void;
    getSpriteFactory() : SpriteFactory;
}
