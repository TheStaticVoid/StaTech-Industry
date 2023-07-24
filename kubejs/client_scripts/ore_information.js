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
    let ad = (id) => `ad_astra:${id}`;

    // -- CUSTOM INFO UTILITY FUNCTION -- //
    let depositBuilder = (oreBlocks, veinInfo) => {
        let arr = [
            `Found in ${veinInfo.veinName} Veins`,
            `Range: ${veinInfo.minY} < y < ${veinInfo.maxY}`,
            `Size: ${veinInfo.size}`,
            `Dimension: ${veinInfo.dimension}`,
            `Biome: ${veinInfo.biome}`,
            `Weight: ${veinInfo.weight}`,
            'Blocks:'
        ];
        arr = arr.concat(veinInfo.blocks);
        oreBlocks.forEach(id => {
            e.addItem(id, veinInfo.internalId, arr);
        });
    }

    // -- DEFINE ORE BLOCK ARRAYS -- //

    // -- ALUMINUM -- //
    const ALUMINUM_ORES = [
        mi('bauxite_ore'),
        mi('deepslate_bauxite_ore')
    ];

    // -- ANCIENT DEBRIS -- //
    const ANCIENT_DEBRIS_ORES = [
        mc('ancient_debris')
    ];

    // -- ANTIMONY -- //
    const ANTIMONY_ORES = [
        mi('antimony_ore'),
        mi('deepslate_antimony_ore')
    ];

    // -- ANTHRACITE -- //
    const ANTHRACITE_ORES = [
        bg('anthracite_ore')
    ];

    // -- CALORITE -- //
    const CALORITE_ORES = [
        ad('venus_calorite_ore'),
        ad('deepslate_calorite_ore')
    ];

    // -- CHEESE -- //
    const CHEESE_ORES = [
        ad('moon_cheese_ore')
    ];

    // -- CINNABAR -- //
    const CINNABAR_ORES = [
        tr('cinnabar_ore')
    ];

    // -- COAL -- //
    const COAL_ORES = [
        mc('coal_ore'),
        mc('deepslate_coal_ore'),
        ad('venus_coal_ore'),
        ad('glacio_coal_ore')
    ];

    // -- COPPER -- //
    const COPPER_ORES = [
        mc('copper_ore'),
        ad('glacio_copper_ore'),
        mc('deepslate_copper_ore')
    ];

    // -- DESH -- //
    const DESH_ORES = [
        ad('moon_desh_ore'),
        ad('deepslate_desh_ore')
    ];

    // -- DIAMOND -- //
    const DIAMOND_ORES = [
        mc('diamond_ore'),
        mc('deepslate_diamond_ore'),
        ad('mars_diamond_ore'),
        ad('venus_diamond_ore')
    ];

    // -- EMERALD -- //
    const EMERALD_ORES = [
        mc('emerald_ore'),
        mc('deepslate_emerald_ore')
    ];

    // -- EMERALDITE -- //
    const EMERALDITE_ORES = [
        bg('emeraldite_ore')
    ];

    // -- FLUORITE -- //
    const FLUORITE_ORES = [
        mi('fluorite_ore'),
        mi('deepslate_fluorite_ore')
    ];

    // -- GALENA -- //
    const GALENA_ORES = [
        tr('galena_ore'),
        tr('deepslate_galena_ore')
    ];

    // -- GOLD -- //
    const GOLD_ORES = [
        mc('gold_ore'),
        mc('deepslate_gold_ore'),
        mc('nether_gold_ore'),
        bg('blue_nether_gold_ore'),
        bg('brimstone_nether_gold_ore'),
        ad('venus_gold_ore')
    ];

    // -- ICE -- //
    const ICE_SHARD_ORES = [
        ad('moon_ice_shard_ore'),
        ad('mars_ice_shard_ore'),,
        ad('glacio_ice_shard_ore'),
        ad('deepslate_ice_shard_ore')
    ];

    // -- IRIDIUM -- //
    const IRIDIUM_ORES = [
        mi('iridium_ore'),
        mi('deepslate_iridium_ore')
    ];

    // -- IRON -- //
    const IRON_ORES = [
        mc('iron_ore'),
        mc('deepslate_iron_ore'),
        ad('moon_iron_ore'),
        ad('mars_iron_ore'),
        ad('mercury_iron_ore'),
        ad('glacio_iron_ore'),
        ad('deepslate_iron_ore')
    ];

    // -- LAPIS -- //
    const LAPIS_ORES = [
        mc('lapis_ore'),
        ad('glacio_lapis_ore'),
        mc('deepslate_lapis_ore')
    ];

    // -- LEAD -- //
    const LEAD_ORES = [
        mi('lead_ore'),
        mi('deepslate_lead_ore')
    ];

    // -- LIGNITE COAL -- //
    const LIGNITE_COAL_ORES = [
        mi('lignite_coal_ore'),
        mi('deepslate_lignite_coal_ore')
    ];

    // -- MOZANITE -- //
    const MOZANITE_ORES = [
        mi('mozanite_ore'),
        mi('deepslate_mozanite_ore')
    ];

    // -- NICKEL -- //
    const NICKEL_ORES = [
        mi('nickel_ore'),
        mi('deepslate_nickel_ore')
    ];

    // -- OSTRUM -- //
    const OSTRUM_ORES = [
        ad('mars_ostrum_ore'),
        ad('deepslate_ostrum_ore')
    ];

    // -- PENDORITE -- //
    const PENDORITE_ORES = [
        bg('pendorite_ore')
    ];

    // -- PERIDOT -- //
    const PERIDOT_ORES = [
        tr('peridot_ore')
    ];

    // -- PLATINUM -- //
    const PLATINUM_ORES = [
        mi('platinum_ore')
    ];

    // -- PYRITE -- //
    const PYRITE_ORES = [
        tr('pyrite_ore')
    ];

    // -- QUARTZ -- //
    const QUARTZ_ORES = [
        mc('nether_quartz_ore'),
        bg('blue_nether_quartz_ore'),
        bg('brimstone_nether_quartz_ore'),
        mi('quartz_ore')
    ];

    // -- REDSTONE -- // 
    const REDSTONE_ORES = [
        mc('redstone_ore'),
        mc('deepslate_redstone_ore'),
        bg('cryptic_redstone_ore')
    ];

    // -- RUBY -- //
    const RUBY_ORES = [
        tr('ruby_ore'),
        tr('deepslate_ruby_ore')
    ];

    // -- SALT -- //
    const SALT_ORES = [
        mi('salt_ore'),
        mi('deepslate_salt_ore')
    ];

    // -- SAPPHIRE -- //
    const SAPPHIRE_ORES = [
        tr('sapphire_ore'),
        tr('deepslate_sapphire_ore')
    ];

    // -- SHELDONITE -- //
    const SHELDONITE_ORES = [
        tr('sheldonite_ore')
    ];

    // -- SILVER -- //
    const SILVER_ORES = [
        tr('silver_ore'),
        tr('deepslate_silver_ore')
    ];

    // -- SODALITE -- //
    const SODALITE_ORES = [
        tr('sodalite_ore')
    ];

    // -- SPHALERITE -- //
    const SPHALERITE_ORES = [
        tr('sphalerite_ore')
    ];

    // -- TIN -- //
    const TIN_ORES = [
        mi('tin_ore'),
        mi('deepslate_tin_ore')
    ];

    // -- TITANIUM -- //
    const TITANIUM_ORES = [
        mi('titanium_ore'),
        mi('deepslate_titanium_ore'),
    ];

    // -- TUNGSTEN -- //
    const TUNGSTEN_ORES = [
        mi('tungsten_ore'),
        mi('deepslate_tungsten_ore')
    ];

    // -- URANIUM -- //
    const URANIUM_ORES = [
        mi('uranium_ore'),
        mi('deepslate_uranium_ore')
    ];

    // -- ZINC -- //
    const ZINC_ORES = [
        cr('zinc_ore'),
        cr('deepslate_zinc_ore')
    ];

    // aluminum.json
    const ALUMINUM_DEPOSIT_INFO = {
        internalId: 'Bauxite Deposit',
        veinName: 'Bauxite',
        minY: '-48',
        maxY: '32',
        size: '40',
        dimension: 'Overworld',
        biome: 'All',
        weight: '6',
        blocks: [
            '- Bauxite Ore (80%)',
            '- Iron Ore (20%)'
        ]
    }
    depositBuilder(IRON_ORES, ALUMINUM_DEPOSIT_INFO);
    depositBuilder(ALUMINUM_ORES, ALUMINUM_DEPOSIT_INFO);

    // anthracite.json
    const ANTHRACITE_DEPOSIT_INFO = {
        internalId: 'Anthracite Deposit',
        veinName: 'Anthracite',
        minY: '40',
        maxY: '90',
        size: '50',
        dimension: 'Nether',
        biome: 'Brimstone Caverns',
        weight: '9',
        blocks: [
            '- Anthracite Ore (100%)'
        ]
    }
    depositBuilder(ANTHRACITE_ORES, ANTHRACITE_DEPOSIT_INFO);

    // calorite.json
    const CALORITE_DEPOSIT_INFO = {
        internalId: 'Calorite Deposit Info',
        veinName: 'Calorite',
        minY: '-48',
        maxY: '48',
        size: '60',
        dimension: 'Venus',
        biome: 'All',
        weight: '6',
        blocks: [
            '- Calorite Ore (100%)'
        ]
    }
    depositBuilder(CALORITE_ORES, CALORITE_DEPOSIT_INFO);

    // cheese_moon.json
    const CHEESE_DEPOSIT_INFO = {
        internalId: 'Cheese Deposit',
        veinName: 'Cheese',
        minY: '0',
        maxY: '64',
        size: '50',
        dimension: 'Moon',
        biome: 'Lunar Wastelands',
        weight: '8',
        blocks: [
            '- Cheese Ore (100%)'
        ]
    }
    depositBuilder(CHEESE_ORES, CHEESE_DEPOSIT_INFO);

    // coal.json
    const COAL_DEPOSIT_INFO = {
        internalId: 'Coal Deposit',
        veinName: 'Coal',
        minY: '16',
        maxY: '70',
        size: '60',
        dimension: 'Overworld',
        biome: 'All',
        weight: '8',
        blocks: [
            '- Coal Ore (50%)',
            '- Lignite Coal Ore (50%)'
        ]
    }
    depositBuilder(COAL_ORES, COAL_DEPOSIT_INFO);
    depositBuilder(LIGNITE_COAL_ORES, COAL_DEPOSIT_INFO);

    // coal_glacio.json
    const GLACIO_COAL_DEPOSIT_INFO = {
        internalId: 'Glacio Coal Deposit',
        veinName: 'Coal',
        minY: '16',
        maxY: '70',
        size: '60',
        dimension: 'Glacio',
        biome: 'All',
        weight: '8',
        blocks: [
            '- Coal Ore (100%)'
        ]
    }
    depositBuilder(COAL_ORES, GLACIO_COAL_DEPOSIT_INFO);

    // coal_venus.json
    const VENUS_COAL_DEPOSIT_INFO = {
        internalId: 'Venus Coal Deposit',
        veinName: 'Coal',
        minY: '0',
        maxY: '60',
        size: '50',
        dimension: 'Venus',
        biome: 'All',
        weight: '8',
        blocks: [
            '- Coal Ore (100%)'
        ]
    }
    depositBuilder(COAL_ORES, VENUS_COAL_DEPOSIT_INFO);

    // copper.json
    const COPPER_DEPOSIT_INFO = {
        internalId: 'Copper Deposit',
        veinName: 'Copper',
        minY: '-8',
        maxY: '48',
        size: '40',
        dimension: 'Overworld',
        biome: 'All',
        weight: '7',
        blocks: [
            '- Copper Ore (100%)'
        ]
    }
    depositBuilder(COPPER_ORES, COPPER_DEPOSIT_INFO);

    // copper_glacio.json
    const GLACIO_COPPER_DEPOSIT_INFO = {
        internalId: 'Glacio Copper Deposit',
        veinName: 'Copper',
        minY: '-8',
        maxY: '64',
        size: '60',
        dimension: 'Glacio',
        biome: 'All',
        weight: '7',
        blocks: [
            '- Copper Ore (100%)'
        ]
    }
    depositBuilder(COPPER_ORES, GLACIO_COPPER_DEPOSIT_INFO);

    // desh.json
    const DESH_DEPOSIT_INFO = {
        internalId: 'Desh Deposit',
        veinName: 'Desh',
        minY: '-48',
        maxY: '48',
        size: '50',
        dimension: 'Moon',
        biome: 'Lunar Wastelands',
        weight: '6',
        blocks: [
            '- Desh Ore (80%)',
            '- Cheese Ore (10%)',
            '- Ice Shard Ore (10%)'
        ]
    }
    depositBuilder(DESH_ORES, DESH_DEPOSIT_INFO);
    depositBuilder(CHEESE_ORES, DESH_DEPOSIT_INFO);
    depositBuilder(ICE_SHARD_ORES, DESH_DEPOSIT_INFO);

    // diamond.json
    const DIAMOND_DEPOSIT_INFO = {
        internalId: 'Diamond Deposit',
        veinName: 'Diamond',
        minY: '-64',
        maxY: '0',
        size: '25',
        dimension: 'Overworld',
        biome: 'All',
        weight: '2',
        blocks: [
            '- Diamond Ore (70%)',
            '- Coal Ore (10%)',
            '- Sapphire Ore (10%)',
            '- Fluorite Ore (10%)'
        ]
    }
    depositBuilder(DIAMOND_ORES, DIAMOND_DEPOSIT_INFO);
    depositBuilder(COAL_ORES, DIAMOND_DEPOSIT_INFO);
    depositBuilder(LIGNITE_COAL_ORES, DIAMOND_DEPOSIT_INFO);
    depositBuilder(SAPPHIRE_ORES, DIAMOND_DEPOSIT_INFO);
    depositBuilder(FLUORITE_ORES, DIAMOND_DEPOSIT_INFO);

    // diamond_mars.json
    const MARS_DIAMOND_DEPOSIT_INFO = {
        internalId: 'Mars Diamond Deposit',
        veinName: 'Diamond',
        minY: '-64',
        maxY: '0',
        size: 25,
        dimension: 'Mars',
        biome: 'All',
        weight: 2,
        blocks: [
            '- Diamond Ore (80%)',
            '- Ice Shard Ore (20%)'
        ]
    }
    depositBuilder(DIAMOND_ORES, MARS_DIAMOND_DEPOSIT_INFO);
    depositBuilder(ICE_SHARD_ORES, MARS_DIAMOND_DEPOSIT_INFO);

    // diamond_venus.json
    const VENUS_DIAMOND_DEPOSIT_INFO = {
        internalId: 'Venus Diamond Deposit',
        veinName: 'Diamond',
        minY: '-64',
        maxY: '0',
        size: '25',
        dimension: 'Venus',
        biome: 'All',
        weight: '2',
        blocks: [
            '- Diamond Ore (80%)',
            '- Coal Ore (20%)'
        ]
    }
    depositBuilder(DIAMOND_ORES, VENUS_DIAMOND_DEPOSIT_INFO);
    depositBuilder(COAL_ORES, VENUS_DIAMOND_DEPOSIT_INFO);

    // emerald.json
    const EMERALD_DEPOSIT_INFO = {
        internalId: 'Emerald Deposit',
        veinName: 'Emerald',
        minY: '-48',
        maxY: '32',
        size: '25',
        dimension: 'Overworld',
        biome: 'All',
        weight: '2',
        blocks: [
            '- Emerald Ore (80%)',
            '- Fluorite Ore (20%)'
        ]
    }
    depositBuilder(EMERALD_ORES, EMERALD_DEPOSIT_INFO);
    depositBuilder(FLUORITE_ORES, EMERALD_DEPOSIT_INFO);

    // gold.json
    const GOLD_DEPOSIT_INFO = {
        internalId: 'Gold Deposit',
        veinName: 'Gold',
        minY: '-48',
        maxY: '16',
        size: '50',
        dimension: 'Overworld',
        biome: 'All',
        weight: '5',
        blocks: [
            '- Gold Ore (80%)',
            '- Silver Ore (20%)'
        ]
    }
    depositBuilder(GOLD_ORES, GOLD_DEPOSIT_INFO);
    depositBuilder(SILVER_ORES, GOLD_DEPOSIT_INFO);

    // gold_nether.json
    const NETHER_GOLD_DEPOSIT_INFO = {
        internalId: 'Nether Gold Deposit',
        veinName: 'Gold',
        minY: '10',
        maxY: '60',
        size: '50',
        dimension: 'Nether',
        biome: 'All',
        weight: '8',
        blocks: [
            '- Nether Gold Ore (99.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(GOLD_ORES, NETHER_GOLD_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, NETHER_GOLD_DEPOSIT_INFO);

    const BLUE_NETHER_GOLD_DEPOSIT_INFO = {
        internalId: 'Blue Nether Gold Deposit',
        veinName: 'Gold',
        minY: '10',
        maxY: '60',
        size: '50',
        dimension: 'Nether',
        biome: 'Embur Bog',
        weight: '8',
        blocks: [
            '- Blue Nether Gold Ore (99%)',
            '- Pendorite Ore (0.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(GOLD_ORES, BLUE_NETHER_GOLD_DEPOSIT_INFO);
    depositBuilder(PENDORITE_ORES, BLUE_NETHER_GOLD_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, BLUE_NETHER_GOLD_DEPOSIT_INFO);

    const BRIMSTONE_NETHER_GOLD_DEPOSIT_INFO = {
        internalId: 'Brimstone Nether Gold Deposit',
        veinName: 'Gold',
        minY: '10',
        maxY: '60',
        size: '50',
        dimension: 'Nether',
        biome: 'Brimstone Caverns',
        weight: '8',
        blocks: [
            '- Brimstone Nether Gold Ore (99%)',
            '- Anthracite Ore (0.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(GOLD_ORES, BRIMSTONE_NETHER_GOLD_DEPOSIT_INFO);
    depositBuilder(ANTHRACITE_ORES, BRIMSTONE_NETHER_GOLD_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, BRIMSTONE_NETHER_GOLD_DEPOSIT_INFO);

    const SCORIA_NETHER_GOLD_DEPOSIT_INFO = {
        internalId: 'Scoria Nether Gold Deposit',
        veinName: 'Gold',
        minY: '10',
        maxY: '60',
        size: '50',
        dimension: 'Nether',
        biome: 'Wailing Garth',
        weight: '8',
        blocks: [
            '- Nether Gold Ore (99%)',
            '- Emeraldite Ore (0.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(GOLD_ORES, SCORIA_NETHER_GOLD_DEPOSIT_INFO);
    depositBuilder(EMERALDITE_ORES, SCORIA_NETHER_GOLD_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, SCORIA_NETHER_GOLD_DEPOSIT_INFO);

    // gold_venus.json
    const VENUS_GOLD_DEPOSIT_INFO = {
        internalId: 'Venus Gold Deposit',
        veinName: 'Gold',
        minY: '-48',
        maxY: '16',
        size: '80',
        dimension: 'Venus',
        biome: 'All',
        weight: '6',
        blocks: [
            '- Gold Ore (100%)'
        ]
    }
    depositBuilder(GOLD_ORES, VENUS_GOLD_DEPOSIT_INFO);

    // ice_glacio.json
    const GLACIO_ICE_DEPOSIT_INFO = {
        internalId: 'Glacio Ice Deposit',
        veinName: 'Ice Shard',
        minY: '-32',
        maxY: '52',
        size: '120',
        dimension: 'Glacio',
        biome: 'All',
        weight: '6',
        blocks: [
            '- Ice Shard Ore (100%)'
        ]
    }
    depositBuilder(ICE_SHARD_ORES, GLACIO_ICE_DEPOSIT_INFO);

    // ice_mars.json
    const MARS_ICE_DEPOSIT_INFO = {
        internalId: 'Mars Ice Deposit',
        veinName: 'Ice Shard',
        minY: '-32',
        maxY: '52',
        size: '40',
        dimension: 'Mars',
        biome: 'All',
        weight: '4',
        blocks: [
            '- Ice Shard Ore (100%)'
        ]
    }
    depositBuilder(ICE_SHARD_ORES, MARS_ICE_DEPOSIT_INFO);

    // ice_moon.json
    const MOON_ICE_DEPOSIT_INFO = {
        internalId: 'Ice Deposit',
        veinName: 'Ice Shard',
        minY: '-32',
        maxY: '52',
        size: '40',
        dimension: 'Moon',
        biome: 'Lunar Wastelands',
        weight: '4',
        blocks: [
            '- Ice Shard Ore (80%)',
            '- Cheese Ore (20%)'
        ]
    }
    depositBuilder(ICE_SHARD_ORES, MOON_ICE_DEPOSIT_INFO);
    depositBuilder(CHEESE_ORES, MOON_ICE_DEPOSIT_INFO);

    // iron.json
    const IRON_DEPOSIT_INFO = {
        internalId: 'Iron Deposit',
        veinName: 'Iron',
        minY: '-16',
        maxY: '52',
        size: '70',
        dimension: 'Overworld',
        biome: 'All',
        weight: '7',
        blocks: [
            '- Iron Ore (80%)',
            '- Nickel Ore (20%)'
        ]
    }
    depositBuilder(IRON_ORES, IRON_DEPOSIT_INFO);
    depositBuilder(NICKEL_ORES, IRON_DEPOSIT_INFO);

    // iron_glacio.json
    const GLACIO_IRON_DEPOSIT_INFO = {
        internalId: 'Glacio Iron Deposit',
        veinName: 'Iron',
        minY: '-32',
        maxY: '52',
        size: '70',
        dimension: 'Glacio',
        biome: 'All',
        weight: '7',
        blocks: [
            '- Iron Ore (90%)',
            '- Ice Shard Ore (10%)'
        ]
    }
    depositBuilder(IRON_ORES, GLACIO_IRON_DEPOSIT_INFO);
    depositBuilder(ICE_SHARD_ORES, GLACIO_IRON_DEPOSIT_INFO);

    // iron_mars.json
    const MARS_IRON_DEPOSIT_INFO = {
        internalId: 'Mars Iron Deposit',
        veinName: 'Iron',
        minY: '-32',
        maxY: '52',
        size: '70',
        dimension: 'Mars',
        biome: 'All',
        weight: '7',
        blocks: [
            '- Iron Ore (90%)',
            '- Ice Shard Ore (10%)'
        ]
    }
    depositBuilder(IRON_ORES, MARS_IRON_DEPOSIT_INFO);
    depositBuilder(ICE_SHARD_ORES, MARS_IRON_DEPOSIT_INFO);

    // iron_mercury.json
    const MERCURY_IRON_DEPOSIT_INFO = {
        internalId: 'Mercury Iron Deposit',
        veinName: 'Iron',
        minY: '-64',
        maxY: '64',
        size: '120',
        dimension: 'Mercury',
        biome: 'Mercury Deltas',
        weight: '10',
        blocks: [
            '- Iron Ore (100%)'
        ]
    }
    depositBuilder(IRON_ORES, MERCURY_IRON_DEPOSIT_INFO);

    // iron_moon.json
    const MOON_IRON_DEPOSIT_INFO = {
        internalId: 'Moon Iron Deposit',
        veinName: 'Iron',
        minY: '-32',
        maxY: '52',
        size: '70',
        dimension: 'Moon',
        biome: 'Lunar Wastelands',
        weight: '7',
        blocks: [
            '- Iron Ore (80%)',
            '- Cheese Ore (20%)'
        ]
    }
    depositBuilder(IRON_ORES, MOON_IRON_DEPOSIT_INFO);
    depositBuilder(CHEESE_ORES, MOON_IRON_DEPOSIT_INFO);

    // lapis.json
    const LAPIS_DEPOSIT_INFO = {
        internalId: 'Lapis Deposit',
        veinName: 'Lapis',
        minY: '-64',
        maxY: '48',
        size: '40',
        dimension: 'Overworld',
        biome: 'All',
        weight: '4',
        blocks: [
            '- Lapis Ore (90%)',
            '- Fluorite Ore (10%)'
        ]
    }
    depositBuilder(LAPIS_ORES, LAPIS_DEPOSIT_INFO);
    depositBuilder(FLUORITE_ORES, LAPIS_DEPOSIT_INFO);

    // lapis_glacio.json
    const GLACIO_LAPIS_DEPOSIT_INFO = {
        internalId: 'Glacio Lapis Deposit',
        veinName: 'Lapis',
        minY: '-64',
        maxY: '48',
        size: '40',
        dimension: 'Glacio',
        biome: 'All',
        weight: '4',
        blocks: [
            '- Lapis Ore (100%)'
        ]
    }
    depositBuilder(LAPIS_ORES, GLACIO_LAPIS_DEPOSIT_INFO);

    // lead_silver.json
    const LEAD_DEPOSIT_INFO = {
        internalId: 'Lead Deposit',
        veinName: 'Lead',
        minY: '-48',
        maxY: '32',
        size: '40',
        dimension: 'Overworld',
        biome: 'All',
        weight: '5',
        blocks: [
            '- Lead Ore (50%)',
            '- Silver Ore (30%)',
            '- Galena Ore (20%)'
        ]
    }
    depositBuilder(LEAD_ORES, LEAD_DEPOSIT_INFO);
    depositBuilder(SILVER_ORES, LEAD_DEPOSIT_INFO);
    depositBuilder(GALENA_ORES, LEAD_DEPOSIT_INFO);

    // ostrum.json
    const OSTRUM_DEPOSIT_INFO = {
        internalId: 'Ostrum Deposit',
        veinName: 'Ostrum',
        minY: '-48',
        maxY: '48',
        size: '50',
        dimension: 'Mars',
        biome: 'All',
        weight: '6',
        blocks: [
            '- Ostrum Ore (90%)',
            '- Ice Shard Ore (10%)'
        ]
    }
    depositBuilder(OSTRUM_ORES, OSTRUM_DEPOSIT_INFO);
    depositBuilder(ICE_SHARD_ORES, OSTRUM_DEPOSIT_INFO);

    // platinum.json
    const PLATINUM_DEPOSIT_INFO = {
        internalId: 'Platinum Deposit',
        veinName: 'Platinum',
        minY: '-64',
        maxY: '16',
        size: '25',
        dimension: 'Overworld',
        biome: 'All',
        weight: '2',
        blocks: [
            '- Platinum Ore (95%)',
            '- Iridium Ore (5%)'
        ]
    }
    depositBuilder(PLATINUM_ORES, PLATINUM_DEPOSIT_INFO);
    depositBuilder(IRIDIUM_ORES, PLATINUM_DEPOSIT_INFO);

    // quartz_nether.json
    const NETHER_QUARTZ_DEPOSIT_INFO = {
        internalId: 'Nether Quartz Deposit',
        veinName: 'Quartz',
        minY: '10',
        maxY: '120',
        size: '70',
        dimension: 'Nether',
        biome: 'All',
        weight: '10',
        blocks: [
            '- Nether Quartz Ore (99.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(QUARTZ_ORES, NETHER_QUARTZ_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, NETHER_QUARTZ_DEPOSIT_INFO);

    const BLUE_NETHER_QUARTZ_DEPOSIT_INFO = {
        internalId: 'Blue Nether Quartz Deposit',
        veinName: 'Quartz',
        minY: '10',
        maxY: '120',
        size: '70',
        dimension: 'Nether',
        biome: 'Embur Bog',
        weight: '10',
        blocks: [
            '- Blue Nether Quartz Ore (99%)',
            '- Pendorite Ore (0.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(QUARTZ_ORES, BLUE_NETHER_QUARTZ_DEPOSIT_INFO);
    depositBuilder(PENDORITE_ORES, BLUE_NETHER_QUARTZ_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, BLUE_NETHER_QUARTZ_DEPOSIT_INFO);

    const BRIMSTONE_NETHER_QUARTZ_DEPOSIT_INFO = {
        internalId: 'Brimstone Nether Quartz Deposit',
        veinName: 'Quartz',
        minY: '10',
        maxY: '120',
        size: '70',
        dimension: 'Nether',
        biome: 'Brimstone Caverns',
        weight: '10',
        blocks: [
            '- Brimstone Nether Quartz Ore (99%)',
            '- Anthracite Ore (0.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(QUARTZ_ORES, BRIMSTONE_NETHER_QUARTZ_DEPOSIT_INFO);
    depositBuilder(ANTHRACITE_ORES, BRIMSTONE_NETHER_QUARTZ_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, BRIMSTONE_NETHER_QUARTZ_DEPOSIT_INFO);

    const SCORIA_NETHER_QUARTZ_DEPOSIT_INFO = {
        internalId: 'Scoria Nether Quartz Deposit',
        veinName: 'Quartz',
        minY: '10',
        maxY: '120',
        size: '70',
        dimension: 'Nether',
        biome: 'Wailing Garth',
        weight: '10',
        blocks: [
            '- Nether Quartz Ore (99%)',
            '- Emeraldite Ore (0.5%)',
            '- Ancient Debris (0.5%)'
        ]
    }
    depositBuilder(QUARTZ_ORES, SCORIA_NETHER_QUARTZ_DEPOSIT_INFO);
    depositBuilder(EMERALDITE_ORES, SCORIA_NETHER_QUARTZ_DEPOSIT_INFO);
    depositBuilder(ANCIENT_DEBRIS_ORES, SCORIA_NETHER_QUARTZ_DEPOSIT_INFO);

    // quartz.json
    const QUARTZ_DEPOSIT_INFO = {
        internalId: 'Quartz Deposit',
        veinName: 'Quartz',
        minY: '-32',
        maxY: '32',
        size: '40',
        dimension: 'Overworld',
        biome: 'All',
        weight: '2',
        blocks: [
            '- Quartz Ore (80%)',
            '- Antimony Ore (20%)'
        ]
    }
    depositBuilder(QUARTZ_ORES, QUARTZ_DEPOSIT_INFO);
    depositBuilder(ANTIMONY_ORES, QUARTZ_DEPOSIT_INFO);

    // redstone.json
    const REDSTONE_DEPOSIT_INFO = {
        internalId: 'Redstone Deposit',
        veinName: 'Redstone',
        minY: '-64',
        maxY: '16',
        size: '60',
        dimension: 'Overworld',
        biome: 'All',
        weight: '4',
        blocks: [
            '- Redstone Ore (75%)',
            '- Ruby Ore (20%)',
            '- Cryptic Redstone Ore (5%)'
        ]
    }
    depositBuilder(REDSTONE_ORES, REDSTONE_DEPOSIT_INFO);
    depositBuilder(RUBY_ORES, REDSTONE_DEPOSIT_INFO);

    // salt.json
    const SALT_DEPOSIT_INFO = {
        internalId: 'Salt Deposit',
        veinName: 'Salt',
        minY: '48',
        maxY: '80',
        size: '40',
        dimension: 'Overworld',
        biome: 'All',
        weight: '5',
        blocks: [
            '- Salt Ore (100%)'
        ]
    }
    depositBuilder(SALT_ORES, SALT_DEPOSIT_INFO);

    // techreborn_end.json
    const SHELDONITE_DEPOSIT_INFO = {
        internalId: 'Sheldonite Deposit',
        veinName: 'Sheldonite',
        minY: '0',
        maxY: '60',
        size: '30',
        dimension: 'End',
        biome: 'All',
        weight: '4',
        blocks: [
            '- Sheldonite Ore (40%)',
            '- Peridot Ore (30%)',
            '- Sodalite Ore (30%)'
        ]
    }
    depositBuilder(SHELDONITE_ORES, SHELDONITE_DEPOSIT_INFO);
    depositBuilder(PERIDOT_ORES, SHELDONITE_DEPOSIT_INFO);
    depositBuilder(SODALITE_ORES, SHELDONITE_DEPOSIT_INFO);

    // techreborn_nether.json
    const PYRITE_DEPOSIT_INFO = {
        internalId: 'Pyrite Deposit',
        veinName: 'Pyrite',
        minY: '40',
        maxY: '80',
        size: '40',
        dimension: 'Nether',
        biome: 'All',
        weight: '7',
        blocks: [
            '- Pyrite Ore (40%)',
            '- Cinnabar Ore (30%)',
            '- Sphalerite Ore (30%)'
        ]
    }
    depositBuilder(PYRITE_ORES, PYRITE_DEPOSIT_INFO);
    depositBuilder(CINNABAR_ORES, PYRITE_DEPOSIT_INFO);
    depositBuilder(SPHALERITE_ORES, PYRITE_DEPOSIT_INFO);

    // tin.json
    const TIN_DEPOSIT_INFO = {
        internalId: 'Tin Deposit',
        veinName: 'Tin',
        minY: '18',
        maxY: '60',
        size: '70',
        dimension: 'Overworld',
        biome: 'All',
        weight: '8',
        blocks: [
            '- Tin Ore (100%)'
        ]
    }
    depositBuilder(TIN_ORES, TIN_DEPOSIT_INFO);

    // titanium.json
    const TITANIUM_DEPOSIT_INFO = {
        internalId: 'Titanium Deposit',
        veinName: 'Titanium',
        minY: '-64',
        maxY: '16',
        size: '20',
        dimension: 'Overworld',
        biome: 'All',
        weight: '1',
        blocks: [
            '- Titanium Ore (80%)',
            '- Tungsten Ore (20%)'
        ]
    }
    depositBuilder(TITANIUM_ORES, TITANIUM_DEPOSIT_INFO);
    depositBuilder(TUNGSTEN_ORES, TITANIUM_DEPOSIT_INFO);

    // uranium.json
    const URANIUM_DEPOSIT_INFO = {
        internalId: 'Uranium Deposit',
        veinName: 'Uranium',
        minY: '-48',
        maxY: '16',
        size: '30',
        dimension: 'Overworld',
        biome: 'All',
        weight: '1',
        blocks: [
            '- Uranium Ore (90%)',
            '- Iridium Ore (5%)',
            '- Mozanite Ore (5%)'
        ]
    }
    depositBuilder(URANIUM_ORES, URANIUM_DEPOSIT_INFO);
    depositBuilder(IRIDIUM_ORES, URANIUM_DEPOSIT_INFO);
    depositBuilder(MOZANITE_ORES, URANIUM_DEPOSIT_INFO);

    // zinc.json
    const ZINC_DEPOSIT_INFO = {
        internalId: 'Zinc Deposit',
        veinName: 'Zinc',
        minY: '32',
        maxY: '80',
        size: '70',
        dimension: 'Overworld',
        biome: 'All',
        weight: '7',
        blocks: [
            '- Zinc Ore (100%)'
        ]
    }
    depositBuilder(ZINC_ORES, ZINC_DEPOSIT_INFO);
});