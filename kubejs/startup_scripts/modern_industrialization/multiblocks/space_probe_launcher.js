// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let SPACE_PROBE_LAUNCHER;

MIMachineEvents.registerRecipeTypes(event => {
    SPACE_PROBE_LAUNCHER = event.register('space_probe_launcher')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(event => {
    const stainlessCasing = event.memberOfBlock(mi('clean_stainless_steel_machine_casing'));
    const caloritePipeCasing = event.memberOfBlock(mi('stainless_steel_machine_casing_pipe'));
    const kanthalCoil = event.memberOfBlock(mi('kanthal_coil'));
    const spaceProbeHatch = event.hatchOf('item_input', 'item_output', 'energy_input');

    const spaceProbeBuilder = event.layeredShape('clean_stainless_steel_machine_casing', [
        //y=
        [ '  c  ', '  c  ', '  c  ', '     ', '     ', '     ', '     '],
        [ ' CCC ', ' CPC ', ' CPC ', '  K  ', '  K  ', '  K  ', '  K  '],
        [ 'cCCCc', 'cPPPc', 'cPPPc', ' K K ', ' K K ', ' K K ', ' K K '],
        [ ' CCC ', ' CPC ', ' CPC ', '  K  ', '  K  ', '  K  ', '  K  '],
        [ '     ', '  #  ', '  c  ', '     ', '     ', '     ', '     ']
    ])
        .key('C', stainlessCasing, event.noHatch())
        .key('c', stainlessCasing, spaceProbeHatch)
        .key('P', caloritePipeCasing, event.noHatch())
        .key('K', kanthalCoil, event.noHatch())
        .build();

    event.simpleElectricCraftingMultiBlock(
        // General parameters
        'Space Probe Launcher', // English name
        'space_probe_launcher', // internal name
        SPACE_PROBE_LAUNCHER, // recipe type
        spaceProbeBuilder, // multiblock shape

        // REI Display configuration
        event.progressBar(77, 33, 'rocket'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 2), 
        itemOutputs => itemOutputs.addSlots(102, 35, 4, 4),
        fluidInputs => {}, 
        fluidOutputs => {},

        /* Model Configuration */ 
        'clean_stainless_steel_machine_casing', // casing of the controller
        'space_probe_launcher', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});