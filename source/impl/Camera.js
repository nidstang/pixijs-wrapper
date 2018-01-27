// @flow
import * as PIXI from 'pixi.js';
import { ICamera } from '@/specs/Camera';
import { IVector2 } from '@/specs/Vector2';
import Vector2 from './Vector2';

class Camera implements ICamera {
    mRectangle : PIXI.Rectangle;
    mBounds : IVector2;
    mSize : IVector2;

    getX () : Number {
        return this.mRectangle.x;
    }

    getY () : Number {
        return this.mRectangle.y;
    } 

    init (position : IVector2, size : IVector2, bounds : IVector2) : void {
        this.mRectangle = new PIXI.Rectangle(
            position.getX(),
            position.getY(),
            size.getX(),
            size.getY()
        );

        this.mSize = size;
        this.mBounds = bounds;
    }

    center (targetPosition : IVector2, targetSize : IVector2) : void {
        this.mRectangle.x = (targetPosition.getX() + targetSize.getX() / 2) - this.mSize.getX() / 2;
        this.mRectangle.y = (targetPosition.getY() + targetSize.getY() / 2) - this.mSize.getY() / 2;

        // //keep the camera in bounds
        // if (this.mRectangle.x < 0) {
        //     this.mRectangle.x = 0;
        // }
        // if (this.mRectangle.y < 0) {
        //     this.mRectangle.y = 0;
        // }
        // if (this.mRectangle.x > this.mBounds.getX() - this.mRectangle.width)
    }

    getPositionInCameraCoords (position : IVector2) : Ivector2 {
        return new Vector2(
            position.getX() - this.getX(),
            position.getY() - this.getY()
        );
    }
}

export default Camera;