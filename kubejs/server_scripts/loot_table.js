LootJS.modifiers((event) => {

    let tr = (id) => `techreborn:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let ae = (id) => `ae2:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // Remove TechReborn electronic circuits
    const TR_ITEMS = [
        tr('electronic_circuit'),
        tr('tin_ingot'),
        tr('lead_ingot'),
        tr('steel_ingot'),
        tr('refined_iron_ingot'),
        tr('silver_ingot'),
        tr('tungsten_ingot'),
        tr('aluminum_ingot'),
        tr('invar_ingot'),
        tr('nickel_ingot'),
		tr('electrum_ingot')
    ];
    TR_ITEMS.forEach(id => event.addLootTableModifier(/.*/).removeLoot(id));

    // needs to be rebalanced

    // // Add stuff to the chest loot table i guess lol
    // const ADDED_LOOT = [
    //     '1x ' + mi('iron_hammer'),
    //     '1x ' + mi('diamond_hammer'),
    //     '1x ' + mi('steel_hammer'),
    //     '7x ' + mi('bronze_ingot'),
    //     '3x ' + mi('steel_ingot'),
    //     '4x ' + mi('aluminum_ingot'),
    //     '6x ' + mi('battery_alloy_ingot'),
    //     '10x ' + mi('lead_ingot'),
    //     '4x ' + mi('electrum_ingot'),
    //     '9x ' + mi('nickel_ingot'),
    //     '3x ' + mi('silicon_ingot'),
    //     '1x ' + mi('uranium_ingot'),
    //     '3x ' + mi('raw_tungsten'),
    //     '4x ' + mi('raw_titanium'),
    //     '4x ' + mi('uncooked_steel_dust'),
    //     '2x ' + mi('resistor'),
    //     '3x ' + mi('capacitor'),
    //     '4x ' + mi('inductor'),
    //     '1x ' + mi('diode'),
    //     '6x ' + mi('transistor'),
    //     '8x ' + tr('sap'),
    //     '3x ' + tr('zinc_ingot'),
    //     '4x ' + tr('refined_iron_ingot'),
    //     '2x ' + tr('brass_ingot'),
    //     '3x ' + ae('fluix_crystal'),
    //     '4x ' + ae('certus_quarts_crystal'),
    //     '5x ' + ae('silicon'),
    // ];
    // ADDED_LOOT.forEach(id => event.addLootTypeModifier(LootType.CHEST).randomChance(0.1).addLoot(id));
});