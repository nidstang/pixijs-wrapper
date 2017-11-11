// @flow
import { ITexture } from './Texture';
import { ISprite } from './Sprite';

export interface ISpriteFactory {
    createSprite(texture : ITexture) : ISprite;
}
