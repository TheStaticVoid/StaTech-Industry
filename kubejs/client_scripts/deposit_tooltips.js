// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ItemEvents.modifyTooltips(event => {
    const SHIFT_LABEL = Text.yellow('Hold SHIFT to view deposit info');

    const ORES_WITH_VEIN = [
        '#c:ores/iron',
        '#c:ores/bauxite',
        '#c:ores/copper',
        '#c:ores/diamond',
        '#c:ores/emerald',
        '#c:ores/gold',
        '#c:ores/lapis',
        '#c:ores/lead',
        '#c:ores/quartz',
        '#c:ores/nickel',
        '#c:ores/platinum',
        '#c:ores/salt',
        '#c:ores/tin',
        '#c:ores/titanium',
        '#c:ores/uranium',
        '#c:ores/zinc',
        'minecraft:coal_ore',
        'minecraft:deepslate_coal_ore',
        'minecraft:redstone_ore',
        'minecraft:deepslate_redstone_ore'
    ];
    ORES_WITH_VEIN.forEach(id => {
        event.modify(id, {shift: false}, (tooltip) => tooltip.add(SHIFT_LABEL));
    });

    const ORES_PART_OF_VEIN = [
        '#c:ores/lignite_coal',
        '#c:ores/iridium',
        '#c:ores/silver',
        '#c:ores/monazite',
        '#c:ores/tungsten',
        '#c:ores/fluorite',
        '#c:ores/ruby',
        '#c:ores/peridot',
        '#c:ores/sapphire',
        '#c:ores/antimony',
        'minecraft:ancient_debris'
    ];

    const NON_NATURAL_ORES = [
        '#c:ores/calorite',
        '#c:ores/desh',
        '#c:ores/kernite',
        '#c:ores/moon_ice',
        '#c:ores/ostrum'
    ];
    NON_NATURAL_ORES.forEach(id => {
        event.modify(id, (tooltip) => {
            tooltip.add(Text.red('Does not generate naturally'))
        });
    });

    const NON_MODIFIED_ORES = [
        '#spectrum:ores',
        'spectrum:blackslag_coal_ore',
        'spectrum:blackslag_redstone_ore'
    ];
    NON_MODIFIED_ORES.forEach(id => {
        event.modify(id, (tooltip) => {
            tooltip.add(Text.red('Does not generate as part of a deposit'));
        });
    });

    // -- ALUMINUM -- //
    createStandardTooltip(
        event, 
        '#c:ores/bauxite', 
        'Bauxite',
        '16',
        '64',
        'Overworld',
        '50',
        '700-1400',
        'Iron (20%)'
    );

    // -- COAL -- //
    const REGULAR_COAL = [
        'minecraft:coal_ore',
        'minecraft:deepslate_coal_ore'
    ];
    REGULAR_COAL.forEach(id => {
        createStandardTooltip(
            event,
            id,
            'Coal',
            '0',
            '80',
            'Overworld',
            '10',
            '900-1800',
            'Lignite Coal (40%)'
        );
    });
    
    // -- COPPER -- //
    createStandardTooltip(
        event,
        '#c:ores/copper',
        'Copper',
        '-32',
        '64',
        'Overworld',
        '15',
        '900-1500',
    );

    // -- DIAMOND -- //
    createStandardTooltip(
        event,
        '#c:ores/diamond',
        'Diamond',
        '-64',
        '-16',
        'Overworld',
        '100',
        '300-600',
        'Coal (10%), Sapphire (10%), Fluorite (10%)'
    );

    // -- EMERALD -- //
    createStandardTooltip(
        event,
        '#c:ores/emerald',
        'Emerald',
        '48',
        '256',
        'Overworld',
        '100',
        '200-400',
        'Fluorite (10%), Peridot (10%)'
    );

    // -- GOLD -- //
    const REGULAR_GOLD = [
        'minecraft:gold_ore',
        'minecraft:deepslate_gold_ore'
    ];
    REGULAR_GOLD.forEach(id => {
        createStandardTooltip(
            event,
            id,
            'Gold',
            '-64',
            '16',
            'Overworld',
            '25',
            '500-1000',
            'Silver (30%)'
        );
    });

    // -- IRON -- //
    createStandardTooltip(
        event,
        '#c:ores/iron',
        'Iron',
        '16',
        '256',
        'Overworld',
        '15',
        '800-1500',
        'Nickel (20%)'
    );

    // -- LAPIS -- //
    createStandardTooltip(
        event,
        '#c:ores/lapis',
        'Lapis',
        '-32',
        '8',
        'Overworld',
        '50',
        '400-600',
        'Ruby (10%), Sapphire (10%), Perdiot (10%), Fluorite (10%)'
    );

    // -- LEAD -- //
    createStandardTooltip(
        event,
        '#c:ores/lead',
        'Lead',
        '16',
        '64',
        'Overworld',
        '40',
        '500-1000',
        'Silver (30%)'
    );

    // -- NETHER GOLD -- //
    createStandardTooltip(
        event,
        'minecraft:nether_gold_ore',
        'Nether Gold',
        '8',
        '118',
        'Nether',
        '15',
        '500-1000',
        'Glowstone (5%), Ancient Debris (1%)'
    );

    // -- NETHER QUARTZ -- //
    createStandardTooltip(
        event,
        'minecraft:nether_quartz_ore',
        'Nether Quartz',
        '8',
        '118',
        'Nether',
        '10',
        '700-1400',
        'Glowstone (5%), Ancient Debris (1%)'
    );

    // -- NICKEL -- //
    createStandardTooltip(
        event,
        '#c:ores/nickel',
        'Nickel',
        '-64',
        '64',
        'Overworld',
        '50',
        '700-1400',
        'Iron (30%)'
    );

    // -- PLATINUM -- //
    createStandardTooltip(
        event,
        '#c:ores/platinum',
        'Platinum',
        '-64',
        '0',
        'Overworld',
        '100',
        '300-400',
        'Iridium (10%), Monazite (20%)'
    );

    // -- QUARTZ -- //
    const REGULAR_QUARTZ = [
        'modern_industrialization:quartz_ore',
        'modern_industrialization:deepslate_quartz_ore'
    ];
    REGULAR_QUARTZ.forEach(id => {
        createStandardTooltip(
            event,
            id,
            'Quartz',
            '-32',
            '32',
            'Overworld',
            '50',
            '300-500',
            'Antimony (30%)'
        );
    });

    // -- REDSTONE -- //
    const REGULAR_REDSTONE = [
        'minecraft:redstone_ore',
        'minecraft:deepslate_redstone_ore'
    ];
    REGULAR_REDSTONE.forEach(id => {
        createStandardTooltip(
            event,
            id,
            'Redstone',
            '-64',
            '16',
            'Overworld',
            '60',
            '300-600',
            'Ruby (10%)'
        );
    });

    // -- SALT -- //
    createStandardTooltip(
        event,
        '#c:ores/salt',
        'Salt',
        '48',
        '128',
        'Overworld',
        '40',
        '400-700'
    );

    // -- TIN -- //
    createStandardTooltip(
        event,
        '#c:ores/tin',
        'Tin',
        '16',
        '64',
        'Overworld',
        '30',
        '700-1400'
    );

    // -- TITANIUM -- //
    createStandardTooltip(
        event,
        '#c:ores/titanium',
        'Titanium',
        '-64',
        '-16',
        'Overworld',
        '100',
        '400-600',
        'Tungsten (30%), Monazite (10%)'
    );

    // -- URANIUM -- //
    createStandardTooltip(
        event,
        '#c:ores/uranium',
        'Uranium',
        '-64',
        '0',
        'Overworld',
        '100',
        '500-1000',
        'Iridium (10%)'
    );

    // -- ZINC -- //
    createStandardTooltip(
        event,
        '#c:ores/zinc',
        'Zinc',
        '0',
        '64',
        'Overworld',
        '30',
        '700-1400',
        'Iron (10%)'
    );

    /* 
        Ores that are only part of a deposit. I'm not concrete on this solution, but it should be intuitive enough
    */
    // -- ANCIENT DEBRIS -- //
    createPartOfTooltip(
        event,
        'minecraft:ancient_debris',
        'Ancient Debris',
        ['Nether Quartz', 'Nether Gold']
    );

    // -- ANTIMONY -- //
    createPartOfTooltip(
        event,
        '#c:ores/antimony',
        'Antimony',
        ['Quartz']
    );

    // -- FLUORITE -- //
    createPartOfTooltip(
        event,
        '#c:ores/fluorite',
        'Fluorite',
        ['Diamond', 'Lapis']
    );

    // -- IRIDIUM -- //
    createPartOfTooltip(
        event,
        '#c:ores/iridium',
        'Iridium',
        ['Platinum', 'Uranium']
    );

    // -- LIGNITE COAL -- //
    createPartOfTooltip(
        event,
        '#c:ores/lignite_coal',
        'Lignite Coal',
        ['Coal']
    );

    // -- MONAZITE -- //
    createPartOfTooltip(
        event,
        '#c:ores/monazite',
        'Monazite',
        ['Platinum', 'Titanium']
    );

    // -- PERIDOT -- //
    createPartOfTooltip(
        event,
        '#c:ores/peridot',
        'Peridot',
        ['Emerald', 'Lapis']
    );

    // -- RUBY -- //
    createPartOfTooltip(
        event,
        '#c:ores/ruby',
        'Ruby',
        ['Redstone', 'Lapis']
    );

    // -- SAPPHIRE -- //
    createPartOfTooltip(
        event,
        '#c:ores/sapphire',
        'Sapphire',
        ['Diamond', 'Lapis']
    );

    // -- SILVER -- //
    createPartOfTooltip(
        event,
        '#c:ores/silver',
        'Silver',
        ['Gold', 'Lead']
    );

    // -- TUNGSTEN -- //
    createPartOfTooltip(
        event,
        '#c:ores/tungsten',
        'Tungsten',
        ['Titanium']
    );
});

