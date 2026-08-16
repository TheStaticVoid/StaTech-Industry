// ---------------------------------------------------- //
// --       MULTIBLOCK SHAPE GENERATOR SCRIPT        -- //
// --      TAKEN FROM CRAFTORIA WITH PERMISSION      -- //
// -- FROM WHITE_PHANTOM, OTHERWISE THIS CODE IS ARR -- //
// ---------------------------------------------------- //
// https://github.com/TeamAOF/Craftoria/blob/main/kubejs/server_scripts/Dev/GenerateMIMulti.js //

const $Direction = Java.loadClass('net.minecraft.core.Direction');
const $MultiblockMachineBlockEntity = Java.loadClass(
    'aztech.modern_industrialization.machines.multiblocks.MultiblockMachineBlockEntity'
);
const $NeighborNotifyEvent = Java.loadClass(
    'net.neoforged.neoforge.event.level.BlockEvent$NeighborNotifyEvent'
);
const $InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand');
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
const $WeightedPressurePlateBlock = Java.loadClass(
    'net.minecraft.world.level.block.WeightedPressurePlateBlock'
);
const $PressurePlateBlock = Java.loadClass(
    'net.minecraft.world.level.block.PressurePlateBlock'
);
const $FenceGateBlock = Java.loadClass(
    'net.minecraft.world.level.block.FenceGateBlock'
);
const $TrapDoorBlock = Java.loadClass(
    'net.minecraft.world.level.block.TrapDoorBlock'
);
const $ButtonBlock = Java.loadClass(
    'net.minecraft.world.level.block.ButtonBlock'
);
const $LeverBlock = Java.loadClass(
    'net.minecraft.world.level.block.LeverBlock'
);
const $DoorBlock = Java.loadClass('net.minecraft.world.level.block.DoorBlock');
const $DoubleBlockHalf = Java.loadClass(
    'net.minecraft.world.level.block.state.properties.DoubleBlockHalf'
);
const $ServerLevel = Java.loadClass('net.minecraft.server.level.ServerLevel');

const $Integer = Java.loadClass('java.lang.Integer');
const $Boolean = Java.loadClass('java.lang.Boolean');

/**
 * Generates KubeJS code for a Modern Industrialization multiblock.
 *
 * How to use:
 * 1. Hold the 'craftoria:multiblock_generator' item.
 * 2. Right-click a block to set the first corner (pos1).
 * 3. Shift-right-click another block to set the second corner (pos2).
 * 4. Right-click with the item in the air (not targeting a block) to process the selection.
 *
 * The script will output the KubeJS code for the multiblock, which you can copy and paste into a file.
 * You MUST change the placeholder values in the code before using it.
 */
const POS1_KEY_CRAFTORIA_SHAPE = 'multiblock_tool_pos1';
const POS2_KEY_CRAFTORIA_SHAPE = 'multiblock_tool_pos2';

function getRotatedOffsets(
    x_prime,
    z_prime,
    sizeX,
    sizeZ,
    facingDirection,
    player
) {
    let data_x_offset;
    let data_z_offset;

    if (facingDirection == null) {
        player.tell(
            Text.red(
                'Error: Controller facing direction not found. Defaulting to North (no rotation).'
            )
        );
        data_x_offset = x_prime;
        data_z_offset = z_prime;
    } else if (facingDirection === $Direction.NORTH.getName()) {
        data_x_offset = x_prime;
        data_z_offset = z_prime;
    } else if (facingDirection === $Direction.SOUTH.getName()) {
        data_x_offset = sizeX - 1 - x_prime;
        data_z_offset = sizeZ - 1 - z_prime;
    } else if (facingDirection === $Direction.EAST.getName()) {
        data_x_offset = sizeX - 1 - z_prime;
        data_z_offset = x_prime;
    } else if (facingDirection === $Direction.WEST.getName()) {
        data_x_offset = z_prime;
        data_z_offset = sizeZ - 1 - x_prime;
    } else {
        player.tell(
            Text.yellow(
                `Warning: Unknown facing direction '${facingDirection}'. Defaulting to North (no rotation).`
            )
        );
        data_x_offset = x_prime;
        data_z_offset = z_prime;
    }
    return { data_x_offset: data_x_offset, data_z_offset: data_z_offset };
}

