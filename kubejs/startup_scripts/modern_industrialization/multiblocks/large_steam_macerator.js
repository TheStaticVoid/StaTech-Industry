// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let STEAM_MACERATOR;

MIMachineEvents.registerRecipeTypes(e => {
    STEAM_MACERATOR = e.register('large_steam_macerator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const bricks = e.memberOfBlock(mc('bricks'));
    const bronzeBricks = e.memberOfBlock(mi('bronze_plated_bricks'));
    const bronzePipeCasing = e.memberOfBlock(mi('bronze_machine_casing_pipe'));
    const steamMaceratorHatch = e.hatchOf('item_input', 'item_output', 'fluid_input');

    const steamMaceratorBuilder = e.layeredShape('bricks', [
        //y=0      1      2      3
        [ 'BBB', 'PPP', 'PPP', 'PPP' ],
        [ 'BBB', 'PCP', 'PCP', 'PPP' ],
        [ 'BBB', 'P#P', 'PPP', 'PPP' ]
    ])
        .key('B', bricks, steamMaceratorHatch)
        .key('P', bronzeBricks, e.noHatch())
        .key('C', bronzePipeCasing, e.noHatch())
        .build();

    e.simpleSteamCraftingMultiBlock(
        // General parameters
        'Large Steam Macerator', // English name
        'large_steam_macerator', // internal name
        STEAM_MACERATOR, // recipe type
        steamMaceratorBuilder, // multiblock shape

        // REI Display Configuration
        e.progressBar(77, 33, 'macerate'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35),
        itemOutputs => itemOutputs.addSlots(102, 35, 2, 2),
        fluidInputs => {},
        fluidOutputs => {},

        /* Model configuration */
        'bronze_plated_bricks',
        'large_steam_macerator', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    )
});