MIMaterialEvents.addMaterials(e => {
    e.createMaterial('Desh', 'desh', 0xe9ba5d,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'bolt', 'curved_plate', 'drill', 'drill_head')
            .defaultRecipes()
            .addExternalPart('ingot', 'ad_astra:desh_ingot', '#c:desh_ingots')
            .addExternalPart('plate', 'ad_astra:desh_plate', '#c:desh_plates')
        });
    
    e.createMaterial('Tungstensteel', 'tungstensteel', 0x677680,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'coil', 'bolt', 'large_plate', 'curved_plate', 'wire')
            .barrel("Tungstensteel Barrel", "tungstensteel_barrel", 16384)
            .tank("Tungstensteel Tank", "tungstensteel_tank", 256)
            .cable('ev')
            .defaultRecipes()
            .addExternalPart('ingot', 'techreborn:tungstensteel_ingot', '#c:tungstensteel_ingots')
            .addExternalPart('plate', 'techreborn:tungstensteel_plate', '#c:tungstensteel_plates')
        });
    
    e.createMaterial('Calorite', 'calorite', 0xb63044,
        builder => {
            builder.addParts('rod', 'gear', 'ring', 'blade', 'bolt', 'curved_plate')
            .machineCasing(12.0)
            .pipeCasing(12.0)
            .defaultRecipes()
            .addExternalPart('ingot', 'ad_astra:calorite_ingot', '#c:calorite_ingots')
            .addExternalPart('plate', 'ad_astra:calorite_plate', '#c:calorite_plates')
        });
    
    e.createMaterial('Zinc', 'zinc', 0xb9e9c1,
        builder => {
            builder.addParts('rod', 'ring', 'gear', 'curved_plate', 'plate', 'bolt', 'drill_head', 'drill')
            .defaultRecipes()
            .addExternalPart('ingot', 'techreborn:zinc_ingot', '#c:zinc_ingots')
        });
});