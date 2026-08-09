// -----------------------------------------
// CREATED BY GW-DEV FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let WEAPONS_FACTORY;

MIMachineEvents.registerRecipeTypes((event) => {
    WEAPONS_FACTORY = event
        .register('weapons_factory')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines((event) => {
    const heatproofMachineCasing = event.memberOfBlock(
        mi('heatproof_machine_casing')
    );
    const steelMachineCasing = event.memberOfBlock(
        mi('steel_machine_casing')
    );
    const tintedGlassBlock = event.memberOfBlock(mc('tinted_glass'));
    const cupronickelCoil = event.memberOfBlock(mi('cupronickel_coil'));
    const obsidian = event.memberOfBlock(mc('obsidian'));
    const weaponsFactoryHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input',
    );

    const weaponsFactoryShape = event
        .layeredShape('heatproof_machine_casing', [
            // y= 0        1        2        3        4
            [' PpP ', ' GGG ', ' GGG ', ' GGG ', ' PPP '],
            ['PPPPP', 'P S P', 'P S P', 'P S P', 'PPCPP'],
            ['PPPPP', 'GSWSG', 'GSWSG', 'GSWSG', 'PCCCP'],
            ['PPPPP', 'P S P', 'P S P', 'P S P', 'PPCPP'],
            [' p#p ', ' GGG ', ' GGG ', ' GGG ', ' PpP '],
        ])
        .key('P', heatproofMachineCasing, event.noHatch())
        .key('p', heatproofMachineCasing, weaponsFactoryHatch)
        .key('S', steelMachineCasing, event.noHatch())
        .key('G', tintedGlassBlock, event.noHatch())
        .key('C', cupronickelCoil, event.noHatch())
        .key('W', obsidian, event.noHatch())
        .build();

    event.simpleElectricCraftingMultiBlock(
        // General parameters
        'Weapons Factory', // English name
        'weapons_factory', // internal name
        WEAPONS_FACTORY, // recipe type
        weaponsFactoryShape, // multiblock shape

        // REI Display configuration
        event.progressBar(77, 33, 'triple_arrow'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(102, 35, 3, 2),
        (itemOutputs) => itemOutputs.addSlot(56, 35),
        (fluidInputs) => fluidInputs.addSlot(56, 53),
        (fluidOutputs) => {},

        /* Model configuration */
        'heatproof_machine_casing', // casing of the controller
        'weapons_factory', // overlay folder
        true, // front overlay
        false, // top overlay
        false // side overlay
    );
});
