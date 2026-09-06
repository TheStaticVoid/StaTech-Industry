// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

// Generic function for adding MI machine recipes

// priority: 10000
/**
 * @typedef {[Special.Item, number, number?]} MIItem A tuple of [item, amount, probability?]
 * @typedef {[Special.Fluid, number, number?]} MIFluid A tuple of [fluid, amount, probability?]
 */

/**
 * @typedef {Object} newMachineRecipe
 * @property {!string} type - Recipe Type
 * @property {!number} eu - recipe eu/t
 * @property {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @property {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @property {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @property {MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @property {MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 * @property {?{?dimension: string, ?biome: string, ?biomeTag: string, ?adjacentBlock: {block: string, position: string}}[]} process_conditions - MI process conditions
 */

/**
 * Creates a newMachineRecipe
 * @param {!string} type - Recipe Type
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @property {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @property {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @property {MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @property {MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 * @param {?{?dimension: string, ?biome: string, ?biomeTag: string, ?adjacentBlock: {block: string, position: string}}[]} process_conditions - MI process conditions
 * @returns {newMachineRecipe} The created newMachineRecipe object
 */
let newMachineRecipe = (
    type,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs,
    process_conditions
) => {
    let newRecipe = {
        type: type,
        eu: eu,
        duration: duration,
    };

    if (item_inputs) newRecipe['item_inputs'] = item_inputs;
    if (item_outputs) newRecipe['item_outputs'] = item_outputs;
    if (fluid_inputs) newRecipe['fluid_inputs'] = fluid_inputs;
    if (fluid_outputs) newRecipe['fluid_outputs'] = fluid_outputs;
    if (process_conditions)
        newRecipe['process_conditions'] = process_conditions;

    return newRecipe;
};

// -- ALLOY SMELTER -- //
/**
 * Alloy Smelter
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let alloySmelter = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                ei('alloy_smelter'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- ASSEMBLER -- //
/**
 * Assembler
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let assembler = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('assembler'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- BLAST FURNACE -- //
/**
 * Blast Furnace
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let blastFurnace = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('blast_furnace'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- BOSS CRUSHER -- //
/**
 * Boss Crusher
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let boss_crusher = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('boss_crusher'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- CANNING MACHINE -- //
/**
 * Canning Machine
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let canningMachine = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                ei('canning_machine'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- CENTRIFUGE -- //
/**
 * Centrifuge
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let centrifuge = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('centrifuge'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- CHEMICAL REACTOR -- //
/**
 * Chemical Reactor
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let chemicalReactor = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('chemical_reactor'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- COMPRESSOR -- //
/**
 * Compressor
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let compressor = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('compressor'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- CORE DRILL -- //
/**
 * Core Drill
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let coreDrill = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('core_drill'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- CRUSHER -- //
/**
 * Mob Crusher
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let crusher = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('mob_crusher'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- CRYOGENIC PRECIPITATOR -- //
/**
 * Cryogenic Precipitator
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let cryogenicPrecipitator = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                yai('cryogenic_precipitator'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- CUTTING MACHINE -- //
/**
 * Cutting Machine
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let cuttingMachine = (event, id, eu, duration, item_inputs, item_outputs) => {
    let lubricant = [{ amount: 10, fluid: mi('lubricant') }];
    event
        .custom(
            newMachineRecipe(
                mi('cutting_machine'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                lubricant
            )
        )
        .id(id);
};

// -- DISTILLATION TOWER -- //
/**
 * Distillation Tower
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {!MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {!MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let distillationTower = (
    event,
    id,
    eu,
    duration,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('distillation_tower'),
                eu,
                duration,
                null,
                null,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- DISTILLERY -- //
/**
 * Distillery
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {!MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {!MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let distillery = (event, id, eu, duration, fluid_inputs, fluid_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('distillery'),
                eu,
                duration,
                null,
                null,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- DRAGON EGG ENERGY SIPHON -- //
/**
 * Dragon Egg Energy Siphon
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 * @param {?{?dimension: string, ?biome: string, ?biomeTag: string, ?adjacentBlock: {block: string, position: string}}[]} process_conditions - MI process conditions
 */
