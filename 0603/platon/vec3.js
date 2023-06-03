class _vec3 {
  constructor(x, y, z) {
    if (x == undefined)
      this.x = 0, this.y = 0, this.z = 0;
    else if (typeof x == "object" && x.length == 3)
      this.x = x[0], this.y = x[1], this.z = x[2];
    else
      this.x = x, this.y = y, this.z = z;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  };
  toArray() {
    return [this.x, this.y, this.z];
  };
}

export function vec3(...args) {
  return new _vec3(...args);
}