let createStandardTooltip = (event, item, name, minY, maxY, dimension, weight, size, other_ores) => {
    event.modify(item, {shift: true}, (tooltip) => {
        // Line 1
        tooltip.add(Text.join([
            Text.red('== '),
            Text.gold(name),
            Text.yellow(' Deposit Info '),
            Text.red('==')
        ]).bold());

        // Line 2 (blank)
        // tooltip.add(Text.literal(''));

        // Line 3
        tooltip.add(Text.join([
            Text.aqua('Dimension: '),
            Text.green(dimension)
        ]));
        
        // Line 4
        tooltip.add(Text.join([
            Text.aqua('Rarity: '),
            Text.green('1 in '),
            Text.green(weight),
            Text.green(' chunks')
        ]));

        // Line 5
        tooltip.add(Text.join([
            Text.aqua('Y-Levels: '),
            Text.green(minY),
            Text.green(' -> '),
            Text.green(maxY)
        ]));

        // Line 6
        tooltip.add(Text.join([
            Text.aqua('Size: '),
            Text.green(size),
            Text.green(' blocks')
        ]));

        // Line 7
        if (other_ores) {
            tooltip.add(Text.join([
                Text.aqua('Other ores in deposit: '),
                Text.green(other_ores)
            ]));
        }
    });
}

let createPartOfTooltip = (event, item, item_name, deposits) => {
    event.modify(item, (tooltip) => {
        // Line 1
        tooltip.add(Text.yellow('Found in the these deposits:'));

        // Iterate for each deposit
        deposits.forEach(name => {
            tooltip.add(Text.join([
                Text.yellow('- '),
                Text.yellow(name)
            ]));
        });
    });
}