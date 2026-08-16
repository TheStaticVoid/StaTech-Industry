// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

let RECYCLING_FACTORY;

MIMachineEvents.registerRecipeTypes((event) => {
    RECYCLING_FACTORY = event
        .register('recycling_factory')
        .withItemInputs()
        .withItemOutputs();
});



MITweaksMachineEvents.registerBatchMultiblocks((event) => {
    const noHatch = event.noHatch();
    const multiblockHatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input'
    );

    const modernIndustrializationSteelMachineCasing = event.memberOfBlock('modern_industrialization:steel_machine_casing');
    const modernIndustrializationSteelMachineCasingPipe = event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe');
    const kubejsBorosilicateGlass = event.memberOfBlock('kubejs:borosilicate_glass');
    const minecraftHopper = event.memberOfBlock('minecraft:hopper');
    const trashcansItemTrashCan = event.memberOfBlock('trashcans:item_trash_can');
    const recyclingFactoryShape = event.layeredShape('steel', [
        [' AAA ',' ABA ',' ABA ',' ABA ','  A  '],
        ['ABBBA','A C A','A D A','A C A',' BBB '],
        ['ABBBA','BC CB','BD DB','BC CB','ABBBA'],
        ['ABBBA','A C A','A D A','A C A',' BBB '],
        [' AAA ',' AEA ',' AEA ',' AEA ','  #  ']
    ])
        .key('A', modernIndustrializationSteelMachineCasing, multiblockHatch)
        .key('B', modernIndustrializationSteelMachineCasingPipe, noHatch)
        .key('C', minecraftHopper, noHatch)
        .key('D', trashcansItemTrashCan, noHatch)
        .key('E', kubejsBorosilicateGlass, noHatch)
        .build();

    event.electric(
        // General parameters
        'Recycling Factory', // English Name
        'recycling_factory', // internal name
        event.getRecipeType('modern_industrialization:recycler'), // recipe type
        recyclingFactoryShape, // multiblock shape
        (workstations) =>
            workstations.add(['modern_industrialization:recycler']),
        /* Model configuration */
        'steel', // casing of the controller
        'recycler', // overlay folder
        true, // front overlay
        true, // top overlay
        true, // side overlay
        // Batch size, EU cost multiplier
        16,
        1
    );

});
