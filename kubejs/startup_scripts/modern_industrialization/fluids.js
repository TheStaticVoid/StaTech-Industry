MIRegistrationEvents.registerFluids(e => {
    // -- LITHIUM -- //
    e.register(
        "Lithium",      // English name
        "lithium",      // internal name
        0xb2b2b2,       // Hex color code
        "water",        // Texture type
        true,           // is a gas?
        "medium"        // opacity
    );

    // -- NEUTRONIUM -- //
    e.register(
        "Neutronium",
        "neutronium",
        0x1a1a1a,
        "lava",
        true,
        "full"
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
});