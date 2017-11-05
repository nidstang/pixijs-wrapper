// @flow
import { ITexture } from './Texture';
import { Sprite } from './Sprite';

export interface SpriteFactory {
    createSprite(texture : ITexture) : Sprite;
}
