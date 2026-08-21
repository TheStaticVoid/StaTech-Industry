// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------
let HammerItem = Java.loadClass('pro.mikey.justhammers.HammerItem');

const toolSet = [
    ['pickaxe', 'Pickaxe'],
    ['axe', 'Axe'],
    ['hoe', 'Hoe'],
    ['sword', 'Sword'],
    ['shovel', 'Shovel'],
];

const armorSet = [
    ['helmet', 'Helmet'],
    ['chestplate', 'Chestplate'],
    ['leggings', 'Leggings'],
    ['boots', 'Boots'],
];

ItemEvents.toolTierRegistry((event) => {
    event.add('bronze', (tier) => {
        tier.uses = 365;
        tier.speed = 6.5;
        tier.attackDamageBonus = 2;
        tier.enchantmentValue = 20;
        tier.repairIngredient = '#c:ingots/bronze';
    });

    event.add('steel', (tier) => {
        tier.uses = 1310;
        tier.speed = 7.5;
        tier.attackDamageBonus = 2.5;
        tier.enchantmentValue = 15;
        tier.repairIngredient = '#c:ingots/steel';
    });

    event.add('copper', (tier) => {
        tier.uses = 196;
        tier.speed = 5;
        tier.attackDamageBonus = 1.5;
        tier.enchantmentValue = 15;
        tier.repairIngredient = '#c:ingots/copper';
    });
});

// -- HAMMER SPEED AND DURABILITY CHANGES -- //
ItemEvents.modification((event) => {
    // -- IRON HAMMERS -- //
    event.modify('justhammers:iron_hammer', (item) => {
        item.maxDamage = 937; // 3.75
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4, // -2
                },
            ],
        };
    });
    event.modify('justhammers:iron_impact_hammer', (item) => {
        item.maxDamage = 2108; // 2.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4, // -2
                },
            ],
        };
    });
    event.modify('justhammers:iron_reinforced_hammer', (item) => {
        item.maxDamage = 2108; // 2.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4, // -2
                },
            ],
        };
    });
    event.modify('justhammers:iron_reinforced_impact_hammer', (item) => {
        item.maxDamage = 2635; // 1.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4, // -2
                },
            ],
        };
    });
    event.modify('justhammers:iron_destructor_hammer', (item) => {
        item.maxDamage = 3294; // 1.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4, // -2
                },
            ],
        };
    });
    // -- BRONZE HAMMERS -- //
    event.modify('justhammers:bronze_hammer', (item) => {
        item.maxDamage = 1368; // 3.75
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:bronze_impact_hammer', (item) => {
        item.maxDamage = 3078; // 2.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:bronze_reinforced_hammer', (item) => {
        item.maxDamage = 3078; // 2.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:bronze_reinforced_impact_hammer', (item) => {
        item.maxDamage = 3847; // 1.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:bronze_destructor_hammer', (item) => {
        item.maxDamage = 4809; // 1.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_iron_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 4.5, // -2
                },
            ],
        };
    });
    // -- STEEL HAMMERS -- //
    event.modify('justhammers:steel_hammer', (item) => {
        item.maxDamage = 4912; // 3.75
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 5.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:steel_impact_hammer', (item) => {
        item.maxDamage = 11053; // 2.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 5.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:steel_reinforced_hammer', (item) => {
        item.maxDamage = 11053; // 2.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 5.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:steel_reinforced_impact_hammer', (item) => {
        item.maxDamage = 13816; // 1.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 5.5, // -2
                },
            ],
        };
    });
    event.modify('justhammers:steel_destructor_hammer', (item) => {
        item.maxDamage = 17270; // 1.25
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 5.5, // -2
                },
            ],
        };
    });
    // -- DIAMOND HAMMERS -- //
    event.modify('justhammers:diamond_hammer', (item) => {
        item.maxDamage = 15227; // 3.10
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 6, // -2
                },
            ],
        };
    });
    event.modify('justhammers:diamond_impact_hammer', (item) => {
        item.maxDamage = 34264; // 3.10
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 6, // -2
                },
            ],
        };
    });
    event.modify('justhammers:diamond_reinforced_hammer', (item) => {
        item.maxDamage = 34264; // 3.10
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 6, // -2
                },
            ],
        };
    });
    event.modify('justhammers:diamond_reinforced_impact_hammer', (item) => {
        item.maxDamage = 42829; // 3.10
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 6, // -2
                },
            ],
        };
    });
    event.modify('justhammers:diamond_destructor_hammer', (item) => {
        item.maxDamage = 53537; // 3.10
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_diamond_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 6, // -2
                },
            ],
        };
    });
    // -- NETHERITE HAMMERS -- //
    event.modify('justhammers:netherite_hammer', (item) => {
        item.maxDamage = 19795; // 1.3
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_netherite_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 7, // -2
                },
            ],
        };
    });
    event.modify('justhammers:netherite_impact_hammer', (item) => {
        item.maxDamage = 44543; // 1.3
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_netherite_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 7, // -2
                },
            ],
        };
    });
    event.modify('justhammers:netherite_reinforced_hammer', (item) => {
        item.maxDamage = 44543; // 1.3
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_netherite_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 7, // -2
                },
            ],
        };
    });
    event.modify('justhammers:netherite_reinforced_impact_hammer', (item) => {
        item.maxDamage = 55677; // 1.3
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_netherite_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 7, // -2
                },
            ],
        };
    });
    event.modify('justhammers:netherite_destructor_hammer', (item) => {
        item.maxDamage = 69598; // 1.3
        item.tool = {
            defaultMiningSpeed: 1,
            damagePerBlock: 1,
            rules: [
                {
                    blocks: '#minecraft:incorrect_for_netherite_tool',
                    correctForDrops: false,
                },
                {
                    blocks: '#minecraft:mineable/pickaxe',
                    correctForDrops: true,
                    speed: 7, // -2
                },
            ],
        };
    });

    // -- COPPER, BRONZE AND STEEL TOOLS ATTRIBUTES -- //
    toolSet.forEach((tool) => {
        event.modify(`kubejs:copper_${tool[0]}`, (item) => {
            item.maxDamage = 196;
            item.tool = {
                defaultMiningSpeed: 1,
                damagePerBlock: 1,
                rules: [
                    {
                        blocks: '#minecraft:incorrect_for_stone_tool',
                        correctForDrops: false,
                    },
                    {
                        blocks: `#minecraft:mineable/${tool[0]}`,
                        correctForDrops: true,
                        speed: 5,
                    },
                ],
            };
        });
        event.modify(`kubejs:steel_${tool[0]}`, (item) => {
            item.maxDamage = 1310;
            item.tool = {
                defaultMiningSpeed: 1,
                damagePerBlock: 1,
                rules: [
                    {
                        blocks: '#minecraft:incorrect_for_diamond_tool',
                        correctForDrops: false,
                    },
                    {
                        blocks: `#minecraft:mineable/${tool[0]}`,
                        correctForDrops: true,
                        speed: 7.5,
                    },
                ],
            };
        });
        event.modify(`kubejs:bronze_${tool[0]}`, (item) => {
            item.maxDamage = 365;
            item.tool = {
                defaultMiningSpeed: 1,
                damagePerBlock: 1,
                rules: [
                    {
                        blocks: '#minecraft:incorrect_for_iron_tool',
                        correctForDrops: false,
                    },
                    {
                        blocks: `#minecraft:mineable/${tool[0]}`,
                        correctForDrops: true,
                        speed: 6.5,
                    },
                ],
            };
        });
    });
});

