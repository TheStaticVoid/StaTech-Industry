// https://discord.com/channels/303440391124942858/1109650727380455484/1109719843340558376

WorldgenEvents.remove(e => {
    e.removeOres(ores => {
        ores.blocks = [
            '#c:ores_in_ground/stone',
            '#c:ores_in_ground/deepslate'
        ];
    });

    e.removeFeatureById(
        'underground_ores',
        [
            'minecraft:ore_coal_upper',
            'minecraft:ore_coal_lower',
            'minecraft:ore_copper',
            'minecraft:ore_copper_large',
            'minecraft:ore_iron_upper',
            'minecraft:ore_iron_middle',
            'minecraft:ore_iron_small'
        ]
    );

    e.removeFeatureById(
        'underground_decoration',
        [
            'minecraft:ore_gold_nether',
            'minecraft:ore_gold_deltas'
        ]
    );

    // AD ASTRA
    e.removeFeatureById(
        'raw_generation', 
        [
            "ad_astra:glacio_ice_shard_ore", 
            "ad_astra:glacio_coal_ore", 
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore", 
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore", 
            "ad_astra:venus_gold_ore",  
            "ad_astra:venus_diamond_ore", 
            "ad_astra:venus_calorite_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:mars_iron_ore", 
            "ad_astra:mars_diamond_ore", 
            "ad_astra:mars_ostrum_ore",  
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:moon_cheese_ore", 
            "ad_astra:moon_desh_ore",  
            "ad_astra:moon_iron_ore", 
            "ad_astra:moon_ice_shard_ore",
        ]
    );

    // CREATE
    e.removeFeatureById(
        'underground_ores', 
        [  
            "create:zinc_ore"
        ]
    );

    // BYG 
    const ORES_TO_REMOVE = [
        'byg:pendorite_ore',
        'byg:emeraldite_ore',
        'byg:anthracite_ore', 
        'byg:blue_nether_gold_ore',
        'byg:blue_nether_quartz_ore',
        'byg:brimstone_nether_gold_ore',
        'byg:brimstone_nether_quartz_ore',
        'byg:cryptic_redstone_ore',
        'expandeddelight:salt_ore'
    ];
    e.removeOres(ores => {
        ores.blocks = ORES_TO_REMOVE;
    });
});

// // TECHREBORN
// WorldgenEvents.remove(e => {
//     let tr = (id) => `techreborn:${id}`;
//     const ORES_TO_REMOVE = [
//         tr('bauxite_ore'),
//         tr('deepslate_bauxite_ore'),
//         tr('iridium_ore'),
//         tr('deepslate_iridium_ore'),
//         tr('lead_ore'),
//         tr('deepslate_lead_ore'),
//         tr('tin_ore'),
//         tr('deepslate_tin_ore'),
//         tr('tungsten_ore'),
//         tr('deepslate_tungsten_ore')
//     ];
//     e.removeOres(ores => {
//         ores.blocks = ORES_TO_REMOVE;
//     });
// });