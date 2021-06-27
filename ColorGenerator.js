import Conversions from "./Conversions.min.js";
class ColorGenerator {
  constructor(sizeOfArray) {
    this.length = sizeOfArray;
    this.conversions = new Conversions();
  }

  getCurrentSizeOfArray() {
    return this.length;
  }

  setSizeOfArray(newArraySize) {
    this.length = newArraySize;
  }

  generateRGB() {
    const colorsArray = [];
    for (let i = 0; i < this.length; i++) {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      const color = `rgb(${red},${green},${blue})`;
      colorsArray.push(color);
    }
    return colorsArray;
  }

  generateHEX() {
    const colorArrayHex = [];
    const colorsArray = this.generateRGB();
    colorsArray.forEach((color) => {
      const hexColor = this.conversions.RGBToHex(color);
      colorArrayHex.push(hexColor);
    });
    return colorArrayHex;
  }

  generateHSL() {
    const colorArrayHSL = [];
    const colorsArray = this.generateRGB();
    colorsArray.forEach((color) => {
      const hslColor = this.conversions.RGBToHSL(color);
      colorArrayHSL.push(hslColor);
    });
    return colorArrayHSL;
  }

  generateHSV() {
    const colorArrayHSV = [];
    const colorsArray = this.generateRGB();
    colorsArray.forEach((color) => {
      const hsvColor = this.conversions.RGBToHSV(color);
      colorArrayHSV.push(hsvColor);
    });
    return colorArrayHSV;
  }

  generateRGBA() {
    const colorsArray = [];
    for (let i = 0; i < this.length; i++) {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      const alpha = Math.random().toFixed(2);
      const color = `rgba(${red},${green},${blue},${alpha})`;
      colorsArray.push(color);
    }
    return colorsArray;
  }

  generateHSLA() {
    const hslArray = this.generateHSL()
    const hslaArray = []
    hslArray.forEach(color => {
      const colorArray = color.substr(4).split(")")[0].split(",")
      const h = colorArray[0]
      const s = colorArray[1]
      const l = colorArray[2]
      const a = Math.random().toFixed(2)
      const hsla = `hsla(${h}, ${s}, ${l}, ${a})`
      hslaArray.push(hsla)
    })
    return hslaArray
  }
}

export default ColorGenerator;
