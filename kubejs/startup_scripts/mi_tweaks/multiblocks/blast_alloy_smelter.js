// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let BLAST_ALLOY_SMELTER;

MIMachineEvents.registerRecipeTypes((event) => {
    BLAST_ALLOY_SMELTER = event
        .register('blast_alloy_smelter')
        .withItemInputs()
        .withItemOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    const smelterHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input'
    );
    const korp4Block = event.memberOfBlock('xtonesreworked:korp_block_4');
    const korp9Block = event.memberOfBlock('xtonesreworked:korp_block_9');
    const tunsgtensteelCoil = event.memberOfBlock(
        'modern_industrialization:tungstensteel_coil'
    );
    const blastalloysmelterShape = event
        .layeredShape('modern_industrialization:korp4_machine_casing', [
            ['KkkkK', ' t t ', ' t t ', ' t t ', ' KkK '],
            ['kkkkk', 't t t', 't t t', 't t t', 'KkkkK'],
            ['Kk#kK', ' t t ', ' t t ', ' t t ', ' KkK '],
        ])
        .key('k', korp4Block, smelterHatch)
        .key('K', korp9Block, event.noHatch())
        .key('t', tunsgtensteelCoil, event.noHatch())
        .build();

    event.electric(
        // General parameters
        'Blast Alloy Smelter', // English name
        'blast_alloy_smelter', // internal name
        event.getRecipeType('extended_industrialization:alloy_smelter'), // recipe type
        blastalloysmelterShape, // multiblock shape
        (workstations) =>
            workstations.add([
                'extended_industrialization:steel_alloy_smelter',
                'extended_industrialization:electric_alloy_smelter',
            ]),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'modern_industrialization:korp9_machine_casing', // casing of the controller
        'alloy_smetler', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        16,
        0.75
    );
});
