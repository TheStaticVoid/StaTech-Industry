// priority: -10000000
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
    // this removes the netherite ingot + appropriate armor piece, must use full netherite armor pieces

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

    // -- ARMOR RECIPES -- //

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

    // -- TOOL RECIPES -- //

    event
        .shaped('1x ' + mi('steam_mining_drill'), ['F P', 'SD ', 'BSF'], {
            F: mc('furnace'),
            P: mc('diamond_pickaxe'),
            B: mc('bucket'),
            D: mi('copper_drill_head'),
            S: mi('steel_large_plate'),
        })
        .id('modern_industrialization:tools/steam_mining_drill');

    event
        .shaped('1x ' + ei('steam_chainsaw'), ['F P', 'SD ', 'BSF'], {
            F: mc('furnace'),
            P: mc('diamond_axe'),
            B: mc('bucket'),
            D: mi('copper_gear'),
            S: mi('steel_large_plate'),
        })
        .id('statech:extended_industrialization/steam_chainsaw');

    event
        .shaped('1x ' + mi('diesel_mining_drill'), ['CBD', 'MPB', 'TMC'], {
            C: mi('electronic_circuit'),
            B: mi('invar_rotary_blade'),
            D: mi('steam_mining_drill'),
            M: mi('large_motor'),
            P: mi('large_pump'),
            T: mi('aluminum_tank')
        })
        .id('modern_industrialization:tools/diesel_mining_drill');

    event
        .shaped('1x ' + mi('diesel_chainsaw'), [' RB', 'MCR', 'TM '], {
            R: mi('rubber_sheet'),
            B: mi('invar_rotary_blade'),
            C: ei('steam_chainsaw'),
            M: mi('large_motor'),
            T: mi('aluminum_tank')
        })
        .id('modern_industrialization:tools/diesel_chainsaw');

    event
        .shaped('1x ' + ei('electric_mining_drill'), ['CBD', 'MPB', 'TMC'], {
            C: mi('advanced_upgrade'),
            B: ei('netherite_rotary_blade'),
            D: mi('diesel_mining_drill'),
            M: mi('advanced_motor'),
            P: mi('large_motor'),
            T: mi('aluminum_cable')
        })
        .id('extended_industrialization:tool/craft/electric_mining_drill');

    event
        .shaped('1x ' + ei('electric_chainsaw'), ['URB', 'MCR', 'TMU'], {
            U: mi('advanced_upgrade'),
            R: mi('rubber_sheet'),
            B: ei('netherite_rotary_blade'),
            C: mi('diesel_chainsaw'),
            M: mi('advanced_motor'),
            T: mi('aluminum_cable')
        })
        .id('extended_industrialization:tool/craft/electric_chainsaw');

    packer(
        event,
        ei('tool/craft/ultimate_drill'),
        1000000,
        200,
        [
            { amount: 1, item: 'industrialization_overdrive:vajra' },
            { amount: 1, item: mi('quantum_upgrade') },
        ],
        [{ amount: 1, item: 'extended_industrialization:ultimate_laser_drill' }]
    );

    // -- FOOD SCRIPTS -- //

    event.remove({ output: 'sophisticatedstorage:feeding_upgrade' })
    event.remove({ output: 'sophisticatedstorage:advanced_feeding_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:advanced_feeding_upgrade' })
    event.remove({ output: 'sophisticatedbackpacks:feeding_upgrade' })

    event.shapeless(('sophisticatedbackpacks:feeding_upgrade'), [
        '1x ' + kj('bartman')
    ])
    .id('statech:sophisticatedbackpacks/feeding_upgrade');

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

    // -- AE2 HV -- // eventually swap some recipes that use glass to use borosilicate?

    // -- CONTROLLER -- //
    event
        .shaped(ae('controller'), ['EFE', 'CHC', 'LFP'], {
            E: ae('engineering_processor'),
            F: ae('fluix_crystal'),
            C: mi('digital_circuit'),
            H: mi('turbo_machine_hull'),
            L: ae('logic_processor'),
            P: ae('calculation_processor'),
        })
        .id('statech:ae2/controller');

    // -- CHARGER -- //
    event
        .shaped(ae('charger'), ['SCS', 'B  ', 'SCS'], {
            S: mi('stainless_steel_large_plate'),
            C: mi('kanthal_wire'),
            B: mi('sodium_battery'),
        })
        .id('statech:ae2/charger');

    // -- BLANK PATTERN -- //
    event
        .shaped(ae('blank_pattern'), ['QGQ', 'GCG', 'SSS'], { // change to PBI eventually
            Q: ae('quartz_glass'),
            G: '#c:dusts/glowstone',
            C: '#c:gems/certus_quartz',
            S: '#c:plates/polytetrafluoroethylene',
        })
        .id('statech:ae2/blank_pattern');

    // -- CRYSTAL RESONANCE GENERATOR -- //
    event
        .shaped(ae('crystal_resonance_generator'), ['ACA', 'FHF', 'AEA'], { //default mv
            A: '#c:plates/stainless_steel',
            C: mi('cupronickel_coil'),
            F: ae('fluix_block'),
            H: mi('turbo_machine_hull'),
            E: ae('engineering_processor'),
        })
        .id('statech:ae2/crystal_resonance_generator');

    // -- ME QUANTUM RING -- //
    event
        .shaped(ae('quantum_ring'), ['SLS', 'ECF', 'SLS'], { //default mv
            S: '#c:plates/stainless_steel',
            L: ae('logic_processor'),
            E: ae('engineering_processor'),
            C: ae('energy_cell'),
            F: '#ae2:smart_dense_cable',
        })
        .id('statech:ae2/quantum_ring');

    // -- SPATIAL IO PORT -- //
    event
        .shaped(ae('spatial_io_port'), ['GGG', 'FIF', 'SES'], {
            S: '#c:plates/stainless_steel',
            G: '#c:glass_blocks',
            F: ae('fluix_glass_cable'),
            I: ae('io_port'),
            E: ae('engineering_processor'),
        })
        .id('statech:ae2/spatial_io_port');

    // -- ME DRIVE -- //
    event
        .shaped(ae('drive'), ['SES', 'FHF', 'SES'], {
            S: mi('stainless_steel_large_plate'),
            H: mi('turbo_machine_hull'),
            E: ae('engineering_processor'),
            F: ae('fluix_glass_cable'),
        })
        .id('statech:ae2/drive');

    // -- ME CHEST -- //
    event
        .shaped(ae('chest'), ['GTG', 'F F', 'SCS'], {
            G: '#c:glass_blocks',
            T: ae('terminal'),
            F: ae('fluix_glass_cable'),
            S: '#c:plates/stainless_steel',
            C: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/chest');

    // -- ME INTERFACE -- //
    event
        .shaped(ae('interface'), ['SGS', 'A F', 'SGS'], {
            S: '#c:plates/stainless_steel',
            G: '#c:glass_blocks',
            A: ae('annihilation_core'),
            F: ae('formation_core'),
        })
        .id('statech:ae2/interface');

    // -- CELL WORKBENCH -- //
    event
        .shaped(ae('cell_workbench'), ['WCW', 'SHS', 'SSS'], {
            W: '#minecraft:wool',
            C: ae('calculation_processor'),
            S: '#c:plates/stainless_steel',
            H: '#c:chests/wooden',
        })
        .id('statech:ae2/cell_workbench');

    // -- ME IO PORT -- //
    event
        .shaped(ae('io_port'), ['GGG', 'DFD', 'SLS'], {
            G: '#c:glass_blocks',
            D: ae('drive'),
            F: ae('fluix_glass_cable'),
            S: '#c:plates/stainless_steel',
            L: ae('logic_processor'),
        })
        .id('statech:ae2/io_port');

    // -- MATTER CONDENSER -- //
    event
        .shaped(ae('condenser'), ['SGS', 'GFG', 'SGS'], { //default mv
            S: '#c:plates/stainless_steel',
            G: '#c:glass_blocks',
            F: ae('fluix_dust'),
        })
        .id('statech:ae2/condenser');

    // -- ENERGY ACCEPTOR -- //
    event
        .shaped(ae('energy_acceptor'), ['SGS', 'GCG', 'SGS'], {
            S: '#c:plates/stainless_steel',
            G: ae('quartz_glass'),
            C: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/energy_acceptor');

    // -- CRYSTAL GROWTH ACCELERATOR -- //
    event
        .shaped(ae('growth_accelerator'), ['SFS', 'GBG', 'SFS'], {
            S: '#c:plates/stainless_steel',
            F: ae('fluix_glass_cable'),
            G: ae('quartz_glass'),
            B: ae('fluix_block'),
        })
        .id('statech:ae2/growth_accelerator');

    // -- CRAFTING UNIT -- //
    event
        .shaped(ae('crafting_unit'), ['SCS', 'FLF', 'SCS'], { // default mv
            S: '#c:plates/stainless_steel',
            C: ae('calculation_processor'),
            F: ae('fluix_glass_cable'),
            L: ae('logic_processor'),
        })
        .id('statech:ae2/crafting_unit');

    // -- ME PATTERN PROVIDER -- //
    event
        .shaped(ae('pattern_provider'), ['SCS', 'A F', 'SCS'], {// default mv
            S: '#c:plates/stainless_steel',
            C: '#c:player_workstations/crafting_tables',
            A: ae('annihilation_core'),
            F: ae('formation_core'),
        })
        .id('statech:ae2/pattern_provider');

    // -- MOLECULAR ASSEMBLER -- //
    event
        .shaped(ae('molecular_assembler'), ['SGS', 'AWF', 'SGS'], {// default mv
            S: '#c:plates/stainless_steel',
            G: ae('quartz_glass'),
            A: ae('annihilation_core'),
            W: mi('turbo_machine_hull'),
            F: ae('formation_core'),
        })
        .id('statech:ae2/molecular_assembler');

    // -- SPATIAL ANCHOR -- //
    event
        .shaped(ae('spatial_anchor'), ['PPP', 'FCF', 'SES'], {
            P: ae('spatial_pylon'),
            F: ae('fluix_glass_cable'),
            C: ae('spatial_cell_component_128'),
            S: '#c:plates/stainless_steel',
            E: ae('engineering_processor'),
        })
        .id('statech:ae2/spatial_anchor');

    // -- ENTROPY MANIPULATOR -- //
    event
        .shaped(ae('entropy_manipulator'), ['FC ', 'ES ', '  S'], { //default mv
            F: ae('fluix_crystal'),
            C: ae('energy_cell'),
            E: ae('engineering_processor'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/entropy_manipulator');

    // -- CHARGED STAFF -- //
    event
        .shaped(ae('charged_staff'), ['C  ', ' S ', '  S'], { //default mv
            C: ae('charged_certus_quartz_crystal'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/charged_staff');

    // -- COLOR APPLICATOR -- //
    event
        .shaped(ae('color_applicator'), ['FS ', 'SC ', '  E'], {//default mv
            F: ae('formation_core'),
            S: '#c:plates/stainless_steel',
            C: ae('cell_component_4k'),
            E: ae('energy_cell'),
        })
        .id('statech:ae2/color_applicator');

    // -- MATTER CANNON -- //
    event
        .shaped(ae('matter_cannon'), ['SSF', 'CE ', 'S  '], {//default mv
            S: '#c:plates/stainless_steel',
            F: ae('formation_core'),
            C: ae('cell_component_4k'),
            E: ae('energy_cell'),
        })
        .id('statech:ae2/matter_cannon');

    // -- BASIC CARD -- //
    event
        .shaped('2x ' + ae('basic_card'), ['GS ', 'RCS', 'GS '], {
            G: '#c:ingots/gold',
            S: '#c:plates/stainless_steel',
            R: '#c:dusts/redstone',
            C: ae('calculation_processor'),
        })
        .id('statech:ae2/basic_card');

    // -- ADVANCED CARD -- //
    event
        .shaped('2x ' + ae('advanced_card'), ['DS ', 'RCS', 'DS '], {
            D: '#c:gems/diamond',
            S: '#c:plates/stainless_steel',
            R: '#c:dusts/redstone',
            C: ae('calculation_processor'),
        })
        .id('statech:ae2/advanced_card');

    // -- ME ITEM CELL HOUSING -- //
    event
        .shaped(ae('item_cell_housing'), ['GRG', 'R R', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/item_cell_housing');

    // -- WIRELESS RECEIVER -- //
    event
        .shaped(ae('wireless_receiver'), [' F ', 'SQS', ' S '], {//default mv
            F: ae('fluix_pearl'),
            S: '#c:plates/stainless_steel',
            Q: ae('quartz_fiber'),
        })
        .id('statech:ae2/wireless_receiver');

    // -- WIRELESS BOOSTER -- //
    event
        .shaped('2x ' + ae('wireless_booster'), ['FQE', 'SSS'], {//default mv
            F: ae('fluix_dust'),
            Q: '#c:gems/certus_quartz',
            E: ae('ender_dust'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/wireless_booster');

    // -- VIEW CELL -- //
    event
        .shaped(ae('view_cell'), ['GRG', 'RQR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            Q: '#c:gems/certus_quartz',
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/network/cells/view_cell');

    // -- 1K ME ITEM STORAGE CELL -- //
    event
        .shaped(ae('item_storage_cell_1k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_1k'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/item_storage_cell_1k');

    // -- 4K ME ITEM STORAGE CELL -- //
    event
        .shaped(ae('item_storage_cell_4k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_4k'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/item_storage_cell_4k');

    // -- 16K ME ITEM STORAGE CELL -- //
    event
        .shaped(ae('item_storage_cell_16k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_16k'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/item_storage_cell_16k');

    // -- 64K ME ITEM STORAGE CELL -- //
    event
        .shaped(ae('item_storage_cell_64k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_64k'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/item_storage_cell_64k');

    // -- 256K ME ITEM STORAGE CELL -- //
    event
        .shaped(ae('item_storage_cell_256k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_256k'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/item_storage_cell_256k');

    // -- ME FLUID CELL HOUSING -- //
    event
        .shaped(ae('fluid_cell_housing'), ['GRG', 'R R', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            S: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/fluid_cell_housing');

    // -- 1K ME FLUID STORAGE CELL -- //
    event
        .shaped(ae('fluid_storage_cell_1k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_1k'),
            S: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/fluid_storage_cell_1k');

    // -- 4K ME FLUID STORAGE CELL -- //
    event
        .shaped(ae('fluid_storage_cell_4k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_4k'),
            S: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/fluid_storage_cell_4k');

    // -- 16K ME FLUID STORAGE CELL -- //
    event
        .shaped(ae('fluid_storage_cell_16k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_16k'),
            S: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/fluid_storage_cell_16k');

    // -- 64K ME FLUID STORAGE CELL -- //
    event
        .shaped(ae('fluid_storage_cell_64k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_64k'),
            S: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/fluid_storage_cell_64k');

    // -- 256K ME FLUID STORAGE CELL -- //
    event
        .shaped(ae('fluid_storage_cell_256k'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('cell_component_256k'),
            S: '#c:plates/annealed_copper',
        })
        .id('statech:ae2/fluid_storage_cell_256k');

    // -- 2^3 SPATIAL STORAGE CELL -- //
    event
        .shaped(ae('spatial_storage_cell_2'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('spatial_cell_component_2'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/spatial_storage_cell_2');

    // -- 16^3 SPATIAL STORAGE CELL -- //
    event
        .shaped(ae('spatial_storage_cell_16'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('spatial_cell_component_16'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/spatial_storage_cell_16');

    // -- 128^3 SPATIAL STORAGE CELL -- //
    event
        .shaped(ae('spatial_storage_cell_128'), ['GRG', 'RCR', 'SSS'], {
            G: ae('quartz_glass'),
            R: '#c:dusts/redstone',
            C: ae('spatial_cell_component_128'),
            S: '#c:plates/stainless_steel',
        })
        .id('statech:ae2/spatial_storage_cell_128');

    // -- ILLUMINATED PANEL -- //
    event
        .shaped(ae('semi_dark_monitor'), [' GQ', 'SRQ', ' GQ'], {
            G: '#c:dusts/glowstone',
            Q: ae('quartz_glass'),
            S: '#c:platesstainless_steel',
            R: '#c:dusts/redstone',
        })
        .id('statech:ae2/semi_dark_monitor');

    // -- ANNIHILATION PLANE -- //
    event
        .shaped(ae('annihilation_plane'), ['SF', 'AF', 'SF'], {
            S: '#c:plates/stainless_steel',
            F: ae('fluix_crystal'),
            A: ae('annihilation_core'),
        })
        .id('statech:ae2/annihilation_plane');

    event
        .shaped(ae('annihilation_plane'), ['FFF', 'SAS'], {
            S: '#c:plates/stainless_steel',
            F: ae('fluix_crystal'),
            A: ae('annihilation_core'),
        })
        .id('statech:ae2/annihilation_plane_alt');

    // -- FORMATION PLANE -- //
    event
        .shaped(ae('formation_plane'), ['SF', 'AF', 'SF'], {
            S: '#c:plates/stainless_steel',
            F: ae('fluix_crystal'),
            A: ae('formation_core'),
        })
        .id('statech:ae2/formation_plane');

    event
        .shaped(ae('formation_plane'), ['FFF', 'SAS'], {
            S: '#c:plates/stainless_steel',
            F: ae('fluix_crystal'),
            A: ae('formation_core'),
        })
        .id('statech:ae2/formation_plane_alt');

    // -- IMPORT BUS -- //
    event
        .shaped(ae('import_bus'), [' A ', 'SPS'], {
            A: ae('annihilation_core'),
            S: '#c:plates/stainless_steel',
            P: mc('sticky_piston'),
        })
        .id('statech:ae2/import_bus');

    // -- EXPORT BUS -- //
    event
        .shaped(ae('export_bus'), ['SFS', ' P '], {
            S: '#c:plates/stainless_steel',
            F: ae('formation_core'),
            P: mc('piston'),
        })
        .id('statech:ae2/export_bus');

    // -- ME P2P TUNNEL -- //
    event
        .shaped(ae('me_p2p_tunnel'), [' S ', 'SES', 'FFF'], {
            S: '#c:plates/stainless_steel',
            E: ae('engineering_processor'),
            F: ae('fluix_crystal'),
        })
        .id('statech:ae2/me_p2p_tunnel');

    // -- MAGNET CARD -- //
    event
        .shaped(wt('magnet_card'), ['RAL', 'ICI', 'III'], {
            R: '#c:storage_blocks/redstone',
            L: '#c:storage_blocks/lapis',
            A: ae('annihilation_plane'),
            C: ae('advanced_card'),
            I: '#c:storage_blocks/stainless_steel',
        })
        .id('statech:ae2/magnet_card');

    // -- DENSE ENERGY CELL -- //
    event
        .shaped(ae('dense_energy_cell'), ['EEE', 'EHE', 'EEE'], {//default mv
            E: ae('energy_cell'),
            H: mi('turbo_machine_hull'),
        })
        .id('statech:ae2/dense_energy_cell');

    // -- NETWORK ANALYZER -- //
    event
        .shaped('ae2netanalyser:network_analyser', ['BAB', 'SHS', 'DSD'], {//default mv
            B: mi('aluminum_plate'),
            A: mi('titanium_plate'),
            S: mi('stainless_steel_plate'),
            H: ae('logic_processor'),
            D: ae('sky_dust'),
        })
        .id('statech:ae2/network_analyzer');

    // -- BULLSHITTUM LINE -- //

    electrolyzer(
        event,
        st('bullshittium_21'),
        32,
        800,
        [{ amount: 23, item: kj('uu_matter') }],
        [
            { amount: 3, item: mi('aluminum_dust') },
            { amount: 8, item: mi('iron_dust') },
            { amount: 4, item: mi('copper_dust') },
            { amount: 1, item: mi('tungsten_tiny_dust') }
        ],
        null,
        [
            { amount: 7889, fluid: mi('hydrogen') }
        ]
    );

    // -- BRONZE QUARRY RECIPES -- //

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/bauxite_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('bauxite_ore'), probability: 0.8 },
            { amount: 1, item: mc('iron_ore'), probability: 0.2 },
        ],
        mi('bauxite_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/lignite_vein',
        4,
        1200,
        [{ amount: 1, item: mi('bronze_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('lignite_coal_ore'), probability: 0.5 },
            { amount: 1, item: mc('coal_ore'), probability: 0.5 },
        ],
        mi('lignite_coal_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/coal_vein',
        4,
        1200,
        [{ amount: 1, item: mi('bronze_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('coal_ore'), probability: 1 },
        ],
        mc('coal_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/copper_vein',
        4,
        1200,
        [{ amount: 1, item: mi('bronze_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('copper_ore'), probability: 1 },
        ],
        mc('copper_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/diamond_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('diamond_ore'), probability: 0.7 },
            { amount: 1, item: mc('coal_ore'), probability: 0.1 },
            { amount: 1, item: mi('sapphire_ore'), probability: 0.1 },
            { amount: 1, item: mi('fluorite_ore'), probability: 0.1 },
        ],
        mc('diamond_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/emerald_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('emerald_ore'), probability: 0.8 },
            { amount: 1, item: mi('fluorite_ore'), probability: 0.2 },
        ],
        mc('emerald_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/gold_vein',
        4,
        1200,
        [{ amount: 1, item: mi('bronze_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('gold_ore'), probability: 0.8 },
            { amount: 3, item: mi('raw_silver'), probability: 0.2 },
        ],
        mc('gold_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/iron_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('iron_ore'), probability: 0.8 },
            { amount: 1, item: mi('nickel_ore'), probability: 0.2 },
        ],
        mc('iron_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/lapis_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('lapis_ore'), probability: 0.9 },
            { amount: 1, item: mi('fluorite_ore'), probability: 0.1 },
        ],
        mc('lapis_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/lead_vein',
        4,
        1200,
        [{ amount: 1, item: mi('bronze_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('lead_ore'), probability: 0.65 },
            { amount: 3, item: mi('raw_silver'), probability: 0.35 },
        ],
        mi('lead_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/platinum_vein',
        4,
        1200,
        [{ amount: 1, item: mi('stainless_steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('platinum_ore'), probability: 0.95 },
            { amount: 1, item: mi('iridium_ore'), probability: 0.05 },
        ],
        mi('platinum_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/quartz_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('quartz_ore'), probability: 0.80 },
            { amount: 1, item: mi('antimony_ore'), probability: 0.20 },
        ],
        mi('quartz_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/redstone_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mc('redstone_ore'), probability: 0.80 },
            { amount: 1, item: mi('ruby_ore'), probability: 0.20 },
        ],
        mc('redstone_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/salt_vein',
        4,
        1200,
        [{ amount: 1, item: mi('steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('salt_ore'), probability: 1 },
        ],
        mi('salt_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/tin_vein',
        4,
        1200,
        [{ amount: 1, item: mi('bronze_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('tin_ore'), probability: 1 },
        ],
        mi('tin_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/titanium_vein',
        4,
        1200,
        [{ amount: 1, item: mi('stainless_steel_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('titanium_ore'), probability: 0.80 },
            { amount: 1, item: mi('tungsten_ore'), probability: 0.20 },
        ],
        mi('titanium_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/uranium_vein',
        4,
        1200,
        [{ amount: 1, item: mi('titanium_drill'), probability: 0.04 }],
        [
            { amount: 1, item: mi('uranium_ore'), probability: 0.90 },
            { amount: 1, item: mi('iridium_ore'), probability: 0.05 },
            { amount: 1, item: mi('monazite_ore'), probability: 0.05 },
        ],
        mi('uranium_ore'),
        'below'
    );

    bronzeQuarry(
        event,
        'statech:bullshittium/bronze_quarry/zinc_vein',
        4,
        1200,
        [{ amount: 1, item: mi('zinc_drill'), probability: 0.04 }],
        [
            { amount: 1, item: cr('zinc_ore'), probability: 1 },
        ],
        cr('zinc_ore'),
        'below'
    );
}) 

// bullshittium stuff outside of this file:
/*
ui stuff (handled by mode switcher)
quantum armor wraps (handled by bullshittium_startup.js)
everlasting beef/steak healing 0 hunger (also startup script)
*/
