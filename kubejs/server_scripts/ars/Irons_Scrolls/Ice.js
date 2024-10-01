ServerEvents.recipes(event => {
    const recipes = [
  
        {
            id: "irons_spellbooks:frostwave",
            items: ['botania:rune_winter', 'botania:rune_sloth', 'irons_spellbooks:common_ink', 'botania:rune_sloth', 'botania:rune_winter'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:summon_polar_bear",
            items: ['botania:rune_earth', 'irons_spellbooks:rare_ink', 'botania:rune_winter', 'eidolon:lesser_soul_gem', 'eidolon:lesser_soul_gem', 'ars_nouveau:conjuration_essence', 'minecraft:polar_bear_spawn_egg', 'ars_nouveau:conjuration_essence'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:frost_step",
            items: ['ars_nouveau:glyph_gust', 'ars_nouveau:source_gem', 'ars_nouveau:conjuration_essence', 'irons_spellbooks:common_ink', 'minecraft:powder_snow_bucket'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:icicle",
            items: ['minecraft:pointed_dripstone', 'botania:rune_winter', 'irons_spellbooks:common_ink', 'botania:rune_winter', 'minecraft:pointed_dripstone', 'minecraft:snowball'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:ice_block",
            items: ['ars_nouveau:conjuration_essence', 'undergarden:froststeel_ingot', 'irons_spellbooks:rare_ink', 'friendsandfoes:totem_of_freezing', 'irons_spellbooks:ice_rune', 'minecraft:blue_ice'],
            sourceCost: 5000,
        },

        {
            id: "irons_spellbooks:ray_of_frost",
            items: ['ars_nouveau:manipulation_essence', 'irons_spellbooks:common_ink', 'ars_nouveau:manipulation_essence', 'botania:rune_winter', 'botania:lens_normal', 'eidolon:wraith_heart', 'botania:lens_normal', 'botania:rune_winter'],
            sourceCost: 5000,
        },

        // missing /execute in minecraft:overworld run tp @s 10.35 151.09 -4.32 -1037.33 84.90
        // {
        //     id: "

        // {
        //     id: "

        {
            id: "irons_spellbooks:cone_of_cold",
            items: ['ars_nouveau:source_gem', 'irons_spellbooks:common_ink', 'ars_nouveau:source_gem', 'botania:rune_air', 'botania:rune_winter'],
            sourceCost: 5000,
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
