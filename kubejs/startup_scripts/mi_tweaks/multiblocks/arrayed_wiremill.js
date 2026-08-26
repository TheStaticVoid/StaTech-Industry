// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let ARRAYED_WIREMILL;

MIMachineEvents.registerRecipeTypes((event) => {
    ARRAYED_WIREMILL = event
        .register('arrayed_wiremill')
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

    const modernIndustrializationCleanStainlessSteelMachineCasing =
        event.memberOfBlock(
            'modern_industrialization:clean_stainless_steel_machine_casing'
        );
    const modernIndustrializationStainlessSteelMachineCasingPipe =
        event.memberOfBlock(
            'modern_industrialization:stainless_steel_machine_casing_pipe'
        );
    const kubejsBorosilicateGlass = event.memberOfBlock(
        'kubejs:borosilicate_glass'
    );
    const factoryBlocksGears = event.memberOfBlock('factory_blocks:gears');
    const largeWiremillShape = event
        .layeredShape('clean_stainless_steel_machine_casing', [
            ['AAAAA', 'ACCCA', ' AAA '],
            ['AAAAA', 'BDDDB', 'BBBBB'],
            ['AAAAA', 'ACC#A', ' AAA '],
        ])
        .key(
            'A',
            modernIndustrializationCleanStainlessSteelMachineCasing,
            multiblockHatch
        )
        .key(
            'B',
            modernIndustrializationStainlessSteelMachineCasingPipe,
            noHatch
        )
        .key('C', kubejsBorosilicateGlass, noHatch)
        .key('D', factoryBlocksGears, noHatch)
        .build();

    event.electric(
        // General parameters
        'Arrayed Wiremill', // English name
        'arrayed_wiremill', // internal name
        event.getRecipeType('modern_industrialization:wiremill'), // recipe type
        largeWiremillShape, // multiblock shape
        (workstations) =>
            workstations.add([
                'modern_industrialization:steel_wiremill',
                'modern_industrialization:electric_wiremill',
            ]),

        /* Model configuration */
        'modern_industrialization:clean_stainless_steel_machine_casing', // casing of the controller
        'wiremill', // overlay folder
        true, // front overlay
        true, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        8,
        0.9
    );
});
