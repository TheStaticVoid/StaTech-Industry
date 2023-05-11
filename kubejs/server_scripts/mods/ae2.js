ServerEvents.recipes(e => {
    // -- REMOVE RECIPES -- //
    const REMOVED_RECIPES = [
        'ae2:network/blocks/inscribers',
        'ae2:transform/fluix_crystals',
        'ae2:transform/fluix_crystal',
        'ae2:transform/certus_quartz_crystals',
        'ae2:network/blocks/controller',
        'ae2:network/blocks/crystal_processing_charger',
        'ae2:network/blocks/energy_vibration_chamber',
        'ae2:network/crafting/patterns_blank',
        'ae2:misc/tank_sky_stone'
    ];
    REMOVED_RECIPES.forEach(id => e.remove( {id: id} ));

    let mi = (id) => `modern_industrialization:${id}`;
    let ae = (id) => `ae2:${id}`;
    let st = (id) => `statech:ae2/${id}`;

    // -- REMOVE ALL ENDER DUST OUTPUTS -- //
    e.remove({output: ae('ender_dust')});
    
    // -- INSCRIBER -- //
    e.shaped(ae('inscriber'), [
        'MPM',
        'CHC',
        'MPM'
    ],
    {
        P: mi('piston'),
        M: mi('advanced_motor'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('inscriber'));

    // -- CONTROLLER -- //
    e.shaped(ae('controller'), [
        'EFE',
        'CHC',
        'LFP'
    ],
    {
        E: ae('engineering_processor'),
        F: ae('fluix_crystal'),
        C: mi('digital_circuit'),
        H: mi('turbo_machine_hull'),
        L: ae('logic_processor'),
        P: ae('calculation_processor')
    })
    .id(st('controller'));

    // -- CHARGER -- //
    e.shaped(ae('charger'), [
        'SCS',
        'B  ',
        'SCS'
    ],
    {
        S: mi('steel_large_plate'),
        C: mi('annealed_copper_wire'),
        B: 'techreborn:low_voltage_su'
    })
    .id(st('charger'));

    // Buff the Blank Pattern recipe
    e.shaped('4x ae2:blank_pattern', [
        'QGQ',
        'GCG',
        'SSS'
    ],
    {
        Q: ae('quartz_glass'),
        G: '#c:glowstone_dusts',
        C: '#c:certus_quartz',
        S: '#c:stainless_steel_ingots'
    })
    .id(st('blank_pattern'));

    // -- PRINTED SILICON FROM SILICON INGOT -- //
    e.custom({
        type: ae('inscriber'),
        ingredients: {
            middle: {
                tag: 'c:silicon_ingots'
            },
            top: {
                item: ae('silicon_press')
            }
        },
        mode: 'inscribe',
        result: {
            item: ae('printed_silicon')
        }
    });

    // -- Replace the remaining iron ingots in recipes to be stainless steel -- //
    e.replaceInput({mod: 'ae2'}, 'minecraft:iron_ingot', '#c:stainless_steel_plates');
});

ServerEvents.tags('item', e=> {
    const CRAFTING_STORAGE = [
        'ae2:1k_crafting_storage',
        'ae2:4k_crafting_storage',
        'ae2:16k_crafting_storage',
        'ae2:64k_crafting_storage',
        'ae2:256k_crafting_storage'
    ];

    CRAFTING_STORAGE.forEach(id => e.add('kubejs:crafting_storage', id));

    // -- REMOVE ENDER DUST -- //
    e.removeAllTagsFrom('ae2:ender_dust');
})