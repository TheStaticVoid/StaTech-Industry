// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let OVERSIZED_ELECTROLYSIS_CHAMBER;

MIMachineEvents.registerRecipeTypes((event) => {
    OVERSIZED_ELECTROLYSIS_CHAMBER = event
        .register('oversized_electrolysis_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    const electrolyzerHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input',
        'fluid_output'
    );
    const circuitBlock = event.memberOfBlock('factory_blocks:circuit');
    const tungstensteelCasing = event.memberOfBlock(
        'modern_industrialization:tungstensteel_machine_casing'
    );
    const borosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
    const sturdyBlock = event.memberOfBlock('factory_blocks:sturdy');
    const electrolysischamberShape = event
        .layeredShape('modern_industrialization:tungstensteel_machine_casing', [
            [' ccc ', '  c  ', '  c  ', '  c  ', ' ccc '],
            ['cTcTc', ' sbs ', '  b  ', ' sbs ', 'cTcTc'],
            ['cTcTc', 'cb bc', 'cb bc', 'cb bc', 'cTcTc'],
            ['cTcTc', ' sbs ', '  b  ', ' sbs ', 'cTcTc'],
            [' c#c ', '     ', '     ', '     ', ' ccc '],
        ])
        .key('T', tungstensteelCasing, electrolyzerHatch)
        .key('c', circuitBlock, event.noHatch())
        .key('b', borosilicateGlass, event.noHatch())
        .key('s', sturdyBlock, event.noHatch())
        .build();

    event.electric(
        // General parameters
        'Oversized Electrolysis Chamber', // English name
        'oversized_electrolysis_chamber', // internal name
        event.getRecipeType('modern_industrialization:electrolyzer'), // recipe type
        electrolysischamberShape, // multiblock shape
        (workstations) =>
            workstations.add(['modern_industrialization:electrolyzer']),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'modern_industrialization:circuit_machine_casing', // casing of the controller
        'electrolyzer', // overlay folder
        true, // front overlay
        false, // top overlay
        true, // side overlay
        // Batch size, EU cost multiplier
        16,
        0.8
    );
});
