ServerEvents.recipes(e => {
    let st = (id) => `statech:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let sp = (id) => `spectrum:${id}`;

    e.smelting('kubejs:clear_ingot', 'minecraft:glass', 0.2).id(st('clear_ingot_from_glass'));
    
    // -- CLEAR HELMET -- //
    e.shaped('kubejs:clear_helmet', [
        'III',
        'I I'
    ],
    {
        I: 'kubejs:clear_ingot'
    })
    .id(st('clear_helmet'));

    // -- CLEAR CHESTPLATE -- //
    e.shaped('kubejs:clear_chestplate', [
        'I I',
        'III',
        'III'
    ],
    {
        I: 'kubejs:clear_ingot'
    })
    .id(st('clear_chestplate'));

    // -- CLEAR LEGGINGS -- //
    e.shaped('kubejs:clear_leggings', [
        'III',
        'I I',
        'I I'
    ],
    {
        I: 'kubejs:clear_ingot'
    })
    .id(st('clear_leggings'));

    // -- CLEAR BOOTS -- //
    e.shaped('kubejs:clear_boots', [
        'I I',
        'I I'
    ],
    {
        I: 'kubejs:clear_ingot'
    })
    .id(st('clear_boots'));

    // ------------------- //
    // -- STATECH COINS -- //
    // ------------------- //

    let common = 'kubejs:coin_common';
    let rare = 'kubejs:coin_rare';
    let legendary = 'kubejs:coin_legendary';
    let mythic = 'kubejs:coin_mythic';

    e.shapeless(rare, [ '9x ' + common ]).id(st('coin_rare_upgrade'));
    e.shapeless(legendary, [ '9x ' + rare ]).id(st('coin_legendary_upgrade'));
    e.shapeless(mythic, [ '9x ' + legendary ]).id(st('coin_mythic_upgrade'));
    e.shapeless('9x ' + legendary, [ mythic ]).id(st('coin_legendary_downgrade'));
    e.shapeless('9x ' + rare, [ legendary ]).id(st('coin_rare_downgrade'));
    e.shapeless('9x ' + common, [ rare ]).id(st('coin_common_downgrade'));

    // -------------- //
    //    COMMON      //
    // -------------- //

    // -- IRON ORE -- //
    e.shaped('8x ' + mc('iron_ore'), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: common
    }).id(st('iron_ore_from_common'));

    // -- TIN ORE -- //
    e.shaped('8x ' + mi('tin_ore'), [
        'C C',
        ' C ',
        ' C '
    ],
    {
        C: common
    }).id(st('tin_ore_from_common'));

    // -- RUBBER SAPLING -- //
    e.shaped(tr('rubber_sapling'), [
        'C',
        'C'
    ],
    {
        C: common
    }).id(st('rubber_sapling_from_common'));

    // -- ANDESITE -- //
    e.shaped('16x ' + mc('andesite'), [
        'C',
        ' ',
        'C'
    ],
    {
        C: common
    }).id(st('andesite_from_common'));

    // -- AMETHYST SHARD -- //
    e.shaped('8x ' + mc('amethyst_shard'), [
        'C  ',
        ' C ',
        '  C'
    ],
    {
        C: common
    }).id('amethyst_shard_from_common');
    
    // -- TOPAZ SHARD -- //
    e.shaped('8x ' + sp('topaz_shard'), [
        '  C',
        ' C ',
        'C  '
    ],
    {
        C: common
    }).id(st('topaz_shard_from_common'));

    // -- CITRINE SHARD -- //
    e.shaped('8x ' + sp('citrine_shard'), [
        'C  ',
        'C  ',
        'C  '
    ],
    {
        C: common
    }).id(st('citrine_shard_from_common'));

    e.shaped('16x ' + mc('coal_ore'), [
        'C C',
        ' C ',
        'C C'
    ],
    {
        C: common
    }).id(st('coal_ore_from_common'));

    e.shaped('32x ' + mc('copper_ore'), [
        'CCC',
        'C  ',
        'CCC'
    ],
    {
        C: common
    }).id(st('copper_ore_from_common'));

    e.shaped('8x create:zinc_ore', [
        'CC',
        'CC'
    ],
    {
        C: common
    }).id(st('zinc_ore_from_common'));

    // -- SALT ORE -- //
    e.shaped('8x ' + mi('salt_ore'), [
        ' CC',
        'CC '
    ],
    {
        C: common
    }).id(st('salt_ore_from_common'));

    // -------------- //
    //      RARE      //
    // -------------- //

    // -- GOLD ORE -- //
    e.shaped('16x ' + mc('gold_ore'), [
        ' C ',
        'C C',
        ' C '
    ],
    {
        C: rare
    }).id(st('gold_ore_from_rare'));

    // -- ANTIMONY ORE -- //
    e.shaped('8x ' + mi('antimony_ore'), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: rare
    }).id(st('antimony_ore_from_rare'));

    // -- DIAMOND ORE -- //
    e.shaped('8x ' + mc('diamond_ore'), [
        'C',
        'C'
    ],
    {
        C: rare
    }).id(st('diamond_ore_from_rare'));

    // -- REDSTONE ORE -- //
    e.shaped('8x ' + mc('redstone_ore'), [
        'C C',
        ' C ',
        'C C'
    ],
    {
        C: rare
    }).id(st('redstone_ore_from_rare'));

    // -- LEAD ORE -- //
    e.shaped('8x ' + mi('lead_ore'), [
        'CC',
        'CC'
    ],
    {
        C: rare
    }).id(st('lead_ore_from_rare'));

    // -- NICKEL ORE -- //
    e.shaped('8x ' + mi('nickel_ore'), [
        'CCC',
        ' C '
    ],
    {
        C: rare
    }).id(st('nickel_ore_from_rare'));

    // -- BAUXITE ORE -- //
    e.shaped('8x ' + mi('bauxite_ore'), [
        ' C ',
        'CCC'
    ],
    {
        C: rare
    }).id(st('bauxite_ore_from_rare'));

    // -------------- //
    //   LEGENDARY    //
    // -------------- //

    // -- ANCIENT DEBRIS -- //
    e.shaped('2x ' + mc('ancient_debris'), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: legendary
    }).id(st('ancient_debris_from_legendary'));

    // -- TUNGSTEN ORE -- //
    e.shaped('8x ' + mi('tungsten_ore'), [
        ' C ',
        'C C',
        ' C '
    ],
    {
        C: legendary
    }).id(st('tungsten_ore_from_legendary'));

    // -- MOZANITE ORE -- //
    e.shaped('8x ' + mi('mozanite_ore'), [
        'CCC',
        ' C '
    ],
    {
        C: legendary
    }).id(st('mozanite_ore_from_legendary'));

    // -- URANIUM ORE -- //
    e.shaped('8x ' + mi('uranium_ore'), [
        'C C',
        'C C',
        'CCC'
    ],
    {
        C: legendary
    }).id(st('uranium_ore_from_legendary'));

    // -------------- //
    //     MYTHIC     //
    // -------------- //

    e.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1), [
        ' C ',
        'C C',
        ' C '
    ],
    {
        C: mythic
    }).id(st('mending_from_mythic'));

    e.shaped(Item.of('minecraft:enchanted_book').enchant('yigd:soulbound', 1), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: mythic
    }).id(st('soulbound_from_mythic'));
});

ServerEvents.tags('item', e => {
    const COINS = [
        'kubejs:coin_common',
        'kubejs:coin_rare',
        'kubejs:coin_legendary',
        'kubejs:coin_mythic'
    ];
    COINS.forEach(id => e.add('kubejs:statech_coins', id));

    const CLEAR_ARMOR = [
        'kubejs:clear_helmet',
        'kubejs:clear_chestplate',
        'kubejs:clear_leggings',
        'kubejs:clear_boots'
    ];
    CLEAR_ARMOR.forEach(id => e.add('kubejs:clear_armor', id));
})