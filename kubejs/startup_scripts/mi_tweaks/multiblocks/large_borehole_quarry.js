// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let LARGE_BOREHOLE_QUARRY;

MIMachineEvents.registerRecipeTypes((event) => {
    LARGE_BOREHOLE_QUARRY = event
        .register('large_borehole_quarry')
        .withItemInputs()
        .withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    const noHatch = event.noHatch();
    const multiblockHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input'
    );

    const xtonesreworkedVenaBlock_4 = event.memberOfBlock(
        'xtonesreworked:vena_block_4'
    );
    const xtonesreworkedVenaBlock_3 = event.memberOfBlock(
        'xtonesreworked:vena_block_3'
    );
    const xtonesreworkedVenaBlock_6 = event.memberOfBlock(
        'xtonesreworked:vena_block_6'
    );
    const modernIndustrializationCupronickelCoil = event.memberOfBlock(
        'modern_industrialization:cupronickel_coil'
    );
    const idenDecorIronSheetMetal = event.memberOfBlock(
        'iden_decor:iron_sheet_metal'
    );
    const largeBoreholeQuarryShape = event
        .layeredShape('modern_industrialization:vena_block_3', [
            ['ABA', 'C C', 'ABA'],
            ['B B', 'DED', 'D D'],
            ['B B', 'DED', 'D D'],
            ['B B', 'DED', 'D D'],
            ['ABA', 'C#C', 'ABA'],
        ])
        .key('A', xtonesreworkedVenaBlock_4, noHatch)
        .key('B', xtonesreworkedVenaBlock_3, multiblockHatch)
        .key('C', xtonesreworkedVenaBlock_6, noHatch)
        .key('D', modernIndustrializationCupronickelCoil, noHatch)
        .key('E', idenDecorIronSheetMetal, noHatch)
        .build();

    event.electric(
        // General parameters
        'Large Borehole Quarry', // English name
        'large_borehole_quarry', // internal name
        event.getRecipeType('modern_industrialization:quarry'), // recipe type
        largeBoreholeQuarryShape, // multiblock shape
        (workstations) =>
            workstations.add(['modern_industrialization:steam_quarry', 'modern_industrialization:electric_quarry']),
        /* Model configuration */
        'modern_industrialization:tungstensteel_machine_casing', // casing of the controller
        'quarry', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        4,
        0.85
    );
});
