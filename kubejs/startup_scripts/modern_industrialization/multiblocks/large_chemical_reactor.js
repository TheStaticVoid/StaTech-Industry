let LARGE_CHEMICAL_REACTOR;

MIMachineEvents.registerRecipeTypes(e => {
    LARGE_CHEMICAL_REACTOR = e.register('large_chemical_reactor')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(e => {
    const lcrHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');
    const ptfeCasing = e.memberOfBlock('modern_industrialization:chemically_inert_ptfe_casing');
    const ptfePipeCasing = e.memberOfBlock('modern_industrialization:polytetrafluoroethylene_machine_casing_pipe');
    const lcrShape = e.layeredShape('ptfe_machine_casing', [
        [ 'AAA', 'aaa', 'AAA' ],
        [ 'AAA', 'aPa', 'AAA' ],
        [ 'AAA', 'a#a', 'AAA' ]
    ])
        .key('A', ptfeCasing, lcrHatch)
        .key('a', ptfeCasing, e.noHatch())
        .key('P', ptfePipeCasing, e.noHatch())
        .build();
    
    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Large Chemical Reactor', // English name
        'large_chemical_reactor', // internal name
        LARGE_CHEMICAL_REACTOR, // recipe type
        lcrShape, // multiblock shape

        // REI Display configuration
        e.progressBar(88, 35, 'triple_arrow'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(30, 27, 3, 1), itemOutputs => itemOutputs.addSlots(116, 27, 3, 1),
        fluidInputs => fluidInputs.addSlots(30, 47, 3, 1), fluidInputs => fluidInputs.addSlots(116, 47, 3, 1),

        /* Model configuration */
        'ptfe_machine_casing', // casing of the controller
        'chemical_reactor', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});