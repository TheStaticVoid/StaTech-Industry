// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIMaterialEvents.addMaterials(e => {
    // Tungstensteel
    e.createMaterial('Tungstensteel', 'tungstensteel', 0x677680,
        builder => {
            builder.addParts('ingot', 'plate', 'rod', 'gear', 'ring', 'coil', 'bolt', 'large_plate', 'curved_plate', 'wire')
                .barrel("Tungstensteel Barrel", "tungstensteel_barrel", 16384)
                .tank("Tungstensteel Tank", "tungstensteel_tank", 256)
                .cable('ev')
                .defaultRecipes();
        });
    
    // Zinc
    e.createMaterial('Zinc', 'zinc', 0xb9e9c1,
        builder => {
            builder.addParts('ingot', 'rod', 'ring', 'gear', 'curved_plate', 'plate', 'bolt', 'drill_head', 'drill', 'tiny_dust')
            .defaultRecipes()
        });

    // Clay
    e.createMaterial('Clay', 'clay', 0xa3acc7,
        builder => {
            builder.addParts('dust', 'tiny_dust')
                .addExternalPart('ingot', 'minecraft:clay_ball')
                .defaultRecipes();
            
        });

    // Fluorite
    e.createMaterial('Fluorite', 'fluorite', 0xe4ed9b,
        builder => {
            builder.addParts('dust', 'tiny_dust')
                .ore({
                    'generate': true,
                    'ore_set': 'nether_gold',
                    'vein_size': 4,
                    'veins_per_chunk': 5,
                    'max_y': 90
                })
                .rawMetal('copper', true).rawMetal('iridium', false)
                .defaultRecipes()
        });
    
    // Polytetrafluoroethylene (PTFE)
    e.createMaterial('Polytetrafluoroethylene (PTFE)', 'polytetrafluoroethylene', 0x454545,
        builder => {
            builder.addParts('ingot', 'nugget', 'dust', 'tiny_dust', 'plate', 'curved_plate', 'gear', 'ring', 'rod', 'bolt')
                .specialCasing('Chemically Inert PTFE Casing', 'chemically_inert_ptfe_casing', 8.0)
                .pipeCasing(8.0)
                .block('iron')
                .defaultRecipes();
        });
    
    // Enderium
    e.createMaterial('Enderium', 'enderium', 0x105e51,
        builder => {
            builder.addParts('ingot', 'nugget', 'hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt')
                .block('iron')
                .defaultRecipes();
        });

    // // Desh
    // e.createMaterial('Desh', 'desh', 0xe9ba5d,
    //     builder => {
    //         builder.addParts('rod', 'gear', 'ring', 'bolt', 'curved_plate', 'drill', 'drill_head')
    //             .defaultRecipes()
    //             .addExternalPart('ingot', 'ad_astra:desh_ingot', '#c:desh_ingots')
    //             .addExternalPart('plate', 'ad_astra:desh_plate', '#c:desh_plates')
    //     });
    
    // // Calorite
    // e.createMaterial('Calorite', 'calorite', 0xb63044,
    //     builder => {
    //         builder.addParts('rod', 'gear', 'ring', 'blade', 'bolt', 'curved_plate')
    //             .machineCasing(12.0)
    //             .pipeCasing(12.0)
    //             .defaultRecipes()
    //             .addExternalPart('ingot', 'ad_astra:calorite_ingot', '#c:calorite_ingots')
    //             .addExternalPart('plate', 'ad_astra:calorite_plate', '#c:calorite_plates')
    //     });
});

MIMaterialEvents.modifyMaterial("gold",
    e => {
        e.builder
            .addParts('wire');
})