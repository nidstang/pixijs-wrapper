// @flow
import * as PIXI from 'pixi.js';
import { ISprite } from '@/specs/Sprite';
import { ITexture } from '@/specs/Texture';
import { IVector2 } from '@/specs/Vector2';
import Vector2 from './Vector2';
import Texture from './Texture';

class Sprite implements ISprite {
  mTexture: Texture;
  mPixiSprite: PIXI.Sprite;

  constructor(texture : ITexture) {
    this.mTexture = (texture : any);
    this.mPixiSprite = new PIXI.Sprite(this.mTexture.getPixiTexture());
    this.mPixiSprite.setTransform(
      0.0,
      0.0,
      0.0,
      0.0,
    );
  }

  addChildSprite(child : ISprite) : void {
    const sprite : Sprite = (child : any);
    this.mPixiSprite.addChild(sprite.getPixiSprite());
  }

  removeChildSprite(child : ISprite) : void {
    const sprite : Sprite = (child : any);
    this.mPixiSprite.removeChild(sprite.getPixiSprite());
  }

  // setters
  setPosition(position : IVector2) {
    this.mPixiSprite.setTransform(
      position.getX(),
      position.getY(),
    );
  }
  setScale(scale : IVector2) {
    this.mPixiSprite.setTransform(
      this.mPixiSprite.position.x,
      this.mPixiSprite.position.y,
      scale.getX(),
      scale.getY(),
    );
  }
  setVisible(visible : boolean) {
    this.mPixiSprite.visible = visible;
  }
  setTexture(texture : ITexture) {
    this.mTexture = (texture : any);
  }

  // getters
  getPosition() : IVector2 {
    return new Vector2(
      this.mPixiSprite.position.x,
      this.mPixiSprite.position.y,
    );
  }
  getScale() : IVector2 {
    return new Vector2(
      this.mPixiSprite.scale.x,
      this.mPixiSprite.scale.y,
    );
  }
  getVisible() : boolean {
    return this.mPixiSprite.visible;
  }
  getDimensions() : IVector2 {
    return new Vector2(
      this.mPixiSprite.width,
      this.mPixiSprite.height,
    );
  }
  getPixiSprite() : PIXI.Sprite {
    return this.mPixiSprite;
  }
}

export default Sprite;
