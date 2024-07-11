import { Vector2Base, Vector3Base, Vector4Base } from "./vector_base";
/**
 * A 2-dimensional vector of single-precision float numbers.
 */
export declare class Vector2 extends Vector2Base<Float32Array> {
    constructor(x: number, y: number);
    /**
     * Add `other` to the vector and returns new `Vector2`.
     *
     * This method does not mutate the vector.
     * @param {Vector2} other
     * @returns {Vector2}
     */
    add(other: Vector2): Vector2;
    /**
     * Subtract `other` from the vector and returns new `Vector2`.
     *
     * This method does not mutate the vector.
     * @param {Vector2} other
     * @returns {Vector2}
     */
    sub(other: Vector2): Vector2;
    /**
     * Multiply the vector by `scalar` and returns new `Vector2`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector2}
     */
    mult(scalar: number): Vector2;
    /**
     * Divide the vector by `scalar` and returns new `Vector2`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector2}
     */
    div(scalar: number): Vector2;
    /**
     * Floor the vector returns new `Vector2`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector2}
     */
    floor(): Vector2;
    /**
     * Ceil the vector returns new `Vector2`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector2}
     */
    ceil(): Vector2;
    /**
     * Normalize the vector and returns new `Vector3`.
     *
     * This method does not mutate the vector.
     * @returns {Vector2}
     */
    normalize(): Vector2;
    equals(other: Vector2, error?: number): boolean;
    angle(): number;
    rotateBy(theta: number): Vector2;
    rotateAbout(about: Vector2, theta: number): Vector2;
    dotProductWith(other: Vector2): number;
    crossProductWith(other: Vector2): Vector3;
    clone(): Vector2;
    static lerp(from: Vector2, to: Vector2, t: number): Vector2;
    static lerpByDistance(from: Vector2, to: Vector2, distance: number): Vector2;
    static dotProduct(a: Vector2, b: Vector2): number;
    static crossProduct(a: Vector2, b: Vector2): Vector3;
    static angleBetween(a: Vector2, b: Vector2): number;
    static distance(from: Vector2, to: Vector2): number;
    static distanceSquared(from: Vector2, to: Vector2): number;
    static midpoint(from: Vector2, to: Vector2): Vector2;
    static displacement(from: Vector2, to: Vector2): Vector2;
    static direction(from: Vector2, to: Vector2): Vector2;
    static fromAngle(theta: number): Vector2;
}
/**
 * A 3-dimensional vector of single-precision float numbers.
 */
export declare class Vector3 extends Vector3Base<Float32Array> {
    constructor(x: number, y: number, z: number);
    /**
     * Add `other` to the vector and returns new `Vector3`.
     *
     * This method does not mutate the vector.
     * @param {Vector3} other
     * @returns {Vector3}
     */
    add(other: Vector3): Vector3;
    /**
     * Subtract `other` from the vector and returns new `Vector3`.
     *
     * This method does not mutate the vector.
     * @param {Vector3} other
     * @returns {Vector3}
     */
    sub(other: Vector3): Vector3;
    /**
     * Multiply the vector by `scalar` and returns new `Vector3`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector3}
     */
    mult(scalar: number): Vector3;
    /**
     * Divide the vector by `scalar` and returns new `Vector3`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector3}
     */
    div(scalar: number): Vector3;
    /**
     * Floor the vector and returns new `Vector3`
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector3}
     */
    floor(): Vector3;
    /**
     * Ceil the vector and returns new `Vector3`
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector3}
     */
    ceil(): Vector3;
    /**
     * Calculate dot product.
     * @param {Vector3} other
     * @returns {number}
     */
    dot(other: Vector3): number;
    /**
     * Calculate cross product.
     * @param {Vector3} other
     * @returns {Vector3}
     */
    cross(other: Vector3): Vector3;
    /**
     * Normalize the vector and returns new `Vector3`.
     *
     * This method does not mutate the vector.
     * @returns {Vector3}
     */
    normalize(): Vector3;
    static lerp(from: Vector3, to: Vector3, t: number): Vector3;
    static lerpByDistance(from: Vector3, to: Vector3, distance: number): Vector3;
    equals(other: Vector3, error?: number): boolean;
    dotProductWith(other: Vector3): number;
    clone(): Vector3;
    static dotProduct(a: Vector3, b: Vector3): number;
    static crossProduct(a: Vector3, b: Vector3): Vector3;
    static angleBetween(a: Vector3, b: Vector3): number;
    static distance(from: Vector3, to: Vector3): number;
    static distanceSquared(from: Vector3, to: Vector3): number;
    static midpoint(from: Vector3, to: Vector3): Vector3;
    static displacement(from: Vector3, to: Vector3): Vector3;
    static direction(from: Vector3, to: Vector3): Vector3;
    /**
     * Returns xy values of the vector as `Vector2`.
     * @returns {Vector2}
     */
    get xy(): Vector2;
}
/**
 * A 4-dimensional vector of single-precision float numbers.
 */
export declare class Vector4 extends Vector4Base<Float32Array> {
    constructor(x: number, y: number, z: number, w: number);
    /**
     * Add `other` to the vector and returns new `Vector4`.
     *
     * This method does not mutate the vector.
     * @param {Vector4} other
     * @returns {Vector4}
     */
    add(other: Vector4): Vector4;
    /**
     * Subtract `other` from the vector and returns new `Vector4`.
     *
     * This method does not mutate the vector.
     * @param {Vector4} other
     * @returns {Vector4}
     */
    sub(other: Vector4): Vector4;
    /**
     * Multiply the vector by `scalar` and returns new `Vector4`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector4}
     */
    mult(scalar: number): Vector4;
    /**
     * Divide the vector by `scalar` and returns new `Vector3`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector3}
     */
    div(scalar: number): Vector4;
    /**
     * Floor the vector and returns new `Vector4`
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector4}
     */
    floor(): Vector4;
    /**
     * Ceil the vector and returns new `Vector4`
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Vector4}
     */
    ceil(): Vector4;
    /**
     * Normalize the vector and returns new `Vector4`.
     *
     * This method does not mutate the vector.
     * @returns {Vector4}
     */
    normalize(): Vector4;
    static lerp(from: Vector4, to: Vector4, t: number): Vector4;
    static lerpByDistance(from: Vector4, to: Vector4, distance: number): Vector4;
    equals(other: Vector4, error?: number): boolean;
    dotProductWith(other: Vector4): number;
    clone(): Vector4;
    static dotProduct(a: Vector4, b: Vector4): number;
    static angleBetween(a: Vector4, b: Vector4): number;
    static distance(from: Vector4, to: Vector4): number;
    static distanceSquared(from: Vector4, to: Vector4): number;
    static midpoint(from: Vector4, to: Vector4): Vector4;
    static displacement(from: Vector4, to: Vector4): Vector4;
    static direction(from: Vector4, to: Vector4): Vector4;
    /**
     * Returns xyz values of the vector as `Vector3`.
     * @returns {Vector3}
     */
    get xyz(): Vector3;
}
