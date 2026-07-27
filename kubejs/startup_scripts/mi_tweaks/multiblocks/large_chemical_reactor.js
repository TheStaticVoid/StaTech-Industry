// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let LARGE_CHEMICAL_REACTOR;

MIMachineEvents.registerRecipeTypes(event => {
    LARGE_CHEMICAL_REACTOR = event.register('large_chemical_reactor')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //

    console.log("loading MITweaksMachineEvents.registerBatchMultiblocks large_chemical_reactor.js in startup_scripts/mi_tweaks")
    const lcrHatch = event.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');
    const ptfeCasing = event.memberOfBlock('modern_industrialization:chemically_inert_ptfe_casing');
    const ptfePipeCasing = event.memberOfBlock('modern_industrialization:polytetrafluoroethylene_machine_casing_pipe');
    const lcrShape = event.layeredShape('modern_industrialization:chemically_inert_ptfe_casing', [
        ['AAA', 'aaa', 'AAA'],
        ['AAA', 'aPa', 'AAA'],
        ['AAA', 'a#a', 'AAA']
    ])
        .key('A', ptfeCasing, lcrHatch)
        .key('a', ptfeCasing, event.noHatch())
        .key('P', ptfePipeCasing, event.noHatch())
        .build();

    event.electric(
        // General parameters
        'Large Chemical Reactor', // English name
        'large_chemical_reactor', // internal name
        event.getRecipeType("modern_industrialization:chemical_reactor"), // recipe type
        lcrShape, // multiblock shape
        (workstations) => workstations.add("modern_industrialization:chemical_reactor"),
        // REI Display configuration
        // e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        // itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        // fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'modern_industrialization:chemically_inert_ptfe_casing', // casing of the controller
        'chemical_reactor', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
        // Batch size, EU cost multiplier
        4,
        0.5

    );
});
