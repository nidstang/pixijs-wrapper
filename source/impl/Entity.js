// @flow
import { IVector2 } from '@/specs/Vector2';
import Component from './Component';

class Entity {
  mComponents: Array<Component>;
  mPosition: IVector2;
  mSize: IVector2;

  constructor(position : IVector2, size: IVector2) {
    this.mComponents = [];
    this.mPosition = position;
    this.mSize = size;
  }

  getPosition () : IVector2 {
    return this.mPosition;
  }

  getDimensions () : IVector2 {
    return this.mSize;
  }

  getX() : number {
    return this.mPosition.getX();
  }

  getY() : number {
    return this.mPosition.getY();
  }

  getWidth () : Number {
    return this.mSize.getX();
  }

  getHeight() : Number {
    return this.mSize.getY();
  }

  setX(x: number) : void {
    this.mPosition.setX(x);
  }

  setY(y: number) : void {
    this.mPosition.setY(y);
  }

  update(deltaTime: number) {
    this.mComponents.map(c => c.update(deltaTime));
  }

  addComponent(component: Component) : void {
    this.mComponents.push(component);
  }

  removeComponent(component: Component) : void {
    this.mComponents = this.mComponents.filter(c => c !== component);
  }
}

export default Entity;
