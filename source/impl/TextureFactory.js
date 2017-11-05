// @flow

import * as PIXI from 'pixi.js';
import { ITexture } from '@/specs/Texture';
import { ITextureFactory } from '@/specs/TextureFactory';
import type { Resource, TextureId } from '@/specs/Types';
import Texture from './Texture';

class TextureFactory implements ITextureFactory {
  loaded : boolean;

  load(resource : Resource, onProgress : Function, onDone : Function) : void {
    PIXI.loader
      .add(resource)
      .on('progress', onProgress)
      .load(() => {
        this.loaded = true;
        onDone();
      });
  }

  getTexture(id : TextureId) : ITexture {
    const pixiTexture = PIXI.loader.resources[id];
    return new Texture(pixiTexture);
  }
}

export default TextureFactory;
