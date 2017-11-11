// @flow

export interface ITexture {
    setSource (source : HTMLImageElement) : void;
    getSubTexture (x: number, y: number, width: number, height: number) : ITexture;
    getWidth() : number;
    getHeight() : number;
}
