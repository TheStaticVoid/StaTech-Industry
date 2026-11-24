// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let BULK_CANNING_MACHINE;

MIMachineEvents.registerRecipeTypes((event) => {
    BULK_CANNING_MACHINE = event
        .register('bulk_canning_machine')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    const cannerHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input',
        'fluid_output'
    );
    const korp4Block = event.memberOfBlock('xtonesreworked:korp_block_4');
    const korp9Block = event.memberOfBlock('xtonesreworked:korp_block_9');
    const tunsgtensteelCoil = event.memberOfBlock(
        'modern_industrialization:tungstensteel_coil'
    );
    const bulkCanningMachineShape = event
        .layeredShape('modern_industrialization:korp4_machine_casing', [
            ['KkkkK', ' t t ', ' t t ', ' t t ', ' KkK '],
            ['kkkkk', 't t t', 't t t', 't t t', 'KkkkK'],
            ['Kk#kK', ' t t ', ' t t ', ' t t ', ' KkK '],
        ])
        .key('k', korp4Block, cannerHatch)
        .key('K', korp9Block, event.noHatch())
        .key('t', tunsgtensteelCoil, event.noHatch())
        .build();

    event.electric(
        // General parameters
        'Bulk Canning Machine', // English name
        'bulk_canning_machine', // internal name
        event.getRecipeType('extended_industrialization:canning_machine'), // recipe type
        bulkCanningMachineShape, // multiblock shape
        (workstations) =>
            workstations.add([
                'extended_industrialization:steel_canning_machine',
                'extended_industrialization:electric_canning_machine',
            ]),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'modern_industrialization:heatproof_machine_casing', // casing of the controller
        'canning_machine', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        8,
        0.75
    );
});
