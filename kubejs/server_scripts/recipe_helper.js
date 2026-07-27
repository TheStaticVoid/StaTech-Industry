// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// Generic function for adding MI machine recipes
let newMachineRecipe = (type, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs, process_conditions) => {
    let newRecipe = {
        type: type,
        eu: eu,
        duration: duration
    }

    if (item_inputs) newRecipe['item_inputs'] = item_inputs;
    if (item_outputs) newRecipe['item_outputs'] = item_outputs;
    if (fluid_inputs) newRecipe['fluid_inputs'] = fluid_inputs;
    if (fluid_outputs) newRecipe['fluid_outputs'] = fluid_outputs;
    if (process_conditions) newRecipe['process_conditions'] = process_conditions;

    return newRecipe;
}

// -- ALLOY SMELTER -- //
let alloySmelter = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(ei('alloy_smelter'), eu, duration, item_inputs, item_outputs)).id(id);
}

// -- ASSEMBLER -- //
let assembler = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('assembler'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

// -- BLAST FURNACE -- //
let blastFurnace = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('blast_furnace'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

// -- BOSS CRUSHER -- //
let boss_crusher = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('boss_crusher'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

// -- CENTRIFUGE -- //
let centrifuge = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('centrifuge'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

// -- CHEMICAL REACTOR -- //
let chemicalReactor = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('chemical_reactor'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

// -- COMPRESSOR -- //
let compressor = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('compressor'), eu, duration, item_inputs, item_outputs)).id(id);
}

// -- CORE DRILL -- //
let coreDrill = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('core_drill'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let cuttingMachine = (event, id, eu, duration, item_inputs, item_outputs) => {
    let lubricant = { amount: 10, fluid: mi('lubricant') };
    event.custom(newMachineRecipe(mi('cutting_machine'), eu, duration, item_inputs, item_outputs, lubricant)).id(id);
}

let distillationTower = (event, id, eu, duration, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('distillation_tower'), eu, duration, null, null, fluid_inputs, fluid_outputs)).id(id);
}

let distillery = (event, id, eu, duration, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('distillery'), eu, duration, null, null, fluid_inputs, fluid_outputs)).id(id);
}

let drillingRig = (event, id, eu, duration, item_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('oil_drilling_rig'), eu, duration, item_inputs, null, null, fluid_outputs)).id(id);
}

let electrolyzer = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('electrolyzer'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let fusion = (event, id, eu, duration, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('fusion_reactor'), eu, duration, null, null, fluid_inputs, fluid_outputs)).id(id);
}

let greenhouse = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, adjacent_block, adjacent_block_pos) => {
    let process_conditions;
    if (adjacent_block && adjacent_block_pos) {
        process_conditions = [{
            type: mi('adjacent_block'),
            block: adjacent_block,
            position: adjacent_block_pos
        }];
    }
    event.custom(newMachineRecipe(mi('greenhouse'), eu, duration, item_inputs, item_outputs, fluid_inputs, null, process_conditions)).id(id);
}

let heatExchanger = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('heat_exchanger'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let implosionCompressor = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('implosion_compressor'), eu, duration, item_inputs, item_outputs)).id(id);
}

let lcr = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('large_chemical_reactor'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let lsf = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('large_steam_furnace'), eu, duration, item_inputs, item_outputs)).id(id);
}

let lsm = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('large_steam_macerator'), eu, duration, item_inputs, item_outputs)).id(id);
}

let laserEngraver = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('laser_engraver'), eu, duration, item_inputs, item_outputs)).id(id);
}

let macerator = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('macerator'), eu, duration, item_inputs, item_outputs)).id(id);
}

let megaSmelt = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('mega_smelter'), eu, duration, item_inputs, item_outputs)).id(id);
}

let mixer = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('mixer'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let crusher = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('mob_crusher'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let packer = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('packer'), eu, duration, item_inputs, item_outputs)).id(id);
}

let unpacker = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('unpacker'), eu, duration, item_inputs, item_outputs)).id(id);
}

let photoChamber = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
    event.custom(newMachineRecipe(mi('photosynthetic_chamber'), eu, duration, item_inputs, item_outputs, fluid_inputs)).id(id);
}

let pyrolyseOven = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(io('pyrolyse_oven'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let quarry = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('quarry'), eu, duration, item_inputs, item_outputs)).id(id);
}

let rocketAssembler = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
    event.custom(newMachineRecipe(mi('rocket_part_assembler'), eu, duration, item_inputs, item_outputs, fluid_inputs)).id(id);
}

let singularityForge = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
    event.custom(newMachineRecipe(mi('singularity_forge'), eu, duration, item_inputs, item_outputs, fluid_inputs)).id(id);
}

let spl = (event, id, eu, duration, item_inputs, item_outputs, adjacent_block, adjacent_block_pos) => {
    let process_conditions = [{
        type: mi('adjacent_block'),
        block: adjacent_block,
        position: adjacent_block_pos
    }/* , {
        type: mi('dimension'),
        dimension: 'statech:space'
    } */];
    event.custom(newMachineRecipe(mi('space_probe_launcher'), eu, duration, item_inputs, item_outputs, null, null, process_conditions)).id(id);
}

let vacuumFreezer = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(mi('vacuum_freezer'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let telescope = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
    let process_conditions = [{
        type: mi('dimension'),
        dimension: 'statech:space'
    }];
    event.custom(newMachineRecipe(mi('telescope'), eu, duration, item_inputs, item_outputs, fluid_inputs, null, process_conditions)).id(id);
}

let supercomputer = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
    event.custom(newMachineRecipe(mi('supercomputer'), eu, duration, item_inputs, item_outputs, fluid_inputs)).id(id);
}

let wiremill = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('wiremill'), eu, duration, item_inputs, item_outputs)).id(id);
}

let canningMachine = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(ei('canning_machine'), eu, duration, item_inputs, item_outputs)).id(id);
}

let cryogenicPrecipitator = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
    event.custom(newMachineRecipe(yai('cryogenic_precipitator'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs)).id(id);
}

let dragonEggEnergySiphon = (event, id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs, process_conditions) => {
    event.custom(newMachineRecipe(yai('dragon_egg_energy_siphon'), eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs, process_conditions)).id(id);
}

let polarizer = (event, id, eu, duration, item_inputs, item_outputs) => {
    event.custom(newMachineRecipe(mi('polarizer'), eu, duration, item_inputs, item_outputs)).id(id);
}
