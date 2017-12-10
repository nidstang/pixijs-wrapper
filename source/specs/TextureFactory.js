// @flow

import { ITexture } from './Texture';
import type { TextureId, Resource } from './Types';

export interface ITextureFactory {
  load(resources : Array<Resource>, onProgress : Function, onDone : Function) : void;
  getTexture(id : TextureId) : ITexture;
}