function getCharForBlock(blockId, block, mapping, charCodeRef, player) {
    let charForThisBlock;

    if (block.entity instanceof $MultiblockMachineBlockEntity) {
        charForThisBlock = '#';
        let idMappedToHash = null;
        for (let [iterId, iterChar] of mapping.entries()) {
            if (iterChar === '#') {
                idMappedToHash = iterId;
                break;
            }
        }
        if (idMappedToHash && idMappedToHash !== blockId) {
            player.tell(
                Text.red(
                    `Error: Controller symbol '#' is already mapped to block '${idMappedToHash}', but block '${blockId}' is also a controller. Use only one type of block for controllers.`
                )
            );
            return null;
        }
        if (mapping.has(blockId) && mapping.get(blockId) !== '#') {
            player.tell(
                Text.red(
                    `Error: Block '${blockId}' was previously mapped to '${mapping.get(blockId)}' but is now identified as a controller ('#'). This indicates a conflict.`
                )
            );
            return null;
        }
        mapping.set(blockId, '#');
    } else {
        if (mapping.has(blockId)) {
            charForThisBlock = mapping.get(blockId);
            if (charForThisBlock === '#') {
                player.tell(
                    Text.red(
                        `Error: Block '${blockId}' is not a controller but is mapped to '#'. This indicates a logic error or conflicting setup.`
                    )
                );
                return null;
            }
        } else if (blockId !== 'minecraft:air') {
            // Check mapping size limit first (52 unique chars: A-Z, a-z)
            if (mapping.size >= 52 && !mapping.has(blockId)) {
                player.tell(
                    Text.red(
                        `Too many unique block types (${mapping.size}). Max supported is 52 (A-Z, a-z). Block ID: ${blockId}`
                    )
                );
                player.tell(
                    Text.red(
                        'If you really need more, you can change the character set in the script.'
                    )
                );
                player.tell(
                    Text.red(
                        'But in my honest opinion, 52 unique blocks is already too many.'
                    )
                );
                return null;
            }

            if (charCodeRef.value === 91) {
                // charCode for '[' (after 'Z')
                charCodeRef.value = 97; // charCode for 'a'
            } else if (charCodeRef.value === 123) {
                // charCode for '{' (after 'z') - Ran out of A-Z, a-z
                player.tell(
                    Text.red(
                        `Too many unique non-controller block types (${mapping.size}). Ran out of A-Z, a-z characters.`
                    )
                );
                return null; // Ran out of A-Z, a-z characters, abort. Why do you need more than 52? Too complex IMHO.
            }
            charForThisBlock = String.fromCharCode(charCodeRef.value);
            mapping.set(blockId, charForThisBlock);
            charCodeRef.value++;
        } else {
            charForThisBlock = ' ';
            if (!mapping.has('minecraft:air'))
                mapping.set('minecraft:air', ' ');
        }
    }
    return charForThisBlock;
}

BlockEvents.rightClicked((event) => {
    const { player, block, item } = event;
    if (item.id !== 'modern_industrialization:cobalt_bolt') return;
    const pos = { x: block.x, y: block.y, z: block.z };

    if (!player.shiftKeyDown) {
        player.persistentData.put(POS1_KEY_CRAFTORIA_SHAPE, pos);
        player.tell(Text.green('Corner 1 set!'));
    } else {
        player.persistentData.put(POS2_KEY_CRAFTORIA_SHAPE, pos);
        player.tell(Text.green('Corner 2 set!'));
    }
    event.success();
});

