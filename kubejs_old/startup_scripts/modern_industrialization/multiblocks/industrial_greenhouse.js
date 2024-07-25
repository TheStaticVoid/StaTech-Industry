// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let GREENHOUSE;

MIMachineEvents.registerRecipeTypes(e => {
    GREENHOUSE = e.register('greenhouse')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let fb = (id) => `factory_blocks:${id}`;

    const greenhouseHatch = e.hatchOf('item_input', 'item_output', 'energy_input', 'fluid_input');
    const steelCasing = e.memberOfBlock(mi('steel_machine_casing'));
    const glass = e.memberOfBlock(mc('glass'));
    const metalBox = e.memberOfBlock(fb('metalbox'));
    const rustyScaffold = e.memberOfBlock(fb('rusty_scaffold'));
    const glowstone = e.memberOfBlock(mc('glowstone'));
    const grass = e.memberOfBlock(mc('grass_block'));
    const log = e.memberOfBlock(mc('oak_log'));
    const leaves = e.memberOfBlock(mc('oak_leaves'));
    const dirt = e.memberOfBlock(mc('dirt'))
    //      0           1           2           3         4          5          6
    const greenhouseShape = e.layeredShape('steel', [
        [ '  SSS  ', '  GGG  ', '  GGG  ', '  GGG  ', '  RRR  ', '       ', '       ' ],
        [ ' SAAAS ', ' M   M ', ' M   M ', ' M   M ', ' M   M ', '  GGG  ', '       ' ],
        [ 'SAAAAAS', 'G     G', 'G  L  G', 'G  L  G', 'R     R', ' G   G ', '  GGG  ' ],
        [ 'SAADAAS', 'G  W  G', 'G LWL G', 'G LWL G', 'R  L  R', ' G   G ', '  GOG  ' ],
        [ 'SAAAAAS', 'G     G', 'G  L  G', 'G  L  G', 'R     R', ' G   G ', '  GGG  ' ],
        [ ' SAAAS ', ' M   M ', ' M   M ', ' M   M ', ' M   M ', '  GGG  ', '       ' ],
        [ '  S#S  ', '  GGG  ', '  GGG  ', '  GGG  ', '  RRR  ', '       ', '       ' ]
    ])
        .key('S', steelCasing, greenhouseHatch)
        .key('A', grass, e.noHatch())
        .key('M', metalBox, e.noHatch())
        .key('W', log, e.noHatch())
        .key('G', glass, e.noHatch())
        .key('L', leaves, e.noHatch())
        .key('R', rustyScaffold, e.noHatch())
        .key('O', glowstone, e.noHatch())
        .key('D', dirt, e.noHatch())
        .build();
    
    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Industrial Greenhouse', // English name
        'greenhouse', // internal name
        GREENHOUSE, // recipe type
        greenhouseShape, // multiblock shape

        // REI Display configuration
        e.progressBar(71, 33, 'extract'),
        // REI Item Inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(25, 35, 2, 1), itemOutputs => itemOutputs.addSlots(102, 35, 2, 2),
        fluidInputs => fluidInputs.addSlot(25, 53), fluidOutputs => {},

        /* Model configuration */
        'steel', // casing of the controller
        'greenhouse', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});