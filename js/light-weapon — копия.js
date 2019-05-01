'use strict';

// Файл отвечает за инфо о легких орудиях

(function () {

    window.light = {};

    window.light.weapons = 'Punisher;;1;1;LIGHT;Kinetic;Straight;500;160;220.00;43780;19,71;10;x2;10000;4000.00;0D 0H 05M;;/' +
        'Punisher;;1;2;LIGHT;Kinetic;Straight;500;180;220.00;43780;19,71;10;x2;20000;6000.00;0D 0H 30M;;/' +
        'Punisher;;1;3;LIGHT;Kinetic;Straight;500;200;220.00;43780;19,71;10;x2;40000;8000.00;0D 1H 00M;;/' +
        'Punisher;;1;4;LIGHT;Kinetic;Straight;500;220;220.00;43780;19,71;10;x2;200000;12000.00;0D 4H 00M;;/' +
        'Punisher;;1;5;LIGHT;Kinetic;Straight;500;240;220.00;43780;19,71;10;x2;400000;44000.00;0D 8H 00M;;/' +
        'Punisher;;1;6;LIGHT;Kinetic;Straight;500;260;220.00;43780;19,71;10;x2;800000;84000.00;0D 17H 00M;;/' +
        'Punisher;;1;7;LIGHT;Kinetic;Straight;500;290;220.00;43780;19,71;10;x2;1500000;164000.00;0D 21H 00M;;/' +
        'Punisher;;1;8;LIGHT;Kinetic;Straight;500;320;220.00;43780;19,71;10;x2;3000000;304000.00;1D 0H 00M;;/' +
        'Punisher;;1;9;LIGHT;Kinetic;Straight;500;350;220.00;43780;19,71;10;x2;5000000;604000.00;1D 7H 00M;;/' +
        'Punisher;;1;10;LIGHT;Kinetic;Straight;500;390;220.00;43780;19,71;10;x2;8000000;1004000.00;1D 18H 00M;;/' +
        'Punisher;;1;11;LIGHT;Kinetic;Straight;500;430;220.00;43780;19,71;10;x2;13000000;1604000.00;2D 9H 00M;;/' +
        'Punisher;;1;12;LIGHT;Kinetic;Straight;500;470;220.00;43780;19,71;10;x2;0;2604000.00;0D 0H 00M;;/' +
        'Punisher MK2;;2;1;LIGHT;Kinetic;Straight;500;192;220.00;43780;19,71;10;x2;10000;2804000.00;0D 0H 05M;;/' +
        'Punisher MK2;;2;2;LIGHT;Kinetic;Straight;500;216;220.00;43780;19,71;10;x2;20000;2806000.00;0D 0H 30M;;/' +
        'Punisher MK2;;2;3;LIGHT;Kinetic;Straight;500;240;220.00;43780;19,71;10;x2;40000;2808000.00;0D 1H 00M;;/' +
        'Punisher MK2;;2;4;LIGHT;Kinetic;Straight;500;264;220.00;43780;19,71;10;x2;200000;2812000.00;0D 4H 00M;;/' +
        'Punisher MK2;;2;5;LIGHT;Kinetic;Straight;500;288;220.00;43780;19,71;10;x2;400000;2844000.00;0D 8H 00M;;/' +
        'Punisher MK2;;2;6;LIGHT;Kinetic;Straight;500;312;220.00;43780;19,71;10;x2;800000;2884000.00;0D 17H 00M;;/' +
        'Punisher MK2;;2;7;LIGHT;Kinetic;Straight;500;348;220.00;43780;19,71;10;x2;1500000;2964000.00;0D 21H 00M;;/' +
        'Punisher MK2;;2;8;LIGHT;Kinetic;Straight;500;384;220.00;43780;19,71;10;x2;3000000;3104000.00;1D 0H 00M;;/' +
        'Punisher MK2;;2;9;LIGHT;Kinetic;Straight;500;420;220.00;43780;19,71;10;x2;5000000;3404000.00;1D 7H 00M;;/' +
        'Punisher MK2;;2;10;LIGHT;Kinetic;Straight;500;468;220.00;43780;19,71;10;x2;8000000;3804000.00;1D 18H 00M;;/' +
        'Punisher MK2;;2;11;LIGHT;Kinetic;Straight;500;516;220.00;43780;19,71;10;x2;13000000;4404000.00;2D 9H 00M;;/' +
        'Punisher MK2;;2;12;LIGHT;Kinetic;Straight;500;564;220.00;43780;19,71;10;x2;0;5404000.00;0D 0H 00M;;/%' +
        'Molot;;1;1;LIGHT;Kinetic;Straight;800;279;70.00;23833;14,84;10;x2;10000;4000.00;0D 0H 05M;;/' +
        'Molot;;1;2;LIGHT;Kinetic;Straight;800;303;70.00;23833;14,84;10;x2;20000;6000.00;0D 0H 30M;;/' +
        'Molot;;1;3;LIGHT;Kinetic;Straight;800;327;70.00;23833;14,84;10;x2;40000;8000.00;0D 1H 00M;;/' +
        'Molot;;1;4;LIGHT;Kinetic;Straight;800;363;70.00;23833;14,84;10;x2;200000;12000.00;0D 4H 00M;;/' +
        'Molot;;1;5;LIGHT;Kinetic;Straight;800;400;70.00;23833;14,84;10;x2;400000;44000.00;0D 8H 00M;;/' +
        'Molot;;1;6;LIGHT;Kinetic;Straight;800;436;70.00;23833;14,84;10;x2;800000;84000.00;0D 17H 00M;;/' +
        'Molot;;1;7;LIGHT;Kinetic;Straight;800;484;70.00;23833;14,84;10;x2;1500000;164000.00;0D 21H 00M;;/' +
        'Molot;;1;8;LIGHT;Kinetic;Straight;800;533;70.00;23833;14,84;10;x2;3000000;304000.00;1D 0H 00M;;/' +
        'Molot;;1;9;LIGHT;Kinetic;Straight;800;581;70.00;23833;14,84;10;x2;5000000;604000.00;1D 7H 00M;;/' +
        'Molot;;1;10;LIGHT;Kinetic;Straight;800;642;70.00;23833;14,84;10;x2;8000000;1004000.00;1D 18H 00M;;/' +
        'Molot;;1;11;LIGHT;Kinetic;Straight;800;702;70.00;23833;14,84;10;x2;13000000;1604000.00;2D 9H 00M;;/' +
        'Molot;;1;12;LIGHT;Kinetic;Straight;800;775;70.00;23833;14,84;10;x2;0;2604000.00;0D 0H 00M;;/' +
        'Molot MK2;;2;1;LIGHT;Kinetic;Straight;800;335;70.00;23833;14,84;10;x2;10000;2804000.00;0D 0H 05M;;/' +
        'Molot MK2;;2;2;LIGHT;Kinetic;Straight;800;363;70.00;23833;14,84;10;x2;20000;2806000.00;0D 0H 30M;;/' +
        'Molot MK2;;2;3;LIGHT;Kinetic;Straight;800;392;70.00;23833;14,84;10;x2;40000;2808000.00;0D 1H 00M;;/' +
        'Molot MK2;;2;4;LIGHT;Kinetic;Straight;800;436;70.00;23833;14,84;10;x2;200000;2812000.00;0D 4H 00M;;/' +
        'Molot MK2;;2;5;LIGHT;Kinetic;Straight;800;480;70.00;23833;14,84;10;x2;400000;2844000.00;0D 8H 00M;;/' +
        'Molot MK2;;2;6;LIGHT;Kinetic;Straight;800;523;70.00;23833;14,84;10;x2;800000;2884000.00;0D 17H 00M;;/' +
        'Molot MK2;;2;7;LIGHT;Kinetic;Straight;800;581;70.00;23833;14,84;10;x2;1500000;2964000.00;0D 21H 00M;;/' +
        'Molot MK2;;2;8;LIGHT;Kinetic;Straight;800;640;70.00;23833;14,84;10;x2;3000000;3104000.00;1D 0H 00M;;/' +
        'Molot MK2;;2;9;LIGHT;Kinetic;Straight;800;698;70.00;23833;14,84;10;x2;5000000;3404000.00;1D 7H 00M;;/' +
        'Molot MK2;;2;10;LIGHT;Kinetic;Straight;800;771;70.00;23833;14,84;10;x2;8000000;3804000.00;1D 18H 00M;;/' +
        'Molot MK2;;2;11;LIGHT;Kinetic;Straight;800;843;70.00;23833;14,84;10;x2;13000000;4404000.00;2D 9H 00M;;/' +
        'Molot MK2;;2;12;LIGHT;Kinetic;Straight;800;930;70.00;23833;14,84;10;x2;0;5404000.00;0D 0H 00M;;/%' +
        'Spiral;;1;1;LIGHT;Explosive;Homing;600;920;3.00;3.00;0;12;;10000;4000.00;0D 0H 05M;;/' +
        'Spiral;;1;2;LIGHT;Explosive;Homing;600;1010;3.00;3.00;0;12;;20000;6000.00;0D 0H 30M;;/' +
        'Spiral;;1;3;LIGHT;Explosive;Homing;600;1110;3.00;3.00;0;12;;40000;8000.00;0D 1H 00M;;/' +
        'Spiral;;1;4;LIGHT;Explosive;Homing;600;1220;3.00;3.00;0;12;;200000;12000.00;0D 4H 00M;;/' +
        'Spiral;;1;5;LIGHT;Explosive;Homing;600;1340;3.00;3.00;0;12;;400000;44000.00;0D 8H 00M;;/' +
        'Spiral;;1;6;LIGHT;Explosive;Homing;600;1470;3.00;3.00;0;12;;800000;84000.00;0D 17H 00M;;/' +
        'Spiral;;1;7;LIGHT;Explosive;Homing;600;1610;3.00;3.00;0;12;;1500000;164000.00;0D 21H 00M;;/' +
        'Spiral;;1;8;LIGHT;Explosive;Homing;600;1770;3.00;3.00;0;12;;3000000;304000.00;1D 0H 00M;;/' +
        'Spiral;;1;9;LIGHT;Explosive;Homing;600;1940;3.00;3.00;0;12;;5000000;604000.00;1D 7H 00M;;/' +
        'Spiral;;1;10;LIGHT;Explosive;Homing;600;2130;3.00;3.00;0;12;;8000000;1004000.00;1D 18H 00M;;/' +
        'Spiral;;1;11;LIGHT;Explosive;Homing;600;2340;3.00;3.00;0;12;;13000000;1604000.00;2D 9H 00M;;/' +
        'Spiral;;1;12;LIGHT;Explosive;Homing;600;2570;3.00;3.00;0;12;;0;2604000.00;0D 0H 00M;;/' +
        'Spiral MK2;;2;1;LIGHT;Explosive;Homing;600;1104;3.00;3.00;0;12;;10000;2804000.00;0D 0H 05M;;/' +
        'Spiral MK2;;2;2;LIGHT;Explosive;Homing;600;1212;3.00;3.00;0;12;;20000;2806000.00;0D 0H 30M;;/' +
        'Spiral MK2;;2;3;LIGHT;Explosive;Homing;600;1332;3.00;3.00;0;12;;40000;2808000.00;0D 1H 00M;;/' +
        'Spiral MK2;;2;4;LIGHT;Explosive;Homing;600;1464;3.00;3.00;0;12;;200000;2812000.00;0D 4H 00M;;/' +
        'Spiral MK2;;2;5;LIGHT;Explosive;Homing;600;1608;3.00;3.00;0;12;;400000;2844000.00;0D 8H 00M;;/' +
        'Spiral MK2;;2;6;LIGHT;Explosive;Homing;600;1764;3.00;3.00;0;12;;800000;2884000.00;0D 17H 00M;;/' +
        'Spiral MK2;;2;7;LIGHT;Explosive;Homing;600;1932;3.00;3.00;0;12;;1500000;2964000.00;0D 21H 00M;;/' +
        'Spiral MK2;;2;8;LIGHT;Explosive;Homing;600;2124;3.00;3.00;0;12;;3000000;3104000.00;1D 0H 00M;;/' +
        'Spiral MK2;;2;9;LIGHT;Explosive;Homing;600;2328;3.00;3.00;0;12;;5000000;3404000.00;1D 7H 00M;;/' +
        'Spiral MK2;;2;10;LIGHT;Explosive;Homing;600;2556;3.00;3.00;0;12;;8000000;3804000.00;1D 18H 00M;;/' +
        'Spiral MK2;;2;11;LIGHT;Explosive;Homing;600;2808;3.00;3.00;0;12;;13000000;4404000.00;2D 9H 00M;;/' +
        'Spiral MK2;;2;12;LIGHT;Explosive;Homing;600;3084;3.00;3.00;0;12;;0;5404000.00;0D 0H 00M;;/%' +
        'Aphid;;1;5;LIGHT;Explosive;Homing;350;9350;8.00;8.00;0;10;;400000;300000.00;0D 8H 00M;;/' +
        'Aphid;;1;6;LIGHT;Explosive;Homing;350;10270;8.00;8.00;0;10;;800000;380000.00;0D 17H 00M;;/' +
        'Aphid;;1;7;LIGHT;Explosive;Homing;350;11260;8.00;8.00;0;10;;1500000;460000.00;0D 21H 00M;;/' +
        'Aphid;;1;8;LIGHT;Explosive;Homing;350;12400;8.00;8.00;0;10;;3000000;600000.00;1D 0H 00M;;/' +
        'Aphid;;1;9;LIGHT;Explosive;Homing;350;13610;8.00;8.00;0;10;;5000000;900000.00;1D 7H 00M;;/' +
        'Aphid;;1;10;LIGHT;Explosive;Homing;350;14980;8.00;8.00;0;10;;8000000;1300000.00;1D 18H 00M;;/' +
        'Aphid;;1;11;LIGHT;Explosive;Homing;350;16500;8.00;8.00;0;10;;13000000;1900000.00;2D 9H 00M;;/' +
        'Aphid;;1;12;LIGHT;Explosive;Homing;350;18100;8.00;8.00;0;10;;0;2900000.00;0D 0H 00M;;/' +
        'Aphid MK2;;2;1;LIGHT;Explosive;Homing;350;7680;8.00;8.00;0;10;;10000;3100000.00;0D 0H 05M;;/' +
        'Aphid MK2;;2;2;LIGHT;Explosive;Homing;350;8440;8.00;8.00;0;10;;20000;3102000.00;0D 0H 30M;;/' +
        'Aphid MK2;;2;3;LIGHT;Explosive;Homing;350;9280;8.00;8.00;0;10;;40000;3104000.00;0D 1H 00M;;/' +
        'Aphid MK2;;2;4;LIGHT;Explosive;Homing;350;10190;8.00;8.00;0;10;;200000;3108000.00;0D 4H 00M;;/' +
        'Aphid MK2;;2;5;LIGHT;Explosive;Homing;350;11230;8.00;8.00;0;10;;400000;3140000.00;0D 8H 00M;;/' +
        'Aphid MK2;;2;6;LIGHT;Explosive;Homing;350;12320;8.00;8.00;0;10;;800000;3180000.00;0D 17H 00M;;/' +
        'Aphid MK2;;2;7;LIGHT;Explosive;Homing;350;13510;8.00;8.00;0;10;;1500000;3260000.00;0D 21H 00M;;/' +
        'Aphid MK2;;2;8;LIGHT;Explosive;Homing;350;14880;8.00;8.00;0;10;;3000000;3400000.00;1D 0H 00M;;/' +
        'Aphid MK2;;2;9;LIGHT;Explosive;Homing;350;16340;8.00;8.00;0;10;;5000000;3700000.00;1D 7H 00M;;/' +
        'Aphid MK2;;2;10;LIGHT;Explosive;Homing;350;17980;8.00;8.00;0;10;;8000000;4100000.00;1D 18H 00M;;/' +
        'Aphid MK2;;2;11;LIGHT;Explosive;Homing;350;19800;8.00;8.00;0;10;;13000000;4700000.00;2D 9H 00M;;/' +
        'Aphid MK2;;2;12;LIGHT;Explosive;Homing;350;21720;8.00;8.00;0;10;;0;5700000.00;0D 0H 00M;;/%' +
        'Pinata;;1;5;LIGHT;Explosive;Straight;300;690;17.00;13455;1,58;15;;800000;58000.00;0D 16H 48M;;/' +
        'Pinata;;1;6;LIGHT;Explosive;Straight;300;760;17.00;13455;1,58;15;;1600000;138000.00;1D 9H 00M;;/' +
        'Pinata;;1;7;LIGHT;Explosive;Straight;300;830;17.00;13455;1,58;15;;3000000;218000.00;1D 18H 00M;;/' +
        'Pinata;;1;8;LIGHT;Explosive;Straight;300;910;17.00;13455;1,58;15;;6000000;358000.00;2D 2H 24M;;/' +
        'Pinata;;1;9;LIGHT;Explosive;Straight;300;1010;17.00;13455;1,58;15;;10000000;658000.00;2D 12H 00M;;/' +
        'Pinata;;1;10;LIGHT;Explosive;Straight;300;1110;17.00;13455;1,58;15;;16000000;1058000.00;3D 12H 00M;;/' +
        'Pinata;;1;11;LIGHT;Explosive;Straight;300;1220;17.00;13455;1,58;15;;26000000;1658000.00;4D 18H 00M;;/' +
        'Pinata;;1;12;LIGHT;Explosive;Straight;300;1335;17.00;13455;1,58;15;;0;2658000.00;0D 0H 00M;;/' +
        'Pinata MK2;;2;1;LIGHT;Explosive;Straight;300;580;17.00;13455;1,58;15;;20000;2858000.00;0D 0H 10M;;/' +
        'Pinata MK2;;2;2;LIGHT;Explosive;Straight;300;630;17.00;13455;1,58;15;;40000;2860000.00;0D 1H 00M;;/' +
        'Pinata MK2;;2;3;LIGHT;Explosive;Straight;300;690;17.00;13455;1,58;15;;80000;2862000.00;0D 2H 00M;;/' +
        'Pinata MK2;;2;4;LIGHT;Explosive;Straight;300;760;17.00;13455;1,58;15;;400000;2866000.00;0D 8H 00M;;/' +
        'Pinata MK2;;2;5;LIGHT;Explosive;Straight;300;830;17.00;13455;1,58;15;;800000;2898000.00;0D 16H 48M;;/' +
        'Pinata MK2;;2;6;LIGHT;Explosive;Straight;300;910;17.00;13455;1,58;15;;1600000;2938000.00;1D 9H 00M;;/' +
        'Pinata MK2;;2;7;LIGHT;Explosive;Straight;300;1000;17.00;13455;1,58;15;;3000000;3018000.00;1D 18H 00M;;/' +
        'Pinata MK2;;2;8;LIGHT;Explosive;Straight;300;1100;17.00;13455;1,58;15;;6000000;3158000.00;2D 2H 24M;;/' +
        'Pinata MK2;;2;9;LIGHT;Explosive;Straight;300;1210;17.00;13455;1,58;15;;10000000;3458000.00;2D 12H 00M;;/' +
        'Pinata MK2;;2;10;LIGHT;Explosive;Straight;300;1330;17.00;13455;1,58;15;;16000000;3858000.00;3D 12H 00M;;/' +
        'Pinata MK2;;2;11;LIGHT;Explosive;Straight;300;1460;17.00;13455;1,58;15;;26000000;4458000.00;4D 18H 00M;;/' +
        'Pinata MK2;;2;12;LIGHT;Explosive;Straight;300;1600;17.00;13455;1,58;15;;0;5458000.00;0D 0H 00M;;/%' +
        'Pin;;1;5;LIGHT;Explosive;Straight;500;1420;4.00;2.00;1,5;12;;400000;58000.00;0D 8H 00M;;/' +
        'Pin;;1;6;LIGHT;Explosive;Straight;500;1560;4.00;2.00;1,5;12;;800000;138000.00;0D 17H 00M;;/' +
        'Pin;;1;7;LIGHT;Explosive;Straight;500;1710;4.00;2.00;1,5;12;;1500000;218000.00;0D 21H 00M;;/' +
        'Pin;;1;8;LIGHT;Explosive;Straight;500;1880;4.00;2.00;1,5;12;;3000000;358000.00;1D 0H 00M;;/' +
        'Pin;;1;9;LIGHT;Explosive;Straight;500;2070;4.00;2.00;1,5;12;;5000000;658000.00;1D 7H 00M;;/' +
        'Pin;;1;10;LIGHT;Explosive;Straight;500;2280;4.00;2.00;1,5;12;;8000000;1058000.00;1D 18H 00M;;/' +
        'Pin;;1;11;LIGHT;Explosive;Straight;500;2510;4.00;2.00;1,5;12;;13000000;1658000.00;2D 9H 00M;;/' +
        'Pin;;1;12;LIGHT;Explosive;Straight;500;2760;4.00;2.00;1,5;12;;0;2658000.00;0D 0H 00M;;/' +
        'Pin MK2;;2;1;LIGHT;Explosive;Straight;500;1160;4.00;2.00;1,5;12;;10000;2858000.00;0D 0H 05M;;/' +
        'Pin MK2;;2;2;LIGHT;Explosive;Straight;500;1280;4.00;2.00;1,5;12;;20000;2860000.00;0D 0H 30M;;/' +
        'Pin MK2;;2;3;LIGHT;Explosive;Straight;500;1410;4.00;2.00;1,5;12;;40000;2862000.00;0D 1H 00M;;/' +
        'Pin MK2;;2;4;LIGHT;Explosive;Straight;500;1550;4.00;2.00;1,5;12;;200000;2866000.00;0D 4H 00M;;/' +
        'Pin MK2;;2;5;LIGHT;Explosive;Straight;500;1704;4.00;2.00;1,5;12;;400000;2898000.00;0D 8H 00M;;/' +
        'Pin MK2;;2;6;LIGHT;Explosive;Straight;500;1872;4.00;2.00;1,5;12;;800000;2938000.00;0D 17H 00M;;/' +
        'Pin MK2;;2;7;LIGHT;Explosive;Straight;500;2052;4.00;2.00;1,5;12;;1500000;3018000.00;0D 21H 00M;;/' +
        'Pin MK2;;2;8;LIGHT;Explosive;Straight;500;2256;4.00;2.00;1,5;12;;3000000;3158000.00;1D 0H 00M;;/' +
        'Pin MK2;;2;9;LIGHT;Explosive;Straight;500;2484;4.00;2.00;1,5;12;;5000000;3458000.00;1D 7H 00M;;/' +
        'Pin MK2;;2;10;LIGHT;Explosive;Straight;500;2736;4.00;2.00;1,5;12;;8000000;3858000.00;1D 18H 00M;;/' +
        'Pin MK2;;2;11;LIGHT;Explosive;Straight;500;3012;4.00;2.00;1,5;12;;13000000;4458000.00;2D 9H 00M;;/' +
        'Pin MK2;;2;12;LIGHT;Explosive;Straight;500;3312;4.00;2.00;1,5;12;;0;5458000.00;0D 0H 00M;;/%' +
        'Gekko;;1;5;LIGHT;Energy;Straight;1100;1570;30.00;10.00;3,8;11;;400000;300000.00;0D 8H 00M;;/' +
        'Gekko;;1;6;LIGHT;Energy;Straight;1100;1720;30.00;10.00;3,8;11;;800000;380000.00;0D 17H 00M;;/' +
        'Gekko;;1;7;LIGHT;Energy;Straight;1100;1890;30.00;10.00;3,8;11;;1500000;460000.00;0D 21H 00M;;/' +
        'Gekko;;1;8;LIGHT;Energy;Straight;1100;2080;30.00;10.00;3,8;11;;3000000;600000.00;1D 0H 00M;;/' +
        'Gekko;;1;9;LIGHT;Energy;Straight;1100;2290;30.00;10.00;3,8;11;;5000000;900000.00;1D 7H 00M;;/' +
        'Gekko;;1;10;LIGHT;Energy;Straight;1100;2520;30.00;10.00;3,8;11;;8000000;1300000.00;1D 18H 00M;;/' +
        'Gekko;;1;11;LIGHT;Energy;Straight;1100;2770;30.00;10.00;3,8;11;;13000000;1900000.00;2D 9H 00M;;/' +
        'Gekko;;1;12;LIGHT;Energy;Straight;1100;3040;30.00;10.00;3,8;11;;0;2900000.00;0D 0H 00M;;/' +
        'Gekko MK2;;2;1;LIGHT;Energy;Straight;1100;1340;30.00;10.00;3,8;11;;10000;3100000.00;0D 0H 05M;;/' +
        'Gekko MK2;;2;2;LIGHT;Energy;Straight;1100;1460;30.00;10.00;3,8;11;;20000;3102000.00;0D 0H 30M;;/' +
        'Gekko MK2;;2;3;LIGHT;Energy;Straight;1100;1590;30.00;10.00;3,8;11;;40000;3104000.00;0D 1H 00M;;/' +
        'Gekko MK2;;2;4;LIGHT;Energy;Straight;1100;1730;30.00;10.00;3,8;11;;200000;3108000.00;0D 4H 00M;;/' +
        'Gekko MK2;;2;5;LIGHT;Energy;Straight;1100;1884;30.00;10.00;3,8;11;;400000;3140000.00;0D 8H 00M;;/' +
        'Gekko MK2;;2;6;LIGHT;Energy;Straight;1100;2064;30.00;10.00;3,8;11;;800000;3180000.00;0D 17H 00M;;/' +
        'Gekko MK2;;2;7;LIGHT;Energy;Straight;1100;2268;30.00;10.00;3,8;11;;1500000;3260000.00;0D 21H 00M;;/' +
        'Gekko MK2;;2;8;LIGHT;Energy;Straight;1100;2496;30.00;10.00;3,8;11;;3000000;3400000.00;1D 0H 00M;;/' +
        'Gekko MK2;;2;9;LIGHT;Energy;Straight;1100;2748;30.00;10.00;3,8;11;;5000000;3700000.00;1D 7H 00M;;/' +
        'Gekko MK2;;2;10;LIGHT;Energy;Straight;1100;3024;30.00;10.00;3,8;11;;8000000;4100000.00;1D 18H 00M;;/' +
        'Gekko MK2;;2;11;LIGHT;Energy;Straight;1100;3324;30.00;10.00;3,8;11;;13000000;4700000.00;2D 9H 00M;;/' +
        'Gekko MK2;;2;12;LIGHT;Energy;Straight;1100;3648;30.00;10.00;3,8;11;;0;5700000.00;0D 0H 00M;;/%' +
        'Noricum;;1;5;LIGHT;Explosive;Artillery;1100;610;14.00;1.00;0;15;;800000;58000.00;0D 16H 48M;;/' +
        'Noricum;;1;6;LIGHT;Explosive;Artillery;1100;670;14.00;1.00;0;15;;1600000;138000.00;1D 9H 00M;;/' +
        'Noricum;;1;7;LIGHT;Explosive;Artillery;1100;736;14.00;1.00;0;15;;3000000;218000.00;1D 18H 00M;;/' +
        'Noricum;;1;8;LIGHT;Explosive;Artillery;1100;809;14.00;1.00;0;15;;6000000;358000.00;2D 2H 24M;;/' +
        'Noricum;;1;9;LIGHT;Explosive;Artillery;1100;889;14.00;1.00;0;15;;10000000;658000.00;2D 12H 00M;;/' +
        'Noricum;;1;10;LIGHT;Explosive;Artillery;1100;977;14.00;1.00;0;15;;16000000;1058000.00;3D 12H 00M;;/' +
        'Noricum;;1;11;LIGHT;Explosive;Artillery;1100;1074;14.00;1.00;0;15;;26000000;1658000.00;4D 18H 00M;;/' +
        'Noricum;;1;12;LIGHT;Explosive;Artillery;1100;1180;14.00;1.00;0;15;;0;2658000.00;0D 0H 00M;;/' +
        'Noricum MK2;;2;1;LIGHT;Explosive;Artillery;1100;502;14.00;1.00;0;15;;20000;2858000.00;0D 0H 10M;;/' +
        'Noricum MK2;;2;2;LIGHT;Explosive;Artillery;1100;551;14.00;1.00;0;15;;40000;2860000.00;0D 1H 00M;;/' +
        'Noricum MK2;;2;3;LIGHT;Explosive;Artillery;1100;606;14.00;1.00;0;15;;80000;2862000.00;0D 2H 00M;;/' +
        'Noricum MK2;;2;4;LIGHT;Explosive;Artillery;1100;666;14.00;1.00;0;15;;400000;2866000.00;0D 8H 00M;;/' +
        'Noricum MK2;;2;5;LIGHT;Explosive;Artillery;1100;732;14.00;1.00;0;15;;800000;2898000.00;0D 16H 48M;;/' +
        'Noricum MK2;;2;6;LIGHT;Explosive;Artillery;1100;804;14.00;1.00;0;15;;1600000;2938000.00;1D 9H 00M;;/' +
        'Noricum MK2;;2;7;LIGHT;Explosive;Artillery;1100;884;14.00;1.00;0;15;;3000000;3018000.00;1D 18H 00M;;/' +
        'Noricum MK2;;2;8;LIGHT;Explosive;Artillery;1100;971;14.00;1.00;0;15;;6000000;3158000.00;2D 2H 24M;;/' +
        'Noricum MK2;;2;9;LIGHT;Explosive;Artillery;1100;1067;14.00;1.00;0;15;;10000000;3458000.00;2D 12H 00M;;/' +
        'Noricum MK2;;2;10;LIGHT;Explosive;Artillery;1100;1173;14.00;1.00;0;15;;16000000;3858000.00;3D 12H 00M;;/' +
        'Noricum MK2;;2;11;LIGHT;Explosive;Artillery;1100;1289;14.00;1.00;0;15;;26000000;4458000.00;4D 18H 00M;;/' +
        'Noricum MK2;;2;12;LIGHT;Explosive;Artillery;1100;1416;14.00;1.00;0;15;;0;5458000.00;0D 0H 00M;;/%' +
        'Gust;;1;1;LIGHT;Kinetic;Straight;500;1670;9.00;2.00;7,5;9;x2;20000;800000.00;0D 0H 10M;;/' +
        'Gust;;1;2;LIGHT;Kinetic;Straight;500;1840;9.00;2.00;7,5;9;x2;40000;804000.00;0D 1H 00M;;/' +
        'Gust;;1;3;LIGHT;Kinetic;Straight;500;2020;9.00;2.00;7,5;9;x2;80000;808000.00;0D 2H 00M;;/' +
        'Gust;;1;4;LIGHT;Kinetic;Straight;500;2220;9.00;2.00;7,5;9;x2;400000;816000.00;0D 8H 00M;;/' +
        'Gust;;1;5;LIGHT;Kinetic;Straight;500;2440;9.00;2.00;7,5;9;x2;800000;880000.00;0D 16H 48M;;/' +
        'Gust;;1;6;LIGHT;Kinetic;Straight;500;2680;9.00;2.00;7,5;9;x2;1600000;960000.00;1D 9H 00M;;/' +
        'Gust;;1;7;LIGHT;Kinetic;Straight;500;2950;9.00;2.00;7,5;9;x2;3000000;1120000.00;1D 18H 00M;;/' +
        'Gust;;1;8;LIGHT;Kinetic;Straight;500;3240;9.00;2.00;7,5;9;x2;6000000;1400000.00;2D 2H 24M;;/' +
        'Gust;;1;9;LIGHT;Kinetic;Straight;500;3560;9.00;2.00;7,5;9;x2;10000000;2000000.00;2D 12H 00M;;/' +
        'Gust;;1;10;LIGHT;Kinetic;Straight;500;3910;9.00;2.00;7,5;9;x2;16000000;2800000.00;3D 12H 00M;;/' +
        'Gust;;1;11;LIGHT;Kinetic;Straight;500;4300;9.00;2.00;7,5;9;x2;26000000;4000000.00;4D 18H 00M;;/' +
        'Gust;;1;12;LIGHT;Kinetic;Straight;500;4725;9.00;2.00;7,5;9;x2;0;6000000.00;0D 0H 00M;;/' +
        'Gust MK2;;2;1;LIGHT;Kinetic;Straight;500;2010;9.00;2.00;7,5;9;x2;20000;6200000.00;0D 0H 10M;;/' +
        'Gust MK2;;2;2;LIGHT;Kinetic;Straight;500;2210;9.00;2.00;7,5;9;x2;40000;6204000.00;0D 1H 00M;;/' +
        'Gust MK2;;2;3;LIGHT;Kinetic;Straight;500;2430;9.00;2.00;7,5;9;x2;80000;6208000.00;0D 2H 00M;;/' +
        'Gust MK2;;2;4;LIGHT;Kinetic;Straight;500;2670;9.00;2.00;7,5;9;x2;400000;6216000.00;0D 8H 00M;;/' +
        'Gust MK2;;2;5;LIGHT;Kinetic;Straight;500;2930;9.00;2.00;7,5;9;x2;800000;6280000.00;0D 16H 48M;;/' +
        'Gust MK2;;2;6;LIGHT;Kinetic;Straight;500;3220;9.00;2.00;7,5;9;x2;1600000;6360000.00;1D 9H 00M;;/' +
        'Gust MK2;;2;7;LIGHT;Kinetic;Straight;500;3540;9.00;2.00;7,5;9;x2;3000000;6520000.00;1D 18H 00M;;/' +
        'Gust MK2;;2;8;LIGHT;Kinetic;Straight;500;3890;9.00;2.00;7,5;9;x2;6000000;6800000.00;2D 2H 24M;;/' +
        'Gust MK2;;2;9;LIGHT;Kinetic;Straight;500;4270;9.00;2.00;7,5;9;x2;10000000;7400000.00;2D 12H 00M;;/' +
        'Gust MK2;;2;10;LIGHT;Kinetic;Straight;500;4690;9.00;2.00;7,5;9;x2;16000000;8200000.00;3D 12H 00M;;/' +
        'Gust MK2;;2;11;LIGHT;Kinetic;Straight;500;5160;9.00;2.00;7,5;9;x2;26000000;9400000.00;4D 18H 00M;;/' +
        'Gust MK2;;2;12;LIGHT;Kinetic;Straight;500;5670;9.00;2.00;0;9;x2;0;11400000.00;0D 0H 00M;;/%' +
        'Arbalest;;1;1;LIGHT;Energy;Straight;1100;1860;1.00;1.00;0;6;;20000;600000.00;0D 0H 10M;;/' +
        'Arbalest;;1;2;LIGHT;Energy;Straight;1100;2020;1.00;1.00;0;6;;40000;604000.00;0D 1H 00M;;/' +
        'Arbalest;;1;3;LIGHT;Energy;Straight;1100;2250;1.00;1.00;0;6;;80000;608000.00;0D 2H 00M;;/' +
        'Arbalest;;1;4;LIGHT;Energy;Straight;1100;2480;1.00;1.00;0;6;;400000;616000.00;0D 8H 00M;;/' +
        'Arbalest;;1;5;LIGHT;Energy;Straight;1100;2720;1.00;1.00;0;6;;800000;680000.00;0D 16H 48M;;/' +
        'Arbalest;;1;6;LIGHT;Energy;Straight;1100;3030;1.00;1.00;0;6;;1600000;760000.00;1D 9H 00M;;/' +
        'Arbalest;;1;7;LIGHT;Energy;Straight;1100;3340;1.00;1.00;0;6;;3000000;920000.00;1D 18H 00M;;/' +
        'Arbalest;;1;8;LIGHT;Energy;Straight;1100;3650;1.00;1.00;0;6;;6000000;1200000.00;2D 2H 24M;;/' +
        'Arbalest;;1;9;LIGHT;Energy;Straight;1100;4030;1.00;1.00;0;6;;10000000;1800000.00;2D 12H 00M;;/' +
        'Arbalest;;1;10;LIGHT;Energy;Straight;1100;4420;1.00;1.00;0;6;;16000000;2600000.00;3D 12H 00M;;/' +
        'Arbalest;;1;11;LIGHT;Energy;Straight;1100;4890;1.00;1.00;0;6;;26000000;3800000.00;4D 18H 00M;;/' +
        'Arbalest;;1;12;LIGHT;Energy;Straight;1100;5400;1.00;1.00;0;6;;0;5800000.00;0D 0H 00M;;/' +
        'Arbalest MK2;;2;1;LIGHT;Energy;Straight;1100;2230;1.00;1.00;0;6;;20000;6000000.00;0D 0H 10M;;/' +
        'Arbalest MK2;;2;2;LIGHT;Energy;Straight;1100;2420;1.00;1.00;0;6;;40000;6004000.00;0D 1H 00M;;/' +
        'Arbalest MK2;;2;3;LIGHT;Energy;Straight;1100;2700;1.00;1.00;0;6;;80000;6008000.00;0D 2H 00M;;/' +
        'Arbalest MK2;;2;4;LIGHT;Energy;Straight;1100;2980;1.00;1.00;0;6;;400000;6016000.00;0D 8H 00M;;/' +
        'Arbalest MK2;;2;5;LIGHT;Energy;Straight;1100;3260;1.00;1.00;0;6;;800000;6080000.00;0D 16H 48M;;/' +
        'Arbalest MK2;;2;6;LIGHT;Energy;Straight;1100;3630;1.00;1.00;0;6;;1600000;6160000.00;1D 9H 00M;;/' +
        'Arbalest MK2;;2;7;LIGHT;Energy;Straight;1100;4000;1.00;1.00;0;6;;3000000;6320000.00;1D 18H 00M;;/' +
        'Arbalest MK2;;2;8;LIGHT;Energy;Straight;1100;4380;1.00;1.00;0;6;;6000000;6600000.00;2D 2H 24M;;/' +
        'Arbalest MK2;;2;9;LIGHT;Energy;Straight;1100;4840;1.00;1.00;0;6;;10000000;7200000.00;2D 12H 00M;;/' +
        'Arbalest MK2;;2;10;LIGHT;Energy;Straight;1100;5310;1.00;1.00;0;6;;16000000;8000000.00;3D 12H 00M;;/' +
        'Arbalest MK2;;2;11;LIGHT;Energy;Straight;1100;5870;1.00;1.00;0;6;;26000000;9200000.00;4D 18H 00M;;/' +
        'Arbalest MK2;;2;12;LIGHT;Energy;Straight;1100;6480;1.00;1.00;0;6;;0;11200000.00;0D 0H 00M;;/%' +
        'Magnum;;1;1;LIGHT;Energy;Straight;350;870;1.00;29952;0;1;;10000;400000.00;0D 0H 05M;;/' +
        'Magnum;;1;2;LIGHT;Energy;Straight;350;950;1.00;29952;0;1;;20000;402000.00;0D 0H 30M;;/' +
        'Magnum;;1;3;LIGHT;Energy;Straight;350;1050;1.00;29952;0;1;;40000;404000.00;0D 1H 00M;;/' +
        'Magnum;;1;4;LIGHT;Energy;Straight;350;1160;1.00;29952;0;1;;200000;408000.00;0D 4H 00M;;/' +
        'Magnum;;1;5;LIGHT;Energy;Straight;350;1280;1.00;29952;0;1;;400000;440000.00;0D 8H 00M;;/' +
        'Magnum;;1;6;LIGHT;Energy;Straight;350;1400;1.00;29952;0;1;;800000;480000.00;0D 17H 00M;;/' +
        'Magnum;;1;7;LIGHT;Energy;Straight;350;1530;1.00;29952;0;1;;1500000;560000.00;0D 21H 00M;;/' +
        'Magnum;;1;8;LIGHT;Energy;Straight;350;1690;1.00;29952;0;1;;3000000;700000.00;1D 0H 00M;;/' +
        'Magnum;;1;9;LIGHT;Energy;Straight;350;1860;1.00;29952;0;1;;5000000;1000000.00;1D 7H 00M;;/' +
        'Magnum;;1;10;LIGHT;Energy;Straight;350;2040;1.00;29952;0;1;;8000000;1400000.00;1D 18H 00M;;/' +
        'Magnum;;1;11;LIGHT;Energy;Straight;350;2240;1.00;29952;0;1;;13000000;2000000.00;2D 9H 00M;;/' +
        'Magnum;;1;12;LIGHT;Energy;Straight;350;2460;1.00;29952;0;1;;0;3000000.00;0D 0H 00M;;/' +
        'Magnum MK2;;2;1;LIGHT;Energy;Straight;350;1040;1.00;29952;0;1;;10000;3200000.00;0D 0H 05M;;/' +
        'Magnum MK2;;2;2;LIGHT;Energy;Straight;350;1140;1.00;29952;0;1;;20000;3202000.00;0D 0H 30M;;/' +
        'Magnum MK2;;2;3;LIGHT;Energy;Straight;350;1260;1.00;29952;0;1;;40000;3204000.00;0D 1H 00M;;/' +
        'Magnum MK2;;2;4;LIGHT;Energy;Straight;350;1390;1.00;29952;0;1;;200000;3208000.00;0D 4H 00M;;/' +
        'Magnum MK2;;2;5;LIGHT;Energy;Straight;350;1530;1.00;29952;0;1;;400000;3240000.00;0D 8H 00M;;/' +
        'Magnum MK2;;2;6;LIGHT;Energy;Straight;350;1680;1.00;29952;0;1;;800000;3280000.00;0D 17H 00M;;/' +
        'Magnum MK2;;2;7;LIGHT;Energy;Straight;350;1840;1.00;29952;0;1;;1500000;3360000.00;0D 21H 00M;;/' +
        'Magnum MK2;;2;8;LIGHT;Energy;Straight;350;2030;1.00;29952;0;1;;3000000;3500000.00;1D 0H 00M;;/' +
        'Magnum MK2;;2;9;LIGHT;Energy;Straight;350;2230;1.00;29952;0;1;;5000000;3800000.00;1D 7H 00M;;/' +
        'Magnum MK2;;2;10;LIGHT;Energy;Straight;350;2450;1.00;29952;0;1;;8000000;4200000.00;1D 18H 00M;;/' +
        'Magnum MK2;;2;11;LIGHT;Energy;Straight;350;2690;1.00;29952;0;1;;13000000;4800000.00;2D 9H 00M;;/' +
        'Magnum MK2;;2;12;LIGHT;Energy;Straight;350;2950;1.00;29952;0;1;;0;5800000.00;0D 0H 00M;;/%' +
        'Spark;;1;1;LIGHT;Energy;Homing;600;1370;100.00;10.00;10;5;;100000;1500000.00;0D 3H 30M;;/' +
        'Spark;;1;2;LIGHT;Energy;Homing;600;1510;100.00;10.00;10;5;;200000;1520000.00;0D 6H 00M;;/' +
        'Spark;;1;3;LIGHT;Energy;Homing;600;1650;100.00;10.00;10;5;;400000;1540000.00;0D 12H 00M;;/' +
        'Spark;;1;4;LIGHT;Energy;Homing;600;1810;100.00;10.00;10;5;;2000000;1580000.00;0D 18H 00M;;/' +
        'Spark;;1;5;LIGHT;Energy;Homing;600;1990;100.00;10.00;10;5;;3000000;1900000.00;1D 0H 00M;;/' +
        'Spark;;1;6;LIGHT;Energy;Homing;600;2190;100.00;10.00;10;5;;4000000;2100000.00;2D 0H 00M;;/' +
        'Spark;;1;7;LIGHT;Energy;Homing;600;2400;100.00;10.00;10;5;;8000000;2300000.00;3D 0H 00M;;/' +
        'Spark;;1;8;LIGHT;Energy;Homing;600;2640;100.00;10.00;10;5;;13000000;3100000.00;4D 0H 00M;;/' +
        'Spark;;1;9;LIGHT;Energy;Homing;600;2900;100.00;10.00;10;5;;25000000;4100000.00;5D 0H 00M;;/' +
        'Spark;;1;10;LIGHT;Energy;Homing;600;3180;100.00;10.00;10;5;;35000000;6500000.00;6D 0H 00M;;/' +
        'Spark;;1;11;LIGHT;Energy;Homing;600;3500;100.00;10.00;10;5;;45000000;8500000.00;7D 0H 00M;;/' +
        'Spark;;1;12;LIGHT;Energy;Homing;600;3850;100.00;10.00;10;5;;0;10500000.00;0D 0H 00M;;/' +
        'Spark MK2;;2;1;LIGHT;Energy;Homing;600;1640;100.00;10.00;10;5;;100000;10700000.00;0D 3H 30M;;/' +
        'Spark MK2;;2;2;LIGHT;Energy;Homing;600;1810;100.00;10.00;10;5;;200000;10720000.00;0D 6H 00M;;/' +
        'Spark MK2;;2;3;LIGHT;Energy;Homing;600;1980;100.00;10.00;10;5;;400000;10740000.00;0D 12H 00M;;/' +
        'Spark MK2;;2;4;LIGHT;Energy;Homing;600;2170;100.00;10.00;10;5;;2000000;10780000.00;0D 18H 00M;;/' +
        'Spark MK2;;2;5;LIGHT;Energy;Homing;600;2390;100.00;10.00;10;5;;3000000;11100000.00;1D 0H 00M;;/' +
        'Spark MK2;;2;6;LIGHT;Energy;Homing;600;2620;100.00;10.00;10;5;;4000000;11300000.00;2D 0H 00M;;/' +
        'Spark MK2;;2;7;LIGHT;Energy;Homing;600;2880;100.00;10.00;10;5;;8000000;11500000.00;3D 0H 00M;;/' +
        'Spark MK2;;2;8;LIGHT;Energy;Homing;600;3170;100.00;10.00;10;5;;13000000;12300000.00;4D 0H 00M;;/' +
        'Spark MK2;;2;9;LIGHT;Energy;Homing;600;3480;100.00;10.00;10;5;;25000000;13300000.00;5D 0H 00M;;/' +
        'Spark MK2;;2;10;LIGHT;Energy;Homing;600;3820;100.00;10.00;10;5;;35000000;15700000.00;6D 0H 00M;;/' +
        'Spark MK2;;2;11;LIGHT;Energy;Homing;600;4200;100.00;10.00;10;5;;45000000;17700000.00;7D 0H 00M;;/' +
        'Spark MK2;;2;12;LIGHT;Energy;Homing;600;4620;100.00;10.00;10;5;;0;19700000.00;0D 0H 00M;;/%' +
        'Shredder;;1;1;LIGHT;Energy;Straight;500;354;40.00;18598;4;3;;100000;2000000.00;0D 3H 30M;;5/' +
        'Shredder;;1;2;LIGHT;Energy;Straight;500;387;40.00;18598;4;3;;200000;2020000.00;0D 6H 00M;;5/' +
        'Shredder;;1;3;LIGHT;Energy;Straight;500;430;40.00;18598;4;3;;400000;2040000.00;0D 12H 00M;;5/' +
        'Shredder;;1;4;LIGHT;Energy;Straight;500;473;40.00;18598;4;3;;2000000;2080000.00;0D 18H 00M;;5/' +
        'Shredder;;1;5;LIGHT;Energy;Straight;500;516;40.00;18598;4;3;;3000000;2600000.00;1D 0H 00M;;5/' +
        'Shredder;;1;6;LIGHT;Energy;Straight;500;569;40.00;18598;4;3;;4000000;2600000.00;2D 0H 00M;;5/' +
        'Shredder;;1;7;LIGHT;Energy;Straight;500;624;40.00;18598;4;3;;8000000;2800000.00;3D 0H 00M;;5/' +
        'Shredder;;1;8;LIGHT;Energy;Straight;500;688;40.00;18598;4;3;;13000000;3600000.00;4D 0H 00M;;5/' +
        'Shredder;;1;9;LIGHT;Energy;Straight;500;753;40.00;18598;4;3;;25000000;4600000.00;5D 0H 00M;;5/' +
        'Shredder;;1;10;LIGHT;Energy;Straight;500;827;40.00;18598;4;3;;35000000;7000000.00;6D 0H 00M;;5/' +
        'Shredder;;1;11;LIGHT;Energy;Straight;500;913;40.00;18598;4;3;;45000000;9000000.00;7D 0H 00M;;5/' +
        'Shredder;;1;12;LIGHT;Energy;Straight;500;1005;40.00;18598;4;3;;0;11000000.00;0D 0H 00M;;5/' +
        'Shredder MK2;;2;1;LIGHT;Energy;Straight;500;425;40.00;18598;4;3;;100000;11020000.00;0D 3H 30M;;5/' +
        'Shredder MK2;;2;2;LIGHT;Energy;Straight;500;465;40.00;18598;4;3;;200000;11020000.00;0D 6H 00M;;5/' +
        'Shredder MK2;;2;3;LIGHT;Energy;Straight;500;516;40.00;18598;4;3;;400000;11040000.00;0D 12H 00M;;5/' +
        'Shredder MK2;;2;4;LIGHT;Energy;Straight;500;567;40.00;18598;4;3;;2000000;11080000.00;0D 18H 00M;;5/' +
        'Shredder MK2;;2;5;LIGHT;Energy;Straight;500;619;40.00;18598;4;3;;3000000;11400000.00;1D 0H 00M;;5/' +
        'Shredder MK2;;2;6;LIGHT;Energy;Straight;500;683;40.00;18598;4;3;;4000000;11600000.00;2D 0H 00M;;5/' +
        'Shredder MK2;;2;7;LIGHT;Energy;Straight;500;748;40.00;18598;4;3;;8000000;11800000.00;3D 0H 00M;;5/' +
        'Shredder MK2;;2;8;LIGHT;Energy;Straight;500;826;40.00;18598;4;3;;13000000;12600000.00;4D 0H 00M;;5/' +
        'Shredder MK2;;2;9;LIGHT;Energy;Straight;500;903;40.00;18598;4;3;;25000000;13600000.00;5D 0H 00M;;5/' +
        'Shredder MK2;;2;10;LIGHT;Energy;Straight;500;993;40.00;18598;4;3;;35000000;16000000.00;6D 0H 00M;;5/' +
        'Shredder MK2;;2;11;LIGHT;Energy;Straight;500;1097;40.00;18598;4;3;;45000000;18000000.00;7D 0H 00M;;5/' +
        'Shredder MK2;;2;12;LIGHT;Energy;Straight;500;1206;40.00;18598;4;3;;0;20000000.00;0D 0H 00M;;5/%' +
        'Halo;;1;1;LIGHT;Energy;Straight;500;2150;5.00;2.00;5;5;;100000;2000000.00;0D 3H 30M;;5/' +
        'Halo;;1;2;LIGHT;Energy;Straight;500;2350;5.00;2.00;5;5;;200000;2020000.00;0D 6H 00M;;5/' +
        'Halo;;1;3;LIGHT;Energy;Straight;500;2590;5.00;2.00;5;5;;400000;2040000.00;0D 12H 00M;;5/' +
        'Halo;;1;4;LIGHT;Energy;Straight;500;2850;5.00;2.00;5;5;;2000000;2080000.00;0D 18H 00M;;5/' +
        'Halo;;1;5;LIGHT;Energy;Straight;500;3120;5.00;2.00;5;5;;3000000;2600000.00;1D 0H 00M;;5/' +
        'Halo;;1;6;LIGHT;Energy;Straight;500;3430;5.00;2.00;5;5;;4000000;2600000.00;2D 0H 00M;;5/' +
        'Halo;;1;7;LIGHT;Energy;Straight;500;3770;5.00;2.00;5;5;;8000000;2800000.00;3D 0H 00M;;5/' +
        'Halo;;1;8;LIGHT;Energy;Straight;500;4150;5.00;2.00;5;5;;13000000;3600000.00;4D 0H 00M;;5/' +
        'Halo;;1;9;LIGHT;Energy;Straight;500;4550;5.00;2.00;5;5;;25000000;4600000.00;5D 0H 00M;;5/' +
        'Halo;;1;10;LIGHT;Energy;Straight;500;5010;5.00;2.00;5;5;;35000000;7000000.00;6D 0H 00M;;5/' +
        'Halo;;1;11;LIGHT;Energy;Straight;500;5510;5.00;2.00;5;5;;45000000;9000000.00;7D 0H 00M;;5/' +
        'Halo;;1;12;LIGHT;Energy;Straight;500;6050;5.00;2.00;5;5;;0;11000000.00;0D 0H 00M;;5/' +
        'Halo MK2;;2;1;LIGHT;Energy;Straight;500;2570;5.00;2.00;5;5;;100000;11020000.00;0D 3H 30M;;5/' +
        'Halo MK2;;2;2;LIGHT;Energy;Straight;500;2830;5.00;2.00;5;5;;200000;11020000.00;0D 6H 00M;;5/' +
        'Halo MK2;;2;3;LIGHT;Energy;Straight;500;3100;5.00;2.00;5;5;;400000;11040000.00;0D 12H 00M;;5/' +
        'Halo MK2;;2;4;LIGHT;Energy;Straight;500;3410;5.00;2.00;5;5;;2000000;11080000.00;0D 18H 00M;;5/' +
        'Halo MK2;;2;5;LIGHT;Energy;Straight;500;3750;5.00;2.00;5;5;;3000000;11400000.00;1D 0H 00M;;5/' +
        'Halo MK2;;2;6;LIGHT;Energy;Straight;500;4130;5.00;2.00;5;5;;4000000;11600000.00;2D 0H 00M;;5/' +
        'Halo MK2;;2;7;LIGHT;Energy;Straight;500;4530;5.00;2.00;5;5;;8000000;11800000;3D 0H 00M;;5/' +
        'Halo MK2;;2;8;LIGHT;Energy;Straight;500;4980;5.00;2.00;5;5;;13000000;12600000;4D 0H 00M;;5/' +
        'Halo MK2;;2;9;LIGHT;Energy;Straight;500;5470;5.00;2.00;5;5;;25000000;13600000;5D 0H 00M;;5/' +
        'Halo MK2;;2;10;LIGHT;Energy;Straight;500;6020;5.00;2.00;5;5;;35000000;16000000;6D 0H 00M;;5/' +
        'Halo MK2;;2;11;LIGHT;Energy;Straight;500;6610;5.00;2.00;5;5;;45000000;18000000;7D 0H 00M;;5/' +
        'Halo MK2;;2;12;LIGHT;Energy;Straight;500;7260;5.00;2.00;5;5;;0;20000000;0D 0H 00M;;5/%' +
        'Sting;;1;1;LIGHT;Kinetic;Straight;600;440;5.00;5.00;0.4;3;x2;20000;1000000.0;0D 0H 10M;200;5/' +
        'Sting;;1;2;LIGHT;Kinetic;Straight;600;483;5.00;5.00;0.4;3;x2;40000;1014000.0;0D 1H 00M;225;5/' +
        'Sting;;1;3;LIGHT;Kinetic;Straight;600;530;5.00;5.00;0.4;3;x2;80000;1020000.0;0D 2H 00M;245;5/' +
        'Sting;;1;4;LIGHT;Kinetic;Straight;600;583;5.00;5.00;0.4;3;x2;400000;1040000.0;0D 8H 00M;270;5/' +
        'Sting;;1;5;LIGHT;Kinetic;Straight;600;640;5.00;5.00;0.4;3;x2;800000;1150000.0;0D 16H 48M;300;5/' +
        'Sting;;1;6;LIGHT;Kinetic;Straight;600;703;5.00;5.00;0.4;3;x2;1600000;1200000.0;1D 9H 00M;325;5/' +
        'Sting;;1;7;LIGHT;Kinetic;Straight;600;774;5.00;5.00;0.4;3;x2;3000000;1400000.0;1D 18H 00M;355;5/' +
        'Sting;;1;8;LIGHT;Kinetic;Straight;600;850;5.00;5.00;0.4;3;x2;6000000;1900000.0;2D 2H 24M;395;5/' +
        'Sting;;1;9;LIGHT;Kinetic;Straight;600;934;5.00;5.00;0.4;3;x2;10000000;2700000.0;2D 12H 00M;430;5/' +
        'Sting;;1;10;LIGHT;Kinetic;Straight;600;1026;5.00;5.00;0.4;3;x2;16000000;4600000.0;3D 12H 00M;475;5/' +
        'Sting;;1;11;LIGHT;Kinetic;Straight;600;1128;5.00;5.00;0.4;3;x2;26000000;6200000.0;4D 18H 00M;520;5/' +
        'Sting;;1;12;LIGHT;Kinetic;Straight;600;1239;5.00;5.00;0.4;3;x2;0;8000000.0;0D 0H 00M;570;5/' +
        'Sting MK2;;2;1;LIGHT;Kinetic;Straight;600;528;5.00;5.00;0.4;3;x2;20000;8200000.0;0D 0H 10M;245;5/' +
        'Sting MK2;;2;2;LIGHT;Kinetic;Straight;600;580;5.00;5.00;0.4;3;x2;40000;8214000.0;0D 1H 00M;270;5/' +
        'Sting MK2;;2;3;LIGHT;Kinetic;Straight;600;636;5.00;5.00;0.4;3;x2;80000;8220000.0;0D 2H 00M;290;5/' +
        'Sting MK2;;2;4;LIGHT;Kinetic;Straight;600;700;5.00;5.00;0.4;3;x2;400000;8240000.0;0D 8H 00M;320;5/' +
        'Sting MK2;;2;5;LIGHT;Kinetic;Straight;600;768;5.00;5.00;0.4;3;x2;800000;8350000.0;0D 16H 48M;355;5/' +
        'Sting MK2;;2;6;LIGHT;Kinetic;Straight;600;844;5.00;5.00;0.4;3;x2;1600000;8400000.0;1D 9H 00M;390;5/' +
        'Sting MK2;;2;7;LIGHT;Kinetic;Straight;600;929;5.00;5.00;0.4;3;x2;3000000;8600000.0;1D 18H 00M;430;5/' +
        'Sting MK2;;2;8;LIGHT;Kinetic;Straight;600;1020;5.00;5.00;0.4;3;x2;6000000;9100000.0;2D 2H 24M;470;5/' +
        'Sting MK2;;2;9;LIGHT;Kinetic;Straight;600;1121;5.00;5.00;0.4;3;x2;10000000;9900000.0;2D 12H 00M;515;5/' +
        'Sting MK2;;2;10;LIGHT;Kinetic;Straight;600;1231;5.00;5.00;0.4;3;x2;16000000;11800000.0;3D 12H 00M;565;5/' +
        'Sting MK2;;2;11;LIGHT;Kinetic;Straight;600;1354;5.00;5.00;0.4;3;x2;26000000;13400000.0;4D 18H 00M;625;5/' +
        'Sting MK2;;2;12;LIGHT;Kinetic;Straight;600;1487;5.00;5.00;0.4;3;x2;0;15200000.0;0D 0H 00M;685;5/%' +
        'Ecu;;1;3;LIGHT;;;;;;;;;;40000;10000;0D 1H 00M;;/' +
        'Ecu;;1;4;LIGHT;;;;;;;;;;200000;18000;0D 4H 00M;;/' +
        'Ecu;;1;5;LIGHT;;;;;;;;;;400000;50000;0D 8H 00M;;/' +
        'Ecu;;1;6;LIGHT;;;;;;;;;;800000;90000;0D 17H 00M;;/' +
        'Ecu;;1;7;LIGHT;;;;;;;;;;1500000;170000;0D 21H 00M;;/' +
        'Ecu;;1;8;LIGHT;;;;;;;;;;3000000;310000;1D 1H 00M;;/' +
        'Ecu;;1;9;LIGHT;;;;;;;;;;5000000;610000;1D 7H 00M;;/' +
        'Ecu;;1;10;LIGHT;;;;;;;;;;8000000;1010000;1D 18H 00M;;/' +
        'Ecu;;1;11;LIGHT;;;;;;;;;;13000000;1610000;2D 9H 00M;;/' +
        'Ecu;;1;12;LIGHT;;;;;;;;;;0;2610000;0D 0H 00M;;/' +
        'Ecu MK2;;2;1;LIGHT;;;;;;;;;;10000;2810000;0D 0H 05M;;/' +
        'Ecu MK2;;2;2;LIGHT;;;;;;;;;;20000;2812000;0D 0H 30M;;/' +
        'Ecu MK2;;2;3;LIGHT;;;;;;;;;;40000;2814000;0D 1H 00M;;/' +
        'Ecu MK2;;2;4;LIGHT;;;;;;;;;;200000;2818000;0D 4H 00M;;/' +
        'Ecu MK2;;2;5;LIGHT;;;;;;;;;;400000;2850000;0D 8H 00M;;/' +
        'Ecu MK2;;2;6;LIGHT;;;;;;;;;;800000;2890000;0D 17H 00M;;/' +
        'Ecu MK2;;2;7;LIGHT;;;;;;;;;;1500000;2970000;0D 21H 00M;;/' +
        'Ecu MK2;;2;8;LIGHT;;;;;;;;;;3000000;3110000;1D 1H 00M;;/' +
        'Ecu MK2;;2;9;LIGHT;;;;;;;;;;5000000;3410000;1D 7H 00M;;/' +
        'Ecu MK2;;2;10;LIGHT;;;;;;;;;;8000000;3810000;1D 18H 00M;;/' +
        'Ecu MK2;;2;11;LIGHT;;;;;;;;;;13000000;4410000;2D 9H 00M;;/' +
        'Ecu MK2;;2;12;LIGHT;;;;;;;;;;0;5410000;0D 0H 00M;;';

})();

