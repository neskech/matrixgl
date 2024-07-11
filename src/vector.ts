import { Vector2Base, Vector3Base, Vector4Base } from "./vector_base";

/**
 * A 2-dimensional vector of single-precision float numbers.
 */
export class Vector2 extends Vector2Base<Float32Array> {
  constructor(x: number, y: number) {
    super();
    this._values = new Float32Array([x, y]);
  }

  /**
   * Add `other` to the vector and returns new `Vector2`.
   *
   * This method does not mutate the vector.
   * @param {Vector2} other
   * @returns {Vector2}
   */
  add(other: Vector2): Vector2 {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  /**
   * Subtract `other` from the vector and returns new `Vector2`.
   *
   * This method does not mutate the vector.
   * @param {Vector2} other
   * @returns {Vector2}
   */
  sub(other: Vector2): Vector2 {
    return new Vector2(this.x - other.x, this.y - other.y);
  }

  /**
   * Multiply the vector by `scalar` and returns new `Vector2`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector2}
   */
  mult(scalar: number): Vector2 {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  /**
   * Divide the vector by `scalar` and returns new `Vector2`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector2}
   */
  div(scalar: number): Vector2 {
    return new Vector2(this.x / scalar, this.y / scalar);
  }

  /**
   * Floor the vector returns new `Vector2`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector2}
   */
  floor(): Vector2 {
    return new Vector2(Math.floor(this.x), Math.floor(this.y));
  }

  /**
   * Ceil the vector returns new `Vector2`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector2}
   */
  ceil(): Vector2 {
    return new Vector2(Math.ceil(this.x), Math.ceil(this.y));
  }

  /**
   * Normalize the vector and returns new `Vector3`.
   *
   * This method does not mutate the vector.
   * @returns {Vector2}
   */
  normalize(): Vector2 {
    const mag: number = this.magnitude;
    if (mag === 0) {
      return this;
    }
    return new Vector2(this.x / mag, this.y / mag);
  }

  equals(other: Vector2, error = 0.00001): boolean {
    return (
      Math.abs(this.x - other.x) <= error && Math.abs(this.y - other.y) <= error
    );
  }

  angle(): number {
    return Math.atan2(this.y, this.x);
  }

  rotateBy(theta: number): Vector2 {
    return Vector2.fromAngle(this.angle() + theta).mult(this.magnitude);
  }

  rotateAbout(about: Vector2, theta: number): Vector2 {
    return this.sub(about).rotateBy(theta).add(about);
  }

  dotProductWith(other: Vector2): number {
    return this.x * other.x + this.y * other.y;
  }

  crossProductWith(other: Vector2): Vector3 {
    return new Vector3(0, 0, this.x * other.y - other.x * this.y);
  }

  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }

  static lerp(from: Vector2, to: Vector2, t: number): Vector2 {
    const disp = Vector2.displacement(from, to);
    const distance = disp.magnitude;
    return disp.normalize().mult(t * distance);
  }

  static lerpByDistance(from: Vector2, to: Vector2, distance: number): Vector2 {
    return Vector2.direction(from, to).mult(distance);
  }
  static dotProduct(a: Vector2, b: Vector2): number {
    return a.dotProductWith(b);
  }

  static crossProduct(a: Vector2, b: Vector2): Vector3 {
    return new Vector3(0, 0, a.x * b.y - b.x * a.y);
  }

  static angleBetween(a: Vector2, b: Vector2): number {
    return Math.acos(Vector2.dotProduct(a, b) / (a.magnitude * b.magnitude));
  }

  static distance(from: Vector2, to: Vector2): number {
    return Vector2.displacement(from, to).magnitude;
  }

  static distanceSquared(from: Vector2, to: Vector2): number {
    const dist = Vector2.distance(from, to);
    return dist * dist;
  }

  static midpoint(from: Vector2, to: Vector2): Vector2 {
    return Vector2.displacement(from, to).mult(0.5).add(from);
  }

  static displacement(from: Vector2, to: Vector2): Vector2 {
    return to.sub(from);
  }

  static direction(from: Vector2, to: Vector2): Vector2 {
    return Vector2.displacement(from, to).normalize();
  }

  static fromAngle(theta: number): Vector2 {
    return new Vector2(Math.cos(theta), Math.sin(theta));
  }
}

/**
 * A 3-dimensional vector of single-precision float numbers.
 */
export class Vector3 extends Vector3Base<Float32Array> {
  constructor(x: number, y: number, z: number) {
    super();
    this._values = new Float32Array([x, y, z]);
  }

