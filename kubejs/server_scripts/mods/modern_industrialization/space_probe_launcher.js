// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/space_probe_launcher/${id}`;

    // not a fan of using the MI recipe format, but I could not get the full tank with nbt to work with traditional methods
    // -- RESEARCH PROBE (STAR) -- //
    event.recipes.modern_industrialization.space_probe_launcher(32, 600)
        .itemIn(kj('research_probe'))
        .itemIn(kj('star_location_telemetry'))
        .itemOut(Item.of('modern_industrialization:aluminum_tank[modern_industrialization:fluid_storage={amount:64000L,resource:{id:"modern_industrialization:stellar_plasma"}}]'))
    //        .dimension('statech:space')
        .adjacentBlock(kj('mki_probe_computer'), 'below')
        .id(st('research_probe_star'));

    // -- SPACE PROBE -- //
    spl(
        event,
        st('basic_space_probe'),
        32,
        600,
        [ { amount: 1, item: kj('basic_space_probe'), probability: 0.10 } ],
        [
            { amount: 1, item: mi('desh_ore'), probability: 0.25 },
            { amount: 1, item: mi('moon_ice_ore'), probability: 0.02 },
            { amount: 1, item: mi('bauxite_ore'), probability: 0.20 },
            { amount: 1, item: mc('gold_ore'), probability: 0.25 }
        ],
        kj('mki_probe_computer'),
        'below'
    );

    spl(
        event,
        st('advanced_space_probe'),
        48,
        600,
        [ { amount: 1, item: kj('advanced_space_probe'), probability: 0.10 } ],
        [
            { amount: 1, item: mi('ostrum_ore'), probability: 0.25 },
            { amount: 1, item: mi('corundum_ore'), probability: 0.20 },
            { amount: 1, item: mi('monazite_ore'), probability: 0.15 },
            { amount: 1, item: mi('sapphire_ore'), probability: 0.15 },
            { amount: 1, item: mc('emerald_ore'), probability: 0.10 }
        ],
        kj('mkii_probe_computer'),
        'below'
    );

    spl(
        event,
        st('highly_advanced_space_probe'),
        64,
        600,
        [ { amount: 1, item: kj('highly_advanced_space_probe'), probability: 0.10 } ],
        [
            { amount: 1, item: mi('calorite_ore'), probability: 0.25 },
            { amount: 1, item: mc('ancient_debris'), probability: 0.10 },
            { amount: 1, item: mi('sapphire_ore'), probability: 0.30 },
            { amount: 1, item: mc('iron_ore'), probability: 0.60 }
        ],
        kj('mkiii_probe_computer'),
        'below'
    );
});
