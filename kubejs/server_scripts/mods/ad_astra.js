ServerEvents.tags('worldgen/biome', e => {
    // remove the naturally spawning oil wells from the world
    e.removeAll('ad_astra:has_structure/oil_well_biomes');
});

const AD_ASTRA_DELETED_ITEMS = [
    'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
    'ad_astra:recipes/coal_generator',
    'ad_astra:recipes/astrodux',
    'ad_astra:hammering/steel_plate',
    'ad_astra:hammering/ostrum_plate',
    'ad_astra:hammering/iron_plate',
    'ad_astra:hammering/desh_plate',
    'ad_astra:hammering/calorite_plate',
    'ad_astra:recipes/steel_cable',
    'ad_astra:recipes/desh_cable',
    'ad_astra:recipes/desh_fluid_pipe',
    'ad_astra:recipes/ostrum_fluid_pipe',
    'ad_astra:recipes/compressor',
    'ad_astra:recipes/fuel_refinery',
    'ad_astra:recipes/cable_duct',
    'ad_astra:recipes/fluid_pipe_duct',
    'ad_astra:recipes/engine_fan',
    'ad_astra:recipes/oxygen_tank',
    'ad_astra:recipes/oxygen_gear',
    'ad_astra:recipes/oxygen_loader',
    'ad_astra:recipes/space_helmet',
    'ad_astra:recipes/space_suit',
    'ad_astra:recipes/space_pants',
    'ad_astra:recipes/space_boots',
    'ad_astra:recipes/nasa_workbench',
    'ad_astra:recipes/engine_frame',
    'ad_astra:recipes/steel_tank',
    'ad_astra:recipes/wrench',
    'ad_astra:recipes/water_pump',
    'ad_astra:recipes/wheel',
    'ad_astra:recipes/tier_1_rover',
    'ad_astra:recipes/desh_tank',
    'ad_astra:recipes/iron_rod'
]

ServerEvents.recipes(e => {
    AD_ASTRA_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove({ type: 'ad_astra:fuel_conversion' });

    e.custom({
        type: 'ad_astra:oxygen_conversion',
        input: 'modern_industrialization:oxygen',
        output: 'ad_astra:oxygen',
        conversion_ratio: 1.0
    });

    e.custom({
        type: 'ad_astra:fuel_conversion',
        input: 'modern_industrialization:boosted_diesel',
        output: 'ad_astra:fuel',
        conversion_ratio: 0.5
    });

    e.shaped('ad_astra:fuel_refinery', [
        'SCS',
        'PHP',
        'SCS'
    ],
    {
        S: 'modern_industrialization:steel_large_plate',
        P: 'modern_industrialization:advanced_pump',
        H: 'modern_industrialization:turbo_machine_hull',
        C: 'modern_industrialization:digital_circuit'
    });

    e.shaped('ad_astra:engine_fan', [
        ' R ',
        'RPR',
        ' R '
    ],
    {
        R: 'modern_industrialization:steel_rod',
        P: '#c:steel_plates'
    });

    e.shaped('ad_astra:oxygen_tank', [
        'PR',
        'PP',
        'PP'
    ],
    {
        P: '#c:steel_plates',
        R: 'modern_industrialization:steel_rod'
    });

    e.shaped('ad_astra:oxygen_loader', [
        'PFP',
        'THT',
        'PCP'
    ],
    {
        P: 'modern_industrialization:steel_large_plate',
        F: 'ad_astra:engine_fan',
        T: 'ad_astra:oxygen_tank',
        H: 'modern_industrialization:turbo_machine_hull',
        C: 'modern_industrialization:digital_circuit'
    });

    e.shaped('ad_astra:oxygen_gear', [
        ' R ',
        'PRP',
        'PRP'
    ],
    {
        R: 'modern_industrialization:steel_rod',
        P: '#c:steel_plates'
    });

    e.shaped('ad_astra:nasa_workbench', [
        'AAA',
        'PHP',
        'CMC'
    ],
    {
        A: 'modern_industrialization:robot_arm',
        P: 'modern_industrialization:steel_large_plate',
        H: 'modern_industrialization:turbo_machine_hull',
        C: 'modern_industrialization:digital_circuit',
        M: 'modern_industrialization:advanced_motor'
    });

    e.shaped('ad_astra:engine_frame', [
        'RRR',
        'RPR',
        'RRR'
    ],
    {
        R: 'modern_industrialization:steel_rod',
        P: '#c:steel_plates'
    });

    e.shaped('ad_astra:steel_tank', [
        'PP ',
        'PTR',
        'PP '
    ],
    {
        P: '#c:steel_plates',
        T: 'modern_industrialization:steel_tank',
        R: 'modern_industrialization:steel_rod'
    });

    e.custom({
        type: 'modern_industrialization:assembler',
        duration: 300,
        eu: 16,
        item_inputs: [
            {
                amount: 4,
                tag: 'c:steel_ingots'
            },
            {
                amount: 1,
                tag: 'minecraft:glass_panes'
            },
            {
                amount: 1,
                tag: 'minecraft:wool'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'ad_astra:space_helmet'
            }
        ]
    });


    e.custom({
        type: 'modern_industrialization:assembler',
        duration: 300,
        eu: 16,
        item_inputs: [
            {
                amount: 4,
                tag: 'c:steel_ingots'
            },
            {
                amount: 1,
                item: 'ad_astra:oxygen_gear',
            },
            {
                amount: 2,
                item: 'ad_astra:oxygen_tank'
            }, 
            {
                amount: 2,
                tag: 'minecraft:wool'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'ad_astra:space_suit'
            }
        ]
    });

    e.custom({
        type: 'modern_industrialization:assembler',
        duration: 300,
        eu: 16,
        item_inputs: [
            {
                amount: 5,
                tag: 'c:steel_ingots'
            },
            {
                amount: 2,
                tag: 'minecraft:wool'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'ad_astra:space_pants'
            }
        ]
    });    

    e.custom({
        type: 'modern_industrialization:assembler',
        duration: 300,
        eu: 16,
        item_inputs: [
            {
                amount: 2,
                tag: 'c:steel_ingots'
            },
            {
                amount: 2,
                tag: 'minecraft:wool'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'ad_astra:space_boots'
            }
        ]
    });  

    e.shaped('ad_astra:wheel', [
        ' R ',
        'RSR',
        ' R '
    ],
    {
        R: 'modern_industrialization:rubber_sheet',
        S: '#c:steel_plates'
    });

    e.shaped('ad_astra:tier_1_rover', [
        'D R',
        'SDE',
        'WPW'
    ],
    {
        D: 'ad_astra:desh_block',
        R: 'modern_industrialization:steel_rod',
        S: '#c:steel_blocks',
        E: 'ad_astra:desh_engine',
        W: 'ad_astra:wheel',
        P: 'ad_astra:desh_plate'
    });

    e.shaped('ad_astra:desh_tank', [
        'DD ',
        'DBR',
        'DD '
    ],
    {
        D: 'ad_astra:desh_plate',
        B: 'modern_industrialization:steel_tank',
        R: 'modern_industrialization:steel_rod'
    })
});