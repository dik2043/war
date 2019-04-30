var	punisherT = {
	slot: "medium",
	damageType: "kinetic",
	trajectory: "straight",
	range: 500,
	ammo: 220,
	fireRate: 11.11,
	unload: 19.71,
	reload: 10,
	damageToPhysical: 2,
	durability: "",
	currency: "silver",
	cost: 30000,
	
	mk1: {
		lv1: {
			damage: 260,
			upgradeCost: 10000,
			upgradeTime: 5,
			sellingPrice: 6000
		}, 
		lv2: {
			damage: 290,
			upgradeCost: 20000,
			upgradeTime: 30,
			sellingPrice: 8000
		}, 
		lv3: {
			damage: 320,
			upgradeCost: 40000,
			upgradeTime: 60,
			sellingPrice: 10000
		}, 
		lv4: {
			damage: 350,
			upgradeCost: 200000,
			upgradeTime: 240,
			sellingPrice: 14000
		}, 
		lv5: {
			damage: 390,
			upgradeCost: 400000,
			upgradeTime: 480,
			sellingPrice: 46000
		}, 
		lv6: {
			damage: 430,
			upgradeCost: 800000,
			upgradeTime: 1020,
			sellingPrice: 86000
		}, 
		lv7: {
			damage: 470,
			upgradeCost: 1500000,
			upgradeTime: 1260,
			sellingPrice: 166000
		}, 
		lv8: {
			damage: 520,
			upgradeCost: 3000000,
			upgradeTime: 1440,
			sellingPrice: 306000
		}, 
		lv9: {
			damage: 570,
			upgradeCost: 5000000,
			upgradeTime: 1860,
			sellingPrice: 606000
		}, 
		lv10: {
			damage: 630,
			upgradeCost: 8000000,
			upgradeTime: 2520,
			sellingPrice: 1006000
		}, 
		lv11: {
			damage: 690,
			upgradeCost: 13000000,
			upgradeTime: 60,
			sellingPrice: 1606000
		}, 
		lv12: {
			damage: 760,
			upgradeCost: 0,
			upgradeTime: 0,
			sellingPrice: 2606000
		}
	}
	
	// mk2: {
	// 	lv1: {
	// 		damage: 140,
	// 		upgradeCost: 10000,
	// 		upgradeTime: 5,
	// 		sellingPrice: 6000
	// 	}
	// 	lv2: {
	// 		damage: mk1.damage.lv2 * 1.2,
	// 		upgradeCost: 20000,
	// 		upgradeTime: 30,
	// 		sellingPrice: 8000
	// 	}, 
	// 	lv3: {
	// 		damage: mk1.damage.lv3 * 1.2,
	// 		upgradeCost: 40000,
	// 		upgradeTime: 60,
	// 		sellingPrice: 10000
	// 	}, 
	// 	lv4: {
	// 		damage: mk1.damage.lv4 * 1.2,
	// 		upgradeCost: 200000,
	// 		upgradeTime: 240,
	// 		sellingPrice: 14000
	// 	}, 
	// 	lv5: {
	// 		damage: mk1.damage.lv5 * 1.2,
	// 		upgradeCost: 400000,
	// 		upgradeTime: 480,
	// 		sellingPrice: 46000
	// 	}, 
	// 	lv6: {
	// 		damage: mk1.damage.lv6 * 1.2,
	// 		upgradeCost: 800000,
	// 		upgradeTime: 1020,
	// 		sellingPrice: 86000
	// 	}, 
	// 	lv7: {
	// 		damage: mk1.damage.lv7 * 1.2,
	// 		upgradeCost: 1500000,
	// 		upgradeTime: 1260,
	// 		sellingPrice: 166000
	// 	}, 
	// 	lv8: {
	// 		damage: mk1.damage.lv8 * 1.2,
	// 		upgradeCost: 3000000,
	// 		upgradeTime: 1440,
	// 		sellingPrice: 306000
	// 	}, 
	// 	lv9: {
	// 		damage: mk1.damage.lv9 * 1.2,
	// 		upgradeCost: 5000000,
	// 		upgradeTime: 1860,
	// 		sellingPrice: 606000
	// 	}, 
	// 	lv10: {
	// 		damage: mk1.damage.lv10 * 1.2,
	// 		upgradeCost: 8000000,
	// 		upgradeTime: 2520,
	// 		sellingPrice: 1006000
	// 	}, 
	// 	lv11: {
	// 		damage: mk1.damage.lv11 * 1.2,
	// 		upgradeCost: 13000000,
	// 		upgradeTime: 60,
	// 		sellingPrice: 1606000
	// 	}, 
	// 	lv12: {
	// 		damage: mk1.damage.lv12 * 1.2,
	// 		upgradeCost: 0,
	// 		upgradeTime: 0,
	// 		sellingPrice: 2606000
	// 	}			
};
	
var punisherTMk2 = {
	mk2: {}
};

punisherTMk2.mk2 = function() {
	for (var i = 0; i <= 12; i++) {
		punisherTMk2.mk2 = {
			"lv"[i]: punisherT.mk1.lv[i];
		}
	}
};

console.log(punisherTMk2.mk2.lv1);