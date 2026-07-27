// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let LARGE_SCALE_ASSEMBLER;

MIMachineEvents.registerRecipeTypes(event => {
    LARGE_SCALE_ASSEMBLER = event.register('large_scale_assembler')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    const assemblerHatch = event.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');
    const tungstensteelCasing = event.memberOfBlock('modern_industrialization:tungstensteel_machine_casing');
    const tungstensteelPipeCasing = event.memberOfBlock('modern_industrialization:tungstensteel_machine_casing_pipe');
    const borosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
    const Casing = event.memberOfBlock('modern_industrialization:turbo_machine_hull');
    const lsaShape = event.layeredShape('modern_industrialization:tungstensteel_machine_casing', [
        ['TTTTT', 'BBBBB', 'TTTTT'],
        ['ppppp', 'CCCCC', 'ppppp'],
        ['TTTTT', 'BBBBB', '#TTTT']
    ])
        .key('p', tungstensteelPipeCasing, assemblerHatch)
        .key('T', tungstensteelCasing, event.noHatch())
        .key('B', borosilicateGlass, event.noHatch())
        .key('C', Casing, event.noHatch())
        .build();

    event.electric(
        // General parameters
        'Large Scale Assembler', // English name
        'large_scale_assembler', // internal name
        event.getRecipeType("modern_industrialization:assembler"), // recipe type
        lsaShape, // multiblock shape
        (workstations) => workstations.add("modern_industrialization:assembler"),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'modern_industrialization:tungstensteel_machine_casing', // casing of the controller
        'assembler', // overlay folder
        true, // front overlay
        true, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        16,
        1

    );
});
