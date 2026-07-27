// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------
ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:sophisticatedstorage${id}`;

    const SOPH_DELETED = [
        ss('stack_upgrade_omega_tier'),
        ss('storage_stack_upgrade_omega_tier_from_backpack_stack_upgrade_omega_tier'),
        ss('backpack_stack_upgrade_omega_tier_from_storage_stack_upgrade_omega_tier'),
        ss('compression_upgrade'),
        ss('compacting_upgrade'),
        ss('storage_compacting_upgrade_from_backpack_compacting_upgrade'),
        ss('backpack_compacting_upgrade_from_storage_compacting_upgrade'),
        ss('advanced_compacting_upgrade'),
        ss('storage_advanced_compacting_upgrade_from_backpack_advanced_compacting_upgrade'),
        ss('backpack_advanced_compacting_upgrade_from_storage_advanced_compacting_upgrade'),
        ss('magnet_upgrade'),
        ss('advanced_magnet_upgrade_from_basic'),
        ss('advanced_magnet_upgrade'),
        ss('pump_upgrade'),
        ss('xp_pump_upgrade'),
        ss('advanced_pump_upgrade'),
        ss('feeding_upgrade'),
        ss('backpack_feeding_upgrade_from_storage_feeding_upgrade')
    ];
    SOPH_DELETED.forEach(id => event.remove({ id: id }));

    // REPLACE ENDER PEARL WITH TRASH CAN //
    event.replaceInput(
        { output: ss('void_upgrade') },
        'minecraft:ender_pearl',
        mi('trash_can')
    );

    // REPLACE IRON INGOT WITH IRON PLATE //
    event.replaceInput(
        { input: ss('upgrade_base') },
        'minecraft:iron_ingot',
        mi('iron_plate')
    );

    // -- MAGNET UPGRADE -- //
    event.shaped(ss('magnet_upgrade'), [
        'D',
        'M'
    ], {
        D: ss('pickup_upgrade'),
        M: sm('basicmagnet')
    })
        .id(st('magnet_upgrade'));

    // -- ADVANCED MAGNET UPGRADE -- //
    event.shaped(ss('advanced_magnet_upgrade'), [
        'D',
        'M'
    ], {
        D: ss('magnet_upgrade'),
        M: sm('advancedmagnet')
    })
        .id(st('advanced_magnet_upgrade'));

    // Adapted from Monifactory scripts, see https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storagevent.js

    // Remove Limited barrels
    event.remove({ id: /^sophisticatedstorage:.*limited.+barrel.+$/ })
    event.remove({ output: /^sophisticatedstorage:limited_barrel.+$/ })

    const sophStorageMaterials = [
        ['', null, null],
        ['copper_', 'copper'],
        ['iron_', 'iron'],
        ['gold_', 'gold'],
        ['diamond_', 'diamond']
    ]

    const storageContainers = [
        'chest',
        'barrel',
        'shulker_box'
    ]

    sophStorageMaterials.forEach((material, index) => {
        if (index == 0) return;

        storageContainers.forEach(container => {
            let outputStorage = `sophisticatedstorage:${material[0]}${container}`
            let inputStorage = `sophisticatedstorage:${sophStorageMaterials[index - 1][0]}${container}`
            event.remove({ mod: 'sophisticatedstorage', output: outputStorage })
            event.custom({
                'type': 'sophisticatedstorage:storage_tier_upgrade',
                'key': {
                    'N': {
                        'tag': (`c:plates/${material[1]}`)
                    },
                    'C': {
                        'item': inputStorage
                    }
                },
                'pattern': [
                    'NNN',
                    'NCN',
                    'NNN'
                ],
                'result': {
                    'count': 1,
                    'id': outputStorage
                }
            }).id(st(`${material[0]}${container}_upgrade`));
        });
    });

    const containerUpgrades = [
        'basic_tier_upgrade',
        'basic_to_copper_tier_upgrade',
        'basic_to_iron_tier_upgrade',
        'basic_to_gold_tier_upgrade',
        'basic_to_diamond_tier_upgrade',
        'basic_to_netherite_tier_upgrade',
        'copper_to_iron_tier_upgrade',
        'copper_to_gold_tier_upgrade',
        'copper_to_diamond_tier_upgrade',
        'copper_to_netherite_tier_upgrade',
        'iron_to_gold_tier_upgrade',
        'iron_to_diamond_tier_upgrade',
        'iron_to_netherite_tier_upgrade',
        'gold_to_diamond_tier_upgrade',
        'gold_to_netherite_tier_upgrade',
        'diamond_to_netherite_tier_upgrade'
    ]

    const upgradeMaterials = [
        'copper',
        'iron',
        'gold',
        'diamond'
    ]

    containerUpgrades.forEach(upgradeId => {
        upgradeMaterials.forEach(material => {
            const inputItem = material === 'diamond'
                ? 'minecraft:diamond'
                : mc(`${material}_ingot`)

            const outputItem = mi(`${material}_plate`)

            event.replaceInput(
                { output: ss(upgradeId) },
                inputItem,
                outputItem
            )
        });
    });
})
