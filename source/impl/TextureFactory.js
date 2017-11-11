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
    const resource = PIXI.loader.resources[id];
    const texture = new Texture();
    texture.setSource(resource.data);
    return texture;
  }
}

export default TextureFactory;
