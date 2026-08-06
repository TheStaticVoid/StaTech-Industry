// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// Adapted from Team AOE's Data maps script for Craftoria (https://github.com/TeamAOF/Craftoria/blob/4b045109f126f27a0cc584cdb0b3c1edbed11c8e/kubejs/server_scripts/Mods/ModernIndustrialization/DataMaps.js#L4)

// -- LARGE ELECTRIC FURNACE TIERS -- //
ServerEvents.generateData('after_mods', (event) => {
    event.json(
        'extended_industrialization:data_maps/block/large_electric_furnace_tier',
        {
            values: {
                'modern_industrialization:tungstensteel_coil': {
                    batch_size: 64,
                    eu_cost_multiplier: 0.75,
                },
            },
        }
    );

    // -- PYROLYSE OVEN TIERS -- //
    event.json(
        'industrialization_overdrive:data_maps/block/pyrolyse_oven_tier',
        {
            values: {
                'modern_industrialization:tungstensteel_coil': {
                    batch_size: 8,
                    eu_cost_multiplier: 0.75,
                },
                'modern_industrialization:cupronickel_coil': {
                    batch_size: 1,
                    eu_cost_multiplier: 0.9,
                },
                'modern_industrialization:kanthal_coil': {
                    batch_size: 4,
                    eu_cost_multiplier: 0.8,
                },
            },
        }
    );


    // -- LIQUID FUELS -- //
    event.json('modern_industrialization:data_maps/fluid/fluid_fuels', {
        values: {
            'modern_industrialization:benzene': {
                eu_per_mb: 100,
            },
            'modern_industrialization:pentaborane': {
                eu_per_mb: 1600,
            },
        },
    });

    // -- IRRADIATOR NEUTRON SOURCES -- //
    event.json(
        'yet_another_industrialization:data_maps/item/irradiator_neutron_source',
        {
            values: {
                'yet_another_industrialization:demon_core': {
                    type: 'lifespan',
                    eu: 8192,
                    irradiation: 16384,
                    probability: 1,
                    probability_check_cooldown: 50,
                },
                'modern_industrialization:beryllium_block': {
                    type: 'consumption',
                    eu: 1024,
                    irradiation: 1280,
                    probability: 0.05,
                    probability_check_cooldown: 200,
                },
            },
        }
    );

    // -- NUMISMATIC GENERATOR CURRENCY -- //
    event.json(
        'yet_another_industrialization:data_maps/item/numismatic_generator_currency',
        {
            values: {
                'minecraft:diamond': {
                    eu_per_item: 8192,
                },
                'minecraft:emerald': {
                    eu_per_item: 6144,
                },
                'minecraft:amethyst_shard': {
                    eu_per_item: 1024,
                },
                'minecraft:lapis_lazuli': {
                    eu_per_item: 512,
                },
                'minecraft:quartz': {
                    eu_per_item: 512,
                },
                'minecraft:prismarine_crystals': {
                    eu_per_item: 512,
                },
                'ae2:certus_quartz_crystal': {
                    eu_per_item: 1024,
                },
                'ae2:fluix_crystal': {
                    eu_per_item: 2048,
                },
                'extendedae:entro_crystal': {
                    eu_per_item: 3072,
                },
                'modern_industrialization:ruby': {
                    eu_per_item: 4096,
                },
                'modern_industrialization:sapphire': {
                    eu_per_item: 2048,
                },
                'modern_industrialization:peridot': {
                    eu_per_item: 2048,
                },
            },
        }
    );

    // -- FLIGHT PYLON TIERS -- //
    event.json(
        'yet_another_industrialization:data_maps/block/flight_pylon_tier',
        {
            values: {
                'modern_industrialization:steel_machine_casing': {
                    beacon_color: '#3F3F3F',
                    eu: 128,
                    range: 24.0,
                    translation_key:
                        'text.yet_another_industrialization.flight_pylon_tier_tiny',
                },
                'modern_industrialization:advanced_machine_casing': {
                    beacon_color: '#3FCAFF',
                    eu: 512,
                    range: 48.0,
                    translation_key:
                        'text.yet_another_industrialization.flight_pylon_tier_small',
                },
                'modern_industrialization:turbo_machine_casing': {
                    beacon_color: '#C8C8DC',
                    eu: 2048,
                    range: 72.0,
                    translation_key:
                        'text.yet_another_industrialization.flight_pylon_tier_medium',
                },
                'modern_industrialization:highly_advanced_machine_casing': {
                    beacon_color: '#DCA0F0',
                    eu: 8192,
                    range: 96.0,
                    translation_key:
                        'text.yet_another_industrialization.flight_pylon_tier_large',
                },
                'modern_industrialization:quantum_machine_casing': {
                    beacon_color: '#E1E6F5',
                    eu: 32768,
                    range: 128.0,
                    translation_key:
                        'text.yet_another_industrialization.flight_pylon_tier_huge',
                },
            },
        }
    );
});
