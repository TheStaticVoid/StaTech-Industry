// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let CORE_DRILL;

MIMachineEvents.registerRecipeTypes((event) => {
    CORE_DRILL = event
        .register('core_drill')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
    const coreDrillHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input',
        'fluid_output'
    );
    const stainlessSteelCasing = event.memberOfBlock(
        mi('clean_stainless_steel_machine_casing')
    );
    const stainlessSteelPipeCasing = event.memberOfBlock(
        mi('stainless_steel_machine_casing_pipe')
    );
    const deshBlock = event.memberOfBlock(mi('desh_machine_casing'));
    const deshPipe = event.memberOfBlock(mi('desh_machine_casing_pipe'));
    const glowingIronPillar = event.memberOfBlock(kj('glowing_steel_pillar'));
    const glowingOstrumPillar = event.memberOfBlock(
        kj('glowing_ostrum_pillar')
    );
    const caloritePipeCasing = event.memberOfBlock(
        mi('calorite_machine_casing_pipe')
    );
    const caloriteMachineCasing = event.memberOfBlock(
        mi('calorite_machine_casing')
    );
    //          1                   2               3                  4                5               6                   7                   7               8                   9               10
    const coreDrillShape = event
        .layeredShape('desh_machine_casing', [
            [
                'OS         SO',
                'OS         SO',
                'OS         SO',
                '             ',
                '             ',
                '             ',
                '             ',
                '             ',
                '             ',
            ],
            [
                'SZ         ZS',
                'SZ         ZS',
                'SZ         ZS',
                ' OS       SO ',
                ' OS       SO ',
                ' OS       SO ',
                '    IIIII    ',
                '             ',
                '             ',
            ],
            [
                '             ',
                '             ',
                '             ',
                ' SZ       ZS ',
                ' SZ       ZS ',
                ' SZZ     ZZS ',
                '  IIcCCCcII  ',
                '             ',
                '             ',
            ],
            [
                '             ',
                '             ',
                '             ',
                '             ',
                '             ',
                '  Z  PDP  Z  ',
                '  IcCPDPCcI  ',
                '     PdP     ',
                '             ',
            ],
            [
                '             ',
                '             ',
                '             ',
                '     PDP     ',
                '     PDP     ',
                '    DD DD    ',
                ' IcCDD DDCcI ',
                '    dDDDd    ',
                '     PdP     ',
            ],
            [
                '      P      ',
                '     PDP     ',
                '     PDP     ',
                '    P   P    ',
                '    P   P    ',
                '   PD   DP   ',
                ' ICPD   DPCI ',
                '   PD   DP   ',
                '    PPDPP    ',
            ],
            [
                '     PPP     ',
                '     D D     ',
                '     D D     ',
                '    D   D    ',
                '    D   D    ',
                '   D     D   ',
                ' ICD     DCI ',
                '   dD   Dd   ',
                '    dDDDd    ',
            ],
            [
                '      P      ',
                '     PDP     ',
                '     PDP     ',
                '    P   P    ',
                '    P   P    ',
                '   PD   DP   ',
                ' ICPD   DPCI ',
                '   PD   DP   ',
                '    PPDPP    ',
            ],
            [
                '             ',
                '             ',
                '             ',
                '     PDP     ',
                '     PDP     ',
                '    DD DD    ',
                ' IcCDD DDCcI ',
                '    dD#Dd    ',
                '     PdP     ',
            ],
            [
                '             ',
                '             ',
                '             ',
                '             ',
                '             ',
                '  Z  PDP  Z  ',
                '  IcCPDPCcI  ',
                '     P P     ',
                '             ',
            ],
            [
                '             ',
                '             ',
                '             ',
                ' SZ       ZS ',
                ' SZ       ZS ',
                ' SZZ     ZZS ',
                '  IIcCCCcII  ',
                '             ',
                '             ',
            ],
            [
                'SZ         ZS',
                'SZ         ZS',
                'SZ         ZS',
                ' OS       SO ',
                ' OS       SO ',
                ' OS       SO ',
                '    IIIII    ',
                '             ',
                '             ',
            ],
            [
                'OS         SO',
                'OS         SO',
                'OS         SO',
                '             ',
                '             ',
                '             ',
                '             ',
                '             ',
                '             ',
            ],
        ])
        .key('O', glowingOstrumPillar, event.noHatch())
        .key('S', stainlessSteelCasing, event.noHatch())
        .key('P', deshPipe, event.noHatch())
        .key('c', caloritePipeCasing, event.noHatch())
        .key('C', caloriteMachineCasing, event.noHatch())
        .key('I', glowingIronPillar, event.noHatch())
        .key('d', deshBlock, coreDrillHatch)
        .key('D', deshBlock, event.noHatch())
        .key('Z', stainlessSteelPipeCasing, event.noHatch())

        .build();

    event.simpleElectricCraftingMultiBlock(
        // General parameters
        'Core Mining Drill', // English name
        'core_drill', // internal name
        CORE_DRILL, // recipe type
        coreDrillShape, // multiblock shape

        // REI Display configuration
        event.progressBar(77, 33, 'triple_arrow'),
        // REI Item Inputs, item, outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlot(56, 35),
        (itemOutputs) => itemOutputs.addSlot(102, 35),
        (fluidInputs) => fluidInputs.addSlot(56, 53),
        (fluidOutputs) => fluidOutputs.addSlot(102, 53),

        /* Model configuration */
        'desh_machine_casing', // casing of the controller
        'core_drill', // overlay folder
        true, // front overlay
        false, // top overlay
        false // side overlay
    );
});
