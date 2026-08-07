// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/recycler/${id}`;

    // -- LOW TIER SCRAP -- //
    recycler(
        event,
        st('low_tier_scrap'),
        16,
        200,
        [{ amount: 1, tag: 'statech:scrappable/low' }],
        [{ amount: 1, item: kj('scrap'), probability: 0.1 }]
    );

    // -- MID TIER SCRAP -- //
    recycler(
        event,
        st('mid_tier_scrap'),
        32,
        200,
        [{ amount: 1, tag: 'statech:scrappable/mid' }],
        [{ amount: 1, item: kj('scrap'), probability: 0.25 }]
    );

    // -- HIGH TIER SCRAP -- //
    recycler(
        event,
        st('high_tier_scrap'),
        64,
        200,
        [{ amount: 1, tag: 'statech:scrappable/high' }],
        [{ amount: 1, item: kj('scrap'), probability: 0.75 }]
    );
});

ServerEvents.tags('item', (event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:scrappable/${id}`;

    let LOW_TIER_SCRAP = [
        mc('dirt'),
        '#c:cobblestones',
        '#minecraft:logs',
        '#c:stones',
        '#c:gems',
    ];
    LOW_TIER_SCRAP.forEach((id) => {
        event.add(st('low'), id);
    });

    let MID_TIER_SCRAP = [
        mc('diamond'),
        mi('rubber_sheet'),
        mi('analog_circuit'),
        mi('electrum_double_ingot'),
        mi('aluminum_double_ingot'),
        '#c:potions',
    ];
    MID_TIER_SCRAP.forEach((id) => {
        event.add(st('mid'), id);
    });

    let HIGH_TIER_SCRAP = [
        mi('digital_circuit'),
        mi('stainless_steel_ingot'),
        mi('kanthal_ingot'),
        mi('titanium_ingot'),
        mi('desh_ingot'),
        mi('ostrum_ingot'),
        mi('calorite_ingot'),
        '#minecraft:trim_templates',
        '#c:music_discs',
    ];
    HIGH_TIER_SCRAP.forEach((id) => {
        event.add(st('high'), id);
    });
});
