// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:${id}`;

    event.smelting(kj('clear_ingot'), mc('glass'), 0.2).id(st('clear_ingot_from_glass'));

    // -- CLEAR GLASS BLOCK - //
    event.shaped('8x ' + kj('clear_glass'), [
        'III',
        'I I',
        'III'
    ],
    {
        I: kj('clear_ingot')
    })
    .id(st('clear_glass'));
    
    // -- CLEAR HELMET -- //
    event.shaped(kj('clear_helmet'), [
        'III',
        'I I'
    ],
    {
        I: kj('clear_ingot')
    })
    .id(st('clear_helmet'));

    // -- CLEAR CHESTPLATE -- //
    event.shaped(kj('clear_chestplate'), [
        'I I',
        'III',
        'III'
    ],
    {
        I: kj('clear_ingot')
    })
    .id(st('clear_chestplate'));

    // -- CLEAR LEGGINGS -- //
    event.shaped(kj('clear_leggings'), [
        'III',
        'I I',
        'I I'
    ],
    {
        I: kj('clear_ingot')
    })
    .id(st('clear_leggings'));

    // -- CLEAR BOOTS -- //
    event.shaped(kj('clear_boots'), [
        'I I',
        'I I'
    ],
    {
        I: kj('clear_ingot')
    })
    .id(st('clear_boots'));

    // ------------------- //
    // -- STATECH COINS -- //
    // ------------------- //

    let common = kj('coin_common');
    let rare = kj('coin_rare');
    let legendary = kj('coin_legendary');
    let mythic = kj('coin_mythic');

    event.shapeless(rare, [ '9x ' + common ]).id(st('coin_rare_upgrade'));
    event.shapeless(legendary, [ '9x ' + rare ]).id(st('coin_legendary_upgrade'));
    event.shapeless(mythic, [ '9x ' + legendary ]).id(st('coin_mythic_upgrade'));
    event.shapeless('9x ' + legendary, [ mythic ]).id(st('coin_legendary_downgrade'));
    event.shapeless('9x ' + rare, [ legendary ]).id(st('coin_rare_downgrade'));
    event.shapeless('9x ' + common, [ rare ]).id(st('coin_common_downgrade'));

    // -------------- //
    //    COMMON      //
    // -------------- //

    // -- IRON ORE -- //
    event.shaped('8x ' + mc('iron_ore'), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: common
    }).id(st('iron_ore_from_common'));

    // -- TIN ORE -- //
    event.shaped('8x ' + mi('tin_ore'), [
        'C C',
        ' C ',
        ' C '
    ],
    {
        C: common
    }).id(st('tin_ore_from_common'));

    // -- RUBBER SAPLING -- //
    event.shaped(tr('rubber_sapling'), [
        'C',
        'C'
    ],
    {
        C: common
    }).id(st('rubber_sapling_from_common'));

    // -- ANDESITE -- //
    event.shaped('16x ' + mc('andesite'), [
        'C',
        ' ',
        'C'
    ],
    {
        C: common
    }).id(st('andesite_from_common'));

    // -- AMETHYST SHARD -- //
    event.shaped('8x ' + mc('amethyst_shard'), [
        'C  ',
        ' C ',
        '  C'
    ],
    {
        C: common
    })
    .noMirror().id('amethyst_shard_from_common');
    
    // -- TOPAZ SHARD -- //
    event.shaped('8x ' + sp('topaz_shard'), [
        '  C',
        ' C ',
        'C  '
    ],
    {
        C: common
    })
    .noMirror().id(st('topaz_shard_from_common'));

    // -- CITRINE SHARD -- //
    event.shaped('8x ' + sp('citrine_shard'), [
        'C  ',
        'C  ',
        'C  '
    ],
    {
        C: common
    }).id(st('citrine_shard_from_common'));

    event.shaped('16x ' + mc('coal_ore'), [
        'C C',
        ' C ',
        'C C'
    ],
    {
        C: common
    }).id(st('coal_ore_from_common'));

    event.shaped('32x ' + mc('copper_ore'), [
        'CCC',
        'C  ',
        'CCC'
    ],
    {
        C: common
    }).id(st('copper_ore_from_common'));

    event.shaped('8x create:zinc_ore', [
        'CC',
        'CC'
    ],
    {
        C: common
    }).id(st('zinc_ore_from_common'));

    // -- SALT ORE -- //
    event.shaped('8x ' + mi('salt_ore'), [
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
    event.shaped('16x ' + mc('gold_ore'), [
        ' C ',
        'C C',
        ' C '
    ],
    {
        C: rare
    }).id(st('gold_ore_from_rare'));

    // -- ANTIMONY ORE -- //
    event.shaped('8x ' + mi('antimony_ore'), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: rare
    }).id(st('antimony_ore_from_rare'));

    // -- DIAMOND ORE -- //
    event.shaped('8x ' + mc('diamond_ore'), [
        'C',
        'C'
    ],
    {
        C: rare
    }).id(st('diamond_ore_from_rare'));

    // -- REDSTONE ORE -- //
    event.shaped('8x ' + mc('redstone_ore'), [
        'C C',
        ' C ',
        'C C'
    ],
    {
        C: rare
    }).id(st('redstone_ore_from_rare'));

    // -- LEAD ORE -- //
    event.shaped('8x ' + mi('lead_ore'), [
        'CC',
        'CC'
    ],
    {
        C: rare
    }).id(st('lead_ore_from_rare'));

    // -- NICKEL ORE -- //
    event.shaped('8x ' + mi('nickel_ore'), [
        'CCC',
        ' C '
    ],
    {
        C: rare
    }).id(st('nickel_ore_from_rare'));

    // -- BAUXITE ORE -- //
    event.shaped('8x ' + mi('bauxite_ore'), [
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
    event.shaped('2x ' + mc('ancient_debris'), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: legendary
    }).id(st('ancient_debris_from_legendary'));

    // -- TUNGSTEN ORE -- //
    event.shaped('8x ' + mi('tungsten_ore'), [
        ' C ',
        'C C',
        ' C '
    ],
    {
        C: legendary
    }).id(st('tungsten_ore_from_legendary'));

    // -- MOZANITE ORE -- //
    event.shaped('8x ' + mi('mozanite_ore'), [
        'CCC',
        ' C '
    ],
    {
        C: legendary
    }).id(st('mozanite_ore_from_legendary'));

    // -- URANIUM ORE -- //
    event.shaped('8x ' + mi('uranium_ore'), [
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

    event.shaped(Item.of(mc('enchanted_book')).enchant(mc('mending'), 1), [
        ' C ',
        'C C',
        ' C '
    ],
    {
        C: mythic
    }).id(st('mending_from_mythic'));

    event.shaped(Item.of(mc('enchanted_book')).enchant('yigd:soulbound', 1), [
        'C C',
        '   ',
        'C C'
    ],
    {
        C: mythic
    }).id(st('soulbound_from_mythic'));

    event.shaped(Item.of(mc('enchanted_book')).enchant('ad_astra_giselle_addon:space_breathing', 1), [
        'C C',
        ' C ',
        'C C'
    ],
    {
        C: mythic
    }).id(st('space_breathing_from_mythic'));
});

ServerEvents.blockLootTables(event => {
    event.addSimpleBlock(kj('desh_ore_sample'), ad('raw_desh'));
    event.addSimpleBlock(kj('ostrum_ore_sample'), ad('raw_ostrum'));
    event.addSimpleBlock(kj('calorite_ore_sample'), ad('raw_calorite'));
    event.addSimpleBlock(kj('ice_ore_sample'), ad('ice_shard')),
    event.addSimpleBlock(kj('cheese_ore_sample'), ad('cheese'));
    event.addSimpleBlock(kj('pyrite_ore_sample'), tr('pyrite_dust'));
});

ServerEvents.tags('worldgen/biome', event => {
    event.add(ad('moon'), ad('lunar_wastelands'));

    const MARS_BIOMES = [
        ad('martian_canyon_creek'),
        ad('martian_polar_caps'),
        ad('martian_wastelands')
    ];
    MARS_BIOMES.forEach(id => event.add(ad('mars'), id));

    const VENUS_BIOMES = [
        ad('venus_wastelands'),
        ad('infernal_venus_barrens')
    ];
    VENUS_BIOMES.forEach(id => event.add(ad('venus'), id));

    event.add(ad('mercury'), ad('mercury_deltas'));

    const GLACIO_BIOMES = [
        ad('glacio_ice_peaks'),
        ad('glacio_snowy_barrens')
    ];
    GLACIO_BIOMES.forEach(id => event.add(ad('glacio'), id));
});

ServerEvents.tags('item', event => {
    const COINS = [
        kj('coin_common'),
        kj('coin_rare'),
        kj('coin_legendary'),
        kj('coin_mythic')
    ];
    COINS.forEach(id => event.add(kj('statech_coins'), id));

    const CLEAR_ARMOR = [
        kj('clear_helmet'),
        kj('clear_chestplate'),
        kj('clear_leggings'),
        kj('clear_boots')
    ];
    CLEAR_ARMOR.forEach(id => event.add(kj('clear_armor'), id));

    const COMMON_INGOT_TAG = [
        ad('desh_ingot'),
        ad('ostrum_ingot'),
        ad('calorite_ingot'),
        mi('aluminum_ingot'),
        mi('annealed_copper_ingot'),
        mi('antimony_ingot'),
        mi('battery_alloy_ingot'), 
        mi('beryllium_ingot'),
        mi('blastproof_alloy_ingot'),
        mi('bronze_ingot'),
        mi('cadmium_ingot'),
        mi('chromium_ingot'),
        mi('cupronickel_ingot'),
        mi('electrum_ingot'),
        mi('he_mox_ingot'),
        mi('he_uranium_ingot'),
        mi('invar_ingot'),
        mi('iridium_ingot'),
        mi('kanthal_ingot'),
        mi('le_mox_ingot'),
        mi('le_uranium_ingot'),
        mi('lead_ingot'),
        mi('nickel_ingot'),
        mi('platinum_ingot'),
        mi('plutonium_ingot'),
        mi('silicon_ingot'),
        mi('silver_ingot'),
        mi('stainless_steel_ingot'),
        mi('steel_ingot'),
        mi('superconductor_ingot'),
        mi('tin_ingot'),
        mi('titanium_ingot'),
        mi('tungsten_ingot'),
        mi('uranium_ingot'),
        mi('uranium_235_ingot'),
        mi('uranium_238_ingot'),
        tr('advanced_alloy_ingot'),
        tr('brass_ingot'),
        tr('iridium_alloy_ingot'),
        tr('mixed_metal_ingot'),
        tr('refined_iron_ingot'),
        tr('tungstensteel_ingot'),
        tr('zinc_ingot')
    ];
    COMMON_INGOT_TAG.forEach(id => { event.add('c:ingots', id) } );
})