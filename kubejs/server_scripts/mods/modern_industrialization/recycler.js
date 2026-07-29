// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/recycler/${id}`;

    // -- LOW TIER SCRAP -- //
    recycler(
        event,
        st('low_tier_scrap'),
        8,
        200,
        [ { amount: 1, tag: 'statech:scrappable/low' } ],
        [ { amount: 1, item: kj('scrap'), probability: 0.1 } ]
    );

    // -- MID TIER SCRAP -- //
    recycler(
        event,
        st('mid_tier_scrap'),
        8,
        200,
        [ { amount: 1, tag: 'statech:scrappable/mid' } ],
        [ { amount: 1, item: kj('scrap'), probability: 0.25 } ]
    );

    // -- HIGH TIER SCRAP -- //
    recycler(
        event,
        st('high_tier_scrap'),
        8,
        200,
        [ { amount: 1, tag: 'statech:scrappable/high' } ],
        [ { amount: 1, item: kj('scrap'), probability: 0.75 } ]
    );

});

ServerEvents.tags('item', event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:scrappable/${id}`;

    let LOW_TIER_SCRAP = [
        mc('dirt'),
        mc('cobblestone')
    ];
    LOW_TIER_SCRAP.forEach(id => { event.add(st('low'), id) });

    let MID_TIER_SCRAP = [
        mc('diamond'),
        mi('rubber_sheet'),
        mi('analog_circuit')
    ];
    MID_TIER_SCRAP.forEach(id => { event.add(st('mid'), id) });

    let HIGH_TIER_SCRAP = [
        mi('digital_circuit'),
        mi('stainless_steel_ingot')
    ];
    HIGH_TIER_SCRAP.forEach(id => { event.add(st('high'), id) });
});