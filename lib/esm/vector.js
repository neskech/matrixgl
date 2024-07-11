// src/vector_base.ts
var VectorBase = class {
  get values() {
    return this._values;
  }
  get magnitude() {
    let sumSq = 0;
    for (const val of this._values) {
      sumSq += val ** 2;
    }
    return Math.sqrt(sumSq);
  }
  toString() {
    const dimension = this._values.length;
    return `Vector${dimension}(${this._values.join(", ")})`;
  }
};
var Vector2Base = class extends VectorBase {
  get x() {
    return this._values[0];
  }
  get y() {
    return this._values[1];
  }
  set x(value) {
    this._values[0] = value;
  }
  set y(value) {
    this._values[1] = value;
  }
};
var Vector3Base = class extends VectorBase {
  get x() {
    return this._values[0];
  }
  get y() {
    return this._values[1];
  }
  get z() {
    return this._values[2];
  }
  set x(value) {
    this._values[0] = value;
  }
  set y(value) {
    this._values[1] = value;
  }
  set z(value) {
    this._values[2] = value;
  }
};
var Vector4Base = class extends VectorBase {
  get x() {
    return this._values[0];
  }
  get y() {
    return this._values[1];
  }
  get z() {
    return this._values[2];
  }
  get w() {
    return this._values[3];
  }
  set x(value) {
    this._values[0] = value;
  }
  set y(value) {
    this._values[1] = value;
  }
  set z(value) {
    this._values[2] = value;
  }
  set w(value) {
    this._values[3] = value;
  }
};

