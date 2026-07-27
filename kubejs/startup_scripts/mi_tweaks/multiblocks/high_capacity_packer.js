// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let HIGH_CAPACITY_PACKER;

MIMachineEvents.registerRecipeTypes(event => {
    HIGH_CAPACITY_PACKER = event.register('high_capacity_packer')
        .withItemInputs()
        .withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const noHatch = event.noHatch();
    const multiblockHatch = event.hatchOf('item_input', 'item_output', 'energy_input');

    const idenDecorIronSheetMetal = event.memberOfBlock('iden_decor:iron_sheet_metal');
    const xtonesreworkedTankBlock_0 = event.memberOfBlock('xtonesreworked:tank_block_0');
    const kubejsBorosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
    const idenDecorMediumBox = event.memberOfBlock('iden_decor:medium_box');
    const highCapacityPackerShape = event.layeredShape('modern_industrialization:iron_sheet_metal', [
        ['AAA', 'BCB', 'BCB', 'BCB', 'BCB', 'BCB', 'AAA'],
        ['ABA', 'CDC', 'C C', 'C C', 'C C', 'C C', 'AAA'],
        ['A#A', 'BCB', 'BCB', 'BCB', 'BCB', 'BCB', 'AAA']
    ])
        .key('A', idenDecorIronSheetMetal, multiblockHatch)
        .key('B', xtonesreworkedTankBlock_0, noHatch)
        .key('C', kubejsBorosilicateGlass, noHatch)
        .key('D', idenDecorMediumBox, noHatch)
        .build();

    event.electric(
    // General parameters
        'High Capacity Packer', // English name
        'high_capacity_packer', // internal name
        event.getRecipeType("modern_industrialization:packer"), // recipe type
        highCapacityPackerShape, // multiblock shape
        (workstations) => workstations.add([
            "modern_industrialization:steel_packer",
            "modern_industrialization:electric_packer"
        ]),
        /* Model configuration */
        'modern_industrialization:iron_sheet_metal', // casing of the controller
        'packer', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        8,
        0.75
    );
});
