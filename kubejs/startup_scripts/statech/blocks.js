// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

StartupEvents.registry('block', (event) => {
    const decorativeCopper = [
        ['decorative_waxed_copper_block', 'Decorative Waxed Block of Copper'],
        [
            'decorative_waxed_oxidized_copper',
            'Decorative Waxed Oxidized Copper',
        ],
    ];

    decorativeCopper.forEach(([id, name]) => {
        event
            .create(`kubejs:${id}`)
            .soundType('copper')
            .requiresTool(true)
            .hardness(3)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool');
    });

    const glowingPillars = [
        ['glowing_calorite_pillar', 'Glowing Calorite Pillar'],
        ['glowing_desh_pillar', 'Glowing Desh Pillar'],
        ['glowing_ostrum_pillar', 'Glowing Ostrum Pillar'],
        ['glowing_steel_pillar', 'Glowing Steel Pillar'],
    ];

    glowingPillars.forEach(([id, name]) => {
        event
            .create(`kubejs:${id}`)
            .soundType('stone')
            .requiresTool(true)
            .hardness(6)
            .lightLevel(1.0)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .property(BlockProperties.AXIS)
            .placementState((event) =>
                event.set(BlockProperties.AXIS, event.clickedFace.axis)
            );
    });

    event
        .create(`kubejs:borosilicate_glass`)
        .glassSoundType()
        .requiresTool(true)
        .hardness(2)
        .defaultTranslucent()
        .transparent(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('c:glass_blocks');
    event
        .create('kubejs:speedy_concrete')
        .soundType('stone')
        .requiresTool(true)
        .hardness(4)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event
        .create(`kubejs:computer_casing`)
        .soundType('copper')
        .requiresTool(true)
        .hardness(3)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    event
        .create(`kubejs:charcoal_block`)
        .soundType('stone')
        .requiresTool(true)
        .hardness(5)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth('c:storage_blocks/charcoal')
        .tagBoth('c:storage_blocks');

    const tieredProbeComputers = [
        ['mki_probe_computer', 'Mk I Probe Computer'],
        ['mkii_probe_computer', 'Mk II Probe Computer'],
        ['mkiii_probe_computer', 'Mk III Probe Computer'],
    ];

    tieredProbeComputers.forEach(([id, name]) => {
        event
            .create(`kubejs:${id}`)
            .soundType('stone')
            .requiresTool(true)
            .hardness(6)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool');
    });
});
