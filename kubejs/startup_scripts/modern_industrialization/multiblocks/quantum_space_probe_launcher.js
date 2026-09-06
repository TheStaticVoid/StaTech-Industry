// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let QUANTUM_SPACE_PROBE_LAUNCHER;

MIMachineEvents.registerRecipeTypes((e) => {
    QUANTUM_SPACE_PROBE_LAUNCHER = e
        .register('quantum_space_probe_launcher')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines((e) => {
    const caloriteCasing = e.memberOfBlock(mi('calorite_machine_casing'));
    const caloritePipeCasing = e.memberOfBlock(
        mi('calorite_machine_casing_pipe')
    );
    const tungstensteelCoil = e.memberOfBlock(mi('tungstensteel_coil'));
    const spaceProbeHatch = e.hatchOf(
        'item_input',
        'item_output',
        'energy_input'
    );

    const quantumSpaceProbeBuilder = e
        .layeredShape('calorite_machine_casing', [
        //y=
        [ ' ccc ', '  c  ', '  c  ', '     ', '     ', '     ', '     ', '     ' ],
        [ 'cCCCc', ' CPC ', ' CPC ', '  T  ', '  T  ', '  T  ', '  T  ', '  T  ' ],
        [ 'cCCCc', 'cPPPc', 'cPPPc', ' T T ', ' T T ', ' T T ', ' T T ', ' T T ' ],
        [ 'cCCCc', ' CPC ', ' CPC ', '  T  ', '  T  ', '  T  ', '  T  ', '  T  ' ],
        [ ' ccc ', '  #  ', '  c  ', '     ', '     ', '     ', '     ', '     ' ]
    ])
        .key('C', caloriteCasing, e.noHatch())
        .key('c', caloriteCasing, spaceProbeHatch)
        .key('P', caloritePipeCasing, e.noHatch())
        .key('T', tungstensteelCoil, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Quantum Space Probe Launcher', // English name
        'quantum_space_probe_launcher', // internal name
        QUANTUM_SPACE_PROBE_LAUNCHER, // recipe type
        quantumSpaceProbeBuilder, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'rocket'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlot(56, 35),
        (itemOutputs) => itemOutputs.addSlots(102, 35, 4, 4),
        (fluidInputs) => {},
        (fluidOutputs) => {},

        /* Model Configuration */
        'calorite_machine_casing', // casing of the controller
        'space_probe_launcher', // overlay folder
        true, // front overlay
        false, // top overlay
        false // side overlay
    );
});
