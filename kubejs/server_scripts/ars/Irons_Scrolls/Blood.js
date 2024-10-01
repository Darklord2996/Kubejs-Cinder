ServerEvents.recipes(event => {
    const recipes = [
        {
            "id": "irons_spellbooks:sacrifice",
            "items": ["irons_spellbooks:blood_rune", "irons_spellbooks:rare_ink", "irons_spellbooks:blood_rune", "bloodmagic:masterbloodorb"],
            "sourceCost": 5000,
        },

        {
            "id": "irons_spellbooks:ray_of_siphoning",
            "items": ["bloodmagic:throwing_dagger_syringe", "irons_spellbooks:common_ink", "meds_and_herbs:syringe_empty", "bloodmagic:apprenticebloodorb"],
            "sourceCost": 5000,
        },

        {
          "id": "irons_spellbooks:raise_dead",
          "items": ["ars_nouveau:glyph_summon_undead", "irons_spellbooks:uncommon_ink", "ars_elemental:anima_essence", "bloodmagic:archmagebloodorb"],
          "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:acupuncture",
             "items": ['bloodmagic:weakbloodshard', 'bloodmagic:weakbloodshard', 'bloodmagic:weakbloodshard', 'bloodmagic:weakbloodshard', 'irons_spellbooks:blood_rune', 'irons_spellbooks:blood_rune', 'irons_spellbooks:blood_rune', 'irons_spellbooks:rare_ink'],
             "sourceCost": 5000,
        },

        {
          "id": "irons_spellbooks:blood_needles",
          "items": ["irons_spellbooks:blood_rune", "irons_spellbooks:uncommon_ink", "irons_spellbooks:blood_rune", "bloodmagic:weakbloodshard", "irons_spellbooks:blood_vial", "bloodmagic:weakbloodshard"],
          "sourceCost": 5000,
        },

        {
             "id": "irons_spellbooks:blood_slash",
             "items": ['irons_spellbooks:blood_rune','magistuarmoryaddon:steel_sickle', 'irons_spellbooks:blood_vial', 'irons_spellbooks:rare_ink', 'undergarden:blood_globule', 'irons_spellbooks:blood_rune', 'irons_spellbooks:blood_vial', 'undergarden:blood_globule'],
             "sourceCost": 5000,
        },
        
        {
          "id": "irons_spellbooks:blood_step",
          "items": ["ars_nouveau:glyph_invisibility", "irons_spellbooks:uncommon_ink", "supplementaries:sugar_cube", "irons_spellbooks:blood_vial"],
          "sourceCost": 5000,
        },

        {
          "id": "irons_spellbooks:devour",
          "items": ["alexsmobs:blood_sac", "irons_spellbooks:uncommon_ink", "alexsmobs:mosquito_larva", "irons_spellbooks:blood_vial", "alexsmobs:mosquito_proboscis", "irons_spellbooks:blood_vial"],
          "sourceCost": 5000,
        },

        {
          "id": "irons_spellbooks:heartstop",
          "items": ["bloodmagic:weakbloodorb", "irons_spellbooks:common_ink", "artifacts:crystal_heart"],
          "sourceCost": 5000,
        },

        {
          "id": "irons_spellbooks:wither_skull",
          "items": ["minecraft:wither_skeleton_skull", "irons_spellbooks:uncommon_ink", "minecraft:wither_rose", "bloodmagic:magicianbloodorb"],
          "sourceCost": 5000,
        },
      ];


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
