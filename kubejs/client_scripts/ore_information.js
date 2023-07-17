// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

REIEvents.information(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let bg = (id) => `byg:${id}`;
    let cr = (id) => `create:${id}`;

    // -- CUSTOM INFO UTILITY FUNCTION -- //
    let depositBuilder = (vein, minY, maxY, size, dim, biome, weight, blocks) => {
        let arr = [
            `Found in ${vein} Veins`,
            `Range: ${minY} < y < ${maxY}`,
            `Size: ${size}`,
            `Dimension: ${dim}`,
            `Biome: ${biome}`,
            `Weight: ${weight}`,
            'Blocks:'
        ];

        return arr.concat(blocks);
    }

    // aluminium.json
    const ALUMINIUM_DEPOSIT = [
        mi('bauxite_ore'),
        mc('iron_ore'),
        mi('deepslate_bauxite_ore'),
        mc('deepslate_iron_ore')
    ];
    ALUMINIUM_DEPOSIT.forEach(id => {
        e.addItem(id, 'Aluminum Deposit', depositBuilder(
            'Bauxite',
            '-48',
            '32',
            '40',
            'Overworld',
            'All',
            '6',
            [
                '- Bauxite Ore (80%)',
                '- Iron Ore (20%)'
            ]
        ));
    });

    // anthracite.json
    const ANTHRACITE_DEPOSIT = [
        bg('anthracite_ore')
    ];
    ANTHRACITE_DEPOSIT.forEach(id => {
        e.addItem(id, 'Anthracite Deposit', depositBuilder(
            'Anthracite',
            '40',
            '90',
            '50',
            'Nether',
            'Brimstone Caverns',
            '9',
            [
                '- Anthracite Ore (100%)'
            ]
        ));
    });

    // coal.json
    const COAL_DEPOSIT = [
        mc('coal_ore'),
        mi('lignite_coal_ore'),
        mc('deepslate_coal_ore'),
        mi('deepslate_lignite_coal_ore')
    ];
    COAL_DEPOSIT.forEach(id => {
        e.addItem(id, 'Coal Deposit', depositBuilder(
            'Coal',
            '16',
            '70',
            '60',
            'Overworld',
            'All',
            '8',
            [
                '- Coal Ore (50%)',
                '- Lignite Coal Ore (50%)'
            ]
        ));
    });

    // copper.json
    const COPPER_DEPOSIT = [
        mc('copper_ore'),
        mc('deepslate_copper_ore')
    ];
    COPPER_DEPOSIT.forEach(id => {
        e.addItem(id, 'Copper Deposit', depositBuilder(
            'Copper',
            '-8',
            '64',
            '40',
            'Overworld',
            'All',
            '7',
            [
                '- Copper Ore (100%)'
            ]
        ));
    });

    // diamond.json
    const DIAMOND_DEPOSIT = [
        mc('diamond_ore'),
        mc('coal_ore'),
        mi('lignite_coal_ore'),
        tr('sapphire_ore'),
        mi('fluorite_ore'),
        mc('deepslate_diamond_ore'),
        mc('deepslate_coal_ore'),
        mi('deepslate_lignite_coal_ore'),
        tr('deepslate_sapphire_ore'),
        mi('deepslate_fluorite_ore')
    ];
    DIAMOND_DEPOSIT.forEach(id => {
        e.addItem(id, 'Diamond Deposit', depositBuilder(
            'Diamond',
            '-64',
            '0',
            '25',
            'Overworld',
            'All',
            '2',
            [
                '- Diamond Ore (60%)',
                '- Coal Ore (10%)',
                '- Lignite Coal Ore (10%)',
                '- Sapphire Ore (10%)',
                '- Fluorite Ore (10%)'
            ]
        ));
    });

    // emerald.json
    const EMERALD_DEPOSIT = [
        mc('emerald_ore'),
        mi('fluorite_ore'),
        mc('deepslate_emerald_ore'),
        mi('deepslate_fluorite_ore')
    ];
    EMERALD_DEPOSIT.forEach(id => {
        e.addItem(id, 'Emerald Deposit', depositBuilder(
            'Emerald',
            '-48',
            '32',
            '25',
            'Overworld',
            'All',
            '2',
            [
                '- Emerald Ore (80%)',
                '- Fluorite Ore (20%)'
            ]
        ));
    });

    // gold_nether.json
    const DEFAULT_NETHER_GOLD_DEPOSIT = [
        mc('nether_gold_ore'),
        mc('ancient_debris')
    ];
    DEFAULT_NETHER_GOLD_DEPOSIT.forEach(id => {
        e.addItem(id, 'Nether Gold Deposit', depositBuilder(
            'Gold',
            '10',
            '60',
            '30',
            'Nether',
            'All',
            '8',
            [
                '- Nether Gold Ore (99.9%)',
                '- Ancient Debris (0.1%)'
            ]
        ));
    });

    const BLUE_NETHER_GOLD_DEPOSIT = [
        bg('blue_nether_gold_ore'),
        mc('ancient_debris'),
        bg('pendorite_ore')
    ];
    BLUE_NETHER_GOLD_DEPOSIT.forEach(id => {
        e.addItem(id, 'Blue Nether Gold Deposit', depositBuilder(
            'Gold',
            '10',
            '60',
            '30',
            'Nether',
            'Embur Bog',
            '8',
            [
                '- Blue Nether Gold Ore (99.4%)',
                '- Pendorite Ore (0.5%)',
                '- Ancient Debris (0.1%)'
            ]
        ));
    });

    const BRIMSTONE_NETHER_GOLD_DEPOSIT = [
        bg('brimstone_nether_gold_ore'),
        mc('ancient_debris'),
        bg('anthracite_ore')
    ];
    BRIMSTONE_NETHER_GOLD_DEPOSIT.forEach(id => {
        e.addItem(id, 'Brimstone Nether Gold Deposit', depositBuilder(
            'Gold',
            '10',
            '60',
            '30',
            'Nether',
            'Brimstone Caverns',
            '8',
            [
                '- Brimstone Nether Gold Ore (99.4%)',
                '- Anthracite Ore (0.5%)',
                '- Ancient Debris (0.1%)'
            ]
        ));
    });
    // This one is by itself
    e.addItem(bg('emeraldite_ore'), 'Scoria Nether Gold Deposit', depositBuilder(
        'Gold',
        '10',
        '60',
        '30',
        'Nether',
        'Wailing Garth',
        '8',
        [
            '- Nether Gold Ore (99.4%)',
            '- Emeraldite Ore (0.5%)',
            '- Ancient Debris (0.1%)'
        ]
    ));
    e.addItem(bg('emeraldite_ore'), 'Scoria Nether Quartz Deposit', depositBuilder(
        'Quartz',
        '10',
        '120',
        '40',
        'Nether',
        'Wailing Garth',
        '10',
        [
            '- Nether Quartz Ore (99.4%)',
            '- Emeraldite Ore (0.5%)',
            '- Ancient Debris (0.1%)'
        ]
    ));

    // gold.json
    const GOLD_DEPOSIT = [
        mc('gold_ore'),
        tr('silver_ore'),
        mc('deepslate_gold_ore'),
        tr('deepslate_silver_ore')
    ];
    GOLD_DEPOSIT.forEach(id => {
        e.addItem(id, 'Gold Deposit', depositBuilder(
            'Gold',
            '-48',
            '16',
            '50',
            'Overworld',
            'All',
            '5',
            [
                '- Gold Ore (80%)',
                '- Silver Ore (20%)'
            ]
        ));
    });

    // iron.json
    const IRON_DEPOSIT = [
        mc('iron_ore'),
        mi('nickel_ore'),
        mc('deepslate_iron_ore'),
        mi('deepslate_nickel_ore')
    ];
    IRON_DEPOSIT.forEach(id => {
        e.addItem(id, 'Iron Deposit', depositBuilder(
            'Iron',
            '-16',
            '64',
            '70',
            'Overworld',
            'All',
            '7',
            [
                '- Iron Ore (80%)',
                '- Nickel Ore (20%)'
            ]
        ));
    });

    // lapis.json
    const LAPIS_DEPOSIT = [
        mc('lapis_ore'),
        mc('deepslate_lapis_ore')
    ];
    LAPIS_DEPOSIT.forEach(id => {
        e.addItem(id, 'Lapis Deposit', depositBuilder(
            'Lapis',
            '-64',
            '48',
            '40',
            'Overworld',
            'All',
            '4',
            [
                '- Lapis Ore (100%)'
            ]
        ));
    });

    // lead_silver.json
    const LEAD_SILVER_DEPOSIT = [
        mi('lead_ore'),
        tr('silver_ore'),
        tr('galena_ore'),
        mi('deepslate_lead_ore'),
        tr('deepslate_silver_ore'),
        tr('deepslate_galena_ore')
    ];
    LEAD_SILVER_DEPOSIT.forEach(id => {
        e.addItem(id, 'Lead Deposit', depositBuilder(
            'Lead',
            '-48',
            '32',
            '40',
            'Overworld',
            'All',
            '5',
            [
                '- Lead Ore (50%)',
                '- Silver Ore (30%)',
                '- Galena Ore (20%)'
            ]
        ));
    });

    // platinum.json
    const PLATINUM_DEPOSIT = [
        mi('platinum_ore'),
        mi('iridium_ore'),
        mi('deepslate_iridium_ore')
    ];
    PLATINUM_DEPOSIT.forEach(id => {
        e.addItem(id, 'Platinum Deposit', depositBuilder(
            'Platinum',
            '-64',
            '16',
            '25',
            'Overworld',
            'All',
            '2',
            [
                '- Platinum Ore (95%)',
                '- Iridium Ore (5%)'
            ]
        ));
    });

    // quartz_nether.json
    const DEFAULT_NETHER_QUARTZ_DEPOSIT = [
        mc('nether_quartz_ore'),
        mc('ancient_debris')
    ];
    DEFAULT_NETHER_QUARTZ_DEPOSIT.forEach(id => {
        e.addItem(id, 'Nether Quartz Deposit', depositBuilder(
            'Quartz',
            '10',
            '120',
            '40',
            'Nether',
            'All',
            '10',
            [
                '- Nether Quartz Ore (99.9%)',
                '- Ancient Debris (0.1%)'
            ]
        ));
    });

    const BLUE_NETHER_QUARTZ_DEPOSIT = [
        bg('blue_nether_quartz_ore'),
        mc('ancient_debris'),
        bg('pendorite_ore')
    ];
    BLUE_NETHER_QUARTZ_DEPOSIT.forEach(id => {
        e.addItem(id, 'Blue Nether Quartz Deposit', depositBuilder(
            'Quartz',
            '10',
            '120',
            '40',
            'Nether',
            'Embur Bog',
            '10',
            [
                '- Blue Nether Quartz Ore (99.4%)',
                '- Pendorite Ore (0.5%)',
                '- Ancient Debris (0.1%)'
            ]
        ));
    });

    const BRIMSTONE_NETHER_QUARTZ_DEPOSIT = [
        bg('brimstone_nether_quartz_ore'),
        mc('ancient_debris'),
        bg('anthracite_ore')
    ];
    BRIMSTONE_NETHER_QUARTZ_DEPOSIT.forEach(id => {
        e.addItem(id, 'Blue Nether Quartz Deposit', depositBuilder(
            'Quartz',
            '10',
            '120',
            '40',
            'Nether',
            'Brimstone Caverns',
            '10',
            [
                '- Brimstone Nether Quartz Ore (99.4%)',
                '- Anthracite Ore (0.5%)',
                '- Ancient Debris (0.1%)'
            ]
        ));
    });

    // quartz.json
    const QUARTZ_DEPOSIT = [
        mi('quartz_ore'),
        mi('antimony_ore'),
        mi('deepslate_antimony_ore')
    ];
    QUARTZ_DEPOSIT.forEach(id => {
        e.addItem(id, 'Quartz Deposit', depositBuilder(
            'Quartz',
            '-32',
            '32',
            '40',
            'Overworld',
            'All',
            '2',
            [
                '- Quartz Ore (80%)',
                '- Antimony Ore (20%)'
            ]
        ));
    });

    // redstone.json
    const REDSTONE_DEPOSIT = [
        mc('redstone_ore'),
        tr('ruby_ore'),
        bg('cryptic_redstone_ore'),
        mc('deepslate_redstone_ore'),
        tr('deepslate_ruby_ore')
    ];
    REDSTONE_DEPOSIT.forEach(id => {
        e.addItem(id, 'Redstone Deposit', depositBuilder(
            'Redstone',
            '-64',
            '16',
            '60',
            'Overworld',
            'All',
            '4',
            [
                '- Redstone Ore (75%)',
                '- Ruby Ore (20%)',
                '- Cryptic Redstone Ore (5%)'
            ]
        ));
    });

    // salt.json
    const SALT_DEPOSIT = [
        mi('salt_ore')
    ];
    SALT_DEPOSIT.forEach(id => {
        e.addItem(id, 'Salt Deposit', depositBuilder(
            'Salt',
            '48',
            '80',
            '40',
            'Overworld',
            'All',
            '5',
            [
                '- Salt Ore (100%)'
            ]
        ));
    });

    // techreborn_end.json
    const TR_END_DEPOSIT = [
        tr('peridot_ore'),
        tr('sheldonite_ore'),
        tr('sodalite_ore')
    ];
    TR_END_DEPOSIT.forEach(id => {
        e.addItem(id, 'Sheldonite Deposit', depositBuilder(
            'Sheldonite',
            '0',
            '60',
            '30',
            'End',
            'All',
            '4',
            [
                '- Sheldonite Ore (40%)',
                '- Peridot Ore (30%)',
                '- Sodalite Ore (30%)'
            ]
        ));
    });

    // techreborn_nether.json
    const TR_NETHER_DEPOSIT = [
        tr('cinnabar_ore'),
        tr('pyrite_ore'),
        tr('sphalerite_ore')
    ];
    TR_NETHER_DEPOSIT.forEach(id => {
        e.addItem(id, 'Pyrite Deposit', depositBuilder(
            'Pyrite',
            '40',
            '80',
            '40',
            'Nether',
            'All',
            '7',
            [
                '- Pyrite Ore (40%)',
                '- Cinnabar Ore (30%)',
                '- Sphalerite Ore (30%)'
            ]
        ));
    });

    // tin.json
    const TIN_DEPOSIT = [
        mi('tin_ore'),
        mi('deepslate_tin_ore')
    ];
    TIN_DEPOSIT.forEach(id => {
        e.addItem(id, 'Tin Deposit', depositBuilder(
            'Tin',
            '32',
            '80',
            '70',
            'Overworld',
            'All',
            '8',
            [
                '- Tin Ore (100%)'
            ]
        ));
    });

    // titanium.json
    const TITANIUM_DEPOSIT = [
        mi('titanium_ore'),
        mi('tungsten_ore'),
        mi('deepslate_titanium_ore'),
        mi('deepslate_tungsten_ore')
    ];
    TITANIUM_DEPOSIT.forEach(id => {
        e.addItem(id, 'Titanium Deposit', depositBuilder(
            'Titanium',
            '-64',
            '16',
            '20',
            'Overworld',
            'All',
            '1',
            [
                '- Titanium Ore (80%)',
                '- Tungsten Ore (20%)'
            ]
        ));
    });

    // uranium.json
    const URANIUM_DEPOSIT = [
        mi('uranium_ore'),
        mi('iridium_ore'),
        mi('mozanite_ore'),
        mi('deepslate_uranium_ore'),
        mi('deepslate_iridum_ore'),
        mi('deepslate_mozanite_ore')
    ];
    URANIUM_DEPOSIT.forEach(id => {
        e.addItem(id, 'Uranium Deposit', depositBuilder(
            'Uranium',
            '-48',
            '16',
            '30',
            'Overworld',
            'All',
            '1',
            [
                '- Uranium Ore (90%)',
                '- Iridium Ore (5%)',
                '- Mozanite Ore (5%)'
            ]
        ));
    });

    // zinc.json
    const ZINC_DEPOSIT = [
        cr('zinc_ore'),
        cr('deepslate_zinc_ore')
    ];
    ZINC_DEPOSIT.forEach(id => {
        e.addItem(id, 'Zinc Deposit', depositBuilder(
            'Zinc',
            '32',
            '80',
            '70',
            'Overworld',
            'All',
            '7',
            [
                '- Zinc Ore (100%)'
            ]
        ));
    });
});