  /**
   * Add `other` to the vector and returns new `Vector3`.
   *
   * This method does not mutate the vector.
   * @param {Vector3} other
   * @returns {Vector3}
   */
  add(other: Vector3): Vector3 {
    return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  /**
   * Subtract `other` from the vector and returns new `Vector3`.
   *
   * This method does not mutate the vector.
   * @param {Vector3} other
   * @returns {Vector3}
   */
  sub(other: Vector3): Vector3 {
    return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  /**
   * Multiply the vector by `scalar` and returns new `Vector3`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector3}
   */
  mult(scalar: number): Vector3 {
    return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  /**
   * Divide the vector by `scalar` and returns new `Vector3`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector3}
   */
  div(scalar: number): Vector3 {
    return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
  }

  /**
   * Floor the vector and returns new `Vector3`
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector3}
   */
  floor(): Vector3 {
    return new Vector3(
      Math.floor(this.x),
      Math.floor(this.y),
      Math.floor(this.z)
    );
  }

  /**
   * Ceil the vector and returns new `Vector3`
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector3}
   */
  ceil(): Vector3 {
    return new Vector3(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z));
  }

  /**
   * Calculate dot product.
   * @param {Vector3} other
   * @returns {number}
   */
  dot(other: Vector3): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  /**
   * Calculate cross product.
   * @param {Vector3} other
   * @returns {Vector3}
   */
  cross(other: Vector3): Vector3 {
    const cx: number = this.y * other.z - this.z * other.y;
    const cy: number = this.z * other.x - this.x * other.z;
    const cz: number = this.x * other.y - this.y * other.x;

    return new Vector3(cx, cy, cz);
  }

  /**
   * Normalize the vector and returns new `Vector3`.
   *
   * This method does not mutate the vector.
   * @returns {Vector3}
   */
  normalize(): Vector3 {
    const mag: number = this.magnitude;
    if (mag === 0) {
      return this;
    }
    return new Vector3(this.x / mag, this.y / mag, this.z / mag);
  }

  static lerp(from: Vector3, to: Vector3, t: number): Vector3 {
    const disp = Vector3.displacement(from, to);
    const distance = disp.magnitude;
    return disp.normalize().mult(t * distance);
  }

  static lerpByDistance(from: Vector3, to: Vector3, distance: number): Vector3 {
    return Vector3.direction(from, to).mult(distance);
  }

  equals(other: Vector3, error = 0.00001): boolean {
    return (
      Math.abs(this.x - other.x) <= error &&
      Math.abs(this.y - other.y) <= error &&
      Math.abs(this.z - other.z) <= error
    );
  }

  dotProductWith(other: Vector3): number {
    return this.x * other.x + this.y * other.y;
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  static dotProduct(a: Vector3, b: Vector3): number {
    return a.dotProductWith(b);
  }

  static crossProduct(a: Vector3, b: Vector3): Vector3 {
    return a.cross(b);
  }

  static angleBetween(a: Vector3, b: Vector3): number {
    return Math.acos(Vector3.dotProduct(a, b) / (a.magnitude * b.magnitude));
  }

  static distance(from: Vector3, to: Vector3): number {
    return Vector3.displacement(from, to).magnitude;
  }

  static distanceSquared(from: Vector3, to: Vector3): number {
    const dist = Vector3.distance(from, to);
    return dist * dist;
  }

  static midpoint(from: Vector3, to: Vector3): Vector3 {
    return Vector3.displacement(from, to).mult(0.5).add(from);
  }

  static displacement(from: Vector3, to: Vector3): Vector3 {
    return to.sub(from);
  }

  static direction(from: Vector3, to: Vector3): Vector3 {
    return Vector3.displacement(from, to).normalize();
  }

  /**
   * Returns xy values of the vector as `Vector2`.
   * @returns {Vector2}
   */
  get xy(): Vector2 {
    return new Vector2(this.x, this.y);
  }
}

/**
 * A 4-dimensional vector of single-precision float numbers.
 */
export class Vector4 extends Vector4Base<Float32Array> {
  constructor(x: number, y: number, z: number, w: number) {
    super();
    this._values = new Float32Array([x, y, z, w]);
  }

  /**
   * Add `other` to the vector and returns new `Vector4`.
   *
   * This method does not mutate the vector.
   * @param {Vector4} other
   * @returns {Vector4}
   */
  add(other: Vector4): Vector4 {
    return new Vector4(
      this.x + other.x,
      this.y + other.y,
      this.z + other.z,
      this.w + other.w
    );
  }

  /**
   * Subtract `other` from the vector and returns new `Vector4`.
   *
   * This method does not mutate the vector.
   * @param {Vector4} other
   * @returns {Vector4}
   */
  sub(other: Vector4): Vector4 {
    return new Vector4(
      this.x - other.x,
      this.y - other.y,
      this.z - other.z,
      this.w - other.w
    );
  }

  /**
   * Multiply the vector by `scalar` and returns new `Vector4`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector4}
   */
  mult(scalar: number): Vector4 {
    return new Vector4(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar,
      this.w * scalar
    );
  }

  /**
   * Divide the vector by `scalar` and returns new `Vector3`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector3}
   */
  div(scalar: number): Vector4 {
    return new Vector4(
      this.x / scalar,
      this.y / scalar,
      this.z / scalar,
      this.w / scalar
    );
  }

  /**
   * Floor the vector and returns new `Vector4`
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector4}
   */
  floor(): Vector4 {
    return new Vector4(
      Math.floor(this.x),
      Math.floor(this.y),
      Math.floor(this.z),
      Math.floor(this.w)
    );
  }

  /**
   * Ceil the vector and returns new `Vector4`
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Vector4}
   */
  ceil(): Vector4 {
    return new Vector4(
      Math.ceil(this.x),
      Math.ceil(this.y),
      Math.ceil(this.z),
      Math.ceil(this.w)
    );
  }

  /**
   * Normalize the vector and returns new `Vector4`.
   *
   * This method does not mutate the vector.
   * @returns {Vector4}
   */
  normalize(): Vector4 {
    const mag: number = this.magnitude;
    if (mag === 0) {
      return this;
    }
    return new Vector4(this.x / mag, this.y / mag, this.z / mag, this.w / mag);
  }

  static lerp(from: Vector4, to: Vector4, t: number): Vector4 {
    const disp = Vector4.displacement(from, to);
    const distance = disp.magnitude;
    return disp.normalize().mult(t * distance);
  }

  static lerpByDistance(from: Vector4, to: Vector4, distance: number): Vector4 {
    return Vector4.direction(from, to).mult(distance);
  }

  equals(other: Vector4, error = 0.00001): boolean {
    return (
      Math.abs(this.x - other.x) <= error &&
      Math.abs(this.y - other.y) <= error &&
      Math.abs(this.z - other.z) <= error
    );
  }

  dotProductWith(other: Vector4): number {
    return this.x * other.x + this.y * other.y;
  }

  clone(): Vector4 {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  static dotProduct(a: Vector4, b: Vector4): number {
    return a.dotProductWith(b);
  }

  static angleBetween(a: Vector4, b: Vector4): number {
    return Math.acos(Vector4.dotProduct(a, b) / (a.magnitude * b.magnitude));
  }

  static distance(from: Vector4, to: Vector4): number {
    return Vector4.displacement(from, to).magnitude;
  }

  static distanceSquared(from: Vector4, to: Vector4): number {
    const dist = Vector4.distance(from, to);
    return dist * dist;
  }

  static midpoint(from: Vector4, to: Vector4): Vector4 {
    return Vector4.displacement(from, to).mult(0.5).add(from);
  }

  static displacement(from: Vector4, to: Vector4): Vector4 {
    return to.sub(from);
  }

  static direction(from: Vector4, to: Vector4): Vector4 {
    return Vector4.displacement(from, to).normalize();
  }

  /**
   * Returns xyz values of the vector as `Vector3`.
   * @returns {Vector3}
   */
  get xyz(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }
}