ItemEvents.firstRightClicked(
    'modern_industrialization:cobalt_bolt',
    (event) => {
        const { player, level, item } = event;

        // Only process if it's an air click; block clicks are for setting positions via BlockEvents.rightClicked
        if (event.target.type === 'block') return;

        const pos1 = player.persistentData.get(POS1_KEY_CRAFTORIA_SHAPE);
        const pos2 = player.persistentData.get(POS2_KEY_CRAFTORIA_SHAPE);

        if (!pos1 || !pos2) {
            player.tell(
                Text.yellow(
                    'Both corners must be set first. Use the item on blocks to set corners.'
                )
            );
            return;
        }

        const min = {
            x: Math.min(pos1.x, pos2.x),
            y: Math.min(pos1.y, pos2.y),
            z: Math.min(pos1.z, pos2.z),
        };
        const max = {
            x: Math.max(pos1.x, pos2.x),
            y: Math.max(pos1.y, pos2.y),
            z: Math.max(pos1.z, pos2.z),
        };

        const sizeX = max.x - min.x + 1;
        const sizeY = max.y - min.y + 1;
        const sizeZ = max.z - min.z + 1;

        const totalBlocks = sizeX * sizeY * sizeZ;
        if (totalBlocks === 0) {
            player.tell(Text.red('Selection is empty.'));
            return;
        }

        const mapping = new Map();
        let nextCharCode = 65;
        const dataBuilder = [];
        let firstControllerBlock = null;

        // Iteration order: X, Y, Z
        for (let x = min.x; x <= max.x; x++) {
            for (let y = min.y; y <= max.y; y++) {
                for (let z = min.z; z <= max.z; z++) {
                    let currentPos = new BlockPos(x, y, z);
                    let block = level.getBlock(currentPos);
                    let blockId = `${block.id}`;

                    let charCodeRef = { value: nextCharCode };
                    let charForThisBlock = getCharForBlock(
                        blockId,
                        block,
                        mapping,
                        charCodeRef,
                        player
                    );
                    nextCharCode = charCodeRef.value;

                    if (charForThisBlock === null) return;
                    if (charForThisBlock === '#' && !firstControllerBlock)
                        firstControllerBlock = block;

                    dataBuilder.push(charForThisBlock);
                }
            }
        }

        let facingDirection = null;
        // Determine facing direction from the first controller block found
        if (
            firstControllerBlock &&
            firstControllerBlock.entity instanceof $MultiblockMachineBlockEntity
        ) {
            facingDirection = $Direction.from3DDataValue(
                firstControllerBlock.entityData.get('facingDirection')
            );
        } else if (mapping.values().includes('#')) {
            // A controller was mapped, but we didn't get its block object (should not happen if logic is correct)
            player.tell(
                Text.red(
                    'Critical error: Controller block was mapped but not captured for facing direction.'
                )
            );
            return;
        }
        // If no controller ('#') was found, facingDirection remains null and will default to North in rotation logic.

        let mappingBuilder = '';
        for (let [id, char] of mapping) {
            mappingBuilder += `${char}=${id}
`;
        }

        // ---- START KUBEJS CODE GENERATION ----
        let kubejsCode = `// Multiblock generated on ${new Date().toISOString()}\n`;
        kubejsCode += `// Dimensions: X=${sizeX}, Y=${sizeY}, Z=${sizeZ}\n\n`;

        kubejsCode += 'MIMachineEvents.registerMachines(event => {\n';
        kubejsCode +=
            "  // Hatches - define these based on your machine's needs\n";
        kubejsCode += '  const noHatch = event.noHatch();\n';
        kubejsCode +=
            "  const multiblockHatch = event.hatchOf(/* 'item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input' */); // TODO: Configure hatches\n\n";

        kubejsCode += '  // Block Members\n';
        const blockVarNames = new Map();
        let varSuffix = 0;
        for (const [id, char] of mapping) {
            if (char === '#' || char === ' ') continue; // Skip controller/air blocks, they are handled automatically
            // Create a KubeJS-friendly variable name, e.g., "minecraft:stone" -> "minecraftStone"
            let varName = id
                .replace(/[:.]/g, '_')
                .replace(/_([a-z])/g, (g) => g[1].toUpperCase());
            if (blockVarNames.has(varName)) {
                varName += varSuffix++;
            }
            blockVarNames.set(id, varName);
            kubejsCode += `  const ${varName} = event.memberOfBlock('${id}');\n`;
        }
        kubejsCode += '\n';

        kubejsCode +=
            "  const generatedShape = event.layeredShape('YOUR_CASING_BLOCK_ID_HERE', [\n"; // Placeholder for casing

        // Shape definition
        // The KubeJS layeredShape expects an array of layers (Game Z), where each layer is an array of strings (Game Y rows),
        // and each string contains characters for Game X.
        // layeredShape[GAME_Z_IDX][GAME_Y_IDX].charAt(GAME_X_IDX)
        // The loops below construct this based on the scanned data (X,Y,Z) and controller orientation.

        // KubeJS script loops define:
        // Outer loop (z_def_idx): Defines Game Z layers for KubeJS output (inverted for rotation z_prime).
        // Middle loop (y_def_idx): Defines Game Y rows within each Z layer.
        // Inner loop (x_def_idx): Defines Game X characters within each Y row.

        for (let z_def_idx = 0; z_def_idx < sizeZ; z_def_idx++) {
            // Z layer
            let z_prime_for_rotation = sizeZ - 1 - z_def_idx; // Inverted Z for North-facing view rotation
            kubejsCode += '    ['; // Start Z-layer array

            for (let y_def_idx = 0; y_def_idx < sizeY; y_def_idx++) {
                // Y row
                let data_y_scan_offset = y_def_idx; // Y maps directly to scan Y for data fetching
                let x_chars_in_row = '';

                for (let x_def_idx = 0; x_def_idx < sizeX; x_def_idx++) {
                    // X char
                    let x_prime_for_rotation = x_def_idx; // X maps directly to x_prime for rotation

                    let data_x_offset;
                    let data_z_offset;

                    // Rotation logic uses x_prime_for_rotation and z_prime_for_rotation
                    let rotatedOffsets = getRotatedOffsets(
                        x_prime_for_rotation,
                        z_prime_for_rotation,
                        sizeX,
                        sizeZ,
                        facingDirection,
                        player
                    );
                    data_x_offset = rotatedOffsets.data_x_offset;
                    data_z_offset = rotatedOffsets.data_z_offset;

                    // dataBuilder is ordered: X, then Y, then Z (relative to selection min corner)
                    // Element at (selX_offset, selY_offset, selZ_offset) is at
                    // index = (selX_offset * sizeY * sizeZ) + (selY_offset * sizeZ) + selZ_offset
                    let dataBuilderIndex =
                        data_x_offset * sizeY * sizeZ +
                        data_y_scan_offset * sizeZ +
                        data_z_offset;

                    if (
                        dataBuilderIndex < 0 ||
                        dataBuilderIndex >= dataBuilder.length
                    ) {
                        x_chars_in_row += '?'; // Error placeholder
                        console.error(
                            `GenerateMIMulti: Out of bounds dataBuilderIndex: ${dataBuilderIndex} for z_def_idx:${z_def_idx}(z_prime:${z_prime_for_rotation}), y_def_idx:${y_def_idx}(data_y_scan:${data_y_scan_offset}), x_def_idx:${x_def_idx}(x_prime:${x_prime_for_rotation}). Dir: ${facingDirection}`
                        );
                    } else {
                        x_chars_in_row += dataBuilder[dataBuilderIndex];
                    }
                }
                kubejsCode += `'${x_chars_in_row}'${y_def_idx === sizeY - 1 ? '' : ','}`; // Row for Y
            }
            kubejsCode += `]${z_def_idx === sizeZ - 1 ? '' : ','}
`; // End layer for Z
        }
        kubejsCode += '  ])\n';

        // Key definitions
        for (const [id, char] of mapping) {
            let varName = blockVarNames.get(id);
            if (char === '#' || char === ' ')
                continue; // Skip controller/air blocks, they are handled automatically
            else kubejsCode += `    .key('${char}', ${varName}, noHatch)\n`;
        }
        kubejsCode += '    .build();\n\n';

        kubejsCode +=
            '  // Example Machine Registration (uncomment and configure)\n';
        kubejsCode += '  /*\n';
        kubejsCode += '  event.simpleElectricCraftingMultiBlock(\n';
        kubejsCode += `    'Generated Machine Name', // English Name
`;
        kubejsCode += `    'generated_machine_id', // internal name
`;
        kubejsCode += `    YOUR_RECIPE_TYPE_VAR, // Recipe Type (e.g., MODEL_SYNTHESIZER for example)
`;
        kubejsCode += '    generatedShape,\n';
        kubejsCode += `    event.progressBar(77, 33, 'arrow'), // TODO: Adjust progress bar position and texture
`;
        kubejsCode += `    itemInputs => itemInputs.addSlots(56, 35, 2, 1), // TODO: Adjust item input slots
`;
        kubejsCode += `    itemOutputs => itemOutputs.addSlots(102, 35, 2, 1), // TODO: Adjust item output slots
`;
        kubejsCode += `    fluidInputs => fluidInputs.addSlots(56, 35, 2, 1), // TODO: Adjust fluid input slots
`;
        kubejsCode += `    fluidOutputs => fluidOutputs.addSlots(102, 35, 2, 1), // TODO: Adjust fluid output slots
`;
        kubejsCode += `    'casing_material_here', // controller casing (e.g., 'steel')
`;
        kubejsCode += `    'overlay_folder_here', // overlay folder (e.g., 'model_synthesizer')
`;
        kubejsCode += `    true, // front overlay
`;
        kubejsCode += `    false, // top overlay
`;
        kubejsCode += `    false  // side overlay
`;
        kubejsCode += '  );\n';
        kubejsCode += '  */\n';
        kubejsCode += '});\n';

        // ---- END KUBEJS CODE GENERATION ----

        console.info(
            `Multiblock shape data for player ${player.username} (${item.id}):`
        );
        console.info(kubejsCode);
        player.tell(
            Text.gold(
                'Shape data has been logged to the server console, or you can click this text to copy it.'
            )
                .clickCopy(kubejsCode)
                .hover('Click to copy KubeJS code')
        );

        player.tell(
            Text.green(`Processed ${totalBlocks} blocks. Selection cleared.`)
        );

        player.persistentData.remove(POS1_KEY_CRAFTORIA_SHAPE);
        player.persistentData.remove(POS2_KEY_CRAFTORIA_SHAPE);
    }
);
