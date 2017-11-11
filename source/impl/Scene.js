// @flow
import Entity from './Entity';

class Scene {
  mEntities: Array<Entity>;
  mRunning: boolean;

  constructor() {
    this.mEntities = [];
  }

  mounted() {
    this.mRunning = true;
  }

  destroyed() {

  }

  addEntity(entity: Entity) {
    this.mEntities.push(entity);
  }

  update(deltaTime : number) : void {
    if (this.mRunning) {
      this.mEntities.map(e => e.update(deltaTime));
    }
  }
}

export default Scene;

