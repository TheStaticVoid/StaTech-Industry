// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:${id}`;

    // -- ANGEL RING -- //
    event
        .shaped(kj('angel_ring'), ['FGF', 'TRT', 'CTC'], {
            F: mc('feather'),
            R: mi('gold_ring'),
            T: '#c:storage_blocks/titanium',
            C: mi('digital_circuit'),
            G: mi('gravichestplate'),
        })
        .id(st('angel_ring'));

    // -- GLOWING PILLARS -- //
    event
        .shaped('6x ' + kj('glowing_steel_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/steel',
            G: mc('glowstone'),
            D: '#c:dyes/purple',
        })
        .id(st('glowing_steel_pillar'));

    event
        .shaped('6x ' + kj('glowing_desh_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/desh',
            G: mc('glowstone'),
            D: '#c:dyes/red',
        })
        .id(st('glowing_desh_pillar'));

    event
        .shaped('6x ' + kj('glowing_ostrum_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/ostrum',
            G: mc('glowstone'),
            D: '#c:dyes/lime',
        })
        .id(st('glowing_ostrum_pillar'));

    event
        .shaped('6x ' + kj('glowing_calorite_pillar'), ['SDS', 'SGS', 'SDS'], {
            S: '#c:plates/calorite',
            G: mc('glowstone'),
            D: '#c:dyes/orange',
        })
        .id(st('glowing_calorite_pillar'));

    // -- DIAMOND UPGRADE SMITHING TEMPLATE -- //
    event
        .shaped(
            kj('diamond_upgrade_smithing_template'),
            [' D ', 'DPD', ' D '],
            {
                D: mc('diamond'),
                P: mi('steel_plate'),
            }
        )
        .id(st('diamond_upgrade_smithing_template'));

    // -- HIM -- //
    event
        .shaped(kj('bartman'), ['PCP', 'BWB', 'BEB'], {
            P: mi('plutonium_dust'),
            C: mc('brain_coral_block'),
            B: mc('beef'),
            W: mc('black_wool'),
            E: mc('dragon_egg'),
        })
        .id(st('jon_bartman'));

    // ------------------- //
    // -- STATECH COINS -- //
    // ------------------- //

    let common = kj('coin_common');
    let rare = kj('coin_rare');
    let legendary = kj('coin_legendary');
    let mythic = kj('coin_mythic');

    event.shapeless(rare, ['6x ' + common]).id(st('coin_rare_upgrade'));
    event.shapeless(legendary, ['7x ' + rare]).id(st('coin_legendary_upgrade'));
    event.shapeless(mythic, ['8x ' + legendary]).id(st('coin_mythic_upgrade'));
    event
        .shapeless('8x ' + legendary, [mythic])
        .id(st('coin_legendary_downgrade'));
    event.shapeless('7x ' + rare, [legendary]).id(st('coin_rare_downgrade'));
    event.shapeless('6x ' + common, [rare]).id(st('coin_common_downgrade'));

    // -------------- //
    //    COMMON      //
    // -------------- //

    // -- IRON ORE -- //
    event
        .shaped('8x ' + mc('iron_ore'), ['CCC', '   ', 'CCC'], {
            C: common,
        })
        .id(st('iron_ore_from_common'));

    // -- TIN ORE -- //
    event
        .shaped('8x ' + mi('tin_ore'), ['C C', 'C C', 'C C'], {
            C: common,
        })
        .id(st('tin_ore_from_common'));

    // -- ANDESITE -- //
    event
        .shaped('16x ' + mc('andesite'), ['C', ' ', 'C'], {
            C: common,
        })
        .id(st('andesite_from_common'));

    // -- AMETHYST SHARD -- //
    event
        .shaped('8x ' + mc('amethyst_shard'), ['C  ', ' C ', '  C'], {
            C: common,
        })
        .noMirror()
        .id('amethyst_shard_from_common');

    // -- TOPAZ SHARD -- //
    event
        .shaped('8x ' + sp('topaz_shard'), ['  C', ' C ', 'C  '], {
            C: common,
        })
        .noMirror()
        .id(st('topaz_shard_from_common'));

    // -- CITRINE SHARD -- //
    event
        .shaped('8x ' + sp('citrine_shard'), ['C  ', 'C  ', 'C  '], {
            C: common,
        })
        .id(st('citrine_shard_from_common'));

    // -- COAL ORE -- //
    event
        .shaped('12x ' + mc('coal_ore'), ['C C', ' C ', 'C C'], {
            C: common,
        })
        .id(st('coal_ore_from_common'));

    // -- COPPER ORE -- //
    event
        .shaped('12x ' + mc('copper_ore'), ['CCC', 'C  ', 'CCC'], {
            C: common,
        })
        .id(st('copper_ore_from_common'));

    // -- ZINC ORE -- //
    event
        .shaped('8x create:zinc_ore', ['CC', 'CC'], {
            C: common,
        })
        .id(st('zinc_ore_from_common'));

    // -- SALT ORE -- //
    event
        .shaped('8x ' + mi('salt_ore'), [' CC', 'CC '], {
            C: common,
        })
        .id(st('salt_ore_from_common'));

    // -- LIGNITE COAL ORE -- //
    event
        .shaped('12x ' + mi('lignite_coal_ore'), ['CC ', ' C ', ' CC'], {
            C: common,
        })
        .id(st('lignite_coal_ore_from_common'));

    // -------------- //
    //      RARE      //
    // -------------- //

    // -- GOLD ORE -- //
    event
        .shaped('16x ' + mc('gold_ore'), [' C ', 'C C', ' C '], {
            C: rare,
        })
        .id(st('gold_ore_from_rare'));

    // -- ANTIMONY ORE -- //
    event
        .shaped('8x ' + mi('antimony_ore'), ['   ', 'CCC', '   '], {
            C: rare,
        })
        .id(st('antimony_ore_from_rare'));

    // -- DIAMOND ORE -- //
    event
        .shaped('8x ' + mc('diamond_ore'), ['C', 'C', 'C'], {
            C: rare,
        })
        .id(st('diamond_ore_from_rare'));

    // -- REDSTONE ORE -- //
    event
        .shaped('8x ' + mc('redstone_ore'), ['C C', '   ', 'C C'], {
            C: rare,
        })
        .id(st('redstone_ore_from_rare'));

    // -- LEAD ORE -- //
    event
        .shaped('8x ' + mi('lead_ore'), ['CC', 'CC'], {
            C: rare,
        })
        .id(st('lead_ore_from_rare'));

    // -- NICKEL ORE -- //
    event
        .shaped('8x ' + mi('nickel_ore'), ['CCC', ' C '], {
            C: rare,
        })
        .id(st('nickel_ore_from_rare'));

    // -- BAUXITE ORE -- //
    event
        .shaped('8x ' + mi('bauxite_ore'), [' C ', 'CCC', ' C '], {
            C: rare,
        })
        .id(st('bauxite_ore_from_rare'));

    // -- FLUORITE ORE -- //
    event
        .shaped('8x ' + mi('fluorite_ore'), ['C  ', 'CCC', '  C'], {
            C: rare,
        })
        .id(st('fluorite_ore_from_rare'));

    // -- QUARTZ ORE -- //
    event
        .shaped('8x ' + mi('quartz_ore'), ['C C', ' C ', 'C C'], {
            C: rare,
        })
        .id(st('quartz_ore_from_rare'));

    // -- KERNITE ORE -- //
    event
        .shaped('8x ' + mi('kernite_ore'), ['CCC', ' C ', 'CCC'], {
            C: rare,
        })
        .id(st('kernite_ore_from_rare'));

    // -- RUBY ORE -- //
    event
        .shaped('8x ' + mi('ruby_ore'), ['  C', 'CCC', 'C  '], {
            C: rare,
        })
        .id(st('ruby_ore_from_rare'));

    // -- SAPPHIRE ORE -- //
    event
        .shaped('8x ' + mi('sapphire_ore'), ['CCC', '   ', 'CCC'], {
            C: rare,
        })
        .id(st('sapphire_ore_from_rare'));

    // -------------- //
    //   LEGENDARY    //
    // -------------- //

    // -- ANCIENT DEBRIS -- //
    event
        .shaped('2x ' + mc('ancient_debris'), ['C C', '   ', 'C C'], {
            C: legendary,
        })
        .id(st('ancient_debris_from_legendary'));

    // -- TUNGSTEN ORE -- //
    event
        .shaped('8x ' + mi('tungsten_ore'), [' C ', 'C C', ' C '], {
            C: legendary,
        })
        .id(st('tungsten_ore_from_legendary'));

    // -- MOZANITE ORE -- //
    event
        .shaped('8x ' + mi('monazite_ore'), ['CCC', ' C '], {
            C: legendary,
        })
        .id(st('monazite_ore_from_legendary'));

    // -- URANIUM ORE -- //
    event
        .shaped('8x ' + mi('uranium_ore'), ['C C', 'C C', 'CCC'], {
            C: legendary,
        })
        .id(st('uranium_ore_from_legendary'));

    // -- DESH ORE -- //
    event
        .shaped('8x ' + mi('desh_ore'), ['CC ', 'C C', 'CC '], {
            C: legendary,
        })
        .id(st('desh_ore_from_legendary'));

    // -- OSTRUM ORE -- //
    event
        .shaped('8x ' + mi('ostrum_ore'), ['CCC', 'CCC', 'CCC'], {
            C: legendary,
        })
        .id('ostrum_ore_from_legendary');

    // -- MOON ICE ORE -- //
    event
        .shaped('8x ' + mi('moon_ice_ore'), [' CC', ' C ', 'CC '], {
            C: legendary,
        })
        .id('moon_ice_ore_from_legendary');

    // -- TITANIUM ORE -- //
    event
        .shaped('8x ' + mi('titanium_ore'), ['C C', 'CCC', 'C C'], {
            C: legendary,
        })
        .id('titanium_ore_from_legendary');

    // -- PLATINUM ORE -- //
    event
        .shaped('8x ' + mi('platinum_ore'), ['CCC', 'C C', 'C C'], {
            C: legendary,
        })
        .id('platinum_ore_from_legendary');

    // -- PERIDOT ORE -- //
    event
        .shaped('8x ' + mi('peridot_ore'), ['   ', 'C C', 'CCC'], {
            C: legendary,
        })
        .id('peridot_ore_from_legendary');

    // -- EMERALD ORE -- //
    event
        .shaped('8x ' + mc('emerald_ore'), [' C ', ' C ', 'CCC'], {
            C: legendary,
        })
        .id('emerald_ore_from_legendary');

    // -------------- //
    //     MYTHIC     //
    // -------------- //

    // -- MENDING BOOK -- //
    event
        .shaped(
            Item.of(mc('enchanted_book')).enchant(mc('mending'), 1),
            [' C ', 'C C', ' C '],
            {
                C: mythic,
            }
        )
        .id(st('mending_from_mythic'));

    // -- SOULBOUND BOOK -- //
    event
        .shaped(
            Item.of(mc('enchanted_book')).enchant('yigd:soulbound', 1),
            ['C C', '   ', 'C C'],
            {
                C: mythic,
            }
        )
        .id(st('soulbound_from_mythic'));

    // -- CALORITE ORE -- //
    event
        .shaped('8x ' + mi('calorite_ore'), ['CCC', 'C  ', 'CCC'], {
            C: mythic,
        })
        .id(st('calorite_ore_from_mythic'));

    // -- IRIDIUM ORE -- //
    event
        .shaped('8x ' + mi('iridium_ore'), ['C C', 'C C', 'CCC'], {
            C: mythic,
        })
        .id(st('iridium_ore_from_mythic'));

    // --------------- //
    // -- TOOL SETS -- //
    // --------------- //

    const toolSetsMaterials = ['bronze', 'steel', 'copper'];
    const armorSetsMaterials = ['bronze', 'steel'];

    // -- BOOTS -- //
    armorSetsMaterials.forEach((material) => {
        event
            .shaped(Item.of(kj(`${material}_boots`)), ['   ', 'A A', 'A A'], {
                A: `#c:plates/${material}`,
            })
            .id(st(`${material}_boots`));

        // -- CHESTPLATE -- //
        event
            .shaped(
                Item.of(kj(`${material}_chestplate`)),
                ['A A', 'AAA', 'AAA'],
                {
                    A: `#c:plates/${material}`,
                }
            )
            .id(st(`${material}_chestplate`));

        // -- LEGGINGS -- //
        event
            .shaped(
                Item.of(kj(`${material}_leggings`)),
                ['AAA', 'A A', 'A A'],
                {
                    A: `#c:plates/${material}`,
                }
            )
            .id(st(`${material}_leggings`));

        // -- HELMET -- //
        event
            .shaped(Item.of(kj(`${material}_helmet`)), ['AAA', 'A A', '   '], {
                A: `#c:plates/${material}`,
            })
            .id(st(`${material}_helmet`));
    });

    toolSetsMaterials.forEach((material) => {
        // -- PICKAXE -- //
        event
            .shaped(Item.of(kj(`${material}_pickaxe`)), ['AAA', ' B ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(st(`${material}_pickaxe`));

        // -- AXE -- //
        event
            .shaped(Item.of(kj(`${material}_axe`)), ['AA ', 'AB ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(st(`${material}_axe`));

        // -- SHOVEL -- //
        event
            .shaped(Item.of(kj(`${material}_shovel`)), [' A ', ' B ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(st(`${material}_shovel`));

        // -- SWORD -- //
        event
            .shaped(Item.of(kj(`${material}_sword`)), [' A ', ' A ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(st(`${material}_sword`));

        // -- HOE -- //
        event
            .shaped(Item.of(kj(`${material}_hoe`)), ['AA ', ' B ', ' B '], {
                A: `#c:ingots/${material}`,
                B: '#c:rods/wooden',
            })
            .id(st(`${material}_hoe`));
        
        // -- IRON LUMBERAXE -- //
        event
            .shaped(kj('iron_lumberaxe'), ['PBN', 'PSN', ' S '], {
                B: '#c:storage_blocks/iron',
                P: '#c:plates/iron',
                N: '#c:nuggets/iron',
                S: '#c:rods/wooden'
            })
            .id(st('iron_lumberaxe'));

        // -- COPPER LUMBERAXE -- //
        event
            .shaped(kj('copper_lumberaxe'), ['PBN', 'PSN', ' S '], {
                B: '#c:storage_blocks/copper',
                P: '#c:plates/copper',
                N: '#c:nuggets/copper',
                S: '#c:rods/wooden'
            })
            .id(st('copper_lumberaxe'));

        // -- STEEL LUMBERAXE -- //
        event
            .shaped(kj('steel_lumberaxe'), ['PBN', 'PSN', ' S '], {
                B: '#c:storage_blocks/steel',
                P: '#c:plates/steel',
                N: '#c:nuggets/steel',
                S: '#c:rods/wooden'
            })
            .id(st('steel_lumberaxe'));

        // -- BRONZE LUMBERAXE -- //
        event
            .shaped(kj('bronze_lumberaxe'), ['PBN', 'PSN', ' S '], {
                B: '#c:storage_blocks/bronze',
                P: '#c:plates/bronze',
                N: '#c:nuggets/bronze',
                S: '#c:rods/wooden'
            })
            .id(st('bronze_lumberaxe'));

        // -- GOLD LUMBERAXE -- //
        event
            .shaped(kj('gold_lumberaxe'), ['PBN', 'PSN', ' S '], {
                B: '#c:storage_blocks/gold',
                P: '#c:plates/gold',
                N: '#c:nuggets/gold',
                S: '#c:rods/wooden'
            })
            .id(st('gold_lumberaxe'));

        // -- DIAMOND LUMBERAXE -- //
        event.smithing(
            kj('diamond_lumberaxe'),
            kj('diamond_upgrade_smithing_template'),
            kj('steel_lumberaxe'),
            mc('diamond')
        ).id(st('diamond_lumberaxe'));

        // -- NETHERITE LUMBERAXE -- //
        event.smithing(
            kj('netherite_lumberaxe'),
            mc('netherite_upgrade_smithing_template'),
            kj('diamond_lumberaxe'),
            mc('netherite_ingot')
        ).id(st('netherite_lumberaxe'));

    });
});

ServerEvents.tags('item', (event) => {
    const HAMMERS = [
        jh('bronze_hammer'),
        jh('bronze_impact_hammer'),
        jh('bronze_reinforced_hammer'),
        jh('bronze_reinforced_impact_hammer'),
        jh('bronze_destructor_hammer'),
        jh('steel_hammer'),
        jh('steel_impact_hammer'),
        jh('steel_reinforced_hammer'),
        jh('steel_reinforced_impact_hammer'),
        jh('steel_destructor_hammer'),
    ];
    HAMMERS.forEach((id) => {
        event.add(mc('pickaxes'), id);
        event.add(mc('enchantable/durability'), id);
        event.add(mc('enchantable/mining'), id);
        event.add(mc('enchantable/mining_loot'), id);
        event.add(mc('enchantable/vanishing'), id);
    });

    const LUMBERAXES = [
        kj('iron_lumberaxe'),
        kj('copper_lumberaxe'),
        kj('steel_lumberaxe'),
        kj('bronze_lumberaxe'),
        kj('gold_lumberaxe'),
        kj('diamond_lumberaxe'),
        kj('netherite_lumberaxe')
    ];
    LUMBERAXES.forEach((id) => {
        event.add(kj('lumberaxes'), id);
        event.add(mc('enchantable/durability'), id);
        event.add(mc('enchantable/mining'), id);
        event.add(mc('enchantable/mining_loot'), id);
        event.add(mc('enchantable/vanishing'), id);
        event.remove(mc('axes'), id);
    })

    const COINS = [
        kj('coin_common'),
        kj('coin_rare'),
        kj('coin_legendary'),
        kj('coin_mythic'),
    ];
    COINS.forEach((id) => event.add(kj('statech_coins'), id));

    const CLEAR_ARMOR = [
        kj('clear_helmet'),
        kj('clear_chestplate'),
        kj('clear_leggings'),
        kj('clear_boots'),
    ];
    CLEAR_ARMOR.forEach((id) => event.add(kj('clear_armor'), id));
});

// -- BLOCK TAGGING -- //
ServerEvents.tags('block', (event) => {
    // -- PREFERRED TOOL FOR GLASS-LIKE BLOCKS -- //
    event.add('minecraft:mineable/pickaxe', [
        '#c:glass_blocks',
        'minecraft:glowstone',
        '#chisel:chiseled_glowstone',
        /^xtonesreworked:glaxx_block_/,
    ]);
    // -- MI TWEAKS TAGGING -- //
    const MI_TWEAKS_BLOCKS = Ingredient.of('@mi_tweaks')
        .except('mi_tweaks:machine_blueprint')
        .getStacks()
        .toArray();
    MI_TWEAKS_BLOCKS.forEach((block) => {
        event.add('minecraft:mineable/pickaxe', [`${block.id}`]);
        event.add('minecraft:needs_stone_tool', [`${block.id}`]);
    });
    const tagsToRemoveFromCopper = [
        'minecraft:incorrect_for_wooden_tool',
        'minecraft:incorrect_for_gold_tool',
        'minecraft:needs_stone_tool',
    ];
    tagsToRemoveFromCopper.forEach((tag) => {
        event.remove(`${tag}`, [
            'minecraft:deepslate_copper_ore',
            'minecraft:raw_copper_block',
            'minecraft:copper_ore',
        ]);
    });
});

// -- ITEM TAGGING -- //
ServerEvents.tags('item', (event) => {
    const ultimineDisabledTools = [
        mc('stone_pickaxe'),
        mc('stone_axe'),
        mc('stone_shovel'),
        mc('stone_sword'),
        mc('stone_hoe'),
        mc('wooden_pickaxe'),
        mc('wooden_axe'),
        mc('wooden_shovel'),
        mc('wooden_sword'),
        mc('wooden_hoe'),
    ];
    ultimineDisabledTools.forEach((tool) => {
        event.add('ftbultimine:excluded_tools', `${tool}`);
    });

    // -- MI PARTS TAGGING -- //
    const MATERIALS = [
        'copper',
        'iron',
        'steel',
        'bronze',
        'tin',
        'lead',
        'silver',
        'gold',
        'nickel',
        'zinc',
        'aluminum',
        'platinum',
        'tungsten',
        'titanium',
        'chromium',
        'manganese',
        'electrum',
        'invar',
        'enderium',
        'annealed_copper',
        'stainless_steel',
        'battery_alloy',
        'cupronickel',
        'kanthal',
        'iridium',
        'silicon',
        'superconductor',
        'blastproof_alloy',
    ];

    const CUSTOMMATERIALS = [
        'desh',
        'zinc',
        'tungstensteel',
        'ostrum',
        'calorite',
        'enderium',
        'polytetrafluoroethylene',
        'moon_ice',
        'stone',
        'tuff',
        'calcite',
        'dark_ashes',
        'sky_steel',
        'sky_bronze',
        'entro',
        'ruby',
        'sapphire',
        'peridot',
        'clay',
        'kernite',
        'cobalt',
        'acrylonitrile_butadiene_styrene',
        'boron_trioxide',
        'fluorite',
        'lithium_fluoride',
        'lithium_hydride',
        'lithium_tetrafluoroborate',
    ];

    const baseparts = [
        '_rotor',
        '_curved_plate',
        '_blade',
        '_large_plate',
        '_bolt',
        '_ring',
        '_hot_ingot',
        '_double_ingot',
        '_drill_head',
    ];
    const supplparts = [
        '_plate',
        '_gear',
        '_rod',
        '_tiny_dust',
        '_dust',
        '_ingot',
        '_ore',
        '_nugget',
    ];

    const allparts = baseparts.concat(supplparts);

    MATERIALS.forEach((material) => {
        allparts.forEach((part) => {
            const itemId = `modern_industrialization:${material}${part}`;
            const tagCategory = part.slice(1) + 's';
            const generictag = `c:${tagCategory}`;
            const specifictag = `c:${tagCategory}/${material}`;

            if (Item.exists(itemId)) {
                event.add(generictag, itemId);
                event.add(specifictag, itemId);
            }
        });
    });

    MATERIALS.forEach((material) => {
        baseparts.forEach((part) => {
            const itemId = `modern_industrialization:${material}_wire`;
            const tagCategory = 'wires';
            const generictag = `c:${tagCategory}`;
            const specifictag = `c:${tagCategory}/${material}`;

            if (Item.exists(itemId)) {
                event.add(generictag, itemId);
                event.add(specifictag, itemId);
            }
        });
    });

    CUSTOMMATERIALS.forEach((material) => {
        const itemId = `modern_industrialization:deepslate_${material}_ore`;
        const generictag = `c:ores`;
        const specifictag = `c:ores/${material}`;

        if (Item.exists(itemId)) {
            event.add(generictag, itemId);
            event.add(specifictag, itemId);
        }
    });

    CUSTOMMATERIALS.forEach((material) => {
        const itemId = `modern_industrialization:raw_${material}`;
        const generictag = `c:raw_materials`;
        const specifictag = `c:raw_materials/${material}`;

        if (Item.exists(itemId)) {
            event.add(generictag, itemId);
            event.add(specifictag, itemId);
        }
    });

    CUSTOMMATERIALS.forEach((material) => {
        const itemId = `modern_industrialization:${material}_block`;
        const generictag = `c:storage_blocks`;
        const specifictag = `c:storage_blocks/${material}`;

        if (Item.exists(itemId)) {
            event.add(generictag, itemId);
            event.add(specifictag, itemId);
        }
    });

    CUSTOMMATERIALS.forEach((material) => {
        const itemId = `modern_industrialization:raw_${material}_block`;
        const generictag = `c:storage_blocks`;
        const specifictag = `c:storage_blocks/raw_${material}`;

        if (Item.exists(itemId)) {
            event.add(generictag, itemId);
            event.add(specifictag, itemId);
        }
    });

    const GEMS = ['ruby', 'sapphire', 'peridot'];

    GEMS.forEach((gem) => {
        const itemId = `modern_industrialization:${gem}`;
        const generictag = `c:gems`;
        const specifictag = `c:gems/${gem}`;

        if (Item.exists(itemId)) {
            event.add(generictag, itemId);
            event.add(specifictag, itemId);
        }
    });

    CUSTOMMATERIALS.forEach((material) => {
        allparts.forEach((part) => {
            const itemId = `modern_industrialization:${material}${part}`;
            const tagCategory = part.slice(1) + 's';
            const generictag = `c:${tagCategory}`;
            const specifictag = `c:${tagCategory}/${material}`;

            if (Item.exists(itemId)) {
                event.add(generictag, itemId);
                event.add(specifictag, itemId);
            }
        });
    });
});

EntityEvents.spawned('nomansland:goose', (event) => {
    if (Math.random() > 0.02) return;
    event.entity.setCustomName('Neurotic Goose');
});
