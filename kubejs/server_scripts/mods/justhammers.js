// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:justhammers/${id}`;

    // -- JUST HAMMERS REMOVED REICPES -- //
    const JUST_HAMMERS_REMOVED_RECIPES = [
        jh('impact_core'),
        jh('reinforced_impact_core'),
        jh('destructor_core'),
        jh('stone_hammer'),
        jh('stone_impact_hammer'),
        jh('stone_reinforced_hammer'),
        jh('stone_reinforced_impact_hammer'),
        jh('stone_destructor_hammer'),
        jh('gold_hammer'),
        jh('gold_impact_hammer'),
        jh('gold_reinforced_hammer'),
        jh('gold_reinforced_impact_hammer'),
        jh('gold_destructor_hammer'),
        jh('diamond_hammer'),
        jh('diamond_impact_hammer'),
        jh('diamond_reinforced_hammer'),
        jh('diamond_reinforced_impact_hammer'),
        jh('diamond_destructor_hammer'),
        jh('iron_hammer'),
        jh('iron_impact_hammer'),
        jh('iron_reinforced_hammer'),
        jh('iron_reinforced_impact_hammer'),
        jh('iron_destructor_hammer'),
        jh('netherite_hammer'),
        jh('netherite_impact_hammer'),
        jh('netherite_reinforced_hammer'),
        jh('netherite_reinforced_impact_hammer'),
        jh('netherite_destructor_hammer'),
    ];
    JUST_HAMMERS_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- BASE RECIPES HAMMERS -- //
    const basicHammerMaterials = ['iron', 'bronze', 'steel'];
    basicHammerMaterials.forEach((material) => {
        event
            .shaped(Item.of(jh(`${material}_hammer`)), ['ACA', ' BA', ' B '], {
                A: `#c:plates/${material}`,
                C: `#c:storage_blocks/${material}`,
                B: '#c:rods/wooden',
            })
            .id(st(`${material}_hammer`));
        event
            .shaped(
                Item.of(jh(`${material}_impact_hammer`)),
                ['CAC', ' BC', ' B '],
                {
                    A: jh('impact_core'),
                    C: `#c:storage_blocks/${material}`,
                    B: '#c:rods/wooden',
                }
            )
            .id(st(`${material}_impact_hammer`));
        event
            .shaped(
                Item.of(jh(`${material}_reinforced_hammer`)),
                ['CAC', ' BC', ' B '],
                {
                    A: jh('reinforced_core'),
                    C: `#c:storage_blocks/${material}`,
                    B: '#c:rods/wooden',
                }
            )
            .id(st(`${material}_reinforced_hammer`));
        event
            .shaped(
                Item.of(jh(`${material}_reinforced_impact_hammer`)),
                ['CAC', ' BC', ' B '],
                {
                    A: jh('reinforced_impact_core'),
                    C: `#c:storage_blocks/${material}`,
                    B: '#c:rods/wooden',
                }
            )
            .id(st(`${material}_reinforced_impact_hammer`));
        event
            .shaped(
                Item.of(jh(`${material}_destructor_hammer`)),
                ['CAC', ' BC', ' B '],
                {
                    A: jh('destructor_core'),
                    C: `#c:storage_blocks/${material}`,
                    B: '#c:rods/wooden',
                }
            )
            .id(st(`${material}_destructor_hammer`));
    });

    // -- SPECIAL RECIPES HAMMERS -- //
    const hammerTypes = [
        'hammer',
        'impact_hammer',
        'reinforced_hammer',
        'reinforced_impact_hammer',
        'destructor_hammer',
    ];
    const specialHammerMaterials = [
        ['diamond', 'kubejs', 'block', 'steel'],
        ['netherite', 'minecraft', 'ingot', 'diamond'],
    ];
    hammerTypes.forEach((hammer) => {
        specialHammerMaterials.forEach((material) => {
            event.smithing(
                `justhammers:${material[0]}_${hammer}`,
                `${material[1]}:${material[0]}_upgrade_smithing_template`,
                `justhammers:${material[3]}_${hammer}`,
                `minecraft:${material[0]}_${material[2]}`
            );
        });
    });

    // -- IMPACT CORE -- //
    event
        .shaped(jh('impact_core'), ['RRR', 'IHG', 'RRR'], {
            R: '#c:dusts/redstone',
            I: '#c:storage_blocks/iron',
            H: mi('steel_hammer'),
            G: '#c:storage_blocks/gold',
        })
        .id(st('impact_core'));

    // -- REINFORCED IMPACT CORE -- //
    event
        .shaped(jh('reinforced_impact_core'), ['RRR', 'DCA', 'RRR'], {
            R: '#c:storage_blocks/redstone',
            D: '#c:storage_blocks/diamond',
            C: jh('reinforced_core'),
            A: '#c:storage_blocks/aluminum',
        })
        .id(st('reinforced_impact_core'));

    // -- DESTRUCTION CORE -- //
    event
        .shaped(jh('destructor_core'), ['RRR', 'SCS', 'RRR'], {
            R: '#c:storage_blocks/redstone',
            S: '#c:storage_blocks/stainless_steel',
            C: jh('reinforced_impact_core'),
        })
        .id(st('destructor_core'));
});

ServerEvents.tags('item', (event) => {
    const MATERIALS = ['stone', 'iron', 'gold', 'diamond', 'netherite'];
    MATERIALS.forEach((material) => {
        event.add('kubejs:hammer/regular', jh(`${material}_hammer`));
        event.add('kubejs:hammer/impact', jh(`${material}_impact_hammer`));
        event.add(
            'kubejs:hammer/reinforced',
            jh(`${material}_reinforced_hammer`)
        );
        event.add(
            'kubejs:hammer/reinforced_impact',
            jh(`${material}_reinforced_impact_hammer`)
        );
        event.add(
            'kubejs:hammer/destructor',
            jh(`${material}_destructor_hammer`)
        );
    });
});
