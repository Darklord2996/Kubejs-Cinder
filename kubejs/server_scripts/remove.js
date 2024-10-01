ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        //cc
        {"output":/computercraft:.*/},
        {"output":/advancedperipherals:.*/},


        //create
        // stage 1
        {"output":"create:andesite_alloy"},
        {"id":"create:crafting/palettes/scorchia"},
        // stage 2
        {"output":"create:rose_quartz"},
        {"output":"create:blaze_burner"},
        {"output":"create:empty_blaze_burner"},
        {"output":"create:sturdy_sheet"},

        //Armour Refining or Epic Kights
        {"output":"magistuarmory:steel_ingot", "input": "minecraft:iron_ingot"},

        //Eidolon

        //botania
        // stage 1
        {"output":"/botania:apothecary_*/"},
        // stage 4
        {"output":"botania:runic_altar"},

        {"output":"botania:alfheim_portal"},
        {"output":"botania:alchemy_catalyst"},

        {"output":"botania:terra_plate"},
        {"output":"botania:gaia_pylon"},

        //ars
        {"output":"ars_nouveau:arcane_core"},
        {"output":"ars_nouveau:enchanting_apparatus"},
        {"output":"ars_nouveau:imbuement_chamber"},
        {"output":"ars_nouveau:warp_scroll"},

        // stage 3
        {"output":"ars_nouveau:scribes_table"},
        {"output":"ars_nouveau:source_jar"},
        // stage 4
        
        //irons
        {"output":/irons_spellbooks:(?!blank_rune).*_rune/},
        {"output":"irons_spellbooks:divine_pearl"},
        {"output":"irons_spellbooks:arcane_ingot"},
        {"output":"irons_spellbooks:magic_cloth"},
        {"output":/irons_spellbooks:.*_spell_book/},
        {"output":"irons_spellbooks:energized_core"},

        //stage 2
        {"output":"irons_spellbooks:common_ink"},
        {"output":"irons_spellbooks:uncommon_ink"},
        {"output":"irons_spellbooks:rare_ink"},
        {"output":"irons_spellbooks:lengendary_ink"},
        // stage 3
        {"output":"irons_spellbooks:alchemist_cauldron"},
        {"output":"irons_spellbooks:arcane_anvil"},
        {"output":"irons_spellbooks:scroll_forge"},
        {"output":"irons_spellbooks:scroll"},

        //tought as nails
        { output: 'toughasnails:empty_canteen' },

    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});

