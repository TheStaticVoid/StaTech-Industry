MoreJS.structureLoad((event) => {
    if (event.id.includes("trial_chambers")) {
        event.forEachPalettes((palette) => {
            palette.forEach((blockInfo) => {
                if (blockInfo.id == "minecraft:jigsaw") {
                    if (blockInfo.getNbt().get('final_state') == "minecraft:waxed_oxidized_copper")
                        blockInfo.nbt().putString('final_state', "kubejs:decorative_waxed_oxidized_copper")
                    }
                if (blockInfo.id == "minecraft:jigsaw") {
                    if (blockInfo.getNbt().get('final_state') == "minecraft:waxed_copper_block")
                        blockInfo.nbt().putString('final_state', "kubejs:decorative_waxed_copper_block")
                    }
                if (blockInfo.id == "minecraft:waxed_copper_block") {
                blockInfo.setBlock("kubejs:decorative_waxed_copper_block");
                }         
                else if (blockInfo.id == "minecraft:waxed_oxidized_copper") {
                blockInfo.setBlock("kubejs:decorative_waxed_oxidized_copper");
                }
                else if (blockInfo.id == "minecraft:copper_block") {
                blockInfo.setBlock("kubejs:decorative_waxed_copper_block");
                }
            });
        });
    }
});