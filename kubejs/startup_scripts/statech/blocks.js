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
            .displayName(name)
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
            .displayName(name)
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
        .displayName('Borosilicate Glass')
        .glassSoundType()
        .requiresTool(true)
        .hardness(2)
        .defaultTranslucent()
        .transparent(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('c:glass_blocks');

    event
        .create(`kubejs:computer_casing`)
        .displayName('Computer Casing')
        .soundType('copper')
        .requiresTool(true)
        .hardness(3)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool');

    const tieredProbeComputers = [
        ['mki_probe_computer', 'Mk I Probe Computer'],
        ['mkii_probe_computer', 'Mk II Probe Computer'],
        ['mkiii_probe_computer', 'Mk III Probe Computer'],
    ];

    tieredProbeComputers.forEach(([id, name]) => {
        event
            .create(`kubejs:${id}`)
            .displayName(name)
            .soundType('stone')
            .requiresTool(true)
            .hardness(6)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool');
    });

    /*     const oreSamples = [
            ['iron_ore_sample', 'Iron Ore Sample']
        ];

        oreSamples.forEach(([id, name]) => {
            event.create(`kubejs:${id}`)
            .displayName(name)
            .soundType('stone')
            .requiresTool(false)
            .hardness(1)
            .tagBlock('minecraft:mineable/pickaxe')
        }); */
});
