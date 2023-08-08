// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIRegistrationEvents.registerFluids(e => {
    // -- MOLTEN NETHER STAR -- //
    e.register(
        'Molten Nether Star',     // English name
        'molten_nether_star',     // internal name
        0xe9e9e9,       // Hex color code
        'lava',         // Texture type
        false,          // is a gas?
        'medium'          // opacity
    );
    
    // -- IMPURE LIQUID NETHER STAR -- //
    e.register(
        'Impure Liquid Nether Star',     // English name
        'impure_liquid_nether_star',     // internal name
        0xe6ded7,       // Hex color code
        'lava',         // Texture type
        false,          // is a gas?
        'full'          // opacity
    );
    
    // -- LITHIUM -- //
    e.register(
        'Lithium',      // English name
        'lithium',      // internal name
        0xb2b2b2,       // Hex color code
        'water',        // Texture type
        true,           // is a gas?
        'medium'        // opacity
    );

    // -- NEUTRONIUM -- //
    e.register(
        'Neutronium',
        'neutronium',
        0x1a1a1a,
        'lava',
        true,
        'full'
    );
    
    // -- BLOOD -- //
    e.register(
        'Blood',        // English name
        'blood',        // internal name
        0xc11326,       // Hex color code
        'plasma',       // Texture type
        false,          // is a gas?
        'high',         // opacity
    );

    // -- CONCRETE -- //
    e.register(
        'Concrete',     // English name
        'concrete',     // internal name
        0x505050,       // Hex color code
        'lava',         // Texture type
        false,          // is a gas?
        'full'          // opacity
    );

    // -- DRILLING FLUID -- //
    e.register(
        'Drilling Fluid',
        'drilling_fluid',
        0xf4fc58,
        'water',
        false,
        'medium'
    );
    
    // -- CORE SLURRY -- //
    e.register(
        'Core Slurry',
        'core_slurry',
        0x211500,
        'lava',
        false,
        'full'
    );

    // -- WOOD TAR -- //
    e.register(
        'Wood Tar',
        'wood_tar',
        0x2a200e,
        'lava',
        false,
        'full'
    );

    // -- POLYTETRAFLUROETHYLENE -- //
    e.register(
        'Polytetrafluoroethylene',
        'polytetrafluoroethylene',
        0x454545,
        'lava',
        false,
        'full'
    );

    // -- TETRAFLUOROETHYLENE -- //
    e.register(
        'Tetrafluoroethylene',
        'tetrafluoroethylene',
        0x4c4c4c,
        'water',
        false,
        'high'
    )

    // -- HYDROFLOURIC ACID -- //
    e.register(
        'Hydrofluoric Acid',
        'hydrofluoric_acid',
        0x419ad2,
        'water',
        false,
        'medium'
    );

    // -- CHLOROFORM -- //
    e.register(
        'Chloroform',
        'chloroform',
        0xefefef,
        'water',
        false,
        'low'
    );

    // -- FLUORINE -- // 
    e.register(
        'Fluorine',
        'fluorine',
        0xe8fb97,
        'water',
        true,
        'low'
    );

    // -- LIQUID ENDER -- //
    e.register(
        'Liquid Ender',
        'liquid_ender',
        0x105e51,
        'water',
        false,
        'medium'
    );

    // -- MOLTEN ENDERIUM -- //
    e.register(
        'Molten Enderium',
        'molten_enderium',
        0x105e51,
        'lava',
        false,
        'high'
    );
});