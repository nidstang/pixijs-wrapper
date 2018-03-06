# Runengine
This piece of software is a custom 2D engine wrapper over Pixijs.

I developed my own architecture based on **Scene-Entity-Component**.

## Important
I was using this engine on my personal projects, but **I don't recommend to use in production yet**.

## Transpilating requirements
You need to have installed the **8.9.4 Nodejs version or above**. Nodejs come out with npm, so you don't need install it.

In my local environment I am using Nodejs 8.9.4 and npm 5.

## Installing dependencies
Just run:

```bash
npm install
```

## Generanting runengine.min.js
You only have to run the following command in a terminal:

```bash
npm run build
```

Then you can find the result file at dist/runengine.min.js

## Example

```js
import ExternalGame from '@/impl/ExternalGame';
import Vector2 from '@/impl/Vector2';
import Scene from '@/impl/Scene';
import Component from '@/impl/Component';
import Entity from '@/impl/Entity';
import { IGraphics } from '@/specs/Graphics';
import { IVector2 } from '@/specs/Vector2';
import { ISprite } from '@/specs/Sprite';
import type { TextureId } from '@/specs/Types';

class Renderer extends Component {
  mSprite: ISprite;
  mGraphics: IGraphics;

  init() {
    this.mGraphics = this.getGraphics();
  }

  setTexture(textureId: TextureId) {
    this.mSprite = this.mGraphics.getSprite(textureId);

    this.mSprite.setPosition(new Vector2(this.getEntity().getX(), this.getEntity().getY()));
    this.mGraphics.drawSprite(this.mSprite);
  }

  update(deltaTime : number) : void {
    // center camera in player
    const pos = this.getEntity().getPosition();
    this.mSprite.setPosition(this.getCamera().getPositionInCameraCoords(pos));
  }
}

class MyEntity extends Entity {
  constructor(position : IVector2, size: IVector2) {
    super(position, size);
    const RendererComp = new Renderer(this);
    RendererComp.init();
    RendererComp.setTexture('cat');
    this.addComponent(RendererComp);
  }

  update(deltaTime: number) {
    ExternalGame.getCamera().center(this.getPosition(), this.getDimensions());
    super.update(deltaTime);
  }
}

class MyScene extends Scene {
  mounted() {
    super.mounted();
    const entity = new MyEntity(new Vector2(0.0, 0.0), new Vector2(64.0, 64.0));
    this.addEntity(entity);
  }
}

const canvas : HTMLCanvasElement = (document.getElementById('app') : any);
const game = new ExternalGame(
  new Vector2(200, 200),
  canvas,
  {},
);

function GameLoop() {
  requestAnimationFrame(GameLoop);

  game.update(0.1);
}

game.loadResources([['cat', 'images/cat.png']], () => null, () => {
  console.log('Resources loaded!');

  const scene = new MyScene();

  game.getSceneManager().setScene(scene);

  GameLoop();
});
```
