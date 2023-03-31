let ALLOY_SMELTER;
let PYROLYSE_OVEN;

MIMachineEvents.registerRecipeTypes(e => {
    ALLOY_SMELTER = e.register('alloy_smelter')
        .withItemInputs()
        .withItemOutputs();
    PYROLYSE_OVEN = e.register('pyrolyse_oven')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(e => {

    // -- ALLOY SMELTER SINGLE BLOCK -- //
    e.craftingSingleBlock(
        // General parameters
        "Alloy Smelter", // English Name
        "alloy_smelter", // Internal Name
        ALLOY_SMELTER, // recipe type
        ["electric"], // list of tiers (can be bronze/steel/electric)

        // GUI Configuration
        170, // background height (or -1 for default value)
        e.progressBar(85, 25, "arrow"), // progress bar
        e.efficiencyBar(42, 60), // efficiency bar
        e.energyBar(14, 27), // energy bar

        // Slot Configuration
        2, // Item input count
        1, // Item output count
        0, // fluid input count
        0, // fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids.
        items => items.addSlots(42, 27, 2, 1).addSlots(115, 27, 1, 1), fluids => {},
        
        // Model configuration
        true, // front overlay?
        false, // top overlay?
        false, // side overlay?
    );

    // -- PYROLYSE OVEN MULTIBLOCK -- //
    const pyrolyseHatch = e.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const heatproofMember = e.memberOfBlock("modern_industrialization:heatproof_machine_casing");
    const cupronickelCoilMember = e.memberOfBlock("modern_industrialization:cupronickel_coil");
    const pyrolyseShapeBuilder = e.startShape("heatproof_machine_casing");
    for (let x = -1; x <= 1; x++) {
        for (let y= -1; y <= 1; y++) {
            for (let z = 0; z <= 3; z++) {
                if (z === 1 || z === 2) {
                    if (x !== 0 || y !== 0) {
                        pyrolyseShapeBuilder.add(x, y, z, cupronickelCoilMember, e.noHatch());
                    }
                } else {
                    pyrolyseShapeBuilder.add(x, y, z, heatproofMember, pyrolyseHatch);
                }
            }
        }
    }
    const pyrolyseShape = pyrolyseShapeBuilder.build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        "Pyrolyse Oven", // English name
        "pyrolyse_oven", // internal name
        PYROLYSE_OVEN, // recipe type
        pyrolyseShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, "triple_arrow"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 1), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
        /* MODEL CONFIGUATION */
        "heatproof_machine_casing", // casing of the controller
        "pyrolyse_oven", // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});