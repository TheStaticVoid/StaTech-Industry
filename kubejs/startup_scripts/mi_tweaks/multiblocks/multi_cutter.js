// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let MULTI_CUTTER;

MIMachineEvents.registerRecipeTypes((event) => {
    MULTI_CUTTER = event
        .register('multi_cutter')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    const noHatch = event.noHatch();
    const multiblockHatch = event.hatchOf(
        'item_input',
        'item_output',
        'fluid_input',
        'energy_input'
    );

    const modernIndustrializationSteelMachineCasing = event.memberOfBlock(
        'modern_industrialization:steel_machine_casing'
    );
    const xtonesreworkedTankBlock_0 = event.memberOfBlock(
        'xtonesreworked:tank_block_0'
    );
    const idenDecorCautionBlockSlab = event.memberOfBlock(
        'iden_decor:caution_block_slab'
    );
    const minecraftStonecutter = event.memberOfBlock('minecraft:stonecutter');
    const multiCutterShape = event
        .layeredShape('steel', [
            ['ABBBA', 'ABBBA', '     '],
            ['ABBBA', 'ACDCA', 'ACCCA'],
            ['AB#BA', '     ', '     '],
        ])
        .key('A', modernIndustrializationSteelMachineCasing, multiblockHatch)
        .key('B', xtonesreworkedTankBlock_0, noHatch)
        .key('C', idenDecorCautionBlockSlab, noHatch)
        .key('D', minecraftStonecutter, noHatch)
        .build();

    event.electric(
        // General parameters
        'Multi-Cutter', // English name
        'multi_cutter', // internal name
        event.getRecipeType('modern_industrialization:cutting_machine'), // recipe type
        multiCutterShape, // multiblock shape
        (workstations) =>
            workstations.add([
                'modern_industrialization:bronze_cutting_machine',
                'modern_industrialization:steel_cutting_machine',
                'modern_industrialization:electric_cutting_machine',
            ]),

        /* Model configuration */
        'modern_industrialization:tank_block_0', // casing of the controller
        'cutting_machine', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        8,
        0.6
    );
});
