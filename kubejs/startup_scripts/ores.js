// https://discord.com/channels/303440391124942858/1109650727380455484/1109719843340558376

WorldgenEvents.remove(e => {
    e.removeOres(ores => {
        ores.blocks = [
            '#c:ores_in_ground/stone',
            '#c:ores_in_ground/deepslate'
        ];
    });
});

WorldgenEvents.remove(e => {
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
});

WorldgenEvents.remove(e => {
    e.removeFeatureById(
        'underground_decoration',
        [
            'minecraft:ore_gold_nether',
            'minecraft:ore_gold_deltas'
        ]
    );
});

// AD ASTRA
WorldgenEvents.remove(event => {
    event.removeFeatureById(
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
});

// CREATE
WorldgenEvents.remove(event => {
    event.removeFeatureById(
        'underground_ores', 
        [  
            "create:zinc_ore"
        ]
    );
});