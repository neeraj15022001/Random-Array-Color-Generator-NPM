class Conversions {
  constructor() {}
  RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  }
  RGBToHSL(rgb) {
    const rgbArray = this.breakRGBString(rgb);
    let r = rgbArray[0]
    let g = rgbArray[1]
    let b = rgbArray[2]
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    // Calculate hue
    // No difference
    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return "hsl(" + h + "," + s + "%," + l + "%)";
  }
  RGBToHSV(rgb) {
    const rgbArray = this.breakRGBString(rgb);
    let r = rgbArray[0];
    let g = rgbArray[1];
    let b = rgbArray[2];
    var computedH = 0;
    var computedS = 0;
    var computedV = 0;

    //remove spaces from input RGB values, convert to int
    r = parseInt(("" + r).replace(/\s/g, ""), 10);
    g = parseInt(("" + g).replace(/\s/g, ""), 10);
    b = parseInt(("" + b).replace(/\s/g, ""), 10);

    if (
      r == null ||
      g == null ||
      b == null ||
      isNaN(r) ||
      isNaN(g) ||
      isNaN(b)
    ) {
      alert("Please enter numeric RGB values!");
      return;
    }
    if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
      alert("RGB values must be in the range 0 to 255.");
      return;
    }
    r = r / 255;
    g = g / 255;
    b = b / 255;
    var minRGB = Math.min(r, Math.min(g, b));
    var maxRGB = Math.max(r, Math.max(g, b));

    // Black-gray-white
    if (minRGB == maxRGB) {
      computedV = minRGB;
      return [0, 0, computedV];
    }

    // Colors other than black-gray-white:
    var d = r == minRGB ? g - b : b == minRGB ? r - g : b - r;
    var h = r == minRGB ? 3 : b == minRGB ? 1 : 5;
    computedH = 60 * (h - d / (maxRGB - minRGB));
    computedS = (maxRGB - minRGB) / maxRGB;
    computedV = maxRGB;
    return `${Math.floor(computedH)}, ${Math.floor(computedS*100)}, ${Math.floor(computedV*100)}`
  }
  breakRGBString(rgb) {
    const rgbArray = rgb.substr(4).split(")")[0].split(",");
    return rgbArray;
  }
}

export default Conversions;
