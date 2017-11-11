// @flow
import { IVector2 } from '@/specs/Vector2';

class Vector2 implements IVector2 {
    mX: number;
    mY: number;

    constructor(x: number, y:number) {
      this.mX = x;
      this.mY = y;
    }
    setX(x : number) : void {
      this.mX = x;
    }
    setY(y : number) : void {
      this.mY = y;
    }
    getX() : number {
      return this.mX;
    }
    getY() : number {
      return this.mY;
    }
    length() : number {
      return Math.sqrt((this.mX ** 2) + (this.mY ** 2));
    }
}

export default Vector2;

