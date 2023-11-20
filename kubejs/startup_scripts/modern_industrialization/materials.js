// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

MIMaterialEvents.addMaterials(e => {

    e.createMaterial('Beryl', 'beryl', 0x0e635d,
        builder => {
            builder
                .addParts('tiny_dust', 'dust')
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .rawMetal('copper', true).rawMetal('iron', false)
                .defaultRecipes();
        });

    e.createMaterial('Phosphorous', 'phosphorous', 0x513408,
        builder => {
            builder
                .addParts('tiny_dust', 'dust', 'crushed_dust')
                .defaultRecipes();
        });

    e.createMaterial('Potassium', 'potassium', 0xfec76f,
        builder => {
            builder
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'ingot', 'nugget')
                .ore({
                    'generate': false,
                    'ore_set': 'lapis'
                })
                .rawMetal('gold', true).rawMetal('gold', false)
                .defaultRecipes();
        });
    
    e.createMaterial('Vanadium', 'vanadium', 0xedff62,
        builder => {
            builder
                .addParts('tiny_dust', 'dust', 'crushed_dust')
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .rawMetal('iron', true).rawMetal('iron', false)
                .defaultRecipes();
        });
    
    e.createMaterial('Cobalt', 'cobalt', 0x0100b0,
        builder => {
            builder
                .materialSet('shiny')
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'hot_ingot', 'ingot', 'nugget', 'plate', 'curved_plate', 'rod', 'ring', 'bolt', 'gear', 'drill', 'drill_head', 'blade', 'rotor')
                .ore({
                    'generate': false,
                    'ore_set': 'diamond'
                })
                .rawMetal('copper', true).rawMetal('iron', false)
                .defaultRecipes();
        });
    
    e.createMaterial('Zirconium', 'zirconium', 0x8d8d8d,
        builder => {
            builder
                .materialSet('shiny')
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'hot_ingot', 'ingot', 'nugget', 'plate', 'curved_plate', 'rod', 'ring', 'gear', 'bolt')
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .rawMetal('iron', true).rawMetal('copper', false)
                .defaultRecipes();
        });
    
    e.createMaterial('Palladium', 'palladium', 0xaaa72b,
        builder => {
            builder
                .materialSet('shiny')
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'hot_ingot', 'ingot', 'nugget', 'plate', 'curved_plate', 'rod', 'ring', 'gear', 'bolt')
                .ore({
                    'generate': false,
                    'ore_set': 'gold'
                })
                .rawMetal('gold', true).rawMetal('iron', false)
                .defaultRecipes();
        });
    
    e.createMaterial('Indium', 'indium', 0x3782f2,
        builder => {
            builder
                .materialSet('shiny')
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'hot_ingot', 'ingot', 'nugget', 'plate', 'curved_plate', 'rod', 'ring', 'gear', 'bolt', 'drill', 'drill_head', 'blade', 'rotor')
                .ore({
                    'generate': false,
                    'ore_set': 'diamond'
                })
                .rawMetal('iron', true).rawMetal('iron', false)
                .defaultRecipes();
        });
    
    e.createMaterial('Iodine', 'iodine', 0x1d0c00,
        builder => {
            builder
                .materialSet('stone')
                .addParts('tiny_dust', 'dust', 'crushed_dust')
                .ore({
                    'generate': false,
                    'ore_set': 'coal'
                })
                .rawMetal('copper', true).rawMetal('copper', false)
                .defaultRecipes();
        });

    e.createMaterial('Osmium', 'osmium', 0xcfcfb5,
        builder => {
            builder
                .materialSet('shiny')
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'hot_ingot', 'ingot', 'nugget', 'plate', 'curved_plate', 'rod', 'ring', 'gear', 'bolt', 'drill', 'drill_head', 'blade', 'rotor')
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .rawMetal('iron', true).rawMetal('iron', false)
                .defaultRecipes();
        });
    
    e.createMaterial('Thallium', 'thallium', 0x3f3f3f,
        builder => {
            builder
                .materialSet('shiny')
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'hot_ingot', 'ingot', 'nugget')
                .ore({
                    'generate': false,
                    'ore_set': 'coal'
                })
                .rawMetal('iron', true).rawMetal('iron', false)
                .defaultRecipes();
        });

    e.createMaterial('Magnesium', 'magnesium', 0xf2f2f2,
        builder => {
            builder
                .addParts('tiny_dust', 'dust', 'crushed_dust', 'ingot', 'nugget', 'plate', 'curved_plate', 'rod', 'ring')
                .ore({
                    'generate': false,
                    'ore_set': 'copper'
                })
                .rawMetal('copper', true).rawMetal('iron', false)
                .defaultRecipes();
        });
        
    e.createMaterial('Boron', 'boron', 0xe6eef4,
        builder => {
            builder
                .addParts('dust', 'tiny_dust', 'crushed_dust')
                .ore({
                    'generate': false,
                    'ore_set': 'iron'
                })
                .rawMetal('iron', true).rawMetal('copper', false)
                .defaultRecipes();
        });

    e.createMaterial('Desh', 'desh', 0xe9ba5d,
        builder => {
            builder
                .addParts('rod', 'gear', 'ring', 'bolt', 'curved_plate', 'drill', 'drill_head')
                .defaultRecipes()
                .addExternalPart('ingot', 'ad_astra:desh_ingot', '#c:desh_ingots')
                .addExternalPart('nugget', 'ad_astra:desh_nugget', '#c:desh_nuggets')
                .addExternalPart('plate', 'ad_astra:desh_plate', '#c:desh_plates')
        });
    
    e.createMaterial('Tungstensteel', 'tungstensteel', 0x677680,
        builder => {
            builder
                .addParts('rod', 'gear', 'ring', 'coil', 'bolt', 'large_plate', 'curved_plate', 'wire')
                .barrel("Tungstensteel Barrel", "tungstensteel_barrel", 16384)
                .tank("Tungstensteel Tank", "tungstensteel_tank", 256)
                .cable('ev')
                .defaultRecipes()
                .addExternalPart('ingot', 'techreborn:tungstensteel_ingot', '#c:tungstensteel_ingots')
                .addExternalPart('nugget', 'techreborn:tungstensteel_nugget', '#c:tungstensteel_nuggets')
                .addExternalPart('plate', 'techreborn:tungstensteel_plate', '#c:tungstensteel_plates')
        });
    
    e.createMaterial('Calorite', 'calorite', 0xb63044,
        builder => {
            builder
                .addParts('rod', 'gear', 'ring', 'blade', 'bolt', 'curved_plate')
                .machineCasing(12.0)
                .pipeCasing(12.0)
                .defaultRecipes()
                .addExternalPart('ingot', 'ad_astra:calorite_ingot', '#c:calorite_ingots')
                .addExternalPart('nugget', 'ad_astra:calorite_nugget', '#c:calorite_nuggets')
                .addExternalPart('plate', 'ad_astra:calorite_plate', '#c:calorite_plates')
        });
    
    e.createMaterial('Zinc', 'zinc', 0xb9e9c1,
        builder => {
            builder
                .addParts('rod', 'ring', 'gear', 'curved_plate', 'plate', 'bolt', 'drill_head', 'drill', 'tiny_dust')
            .defaultRecipes()
            .addExternalPart('ingot', 'techreborn:zinc_ingot', '#c:zinc_ingots')
            .addExternalPart('nugget', 'techreborn:zinc_nugget', '#c:zinc_nuggets');
        });
    
    e.createMaterial('Clay', 'clay', 0xa3acc7,
        builder => {
            builder
                .addParts('dust', 'tiny_dust')
                .addExternalPart('ingot', 'minecraft:clay_ball')
                .defaultRecipes();
            
        });
    
    e.createMaterial('Stone', 'stone', 0x767676,
        builder => {
            builder
                .addParts('dust', 'tiny_dust')
                .defaultRecipes();
        });

    e.createMaterial('Fluorite', 'fluorite', 0xe4ed9b,
        builder => {
            builder
                .addParts('dust', 'tiny_dust')
                .ore({
                    'generate': false,
                    'ore_set': 'nether_gold',
                })
                .rawMetal('copper', true).rawMetal('iridium', false)
                .defaultRecipes()
        });
    
    e.createMaterial('Polytetrafluoroethylene', 'polytetrafluoroethylene', 0x454545,
        builder => {
            builder
                .addParts('ingot', 'nugget', 'dust', 'tiny_dust', 'plate', 'curved_plate', 'gear', 'ring', 'rod', 'bolt')
                .specialCasing('Chemically Inert PTFE Casing', 'chemically_inert_ptfe_casing', 8.0)
                .pipeCasing(8.0)
                .block('iron')
                .defaultRecipes();
        });

    e.createMaterial('Enderium', 'enderium', 0x105e51,
        builder => {
            builder
                .addParts('ingot', 'nugget', 'hot_ingot', 'plate', 'gear', 'ring', 'rod', 'bolt')
                .block('iron')
                .defaultRecipes();
        });
});

MIMaterialEvents.modifyMaterial('beryllium', event => {
    event.builder.addParts('hot_ingot')
});