'use strict';

// Файл отвечает за инфо о средних орудиях

(function () {

    window.medium = {};
    
    window.medium.weapons = 'Punisher T;;1;1;MEDIUM;Kinetic;Straight;500;260;220;43780;19,71;10.00;x2;10000;6000;0D 0H 05M;;/' +
        'Punisher T;;1;2;MEDIUM;Kinetic;Straight;500;290;220;43780;19,71;10.00;x2;20000;8000;0D 0H 30M;;/' +
        'Punisher T;;1;3;MEDIUM;Kinetic;Straight;500;320;220;43780;19,71;10.00;x2;40000;10000;0D 1H 00M;;/' +
        'Punisher T;;1;4;MEDIUM;Kinetic;Straight;500;350;220;43780;19,71;10.00;x2;200000;14000;0D 4H 00M;;/' +
        'Punisher T;;1;5;MEDIUM;Kinetic;Straight;500;390;220;43780;19,71;10.00;x2;400000;46000;0D 8H 00M;;/' +
        'Punisher T;;1;6;MEDIUM;Kinetic;Straight;500;430;220;43780;19,71;10.00;x2;800000;86000;0D 17H 00M;;/' +
        'Punisher T;;1;7;MEDIUM;Kinetic;Straight;500;470;220;43780;19,71;10.00;x2;1500000;166000;0D 21H 00M;;/' +
        'Punisher T;;1;8;MEDIUM;Kinetic;Straight;500;520;220;43780;19,71;10.00;x2;3000000;306000;1D 0H 00M;;/' +
        'Punisher T;;1;9;MEDIUM;Kinetic;Straight;500;570;220;43780;19,71;10.00;x2;5000000;606000;1D 7H 00M;;/' +
        'Punisher T;;1;10;MEDIUM;Kinetic;Straight;500;630;220;43780;19,71;10.00;x2;8000000;1006000;1D 18H 00M;;/' +
        'Punisher T;;1;11;MEDIUM;Kinetic;Straight;500;690;220;43780;19,71;10.00;x2;13000000;1606000;2D 9H 00M;;/' +
        'Punisher T;;1;12;MEDIUM;Kinetic;Straight;500;760;220;43780;19,71;10.00;x2;0;2606000;0D 0H 00M;;/' +
        'Punisher T MK2;;2;1;MEDIUM;Kinetic;Straight;500;312;220;43780;19,71;10.00;x2;10000;2806000;0D 0H 05M;;/' +
        'Punisher T MK2;;2;2;MEDIUM;Kinetic;Straight;500;348;220;43780;19,71;10.00;x2;20000;2808000;0D 0H 30M;;/' +
        'Punisher T MK2;;2;3;MEDIUM;Kinetic;Straight;500;384;220;43780;19,71;10.00;x2;40000;2810000;0D 1H 00M;;/' +
        'Punisher T MK2;;2;4;MEDIUM;Kinetic;Straight;500;420;220;43780;19,71;10.00;x2;200000;2814000;0D 4H 00M;;/' +
        'Punisher T MK2;;2;5;MEDIUM;Kinetic;Straight;500;468;220;43780;19,71;10.00;x2;400000;2846000;0D 8H 00M;;/' +
        'Punisher T MK2;;2;6;MEDIUM;Kinetic;Straight;500;516;220;43780;19,71;10.00;x2;800000;2886000;0D 17H 00M;;/' +
        'Punisher T MK2;;2;7;MEDIUM;Kinetic;Straight;500;564;220;43780;19,71;10.00;x2;1500000;2966000;0D 21H 00M;;/' +
        'Punisher T MK2;;2;8;MEDIUM;Kinetic;Straight;500;624;220;43780;19,71;10.00;x2;3000000;3106000;1D 0H 00M;;/' +
        'Punisher T MK2;;2;9;MEDIUM;Kinetic;Straight;500;684;220;43780;19,71;10.00;x2;5000000;3406000;1D 7H 00M;;/' +
        'Punisher T MK2;;2;10;MEDIUM;Kinetic;Straight;500;756;220;43780;19,71;10.00;x2;8000000;3806000;1D 18H 00M;;/' +
        'Punisher T MK2;;2;11;MEDIUM;Kinetic;Straight;500;828;220;43780;19,71;10.00;x2;13000000;4406000;2D 9H 00M;;/' +
        'Punisher T MK2;;2;12;MEDIUM;Kinetic;Straight;500;912;220;43780;19,71;10.00;x2;0;5406000;0D 0H 00M;;/%' +
        'Molot T;;1;1;MEDIUM;Kinetic;Straight;800;420;70;23833;14,84;10.00;x2;10000;6000;0D 0H 05M;;/' +
        'Molot T;;1;2;MEDIUM;Kinetic;Straight;800;460;70;23833;14,84;10.00;x2;20000;8000;0D 0H 30M;;/' +
        'Molot T;;1;3;MEDIUM;Kinetic;Straight;800;510;70;23833;14,84;10.00;x2;40000;10000;0D 1H 00M;;/' +
        'Molot T;;1;4;MEDIUM;Kinetic;Straight;800;550;70;23833;14,84;10.00;x2;200000;14000;0D 4H 00M;;/' +
        'Molot T;;1;5;MEDIUM;Kinetic;Straight;800;600;70;23833;14,84;10.00;x2;400000;46000;0D 8H 00M;;/' +
        'Molot T;;1;6;MEDIUM;Kinetic;Straight;800;660;70;23833;14,84;10.00;x2;800000;86000;0D 17H 00M;;/' +
        'Molot T;;1;7;MEDIUM;Kinetic;Straight;800;720;70;23833;14,84;10.00;x2;1500000;166000;0D 21H 00M;;/' +
        'Molot T;;1;8;MEDIUM;Kinetic;Straight;800;800;70;23833;14,84;10.00;x2;3000000;306000;1D 0H 00M;;/' +
        'Molot T;;1;9;MEDIUM;Kinetic;Straight;800;880;70;23833;14,84;10.00;x2;5000000;606000;1D 7H 00M;;/' +
        'Molot T;;1;10;MEDIUM;Kinetic;Straight;800;970;70;23833;14,84;10.00;x2;8000000;1006000;1D 18H 00M;;/' +
        'Molot T;;1;11;MEDIUM;Kinetic;Straight;800;1070;70;23833;14,84;10.00;x2;13000000;1606000;2D 9H 00M;;/' +
        'Molot T;;1;12;MEDIUM;Kinetic;Straight;800;1175;70;23833;14,84;10.00;x2;0;2606000;0D 0H 00M;;/' +
        'Molot T MK2;;2;1;MEDIUM;Kinetic;Straight;800;500;70;23833;14,84;10.00;x2;10000;2806000;0D 0H 05M;;/' +
        'Molot T MK2;;2;2;MEDIUM;Kinetic;Straight;800;550;70;23833;14,84;10.00;x2;20000;2808000;0D 0H 30M;;/' +
        'Molot T MK2;;2;3;MEDIUM;Kinetic;Straight;800;610;70;23833;14,84;10.00;x2;40000;2810000;0D 1H 00M;;/' +
        'Molot T MK2;;2;4;MEDIUM;Kinetic;Straight;800;660;70;23833;14,84;10.00;x2;200000;2814000;0D 4H 00M;;/' +
        'Molot T MK2;;2;5;MEDIUM;Kinetic;Straight;800;720;70;23833;14,84;10.00;x2;400000;2846000;0D 8H 00M;;/' +
        'Molot T MK2;;2;6;MEDIUM;Kinetic;Straight;800;790;70;23833;14,84;10.00;x2;800000;2886000;0D 17H 00M;;/' +
        'Molot T MK2;;2;7;MEDIUM;Kinetic;Straight;800;870;70;23833;14,84;10.00;x2;1500000;2966000;0D 21H 00M;;/' +
        'Molot T MK2;;2;8;MEDIUM;Kinetic;Straight;800;960;70;23833;14,84;10.00;x2;3000000;3106000;1D 0H 00M;;/' +
        'Molot T MK2;;2;9;MEDIUM;Kinetic;Straight;800;1050;70;23833;14,84;10.00;x2;5000000;3406000;1D 7H 00M;;/' +
        'Molot T MK2;;2;10;MEDIUM;Kinetic;Straight;800;1160;70;23833;14,84;10.00;x2;8000000;3806000;1D 18H 00M;;/' +
        'Molot T MK2;;2;11;MEDIUM;Kinetic;Straight;800;1280;70;23833;14,84;10.00;x2;13000000;4406000;2D 9H 00M;;/' +
        'Molot T MK2;;2;12;MEDIUM;Kinetic;Straight;800;1410;70;23833;14,84;10.00;x2;0;5406000;0D 0H 00M;;/%' +
        'Orkan;;1;5;MEDIUM;Explosive;Straight;300;860;32;8.33;4.5;23.00;;800000;480000;0D 16H 48M;;/' +
        'Orkan;;1;6;MEDIUM;Explosive;Straight;300;950;32;8.33;4.5;23.00;;1600000;640000;1D 9H 00M;;/' +
        'Orkan;;1;7;MEDIUM;Explosive;Straight;300;1040;32;8.33;4.5;23.00;;3000000;800000;1D 18H 00M;;/' +
        'Orkan;;1;8;MEDIUM;Explosive;Straight;300;1150;32;8.33;4.5;23.00;;6000000;1080000;2D 2H 24M;;/' +
        'Orkan;;1;9;MEDIUM;Explosive;Straight;300;1260;32;8.33;4.5;23.00;;10000000;1680000;2D 12H 00M;;/' +
        'Orkan;;1;10;MEDIUM;Explosive;Straight;300;1390;32;8.33;4.5;23.00;;16000000;2480000;3D 12H 00M;;/' +
        'Orkan;;1;11;MEDIUM;Explosive;Straight;300;1520;32;8.33;4.5;23.00;;26000000;3680000;4D 18H 00M;;/' +
        'Orkan;;1;12;MEDIUM;Explosive;Straight;300;1670;32;8.33;4.5;23.00;;0;5680000;0D 0H 00M;;/' +
        'Orkan MK2;;2;1;MEDIUM;Explosive;Straight;300;700;32;8.33;4.5;23.00;;20000;5880000;0D 0H 10M;;/' +
        'Orkan MK2;;2;2;MEDIUM;Explosive;Straight;300;770;32;8.33;4.5;23.00;;40000;5884000;0D 1H 00M;;/' +
        'Orkan MK2;;2;3;MEDIUM;Explosive;Straight;300;850;32;8.33;4.5;23.00;;80000;5888000;0D 2H 00M;;/' +
        'Orkan MK2;;2;4;MEDIUM;Explosive;Straight;300;940;32;8.33;4.5;23.00;;400000;5896000;0D 8H 00M;;/' +
        'Orkan MK2;;2;5;MEDIUM;Explosive;Straight;300;1030;32;8.33;4.5;23.00;;800000;5960000;0D 16H 48M;;/' +
        'Orkan MK2;;2;6;MEDIUM;Explosive;Straight;300;1130;32;8.33;4.5;23.00;;1600000;6040000;1D 9H 00M;;/' +
        'Orkan MK2;;2;7;MEDIUM;Explosive;Straight;300;1250;32;8.33;4.5;23.00;;3000000;6200000;1D 18H 00M;;/' +
        'Orkan MK2;;2;8;MEDIUM;Explosive;Straight;300;1380;32;8.33;4.5;23.00;;6000000;6480000;2D 2H 24M;;/' +
        'Orkan MK2;;2;9;MEDIUM;Explosive;Straight;300;1520;32;8.33;4.5;23.00;;10000000;7080000;2D 12H 00M;;/' +
        'Orkan MK2;;2;10;MEDIUM;Explosive;Straight;300;1660;32;8.33;4.5;23.00;;16000000;7880000;3D 12H 00M;;/' +
        'Orkan MK2;;2;11;MEDIUM;Explosive;Straight;300;1820;32;8.33;4.5;23.00;;26000000;9080000;4D 18H 00M;;/' +
        'Orkan MK2;;2;12;MEDIUM;Explosive;Straight;300;2000;32;8.33;4.5;23.00;;0;11080000;0D 0H 00M;;/%' +
        'Tulumbas;;1;5;MEDIUM;Explosive;Straight;500;1350;8;12875;22282;18.00;;800000;87000;0D 16H 48M;;/' +
        'Tulumbas;;1;6;MEDIUM;Explosive;Straight;500;1480;8;12875;22282;18.00;;1600000;247000;1D 9H 00M;;/' +
        'Tulumbas;;1;7;MEDIUM;Explosive;Straight;500;1630;8;12875;22282;18.00;;3000000;407000;1D 18H 00M;;/' +
        'Tulumbas;;1;8;MEDIUM;Explosive;Straight;500;1790;8;12875;22282;18.00;;6000000;687000;2D 2H 24M;;/' +
        'Tulumbas;;1;9;MEDIUM;Explosive;Straight;500;1970;8;12875;22282;18.00;;10000000;1287000;2D 12H 00M;;/' +
        'Tulumbas;;1;10;MEDIUM;Explosive;Straight;500;2170;8;12875;22282;18.00;;16000000;2087000;3D 12H 00M;;/' +
        'Tulumbas;;1;11;MEDIUM;Explosive;Straight;500;2380;8;12875;22282;18.00;;26000000;3287000;4D 18H 00M;;/' +
        'Tulumbas;;1;12;MEDIUM;Explosive;Straight;500;2610;8;12875;22282;18.00;;0;5287000;0D 0H 00M;;/' +
        'Tulumbas MK2;;2;1;MEDIUM;Explosive;Straight;500;1110;8;12875;22282;18.00;;20000;5487000;0D 0H 10M;;/' +
        'Tulumbas MK2;;2;2;MEDIUM;Explosive;Straight;500;1220;8;12875;22282;18.00;;40000;5491000;0D 1H 00M;;/' +
        'Tulumbas MK2;;2;3;MEDIUM;Explosive;Straight;500;1340;8;12875;22282;18.00;;80000;5495000;0D 2H 00M;;/' +
        'Tulumbas MK2;;2;4;MEDIUM;Explosive;Straight;500;1470;8;12875;22282;18.00;;400000;5503000;0D 8H 00M;;/' +
        'Tulumbas MK2;;2;5;MEDIUM;Explosive;Straight;500;1620;8;12875;22282;18.00;;800000;5567000;0D 16H 48M;;/' +
        'Tulumbas MK2;;2;6;MEDIUM;Explosive;Straight;500;1776;8;12875;22282;18.00;;1600000;5647000;1D 9H 00M;;/' +
        'Tulumbas MK2;;2;7;MEDIUM;Explosive;Straight;500;1956;8;12875;22282;18.00;;3000000;5807000;1D 18H 00M;;/' +
        'Tulumbas MK2;;2;8;MEDIUM;Explosive;Straight;500;2148;8;12875;22282;18.00;;6000000;6087000;2D 2H 24M;;/' +
        'Tulumbas MK2;;2;9;MEDIUM;Explosive;Straight;500;2364;8;12875;22282;18.00;;10000000;6687000;2D 12H 00M;;/' +
        'Tulumbas MK2;;2;10;MEDIUM;Explosive;Straight;500;2604;8;12875;22282;18.00;;16000000;7487000;3D 12H 00M;;/' +
        'Tulumbas MK2;;2;11;MEDIUM;Explosive;Straight;500;2856;8;12875;22282;18.00;;26000000;8687000;4D 18H 00M;;/' +
        'Tulumbas MK2;;2;12;MEDIUM;Explosive;Straight;500;3132;8;12875;22282;18.00;;0;10687000;0D 0H 00M;;/%' +
        'Taran;;1;1;MEDIUM;Energy;Straight;350;800;32;43101;27576;5.00;;20000;600000;0D 0H 10M;;/' +
        'Taran;;1;2;MEDIUM;Energy;Straight;350;880;32;43101;27576;5.00;;40000;604000;0D 1H 00M;;/' +
        'Taran;;1;3;MEDIUM;Energy;Straight;350;970;32;43101;27576;5.00;;80000;608000;0D 2H 00M;;/' +
        'Taran;;1;4;MEDIUM;Energy;Straight;350;1060;32;43101;27576;5.00;;400000;616000;0D 8H 00M;;/' +
        'Taran;;1;5;MEDIUM;Energy;Straight;350;1170;32;43101;27576;5.00;;800000;680000;0D 16H 48M;;/' +
        'Taran;;1;6;MEDIUM;Energy;Straight;350;1280;32;43101;27576;5.00;;1600000;760000;1D 9H 00M;;/' +
        'Taran;;1;7;MEDIUM;Energy;Straight;350;1410;32;43101;27576;5.00;;3000000;920000;1D 18H 00M;;/' +
        'Taran;;1;8;MEDIUM;Energy;Straight;350;1550;32;43101;27576;5.00;;6000000;1200000;2D 2H 24M;;/' +
        'Taran;;1;9;MEDIUM;Energy;Straight;350;1700;32;43101;27576;5.00;;10000000;1800000;2D 12H 00M;;/' +
        'Taran;;1;10;MEDIUM;Energy;Straight;350;1860;32;43101;27576;5.00;;16000000;2600000;3D 12H 00M;;/' +
        'Taran;;1;11;MEDIUM;Energy;Straight;350;2050;32;43101;27576;5.00;;26000000;3800000;4D 18H 00M;;/' +
        'Taran;;1;12;MEDIUM;Energy;Straight;350;2250;32;43101;27576;5.00;;0;5800000;0D 0H 00M;;/' +
        'Taran MK2;;2;1;MEDIUM;Energy;Straight;350;960;32;43101;27576;5.00;;20000;6000000;0D 0H 10M;;/' +
        'Taran MK2;;2;2;MEDIUM;Energy;Straight;350;1050;32;43101;27576;5.00;;40000;6004000;0D 1H 00M;;/' +
        'Taran MK2;;2;3;MEDIUM;Energy;Straight;350;1160;32;43101;27576;5.00;;80000;6008000;0D 2H 00M;;/' +
        'Taran MK2;;2;4;MEDIUM;Energy;Straight;350;1280;32;43101;27576;5.00;;400000;6016000;0D 8H 00M;;/' +
        'Taran MK2;;2;5;MEDIUM;Energy;Straight;350;1400;32;43101;27576;5.00;;800000;6080000;0D 16H 48M;;/' +
        'Taran MK2;;2;6;MEDIUM;Energy;Straight;350;1540;32;43101;27576;5.00;;1600000;6160000;1D 9H 00M;;/' +
        'Taran MK2;;2;7;MEDIUM;Energy;Straight;350;1690;32;43101;27576;5.00;;3000000;6320000;1D 18H 00M;;/' +
        'Taran MK2;;2;8;MEDIUM;Energy;Straight;350;1860;32;43101;27576;5.00;;6000000;6600000;2D 2H 24M;;/' +
        'Taran MK2;;2;9;MEDIUM;Energy;Straight;350;2040;32;43101;27576;5.00;;10000000;7200000;2D 12H 00M;;/' +
        'Taran MK2;;2;10;MEDIUM;Energy;Straight;350;2240;32;43101;27576;5.00;;16000000;8000000;3D 12H 00M;;/' +
        'Taran MK2;;2;11;MEDIUM;Energy;Straight;350;2460;32;43101;27576;5.00;;26000000;9200000;4D 18H 00M;;/' +
        'Taran MK2;;2;12;MEDIUM;Energy;Straight;350;2700;32;43101;27576;5.00;;0;11200000;0D 0H 00M;;/%' +
        'Hydra;;1;1;MEDIUM;Explosive;Homing;600;930;6;0.91;4.00;12.00;;20000;600000;0D 0H 10M;;/' +
        'Hydra;;1;2;MEDIUM;Explosive;Homing;600;1020;6;0.91;4.00;12.00;;40000;604000;0D 1H 00M;;/' +
        'Hydra;;1;3;MEDIUM;Explosive;Homing;600;1120;6;0.91;4.00;12.00;;80000;608000;0D 2H 00M;;/' +
        'Hydra;;1;4;MEDIUM;Explosive;Homing;600;1230;6;0.91;4.00;12.00;;400000;616000;0D 8H 00M;;/' +
        'Hydra;;1;5;MEDIUM;Explosive;Homing;600;1350;6;0.91;4.00;12.00;;800000;680000;0D 16H 48M;;/' +
        'Hydra;;1;6;MEDIUM;Explosive;Homing;600;1480;6;0.91;4.00;12.00;;1600000;760000;1D 9H 00M;;/' +
        'Hydra;;1;7;MEDIUM;Explosive;Homing;600;1630;6;0.91;4.00;12.00;;3000000;920000;1D 18H 00M;;/' +
        'Hydra;;1;8;MEDIUM;Explosive;Homing;600;1790;6;0.91;4.00;12.00;;6000000;1200000;2D 2H 24M;;/' +
        'Hydra;;1;9;MEDIUM;Explosive;Homing;600;1970;6;0.91;4.00;12.00;;10000000;1800000;2D 12H 00M;;/' +
        'Hydra;;1;10;MEDIUM;Explosive;Homing;600;2170;6;0.91;4.00;12.00;;16000000;2600000;3D 12H 00M;;/' +
        'Hydra;;1;11;MEDIUM;Explosive;Homing;600;2380;6;0.91;4.00;12.00;;26000000;3800000;4D 18H 00M;;/' +
        'Hydra;;1;12;MEDIUM;Explosive;Homing;600;2620;6;0.91;4.00;12.00;;0;5800000;0D 0H 00M;;/' +
        'Hydra MK2;;2;1;MEDIUM;Explosive;Homing;600;1116;6;0.91;4.00;12.00;;20000;6000000;0D 0H 10M;;/' +
        'Hydra MK2;;2;2;MEDIUM;Explosive;Homing;600;1224;6;0.91;4.00;12.00;;40000;6004000;0D 1H 00M;;/' +
        'Hydra MK2;;2;3;MEDIUM;Explosive;Homing;600;1344;6;0.91;4.00;12.00;;80000;6008000;0D 2H 00M;;/' +
        'Hydra MK2;;2;4;MEDIUM;Explosive;Homing;600;1476;6;0.91;4.00;12.00;;400000;6016000;0D 8H 00M;;/' +
        'Hydra MK2;;2;5;MEDIUM;Explosive;Homing;600;1620;6;0.91;4.00;12.00;;800000;6080000;0D 16H 48M;;/' +
        'Hydra MK2;;2;6;MEDIUM;Explosive;Homing;600;1776;6;0.91;4.00;12.00;;1600000;6160000;1D 9H 00M;;/' +
        'Hydra MK2;;2;7;MEDIUM;Explosive;Homing;600;1956;6;0.91;4.00;12.00;;3000000;6320000;1D 18H 00M;;/' +
        'Hydra MK2;;2;8;MEDIUM;Explosive;Homing;600;2148;6;0.91;4.00;12.00;;6000000;6600000;2D 2H 24M;;/' +
        'Hydra MK2;;2;9;MEDIUM;Explosive;Homing;600;2364;6;0.91;4.00;12.00;;10000000;7200000;2D 12H 00M;;/' +
        'Hydra MK2;;2;10;MEDIUM;Explosive;Homing;600;2604;6;0.91;4.00;12.00;;16000000;8000000;3D 12H 00M;;/' +
        'Hydra MK2;;2;11;MEDIUM;Explosive;Homing;600;2856;6;0.91;4.00;12.00;;26000000;9200000;4D 18H 00M;;/' +
        'Hydra MK2;;2;12;MEDIUM;Explosive;Homing;600;3144;6;0.91;4.00;12.00;;0;11200000;0D 0H 00M;;/%' +
        'Scourge;;1;1;MEDIUM;Energy;Straight;600;1680;100;10.00;10.00;5.00;;100000;2000000;0D 3H 30M;;/' +
        'Scourge;;1;2;MEDIUM;Energy;Straight;600;1850;100;10.00;10.00;5.00;;200000;2020000;0D 6H 00M;;/' +
        'Scourge;;1;3;MEDIUM;Energy;Straight;600;2030;100;10.00;10.00;5.00;;400000;2040000;0D 12H 00M;;/' +
        'Scourge;;1;4;MEDIUM;Energy;Straight;600;2230;100;10.00;10.00;5.00;;2000000;2080000;0D 18H 00M;;/' +
        'Scourge;;1;5;MEDIUM;Energy;Straight;600;2450;100;10.00;10.00;5.00;;3000000;2400000;1D 0H 00M;;/' +
        'Scourge;;1;6;MEDIUM;Energy;Straight;600;2690;100;10.00;10.00;5.00;;4000000;2600000;2D 0H 00M;;/' +
        'Scourge;;1;7;MEDIUM;Energy;Straight;600;2950;100;10.00;10.00;5.00;;8000000;2800000;3D 0H 00M;;/' +
        'Scourge;;1;8;MEDIUM;Energy;Straight;600;3240;100;10.00;10.00;5.00;;13000000;3600000;4D 0H 00M;;/' +
        'Scourge;;1;9;MEDIUM;Energy;Straight;600;3560;100;10.00;10.00;5.00;;25000000;4600000;5D 0H 00M;;/' +
        'Scourge;;1;10;MEDIUM;Energy;Straight;600;3920;100;10.00;10.00;5.00;;35000000;7000000;6D 0H 00M;;/' +
        'Scourge;;1;11;MEDIUM;Energy;Straight;600;4300;100;10.00;10.00;5.00;;45000000;9000000;7D 0H 00M;;/' +
        'Scourge;;1;12;MEDIUM;Energy;Straight;600;4725;100;10.00;10.00;5.00;;0;11000000;0D 0H 00M;;/' +
        'Scourge MK2;;2;1;MEDIUM;Energy;Straight;600;2010;100;10.00;10.00;5.00;;100000;11200000;0D 3H 30M;;/' +
        'Scourge MK2;;2;2;MEDIUM;Energy;Straight;600;2220;100;10.00;10.00;5.00;;200000;11220000;0D 6H 00M;;/' +
        'Scourge MK2;;2;3;MEDIUM;Energy;Straight;600;2440;100;10.00;10.00;5.00;;400000;11240000;0D 12H 00M;;/' +
        'Scourge MK2;;2;4;MEDIUM;Energy;Straight;600;2680;100;10.00;10.00;5.00;;2000000;11280000;0D 18H 00M;;/' +
        'Scourge MK2;;2;5;MEDIUM;Energy;Straight;600;2940;100;10.00;10.00;5.00;;3000000;11600000;1D 0H 00M;;/' +
        'Scourge MK2;;2;6;MEDIUM;Energy;Straight;600;3230;100;10.00;10.00;5.00;;4000000;11800000;2D 0H 00M;;/' +
        'Scourge MK2;;2;7;MEDIUM;Energy;Straight;600;3540;100;10.00;10.00;5.00;;8000000;12000000;3D 0H 00M;;/' +
        'Scourge MK2;;2;8;MEDIUM;Energy;Straight;600;3890;100;10.00;10.00;5.00;;13000000;12800000;4D 0H 00M;;/' +
        'Scourge MK2;;2;9;MEDIUM;Energy;Straight;600;4280;100;10.00;10.00;5.00;;25000000;13800000;5D 0H 00M;;/' +
        'Scourge MK2;;2;10;MEDIUM;Energy;Straight;600;4700;100;10.00;10.00;5.00;;35000000;16200000;6D 0H 00M;;/' +
        'Scourge MK2;;2;11;MEDIUM;Energy;Straight;600;5160;100;10.00;10.00;5.00;;45000000;18200000;7D 0H 00M;;/' +
        'Scourge MK2;;2;12;MEDIUM;Energy;Straight;600;5670;100;10.00;10.00;5.00;;0;20200000;0D 0H 00M;;/%' +
        'Shocktrain;;1;1;MEDIUM;Energy;Homing;500;4760;1;1.00;0.00;10.00;;100000;5600000;0D 5H 00M;;/' +
        'Shocktrain;;1;2;MEDIUM;Energy;Homing;500;5250;1;1.00;0.00;10.00;;200000;5620000;0D 12H 00M;;/' +
        'Shocktrain;;1;3;MEDIUM;Energy;Homing;500;5810;1;1.00;0.00;10.00;;400000;5640000;1D 0H 00M;;/' +
        'Shocktrain;;1;4;MEDIUM;Energy;Homing;500;6370;1;1.00;0.00;10.00;;2000000;5680000;2D 0H 00M;;/' +
        'Shocktrain;;1;5;MEDIUM;Energy;Homing;500;7000;1;1.00;0.00;10.00;;4000000;6000000;3D 0H 00M;;/' +
        'Shocktrain;;1;6;MEDIUM;Energy;Homing;500;7630;1;1.00;0.00;10.00;;6000000;6400000;4D 0H 00M;;/' +
        'Shocktrain;;1;7;MEDIUM;Energy;Homing;500;8400;1;1.00;0.00;10.00;;11000000;6800000;5D 0H 00M;;/' +
        'Shocktrain;;1;8;MEDIUM;Energy;Homing;500;9240;1;1.00;0.00;10.00;;17000000;7800000;6D 0H 00M;;/' +
        'Shocktrain;;1;9;MEDIUM;Energy;Homing;500;10150;1;1.00;0.00;10.00;;32000000;9000000;7D 0H 00M;;/' +
        'Shocktrain;;1;10;MEDIUM;Energy;Homing;500;11130;1;1.00;0.00;10.00;;43000000;12000000;8D 0H 00M;;/' +
        'Shocktrain;;1;11;MEDIUM;Energy;Homing;500;12250;1;1.00;0.00;10.00;;55000000;14200000;9D 0H 00M;;/' +
        'Shocktrain;;1;12;MEDIUM;Energy;Homing;500;13440;1;1.00;0.00;10.00;;0;16600000;0D 0H 00M;;/' +
        'Shocktrain MK2;;2;1;MEDIUM;Energy;Homing;500;5740;1;1.00;0.00;10.00;;100000;16800000;0D 5H 00M;;/' +
        'Shocktrain MK2;;2;2;MEDIUM;Energy;Homing;500;6300;1;1.00;0.00;10.00;;200000;16820000;0D 12H 00M;;/' +
        'Shocktrain MK2;;2;3;MEDIUM;Energy;Homing;500;7000;1;1.00;0.00;10.00;;400000;16840000;1D 0H 00M;;/' +
        'Shocktrain MK2;;2;4;MEDIUM;Energy;Homing;500;7630;1;1.00;0.00;10.00;;2000000;16880000;2D 0H 00M;;/' +
        'Shocktrain MK2;;2;5;MEDIUM;Energy;Homing;500;8400;1;1.00;0.00;10.00;;4000000;17200000;3D 0H 00M;;/' +
        'Shocktrain MK2;;2;6;MEDIUM;Energy;Homing;500;9170;1;1.00;0.00;10.00;;6000000;17600000;4D 0H 00M;;/' +
        'Shocktrain MK2;;2;7;MEDIUM;Energy;Homing;500;10080;1;1.00;0.00;10.00;;11000000;18000000;5D 0H 00M;;/' +
        'Shocktrain MK2;;2;8;MEDIUM;Energy;Homing;500;11060;1;1.00;0.00;10.00;;17000000;19000000;6D 0H 00M;;/' +
        'Shocktrain MK2;;2;9;MEDIUM;Energy;Homing;500;12180;1;1.00;0.00;10.00;;32000000;20200000;7D 0H 00M;;/' +
        'Shocktrain MK2;;2;10;MEDIUM;Energy;Homing;500;13370;1;1.00;0.00;10.00;;43000000;23200000;8D 0H 00M;;/' +
        'Shocktrain MK2;;2;11;MEDIUM;Energy;Homing;500;14700;1;1.00;0.00;10.00;;55000000;25400000;9D 0H 00M;;/' +
        'Shocktrain MK2;;2;12;MEDIUM;Energy;Homing;500;16100;1;1.00;0.00;10.00;;0;27800000;0D 0H 00M;;/%' +
        'Storm;;1;1;MEDIUM;Kinetic;Straight;500;3780;8;15707;15950;11.00;x2;20000;1000000;0D 0H 10M;;/' +
        'Storm;;1;2;MEDIUM;Kinetic;Straight;500;4160;8;15707;15950;11.00;x2;40000;1004000;0D 1H 00M;;/' +
        'Storm;;1;3;MEDIUM;Kinetic;Straight;500;4570;8;15707;15950;11.00;x2;80000;1008000;0D 2H 00M;;/' +
        'Storm;;1;4;MEDIUM;Kinetic;Straight;500;5020;8;15707;15950;11.00;x2;400000;1016000;0D 8H 00M;;/' +
        'Storm;;1;5;MEDIUM;Kinetic;Straight;500;5520;8;15707;15950;11.00;x2;800000;1080000;0D 16H 48M;;/' +
        'Storm;;1;6;MEDIUM;Kinetic;Straight;500;6070;8;15707;15950;11.00;x2;1600000;1160000;1D 9H 00M;;/' +
        'Storm;;1;7;MEDIUM;Kinetic;Straight;500;6670;8;15707;15950;11.00;x2;3000000;1320000;1D 18H 00M;;/' +
        'Storm;;1;8;MEDIUM;Kinetic;Straight;500;7330;8;15707;15950;11.00;x2;6000000;1600000;2D 2H 24M;;/' +
        'Storm;;1;9;MEDIUM;Kinetic;Straight;500;8050;8;15707;15950;11.00;x2;10000000;2200000;2D 12H 00M;;/' +
        'Storm;;1;10;MEDIUM;Kinetic;Straight;500;8840;8;15707;15950;11.00;x2;16000000;3000000;3D 12H 00M;;/' +
        'Storm;;1;11;MEDIUM;Kinetic;Straight;500;9730;8;15707;15950;11.00;x2;26000000;4200000;4D 18H 00M;;/' +
        'Storm;;1;12;MEDIUM;Kinetic;Straight;500;10680;8;15707;15950;11.00;x2;0;6200000;0D 0H 00M;;/' +
        'Storm MK2;;2;1;MEDIUM;Kinetic;Straight;500;4540;8;15707;15950;11.00;x2;20000;6400000;0D 0H 10M;;/' +
        'Storm MK2;;2;2;MEDIUM;Kinetic;Straight;500;5000;8;15707;15950;11.00;x2;40000;6404000;0D 1H 00M;;/' +
        'Storm MK2;;2;3;MEDIUM;Kinetic;Straight;500;5480;8;15707;15950;11.00;x2;80000;6408000;0D 2H 00M;;/' +
        'Storm MK2;;2;4;MEDIUM;Kinetic;Straight;500;6030;8;15707;15950;11.00;x2;400000;6416000;0D 8H 00M;;/' +
        'Storm MK2;;2;5;MEDIUM;Kinetic;Straight;500;6630;8;15707;15950;11.00;x2;800000;6480000;0D 16H 48M;;/' +
        'Storm MK2;;2;6;MEDIUM;Kinetic;Straight;500;7280;8;15707;15950;11.00;x2;1600000;6560000;1D 9H 00M;;/' +
        'Storm MK2;;2;7;MEDIUM;Kinetic;Straight;500;8000;8;15707;15950;11.00;x2;3000000;6720000;1D 18H 00M;;/' +
        'Storm MK2;;2;8;MEDIUM;Kinetic;Straight;500;8790;8;15707;15950;11.00;x2;6000000;7000000;2D 2H 24M;;/' +
        'Storm MK2;;2;9;MEDIUM;Kinetic;Straight;500;9660;8;15707;15950;11.00;x2;10000000;7600000;2D 12H 00M;;/' +
        'Storm MK2;;2;10;MEDIUM;Kinetic;Straight;500;10610;8;15707;15950;11.00;x2;16000000;8400000;3D 12H 00M;;/' +
        'Storm MK2;;2;11;MEDIUM;Kinetic;Straight;500;11670;8;15707;15950;11.00;x2;26000000;9600000;4D 18H 00M;;/' +
        'Storm MK2;;2;12;MEDIUM;Kinetic;Straight;500;12820;8;15707;15950;11.00;x2;0;11600000;0D 0H 00M;;/%' +
        'Vortex;;1;1;MEDIUM;Explosive;Homing;350;1933;6;6.00;0.00;10.00;;100000;2000000;0D 3H 30M;;/' +
        'Vortex;;1;2;MEDIUM;Explosive;Homing;350;2133;6;6.00;0.00;10.00;;200000;2004000;0D 6H 00M;;/' +
        'Vortex;;1;3;MEDIUM;Explosive;Homing;350;2333;6;6.00;0.00;10.00;;400000;2007000;0D 12H 00M;;/' +
        'Vortex;;1;4;MEDIUM;Explosive;Homing;350;2566;6;6.00;0.00;10.00;;2000000;2014000;0D 18H 00M;;/' +
        'Vortex;;1;5;MEDIUM;Explosive;Homing;350;2816;6;6.00;0.00;10.00;;3000000;2072000;1D 0H 00M;;/' +
        'Vortex;;1;6;MEDIUM;Explosive;Homing;350;3100;6;6.00;0.00;10.00;;4000000;2144000;2D 0H 00M;;/' +
        'Vortex;;1;7;MEDIUM;Explosive;Homing;350;3400;6;6.00;0.00;10.00;;8000000;2288000;3D 0H 00M;;/' +
        'Vortex;;1;8;MEDIUM;Explosive;Homing;350;3733;6;6.00;0.00;10.00;;13000000;2552000;4D 0H 00M;;/' +
        'Vortex;;1;9;MEDIUM;Explosive;Homing;350;4100;6;6.00;0.00;10.00;;25000000;3080000;5D 0H 00M;;/' +
        'Vortex;;1;10;MEDIUM;Explosive;Homing;350;4500;6;6.00;0.00;10.00;;35000000;3800000;6D 0H 00M;;/' +
        'Vortex;;1;11;MEDIUM;Explosive;Homing;350;4950;6;6.00;0.00;10.00;;45000000;4880000;7D 0H 00M;;/' +
        'Vortex;;1;12;MEDIUM;Explosive;Homing;350;5450;6;6.00;0.00;10.00;;0;6680000;0D 0H 00M;;/' +
        'Vortex MK2;;2;1;MEDIUM;Explosive;Homing;350;2316;6;6.00;0.00;10.00;;100000;6880000;0D 3H 30M;;/' +
        'Vortex MK2;;2;2;MEDIUM;Explosive;Homing;350;2550;6;6.00;0.00;10.00;;200000;6884000;0D 6H 00M;;/' +
        'Vortex MK2;;2;3;MEDIUM;Explosive;Homing;350;2800;6;6.00;0.00;10.00;;400000;6887000;0D 12H 00M;;/' +
        'Vortex MK2;;2;4;MEDIUM;Explosive;Homing;350;3083;6;6.00;0.00;10.00;;2000000;6894000;0D 18H 00M;;/' +
        'Vortex MK2;;2;5;MEDIUM;Explosive;Homing;350;3383;6;6.00;0.00;10.00;;3000000;6952000;1D 0H 00M;;/' +
        'Vortex MK2;;2;6;MEDIUM;Explosive;Homing;350;3716;6;6.00;0.00;10.00;;4000000;7024000;2D 0H 00M;;/' +
        'Vortex MK2;;2;7;MEDIUM;Explosive;Homing;350;4083;6;6.00;0.00;10.00;;8000000;7168000;3D 0H 00M;;/' +
        'Vortex MK2;;2;8;MEDIUM;Explosive;Homing;350;4483;6;6.00;0.00;10.00;;13000000;7432000;4D 0H 00M;;/' +
        'Vortex MK2;;2;9;MEDIUM;Explosive;Homing;350;4933;6;6.00;0.00;10.00;;25000000;7960000;5D 0H 00M;;/' +
        'Vortex MK2;;2;10;MEDIUM;Explosive;Homing;350;5416;6;6.00;0.00;10.00;;35000000;8680000;6D 0H 00M;;/' +
        'Vortex MK2;;2;11;MEDIUM;Explosive;Homing;350;5950;6;6.00;0.00;10.00;;45000000;9760000;7D 0H 00M;;/' +
        'Vortex MK2;;2;12;MEDIUM;Explosive;Homing;350;6533;6;6.00;0.00;10.00;;0;11560000;0D 0H 00M;;/%' +
        'Ion;;1;1;MEDIUM;Energy;Homing;600;4480;10;10.00;1.00;5.00;;100000;2000000;0D 3H 30M;;/' +
        'Ion;;1;2;MEDIUM;Energy;Homing;600;4920;10;10.00;1.00;5.00;;200000;2004000;0D 6H 00M;;/' +
        'Ion;;1;3;MEDIUM;Energy;Homing;600;5410;10;10.00;1.00;5.00;;400000;2007000;0D 12H 00M;;/' +
        'Ion;;1;4;MEDIUM;Energy;Homing;600;5940;10;10.00;1.00;5.00;;2000000;2014000;0D 18H 00M;;/' +
        'Ion;;1;5;MEDIUM;Energy;Homing;600;6530;10;10.00;1.00;5.00;;3000000;2072000;1D 0H 00M;;/' +
        'Ion;;1;6;MEDIUM;Energy;Homing;600;7180;10;10.00;1.00;5.00;;4000000;2144000;2D 0H 00M;;/' +
        'Ion;;1;7;MEDIUM;Energy;Homing;600;7890;10;10.00;1.00;5.00;;8000000;2288000;3D 0H 00M;;/' +
        'Ion;;1;8;MEDIUM;Energy;Homing;600;8670;10;10.00;1.00;5.00;;13000000;2552000;4D 0H 00M;;/' +
        'Ion;;1;9;MEDIUM;Energy;Homing;600;9530;10;10.00;1.00;5.00;;25000000;3080000;5D 0H 00M;;/' +
        'Ion;;1;10;MEDIUM;Energy;Homing;600;10470;10;10.00;1.00;5.00;;35000000;3800000;6D 0H 00M;;/' +
        'Ion;;1;11;MEDIUM;Energy;Homing;600;11510;10;10.00;1.00;5.00;;45000000;4880000;7D 0H 00M;;/' +
        'Ion;;1;12;MEDIUM;Energy;Homing;600;12650;10;10.00;1.00;5.00;;0;6680000;0D 0H 00M;;/' +
        'Ion MK2;;2;1;MEDIUM;Energy;Homing;600;5380;10;10.00;1.00;5.00;;100000;6880000;0D 3H 30M;;/' +
        'Ion MK2;;2;2;MEDIUM;Energy;Homing;600;5910;10;10.00;1.00;5.00;;200000;6884000;0D 6H 00M;;/' +
        'Ion MK2;;2;3;MEDIUM;Energy;Homing;600;6490;10;10.00;1.00;5.00;;400000;6887000;0D 12H 00M;;/' +
        'Ion MK2;;2;4;MEDIUM;Energy;Homing;600;7130;10;10.00;1.00;5.00;;2000000;6894000;0D 18H 00M;;/' +
        'Ion MK2;;2;5;MEDIUM;Energy;Homing;600;7840;10;10.00;1.00;5.00;;3000000;6952000;1D 0H 00M;;/' +
        'Ion MK2;;2;6;MEDIUM;Energy;Homing;600;8620;10;10.00;1.00;5.00;;4000000;7024000;2D 0H 00M;;/' +
        'Ion MK2;;2;7;MEDIUM;Energy;Homing;600;9470;10;10.00;1.00;5.00;;8000000;7168000;3D 0H 00M;;/' +
        'Ion MK2;;2;8;MEDIUM;Energy;Homing;600;10410;10;10.00;1.00;5.00;;13000000;7432000;4D 0H 00M;;/' +
        'Ion MK2;;2;9;MEDIUM;Energy;Homing;600;11440;10;10.00;1.00;5.00;;25000000;7960000;5D 0H 00M;;/' +
        'Ion MK2;;2;10;MEDIUM;Energy;Homing;600;12570;10;10.00;1.00;5.00;;35000000;8680000;6D 0H 00M;;/' +
        'Ion MK2;;2;11;MEDIUM;Energy;Homing;600;13810;10;10.00;1.00;5.00;;45000000;9760000;7D 0H 00M;;/' +
        'Ion MK2;;2;12;MEDIUM;Energy;Homing;600;15180;10;10.00;1.00;5.00;;0;11560000;0D 0H 00M;;/%' +
        'Ballista;;1;1;MEDIUM;Energy;Straight;1100;2700;1;1.00;0.00;6.00;;20000;1000000;0D 0H 10M;;/' +
        'Ballista;;1;2;MEDIUM;Energy;Straight;1100;3000;1;1.00;0.00;6.00;;40000;1014000;0D 1H 00M;;/' +
        'Ballista;;1;3;MEDIUM;Energy;Straight;1100;3400;1;1.00;0.00;6.00;;80000;1020000;0D 2H 00M;;/' +
        'Ballista;;1;4;MEDIUM;Energy;Straight;1100;3700;1;1.00;0.00;6.00;;400000;1040000;0D 8H 00M;;/' +
        'Ballista;;1;5;MEDIUM;Energy;Straight;1100;4100;1;1.00;0.00;6.00;;800000;1150000;0D 16H 48M;;/' +
        'Ballista;;1;6;MEDIUM;Energy;Straight;1100;4400;1;1.00;0.00;6.00;;1600000;1200000;1D 9H 00M;;/' +
        'Ballista;;1;7;MEDIUM;Energy;Straight;1100;4900;1;1.00;0.00;6.00;;3000000;1400000;1D 18H 00M;;/' +
        'Ballista;;1;8;MEDIUM;Energy;Straight;1100;5400;1;1.00;0.00;6.00;;6000000;1900000;2D 2H 24M;;/' +
        'Ballista;;1;9;MEDIUM;Energy;Straight;1100;5900;1;1.00;0.00;6.00;;10000000;2700000;2D 12H 00M;;/' +
        'Ballista;;1;10;MEDIUM;Energy;Straight;1100;6500;1;1.00;0.00;6.00;;16000000;4600000;3D 12H 00M;;/' +
        'Ballista;;1;11;MEDIUM;Energy;Straight;1100;7100;1;1.00;0.00;6.00;;26000000;6200000;4D 18H 00M;;/' +
        'Ballista;;1;12;MEDIUM;Energy;Straight;1100;7800;1;1.00;0.00;6.00;;0;8000000;0D 0H 00M;;/' +
        'Ballista MK2;;2;1;MEDIUM;Energy;Straight;1100;3300;1;1.00;0.00;6.00;;20000;8200000;0D 0H 10M;;/' +
        'Ballista MK2;;2;2;MEDIUM;Energy;Straight;1100;3700;1;1.00;0.00;6.00;;40000;8214000;0D 1H 00M;;/' +
        'Ballista MK2;;2;3;MEDIUM;Energy;Straight;1100;4000;1;1.00;0.00;6.00;;80000;8220000;0D 2H 00M;;/' +
        'Ballista MK2;;2;4;MEDIUM;Energy;Straight;1100;4400;1;1.00;0.00;6.00;;400000;8240000;0D 8H 00M;;/' +
        'Ballista MK2;;2;5;MEDIUM;Energy;Straight;1100;4900;1;1.00;0.00;6.00;;800000;8350000;0D 16H 48M;;/' +
        'Ballista MK2;;2;6;MEDIUM;Energy;Straight;1100;5300;1;1.00;0.00;6.00;;1600000;8400000;1D 9H 00M;;/' +
        'Ballista MK2;;2;7;MEDIUM;Energy;Straight;1100;5900;1;1.00;0.00;6.00;;3000000;8600000;1D 18H 00M;;/' +
        'Ballista MK2;;2;8;MEDIUM;Energy;Straight;1100;6500;1;1.00;0.00;6.00;;6000000;9100000;2D 2H 24M;;/' +
        'Ballista MK2;;2;9;MEDIUM;Energy;Straight;1100;7100;1;1.00;0.00;6.00;;10000000;9900000;2D 12H 00M;;/' +
        'Ballista MK2;;2;10;MEDIUM;Energy;Straight;1100;7800;1;1.00;0.00;6.00;;16000000;11800000;3D 12H 00M;;/' +
        'Ballista MK2;;2;11;MEDIUM;Energy;Straight;1100;8500;1;1.00;0.00;6.00;;26000000;13400000;4D 18H 00M;;/' +
        'Ballista MK2;;2;12;MEDIUM;Energy;Straight;1100;9400;1;1.00;0.00;6.00;;0;15200000;0D 0H 00M;;/%' +
        'Pulsar;;1;1;MEDIUM;Energy;Straight;600;560;24;25628;7.00;5.00;;100000;3120000;0D 5H 00M;;5/' +
        'Pulsar;;1;2;MEDIUM;Energy;Straight;600;620;24;25628;7.00;5.00;;200000;3140000;0D 12H 00M;;5/' +
        'Pulsar;;1;3;MEDIUM;Energy;Straight;600;670;24;25628;7.00;5.00;;400000;3160000;1D 0H 00M;;5/' +
        'Pulsar;;1;4;MEDIUM;Energy;Straight;600;740;24;25628;7.00;5.00;;2000000;3200000;2D 0H 00M;;5/' +
        'Pulsar;;1;5;MEDIUM;Energy;Straight;600;810;24;25628;7.00;5.00;;4000000;3920000;3D 0H 00M;;5/' +
        'Pulsar;;1;6;MEDIUM;Energy;Straight;600;880;24;25628;7.00;5.00;;6000000;3920000;4D 0H 00M;;5/' +
        'Pulsar;;1;7;MEDIUM;Energy;Straight;600;970;24;25628;7.00;5.00;;11000000;4320000;5D 0H 00M;;5/' +
        'Pulsar;;1;8;MEDIUM;Energy;Straight;600;1070;24;25628;7.00;5.00;;17000000;5320000;6D 0H 00M;;5/' +
        'Pulsar;;1;9;MEDIUM;Energy;Straight;600;1170;24;25628;7.00;5.00;;32000000;6520000;7D 0H 00M;;5/' +
        'Pulsar;;1;10;MEDIUM;Energy;Straight;600;1290;24;25628;7.00;5.00;;43000000;9520000;8D 0H 00M;;5/' +
        'Pulsar;;1;11;MEDIUM;Energy;Straight;600;1410;24;25628;7.00;5.00;;55000000;11720000;9D 0H 00M;;5/' +
        'Pulsar;;1;12;MEDIUM;Energy;Straight;600;1550;24;25628;7.00;5.00;;0;14120000;0D 0H 00M;;5/' +
        'Pulsar MK2;;2;1;MEDIUM;Energy;Straight;600;670;24;25628;7.00;5.00;;100000;14140000;0D 5H 00M;;5/' +
        'Pulsar MK2;;2;2;MEDIUM;Energy;Straight;600;740;24;25628;7.00;5.00;;200000;14140000;0D 12H 00M;;5/' +
        'Pulsar MK2;;2;3;MEDIUM;Energy;Straight;600;810;24;25628;7.00;5.00;;400000;14160000;1D 0H 00M;;5/' +
        'Pulsar MK2;;2;4;MEDIUM;Energy;Straight;600;890;24;25628;7.00;5.00;;2000000;14200000;2D 0H 00M;;5/' +
        'Pulsar MK2;;2;5;MEDIUM;Energy;Straight;600;970;24;25628;7.00;5.00;;4000000;14520000;3D 0H 00M;;5/' +
        'Pulsar MK2;;2;6;MEDIUM;Energy;Straight;600;1060;24;25628;7.00;5.00;;6000000;14920000;4D 0H 00M;;5/' +
        'Pulsar MK2;;2;7;MEDIUM;Energy;Straight;600;1170;24;25628;7.00;5.00;;11000000;15320000;5D 0H 00M;;5/' +
        'Pulsar MK2;;2;8;MEDIUM;Energy;Straight;600;1290;24;25628;7.00;5.00;;17000000;16320000;6D 0H 00M;;5/' +
        'Pulsar MK2;;2;9;MEDIUM;Energy;Straight;600;1410;24;25628;7.00;5.00;;32000000;17520000;7D 0H 00M;;5/' +
        'Pulsar MK2;;2;10;MEDIUM;Energy;Straight;600;1540;24;25628;7.00;5.00;;43000000;20520000;8D 0H 00M;;5/' +
        'Pulsar MK2;;2;11;MEDIUM;Energy;Straight;600;1690;24;25628;7.00;5.00;;55000000;22720000;9D 0H 00M;;5/' +
        'Pulsar MK2;;2;12;MEDIUM;Energy;Straight;600;1860;24;25628;7.00;5.00;;0;25120000;0D 0H 00M;;5/%' +
        'Corona;;1;1;MEDIUM;Energy;Straight;500;3130;5;15707;18445;7.00;;100000;3120000;0D 5H 00M;;5/' +
        'Corona;;1;2;MEDIUM;Energy;Straight;500;3450;5;15707;18445;7.00;;200000;3140000;0D 12H 00M;;5/' +
        'Corona;;1;3;MEDIUM;Energy;Straight;500;3790;5;15707;18445;7.00;;400000;3160000;1D 0H 00M;;5/' +
        'Corona;;1;4;MEDIUM;Energy;Straight;500;4160;5;15707;18445;7.00;;2000000;3200000;2D 0H 00M;;5/' +
        'Corona;;1;5;MEDIUM;Energy;Straight;500;4570;5;15707;18445;7.00;;4000000;3920000;3D 0H 00M;;5/' +
        'Corona;;1;6;MEDIUM;Energy;Straight;500;5030;5;15707;18445;7.00;;6000000;3920000;4D 0H 00M;;5/' +
        'Corona;;1;7;MEDIUM;Energy;Straight;500;5520;5;15707;18445;7.00;;11000000;4320000;5D 0H 00M;;5/' +
        'Corona;;1;8;MEDIUM;Energy;Straight;500;6070;5;15707;18445;7.00;;17000000;5320000;6D 0H 00M;;5/' +
        'Corona;;1;9;MEDIUM;Energy;Straight;500;6670;5;15707;18445;7.00;;32000000;6520000;7D 0H 00M;;5/' +
        'Corona;;1;10;MEDIUM;Energy;Straight;500;7330;5;15707;18445;7.00;;43000000;9520000;8D 0H 00M;;5/' +
        'Corona;;1;11;MEDIUM;Energy;Straight;500;8050;5;15707;18445;7.00;;55000000;11720000;9D 0H 00M;;5/' +
        'Corona;;1;12;MEDIUM;Energy;Straight;500;8850;5;15707;18445;7.00;;0;14120000;0D 0H 00M;;5/' +
        'Corona MK2;;2;1;MEDIUM;Energy;Straight;500;3770;5;15707;18445;7.00;;100000;14140000;0D 5H 00M;;5/' +
        'Corona MK2;;2;2;MEDIUM;Energy;Straight;500;4140;5;15707;18445;7.00;;200000;14140000;0D 12H 00M;;5/' +
        'Corona MK2;;2;3;MEDIUM;Energy;Straight;500;4550;5;15707;18445;7.00;;400000;14160000;1D 0H 00M;;5/' +
        'Corona MK2;;2;4;MEDIUM;Energy;Straight;500;4990;5;15707;18445;7.00;;2000000;14200000;2D 0H 00M;;5/' +
        'Corona MK2;;2;5;MEDIUM;Energy;Straight;500;5490;5;15707;18445;7.00;;4000000;14520000;3D 0H 00M;;5/' +
        'Corona MK2;;2;6;MEDIUM;Energy;Straight;500;6020;5;15707;18445;7.00;;6000000;14920000;4D 0H 00M;;5/' +
        'Corona MK2;;2;7;MEDIUM;Energy;Straight;500;6620;5;15707;18445;7.00;;11000000;15320000;5D 0H 00M;;5/' +
        'Corona MK2;;2;8;MEDIUM;Energy;Straight;500;7290;5;15707;18445;7.00;;17000000;16320000;6D 0H 00M;;5/' +
        'Corona MK2;;2;9;MEDIUM;Energy;Straight;500;8000;5;15707;18445;7.00;;32000000;17520000;7D 0H 00M;;5/' +
        'Corona MK2;;2;10;MEDIUM;Energy;Straight;500;8800;5;15707;18445;7.00;;43000000;20520000;8D 0H 00M;;5/' +
        'Corona MK2;;2;11;MEDIUM;Energy;Straight;500;9650;5;15707;18445;7.00;;55000000;22720000;9D 0H 00M;;5/' +
        'Corona MK2;;2;12;MEDIUM;Energy;Straight;500;10620;5;15707;18445;7.00;;0;25120000;0D 0H 00M;;5/%' +
        'Wasp;;1;1;MEDIUM;Kinetic;Straight;600;1175;5;1.00;4.00;5.00;x2;100000;3120000;0D 5H 00M;645;5/' +
        'Wasp;;1;2;MEDIUM;Kinetic;Straight;600;1292;5;1.00;4.00;5.00;x2;200000;3140000;0D 12H 00M;710;5/' +
        'Wasp;;1;3;MEDIUM;Kinetic;Straight;600;1420;5;1.00;4.00;5.00;x2;400000;3160000;1D 0H 00M;780;5/' +
        'Wasp;;1;4;MEDIUM;Kinetic;Straight;600;1560;5;1.00;4.00;5.00;x2;2000000;3200000;2D 0H 00M;855;5/' +
        'Wasp;;1;5;MEDIUM;Kinetic;Straight;600;1714;5;1.00;4.00;5.00;x2;4000000;3520000;3D 0H 00M;940;5/' +
        'Wasp;;1;6;MEDIUM;Kinetic;Straight;600;1884;5;1.00;4.00;5.00;x2;6000000;3920000;4D 0H 00M;1035;5/' +
        'Wasp;;1;7;MEDIUM;Kinetic;Straight;600;2070;5;1.00;4.00;5.00;x2;11000000;4320000;5D 0H 00M;1140;5/' +
        'Wasp;;1;8;MEDIUM;Kinetic;Straight;600;2275;5;1.00;4.00;5.00;x2;17000000;5320000;6D 0H 00M;1250;5/' +
        'Wasp;;1;9;MEDIUM;Kinetic;Straight;600;2500;5;1.00;4.00;5.00;x2;32000000;6520000;7D 0H 00M;1375;5/' +
        'Wasp;;1;10;MEDIUM;Kinetic;Straight;600;2747;5;1.00;4.00;5.00;x2;43000000;9520000;8D 0H 00M;1505;5/' +
        'Wasp;;1;11;MEDIUM;Kinetic;Straight;600;3019;5;1.00;4.00;5.00;x2;55000000;11720000;9D 0H 00M;1655;5/' +
        'Wasp;;1;12;MEDIUM;Kinetic;Straight;600;3317;5;1.00;4.00;5.00;x2;0;14120000;0D 0H 00M;1820;5/' +
        'Wasp MK2;;2;1;MEDIUM;Kinetic;Straight;600;1410;5;1.00;4.00;5.00;x2;100000;14320000;0D 5H 00M;775;5/' +
        'Wasp MK2;;2;2;MEDIUM;Kinetic;Straight;600;1550;5;1.00;4.00;5.00;x2;200000;14340000;0D 12H 00M;855;5/' +
        'Wasp MK2;;2;3;MEDIUM;Kinetic;Straight;600;1704;5;1.00;4.00;5.00;x2;400000;14360000;1D 0H 00M;935;5/' +
        'Wasp MK2;;2;4;MEDIUM;Kinetic;Straight;600;1872;5;1.00;4.00;5.00;x2;2000000;14400000;2D 0H 00M;1025;5/' +
        'Wasp MK2;;2;5;MEDIUM;Kinetic;Straight;600;2057;5;1.00;4.00;5.00;x2;4000000;14720000;3D 0H 00M;1130;5/' +
        'Wasp MK2;;2;6;MEDIUM;Kinetic;Straight;600;2261;5;1.00;4.00;5.00;x2;6000000;15120000;4D 0H 00M;1240;5/' +
        'Wasp MK2;;2;7;MEDIUM;Kinetic;Straight;600;2484;5;1.00;4.00;5.00;x2;11000000;15520000;5D 0H 00M;1360;5/' +
        'Wasp MK2;;2;8;MEDIUM;Kinetic;Straight;600;2730;5;1.00;4.00;5.00;x2;17000000;16520000;6D 0H 00M;1500;5/' +
        'Wasp MK2;;2;9;MEDIUM;Kinetic;Straight;600;3000;5;1.00;4.00;5.00;x2;32000000;17720000;7D 0H 00M;1645;5/' +
        'Wasp MK2;;2;10;MEDIUM;Kinetic;Straight;600;3296;5;1.00;4.00;5.00;x2;43000000;20720000;8D 0H 00M;1810;5/' +
        'Wasp MK2;;2;11;MEDIUM;Kinetic;Straight;600;3623;5;1.00;4.00;5.00;x2;55000000;22920000;9D 0H 00M;1985;5/' +
        'Wasp MK2;;2;12;MEDIUM;Kinetic;Straight;600;3980;5;1.00;4.00;5.00;x2;0;25320000;0D 0H 00M;2185;5/%' +
        'Ecu;;1;3;MEDIUM;;;;;;;;;;40000;10000;0D 1H 00M;;/' +
        'Ecu;;1;4;MEDIUM;;;;;;;;;;200000;18000;0D 4H 00M;;/' +
        'Ecu;;1;5;MEDIUM;;;;;;;;;;400000;50000;0D 8H 00M;;/' +
        'Ecu;;1;6;MEDIUM;;;;;;;;;;800000;90000;0D 17H 00M;;/' +
        'Ecu;;1;7;MEDIUM;;;;;;;;;;1500000;170000;0D 21H 00M;;/' +
        'Ecu;;1;8;MEDIUM;;;;;;;;;;3000000;310000;1D 1H 00M;;/' +
        'Ecu;;1;9;MEDIUM;;;;;;;;;;5000000;610000;1D 7H 00M;;/' +
        'Ecu;;1;10;MEDIUM;;;;;;;;;;8000000;1010000;1D 18H 00M;;/' +
        'Ecu;;1;11;MEDIUM;;;;;;;;;;13000000;1610000;2D 9H 00M;;/' +
        'Ecu;;1;12;MEDIUM;;;;;;;;;;0;2610000;0D 0H 00M;;/' +
        'Ecu MK2;;2;1;MEDIUM;;;;;;;;;;10000;2810000;0D 0H 05M;;/' +
        'Ecu MK2;;2;2;MEDIUM;;;;;;;;;;20000;2812000;0D 0H 30M;;/' +
        'Ecu MK2;;2;3;MEDIUM;;;;;;;;;;40000;2814000;0D 1H 00M;;/' +
        'Ecu MK2;;2;4;MEDIUM;;;;;;;;;;200000;2818000;0D 4H 00M;;/' +
        'Ecu MK2;;2;5;MEDIUM;;;;;;;;;;400000;2850000;0D 8H 00M;;/' +
        'Ecu MK2;;2;6;MEDIUM;;;;;;;;;;800000;2890000;0D 17H 00M;;/' +
        'Ecu MK2;;2;7;MEDIUM;;;;;;;;;;1500000;2970000;0D 21H 00M;;/' +
        'Ecu MK2;;2;8;MEDIUM;;;;;;;;;;3000000;3110000;1D 1H 00M;;/' +
        'Ecu MK2;;2;9;MEDIUM;;;;;;;;;;5000000;3410000;1D 7H 00M;;/' +
        'Ecu MK2;;2;10;MEDIUM;;;;;;;;;;8000000;3810000;1D 18H 00M;;/' +
        'Ecu MK2;;2;11;MEDIUM;;;;;;;;;;13000000;4410000;2D 9H 00M;;/' +
        'Ecu MK2;;2;12;MEDIUM;;;;;;;;;;0;5410000;0D 0H 00M;;';

})();

