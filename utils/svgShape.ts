export const cubicTriangleShape = (x: any, y: any, width: any, height: any) =>
  `M${x},${y + height}
 C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
 C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
 Z`;