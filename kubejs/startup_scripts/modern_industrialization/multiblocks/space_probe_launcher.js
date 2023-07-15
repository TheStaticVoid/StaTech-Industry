// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let SPACE_PROBE_LAUNCHER;

MIMachineEvents.registerRecipeTypes(e => {
    SPACE_PROBE_LAUNCHER = e.register('space_probe_launcher')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;

    const caloriteCasing = e.memberOfBlock(mi('calorite_machine_casing'));
    const caloritePipeCasing = e.memberOfBlock(mi('calorite_machine_casing_pipe'));
    const tungstensteelCoil = e.memberOfBlock(mi('tungstensteel_coil'));
    const spaceProbeHatch = e.hatchOf('item_input', 'item_output', 'energy_input');

    const spaceProbeBuilder = e.layeredShape('calorite_machine_casing', [
        //y=
        [ '  c  ', '  c  ', '  c  ', '     ', '     ', '     ', '     ', '     ' ],
        [ ' CCC ', ' CPC ', ' CPC ', '  T  ', '  T  ', '  T  ', '  T  ', '  T  ' ],
        [ 'cCCCc', 'cPPPc', 'cPPPc', ' T T ', ' T T ', ' T T ', ' T T ', ' T T ' ],
        [ ' CCC ', ' CPC ', ' CPC ', '  T  ', '  T  ', '  T  ', '  T  ', '  T  ' ],
        [ '  c  ', '  #  ', '  c  ', '     ', '     ', '     ', '     ', '     ' ]
    ])
        .key('C', caloriteCasing, e.noHatch())
        .key('c', caloriteCasing, spaceProbeHatch)
        .key('P', caloritePipeCasing, e.noHatch())
        .key('T', tungstensteelCoil, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Space Probe Launcher', // English name
        'space_probe_launcher', // internal name
        SPACE_PROBE_LAUNCHER, // recipe type
        spaceProbeBuilder, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'arrow'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), 
        itemOutputs => itemOutputs.addSlots(102, 35, 4, 4),
        fluidInpouts => {}, 
        fluidOutputs => {},

        /* Model Configuration */ 
        'calorite_machine_casing', // casing of the controller
        'space_probe_launcher', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});