// src/vector.ts
var Vector2 = class extends Vector2Base {
  constructor(x, y) {
    super();
    this._values = new Float32Array([x, y]);
  }
  add(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }
  sub(other) {
    return new Vector2(this.x - other.x, this.y - other.y);
  }
  mult(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }
  div(scalar) {
    return new Vector2(this.x / scalar, this.y / scalar);
  }
  floor() {
    return new Vector2(Math.floor(this.x), Math.floor(this.y));
  }
  ceil() {
    return new Vector2(Math.ceil(this.x), Math.ceil(this.y));
  }
  normalize() {
    const mag = this.magnitude;
    if (mag === 0) {
      return this;
    }
    return new Vector2(this.x / mag, this.y / mag);
  }
  equals(other, error = 1e-5) {
    return Math.abs(this.x - other.x) <= error && Math.abs(this.y - other.y) <= error;
  }
  angle() {
    return Math.atan2(this.y, this.x);
  }
  rotateBy(theta) {
    return Vector2.fromAngle(this.angle() + theta).mult(this.magnitude);
  }
  rotateAbout(about, theta) {
    return this.sub(about).rotateBy(theta).add(about);
  }
  dotProductWith(other) {
    return this.x * other.x + this.y * other.y;
  }
  crossProductWith(other) {
    return new Vector3(0, 0, this.x * other.y - other.x * this.y);
  }
  clone() {
    return new Vector2(this.x, this.y);
  }
  static lerp(from, to, t) {
    const disp = Vector2.displacement(from, to);
    const distance = disp.magnitude;
    return disp.normalize().mult(t * distance);
  }
  static lerpByDistance(from, to, distance) {
    return Vector2.direction(from, to).mult(distance);
  }
  static dotProduct(a, b) {
    return a.dotProductWith(b);
  }
  static crossProduct(a, b) {
    return new Vector3(0, 0, a.x * b.y - b.x * a.y);
  }
  static angleBetween(a, b) {
    return Math.acos(Vector2.dotProduct(a, b) / (a.magnitude * b.magnitude));
  }
  static distance(from, to) {
    return Vector2.displacement(from, to).magnitude;
  }
  static distanceSquared(from, to) {
    const dist = Vector2.distance(from, to);
    return dist * dist;
  }
  static midpoint(from, to) {
    return Vector2.displacement(from, to).mult(0.5).add(from);
  }
  static displacement(from, to) {
    return to.sub(from);
  }
  static direction(from, to) {
    return Vector2.displacement(from, to).normalize();
  }
  static fromAngle(theta) {
    return new Vector2(Math.cos(theta), Math.sin(theta));
  }
};
var Vector3 = class extends Vector3Base {
  constructor(x, y, z) {
    super();
    this._values = new Float32Array([x, y, z]);
  }
  add(other) {
    return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }
  sub(other) {
    return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
  }
  mult(scalar) {
    return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }
  div(scalar) {
    return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
  }
  floor() {
    return new Vector3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
  }
  ceil() {
    return new Vector3(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z));
  }
  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
  cross(other) {
    const cx = this.y * other.z - this.z * other.y;
    const cy = this.z * other.x - this.x * other.z;
    const cz = this.x * other.y - this.y * other.x;
    return new Vector3(cx, cy, cz);
  }
  normalize() {
    const mag = this.magnitude;
    if (mag === 0) {
      return this;
    }
    return new Vector3(this.x / mag, this.y / mag, this.z / mag);
  }
  static lerp(from, to, t) {
    const disp = Vector3.displacement(from, to);
    const distance = disp.magnitude;
    return disp.normalize().mult(t * distance);
  }
  static lerpByDistance(from, to, distance) {
    return Vector3.direction(from, to).mult(distance);
  }
  equals(other, error = 1e-5) {
    return Math.abs(this.x - other.x) <= error && Math.abs(this.y - other.y) <= error && Math.abs(this.z - other.z) <= error;
  }
  dotProductWith(other) {
    return this.x * other.x + this.y * other.y;
  }
  clone() {
    return new Vector3(this.x, this.y, this.z);
  }
  static dotProduct(a, b) {
    return a.dotProductWith(b);
  }
  static crossProduct(a, b) {
    return a.cross(b);
  }
  static angleBetween(a, b) {
    return Math.acos(Vector3.dotProduct(a, b) / (a.magnitude * b.magnitude));
  }
  static distance(from, to) {
    return Vector3.displacement(from, to).magnitude;
  }
  static distanceSquared(from, to) {
    const dist = Vector3.distance(from, to);
    return dist * dist;
  }
  static midpoint(from, to) {
    return Vector3.displacement(from, to).mult(0.5).add(from);
  }
  static displacement(from, to) {
    return to.sub(from);
  }
  static direction(from, to) {
    return Vector3.displacement(from, to).normalize();
  }
  get xy() {
    return new Vector2(this.x, this.y);
  }
};
var Vector4 = class extends Vector4Base {
  constructor(x, y, z, w) {
    super();
    this._values = new Float32Array([x, y, z, w]);
  }
  add(other) {
    return new Vector4(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
  }
  sub(other) {
    return new Vector4(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
  }
  mult(scalar) {
    return new Vector4(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
  }
  div(scalar) {
    return new Vector4(this.x / scalar, this.y / scalar, this.z / scalar, this.w / scalar);
  }
  floor() {
    return new Vector4(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w));
  }
  ceil() {
    return new Vector4(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z), Math.ceil(this.w));
  }
  normalize() {
    const mag = this.magnitude;
    if (mag === 0) {
      return this;
    }
    return new Vector4(this.x / mag, this.y / mag, this.z / mag, this.w / mag);
  }
  static lerp(from, to, t) {
    const disp = Vector4.displacement(from, to);
    const distance = disp.magnitude;
    return disp.normalize().mult(t * distance);
  }
  static lerpByDistance(from, to, distance) {
    return Vector4.direction(from, to).mult(distance);
  }
  equals(other, error = 1e-5) {
    return Math.abs(this.x - other.x) <= error && Math.abs(this.y - other.y) <= error && Math.abs(this.z - other.z) <= error;
  }
  dotProductWith(other) {
    return this.x * other.x + this.y * other.y;
  }
  clone() {
    return new Vector4(this.x, this.y, this.z, this.w);
  }
  static dotProduct(a, b) {
    return a.dotProductWith(b);
  }
  static angleBetween(a, b) {
    return Math.acos(Vector4.dotProduct(a, b) / (a.magnitude * b.magnitude));
  }
  static distance(from, to) {
    return Vector4.displacement(from, to).magnitude;
  }
  static distanceSquared(from, to) {
    const dist = Vector4.distance(from, to);
    return dist * dist;
  }
  static midpoint(from, to) {
    return Vector4.displacement(from, to).mult(0.5).add(from);
  }
  static displacement(from, to) {
    return to.sub(from);
  }
  static direction(from, to) {
    return Vector4.displacement(from, to).normalize();
  }
  get xyz() {
    return new Vector3(this.x, this.y, this.z);
  }
};
export {
  Vector2,
  Vector3,
  Vector4
};
