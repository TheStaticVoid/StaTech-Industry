let ALLOY_SMELTER;
let PYROLYSE_OVEN;
let ROCKET_PART_ASSEMBLER;
let MEGA_SMELTER;

MIMachineEvents.registerRecipeTypes(e => {
    ALLOY_SMELTER = e.register('alloy_smelter')
        .withItemInputs()
        .withItemOutputs();
    ROCKET_PART_ASSEMBLER = e.register('rocket_part_assembler')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
    PYROLYSE_OVEN = e.register('pyrolyse_oven')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
    MEGA_SMELTER = e.register('mega_smelter')
        .withItemInputs()
        .withItemOutputs();
});

MIRegistrationEvents.registerFluids(e => {
    // -- LITHIUM -- //
    e.register(
        "Lithium",      // English name
        "lithium",      // internal name
        0xb2b2b2,       // Hex color code
        "water",        // Texture type
        true,           // is a gas?
        "medium"        // opacity
    );
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

    // -- ROCKET PART ASSEMBLER SINGLE BLOCK -- //
    e.craftingSingleBlock(
        // General parameters
        "Rocket Part Assembler",
        "rocket_part_assembler",
        ROCKET_PART_ASSEMBLER,
        ["electric"],

        // GUI Configuration
        191, // background height (or -1 for default value)
        e.progressBar(103, 39, "triple_arrow"), // progress bar
        e.efficiencyBar(43, 89), // efficiency bar 
        e.energyBar(14, 42), // energy bar 

        // Slot Configuration
        6, // Item input count
        1, // Item output count
        1, // Fluid input count
        0, // Fluid output count
        // Capacity of fluid slots
        16,
        // Slot positions: item and fluids
        items => items.addSlots(38, 30, 3, 2).addSlots(135, 41, 1, 1),
        fluids => fluids.addSlots(56, 67, 1, 1),

        // Model configuration
        true, // front overlay?
        true, // top overlay?
        false,
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

    // -- MEGA SMELTER -- //
    const smelterHatch = e.hatchOf("item_input", "item_output", "energy_input");
    // reuse cupronickel definition from earlier
    const smelterShapeBuilder = e.startShape("heatproof_machine_casing");

    for (let y = 0; y <= 2; y++) {
        for (let x = -1; x <=1; x++) {
            for (let z = 0; z <= 2; z++) {
                if (y == 0 || y == 2) {
                    // dont fill the center block
                    smelterShapeBuilder.add(x, y, z, heatproofMember, smelterHatch);
                } else {
                    if (z == 1 && x == 0) continue;
                    else {
                        smelterShapeBuilder.add(x, y, z, cupronickelCoilMember, e.noHatch());
                    }
                }
            }
        }
    }
    const megaSmelter = smelterShapeBuilder.build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        "Mega Smelter", // English name
        "mega_smelter", // internal name
        MEGA_SMELTER, // recipe type
        megaSmelter, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, "arrow"),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 1), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => {}, fluidOutputs => {},
        
        /* Model Configuration */
        "heatproof_machine_casing", // casing of the controller
        "mega_smelter", // ovleray folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});

MIMaterialEvents.addMaterials(e => {
    e.createMaterial('Desh', 'desh', 0xe9ba5d,
        builder => {
            builder.addParts('dust', 'tiny_dust', 'rod', 'gear', 'ring', 'blade', 'bolt', 'large_plate', 'curved_plate')
            .machineCasing(8.0)
            .pipeCasing(8.0)
            .defaultRecipes()
            .forgeHammerRecipes()
        });
});