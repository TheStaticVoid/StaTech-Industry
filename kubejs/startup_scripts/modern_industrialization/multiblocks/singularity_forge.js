let SINGULARITY_FORGE;

MIMachineEvents.registerRecipeTypes(e => {
    SINGULARITY_FORGE = e.register('singularity_forge')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let ch = (id) => `chisel:${id}`;

    const singularityForgeHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input');
    const plasmaCasing = e.memberOfBlock(mi('plasma_handling_iridium_machine_casing'));
    const iridiumPipeCasing = e.memberOfBlock(mi('iridium_machine_casing_pipe'));
    const glowingCaloritePillar = e.memberOfBlock(ad('glowing_calorite_pillar'));
    const superConductorCoil = e.memberOfBlock(mi('superconductor_coil'));
    const crypticEndRod = e.memberOfBlock('byg:cryptic_end_rod');
    const llamaPurpleWool = e.memberOfBlock(ch('llama/purple_wool'));
    const caloriteMachineCasing = e.memberOfBlock(mi('calorite_machine_casing'));
    //              0                   1                   2                   3                       4                   5                   6                   7                       8                   9                       10              11                  12                  13                      14                  15                      16
    const singularityForgeShape = e.layeredShape('plasma_handling_iridium_machine_casing', [
        [ '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '      PPPPP      ', '      PPPPP      ', '      PPPPP      ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ' ],
        [ '                 ', '                 ', '                 ', '       PPP       ', '       PPP       ', '       PPP       ', '      IPPPI      ', '      PSCSP      ', '      PCCCP      ', '      PSCSP      ', '      IPPPI      ', '       PPP       ', '       PPP       ', '       PPP       ', '                 ', '                 ', '                 ' ],
        [ '                 ', '                 ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '        G        ', '       GGG       ', '        G        ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        E        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '       PPP       ', '      IPPPI      ', '                 ', '                 ', '                 ', '                 ', ' I             I ', 'PP             PP', 'PP             PP', 'PP             PP', ' I             I ', '                 ', '                 ', '                 ', '                 ', '      IPPPI      ', '       PPP       ' ],
        [ '      PPPPP      ', '   pppPSCSPppp   ', '  P     G     P  ', ' P             P ', ' P             P ', ' P             P ', 'PP             PP', 'PS             SP', 'PCG     L     GCP', 'PS             SP', 'PP             PP', ' P             P ', ' P             P ', ' P             P ', '  P     G     P  ', '   PPPPSCSPPPP   ', '      PPPPP      ' ],
        [ '      PPPPP      ', '   PPPPCCCPPPP   ', '  P    GGG    P  ', ' P      G      P ', ' P      G      P ', ' P      E      P ', 'PP             PP', 'PCG     L     GCP', 'PCGGGE LLL EGGGCP', 'PCG     L     GCP', 'PP             PP', ' P      E      P ', ' P      G      P ', ' P      G      P ', '  P    GGG    P  ', '   PPPPCCCPPPP   ', '      PPPPP      ' ],
        [ '      PPPPP      ', '   p#pPSCSPppp   ', '  P     G     P  ', ' P             P ', ' P             P ', ' P             P ', 'PP             PP', 'PS             SP', 'PCG     L     GCP', 'PS             SP', 'PP             PP', ' P             P ', ' P             P ', ' P             P ', '  P     G     P  ', '   PPPPSCSPPPP   ', '      PPPPP      ' ],
        [ '       PPP       ', '      IPPPI      ', '                 ', '                 ', '                 ', '                 ', ' I             I ', 'PP             PP', 'PP             PP', 'PP             PP', ' I             I ', '                 ', '                 ', '                 ', '                 ', '      IPPPI      ', '       PPP       ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        E        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '       pPp       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '        G        ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ' ],
        [ '                 ', '                 ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '        G        ', '       GGG       ', '        G        ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '                 ', '                 ' ],
        [ '                 ', '                 ', '                 ', '       PPP       ', '       PPP       ', '       PPP       ', '      IPPPI      ', '      PSCSP      ', '      PCCCP      ', '      PSCSP      ', '      IPPPI      ', '       PPP       ', '       PPP       ', '       PPP       ', '                 ', '                 ', '                 ' ],
        [ '                 ', '                 ', '                 ', '                 ', '                 ', '                 ', '       PPP       ', '      PPPPP      ', '      PPPPP      ', '      PPPPP      ', '       PPP       ', '                 ', '                 ', '                 ', '                 ', '                 ', '                 ' ]
    ])
        .key('P', plasmaCasing, e.noHatch())
        .key('p', plasmaCasing, singularityForgeHatch)
        .key('I', iridiumPipeCasing, e.noHatch())
        .key('G', glowingCaloritePillar, e.noHatch())
        .key('S', superConductorCoil, e.noHatch())
        .key('C', caloriteMachineCasing, e.noHatch())
        .key('E', crypticEndRod, e.noHatch())
        .key('L', llamaPurpleWool, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Quasi Quantum Singularity Forge', // English name
        'singularity_forge', // internal name
        SINGULARITY_FORGE, // recipe type
        singularityForgeShape, // multiblock shape
        
        // REI Display configuration
        e.progressBar(71, 33, 'wiremill'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(25, 35, 2, 2), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(25, 71), fluidOutputs => {},

        /* Model configuration */
        'plasma_handling_iridium_machine_casing', // casing of the controller
        'singularity_forge', // overlay folder
        true, // front overlay
        true, // top overlay
        false, // side overlay
    );
});