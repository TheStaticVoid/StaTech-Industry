let MOB_CRUSHER;

MIMachineEvents.registerRecipeTypes(e => {
    MOB_CRUSHER = e.register('mob_crusher')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const steelMachineCasing = e.memberOfBlock(mi('steel_machine_casing'));
    const glassBlock = e.memberOfBlock(mc('glass'));
    const cupronickelCoil = e.memberOfBlock(mi('cupronickel_coil'));
    const crusherHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_output');

    const mobCrusherShape = e.layeredShape('steel', [
        //y= 0        1        2        3
        [ ' sss ', ' GGG ', ' GGG ', ' sss ' ], 
        [ 'sSSSs', 'GCCCG', 'GCCCG', 'sSSSs' ],
        [ 'sSSSs', 'GC CG', 'GC CG', 'sSSSs' ],
        [ 'sSSSs', 'GCCCG', 'GCCCG', 'sSSSs' ],
        [ ' s#s ', ' GGG ', ' GGG ', ' sss ' ]
    ])
        .key('S', steelMachineCasing, e.noHatch())
        .key('s', steelMachineCasing, crusherHatch)
        .key('G', glassBlock, e.noHatch())
        .key('C', cupronickelCoil, e.noHatch())
        .build();
    
    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Mob Crusher',          // English name
        'mob_crusher',          // internal name
        MOB_CRUSHER,            // recipe type
        mobCrusherShape,        // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'macerate'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), 
        itemOutputs => itemOutputs.addSlots(102, 35, 3, 2),
        fluidInputs => fluidInputs.addSlot(56, 53),
        fluidOutputs => fluidOutputs.addSlot(120, 71),

        /* Model configuration */
        'steel',            // casing of the controller
        'alloy_smelter',    // overlay folder
        true,               // front overlay
        false,              // top overlay
        false,              // side overlay
    );
});