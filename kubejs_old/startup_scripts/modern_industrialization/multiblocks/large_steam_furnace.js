// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let STEAM_FURNACE;

MIMachineEvents.registerRecipeTypes(e => {
    STEAM_FURNACE = e.register('large_steam_furnace')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();
});

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const stoneBricks = e.memberOfBlock(mc('stone_bricks'));
    const bricks = e.memberOfBlock(mc('bricks'));
    const steamFurnaceHatch = e.hatchOf('item_input', 'item_output', 'fluid_input');

    const steamFurnaceBuilder = e.layeredShape('bricks', [
        //y=0      1      2
        [ 'SSS', 'BBB', 'BBB' ],
        [ 'SSS', 'B B', 'B B' ],
        [ 'SSS', 'B#B', 'BBB' ]
    ])
        .key('S', stoneBricks, e.noHatch())
        .key('B', bricks, steamFurnaceHatch)
        .build();


    e.simpleSteamCraftingMultiBlock(
        // General paramters
        'Large Steam Furnace', // English name
        'large_steam_furnace', // internal_name
        STEAM_FURNACE, // recipe type
        steamFurnaceBuilder, // multiblock shape

        // REI Display Configuration
        e.progressBar(77, 33, 'furnace'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlot(56, 35),
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => {},
        fluidOutputs => {},

        /* Model configuration */
        'bricks', // casing of the controller
        'large_steam_furnace', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    )
});