let dragonEggEnergySiphon = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs,
    process_conditions
) => {
    event
        .custom(
            newMachineRecipe(
                yai('dragon_egg_energy_siphon'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs,
                process_conditions
            )
        )
        .id(id);
};

// -- DRILLING RIG -- //
/**
 * Drilling Rig
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {!MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let drillingRig = (event, id, eu, duration, item_inputs, fluid_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('oil_drilling_rig'),
                eu,
                duration,
                item_inputs,
                null,
                null,
                fluid_outputs
            )
        )
        .id(id);
};

// -- ELECTROLYZER -- //
/**
 * Electrolyzer
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let electrolyzer = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('electrolyzer'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- FUSION REACTOR -- //
/**
 * Fusion Reactor
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {!MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {!MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let fusion = (event, id, eu, duration, fluid_inputs, fluid_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('fusion_reactor'),
                eu,
                duration,
                null,
                null,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- GREEN HOUSE -- //
/**
 * Greenhouse
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 * @param {?string} adjacent_block - Process condition - adjacent block ID
 * @param {?string} adjacent_block_pos - Process condition - adjacent block position
 */
let greenhouse = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    adjacent_block,
    adjacent_block_pos
) => {
    let process_conditions;
    if (adjacent_block && adjacent_block_pos) {
        process_conditions = [
            {
                type: mi('adjacent_block'),
                block: adjacent_block,
                position: adjacent_block_pos,
            },
        ];
    }
    event
        .custom(
            newMachineRecipe(
                mi('greenhouse'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                null,
                process_conditions
            )
        )
        .id(id);
};

// -- HEAT EXCHANGER -- //
/**
 * Heat Exchanger
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let heatExchanger = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('heat_exchanger'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- IMPLOSION COMPRESSOR -- //
/**
 * Implosion Compressor
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let implosionCompressor = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('implosion_compressor'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- LASER ENGRAVER -- //
/**
 * Laser Engraver
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let laserEngraver = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('laser_engraver'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- MACERATOR -- //
/**
 * Macerator
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let macerator = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('macerator'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- MIXER -- //
/**
 * Mixer
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let mixer = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('mixer'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- PACKER -- //
/**
 * Packer
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let packer = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('packer'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- PHOTOSYNTHETIC CHAMBER -- //
/**
 * Photosynthetic Chamber
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 */
let photoChamber = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('photosynthetic_chamber'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs
            )
        )
        .id(id);
};

// -- POLARIZER -- //
/**
 * Polarizer
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let polarizer = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('polarizer'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- PYROLYSE OVEN -- //
/**
 * Pyrolyse Oven
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let pyrolyseOven = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                io('pyrolyse_oven'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- QUARRY -- //
/**
 * Quarry
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let quarry = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('quarry'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- QUASI QUANTUM SINGULARITY FORGE -- //
/**
 * Singularity Forge
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 */
let singularityForge = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('singularity_forge'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs
            )
        )
        .id(id);
};

// -- MATTER FABRICATOR -- //
/**
 * Recycler
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let matter_fabricator = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('matter_fabricator'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- RECYCLER -- //
/**
 * Recycler
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let recycler = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('recycler'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- ROCKET PART ASSEMBLER -- //
/**
 * Rocket Part Assembler
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 */
let rocketAssembler = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('rocket_part_assembler'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs
            )
        )
        .id(id);
};

// -- SPACE PROBE LAUNCHER -- //
/**
 * Space Probe Launcher
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?string} adjacent_block - Process condition - adjacent block ID
 * @param {?string} adjacent_block_pos - Process condition - adjacent block position
 */
let spl = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    adjacent_block,
    adjacent_block_pos
) => {
    let process_conditions = [
        {
            type: mi('adjacent_block'),
            block: adjacent_block,
            position: adjacent_block_pos,
        },
    ];
    event
        .custom(
            newMachineRecipe(
                mi('space_probe_launcher'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                null,
                null,
                process_conditions
            )
        )
        .id(id);
};

// -- SUPERCOMPUTER -- //
/**
 * Supercomputer
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 */
let supercomputer = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('supercomputer'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs
            )
        )
        .id(id);
};

// -- TELESCOPE -- //
/**
 * Telescope
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 */
let telescope = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs
) => {
    let process_conditions = [
        {
            type: mi('dimension'),
            dimension: 'stcm:space',
        },
    ];
    event
        .custom(
            newMachineRecipe(
                mi('telescope'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                null,
                process_conditions
            )
        )
        .id(id);
};

// -- UNPACKER -- //
/**
 * Unpacker
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let unpacker = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('unpacker'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};

// -- VACUUM FREEZER -- //
/**
 * Vacuum Freezer
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {?MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {?MIItem[]|MIItem} item_outputs - Array of item outputs
 * @param {?MIFluid[]|MIFluid} fluid_inputs - Array of fluid inputs
 * @param {?MIFluid[]|MIFluid} fluid_outputs - Array of fluid outputs
 */
let vacuumFreezer = (
    event,
    id,
    eu,
    duration,
    item_inputs,
    item_outputs,
    fluid_inputs,
    fluid_outputs
) => {
    event
        .custom(
            newMachineRecipe(
                mi('vacuum_freezer'),
                eu,
                duration,
                item_inputs,
                item_outputs,
                fluid_inputs,
                fluid_outputs
            )
        )
        .id(id);
};

// -- WIREMILL -- //
/**
 * Wiremill
 * @param {!string} event
 * @param {!string} id - Recipe ID
 * @param {!number} eu - Recipe eu/t
 * @param {!number} duration - Recipe duration in ticks (1 second is 20 ticks)
 * @param {MIItem[]|MIItem} item_inputs - Array of item inputs
 * @param {MIItem[]|MIItem} item_outputs - Array of item outputs
 */
let wiremill = (event, id, eu, duration, item_inputs, item_outputs) => {
    event
        .custom(
            newMachineRecipe(
                mi('wiremill'),
                eu,
                duration,
                item_inputs,
                item_outputs
            )
        )
        .id(id);
};
