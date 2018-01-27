// @flow
import { IGraphics } from '@/specs/Graphics';
import { ICamera } from '@/specs/Camera';
import Game from './Game';
import Entity from './Entity';

class Component {
  mGraphics: IGraphics;
  mEntity: Entity;

  constructor(entity: Entity) {
    this.mEntity = entity;
  }

  getGraphics () : IGraphics {
    return Game.getGraphics();
  }

  getCamera () : ICamera {
    return Game.getCamera();
  }

  getEntity() {
    return this.mEntity;
  }

  init() {
    throw new Error('Your must implement the init function');
  }

  // eslint-disable-next-line
  update(deltaTime: number) : void {
    throw new Error('You must implement the update function');
  }
}

export default Component;
