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

    // -- LOW-MID TIER SCRAP -- //
    recycler(
        event,
        st('low_mid_tier_scrap'),
        32,
        200,
        [{ amount: 1, tag: 'statech:scrappable/low_mid' }],
        [{ amount: 1, item: kj('scrap'), probability: 0.25 }]
    );

    // -- HIGH-MID TIER SCRAP -- //
    recycler(
        event,
        st('high_mid_tier_scrap'),
        48,
        200,
        [{ amount: 1, tag: 'statech:scrappable/high_mid' }],
        [{ amount: 1, item: kj('scrap'), probability: 0.5 }]
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
        mc('netherrrack'),
        mc('blackstone'),
        mc('basalt'),
        mc('soul_soil'),
        mc('glowstone'),
        mc('soul_sand'),
        mc('magma_block'),
    ];
    LOW_TIER_SCRAP.forEach((id) => {
        event.add(st('low'), id);
    });

    let LOW_MID_TIER_SCRAP = [
        '#minecraft:coals',
        '#c:ores/iron',
        '#c:ores/coal',
        '#c:ores/lignite_coal',
        '#c:ores/copper',
        '#c:ores/tin',
        '#c:ores/gold',
        '#c:ores/redstone',
        '#c:ores/quartz',
        '#c:ores/iron',
        '#c:ores/zinc',
        '#c:ores/salt',
        '#c:ores/antimony',
        '#c:ores/fluorite',
        '#c:ores/lapis',
        '#c:ores/lead',
        '#c:ores/nickel',
    ];
    LOW_MID_TIER_SCRAP.forEach((id) => {
        event.add(st('low_mid'), id);
    });

    let HIGH_MID_TIER_SCRAP = [
        mc('diamond'),
        mi('rubber_sheet'),
        mi('analog_circuit'),
        mi('electrum_double_ingot'),
        mi('aluminum_double_ingot'),
        '#c:potions',
        '#c:ores/ruby',
        '#c:ores/sapphire',
        '#c:ores/kernite',
        '#c:ores/bauxite',
        '#c:ores/emerald',
        '#c:ores/peridot',
        '#c:ores/emerald',
        '#c:ores/fluorite',
        '#c:ores/diamond',
    ];
    HIGH_MID_TIER_SCRAP.forEach((id) => {
        event.add(st('high_mid'), id);
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
        '#c:ores/netherite_scrap',
        '#c:ores/titanium',
        '#c:ores/tungsten',
        '#c:ores/monazite',
        '#c:ores/platinum',
        '#c:ores/iridium',
        '#c:ores/uranium',
        '#c:ores/desh',
        '#c:ores/ostrum',
        '#c:ores/calorite',
        '#c:ores/moon_ice',
    ];
    HIGH_TIER_SCRAP.forEach((id) => {
        event.add(st('high'), id);
    });
});