StartupEvents.registry('armor_material', (event) => {
    event
        .create(`bronze`)
        .defense({
            helmet: 2,
            chestplate: 6,
            leggings: 5,
            boots: 2,
        })
        .enchantmentValue(18)
        .equipSound(`minecraft:item.armor.equip_iron`)
        .repairIngredient(() => Ingredient.of('#c:ingots/bronze'))
        .toughness(0)
        .knockbackResistance(0);

    event
        .create(`steel`)
        .defense({
            helmet: 3,
            chestplate: 7,
            leggings: 5,
            boots: 2,
        })
        .enchantmentValue(15)
        .equipSound(`minecraft:item.armor.equip_iron`)
        .repairIngredient(() => Ingredient.of('#c:ingots/steel'))
        .toughness(1)
        .knockbackResistance(0);
});

StartupEvents.registry('item', (event) => {
    event
        .create('personal_space_shield')
        .unstackable()
        .rarity('Rare')
        .displayName('Personal Space Shield')
        .tag('curios:charm')
        .tooltip(
            '§aProvides a personal bubble of safety\n§awhile in low-oxygen environments\n\n§bCan be equipped in a curio slot'
        );

    event
        .create('angel_ring')
        .unstackable()
        .rarity('Epic')
        .glow(true)
        .displayName('Angel Ring')
        .tag('curios:ring')
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .addAttribute(
                    'neoforge:creative_flight',
                    'kubejs_flight_ring',
                    1.0,
                    'add_value'
                )
        );

    event
        .create('fireproof_ring')
        .unstackable()
        .rarity('Epic')
        .glow(true)
        .displayName('Fireproof Ring')
        .tag('curios:ring')
        .fireResistant()
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .curioTick((slotContext, stack) => {
                    let player = slotContext.entity();
                    if (player.level.isClientSide()) return;
                    if (!player.hasEffect('minecraft:fire_resistance')) {
                        player.potionEffects.add(
                            'minecraft:fire_resistance',
                            400,
                            0,
                            true,
                            false
                        );
                    }
                    if (player.isOnFire()) {
                        player.setRemainingFireTicks(0);
                    }
                })
                .modifyAttributesTooltip((tooltips, stack) => [
                    '',
                    '§6When worn as ring:',
                    '§9Provides a Fire Resistance effect',
                ])
        );

    event.create('lens_mold').unstackable().displayName('Lens Mold');

    event
        .create('short_range_lens')
        .maxStackSize(16)
        .rarity('Uncommon')
        .displayName('Short Range Lens')
        .tooltip('§bFor use in the Space Telescope');

    event
        .create('deep_space_lens')
        .maxStackSize(16)
        .rarity('Uncommon')
        .displayName('Deep Space Lens')
        .tooltip('§bFor use in the Space Telescope');

    event
        .create('unrefined_simple_stellar_data')
        .rarity('Uncommon')
        .displayName('Unrefined Simple Stellar Data')
        .tooltip('§aContains unrefined basic data');

    event
        .create('unrefined_deep_space_stellar_data')
        .rarity('Rare')
        .displayName('Unrefined Deep Space Stellar Data')
        .tooltip('§aContains unrefined deep space data');

    event
        .create('planetary_data')
        .rarity('Uncommon')
        .displayName('Planetary Data')
        .tooltip('§aContains information about a stellar mass');

    event
        .create('star_data')
        .rarity('Uncommon')
        .displayName('Star Data')
        .tooltip('§aContains information about a star');

    event
        .create('black_hole_data')
        .rarity('Rare')
        .displayName('Black Hole Data')
        .tooltip('§dContains information about a black hole');

    event
        .create('anomalous_stellar_data')
        .rarity('Rare')
        .displayName('Anomalous Stellar Data')
        .tooltip('§dVery rare data of a spatial anomaly');

    event
        .create('star_location_telemetry')
        .rarity('Rare')
        .displayName('Star Location Telemetry')
        .tooltip('§aContains coordinates to a star');

    event
        .create('planetary_location_telemetry')
        .rarity('Rare')
        .displayName('Planetary Location Telemetry')
        .tooltip('§aContains coordinates to a planet');

    event
        .create('black_hole_location_telemetry')
        .rarity('Rare')
        .displayName('Black Hole Location Telemetry')
        .tooltip('§aContains coordinates to a black hole');

    event
        .create('anomaly_location_telemetry')
        .rarity('Epic')
        .displayName('Anomaly Location Telemetry')
        .tooltip('§aContains coordinates to a deep space anomaly');

    event
        .create('research_probe')
        .displayName('Research Probe')
        .tooltip(
            '§bCan be launched in a Space Probe Launcher using telemetry data'
        );

    event
        .create('star_imploder')
        .rarity('Epic')
        .displayName('Star Imploder')
        .tooltip(
            '§aDeliver using a Research Probe\n§cCauses a star to enter supernova'
        );

    event.create('dark_matter').displayName('Dark Matter').rarity('Rare');

    event
        .create('antimatter_housing')
        .displayName('Antimatter Housing')
        .tooltip('§aUsed to safely store antimatter');

    event
        .create('antimatter')
        .displayName('Antimatter')
        .rarity('Epic')
        .tooltip('§4What should not be');

    event
        .create('contained_antimatter')
        .displayName('Contained Antimatter')
        .rarity('Epic');

    event
        .create('basic_space_circuit')
        .displayName('Basic Space Circuit')
        .rarity('Uncommon');

    event
        .create('advanced_space_circuit')
        .displayName('Advanced Space Circuit')
        .rarity('Rare');

    event
        .create('anomalous_space_circuit')
        .displayName('Anomalous Space Circuit')
        .rarity('Epic');

    event.create('core_fragment').displayName('Core Fragment').rarity('Rare');

    event.create('steel_fuel_tank').displayName('Steel Fuel Tank');

    event.create('desh_fuel_tank').displayName('Desh Fuel Tank');

    event.create('ostrum_fuel_tank').displayName('Ostrum Fuel Tank');

    event.create('calorite_fuel_tank').displayName('Calorite Fuel Tank');

    event.create('engine_framebox').displayName('Engine Framebox');

    event.create('rocket_propeller').displayName('Rocket Propeller');

    event.create('rocket_cone').displayName('Rocket Cone');

    event.create('rocket_fin').displayName('Rocket Fin');

    event.create('steel_engine').displayName('Steel Engine');

    event.create('desh_engine').displayName('Desh Engine');

    event.create('ostrum_engine').displayName('Ostrum Engine');

    event.create('calorite_engine').displayName('Calorite Engine');

    event.create('basic_space_probe').displayName('Basic Space Probe');

    event.create('advanced_space_probe').displayName('Advanced Space Probe');

    event
        .create('highly_advanced_space_probe')
        .displayName('Highly Advanced Space Probe');

    event
        .create('boron_quartz_blend')
        .displayName('Boron-Quartz Blend')
        .tag('c:dusts');

    event.create('bartman').displayName('Jon Bartman');

    event.create('withered_soc').displayName('Withered SoC');

    event.create('space_probe').displayName('Space Probe');

    event.create('statech_logo').displayName('StaTech Logo');

    event.create('voice_chat').displayName('Voice Chat');

    event.create('scrap').displayName('Scrap');

    event.create('artifact_dust').displayName('Artifact Dust').rarity('Epic');

    event.create('uu_matter').displayName('UU Matter').rarity('Epic');

    event
        .create('diamond_upgrade_smithing_template')
        .displayName('Diamond Smithing Template');

    event
        .create('silicon_extremely_p_doped_plate')
        .displayName('Extremely P-Doped Silicon Plate');

    event
        .create('battery_casing')
        .displayName('Lithium-Enriched Battery Casing');

    // -- BRONZE EQUIPMENT -- //

    event
        .create('bronze_boots', 'boots')
        .displayName('Bronze Boots')
        .maxDamage(195)
        .material('kubejs:bronze');

    event
        .create('bronze_chestplate', 'chestplate')
        .displayName('Bronze Chestplate')
        .maxDamage(240)
        .material('kubejs:bronze');

    event
        .create('bronze_leggings', 'leggings')
        .displayName('Bronze Leggings')
        .maxDamage(225)
        .material('kubejs:bronze');

    event
        .create('bronze_helmet', 'helmet')
        .displayName('Bronze Helmet')
        .maxDamage(165)
        .material('kubejs:bronze');

    // -- CUSTOM HAMMERS -- // https://discord.com/channels/303440391124942858/1484429923505541140/1484429923505541140

    const customHammerMaterials = ['steel', 'bronze'];
    customHammerMaterials.forEach((material) => {
        event.createCustom(
            `justhammers:${material}_hammer`,
            () => new HammerItem(`${material}`, 3, 1, 1)
        );
        event.createCustom(
            `justhammers:${material}_impact_hammer`,
            () => new HammerItem(`${material}`, 3, 3, 2)
        );
        event.createCustom(
            `justhammers:${material}_reinforced_hammer`,
            () => new HammerItem(`${material}`, 5, 1, 3)
        );
        event.createCustom(
            `justhammers:${material}_reinforced_impact_hammer`,
            () => new HammerItem(`${material}`, 5, 3, 4)
        );
        event.createCustom(
            `justhammers:${material}_destructor_hammer`,
            () => new HammerItem(`${material}`, 5, 5, 5)
        );
    });

    toolSet.forEach((tool) => {
        event
            .create(`bronze_${tool[0]}`, `${tool[0]}`)
            .displayName(`Bronze ${tool[1]}`)
            .tier('bronze');
        event
            .create(`steel_${tool[0]}`, `${tool[0]}`)
            .displayName(`Steel ${tool[1]}`)
            .tier('steel');
        event
            .create(`copper_${tool[0]}`, `${tool[0]}`)
            .displayName(`Copper ${tool[1]}`)
            .tier('copper');
    });

    // -- LUMBERAXES -- //
    const LUMBERAXE_MATS = [
        ['iron', 'Iron'],
        ['copper', 'Copper'],
        ['steel', 'Steel'],
        ['bronze', 'Bronze'],
        ['diamond', 'Diamond'],
        ['gold', 'Gold'],
        ['netherite', 'Netherite']
    ];
    LUMBERAXE_MATS.forEach((material) => {
        event
            .create(`${material[0]}_lumberaxe`, 'axe')
            .displayName(`${material[1]} Lumberaxe`)
            .tier(`${material[0]}`);
    });

    // -- STEEL EQUIPMENT -- //

    event
        .create('steel_boots', 'boots')
        .displayName('Steel Boots')
        .maxDamage(386)
        .material('kubejs:steel');

    event
        .create('steel_chestplate', 'chestplate')
        .displayName('Steel Chestplate')
        .maxDamage(475)
        .material('kubejs:steel');

    event
        .create('steel_leggings', 'leggings')
        .displayName('Steel Leggings')
        .maxDamage(445)
        .material('kubejs:steel');

    event
        .create('steel_helmet', 'helmet')
        .displayName('Steel Helmet')
        .maxDamage(326)
        .material('kubejs:steel');
});

ItemEvents.modification((event) => {
    event.modify('kubejs:charcoal_block', (item) => {
        item.burnTime = 14400;
    });
});
