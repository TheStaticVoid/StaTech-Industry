// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// https://discord.com/channels/303440391124942858/1109650727380455484/1109719843340558376

WorldgenEvents.remove(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mc = (id) => `minecraft:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let cr = (id) => `create:${id}`;
    let bg = (id) => `byg:${id}`;

    e.removeOres(ores => {
        ores.blocks = [
            '#c:ores_in_ground/stone',
            '#c:ores_in_ground/deepslate'
        ];
    });

    e.removeFeatureById(
        'underground_ores',
        [
            mc('ore_coal_upper'),
            mc('ore_coal_lower'),
            mc('ore_copper'),
            mc('ore_copper_large'),
            mc('ore_iron_upper'),
            mc('ore_iron_middle'),
            mc('ore_iron_small')
        ]
    );

    e.removeFeatureById(
        'underground_decoration',
        [
            mc('ore_gold_nether'),
            mc('ore_gold_deltas')
        ]
    );

    // AD ASTRA
    e.removeFeatureById(
        'raw_generation', 
        [
            ad('glacio_ice_shard_ore'), 
            ad('glacio_coal_ore'), 
            ad('glacio_copper_ore'),
            ad('glacio_iron_ore'), 
            ad('glacio_lapis_ore'),
            ad('venus_coal_ore'), 
            ad('venus_gold_ore'),  
            ad('venus_diamond_ore'), 
            ad('venus_calorite_ore'),
            ad('mercury_iron_ore'),
            ad('mars_iron_ore'), 
            ad('mars_diamond_ore'), 
            ad('mars_ostrum_ore'),  
            ad('mars_ice_shard_ore'),
            ad('moon_cheese_ore'), 
            ad('moon_desh_ore'),  
            ad('moon_iron_ore'), 
            ad('moon_ice_shard_ore'),
            mc('deepslate_coal_ore'),
            mc('deepslate_copper_ore'),
            mc('deepslate_iron_ore'),
            mc('deepslate_diamond_ore')
        ]
    );

    // CREATE
    e.removeFeatureById(
        'underground_ores', 
        [  
            cr('zinc_ore')
        ]
    );
    
    // BYG 
    const ORES_TO_REMOVE = [
        bg('pendorite_ore'),
        bg('emeraldite_ore'),
        bg('anthracite_ore'), 
        bg('blue_nether_gold_ore'),
        bg('blue_nether_quartz_ore'),
        bg('brimstone_nether_gold_ore'),
        bg('brimstone_nether_quartz_ore'),
        bg('cryptic_redstone_ore')
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