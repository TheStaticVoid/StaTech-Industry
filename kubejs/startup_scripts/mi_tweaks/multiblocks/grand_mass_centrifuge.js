// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let GRAND_MASS_CENTRIFUGE;

MIMachineEvents.registerRecipeTypes((event) => {
    GRAND_MASS_CENTRIFUGE = event
        .register('grand_mass_centrifuge')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    const centrifugeHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input',
        'fluid_output'
    );
    const deshMachineCasing = event.memberOfBlock(
        'modern_industrialization:desh_machine_casing'
    );
    const deshPipeCasing = event.memberOfBlock(
        'modern_industrialization:desh_machine_casing_pipe'
    );
    const masscentrifugeShape = event
        .layeredShape('desh_machine_casing', [
            [' PPP ', '  P  ', '     ', '  P  ', ' PPP '],
            ['PdddP', ' dDd ', ' ddd ', ' dDd ', 'PdddP'],
            ['PdddP', 'PD DP', ' d d ', 'PD DP', 'PdddP'],
            ['PdddP', ' dDd ', ' d#d ', ' dDd ', 'PdddP'],
            [' PPP ', '  P  ', '     ', '  P  ', ' PPP '],
        ])
        .key('d', deshMachineCasing, centrifugeHatch)
        .key('D', deshMachineCasing, event.noHatch())
        .key('P', deshPipeCasing, event.noHatch())
        .build();

    event.electric(
        // General parameters
        'Grand Mass Centrifuge', // English name
        'grand_mass_centrifuge', // internal name
        event.getRecipeType('modern_industrialization:centrifuge'), // recipe type
        masscentrifugeShape, // multiblock shape
        (workstations) =>
            workstations.add(['modern_industrialization:centrifuge']),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'desh_machine_casing', // casing of the controller
        'centrifuge', // overlay folder
        true, // front overlay
        true, // top overlay
        true, // side overlay
        // Batch size, EU cost multiplier
        8,
        0.75
    );
});
