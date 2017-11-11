// @flow
import { ISpriteFactory } from '@/specs/SpriteFactory';
import { ISprite } from '@/specs/Sprite';
import { ITexture } from '@/specs/Texture';
import Sprite from './Sprite';

class SpriteFactory implements ISpriteFactory {
  createSprite(texture : ITexture) : ISprite {
    return new Sprite(texture);
  }
}

export default SpriteFactory;
