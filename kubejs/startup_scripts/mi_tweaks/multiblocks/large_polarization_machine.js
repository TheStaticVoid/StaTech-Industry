// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let LARGE_POLARIZATION_MACHINE;

MIMachineEvents.registerRecipeTypes(event => {
    LARGE_POLARIZATION_MACHINE = event.register('large_polarization_machine')
        .withItemInputs()
        .withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const noHatch = event.noHatch();
    const multiblockHatch = event.hatchOf('item_input', 'item_output', 'energy_input');

    const xtonesreworkedVenaBlock_4 = event.memberOfBlock('xtonesreworked:vena_block_4');
    const xtonesreworkedVenaBlock_3 = event.memberOfBlock('xtonesreworked:vena_block_3');
    const xtonesreworkedVenaBlock_6 = event.memberOfBlock('xtonesreworked:vena_block_6');
    const modernIndustrializationCupronickelCoil = event.memberOfBlock('modern_industrialization:cupronickel_coil');
    const idenDecorIronSheetMetal = event.memberOfBlock('iden_decor:iron_sheet_metal');
    const largePolarizerShape = event.layeredShape('modern_industrialization:vena_block_3', [
        ['ABA', 'C C', 'ABA'],
        ['B B', 'DED', 'D D'],
        ['B B', 'DED', 'D D'],
        ['B B', 'DED', 'D D'],
        ['ABA', 'C#C', 'ABA']
    ])
        .key('A', xtonesreworkedVenaBlock_4, noHatch)
        .key('B', xtonesreworkedVenaBlock_3, multiblockHatch)
        .key('C', xtonesreworkedVenaBlock_6, noHatch)
        .key('D', modernIndustrializationCupronickelCoil, noHatch)
        .key('E', idenDecorIronSheetMetal, noHatch)
        .build();

    event.electric(
        // General parameters
        'Large Polarization Machine', // English name
        'large_polarization_machine', // internal name
        event.getRecipeType("modern_industrialization:polarizer"), // recipe type
        largePolarizerShape, // multiblock shape
        (workstations) => workstations.add([
            "modern_industrialization:polarizer"
        ]),
        /* Model configuration */
        'modern_industrialization:iron_sheet_metal', // casing of the controller
        'polarizer', // overlay folder
        true, // front overlay
        true, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        8,
        0.85
    );
});
