/**
 * Types:
    "artifacts",
    "boss",
    "characters",
    "consumables",
    "domains",
    "elements",
    "enemies",
    "materials",
    "nations",
    "weapons"
 */

import config from './config';

export const characterList = () => config.concat('/characters');
export const weaponList = () => config.concat('/weapons');