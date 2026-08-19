// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/weapons_factory/${id}`;

    // ----------------------//
    // ---- ATTACHMENTS ---- //
    // ----------------------//

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
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'));
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'), '4x ' + mc('leather'));
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'), '4x ' + mc('leather'), '2x #c:glass_panes');
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'), '4x ' + mc('leather'), '2x #c:glass_panes', 100);
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
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_acro_pistol"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_sro_dot"}'
            ),
            mi('steel_plate'),
            '1x ' + mc('redstone'),
            '1x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_srs_02"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_pk06_pistol"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '1x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_rmr_dot"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '1x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_fastfire_pistol"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '1x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_deltapoint_pistol"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '1x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_pk06_rifle"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes',
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_t1"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_t2"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes',
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_fastfire_rifle"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes',
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_hamr"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x ' + mc('tinted_glass'),
            '2x ' + mi('analog_circuit'),
            250
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_uh1"}'
            ),
            mi('steel_plate'),
            '4x ' + mc('redstone'),
            '2x #c:glass_panes',
            '2x ' + mi('electrum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_coyote"}'
            ),
            mi('steel_plate'),
            '4x ' + mc('redstone'),
            '2x #c:glass_panes'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_deltapoint_rifle"}'
            ),
            mi('steel_plate'),
            '4x ' + mc('redstone'),
            '2x #c:glass_panes',
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_552"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes',
            '4x ' + mi('aluminum_plate'),
            125
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_okp7"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes',
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_acro_rifle"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '4x #c:glass_panes',
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_exp3"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes',
            '6x ' + mi('aluminum_plate'),
            250
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_acog_ta31"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x ' + mc('tinted_glass'),
            '2x ' + mi('analog_circuit')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_vudu"}'
            ),
            mi('steel_plate'),
            '4x ' + mc('redstone'),
            '4x ' + mc('tinted_glass'),
            '2x ' + mi('analog_circuit'),
            500
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_qmk152"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x ' + mc('tinted_glass'),
            '1x ' + mi('analog_circuit'),
            125
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_98k"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x ' + mc('tinted_glass'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_lpvo_1_6"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '4x ' + mc('tinted_glass'),
            '4x ' + mi('analog_circuit'),
            250
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_elcan_4x"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '4x ' + mc('tinted_glass'),
            '1x ' + mi('analog_circuit')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_mk5hd"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '4x ' + mc('tinted_glass'),
            '1x ' + mi('electronic_circuit'),
            500
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_standard_8x"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '8x ' + mc('tinted_glass'),
            '2x ' + mi('analog_circuit')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_retro_2x"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x ' + mc('tinted_glass'),
            '1x ' + mi('analog_circuit')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_contender"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x ' + mc('tinted_glass'),
            '2x ' + mi('analog_circuit')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:scope_1873_6x"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '6x ' + mc('tinted_glass'),
            '2x ' + mi('bronze_ingot')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:laser_peq6"}'
            ),
            mi('steel_plate'),
            '12x ' + mc('redstone'),
            '6x ' + mc('tinted_glass'),
            '2x ' + mc('glowstone'),
            50
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:laser_compact"}'
            ),
            mi('steel_plate'),
            '6x ' + mc('redstone'),
            '4x ' + mc('tinted_glass'),
            '2x ' + mc('glowstone')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:laser_nightstick"}'
            ),
            mi('steel_plate'),
            '6x ' + mc('redstone'),
            '2x ' + mc('tinted_glass'),
            '1x ' + mc('glowstone')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:laser_lopro"}'
            ),
            mi('steel_plate'),
            '6x ' + mc('redstone'),
            '4x ' + mc('tinted_glass'),
            '8x ' + mc('glowstone'),
            50
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_ptilopsis"}'
            ),
            mi('steel_plate'),
            '4x ' + mc('redstone'),
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_brake_mastiff_sg"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('copper_plate'),
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_brake_timeless50"}'
            ),
            mi('steel_plate'),
            '2x ' + mi('copper_plate'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_brake_pioneer"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('copper_plate'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_wraith"}'
            ),
            mi('steel_plate'),
            '4x ' + mc('leather'),
            '4x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_brake_cyclone_d2"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('copper_plate'),
            '6x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_brake_trex"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('copper_plate'),
            '6x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_mirage"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_plate'),
            '2x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:bayonet_6h3"}'
            ),
            mi('steel_plate'),
            '1x ' + fd('diamond_knife'),
            '2x ' + mc('string')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_compensator_trident"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_plate'),
            '3x ' + mi('steel_rod')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_knight_qd"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('aluminum_plate'),
            '4x ' + mc('leather'),
            '4x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_phantom_s1"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('aluminum_plate'),
            '4x ' + mc('leather'),
            '4x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_choke_sg"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_ring'),
            '6x ' + mi('steel_rod')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_sg"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_ring'),
            '6x ' + mi('steel_rod'),
            '4x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_brake_cthulhu"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_plate'),
            '6x ' + mi('steel_ring')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:bayonet_m9"}'
            ),
            mi('steel_plate'),
            '1x ' + fd('diamond_knife'),
            '4x #minecraft:logs',
            '1x ' + mc('string')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_vulture"}'
            ),
            mi('steel_plate'),
            '8x ' + mi('aluminum_ring'),
            '8x ' + mi('steel_rod'),
            '16x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:deagle_golden_long_barrel"}'
            ),
            mi('gold_plate'),
            '16x ' + mi('bronze_ring'),
            '8x ' + mi('steel_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:muzzle_silencer_ursus"}'
            ),
            mi('steel_plate'),
            '12x ' + mi('steel_ring'),
            '8x ' + mi('steel_rod'),
            '6x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:oem_stock_tactical"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('steel_rod'),
            '6x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:oem_stock_light"}'
            ),
            mi('steel_plate'),
            '5x ' + mi('steel_rod'),
            '3x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:oem_stock_heavy"}'
            ),
            mi('steel_plate'),
            '15x ' + mi('steel_rod'),
            '9x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_ak12"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('steel_rod'),
            '5x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_moe"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('steel_rod'),
            '3x ' + mc('leather'),
            '2x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_m4ss"}'
            ),
            mi('steel_plate'),
            '8x ' + mi('steel_rod'),
            '2x ' + mc('leather'),
            '4x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_carbon_bone_c5"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('steel_rod'),
            '2x ' + mc('leather'),
            '2x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_sba3"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('steel_rod'),
            '2x ' + mc('leather'),
            '2x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_tactical_ar"}'
            ),
            mi('steel_plate'),
            '8x ' + mi('steel_rod'),
            '2x ' + mc('leather'),
            '2x #c:wools',
            150
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_hk_slim_line"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('steel_rod'),
            '4x ' + mc('leather'),
            '2x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_militech_b5"}'
            ),
            mi('steel_plate'),
            '8x ' + mi('steel_rod'),
            '8x ' + mc('leather'),
            '4x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_ripstock"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('steel_rod'),
            '8x ' + mc('leather'),
            '4x #c:wools'
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_heavy_spas_12"}'
            ),
            mi('steel_plate'),
            '16x ' + mi('steel_rod'),
            '8x ' + mc('leather'),
            '4x #c:wools',
            150
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:stock_tactical_spas_12"}'
            ),
            mi('steel_plate'),
            '12x ' + mi('steel_rod'),
            '8x ' + mc('leather'),
            '4x #c:wools',
            75
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_magpul_afg_2"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('steel_rod'),
            '2x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_cobra"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('steel_rod'),
            '4x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_rk6"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('steel_rod'),
            '1x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_osovets_black"}'
            ),
            mi('steel_plate'),
            '12x ' + mi('steel_rod'),
            '4x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_vertical_talon"}'
            ),
            mi('steel_plate'),
            '11x ' + mi('steel_rod'),
            '4x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_vertical_military"}'
            ),
            mi('steel_plate'),
            '14x ' + mi('steel_rod'),
            '5x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_vertical_ranger"}'
            ),
            mi('steel_plate'),
            '16x ' + mi('steel_rod'),
            '6x ' + mc('leather'),
            '4x ' + mc('redstone'),
            75
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_se_5"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('steel_rod'),
            '3x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_rk0"}'
            ),
            mi('steel_plate'),
            '11x ' + mi('steel_rod'),
            '4x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_rk1_b25u"}'
            ),
            mi('steel_plate'),
            '16x ' + mi('steel_rod'),
            '5x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:grip_td"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('steel_rod'),
            '4x ' + mc('leather')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:extended_mag_1"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('steel_rod'),
            '4x ' + mi('electrum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:extended_mag_2"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('steel_rod'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:extended_mag_3"}'
            ),
            mi('steel_plate'),
            '10x ' + mi('aluminum_rod'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:light_extended_mag_1"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('steel_rod'),
            '2x ' + mi('electrum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:light_extended_mag_2"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('steel_rod'),
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:light_extended_mag_3"}'
            ),
            mi('steel_plate'),
            '6x ' + mi('aluminum_rod'),
            '2x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:shotgun_extended_mag_1"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('steel_rod'),
            '4x ' + mi('electrum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:shotgun_extended_mag_2"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('steel_rod'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:shotgun_extended_mag_3"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_rod'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sniper_extended_mag_1"}'
            ),
            mi('steel_plate'),
            '16x ' + mi('steel_rod'),
            '4x ' + mi('electrum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sniper_extended_mag_2"}'
            ),
            mi('steel_plate'),
            '16x ' + mi('steel_rod'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sniper_extended_mag_3"}'
            ),
            mi('steel_plate'),
            '16x ' + mi('aluminum_rod'),
            '4x ' + mi('aluminum_plate')
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:ammo_mod_i"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_rod'),
            '4x ' + mc('blaze_rod'),
            '4x ' + mc('fire_charge'),
            50
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:ammo_mod_hp"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_plate'),
            '2x ' + mc('obsidian'),
            '2x ' + mc('crying_obsidian'),
            50
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:ammo_mod_he"}'
            ),
            mi('steel_plate'),
            '4x ' + mi('aluminum_plate'),
            '4x #kubejs:explosives',
            '2x ' + mc('crying_obsidian'),
            50
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:ammo_mod_slug"}'
            ),
            mi('steel_plate'),
            '8x ' + mi('aluminum_plate'),
            '2x ' + mc('ancient_debris'),
            '2x ' + mc('crying_obsidian'),
            50
        ),
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:ammo_mod_fmj"}'
            ),
            mi('steel_plate'),
            '8x ' + cr('brass_sheet'),
            '4x ' + mi('lead_ingot'),
            '2x ' + mc('crying_obsidian'),
            50
        ),
    ];

    function makeAttachmentRecipes(attachment) {
        const outputID = attachment.output
            .get(mc('custom_data'))
            .copyTag()
            .getString('AttachmentId');

        const outputString = String(outputID).slice(5);

        if (attachment.augmentThree != null && attachment.ptfe) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn('4x ' + attachment.baseMetal)
                .itemIn(attachment.augmentOne)
                .itemIn(attachment.augmentTwo)
                .itemIn(attachment.augmentThree)
                .itemOut(attachment.output)
                .fluidIn(attachment.ptfe + 'x ' + mi('polytetrafluoroethylene'))
                .id(st(`attachment/${outputString}`));
        }
        if (attachment.augmentThree == null && attachment.ptfe) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn('4x ' + attachment.baseMetal)
                .itemIn(attachment.augmentOne)
                .itemIn(attachment.augmentTwo)
                .itemOut(attachment.output)
                .fluidIn(attachment.ptfe + 'x ' + mi('polytetrafluoroethylene'))
                .id(st(`attachment/${outputString}`));
        }
        if (attachment.augmentThree == null && attachment.ptfe == null) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn('4x ' + attachment.baseMetal)
                .itemIn(attachment.augmentOne)
                .itemIn(attachment.augmentTwo)
                .itemOut(attachment.output)
                .id(st(`attachment/${outputString}`));
        }
        if (attachment.augmentThree != null && attachment.ptfe == null) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn('4x ' + attachment.baseMetal)
                .itemIn(attachment.augmentOne)
                .itemIn(attachment.augmentTwo)
                .itemIn(attachment.augmentThree)
                .itemOut(attachment.output)
                .id(st(`attachment/${outputString}`));
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
     *  Gun(Item.of(tz('modern_kinetic_gun')).set(mc('custom_data'), '{GunId:"tacz:glock_17"}'), '6x ' + mi('steel_plate), '4x ' + mc('redstone'), '4x ' + mc('leather'), '2x #c:glass_panes');
     *  Gun(Item.of(tz('modern_kinetic_gun')).set(mc('custom_data'), '{GunId:"tacz:glock_17"}'), '6x ' + mi('steel_plate), '4x ' + mc('redstone'), '4x ' + mc('leather'), '2x #c:glass_panes', '8x ' + mi('aluminum_plate));
     *  Gun(Item.of(tz('modern_kinetic_gun')).set(mc('custom_data'), '{GunId:"tacz:glock_17"}'), '6x ' + mi('steel_plate), '4x ' + mc('redstone'), '4x ' + mc('leather'), '2x #c:glass_panes', '8x ' + mi('aluminum_plate), 100);
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
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:glock_17"}'
            ),
            '16x ' + mi('steel_plate'),
            '4x ' + mc('redstone'),
            '4x ' + mc('leather'),
            '8x ' + mi('aluminum_ring'),
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:deagle"}'
            ),
            '32x ' + mi('steel_plate'),
            '4x ' + mc('leather'),
            '16x ' + mi('aluminum_ring'),
            '4x ' + mi('invar_large_plate'),
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:cz75"}'
            ),
            '16x ' + mi('steel_plate'),
            '2x ' + mc('redstone'),
            '4x ' + mc('leather'),
            '8x ' + mi('aluminum_ring'),
            null,
            250
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:deagle_golden"}'
            ),
            '32x ' + mi('steel_plate'),
            '4x ' + mc('leather'),
            '16x ' + mi('aluminum_ring'),
            '4x ' + mi('invar_large_plate'),
            '4x ' + mi('electrum_block'),
            1000
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:p320"}'
            ),
            '16x ' + mi('steel_plate'),
            '2x ' + mc('redstone'),
            '4x ' + mc('leather'),
            '8x ' + mi('invar_ring'),
            null,
            375
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m1911"}'
            ),
            '16x ' + mi('steel_plate'),
            '2x ' + mc('redstone'),
            '5x #minecraft:logs',
            '8x ' + mi('aluminum_ring'),
            null,
            375
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:b93r"}'
            ),
            '24x ' + mi('steel_plate'),
            '12x ' + mc('redstone'),
            '5x #minecraft:logs',
            '12x ' + mi('aluminum_ring'),
            null,
            375
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:timeless50"}'
            ),
            '32x ' + mi('steel_plate'),
            '12x ' + mc('gold_ingot'),
            '2x ' + mi('electrum_block'),
            '2x ' + mc('netherite_ingot'),
            '1x #c:music_discs',
            1000
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:taurus943"}'
            ),
            '16x ' + mi('steel_plate'),
            '2x ' + mc('redstone'),
            '4x #minecraft:logs',
            '8x ' + mi('aluminum_ring')
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:rhino357"}'
            ),
            '32x ' + mi('steel_plate'),
            '8x ' + mc('redstone'),
            '5x #minecraft:logs',
            '16x ' + mi('aluminum_ring'),
            '1x ' + mi('invar_large_plate'),
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:lonetrail"}'
            ),
            '40x ' + mi('steel_plate'),
            '8x ' + mc('redstone'),
            '16x ' + mi('aluminum_ring'),
            '1x ' + mi('invar_large_plate'),
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:hk_mk23"}'
            ),
            '36x ' + mi('steel_plate'),
            '8x ' + mc('redstone'),
            '12x ' + mi('aluminum_ring'),
            '2x ' + mi('invar_large_plate'),
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:taurus500"}'
            ),
            '24x ' + mi('steel_large_plate'),
            '16x ' + mi('invar_large_plate'),
            '2x ' + mc('redstone_block'),
            '4x #minecraft:logs',
            '2x ' + mc('netherite_ingot'),
            1000
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m9a4"}'
            ),
            '16x ' + mi('steel_plate'),
            '4x ' + mc('redstone'),
            '4x ' + mc('sand'),
            '8x ' + mi('aluminum_ring'),
            null,
            250
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:ai_awp"}'
            ),
            '50x ' + mi('steel_large_plate'),
            '12x ' + mi('invar_large_plate'),
            '4x ' + mc('redstone_block'),
            '4x ' + mc('leather'),
            '8x ' + mc('netherite_ingot'),
            2500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m95"}'
            ),
            '64x ' + mi('steel_large_plate'),
            '32x ' + mi('invar_large_plate'),
            '16x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '16x ' + mc('netherite_ingot'),
            5000
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m700"}'
            ),
            '16x ' + mi('steel_large_plate'),
            '4x ' + mc('redstone'),
            '4x #c:obsidians',
            '8x ' + mi('aluminum_ring'),
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m107"}'
            ),
            '64x ' + mi('steel_large_plate'),
            '32x ' + mi('invar_large_plate'),
            '32x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '16x ' + mc('netherite_ingot'),
            2500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:springfield1873"}'
            ),
            '24x ' + mi('steel_plate'),
            '16x ' + mi('aluminum_plate'),
            '2x ' + mc('redstone'),
            '12x #minecraft:logs'
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:kar98"}'
            ),
            '24x ' + mi('steel_plate'),
            '16x ' + mi('aluminum_plate'),
            '8x ' + mc('redstone'),
            '40x #minecraft:logs'
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:ak47"}'
            ),
            '48x ' + mi('steel_plate'),
            '16x ' + mi('aluminum_rod'),
            '8x ' + mc('leather'),
            '20x #minecraft:logs',
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m4a1"}'
            ),
            '36x ' + mi('steel_plate'),
            '24x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '10x #minecraft:logs',
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:hk_g3"}'
            ),
            '64x ' + mi('steel_plate'),
            '32x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '10x ' + mc('quartz'),
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:sks_tactical"}'
            ),
            '40x ' + mi('steel_plate'),
            '8x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '20x #minecraft:logs',
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:scar_h"}'
            ),
            '24x ' + mi('steel_large_plate'),
            '16x ' + mi('aluminum_rod'),
            '4x ' + mc('netherite_ingot'),
            '4x ' + mc('leather'),
            '2x ' + mc('blaze_rod'),
            1000
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:scar_l"}'
            ),
            '12x ' + mi('steel_large_plate'),
            '16x ' + mi('invar_rod'),
            '4x ' + mc('netherite_ingot'),
            '4x ' + mc('leather'),
            '2x ' + mc('blaze_rod'),
            1000
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m16a1"}'
            ),
            '32x ' + mi('steel_plate'),
            '16x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '10x #minecraft:logs',
            null,
            500
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:hk416d"}'
            ),
            '64x ' + mi('steel_plate'),
            '16x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '10x ' + mc('quartz'),
            null,
            750
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:m16a4"}'
            ),
            '36x ' + mi('steel_plate'),
            '16x ' + mi('aluminum_rod'),
            '4x ' + mc('leather'),
            '10x #minecraft:logs',
            null,
            550
        ),
        Gun(
            Item.of(tz('modern_kinetic_gun'), 1).set(
                mc('custom_data'),
                '{GunId:"tacz:aug"}'
            ),
            '48x ' + mi('steel_plate'),
            '16x ' + mi('invar_rod'),
            '4x ' + mc('leather'),
            '10x #minecraft:logs',
            '4x ' + mc('amethyst_shard'),
            750
        ),
    ];

    function makeGunRecipes(gun) {
        const outputID = gun.output
            .get(mc('custom_data'))
            .copyTag()
            .getString('GunId');

        const outputString = String(outputID).slice(5);

        if (gun.augmentFour != null && gun.ptfe) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn(gun.baseMaterial)
                .itemIn(gun.augmentOne)
                .itemIn(gun.augmentTwo)
                .itemIn(gun.augmentThree)
                .itemIn(gun.augmentFour)
                .itemOut(gun.output)
                .fluidIn(gun.ptfe + 'x ' + mi('polytetrafluoroethylene'))
                .id(st(`gun/${outputString}`));
        }
        if (gun.augmentFour == null && gun.ptfe) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn(gun.baseMaterial)
                .itemIn(gun.augmentOne)
                .itemIn(gun.augmentTwo)
                .itemIn(gun.augmentThree)
                .itemOut(gun.output)
                .fluidIn(gun.ptfe + 'x ' + mi('polytetrafluoroethylene'))
                .id(st(`gun/${outputString}`));
        }
        if (gun.augmentFour == null && gun.ptfe == null) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn(gun.baseMaterial)
                .itemIn(gun.augmentOne)
                .itemIn(gun.augmentTwo)
                .itemIn(gun.augmentThree)
                .itemOut(gun.output)
                .id(st(`gun/${outputString}`));
        }
        if (gun.augmentFour != null && gun.ptfe == null) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn(gun.baseMaterial)
                .itemIn(gun.augmentOne)
                .itemIn(gun.augmentTwo)
                .itemIn(gun.augmentThree)
                .itemIn(gun.augmentFour)
                .itemOut(gun.output)
                .id(st(`gun/${outputString}`));
        }
    }

    gunIngredientList.forEach((gun) => makeGunRecipes(gun));
});
