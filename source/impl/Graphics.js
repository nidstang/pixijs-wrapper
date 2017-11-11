// @flow
import * as PIXI from 'pixi.js';
import { IGraphics } from '@/specs/Graphics';
import { ISprite } from '@/specs/Sprite';
import { IVector2 } from '@/specs/Vector2';
import { ISpriteFactory } from '@/specs/SpriteFactory';
import { ITextureFactory } from '@/specs/TextureFactory';
import type { TextureId } from '@/specs/Types';
import Sprite from './Sprite';
import SpriteFactory from './SpriteFactory';
import TextureFactory from './TextureFactory';
import Texture from './Texture';

class Graphics implements IGraphics {
  mRenderer: PIXI.WebGLRenderer;
  mContainer: PIXI.Container;
  mSpriteFactory: ISpriteFactory;
  mTextureFactory: ITextureFactory;

  render() : void {
    this.mRenderer.render(this.mContainer);
  }

  getSprite(textureId: TextureId) : ISprite {
    const texture : Texture =
      (this.mTextureFactory.getTexture(textureId) : any);
    return this.mSpriteFactory.createSprite(texture);
  }

  init(size: IVector2, view : HTMLCanvasElement, options : Object = {}) : void {
    this.mRenderer = PIXI.autoDetectRenderer(
      size.getX(),
      size.getY(),
      Object.assign(options, { view }),
    );
    this.mContainer = new PIXI.Container();
    this.mSpriteFactory = new SpriteFactory();
    this.mTextureFactory = new TextureFactory();
  }

  getSpriteFactory() : ISpriteFactory {
    return this.mSpriteFactory;
  }

  getTextureFactory() : ITextureFactory {
    return this.mTextureFactory;
  }

  drawSprite(sprite : ISprite) : void {
    const cSprite : Sprite = (sprite : any);
    this.mContainer.addChild(cSprite.getPixiSprite());
  }
}

export default Graphics;
