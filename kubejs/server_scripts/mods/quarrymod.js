ServerEvents.recipes(e => {
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let qm = (id) => `quarrymod:${id}`;

    const REMOVED = [
        qm('crafting_table/upgrades/fortune_lvl1_upgrade'),
        qm('crafting_table/upgrades/range_extender_lvl1_upgrade')
    ];
    REMOVED.forEach(id => e.remove({ id: id }));

    // -- FORTUNE UPGRADE LVL1 -- //
    e.shaped(qm('fortune_lvl1_upgrade'), [
        'PLP',
        'AEA',
        ' P '
    ],
    {
        P: '#c:peridot_plates',
        L: '#c:lazurite_plates',
        A: mi('analog_circuit')
    });

    // -- RANGE EXTENDER UPGRADE LVL1 -- //
    e.shaped(qm('range_extender_lvl1_upgrade'), [
        'ATT',
        'TPT',
        'TTA'
    ],
    {
        A: mi('analog_circuit'),
        T: qm('drill_tube'),
        P: '#c:advanced_alloy_plates'
    });
})