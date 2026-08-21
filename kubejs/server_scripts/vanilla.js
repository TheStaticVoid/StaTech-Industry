// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:minecraft/${id}`;

    // -- REMOVED RECIPES -- //
    const VANILLA_DELETED = [
        mc('diamond_helmet'),
        mc('diamond_chestplate'),
        mc('diamond_leggings'),
        mc('diamond_boots'),
        mc('diamond_pickaxe'),
        mc('diamond_axe'),
        mc('diamond_sword'),
        mc('diamond_hoe'),
        mc('diamond_shovel'),
        mc('piston'),
        mc('paper'),
        mc('iron_bars'),
        mc('bucket'),
        mc('ender_eye'),
        mc('bread'),
        mc('netherite_ingot'),
        mc('bricks'),
        mc('clock'),
        mc('compass'),
        mc('chain'),
        mc('iron_helmet'),
        mc('iron_chestplate'),
        mc('iron_leggings'),
        mc('iron_boots')
    ];
    VANILLA_DELETED.forEach((id) => event.remove({ id: id }));

    const ALT_METALS = ['lead', 'silver', 'tin', 'nickel'];

    // -- BUNDLE -- //
    event
        .shaped(mc('bundle'), [' S ', 'L L', ' L '], {
            S: '#c:strings',
            L: '#c:leathers',
        })
        .id(st('bundle'));

    // -- PISTON -- //
    event
        .shaped(mc('piston'), ['WWW', 'CIC', 'CRC'], {
            W: '#minecraft:wooden_slabs',
            C: '#minecraft:stone_tool_materials',
            I: '#c:rods/iron',
            R: '#c:dusts/redstone',
        })
        .id(st('piston'));

    // -- IRON BARS -- //
    event
        .shaped('16x ' + mc('iron_bars'), ['RRR', 'RRR'], {
            R: '#c:rods/iron',
        })
        .id(st('iron_bars'));

    // -- BUCKET -- //
    event
        .shaped(mc('bucket'), ['P P', ' P '], {
            P: '#c:plates/iron',
        })
        .id(st('bucket'));

    event
        .shaped('16x ' + mc('stick'), ['L', 'L'], {
            L: '#minecraft:logs',
        })
        .id(st('sticks_from_log'));

    // -- BUCKET ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped(mc('bucket'), [ 'P P', ' P '], { P: `#c:plates/${id}` }).id(st(`bucket_${id}`));
    });

    // -- HOPPER ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped(mc('hopper'), [ 'I I', 'ICI', ' I '], { I: `#c:ingots/${id}`, C: '#c:chests/wooden' }).id(st(`hopper_${id}`));
    });

    // -- DETECTOR RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped('6x ' + mc('detector_rail'), [ 'I I', 'IPI', 'IRI'], {I: `#c:ingots/${id}`, P: mc('stone_pressure_plate'), R: '#c:dusts/redstone' }).id(st(`detector_rail_${id}`));
    });

    // -- ACTIVATOR RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped('6x ' + mc('activator_rail'), ['ISI', 'IRI', 'ISI'], { I: `#c:ingots/${id}`, S: '#c:rods/wooden', R: mc('redstone_torch') }).id(st(`activator_rail_${id}`));
    });

    // -- RAIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped('16x ' + mc('rail'), ['I I', 'ISI', 'I I'], { I: `#c:ingots/${id}`, S: '#c:rods/wooden' }).id(st(`rail_${id}`));
    });

    // -- CAULDRON ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped(mc('cauldron'), [ 'I I', 'I I', 'III'], { I: `#c:ingots/${id}`}).id(st(`cauldron_${id}`));
    });

    // -- ANVIL ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped(mc('anvil'), [ 'BBB', ' I ', 'III'], { B: `#c:storage_blocks/${id}`, I: `#c:ingots/${id}` }).id(st(`anvil_${id}`));
    });

    // -- MINECART ALT METALS -- //
    ALT_METALS.forEach(id => {
        event.shaped(mc('minecart'), ['I I', 'III'], { I: `#c:ingots/${id}` }).id(st(`minecart_${id}`));
    });

    // -- CLOCK -- //
    event
        .shaped(mc('clock'), [' R ', 'RGR', ' R '], {
            R: mc('redstone'),
            G: mi('gold_ring'),
        })
        .id(st('clock'));

    // -- COMPASS -- //
    event
        .shaped(mc('compass'), [' R ', 'ROR', ' R '], {
            R: mc('redstone'),
            O: mi('iron_ring'),
        })
        .id(st('compass'));

    // -- CHAINS -- //
    event
        .shaped('8x ' + mc('chain'), ['O', 'O', 'O'], {
            O: mi('iron_ring'),
        })
        .id(st('chain'));

    // -- IRON ARMOR -- //
    event
        .shaped(mc('iron_helmet'), ['III', 'I I'], {
            I: mi('iron_plate')
        })
        .id(st('iron_helmet'));

    event
        .shaped(mc('iron_chestplate'), ['I I', 'III', 'III'], {
            I: mi('iron_plate')
        })
        .id(st('iron_chestplate'));

    event
        .shaped(mc('iron_leggings'), ['III', 'I I', 'I I'], {
            I: mi('iron_plate')
        })
        .id(st('iron_leggings'));

    event
        .shaped(mc('iron_boots'), ['I I', 'I I'], {
            I: mi('iron_plate')
        })
        .id(st('iron_boots'));

    // -- DIAMOND ARMOR AND TOOLS -- //

    const diamondToolsArmorsSet = [
        ['helmet', 'Helmet'],
        ['chestplate', 'Chesplate'],
        ['leggings', 'Leggings'],
        ['boots', 'Boots'],
        ['pickaxe', 'Pickaxe'],
        ['axe', 'Axe'],
        ['hoe', 'Hoe'],
        ['sword', 'Sword'],
        ['shovel', 'Shovel' ],
    ]

    diamondToolsArmorsSet.forEach(item =>{
        event.smithing(
        `minecraft:diamond_${item[0]}`,
        'kubejs:diamond_upgrade_smithing_template',
        `kubejs:steel_${item[0]}`,
        'minecraft:diamond'
        )
    })

});

ServerEvents.tags('item', (event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let mc = (id) => `minecraft:${id}`;

    const HORSE_ARMORS = [
        mc('leather_horse_armor'),
        mc('iron_horse_armor'),
        mc('golden_horse_armor'),
        mc('diamond_horse_armor'),
    ];
    HORSE_ARMORS.forEach((id) => {
        event.add('kubejs:horse_armors', id);
    });

    // Removed to fix dupe
    event.remove('c:copper_blocks', mc('cut_copper'));
});
