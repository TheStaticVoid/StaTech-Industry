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
            [' ppp ', ' GGG ', ' GGG ', ' GGG ', ' ppp '],
            ['pPPPp', 'P S P', 'P S P', 'P S P', 'pPCPp'],
            ['pPPPp', 'GSWSG', 'GSWSG', 'GSWSG', 'pCCCp'],
            ['pPPPp', 'P S P', 'P S P', 'P S P', 'pPCPp'],
            [' p#p ', ' GGG ', ' GGG ', ' GGG ', ' ppp '],
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
        event.progressBar(85, 24, 'triple_arrow'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(28, 17, 3, 1).addSlots(28, 35, 2, 1),
        (itemOutputs) => itemOutputs.addSlot(112, 24),
        (fluidInputs) => fluidInputs.addSlot(64, 35),
        (fluidOutputs) => {},

        /* Model configuration */
        'heatproof_machine_casing', // casing of the controller
        'weapons_factory', // overlay folder
        true, // front overlay
        false, // top overlay
        false // side overlay
    );
});
