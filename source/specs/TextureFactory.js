// @flow

import { ITexture } from './Texture';
import type { TextureId, Resource } from './Types';

export interface ITextureFactory {
  load(resource : Resource, onProgress : Function, onDone : Function) : void;
  getTexture(id : TextureId) : ITexture;
}
