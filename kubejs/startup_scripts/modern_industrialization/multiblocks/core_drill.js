let CORE_DRILL;

MIMachineEvents.registerRecipeTypes(e => {
    CORE_DRILL = e.register('core_drill')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let qm = (id) => `quarrymod:${id}`;

    const coreDrillHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input', 'fluid_output');
    const stainlessSteelCasing = e.memberOfBlock(mi('clean_stainless_steel_machine_casing'));
    const deshBlock = e.memberOfBlock(ad('desh_block'));
    const deshPillar = e.memberOfBlock(ad('desh_pillar'));
    const glowingIronPillar = e.memberOfBlock(ad('glowing_iron_pillar'));
    const glowingOstrumPillar = e.memberOfBlock(ad('glowing_ostrum_pillar'));
    const quarryTube = e.memberOfBlock(qm('drill_tube'));
    const caloritePipeCasing = e.memberOfBlock(mi('calorite_machine_casing_pipe'));
    const caloriteMachineCasing = e.memberOfBlock(mi('calorite_machine_casing'));
    //          0                   1               2                  3                4               5                   6                   7               8                   9               10
    const coreDrillShape = e.layeredShape('clean_stainless_steel_machine_casing', [
        [ 'OS          SO', 'OS          SO', 'OS          SO', 'OS          SO', '              ', '              ', '              ', '              ', '              ', '              ', '              ' ],
        [ 'SS          SS', 'SS          SS', 'SS          SS', 'SS          SS', ' OS        SO ', ' OS        SO ', ' OS        SO ', '    IIIIII    ', '              ', '              ', '              ' ],
        [ '              ', '              ', '              ', '              ', ' SS        SS ', ' SS        SS ', ' SSS      SSS ', '  IIcCCCCcII  ', '              ', '              ', '              ' ],
        [ '              ', '              ', '              ', '              ', '              ', '              ', '  S   PP   S  ', '  IcCC  CCcI  ', '     dddd     ', '              ', '              ' ],
        [ '              ', '              ', '      PP      ', '      PP      ', '      PP      ', '      PP      ', '     P  P     ', ' IcCC    CCcI ', '    D    D    ', '     DDDD     ', '              ' ],
        [ '      PP      ', '      PP      ', '     P  P     ', '     P  P     ', '     P  P     ', '     P  P     ', '    P    P    ', ' ICC      CCI ', '   d      d   ', '    DD  DD    ', '      DD      ' ],
        [ '     PQQP     ', '     PQQP     ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '   P  QQ  P   ', ' IC   QQ   CI ', '   d  QQ  d   ', '    D QQ D    ', '     DDDD     ' ],
        [ '     PQQP     ', '     PQQP     ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '    P QQ P    ', '   P  QQ  P   ', ' IC   QQ   CI ', '   d  QQ  d   ', '    D QQ D    ', '     DDDD     ' ],
        [ '      PP      ', '      PP      ', '     P  P     ', '     P  P     ', '     P  P     ', '     P  P     ', '    P    P    ', ' ICC      CCI ', '   d      d   ', '    DD  DD    ', '      DD      ' ],
        [ '              ', '              ', '      PP      ', '      PP      ', '      PP      ', '      PP      ', '     P  P     ', ' IcCC    CCcI ', '    D    D    ', '     DDDD     ', '              ' ],
        [ '              ', '              ', '              ', '              ', '              ', '              ', '  S   PP   S  ', '  IcCC  CCcI  ', '     d#dd     ', '              ', '              ' ],
        [ '              ', '              ', '              ', '              ', ' SS        SS ', ' SS        SS ', ' SSS      SSS ', '  IIcCCCCcII  ', '              ', '              ', '              ' ],
        [ 'SS          SS', 'SS          SS', 'SS          SS', 'SS          SS', ' OS        SO ', ' OS        SO ', ' OS        SO ', '    IIIIII    ', '              ', '              ', '              ' ],
        [ 'OS          SO', 'OS          SO', 'OS          SO', 'OS          SO', '              ', '              ', '              ', '              ', '              ', '              ', '              ' ]
    ])
        .key('O', glowingOstrumPillar, e.noHatch())
        .key('S', stainlessSteelCasing, e.noHatch())
        .key('P', deshPillar, e.noHatch())
        .key('Q', quarryTube, e.noHatch())
        .key('c', caloritePipeCasing, e.noHatch())
        .key('C', caloriteMachineCasing, e.noHatch())
        .key('I', glowingIronPillar, e.noHatch())
        .key('d', deshBlock, coreDrillHatch)
        .key('D', deshBlock, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Core Mining Drill', // English name
        'core_drill', // internal name
        CORE_DRILL, // recipe type
        coreDrillShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'triple_arrow'),
        // REI Item Inputs, item, outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35), 
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(56, 53), 
        fluidOutputs => fluidOutputs.addSlot(102, 53),

        /* Model configuration */
        'clean_stainless_steel_machine_casing', // casing of the controller
        'core_drill', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});