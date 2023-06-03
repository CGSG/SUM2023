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
  
  cross(v) {
    return vec3(this.y * v.z - this.z * v.y,
                this.z * v.x - this.x * v.z,
                this.x * v.y - this.y * v.x);
  } // End of 'cross' function

  len2() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  } // End of 'len2' function

  len() {
    let len = this.x * this.x + this.y * this.y + this.z * this.z;

    if (len != 0 && len != 1)
      return Math.sqrt(len);
    return len;
  } // End of 'len' function

  normalize() {
    let len = this.x * this.x + this.y * this.y + this.z * this.z;

    if (len != 0 && len != 1) {
      len = sqrt(len);
      return vec3(this.x / len, this.y / len,  this.z / len);
    }
    return vec3(this);
  } // End of 'normalize' function

  toArray() {
    return [this.x, this.y, this.z];
  };
}

export function vec3(...args) {
  return new _vec3(...args);
}