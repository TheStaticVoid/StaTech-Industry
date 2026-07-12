// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let TELESCOPE;

MIMachineEvents.registerRecipeTypes(event => {
    TELESCOPE = event.register('telescope')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(event => {
    const tungstensteelMachineCasing = event.memberOfBlock(mi('tungstensteel_machine_casing'));
    const tungstensteelMachinePipeCasing = event.memberOfBlock(mi('tungstensteel_machine_casing_pipe'))
    const korpBlock4 = event.memberOfBlock(xt('korp_block_4'));
    const korpBlock9 = event.memberOfBlock(xt('korp_block_9'));
    const glaxxBlock7 = event.memberOfBlock(xt('glaxx_block_7'));
    const oldVents = event.memberOfBlock(fb('old_vents'));
    const lightbulbRed = event.memberOfBlock(sl('lightbulb_red'));
    const evSolarPanel = event.memberOfBlock(ei('hv_solar_panel'));
    const telescopeHatch = event.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input');

    const telescopeBuilder = event.layeredShape('tungstensteel_machine_casing', [
        ['            ', '            ', '       SS   ', '     SS     ', '   SS       ', '            ', '            '],
        ['            ', '            ', '       SS   ', '     SS     ', '   SS       ', '            ', '            '],
        ['            ', '            ', '            ', '     O R    ', '            ', '            ', '            '],
        ['            ', '            ', '          VT', 'R    T TKPPT', '          VT', '            ', '            '],
        ['            ', '          VT', '  POVTVPOT G', 'PtTKP P    G', '  POVTVPOT G', '          VT', '            '],
        ['       R    ', 'R      TKPPT', 'PttKPPP    G', 'P          G', 'PttKPPP    G', 'R      TKPPT', '       R    '],
        ['            ', '          VT', '  POVTVPOT G', 'Pt#KP P    G', '  POVTVPOT G', '          VT', '            '],
        ['            ', '            ', '          VT', 'R    T TKPPT', '          VT', '            ', '            '],
        ['            ', '            ', '            ', '     O R    ', '            ', '            ', '            '],
        ['            ', '            ', '       SS   ', '     SS     ', '   SS       ', '            ', '            '],
        ['            ', '            ', '       SS   ', '     SS     ', '   SS       ', '            ', '            ']
    ])
        .key('T', tungstensteelMachineCasing, event.noHatch())
        .key('t', tungstensteelMachineCasing, telescopeHatch)
        .key('P', tungstensteelMachinePipeCasing, event.noHatch())
        .key('K', korpBlock4, event.noHatch())
        .key('O', korpBlock9, event.noHatch())
        .key('G', glaxxBlock7, event.noHatch())
        .key('V', oldVents, event.noHatch())
        .key('R', lightbulbRed, event.noHatch())
        .key('S', evSolarPanel, event.noHatch())
        .build();
    
    event.simpleElectricCraftingMultiBlock(
        // General parameters
        'Space Telescope', // English name
        'telescope', // internal name
        TELESCOPE, // recipe type
        telescopeBuilder, // multiblock shape

        // REI Display configuration
        event.progressBar(77, 33, 'telescope'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35),
        itemOutputs => itemOutputs.addSlots(102, 35, 3, 1),
        fluidInputs => fluidInputs.addSlot(56, 53),
        fluidOutputs => {},

        /* Model Configuration */
        'tungstensteel_machine_casing', // casing of the controller
        'telescope', // overlay
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});