// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIRegistrationEvents.registerFluids((event) => {
    // -- STELLAR PLASMA -- //
    event.register(
        'Stellar Plasma', // English name
        'stellar_plasma', // internal name
        0xf2d23a, // Hex color code
        'plasma', // Texture type
        false, // is a gas?
        'high' // opacity
    );

    // -- DRAGON'S BLOOD -- //
    event.register(
        "Dragon's Blood", // English name
        'dragons_blood', // internal name
        0x910c95, // Hex color code
        'plasma', // Texture type
        false, // is a gas?
        'high' // opacity
    );

    // -- IMPURE RESONATING FLUID -- //
    event.register(
        'Impure Resonating Fluid', // English name
        'impure_resonating_fluid', // internal name
        0x22d43b, // Hex color code
        'water', // Texture type
        false, // is a gas?
        'high' // opacity
    );

    // -- SALT WATER -- //
    event.register(
        'Salt Water', // English name
        'salt_water', // internal name
        0x033a6b, // Hex color code
        'water', // Texture type
        false, // is a gas?
        'low' // opacity
    );

    // -- BRINE -- //
    event.register(
        'Brine', // English name
        'brine', // internal name
        0xefec82, // Hex color code
        'water', // Texture type
        false, // is a gas?
        'high' // opacity
    );

    // -- NUTRIENT RICH WATER -- //
    event.register(
        'Nutrient Rich Water', // English name
        'nutrient_rich_water', // internal name
        0xdaffdb, // Hex color code
        'water', // Texture type
        false, // is a gas?
        'medium' // opacity
    );

    // -- NUTRIENT RICH LIQUID ENDER -- //
    event.register(
        'Nutrient Rich Liquid Ender', // English name
        'nutrient_rich_liquid_ender', // internal name
        0x218b7a, // Hex color code
        'water', // Texture type
        false, // Is a gas?
        'medium' // opacity
    );

    // -- NUTRIENT RICH BLOOD -- //
    event.register(
        'Nutrient Rich Blood', // English name
        'nutrient_rich_blood', // internal name
        0xe53246, // Hex color code
        'plasma', // Texture type
        false, // is a gas?
        'high' // opacity
    );

    // -- MOLTEN NETHER STAR -- //
    event.register(
        'Molten Nether Star', // English name
        'molten_nether_star', // internal name
        0xe9e9e9, // Hex color code
        'lava', // Texture type
        false, // is a gas?
        'medium' // opacity
    );

    // -- IMPURE LIQUID NETHER STAR -- //
    event.register(
        'Impure Liquid Nether Star', // English name
        'impure_liquid_nether_star', // internal name
        0xe6ded7, // Hex color code
        'lava', // Texture type
        false, // is a gas?
        'full' // opacity
    );

    // -- LITHIUM -- //
    event.register(
        'Lithium', // English name
        'lithium', // internal name
        0xb2b2b2, // Hex color code
        'water', // Texture type
        true, // is a gas?
        'medium' // opacity
    );

    // -- NEUTRONIUM -- //
    event.register('Neutronium', 'neutronium', 0x1a1a1a, 'lava', true, 'full');

    // -- BLOOD -- //
    event.register(
        'Blood', // English name
        'blood', // internal name
        0xc11326, // Hex color code
        'plasma', // Texture type
        false, // is a gas?
        'high' // opacity
    );

    // -- CONCRETE -- //
    event.register(
        'Concrete', // English name
        'concrete', // internal name
        0x505050, // Hex color code
        'lava', // Texture type
        false, // is a gas?
        'full' // opacity
    );

    // -- DRILLING FLUID -- //
    event.register(
        'Drilling Fluid',
        'drilling_fluid',
        0xf4fc58,
        'water',
        false,
        'medium'
    );

    // -- CORE SLURRY -- //
    event.register(
        'Core Slurry',
        'core_slurry',
        0x211500,
        'lava',
        false,
        'full'
    );

    // -- WOOD TAR -- //
    event.register('Wood Tar', 'wood_tar', 0x2a200e, 'lava', false, 'full');

    // -- POLYTETRAFLUROETHYLENE -- //
    event.register(
        'Polytetrafluoroethylene (PTFE)',
        'polytetrafluoroethylene',
        0x364768,
        'lava',
        false,
        'full'
    );

    // -- TETRAFLUOROETHYLENE -- //
    event.register(
        'Tetrafluoroethylene',
        'tetrafluoroethylene',
        0x4c4c4c,
        'water',
        false,
        'high'
    );

    // -- HYDROFLOURIC ACID -- //
    event.register(
        'Hydrofluoric Acid',
        'hydrofluoric_acid',
        0x419ad2,
        'water',
        false,
        'medium'
    );

    // -- CHLOROFORM -- //
    event.register('Chloroform', 'chloroform', 0xefefef, 'water', false, 'low');

    // -- FLUORINE -- //
    event.register('Fluorine', 'fluorine', 0xe8fb97, 'water', true, 'low');

    // -- LIQUID ENDER -- //
    event.register(
        'Liquid Ender',
        'liquid_ender',
        0x105e51,
        'water',
        false,
        'medium'
    );

    // -- MOLTEN ENDERIUM -- //
    event.register(
        'Molten Enderium',
        'molten_enderium',
        0x105e51,
        'lava',
        false,
        'high'
    );

    // -- NITRIC ACID -- //
    event.register(
        'Nitric Acid',
        'nitric_acid',
        0xfcf8c9,
        'water',
        true,
        'low'
    );

    // -- AMMONIA -- //
    event.register('Ammonia', 'ammonia', 0xdee4e8, 'water', true, 'low');

    // -- WASTE BERYL AMMONIA SOLUTION -- //
    event.register(
        'Waste Beryl Ammonia Solution',
        'waste_beryl_ammonia_solution',
        0xbfbda0,
        'water',
        true,
        'low'
    );

    // -- BERYLLIUM SULFATE -- //
    event.register(
        'Beryllium Sulfate',
        'beryllium_sulfate',
        0x236e69,
        'water',
        false,
        'medium'
    );

    // -- BERYLLIUM HYDROXIDE -- //
    event.register(
        'Beryllium Hydroxide',
        'beryllium_hydroxide',
        0x3fa4ca,
        'water',
        false,
        'high'
    );

    // -- BERYLLIUM CHLORIDE -- //
    event.register(
        'Impure Beryllium Chloride Solution',
        'beryllium_chloride',
        0x375bc9,
        'water',
        false,
        'medium'
    );

    // -- ACRYLONITRILE -- //
    event.register(
        'Acrylonitrile',
        'acrylonitrile',
        0xc9976e,
        'water',
        false,
        'medium'
    );

    // -- ACRYLONITRILE BUTADIENE STYRENE -- //
    event.register(
        'Acrylonitrile Butadiene Styrene (ABS)',
        'acrylonitrile_butadiene_styrene',
        0xfcefd6,
        'water',
        false,
        'high'
    );

    // -- MOLTEN BOROSILICATE GLASS -- //
    event.register(
        'Molten Borosilicate Glass', // English name
        'molten_borosilicate_glass', // internal name
        0xb7e9eb, // Hex color code
        'lava', // Texture type
        false, // is a gas?
        'medium' // opacity
    );

    // -- BORON TRIFLUORIDE -- //
    event.register(
        'Boron Trifluoride',
        'boron_trifluoride',
        0xe0ffe3,
        'water',
        true,
        'full'
    );

    // -- DIBORANE -- //
    event.register('Diborane', 'diborane', 0x88bf8e, 'water', true, 'full');

    // -- PENTABORANE -- //
    event.register(
        'Pentaborane',
        'pentaborane',
        0xafff5c,
        'water',
        false,
        'medium'
    );

    // -- MOLTEN GOLD -- //
    event.register(
        'Molten Gold',
        'molten_gold',
        0xf7d349,
        'lava',
        false,
        'full'
    );
});
