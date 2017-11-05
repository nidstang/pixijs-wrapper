// @flow

import * as PIXI from 'pixi.js';
import { ITexture } from '@/specs/Texture';

class Texture implements ITexture {
  pixiTexture : PIXI.Texture;

  constructor(pixiTexture : PIXI.Texture, rectangle : PIXI.Rectangle = null) {
    this.pixiTexture = pixiTexture;
    if (rectangle) {
      this.pixiTexture.frame = rectangle;
    }
  }

  setSource(source : HTMLImageElement) : void {
    const baseTexture = new PIXI.BaseTexture(source, PIXI.settings.SCALE_MODE, 1);
    this.pixiTexture = new PIXI.Texture(baseTexture);
  }

  getSubTexture(x: number, y: number, width: number, height: number) : ITexture {
    return new Texture(this.pixiTexture, new PIXI.Rectangle(x, y, width, height));
  }

  getWidth() : number {
    return this.pixiTexture.realWidth;
  }

  getHeight() : number {
    return this.pixiTexture.realHeight;
  }
}

export default Texture;
