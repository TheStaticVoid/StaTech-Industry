// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let GREENHOUSE;

MIMachineEvents.registerRecipeTypes((event) => {
    GREENHOUSE = event
        .register('greenhouse')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines((event) => {
    const greenhouseHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input'
    );
    const steelCasing = event.memberOfBlock(mi('steel_machine_casing'));
    const glass = event.memberOfBlock(mc('glass'));
    const metalBox = event.memberOfBlock(fb('metalbox'));
    const rustyScaffold = event.memberOfBlock(fb('rusty_scaffold'));
    const glowstone = event.memberOfBlock(mc('glowstone'));
    const grass = event.memberOfBlock(mc('grass_block'));
    const log = event.memberOfBlock(mc('oak_log'));
    const leaves = event.memberOfBlock(mc('oak_leaves'));
    const dirt = event.memberOfBlock(mc('dirt'));
    //      0           1           2           3         4          5          6
    const greenhouseShape = event
        .layeredShape('steel', [
            [
                '  SSS  ',
                '  GGG  ',
                '  GGG  ',
                '  GGG  ',
                '  RRR  ',
                '       ',
                '       ',
            ],
            [
                ' SAAAS ',
                ' M   M ',
                ' M   M ',
                ' M   M ',
                ' M   M ',
                '  GGG  ',
                '       ',
            ],
            [
                'SAAAAAS',
                'G     G',
                'G  L  G',
                'G  L  G',
                'R     R',
                ' G   G ',
                '  GGG  ',
            ],
            [
                'SAADAAS',
                'G  W  G',
                'G LWL G',
                'G LWL G',
                'R  L  R',
                ' G   G ',
                '  GOG  ',
            ],
            [
                'SAAAAAS',
                'G     G',
                'G  L  G',
                'G  L  G',
                'R     R',
                ' G   G ',
                '  GGG  ',
            ],
            [
                ' SAAAS ',
                ' M   M ',
                ' M   M ',
                ' M   M ',
                ' M   M ',
                '  GGG  ',
                '       ',
            ],
            [
                '  S#S  ',
                '  GGG  ',
                '  GGG  ',
                '  GGG  ',
                '  RRR  ',
                '       ',
                '       ',
            ],
        ])
        .key('S', steelCasing, greenhouseHatch)
        .key('A', grass, event.noHatch())
        .key('M', metalBox, event.noHatch())
        .key('W', log, event.noHatch())
        .key('G', glass, event.noHatch())
        .key('L', leaves, event.noHatch())
        .key('R', rustyScaffold, event.noHatch())
        .key('O', glowstone, event.noHatch())
        .key('D', dirt, event.noHatch())
        .build();

    event.simpleElectricCraftingMultiBlock(
        // General parameters
        'Industrial Greenhouse', // English name
        'greenhouse', // internal name
        GREENHOUSE, // recipe type
        greenhouseShape, // multiblock shape

        // REI Display configuration
        event.progressBar(71, 33, 'extract'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(25, 35, 2, 1),
        (itemOutputs) => itemOutputs.addSlots(102, 35, 2, 2),
        (fluidInputs) => fluidInputs.addSlot(25, 53),
        (fluidOutputs) => {},

        /* Model configuration */
        'steel', // casing of the controller
        'greenhouse', // overlay folder
        true, // front overlay
        false, // top overlay
        false // side overlay
    );
});
