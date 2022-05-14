import getBuffer from './function';

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
    this.data = null;
  }

  load() {
    const bufferView = new Uint16Array(this.buffer);
    this.data = JSON.parse(String.fromCharCode(...bufferView));
    return this.data;
  }

  toString() {
    return JSON.stringify(this.data);
  }
}
