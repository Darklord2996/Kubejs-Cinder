ServerEvents.recipes(event => {
    const recipes = [
         {
             "id": "irons_spellbooks:fang_ward",
             "items": ['irons_spellbooks:common_ink', 'iceandfire:sea_serpent_fang', 'iceandfire:sea_serpent_fang', 'minecraft:totem_of_undying', 'minecraft:emerald'],
             "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:firecracker",
             "items": ['minecraft:gunpowder', 'irons_spellbooks:common_ink', 'minecraft:redstone', 'minecraft:blaze_powder', 'minecraft:paper', 'minecraft:gunpowder'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:lob_creeper",
             "items": ['minecraft:creeper_head', 'irons_spellbooks:uncommon_ink', 'ars_elemental:glyph_arc_projectile'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:lob_creeper",
             "items": ['minecraft:creeper_head', 'irons_spellbooks:uncommon_ink', 'ars_elemental:glyph_arc_projectile'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:spectral_hammer",
             "items": ['irons_spellbooks:uncommon_ink', 'irons_spellbooks:evocation_rune', 'ars_nouveau:summon_focus', 'handcrafted:hammer', 'ars_nouveau:arcane_core'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:slow",
             "items": ['irons_spellbooks:uncommon_ink', 'minecraft:soul_sand', 'minecraft:soul_soil', 'minecraft:soul_sand'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:summon_horse",
             "items": ['irons_spellbooks:common_ink', 'minecraft:iron_horse_armor', 'irons_spellbooks:evocation_rune', 'minecraft:saddle', 'minecraft:horse_spawn_egg'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:summon_vex",
             "items": ['irons_spellbooks:rare_ink', 'ars_nouveau:glyph_summon_vex', 'minecraft:amethyst_shard'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:invisibility",
             "items": ['botania:invisibility_cloak', 'irons_spellbooks:rare_ink', 'ars_nouveau:glyph_invisibility', 'artifacts:scarf_of_invisibility'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:chain_creeper",
             "items": ['irons_spellbooks:uncommon_ink', 'minecraft:creeper_head', 'minecraft:chain'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:arrow_volley",
             "items": ['irons_spellbooks:uncommon_ink', 'ars_nouveau:spell_bow', 'supplementaries:quiver', 'ars_nouveau:amplify_arrow', 'ars_nouveau:split_arrow', 'ars_nouveau:pierce_arrow'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:fang_strike",
             "items": ['irons_spellbooks:common_ink', 'minecraft:emerald', 'ars_nouveau:glyph_fangs', 'iceandfire:sea_serpent_fang', 'iceandfire:sea_serpent_fang', 'irons_spellbooks:evocation_rune'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:gust",
             "items": ['irons_spellbooks:uncommon_ink', 'ars_elemental:lesser_air_focus', 'ars_nouveau:glyph_gust', 'botania:rune_air', 'ars_nouveau:air_essence'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:shield",
             "items": ['irons_spellbooks:common_ink', 'ars_nouveau:enchanters_shield', 'ars_nouveau:thread_warding', 'ars_nouveau:abjuration_essence'],
             "sourceCost": 5000,
         },

        {
             "id": "irons_spellbooks:wololo",
             "items": ['minecraft:red_wool', 'irons_spellbooks:legendary_ink', 'minecraft:blue_wool', 'minecraft:totem_of_undying'],
             "sourceCost": 5000,
         },
        
    ]

    recipes.forEach((recipe) => {
        var temp_items = [];
        recipe.items.forEach((item) => {
          temp_items.push({ "item": item });
        });
        event.custom({
          "type": "ars_nouveau:enchanting_apparatus",
          "reagent": {
            "item": "ars_nouveau:spell_parchment"
          },
          "pedestalItems": temp_items,
          "output": {
            "item": "irons_spellbooks:scroll",
            "nbt": {
              "ISB_Spells": {
                "data": [
                  {
                    "id": recipe.id.toString(),
                    "index": 0,
                    "level": 1,
                    "locked": 1
                  }
                ],
                "maxSpells":1,
                "mustEquip":0,
                "spellWheel":0
              }
            }
          },
          "sourceCost": recipe.sourceCost,
          "count": 1
        });
    });
})
