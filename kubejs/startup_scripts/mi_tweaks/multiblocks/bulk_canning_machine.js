// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    const cannerHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input',
        'fluid_output'
    );
    const heatproofMachineCasing = event.memberOfBlock('modern_industrialization:heatproof_machine_casing');
    const borosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
    const cupronickelCoil = event.memberOfBlock('modern_industrialization:cupronickel_coil');
    const polishedSilverMachineCasing = event.memberOfBlock('extended_industrialization:polished_silver_machine_casing');
    const bulkCanningMachineShape = event
        .layeredShape('modern_industrialization:heatproof_machine_casing', [
            ['AAA','ABA','ABA',' A '],
            ['AAA','CDC','CDC','ADA'],
            ['A#A','ABA','ABA',' A ']
        ])
        .key('A', heatproofMachineCasing, cannerHatch)
        .key('B', borosilicateGlass, event.noHatch())
        .key('C', cupronickelCoil, event.noHatch())
        .key('D', polishedSilverMachineCasing, event.noHatch())
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
