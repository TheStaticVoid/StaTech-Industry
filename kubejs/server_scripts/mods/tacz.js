// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:tacz/${id}`;

    // -- TACZ REMOVED RECIPES -- //
    const TACZ_REMOVED_RECIPES = [
        tz('gun_smith_table'),
        tz('attachment_workbench'),
        tz('ammo_workbench'),
    ];
    TACZ_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ------------------------//
    // --- SHAPED CRAFTING --- //
    // ------------------------//

    // -- GUN SMITH TABLE -- //
    event
        .shaped(tz('gun_smith_table'), ['WLO', 'HFF', 'ACA'], {
            W: mi('wrench'),
            L: mi('large_motor'),
            O: '#c:obsidians',
            H: '#kubejs:hammer/regular',
            F: mi('forge_hammer'),
            A: mi('aluminum_large_plate'),
            C: mi('electronic_circuit'),
        })
        .id(st('gun_table'));

    // -- ATTACHMENT TABLE -- //
    event
        .shaped(
            Item.of(tz('workbench_c'), 1).set(
                mc('custom_data'),
                '{BlockId:"tacz:attachment_workbench"}'
            ),
            ['WLL', 'OFA', 'ACA'],
            {
                W: mi('wrench'),
                L: mi('piston'),
                O: '#c:obsidians',
                F: mi('forge_hammer'),
                A: mi('invar_large_plate'),
                C: mi('electronic_circuit'),
            }
        )
        .id(st('attachment_table'));

    // -- AMMO ASSEMBLY TABLE -- //
    event
        .shaped(
            Item.of(tz('workbench_a'), 1).set(
                mc('custom_data'),
                '{BlockId:"tacz:ammo_workbench"}'
            ),
            ['LWL', 'OFO', 'ACA'],
            {
                W: mi('wrench'),
                L: mi('piston'),
                O: '#c:obsidians',
                F: mi('forge_hammer'),
                A: mi('aluminum_large_plate'),
                C: mi('electronic_circuit'),
            }
        )
        .id(st('ammo_table'));
});

// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:tacz/${id}`;
    // ----------------------//
    // ---- ATTACHMENTS ---- //
    // ----------------------//

    event.remove({ type: tz('gun_smith_table_crafting') });

    /**
     *   @param {ItemStack} output ItemStack object containing the namespaced output identifier and quantity produced
     *   @param {string} baseMetal Namespaced identifier of this attachment's base material
     *   @param {ItemStack} augmentOne ItemStack object containing the namespaced augment identifier and quantity required
     *   @param {?ItemStack} augmentTwo ItemStack object containing the namespaced augment identifier and quantity required (optional)
     *   @param {?ItemStack} augmentThree ItemStack object containing the namespaced augment identifier and quantity required (optional)
     *   @param {?number} ptfe Amount of PTFE needed to craft this attachment (optional)
     *
     * @example
     * ```javascript
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), [2, mc('redstone')]);
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), [2, mc('redstone')], [4, mc('leather')]);
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), [2, mc('redstone')], [4, mc('leather')], [2, mc('glass_pane')],);
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), [2, mc('redstone')], [4, mc('leather')], [2, mc('glass_pane')], 100);
     * ```
     */

    let Attachment = (
        output,
        baseMetal,
        augmentOne,
        augmentTwo,
        augmentThree,
        ptfe
    ) => {
        let newAttachment = {
            output: output,
            baseMetal: baseMetal,
            augmentOne: augmentOne,
        };
        if (augmentTwo) newAttachment['augmentTwo'] = augmentTwo;
        if (augmentThree) newAttachment['augmentThree'] = augmentThree;
        if (ptfe) newAttachment['ptfe'] = ptfe;
        return newAttachment;
    };

    const attachmentIngredientList = [
        Attachment(
            "tacz:sight_acro_pistol",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_sro_dot",
            [4, mi('steel_plate')],
            [1, mc('redstone')],
            [1, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_srs_02",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_pk06_pistol",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [1, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_rmr_dot",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [1, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_fastfire_pistol",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [1, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_deltapoint_pistol",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [1, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_pk06_rifle",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:sight_t1",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_t2",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:sight_fastfire_rifle",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:scope_hamr",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('tinted_glass')],
            [2, mi('analog_circuit')],
            [5, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:sight_uh1",
            [4, mi('steel_plate')],
            [4, mc('redstone')],
            [2, mc('glass_pane')],
            [2, mi('electrum_plate')]
        ),
        Attachment(
            "tacz:sight_coyote",
            [4, mi('steel_plate')],
            [4, mc('redstone')],
            [2, mc('glass_pane')],
        ),
        Attachment(
            "tacz:sight_deltapoint_rifle",
            [4, mi('steel_plate')],
            [4, mc('redstone')],
            [2, mc('glass_pane')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:sight_552",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
            [4, mi('aluminum_plate')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:sight_okp7",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:sight_acro_rifle",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [4, mc('glass_pane')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:sight_exp3",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('glass_pane')],
            [6, mi('aluminum_plate')],
            [5, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:scope_acog_ta31",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('tinted_glass')],
            [2, mi('analog_circuit')]
        ),
        Attachment(
            "tacz:scope_vudu",
            [4, mi('steel_plate')],
            [4, mc('redstone')],
            [4, mc('tinted_glass')],
            [2, mi('analog_circuit')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:scope_qmk152",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('tinted_glass')],
            [1, mi('analog_circuit')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:scope_98k",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('tinted_glass')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:scope_lpvo_1_6",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [4, mc('tinted_glass')],
            [4, mi('analog_circuit')],
            [5, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:scope_elcan_4x",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [4, mc('tinted_glass')],
            [1, mi('analog_circuit')]
        ),
        Attachment(
            "tacz:scope_mk5hd",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [4, mc('tinted_glass')],
            [1, mi('electronic_circuit')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:scope_standard_8x",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [8, mc('tinted_glass')],
            [2, mi('analog_circuit')]
        ),
        Attachment(
            "tacz:scope_retro_2x",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('tinted_glass')],
            [1, mi('analog_circuit')]
        ),
        Attachment(
            "tacz:scope_contender",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [2, mc('tinted_glass')],
            [2, mi('analog_circuit')]
        ),
        Attachment(
            "tacz:scope_1873_6x",
            [4, mi('steel_plate')],
            [2, mc('redstone')],
            [6, mc('tinted_glass')],
            [2, mi('bronze_ingot')]
        ),
        Attachment(
            "tacz:laser_peq6",
            [4, mi('steel_plate')],
            [12, mc('redstone')],
            [6, mc('tinted_glass')],
            [2, mc('glowstone')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:laser_compact",
            [4, mi('steel_plate')],
            [6, mc('redstone')],
            [4, mc('tinted_glass')],
            [2, mc('glowstone')],
        ),
        Attachment(
            "tacz:laser_nightstick",
            [4, mi('steel_plate')],
            [6, mc('redstone')],
            [2, mc('tinted_glass')],
            [1, mc('glowstone')],
        ),
        Attachment(
            "tacz:laser_lopro",
            [4, mi('steel_plate')],
            [6, mc('redstone')],
            [4, mc('tinted_glass')],
            [8, mc('glowstone')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:muzzle_silencer_ptilopsis",
            [4, mi('steel_plate')],
            [4, mc('redstone')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:muzzle_brake_mastiff_sg",
            [4, mi('steel_plate')],
            [4, mi('copper_plate')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:muzzle_brake_timeless50",
            [4, mi('steel_plate')],
            [2, mi('copper_plate')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:muzzle_brake_pioneer",
            [4, mi('steel_plate')],
            [4, mi('copper_plate')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:muzzle_silencer_wraith",
            [4, mi('steel_plate')],
            [4, mc('leather')],
            [4, mc('white_wool')]
        ),
        Attachment(
            "tacz:muzzle_brake_cyclone_d2",
            [4, mi('steel_plate')],
            [4, mi('copper_plate')],
            [6, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:muzzle_brake_trex",
            [4, mi('steel_plate')],
            [6, mi('copper_plate')],
            [6, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:muzzle_silencer_mirage",
            [4, mi('steel_plate')],
            [4, mi('aluminum_plate')],
            [2, mc('white_wool')]
        ),
        Attachment(
            "tacz:bayonet_6h3",
            [4, mi('steel_plate')],
            [1, fd('diamond_knife')],
            [2, mc('string')]
        ),
        Attachment(
            "tacz:muzzle_compensator_trident",
            [4, mi('steel_plate')],
            [4, mi('aluminum_plate')],
            [3, mi('steel_rod')]
        ),
        Attachment(
            "tacz:muzzle_silencer_knight_qd",
            [4, mi('steel_plate')],
            [6, mi('aluminum_plate')],
            [4, mc('leather')],
            [4, mc('white_wool')]
        ),
        Attachment(
            "tacz:muzzle_silencer_phantom_s1",
            [4, mi('steel_plate')],
            [6, mi('aluminum_plate')],
            [4, mc('leather')],
            [4, mc('white_wool')]
        ),
        Attachment(
            "tacz:muzzle_choke_sg",
            [4, mi('steel_plate')],
            [4, mi('aluminum_ring')],
            [6, mi('steel_rod')]
        ),
        Attachment(
            "tacz:muzzle_silencer_sg",
            [4, mi('steel_plate')],
            [4, mi('aluminum_ring')],
            [6, mi('steel_rod')],
            [4, mc('leather')]
        ),
        Attachment(
            "tacz:muzzle_brake_cthulhu",
            [4, mi('steel_plate')],
            [4, mi('aluminum_plate')],
            [6, mi('steel_ring')]
        ),
        Attachment(
            "tacz:bayonet_m9",
            [4, mi('steel_plate')],
            [1, fd('diamond_knife')],
            [4, mc('oak_log')],
            [1, mc('string')]
        ),
        Attachment(
            "tacz:muzzle_silencer_vulture",
            [4, mi('steel_plate')],
            [8, mi('aluminum_ring')],
            [8, mi('steel_rod')],
            [16, mc('leather')]
        ),
        Attachment(
            "tacz:deagle_golden_long_barrel",
            [1, mi('gold_plate')],
            [16, mi('bronze_ring')],
            [8, mi('steel_plate')]
        ),
        Attachment(
            "tacz:muzzle_silencer_ursus",
            [4, mi('steel_plate')],
            [12, mi('steel_ring')],
            [8, mi('steel_rod')],
            [6, mc('leather')]
        ),
        Attachment(
            "tacz:oem_stock_tactical",
            [4, mi('steel_plate')],
            [10, mi('steel_rod')],
            [6, mc('leather')]
        ),
        Attachment(
            "tacz:oem_stock_light",
            [4, mi('steel_plate')],
            [5, mi('steel_rod')],
            [3, mc('leather')]
        ),
        Attachment(
            "tacz:oem_stock_heavy",
            [4, mi('steel_plate')],
            [15, mi('steel_rod')],
            [9, mc('leather')]
        ),
        Attachment(
            "tacz:stock_ak12",
            [4, mi('steel_plate')],
            [10, mi('steel_rod')],
            [5, mc('leather')]
        ),
        Attachment(
            "tacz:stock_moe",
            [4, mi('steel_plate')],
            [10, mi('steel_rod')],
            [3, mc('leather')],
            [2, mc('white_wool')]
        ),
        Attachment(
            "tacz:stock_m4ss",
            [4, mi('steel_plate')],
            [8, mi('steel_rod')],
            [2, mc('leather')],
            [4, mc('white_wool')]
        ),
        Attachment(
            "tacz:stock_carbon_bone_c5",
            [4, mi('steel_plate')],
            [4, mi('steel_rod')],
            [2, mc('leather')],
            [2, mc('white_wool')]
        ),
        Attachment(
            "tacz:stock_sba3",
            [4, mi('steel_plate')],
            [6, mi('steel_rod')],
            [2, mc('leather')],
            [2, mc('white_wool')]
        ),
        Attachment(
            "tacz:stock_tactical_ar",
            [4, mi('steel_plate')],
            [8, mi('steel_rod')],
            [2, mc('leather')],
            [2, mc('white_wool')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:stock_hk_slim_line",
            [4, mi('steel_plate')],
            [4, mi('steel_rod')],
            [4, mc('leather')],
            [2, mc('white_wool')]
        ),
        Attachment(
            "tacz:stock_militech_b5",
            [4, mi('steel_plate')],
            [8, mi('steel_rod')],
            [8, mc('leather')],
            [4, mc('white_wool')]
        ),
        Attachment(
            "tacz:stock_ripstock",
            [4, mi('steel_plate')],
            [4, mi('steel_rod')],
            [8, mc('leather')],
            [4, mc('white_wool')]
        ),
        Attachment(
            "tacz:stock_heavy_spas_12",
            [4, mi('steel_plate')],
            [16, mi('steel_rod')],
            [8, mc('leather')],
            [4, mc('white_wool')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:stock_tactical_spas_12",
            [4, mi('steel_plate')],
            [12, mi('steel_rod')],
            [8, mc('leather')],
            [4, mc('white_wool')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:grip_magpul_afg_2",
            [4, mi('steel_plate')],
            [4, mi('steel_rod')],
            [2, mc('leather')]
        ),
        Attachment(
            "tacz:grip_cobra",
            [4, mi('steel_plate')],
            [6, mi('steel_rod')],
            [4, mc('leather')]
        ),
        Attachment(
            "tacz:grip_rk6",
            [4, mi('steel_plate')],
            [4, mi('steel_rod')],
            [1, mc('leather')]
        ),
        Attachment(
            "tacz:grip_osovets_black",
            [4, mi('steel_plate')],
            [12, mi('steel_rod')],
            [4, mc('leather')]
        ),
        Attachment(
            "tacz:grip_vertical_talon",
            [4, mi('steel_plate')],
            [11, mi('steel_rod')],
            [4, mc('leather')]
        ),
        Attachment(
            "tacz:grip_vertical_military",
            [4, mi('steel_plate')],
            [14, mi('steel_rod')],
            [5, mc('leather')]
        ),
        Attachment(
            "tacz:grip_vertical_ranger",
            [4, mi('steel_plate')],
            [16, mi('steel_rod')],
            [6, mc('leather')],
            [4, mc('redstone')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:grip_se_5",
            [4, mi('steel_plate')],
            [10, mi('steel_rod')],
            [3, mc('leather')]
        ),
        Attachment(
            "tacz:grip_rk0",
            [4, mi('steel_plate')],
            [11, mi('steel_rod')],
            [4, mc('leather')]
        ),
        Attachment(
            "tacz:grip_rk1_b25u",
            [4, mi('steel_plate')],
            [16, mi('steel_rod')],
            [5, mc('leather')]
        ),
        Attachment(
            "tacz:grip_td",
            [4, mi('steel_plate')],
            [10, mi('steel_rod')],
            [4, mc('leather')]
        ),
        Attachment(
            "tacz:extended_mag_1",
            [4, mi('steel_plate')],
            [10, mi('steel_rod')],
            [4, mi('electrum_plate')]
        ),
        Attachment(
            "tacz:extended_mag_2",
            [4, mi('steel_plate')],
            [10, mi('steel_rod')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:extended_mag_3",
            [4, mi('steel_plate')],
            [10, mi('aluminum_rod')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:light_extended_mag_1",
            [4, mi('steel_plate')],
            [6, mi('steel_rod')],
            [2, mi('electrum_plate')]
        ),
        Attachment(
            "tacz:light_extended_mag_2",
            [4, mi('steel_plate')],
            [6, mi('steel_rod')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:light_extended_mag_3",
            [4, mi('steel_plate')],
            [6, mi('aluminum_rod')],
            [2, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:shotgun_extended_mag_1",
            [4, mi('steel_plate')],
            [4, mi('steel_rod')],
            [4, mi('electrum_plate')]
        ),
        Attachment(
            "tacz:shotgun_extended_mag_2",
            [4, mi('steel_plate')],
            [4, mi('steel_rod')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:shotgun_extended_mag_3",
            [4, mi('steel_plate')],
            [4, mi('aluminum_rod')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:sniper_extended_mag_1",
            [4, mi('steel_plate')],
            [16, mi('steel_rod')],
            [4, mi('electrum_plate')]
        ),
        Attachment(
            "tacz:sniper_extended_mag_2",
            [4, mi('steel_plate')],
            [16, mi('steel_rod')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:sniper_extended_mag_3",
            [4, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [4, mi('aluminum_plate')],
        ),
        Attachment(
            "tacz:ammo_mod_i",
            [4, mi('steel_plate')],
            [4, mi('aluminum_rod')],
            [4, mc('blaze_rod')],
            [4, mc('fire_charge')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:ammo_mod_hp",
            [4, mi('steel_plate')],
            [4, mi('aluminum_plate')],
            [2, mc('obsidian')],
            [2, mc('crying_obsidian')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:ammo_mod_he",
            [4, mi('steel_plate')],
            [4, mi('aluminum_plate')],
            [4, mi('industrial_tnt')],
            [2, mc('crying_obsidian')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:ammo_mod_slug",
            [4, mi('steel_plate')],
            [8, mi('aluminum_plate')],
            [2, mc('ancient_debris')],
            [2, mc('crying_obsidian')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
        Attachment(
            "tacz:ammo_mod_fmj",
            [4, mi('steel_plate')],
            [8, cr('brass_sheet')],
            [4, mi('lead_ingot')],
            [2, mc('crying_obsidian')],
            [1, mi('polytetrafluoroethylene_plate')]
        ),
    ];

    function makeAttachmentRecipes(attachment) {
        const outputString = String(attachment.output).slice(5);

        if (attachment.augmentThree != null && attachment.ptfe) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: attachment.baseMetal[1] },
                        count: attachment.baseMetal[0],
                    },
                    {
                        item: { item: attachment.augmentOne[1] },
                        count: attachment.augmentOne[0],
                    },
                    {
                        item: { item: attachment.augmentTwo[1] },
                        count: attachment.augmentTwo[0],
                    },
                    {
                        item: { item: attachment.augmentThree[1] },
                        count: attachment.augmentThree[0],
                    },
                    {
                        item: { item: attachment.ptfe[1] },
                        count: attachment.ptfe[0],
                    },
                ],
                result: {
                    type: 'attachment',
                    id: attachment.output
                },
            }).id(st('attachment/'+outputString));
        }
        if (attachment.augmentThree == null && attachment.ptfe) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: attachment.baseMetal[1] },
                        count: attachment.baseMetal[0],
                    },
                    {
                        item: { item: attachment.augmentOne[1] },
                        count: attachment.augmentOne[0],
                    },
                    {
                        item: { item: attachment.augmentTwo[1] },
                        count: attachment.augmentTwo[0],
                    },
                    {
                        item: { item: attachment.ptfe[1] },
                        count: attachment.ptfe[0],
                    },
                ],
                result: {
                    type: 'attachment',
                    id: attachment.output
                },
            }).id(st('attachment/'+outputString));
        }
        if (attachment.augmentThree == null && attachment.ptfe == null) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: attachment.baseMetal[1] },
                        count: attachment.baseMetal[0],
                    },
                    {
                        item: { item: attachment.augmentOne[1] },
                        count: attachment.augmentOne[0],
                    },
                    {
                        item: { item: attachment.augmentTwo[1] },
                        count: attachment.augmentTwo[0],
                    },
                ],
                result: {
                    type: 'attachment',
                    id: attachment.output
                },
            }).id(st('attachment/'+outputString));
        }
        if (attachment.augmentThree != null && attachment.ptfe == null) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: attachment.baseMetal[1] },
                        count: attachment.baseMetal[0],
                    },
                    {
                        item: { item: attachment.augmentOne[1] },
                        count: attachment.augmentOne[0],
                    },
                    {
                        item: { item: attachment.augmentTwo[1] },
                        count: attachment.augmentTwo[0],
                    },
                    {
                        item: { item: attachment.augmentThree[1] },
                        count: attachment.augmentThree[0],
                    },
                ],
                result: {
                    type: 'attachment',
                    id: attachment.output
                },
            }).id(st('attachment/'+outputString));
        }
    }

    attachmentIngredientList.forEach((attachment) =>
    makeAttachmentRecipes(attachment)
    );

    // ---------------//
    // ---- GUNS ---- //
    // ---------------//

    /**
     *   @param {ItemStack} output ItemStack object containing the namespaced output identifier and quantity produced
     *   @param {ItemStack} baseMaterial ItemStack object containing the namespaced base material identifier and quantity required
     *   @param {ItemStack} augmentOne ItemStack object containing the namespaced augment identifier and quantity required
     *   @param {ItemStack} augmentTwo ItemStack object containing the namespaced augment identifier and quantity required
     *   @param {ItemStack} augmentThree ItemStack object containing the namespaced augment identifier and quantity required
     *   @param {?ItemStack} augmentFour ItemStack object containing the namespaced augment identifier and quantity required (optional)
     *   @param {?number} ptfe Amount of PTFE needed to craft this gun (optional)
     *
     * @example
     * ```javascript
     *  Gun(Item.of(tz('modern_kinetic_gun')).set(mc('custom_data'), '{GunId:"tacz:glock_17"}'), '6x ' + mi('steel_plate), [4, mc('redstone')], [4, mc('leather')], [2, mc('glass_pane')],);
     *  Gun(Item.of(tz('modern_kinetic_gun')).set(mc('custom_data'), '{GunId:"tacz:glock_17"}'), '6x ' + mi('steel_plate), [4, mc('redstone')], [4, mc('leather')], [2, mc('glass_pane')], '8x ' + mi('aluminum_plate));
     *  Gun(Item.of(tz('modern_kinetic_gun')).set(mc('custom_data'), '{GunId:"tacz:glock_17"}'), '6x ' + mi('steel_plate), [4, mc('redstone')], [4, mc('leather')], [2, mc('glass_pane')], '8x ' + mi('aluminum_plate), 100);
     * ```
     */
    let Gun = (
        output,
        baseMaterial,
        augmentOne,
        augmentTwo,
        augmentThree,
        augmentFour,
        ptfe
    ) => {
        let newGun = {
            output: output,
            baseMaterial: baseMaterial,
            augmentOne: augmentOne,
            augmentTwo: augmentTwo,
            augmentThree: augmentThree,
        };
        if (augmentFour) newGun['augmentFour'] = augmentFour;
        if (ptfe) newGun['ptfe'] = ptfe;
        return newGun;
    };

    const gunIngredientList = [
        Gun(
            "tacz:glock_17",
            [16, mi('steel_plate')],
            [4, mc('redstone')],
            [4, mc('leather')],
            [8, mi('aluminum_ring')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:deagle",
            [32, mi('steel_plate')],
            [4, mc('leather')],
            [16, mi('aluminum_ring')],
            [4, mi('invar_large_plate')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:cz75",
            [16, mi('steel_plate')],
            [2, mc('redstone')],
            [4, mc('leather')],
            [8, mi('aluminum_ring')],
            null,
            [5, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:deagle_golden",
            [32, mi('steel_plate')],
            [4, mc('leather')],
            [16, mi('aluminum_ring')],
            [4, mi('invar_large_plate')],
            [4, mi('electrum_block')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:p320",
            [16, mi('steel_plate')],
            [2, mc('redstone')],
            [4, mc('leather')],
            [8, mi('invar_ring')],
            null,
            [4, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m1911",
            [16, mi('steel_plate')],
            [2, mc('redstone')],
            [5, mc('oak_log')],
            [8, mi('aluminum_ring')],
            null,
            [4, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:b93r",
            [24, mi('steel_plate')],
            [12, mc('redstone')],
            [5, mc('oak_log')],
            [12, mi('aluminum_ring')],
            null,
            [4, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:timeless50",
            [32, mi('steel_plate')],
            [12, mc('gold_ingot')],
            [2, mi('electrum_block')],
            [2, mc('netherite_ingot')],
            [8, mi('diamond_plate')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:taurus943",
            [16, mi('steel_plate')],
            [2, mc('redstone')],
            [4, mc('oak_log')],
            [8, mi('aluminum_ring')]
        ),
        Gun(
            "tacz:rhino357",
            [32, mi('steel_plate')],
            [8, mc('redstone')],
            [5, mc('oak_log')],
            [16, mi('aluminum_ring')],
            [1, mi('invar_large_plate')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:lonetrail",
            [40, mi('steel_plate')],
            [8, mc('redstone')],
            [16, mi('aluminum_ring')],
            [1, mi('invar_large_plate')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:hk_mk23",
            [36, mi('steel_plate')],
            [8, mc('redstone')],
            [12, mi('aluminum_ring')],
            [2, mi('invar_large_plate')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:taurus500",
            [24, mi('steel_large_plate')],
            [16, mi('invar_large_plate')],
            [2, mc('redstone_block')],
            [4, mc('oak_log')],
            [2, mc('netherite_ingot')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m9a4",
            [16, mi('steel_plate')],
            [4, mc('redstone')],
            [4, mc('sand')],
            [8, mi('aluminum_ring')],
            null,
            [5, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:ai_awp",
            [50, mi('steel_large_plate')],
            [12, mi('invar_large_plate')],
            [4, mc('redstone_block')],
            [4, mc('leather')],
            [8, mc('netherite_ingot')],
            [25, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m95",
            [64, mi('steel_large_plate')],
            [32, mi('invar_large_plate')],
            [16, mi('aluminum_rod')],
            [4, mc('leather')],
            [16, mc('netherite_ingot')],
            [50, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m700",
            [16, mi('steel_large_plate')],
            [4, mc('redstone')],
            [4, mc('obsidian')],
            [8, mi('aluminum_ring')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m107",
            [64, mi('steel_large_plate')],
            [32, mi('invar_large_plate')],
            [32, mi('aluminum_rod')],
            [4, mc('leather')],
            [16, mc('netherite_ingot')],
            [25, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:springfield1873",
            [24, mi('steel_plate')],
            [16, mi('aluminum_plate')],
            [2, mc('redstone')],
            [12, mc('oak_log')]
        ),
        Gun(
            "tacz:kar98",
            [24, mi('steel_plate')],
            [16, mi('aluminum_plate')],
            [8, mc('redstone')],
            [40, mc('oak_log')]
        ),
        Gun(
            "tacz:ak47",
            [48, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [8, mc('leather')],
            [20, mc('oak_log')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m4a1",
            [36, mi('steel_plate')],
            [24, mi('aluminum_rod')],
            [4, mc('leather')],
            [10, mc('oak_log')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:hk_g3",
            [64, mi('steel_plate')],
            [32, mi('aluminum_rod')],
            [4, mc('leather')],
            [10, mc('quartz')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:sks_tactical",
            [40, mi('steel_plate')],
            [8, mi('aluminum_rod')],
            [4, mc('leather')],
            [20, mc('oak_log')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:scar_h",
            [24, mi('steel_large_plate')],
            [16, mi('aluminum_rod')],
            [4, mc('netherite_ingot')],
            [4, mc('leather')],
            [2, mc('blaze_rod')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:scar_l",
            [12, mi('steel_large_plate')],
            [16, mi('invar_rod')],
            [4, mc('netherite_ingot')],
            [4, mc('leather')],
            [2, mc('blaze_rod')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m16a1",
            [32, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [4, mc('leather')],
            [10, mc('oak_log')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:hk416d",
            [64, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [4, mc('leather')],
            [10, mc('quartz')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m16a4",
            [36, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [4, mc('leather')],
            [10, mc('oak_log')],
            null,
            [6, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:aug",
            [48, mi('steel_plate')],
            [16, mi('invar_rod')],
            [4, mc('leather')],
            [10, mc('oak_log')],
            [4, mc('amethyst_shard')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:mk14",
            [64, mi('steel_plate')],
            [16, mi('invar_rod')],
            [4, mc('leather')],
            [10, mc('oak_log')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:type_81",
            [64, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [4, mc('leather')],
            [10, mc('oak_log')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:g36k",
            [64, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_plate')],
            [4, mc('leather')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:qbz_95",
            [64, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_plate')],
            [4, mc('leather')],
            [4, mc('amethyst_shard')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:spr15hb",
            [18, mi('steel_large_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_plate')],
            [4, mi('invar_ring')],
            [4, mc('leather')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:qbz_191",
            [64, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_ring')],
            [4, mc('leather')],
            [2, mc('amethyst_shard')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:fn_fal",
            [64, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_ring')],
            [4, mc('leather')],
            [32, mc('oak_log')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:db_short",
            [16, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [8, mc('oak_log')],
            [4, mc('leather')],
            null,
            [5, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:db_long",
            [32, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [16, mc('oak_log')],
            [4, mc('leather')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m870",
            [32, mi('steel_plate')],
            [16, mi('steel_rod')],
            [16, mc('oak_log')],
            [4, mc('leather')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:aa12",
            [64, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_plate')],
            [4, mi('invar_ring')],
            [4, mc('leather')],
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:spas_12",
            [32, mi('steel_large_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_plate')],
            [4, mi('invar_ring')],
            [4, mc('leather')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m1014",
            [16, mi('steel_large_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_plate')],
            [16, mi('invar_ring')],
            [4, mc('leather')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:hk_mp5a5",
            [32, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_ring')],
            [4, mc('leather')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:uzi",
            [32, mi('steel_plate')],
            [16, mi('aluminum_rod')],
            [8, mi('aluminum_ring')],
            [4, mc('leather')],
            null,
            [5, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:vector45",
            [64, mi('steel_plate')],
            [32, mi('invar_plate')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_ring')],
            [4, mc('leather')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:ump45",
            [64, mi('steel_plate')],
            [16, mi('invar_plate')],
            [16, mi('aluminum_ring')],
            [4, mc('leather')],
            null,
            [8, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:p90",
            [64, mi('steel_plate')],
            [18, mi('invar_ring')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_ring')],
            [4, mc('leather')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:rpg7",
            [64, mi('steel_plate')],
            [16, mi('invar_ring')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_ring')],
            [16, mc('oak_log')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m320",
            [32, mi('steel_plate')],
            [16, mi('invar_ring')],
            [16, mi('aluminum_rod')],
            [16, mi('aluminum_ring')],
            null,
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:m249",
            [32, mi('steel_large_plate')],
            [24, mi('invar_ring')],
            [16, mi('aluminum_ring')],
            [16, mi('aluminum_rod')],
            [8, mc('blaze_rod')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:rpk",
            [64, mi('steel_plate')],
            [16, mi('steel_rod')],
            [16, mi('steel_ring')],
            [16, mc('oak_log')],
            [4, mc('leather')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:minigun",
            [64, mi('steel_large_plate')],
            [32, mi('aluminum_rod')],
            [16, mc('netherite_ingot')],
            [16, mc('blaze_rod')],
            [4, mi('diamond_large_plate')],
            [25, mi('polytetrafluoroethylene_plate')]
        ),
        Gun(
            "tacz:fn_evolys",
            [32, mi('steel_large_plate')],
            [32, mi('aluminum_rod')],
            [16, mi('invar_rod')],
            [8, mc('blaze_rod')],
            [2, mi('diamond_large_plate')],
            [10, mi('polytetrafluoroethylene_plate')]
        ),
    ];

    function makeGunRecipes(gun) {
        const outputString = String(gun.output).slice(5);

        if (gun.augmentFour != null && gun.ptfe) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: gun.baseMaterial[1] },
                        count: gun.baseMaterial[0],
                    },
                    {
                        item: { item: gun.augmentOne[1] },
                        count: gun.augmentOne[0],
                    },
                    {
                        item: { item: gun.augmentTwo[1] },
                        count: gun.augmentTwo[0],
                    },
                    {
                        item: { item: gun.augmentThree[1] },
                        count: gun.augmentThree[0],
                    },
                    {
                        item: { item: gun.augmentFour[1] },
                        count: gun.augmentFour[0],
                    },
                    {
                        item: { item: gun.ptfe[1] },
                        count: gun.ptfe[0],
                    },
                ],
                result: {
                    type: 'gun',
                    id: gun.output
                },
            }).id(st('attachment/'+outputString));
        }
        if (gun.augmentFour == null && gun.ptfe) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: gun.baseMaterial[1] },
                        count: gun.baseMaterial[0],
                    },
                    {
                        item: { item: gun.augmentOne[1] },
                        count: gun.augmentOne[0],
                    },
                    {
                        item: { item: gun.augmentTwo[1] },
                        count: gun.augmentTwo[0],
                    },
                    {
                        item: { item: gun.augmentThree[1] },
                        count: gun.augmentThree[0],
                    },
                    {
                        item: { item: gun.ptfe[1] },
                        count: gun.ptfe[0],
                    },
                ],
                result: {
                    type: 'gun',
                    id: gun.output
                },
            }).id(st('attachment/'+outputString));
        }
        if (gun.augmentFour == null && gun.ptfe == null) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: gun.baseMaterial[1] },
                        count: gun.baseMaterial[0],
                    },
                    {
                        item: { item: gun.augmentOne[1] },
                        count: gun.augmentOne[0],
                    },
                    {
                        item: { item: gun.augmentTwo[1] },
                        count: gun.augmentTwo[0],
                    },
                    {
                        item: { item: gun.augmentThree[1] },
                        count: gun.augmentThree[0],
                    },
                ],
                result: {
                    type: 'gun',
                    id: gun.output
                },
            }).id(st('attachment/'+outputString));
        }
        if (gun.augmentFour != null && gun.ptfe == null) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: gun.baseMaterial[1] },
                        count: gun.baseMaterial[0],
                    },
                    {
                        item: { item: gun.augmentOne[1] },
                        count: gun.augmentOne[0],
                    },
                    {
                        item: { item: gun.augmentTwo[1] },
                        count: gun.augmentTwo[0],
                    },
                    {
                        item: { item: gun.augmentThree[1] },
                        count: gun.augmentThree[0],
                    },
                    {
                        item: { item: gun.augmentFour[1] },
                        count: gun.augmentFour[0],
                    },
                ],
                result: {
                    type: 'gun',
                    id: gun.output
                },
            }).id(st('attachment/'+outputString));
        }
    }

    gunIngredientList.forEach((gun) => makeGunRecipes(gun));

    /**
     *   @param {MIItem} output MIItem object containing the namespaced output identifier and quantity produced
     *   @param {string} core Namespaced identifier of this ammo's core material
     *   @param {string} jacket Namespaced identifier of this ammo's jacket material
     *   @param {number} gunpowder Amount of gunpowder needed to craft this ammo
     *   @param {?number} ptfe Amount of PTFE needed to craft this ammo (optional)
     *   @param {?number} explosive Amount of items in the "#kubejs:explosives" tag needed to craft this ammo (optional)
     *
     * @example
     * ```javascript
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), mi('lead_ingot), mi('copper_curved_plate'), 2);
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), amount: 16)}, mi('lead_ingot), mi('copper_curved_plate'), 2, 10);
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), amount: 16)}, mi('lead_ingot), mi('copper_curved_plate'), 2, 10, 5);
     * ```
     */
    function Ammo(output, core, jacket, gunpowder, ptfe, explosive) {
        return {
            output: output,
            core: core,
            jacket: jacket,
            gunpowder: gunpowder,
            ptfe: ptfe,
            explosive: explosive,
        };
    }

    const ammoIngredientList = [
        Ammo(
            ["pd_cartridges", "tacz:9mm", 24],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["pd_cartridges", "tacz:22wmr", 48],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["pd_cartridges", "tacz:45acp", 12],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["pd_cartridges", "tacz:762x25", 24],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["pd_cartridges", "tacz:46x30", 18],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["pd_cartridges", "tacz:57x28", 18],
            mi('lead_nugget'),
            cr('brass_sheet'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:545x39", 24],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:556x45", 24],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:58x42", 18],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:762x39", 12],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:762x54", 24],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:308", 24],
            mi('lead_nugget'),
            cr('brass_sheet'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:792x57", 18],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["ifp_rifle_cartridges", "tacz:68x51fury", 24],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            ["lc_specialized", "tacz:357mag", 24],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            2
        ),

        Ammo(
            ["lc_specialized", "tacz:50ae", 24],
            mi('steel_nugget'),
            cr('brass_sheet'),
            3
        ),

        Ammo(
            ["lc_specialized", "tacz:500mag", 20],
            mi('steel_nugget'),
            cr('brass_sheet'),
            2
        ),

        Ammo(
            ["lc_specialized", "tacz:45_70", 18],
            mi('steel_nugget'),
            cr('brass_sheet'),
            4
        ),

        Ammo(
            ["lc_specialized", "tacz:338", 8],
            mi('steel_nugget'),
            cr('brass_sheet'),
            4
        ),

        Ammo(
            ["lc_specialized", "tacz:30_06", 18],
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            3
        ),

        Ammo(
            ["lc_specialized", "tacz:50bmg", 8],
            mi('tungsten_nugget'),
            mi('cupronickel_plate'),
            16
        ),

        Ammo(
            ["shotgun_shells","tacz:12g", 18],
            mi('lead_nugget'),
            mi('steel_nugget'),
            9
        ),

        Ammo(
            ["explosives","tacz:40mm", 4],
            mi('lead_ingot'),
            mi('steel_plate'),
            null,
            1,
            8
        ),

        Ammo(
            ["explosives", "tacz:rpg_rocket", 4],
            ca('brass_rod'),
            mi('steel_plate'),
            null,
            1,
            16
        ),
    ];

    function makeAmmoRecipes(ammo) {
        const outputString = String(ammo.output[1]).slice(5);

        if (ammo.ptfe != null && ammo.explosive != null) {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: ammo.core },
                        count: 8,
                    },
                    {
                        item: { item: ammo.jacket },
                        count: 6,
                    },
                    {
                        item: { item: mi('industrial_tnt') },
                        count: ammo.explosive,
                    },
                    {
                        item: { item: mi('polytetrafluoroethylene_plate') },
                        count: ammo.ptfe,
                    }
                ],
                result: {
                    type: 'ammo',
                    group: ammo.output[0],
                    id: ammo.output[1],
                    count: ammo.output[2]
                },
            }).id(st('ammo/'+outputString));
        } else {
            event.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: [
                    {
                        item: { item: ammo.core },
                        count: 12,
                    },
                    {
                        item: { item: ammo.jacket },
                        count: 2,
                    },
                    {
                        item: { item: mc('gunpowder') },
                        count: ammo.gunpowder,
                    }
                ],
                result: {
                    type: 'ammo',
                    group: ammo.output[0],
                    id: ammo.output[1],
                    count: ammo.output[2]
                },
            }).id(st('ammo/'+outputString));
        }
    }

    ammoIngredientList.forEach((ammo) => makeAmmoRecipes(ammo));
});
