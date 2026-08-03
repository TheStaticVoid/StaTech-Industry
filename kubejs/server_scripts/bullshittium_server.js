// priority: -1000000
// Hello, you have reached Script Hell

ServerEvents.recipes(event => { // this probably isnt destructive
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- CREATE UTILITY FUNCTIONS -- //
    let pressing = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: 'create:pressing',
        };

        if (item_inputs) newRecipe['ingredients'] = item_inputs;
        if (item_outputs) newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    };
    let mixing = (id, heatRequirement, item_inputs, item_outputs) => {
        let newRecipe = {
            type: 'create:mixing',
            heat_requirement: heatRequirement,
        };
        if (item_inputs) newRecipe['ingredients'] = item_inputs;
        if (item_outputs) newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    };
    let crushing = (id, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: 'create:crushing',
            processing_time: duration,
        };

        if (item_inputs) newRecipe['ingredients'] = item_inputs;
        if (item_outputs) newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    };

    // -- ARMOR REMOVALS -- //

    event.remove({ id: cr('crafting/appliances/netherite_diving_helmet') })
    event.remove({ id: cr('crafting/appliances/netherite_backtank') })
    event.remove({ id: cr('crafting/appliances/netherite_diving_boots') })

    // -- BRONZE PLATE --
    pressing(
        'statech:create/pressing/bronze_plate',
        [{ tag: 'c:double_ingots/bronze' }],
        [{ 'id': 'modern_industrialization:bronze_plate', count: 1 }]
    );
    // -- SILVER PLATE --
    pressing(
        'statech:create/pressing/silver_plate',
        [{ tag: 'c:double_ingots/silver' }],
        [{ 'id': mi('silver_plate'), count: 1 }]
    );
    // -- STEEL PLATE --
    pressing(
        'statech:create/pressing/steel_plate',
        [{ tag: 'c:double_ingots/steel' }],
        [{ 'id': mi('steel_plate'), count: 1 }]
    );
    // -- TIN PLATE --
    pressing(
        'statech:create/pressing/tin_plate',
        [{ tag: 'c:double_ingots/tin' }],
        [{ 'id': mi('tin_plate'), count: 1 }]
    );
    // -- IRON PLATE --
    event.remove({ id: 'create:pressing/iron_ingot' })
    pressing(
        'statech:create/pressing/iron_plate',
        [{ tag: 'c:double_ingots/iron' }],
        [{ 'id': 'modern_industrialization:iron_plate', count: 1 }]
    );
    // -- ELECTRUM PLATE --
    event.remove({ id: 'createaddition:pressing/electrum_ingot' })
    pressing(
        'statech:create/pressing/electrum_plate',
        [{ tag: 'c:double_ingots/electrum' }],
        [{ 'id': 'modern_industrialization:electrum_plate', count: 1 }]
    );
    // -- COPPER PLATE --
    event.remove({ id: 'create:pressing/copper_ingot' })
    pressing(
        'statech:create/pressing/copper_plate',
        [{ tag: 'c:double_ingots/copper' }],
        [{ 'id': 'modern_industrialization:copper_plate', count: 1 }]
    );
    // -- GOLD PLATE --
    event.remove({ id: 'create:pressing/gold_ingot' })
    pressing(
        'statech:create/pressing/gold_plate',
        [{ tag: 'c:double_ingots/gold' }],
        [{ 'id': 'modern_industrialization:gold_plate', count: 1 }]
    );

    // -- MISC RECIPES -- //

    // -- FORGE HAMMER -- //

    event
        .custom({
            type: 'create:mechanical_crafting',
            accept_mirrored: true,
            category: 'misc',
            pattern: ['AAAAA', 'AAAAA', '  B  ', ' CCC ', 'CCCCC'],
            key: {
                A: { item: 'modern_industrialization:iron_large_plate' },
                B: { tag: 'c:ingots/bronze' },
                C: { tag: 'c:storage_blocks/iron' },
            },
            result: {
                id: 'modern_industrialization:forge_hammer',
                count: 1,
            },
        })
        .id('modern_industrialization:forge_hammer');

    // -- CONCRETE -- //

    mixing(
        'statech:modern_industrialization_concrete_create_mixer',
        'heated',
        [
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('stone_dust') },
            { item: mi('clay_dust') },
            { item: mi('clay_dust') },
            { item: mi('clay_dust') },
            { item: mi('clay_dust') },
            {
                type: "fluid_stack",
                fluid: "minecraft:water",
                amount: 100
            }
        ],
        [{ id: mi('concrete'), amount: 500 }],
    );

    // -- BRONZE INGOT --

    event.remove({ id: mi('materials/bronze_dust') })
    mixing(
        st('bronze_ingot_create_mixer'),
        'superheated',
        [
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/copper' },
            { tag: 'c:raw_materials/tin' }
        ],
        [{ id: mi('bronze_ingot'), count: 2 }]
    );

    // -- FIRE CLAY BRICKS -- //

    event.remove({ id: mi('materials/fire_clay_bricks') })
    event
        .shaped('1x ' + mi('fire_clay_bricks'), ['BDB', 'BCB', 'BDB'], {
            C: mi('concrete_bucket'),
            B: mi('fire_clay_brick'),
            D: mi('calcite_dust'),
        })
        .id(mi('materials/fire_clay_bricks'));

    // -- CRUSHING RECIPES -- //

    crushing(
        st('calcite_dust_from_calcite'),
        200,
        [{ item: mc('calcite') }],
        [{ count: 2, id: mi('calcite_dust') }]
    );

    crushing(
        st('stone_dust_from_stone'),
        400,
        [{ item: mc('stone') }],
        [{ count: 4, id: mi('stone_dust') }]
    );

    // -- DOUBLE INGOT SHAPELESS RECIPES -- //

    event.shapeless(mi('iron_double_ingot'), [
        '2x ' + mc('iron_ingot')
    ])
        .id(mi('iron_double_ingot_shapless'));

    event.shapeless(mi('electrum_double_ingot'), [
        '2x ' + mi('electrum_ingot')
    ])
        .id(mi('electrum_double_ingot_shapless'));

    event.shapeless(mi('gold_double_ingot'), [
        '2x ' + mc('gold_ingot')
    ])
        .id(mi('gold_double_ingot_shapless'));

    event.shapeless(mi('bronze_double_ingot'), [
        '2x ' + mi('bronze_ingot')
    ])
        .id(mi('bronze_double_ingot_shapless'));

    event.shapeless(mi('silver_double_ingot'), [
        '2x ' + mi('silver_ingot')
    ])
        .id(mi('silver_double_ingot_shapless'));

    event.shapeless(mi('steel_double_ingot'), [
        '2x ' + mi('steel_ingot')
    ])
        .id(mi('steel_double_ingot_shapless'));

    event.shapeless(mi('tin_double_ingot'), [
        '2x ' + mi('tin_ingot')
    ])
        .id(mi('tin_double_ingot_shapless'));

    event.shapeless(mi('copper_double_ingot'), [
        '2x ' + mc('copper_ingot')
    ])
        .id(mi('copper_double_ingot_shapless'));



    event.remove({ id: 'extended_industrialization:tool/nano_suit_helmet' })
    assembler(
        event,
        st('nano_suit_helmet'),
        8,
        200,
        [
            { amount: 1, item: cr('netherite_diving_helmet') },
            { amount: 20, item: mi('carbon_plate') },
            { amount: 4, item: mi('electronic_circuit') },
            { amount: 2, item: mi('silicon_battery') },
            { amount: 4, item: mi('large_motor') },
            { amount: 4, tag: 'c:glass_panes' },
            { amount: 1, item: mi('redstone_control_module') },
            { amount: 1, item: mi('rubber_helmet') },
        ],
        [{ amount: 1, item: 'extended_industrialization:nano_helmet' }],
        [
            { amount: 4000, fluid: mi('polyethylene') },
            { amount: 2000, fluid: mi('nylon') }
        ],
    );

    event.remove({ id: 'extended_industrialization:tool/nano_suit_chestplate' })
    assembler(
        event,
        st('nano_suit_chestplate'),
        8,
        200,
        [
            { amount: 1, item: cr('netherite_backtank') },
            { amount: 32, item: mi('carbon_plate') },
            { amount: 4, item: mi('electronic_circuit') },
            { amount: 2, item: mi('silicon_battery') },
            { amount: 4, item: mi('large_motor') },
        ],
        [{ amount: 1, item: 'extended_industrialization:nano_chestplate' }],
        [
            { amount: 4000, fluid: mi('polyethylene') },
            { amount: 2000, fluid: mi('nylon') }
        ],
    );

    // this is commented out because theres literally nothing to change considering current armor progression
    // event.remove({ id: 'extended_industrialization:tool/nano_suit_leggings' })
    // assembler(
    //     event,
    //     st('nano_suit_leggings'),
    //     8,
    //     200,
    //     [
    //         { amount: 1, item: mc('netherite_leggings') },
    //         { amount: 28, item: mi('carbon_plate') },
    //         { amount: 4, item: mi('electronic_circuit') },
    //         { amount: 2, item: mi('silicon_battery') },
    //         { amount: 4, item: mi('large_motor') },
    //         { amount: 1, item: mi('redstone_control_module') },
    //     ],
    //     [{ amount: 1, item: 'extended_industrialization:nano_helmet' }],
    //     [
    //         { amount: 4000, fluid: mi('polyethylene') },
    //         { amount: 2000, fluid: mi('nylon') }
    //     ],
    // );

    event.remove({ id: 'extended_industrialization:tool/nano_suit_boots' })
    assembler(
        event,
        st('nano_suit_boots'),
        8,
        200,
        [
            { amount: 1, item: cr('netherite_diving_boots') },
            { amount: 16, item: mi('carbon_plate') },
            { amount: 4, item: mi('electronic_circuit') },
            { amount: 2, item: mi('silicon_battery') },
            { amount: 4, item: mi('large_motor') },
            { amount: 1, item: mi('redstone_control_module') },
            { amount: 1, item: mi('rubber_boots') }
        ],
        [{ amount: 1, item: 'extended_industrialization:nano_boots' }],
        [
            { amount: 4000, fluid: mi('polyethylene') },
            { amount: 2000, fluid: mi('nylon') }
        ],
    );

    // -- JETPACK --

    event
        .shaped('1x ' + mi('diesel_jetpack'), ['PTP', 'MCM', 'RER'], {
            P: mi('large_pump'),
            T: mi('aluminum_tank'),
            M: mi('large_motor'),
            C: mi('electronic_circuit'),
            R: mi('aluminum_rotor'),
            E: mc('elytra')
        })
        .id(mi('armor/diesel_jetpack'));

    // -- GRAVICHESTPLATE --

    event
        .shaped('1x ' + mi('gravichestplate'), ['DUD', 'DJD', 'TCT'], {
            D: mi('diamond_plate'),
            U: mi('turbo_upgrade'),
            J: mi('diesel_jetpack'),
            T: mi('titanium_large_plate'),
            C: mi('cadmium_battery')
        })
        .id('statech:modern_industrialization/gravichestplate');

    // -- QUANTUM NANO CHESTPLATE --

    event.remove({ id: 'extended_industrialization:tool/nano_suit_chestplate_quantum_upgrade' })
    packer(
        event,
        st('nano_suit_chestplate_quantum_upgrade'),
        1000000,
        200,
        [
            { amount: 1, item: 'extended_industrialization:nano_gravichestplate' },
            { amount: 1, item: mi('quantum_upgrade') },
        ],
        [{ amount: 1, item: 'extended_industrialization:nano_quantum_chestplate' }]
    );

    // -- ENDGAME RECIPES -- //

    // -- WORLDSHAPER -- //

    assembler(
        event,
        st('assembler/handheld_worldshaper'),
        32000,
        2400,
        [
            { amount: 16, item: kj('wrap_of_helmets') },
            { amount: 64, item: mi('creative_tank') },
            { amount: 16, item: kj('wrap_of_chestplates') },
            { amount: 64, item: mi('creative_storage_unit') },
            { amount: 16, item: kj('wrap_of_sabers') },
            { amount: 64, item: 'create:creative_motor' },
            { amount: 16, item: kj('wrap_of_leggings') },
            { amount: 64, item: mi('creative_barrel') },
            { amount: 16, item: kj('wrap_of_boots') },
        ],
        [{ amount: 1, item: 'create:handheld_worldshaper' }],
        [
            { amount: 64000, fluid: mi('uu_matter') },
            { amount: 64000, fluid: mi('neutronium') },
        ]
    );

    // -- ARMOR WRAPS -- //

    assembler(
        event,
        st('wrap_of_helmets'),
        8,
        200,
        [
            { amount: 1, item: 'extended_industrialization:nano_quantum_helmet' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_helmet' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_helmet' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_helmet' },
        ],
        [{ amount: 1, item: kj('wrap_of_helmets') }]
    );

    assembler(
        event,
        st('wrap_of_chestplates'),
        8,
        200,
        [
            { amount: 1, item: 'extended_industrialization:nano_quantum_chestplate' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_chestplate' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_chestplate' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_chestplate' },
        ],
        [{ amount: 1, item: kj('wrap_of_chestplates') }]
    );

    assembler(
        event,
        st('wrap_of_leggings'),
        8,
        200,
        [
            { amount: 1, item: 'extended_industrialization:nano_quantum_leggings' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_leggings' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_leggings' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_leggings' },
        ],
        [{ amount: 1, item: kj('wrap_of_leggings') }]
    );

    assembler(
        event,
        st('wrap_of_boots'),
        8,
        200,
        [
            { amount: 1, item: 'extended_industrialization:nano_quantum_boots' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_boots' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_boots' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_boots' },
        ],
        [{ amount: 1, item: kj('wrap_of_boots') }]
    );

    assembler(
        event,
        st('wrap_of_sabers'),
        8,
        200,
        [
            { amount: 1, item: 'extended_industrialization:nano_quantum_saber' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_saber' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_saber' },
            { amount: 1, item: 'extended_industrialization:nano_quantum_saber' },
        ],
        [{ amount: 1, item: kj('wrap_of_sabers') }]
    );

    // -- CREATIVE STORAGE UNIT --

    assembler(
        event,
        st('assembler/creative_storage_unit'),
        32000,
        2400,
        [
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 16, item: mi('superconductor_storage_unit') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
        ],
        [{ amount: 1, item: mi('creative_storage_unit') }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );

    // -- CREATIVE BARREL --

    assembler(
        event,
        st('assembler/creative_barrel'),
        32000,
        2400,
        [
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 16, item: mi('quantum_barrel') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
        ],
        [{ amount: 1, item: mi('creative_barrel') }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );

    // -- CREATIVE TANK --

    assembler(
        event,
        st('assembler/creative_tank'),
        32000,
        2400,
        [
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 16, item: mi('quantum_tank') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
        ],
        [{ amount: 1, item: mi('creative_tank') }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );

    // -- CREATIVE MOTOR --

    assembler(
        event,
        st('assembler/creative_motor'),
        32000,
        2400,
        [
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 16, item: mi('plasma_turbine') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
            { amount: 32, item: mi('singularity') },
        ],
        [{ amount: 1, item: 'create:creative_motor' }],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') },
        ]
    );
}) 

// bullshittium stuff outside of this file:
/*
ui stuff (handled by mode switcher)
quantum armor wraps (handled by bullshittium_startup.js)
*/
