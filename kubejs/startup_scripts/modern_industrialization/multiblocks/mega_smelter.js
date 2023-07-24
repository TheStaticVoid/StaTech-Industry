// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

let MEGA_SMELTER;

MIMachineEvents.registerRecipeTypes(e => {
    MEGA_SMELTER = e.register('mega_smelter')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;

    const heatproofCasing = e.memberOfBlock(mi('heatproof_machine_casing'));
    const cupronickelCoil = e.memberOfBlock(mi('cupronickel_coil'));
    const megaSmelterHatch = e.hatchOf('item_input', 'item_output', 'energy_input');

    const megaSmelterShape = e.layeredShape('heatproof_machine_casing', [
        //y=0      1      2
        [ 'HHH', 'CCC', 'HHH' ],
        [ 'HHH', 'C C', 'HHH' ],
        [ 'H#H', 'CCC', 'HHH' ]
    ])
        .key('H', heatproofCasing, megaSmelterHatch)
        .key('C', cupronickelCoil, e.noHatch())
        .build();

    e.simpleElectricCraftingMultiBlock(
        // General parameters
        'Mega Smelter', // English name
        'mega_smelter', // internal name
        MEGA_SMELTER, // recipe type
        megaSmelterShape, // multiblock shape

        // REI Display configuration
        e.progressBar(77, 33, 'arrow'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 1), 
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => {}, 
        fluidOutputs => {},
        
        /* Model Configuration */
        'heatproof_machine_casing', // casing of the controller
        'mega_smelter', // overlay folder
        true, // front overlay
        false, // top overlay
        false, // side overlay
    );
});