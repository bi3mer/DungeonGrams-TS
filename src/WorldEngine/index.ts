export { Engine } from "./src/Engine";

export { Entity } from "./src/Entity";
export { Component } from "./src/Component";
export { System } from "./src/System";

export { Scene } from "./src/Scene";
export { ECSScene } from "./src/ECSScene";
export { Key } from "./src/Key";

import { Position2d } from "./src/Components/Position2d";
export const CommonComponents = {
    Position2d: Position2d
};