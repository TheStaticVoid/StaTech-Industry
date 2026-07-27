// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let INDUSTRIAL_MIXING_MACHINE;

MIMachineEvents.registerRecipeTypes(event => {
    INDUSTRIAL_MIXING_MACHINE = event.register('industrial_mixing_machine')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    const mixerHatch = event.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');
    const grateBlock = event.memberOfBlock('factory_blocks:grate');
    const enderiumCasing = event.memberOfBlock('modern_industrialization:enderium_machine_casing');
    const borosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
    const industrialmixerShape = event.layeredShape('modern_industrialization:enderium_machine_casing', [
        ['EEE', 'gbg', 'gbg', 'gbg', 'EEE'],
        ['EEE', 'b b', 'b b', 'b b', 'EEE'],
        ['E#E', 'gbg', 'gbg', 'gbg', 'EEE']
    ])
        .key('E', enderiumCasing, mixerHatch)
        .key('g', grateBlock, event.noHatch())
        .key('b', borosilicateGlass, event.noHatch())
        .build();

    event.electric(
        // General parameters
        'Industrial Mixing Machine', // English name
        'industrial_mixing_machine', // internal name
        event.getRecipeType("modern_industrialization:mixer"), // recipe type
        industrialmixerShape, // multiblock shape
        (workstations) => workstations.add([
            "modern_industrialization:bronze_mixer",
            "modern_industrialization:steel_mixer",
            "modern_industrialization:electric_mixer"
        ]),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'modern_industrialization:enderium_machine_casing', // casing of the controller
        'mixer', // overlay folder
        true, // front overlay
        true, // top overlay
        true, // side overlay
        // Batch size, EU cost multiplier
        12,
        0.80

    );
});
