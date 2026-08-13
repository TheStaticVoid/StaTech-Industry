StartupEvents.registry('block', event => {

    event
        .create('quarry_bauxite_ore')
        .displayName('Quarry Bauxite Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_coal_ore')
        .displayName('Quarry Coal Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_copper_ore')
        .displayName('Quarry Copper Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_diamond_ore')
        .displayName('Quarry Diamond Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_emerald_ore')
        .displayName('Quarry Emerald Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_gold_ore')
        .displayName('Quarry Gold Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_iron_ore')
        .displayName('Quarry Iron Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_lapis_ore')
        .displayName('Quarry Lapis Lazuli Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_lead_ore')
        .displayName('Quarry Lead Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_lignite_ore')
        .displayName('Quarry Lignite Coal Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_platinum_ore')
        .displayName('Quarry Platinum Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_quartz_ore')
        .displayName('Quarry Quartz Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_redstone_ore')
        .displayName('Quarry Redstone Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_salt_ore')
        .displayName('Quarry Salt Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_tin_ore')
        .displayName('Quarry Tin Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_titanium_ore')
        .displayName('Quarry Titanium Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_uranium_ore')
        .displayName('Quarry Uranium Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)

    event
        .create('quarry_zinc_ore')
        .displayName('Quarry Zinc Ore')
        .soundType('stone')
        .hardness(-1)
        .resistance(3600000)
        .requiresTool(true)
})


StartupEvents.registry('item', (event) => {

    event
        .create('wrap_of_helmets')
        .displayName('Wrap of Quantum Nano Helmets')
        .rarity('Epic')
        //.maxStackSize = 16
        .tooltip('Four Helmets');

    event
        .create('wrap_of_chestplates')
        .displayName('Wrap of Quantum Nano Chestplates')
        .rarity('Epic')
        //.maxStackSize = 16
        .tooltip('Four Chestplates');

    event
        .create('wrap_of_leggings')
        .displayName('Wrap of Quantum Nano Leggings')
        .rarity('Epic')
        //.maxStackSize = 16
        .tooltip('Four Leggings');

    event
        .create('wrap_of_boots')
        .displayName('Wrap of Quantum Nano Boots')
        .rarity('Epic')
        //.maxStackSize = 16
        .tooltip('Four Boots');

    event
        .create('wrap_of_sabers')
        .displayName('Wrap of Quantum Nano Sabers')
        .rarity('Epic')
        //.maxStackSize = 16
        .tooltip('Four Sabers');

    event
        .create('bundle_of_analog_components')
        .displayName('Bundle of Analog Components')

    // -- IRON DRILL -- //

    event
        .create('iron_drill')
        .displayName('Iron Drill')

    event
        .create('iron_drill_head')
        .displayName('Iron Drill Head')

    event
        .create('iron_curved_plate')
        .displayName('Iron Curved Plate')
});

ItemEvents.modification(event => {
    event.modify('artifacts:everlasting_beef', item => {
        item.setFood({
            saturation: 0,
            nutrition: 0
        });
    })

    event.modify('artifacts:eternal_steak', item => {
        item.setFood({
            saturation: 0,
            nutrition: 0
        });
    })
})

let BRONZE_QUARRY;

MIMachineEvents.registerRecipeTypes((event) => {
    BRONZE_QUARRY = event
        .register('bronze_quarry')
        .withItemInputs()
        .withItemOutputs();
});

MIMachineEvents.registerMachines((event) => {
    const bronzeCasing = event.memberOfBlock(
        mi('bronze_plated_bricks')
    );
    const bronzePipeCasing = event.memberOfBlock(
        mi('bronze_machine_casing_pipe')
    );
    const chain = event.memberOfBlock(
        mc('chain')
    );
    const bronzeQuarryHatch = event.hatchOf(
        'item_input',
        'item_output',
        'fluid_input'
    );

    const bronzeQuarryBuilder = event
        .layeredShape('bronze_plated_bricks', [
            // y=
            ['ccc', 'ccc', '   ', '   ', '   '],
            ['cRc', 'cRc', 'PRP', 'PRP', 'PCP'],
            ['c#c', 'ccc', '   ', '   ', '   '],
        ])
        .key('C', bronzeCasing, event.noHatch())
        .key('c', bronzeCasing, bronzeQuarryHatch)
        .key('P', bronzePipeCasing, event.noHatch())
        .key('R', chain, event.noHatch())
        .build();

    event.simpleSteamCraftingMultiBlock(
        // General parameters
        'Bronze Quarry', // English name
        'bronze_quarry', // internal name
        BRONZE_QUARRY, // recipe type
        bronzeQuarryBuilder, // multiblock shape

        // REI Display configuration
        event.progressBar(77, 33, 'arrow'),
        // REI Item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(56, 35, 1, 1),
        (itemOutputs) => itemOutputs.addSlots(102, 35, 4, 4),
        (fluidInputs) => { },
        (fluidOutputs) => { },

        /* Model Configuration */
        'bronze_plated_bricks', // casing of the controller
        'steam_quarry', // overlay folder
        true, // front overlay
        false, // top overlay
        false // side overlay
    );
});
