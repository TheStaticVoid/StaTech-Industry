let PYROLYSE_OVEN;

MIMachineEvents.registerRecipeTypes(e => {
    PYROLYSE_OVEN = e.register('pyrolyse_oven')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    const heatproofCasing = e.memberOfBlock(mi('heatproof_machine_casing'));
    const cupronickelCoil = e.memberOfBlock(mi('cupronickel_coil'));
    const pyrolyseHatch = e.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input');

    const pyrolyseShape = e.layeredShape('heatproof_machine_casing', [
        //y=0      1      2
        [ 'HHH', 'HHH', 'HHH' ],
        [ 'CCC', 'C C', 'CCC' ],
        [ 'CCC', 'C C', 'CCC' ],
        [ 'HHH', 'H#H', 'HHH' ]
    ])
        .key('H', heatproofCasing, pyrolyseHatch)
        .key('C', cupronickelCoil, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        "Pyrolyse Oven", // English name
        "pyrolyse_oven", // internal name
        PYROLYSE_OVEN, // recipe type
        pyrolyseShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, "triple_arrow"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 1), 
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), 
        fluidOutputs => fluidOutputs.addSlot(122, 35),

        /* MODEL CONFIGUATION */
        "heatproof_machine_casing", // casing of the controller
        "pyrolyse_oven", // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});