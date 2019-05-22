'use strict';

// Файл отвечает за инфо о тяжелых орудиях

(function () {

    window.heavy = {};
    /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
    window.heavy.weapons = 'Nashorn;;1;3;HEAVY;Kinetic;Straight;1100;4950;1;1.00;0.00;9.00;x2;40000;20000.00;0D 1H 00M;;;0;;;/' +
        'Nashorn;;1;4;HEAVY;Kinetic;Straight;1100;5430;1;1.00;0.00;9.00;x2;200000;36000.00;0D 4H 00M;;/' +
        'Nashorn;;1;5;HEAVY;Kinetic;Straight;1100;5970;1;1.00;0.00;9.00;x2;400000;100000.00;0D 8H 00M;;/' +
        'Nashorn;;1;6;HEAVY;Kinetic;Straight;1100;6560;1;1.00;0.00;9.00;x2;800000;180000.00;0D 17H 00M;;/' +
        'Nashorn;;1;7;HEAVY;Kinetic;Straight;1100;7200;1;1.00;0.00;9.00;x2;1500000;340000.00;0D 21H 00M;;/' +
        'Nashorn;;1;8;HEAVY;Kinetic;Straight;1100;7910;1;1.00;0.00;9.00;x2;3000000;620000.00;1D 0H 00M;;/' +
        'Nashorn;;1;9;HEAVY;Kinetic;Straight;1100;8690;1;1.00;0.00;9.00;x2;5000000;1220000.00;1D 7H 00M;;/' +
        'Nashorn;;1;10;HEAVY;Kinetic;Straight;1100;9560;1;1.00;0.00;9.00;x2;8000000;2020000.00;1D 18H 00M;;/' +
        'Nashorn;;1;11;HEAVY;Kinetic;Straight;1100;10500;1;1.00;0.00;9.00;x2;13000000;3220000.00;2D 9H 00M;;/' +
        'Nashorn;;1;12;HEAVY;Kinetic;Straight;1100;11545;1;1.00;0.00;9.00;x2;0;5220000.00;0D 0H 00M;;/' +
        'Nashorn MK2;;2;1;HEAVY;Kinetic;Straight;1100;4920;1;1.00;0.00;9.00;x2;10000;5420000.00;0D 0H 05M;;/' +
        'Nashorn MK2;;2;2;HEAVY;Kinetic;Straight;1100;5410;1;1.00;0.00;9.00;x2;20000;5424000.00;0D 0H 30M;;/' +
        'Nashorn MK2;;2;3;HEAVY;Kinetic;Straight;1100;5930;1;1.00;0.00;9.00;x2;40000;5428000.00;0D 1H 00M;;/' +
        'Nashorn MK2;;2;4;HEAVY;Kinetic;Straight;1100;6510;1;1.00;0.00;9.00;x2;200000;5436000.00;0D 4H 00M;;/' +
        'Nashorn MK2;;2;5;HEAVY;Kinetic;Straight;1100;7160;1;1.00;0.00;9.00;x2;400000;5500000.00;0D 8H 00M;;/' +
        'Nashorn MK2;;2;6;HEAVY;Kinetic;Straight;1100;7870;1;1.00;0.00;9.00;x2;800000;5580000.00;0D 17H 00M;;/' +
        'Nashorn MK2;;2;7;HEAVY;Kinetic;Straight;1100;8640;1;1.00;0.00;9.00;x2;1500000;5740000.00;0D 21H 00M;;/' +
        'Nashorn MK2;;2;8;HEAVY;Kinetic;Straight;1100;9500;1;1.00;0.00;9.00;x2;3000000;6020000.00;1D 0H 00M;;/' +
        'Nashorn MK2;;2;9;HEAVY;Kinetic;Straight;1100;10430;1;1.00;0.00;9.00;x2;5000000;6620000.00;1D 7H 00M;;/' +
        'Nashorn MK2;;2;10;HEAVY;Kinetic;Straight;1100;11470;1;1.00;0.00;9.00;x2;8000000;7420000.00;1D 18H 00M;;/' +
        'Nashorn MK2;;2;11;HEAVY;Kinetic;Straight;1100;12600;1;1.00;0.00;9.00;x2;13000000;8620000.00;2D 9H 00M;;/' +
        'Nashorn MK2;;2;12;HEAVY;Kinetic;Straight;1100;13860;1;1.00;0.00;9.00;x2;0;10620000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'KangDae;;1;5;HEAVY;Kinetic;Straight;800;5070;1;1.00;0.00;6.00;x2;800000;116000.00;0D 16H 48M;;;0;;;/' +
        'KangDae;;1;6;HEAVY;Kinetic;Straight;800;5570;1;1.00;0.00;6.00;x2;1600000;276000.00;1D 9H 00M;;/' +
        'KangDae;;1;7;HEAVY;Kinetic;Straight;800;6120;1;1.00;0.00;6.00;x2;3000000;436000.00;1D 18H 00M;;/' +
        'KangDae;;1;8;HEAVY;Kinetic;Straight;800;6720;1;1.00;0.00;6.00;x2;6000000;716000.00;2D 2H 24M;;/' +
        'KangDae;;1;9;HEAVY;Kinetic;Straight;800;7390;1;1.00;0.00;6.00;x2;10000000;1316000.00;2D 12H 00M;;/' +
        'KangDae;;1;10;HEAVY;Kinetic;Straight;800;8120;1;1.00;0.00;6.00;x2;16000000;2116000.00;3D 12H 00M;;/' +
        'KangDae;;1;11;HEAVY;Kinetic;Straight;800;8920;1;1.00;0.00;6.00;x2;26000000;3316000.00;4D 18H 00M;;/' +
        'KangDae;;1;12;HEAVY;Kinetic;Straight;800;9800;1;1.00;0.00;6.00;x2;0;5316000.00;0D 0H 00M;;/' +
        'KangDae MK2;;2;1;HEAVY;Kinetic;Straight;800;4180;1;1.00;0.00;6.00;x2;20000;5516000.00;0D 0H 10M;;/' +
        'KangDae MK2;;2;2;HEAVY;Kinetic;Straight;800;4590;1;1.00;0.00;6.00;x2;40000;5520000.00;0D 1H 00M;;/' +
        'KangDae MK2;;2;3;HEAVY;Kinetic;Straight;800;5040;1;1.00;0.00;6.00;x2;80000;5524000.00;0D 2H 00M;;/' +
        'KangDae MK2;;2;4;HEAVY;Kinetic;Straight;800;5540;1;1.00;0.00;6.00;x2;400000;5532000.00;0D 8H 00M;;/' +
        'KangDae MK2;;2;5;HEAVY;Kinetic;Straight;800;6084;1;1.00;0.00;6.00;x2;800000;5596000.00;0D 16H 48M;;/' +
        'KangDae MK2;;2;6;HEAVY;Kinetic;Straight;800;6684;1;1.00;0.00;6.00;x2;1600000;5676000.00;1D 9H 00M;;/' +
        'KangDae MK2;;2;7;HEAVY;Kinetic;Straight;800;7344;1;1.00;0.00;6.00;x2;3000000;5836000.00;1D 18H 00M;;/' +
        'KangDae MK2;;2;8;HEAVY;Kinetic;Straight;800;8064;1;1.00;0.00;6.00;x2;6000000;6116000.00;2D 2H 24M;;/' +
        'KangDae MK2;;2;9;HEAVY;Kinetic;Straight;800;8868;1;1.00;0.00;6.00;x2;10000000;6716000.00;2D 12H 00M;;/' +
        'KangDae MK2;;2;10;HEAVY;Kinetic;Straight;800;9744;1;1.00;0.00;6.00;x2;16000000;7516000.00;3D 12H 00M;;/' +
        'KangDae MK2;;2;11;HEAVY;Kinetic;Straight;800;10704;1;1.00;0.00;6.00;x2;26000000;8716000.00;4D 18H 00M;;/' +
        'KangDae MK2;;2;12;HEAVY;Kinetic;Straight;800;11760;1;1.00;0.00;6.00;x2;0;10716000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Thunder;;1;5;HEAVY;Kinetic;Straight;500;7600;5;1.00;7.00;10.00;x2;400000;116000.00;0D 8H 00M;;;1;2;4;1/' +
        'Thunder;;1;6;HEAVY;Kinetic;Straight;500;8352;5;1.00;7.00;10.00;x2;800000;276000.00;0D 17H 00M;;/' +
        'Thunder;;1;7;HEAVY;Kinetic;Straight;500;9184;5;1.00;7.00;10.00;x2;1500000;436000.00;0D 21H 00M;;/' +
        'Thunder;;1;8;HEAVY;Kinetic;Straight;500;10096;5;1.00;7.00;10.00;x2;3000000;716000.00;1D 0H 00M;;/' +
        'Thunder;;1;9;HEAVY;Kinetic;Straight;500;11088;5;1.00;7.00;10.00;x2;5000000;1316000.00;1D 7H 00M;;/' +
        'Thunder;;1;10;HEAVY;Kinetic;Straight;500;12192;5;1.00;7.00;10.00;x2;8000000;2116000.00;1D 18H 00M;;/' +
        'Thunder;;1;11;HEAVY;Kinetic;Straight;500;13392;5;1.00;7.00;10.00;x2;13000000;3316000.00;2D 9H 00M;;/' +
        'Thunder;;1;12;HEAVY;Kinetic;Straight;500;14720;5;1.00;7.00;10.00;x2;0;5316000.00;0D 0H 00M;;/' +
        'Thunder MK2;;2;1;HEAVY;Kinetic;Straight;500;6256;5;1.00;7.00;10.00;x2;10000;5516000.00;0D 0H 05M;;/' +
        'Thunder MK2;;2;2;HEAVY;Kinetic;Straight;500;6880;5;1.00;7.00;10.00;x2;20000;5520000.00;0D 0H 30M;;/' +
        'Thunder MK2;;2;3;HEAVY;Kinetic;Straight;500;7552;5;1.00;7.00;10.00;x2;40000;5524000.00;0D 1H 00M;;/' +
        'Thunder MK2;;2;4;HEAVY;Kinetic;Straight;500;8304;5;1.00;7.00;10.00;x2;200000;5532000.00;0D 4H 00M;;/' +
        'Thunder MK2;;2;5;HEAVY;Kinetic;Straight;500;9136;5;1.00;7.00;10.00;x2;400000;5596000.00;0D 8H 00M;;/' +
        'Thunder MK2;;2;6;HEAVY;Kinetic;Straight;500;10032;5;1.00;7.00;10.00;x2;800000;5676000.00;0D 17H 00M;;/' +
        'Thunder MK2;;2;7;HEAVY;Kinetic;Straight;500;11024;5;1.00;7.00;10.00;x2;1500000;5836000.00;0D 21H 00M;;/' +
        'Thunder MK2;;2;8;HEAVY;Kinetic;Straight;500;12112;5;1.00;7.00;10.00;x2;3000000;6116000.00;1D 0H 00M;;/' +
        'Thunder MK2;;2;9;HEAVY;Kinetic;Straight;500;13312;5;1.00;7.00;10.00;x2;5000000;6716000.00;1D 7H 00M;;/' +
        'Thunder MK2;;2;10;HEAVY;Kinetic;Straight;500;14624;5;1.00;7.00;10.00;x2;8000000;7516000.00;1D 18H 00M;;/' +
        'Thunder MK2;;2;11;HEAVY;Kinetic;Straight;500;16080;5;1.00;7.00;10.00;x2;13000000;8716000.00;2D 9H 00M;;/' +
        'Thunder MK2;;2;12;HEAVY;Kinetic;Straight;500;17664;5;1.00;7.00;10.00;x2;0;10716000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Zeus;;1;5;HEAVY;Energy;Homing;600;8486;1;1.00;1.00;5.00;;800000;600000.00;0D 16H 48M;;;0;;;/' +
        'Zeus;;1;6;HEAVY;Energy;Homing;600;9325;1;1.00;1.00;5.00;;1600000;800000.00;1D 9H 00M;;/' +
        'Zeus;;1;7;HEAVY;Energy;Homing;600;10247;1;1.00;1.00;5.00;;3000000;1000000.00;1D 18H 00M;;/' +
        'Zeus;;1;8;HEAVY;Energy;Homing;600;11261;1;1.00;1.00;5.00;;6000000;1500000.00;2D 2H 24M;;/' +
        'Zeus;;1;9;HEAVY;Energy;Homing;600;12375;1;1.00;1.00;5.00;;10000000;2300000.00;2D 12H 00M;;/' +
        'Zeus;;1;10;HEAVY;Energy;Homing;600;13599;1;1.00;1.00;5.00;;16000000;4200000.00;3D 12H 00M;;/' +
        'Zeus;;1;11;HEAVY;Energy;Homing;600;14944;1;1.00;1.00;5.00;;26000000;5800000.00;4D 18H 00M;;/' +
        'Zeus;;1;12;HEAVY;Energy;Homing;600;16422;1;1.00;1.00;5.00;;0;7600000.00;0D 0H 00M;;/' +
        'Zeus MK2;;2;1;HEAVY;Energy;Homing;600;6982;1;1.00;1.00;5.00;;20000;7800000.00;0D 0H 10M;;/' +
        'Zeus MK2;;2;2;HEAVY;Energy;Homing;600;7673;1;1.00;1.00;5.00;;40000;7814000.00;0D 1H 00M;;/' +
        'Zeus MK2;;2;3;HEAVY;Energy;Homing;600;8432;1;1.00;1.00;5.00;;80000;7820000.00;0D 2H 00M;;/' +
        'Zeus MK2;;2;4;HEAVY;Energy;Homing;600;9266;1;1.00;1.00;5.00;;400000;7840000.00;0D 8H 00M;;/' +
        'Zeus MK2;;2;5;HEAVY;Energy;Homing;600;10183;1;1.00;1.00;5.00;;800000;7950000.00;0D 16H 48M;;/' +
        'Zeus MK2;;2;6;HEAVY;Energy;Homing;600;11190;1;1.00;1.00;5.00;;1600000;8000000.00;1D 9H 00M;;/' +
        'Zeus MK2;;2;7;HEAVY;Energy;Homing;600;12297;1;1.00;1.00;5.00;;3000000;8200000.00;1D 18H 00M;;/' +
        'Zeus MK2;;2;8;HEAVY;Energy;Homing;600;13512;1;1.00;1.00;5.00;;6000000;8700000.00;2D 2H 24M;;/' +
        'Zeus MK2;;2;9;HEAVY;Energy;Homing;600;14849;1;1.00;1.00;5.00;;10000000;9500000.00;2D 12H 00M;;/' +
        'Zeus MK2;;2;10;HEAVY;Energy;Homing;600;16318;1;1.00;1.00;5.00;;16000000;11400000.00;3D 12H 00M;;/' +
        'Zeus MK2;;2;11;HEAVY;Energy;Homing;600;17932;1;1.00;1.00;5.00;;26000000;13000000.00;4D 18H 00M;;/' +
        'Zeus MK2;;2;12;HEAVY;Energy;Homing;600;19705;1;1.00;1.00;5.00;;0;14800000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Zenit;;1;5;HEAVY;Explosive;Artillery;1100;1344;18;0.9;16.30;15.00;;800000;116000.00;0D 16H 48M;;;0;;;/' +
        'Zenit;;1;6;HEAVY;Explosive;Artillery;1100;1476;18;0.9;16.30;15.00;;1600000;276000.00;1D 9H 00M;;/' +
        'Zenit;;1;7;HEAVY;Explosive;Artillery;1100;1622;18;0.9;16.30;15.00;;3000000;436000.00;1D 18H 00M;;/' +
        'Zenit;;1;8;HEAVY;Explosive;Artillery;1100;1783;18;0.9;16.30;15.00;;6000000;716000.00;2D 2H 24M;;/' +
        'Zenit;;1;9;HEAVY;Explosive;Artillery;1100;1959;18;0.9;16.30;15.00;;10000000;1316000.00;2D 12H 00M;;/' +
        'Zenit;;1;10;HEAVY;Explosive;Artillery;1100;2153;18;0.9;16.30;15.00;;16000000;2116000.00;3D 12H 00M;;/' +
        'Zenit;;1;11;HEAVY;Explosive;Artillery;1100;2366;18;0.9;16.30;15.00;;26000000;3316000.00;4D 18H 00M;;/' +
        'Zenit;;1;12;HEAVY;Explosive;Artillery;1100;2600;18;0.9;16.30;15.00;;0;5316000.00;0D 0H 00M;;/' +
        'Zenit MK2;;2;1;HEAVY;Explosive;Artillery;1100;1106;18;0.9;16.30;15.00;;20000;5516000.00;0D 0H 10M;;/' +
        'Zenit MK2;;2;2;HEAVY;Explosive;Artillery;1100;1215;18;0.9;16.30;15.00;;40000;5520000.00;0D 1H 00M;;/' +
        'Zenit MK2;;2;3;HEAVY;Explosive;Artillery;1100;1335;18;0.9;16.30;15.00;;80000;5524000.00;0D 2H 00M;;/' +
        'Zenit MK2;;2;4;HEAVY;Explosive;Artillery;1100;1467;18;0.9;16.30;15.00;;400000;5532000.00;0D 8H 00M;;/' +
        'Zenit MK2;;2;5;HEAVY;Explosive;Artillery;1100;1612;18;0.9;16.30;15.00;;800000;5596000.00;0D 16H 48M;;/' +
        'Zenit MK2;;2;6;HEAVY;Explosive;Artillery;1100;1772;18;0.9;16.30;15.00;;1600000;5676000.00;1D 9H 00M;;/' +
        'Zenit MK2;;2;7;HEAVY;Explosive;Artillery;1100;1947;18;0.9;16.30;15.00;;3000000;5836000.00;1D 18H 00M;;/' +
        'Zenit MK2;;2;8;HEAVY;Explosive;Artillery;1100;2140;18;0.9;16.30;15.00;;6000000;6116000.00;2D 2H 24M;;/' +
        'Zenit MK2;;2;9;HEAVY;Explosive;Artillery;1100;2351;18;0.9;16.30;15.00;;10000000;6716000.00;2D 12H 00M;;/' +
        'Zenit MK2;;2;10;HEAVY;Explosive;Artillery;1100;2584;18;0.9;16.30;15.00;;16000000;7516000.00;3D 12H 00M;;/' +
        'Zenit MK2;;2;11;HEAVY;Explosive;Artillery;1100;2839;18;0.9;16.30;15.00;;26000000;8716000.00;4D 18H 00M;;/' +
        'Zenit MK2;;2;12;HEAVY;Explosive;Artillery;1100;3120;18;0.9;16.30;15.00;;0;10716000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Trebuchet;;1;1;HEAVY;Energy;Straight;1100;7000;1;1.00;0.00;23.00;;20000;800000.00;0D 0H 10M;;;0;;;/' +
        'Trebuchet;;1;2;HEAVY;Energy;Straight;1100;7600;1;1.00;0.00;23.00;;40000;804000.00;0D 1H 00M;;/' +
        'Trebuchet;;1;3;HEAVY;Energy;Straight;1100;8400;1;1.00;0.00;23.00;;80000;808000.00;0D 2H 00M;;/' +
        'Trebuchet;;1;4;HEAVY;Energy;Straight;1100;9200;1;1.00;0.00;23.00;;400000;816000.00;0D 8H 00M;;/' +
        'Trebuchet;;1;5;HEAVY;Energy;Straight;1100;10000;1;1.00;0.00;23.00;;800000;880000.00;0D 16H 48M;;/' +
        'Trebuchet;;1;6;HEAVY;Energy;Straight;1100;11000;1;1.00;0.00;23.00;;1600000;960000.00;1D 9H 00M;;/' +
        'Trebuchet;;1;7;HEAVY;Energy;Straight;1100;12000;1;1.00;0.00;23.00;;3000000;1120000.00;1D 18H 00M;;/' +
        'Trebuchet;;1;8;HEAVY;Energy;Straight;1100;13200;1;1.00;0.00;23.00;;6000000;1400000.00;2D 2H 24M;;/' +
        'Trebuchet;;1;9;HEAVY;Energy;Straight;1100;14600;1;1.00;0.00;23.00;;10000000;2000000.00;2D 12H 00M;;/' +
        'Trebuchet;;1;10;HEAVY;Energy;Straight;1100;16000;1;1.00;0.00;23.00;;16000000;2800000.00;3D 12H 00M;;/' +
        'Trebuchet;;1;11;HEAVY;Energy;Straight;1100;17600;1;1.00;0.00;23.00;;26000000;4000000.00;4D 18H 00M;;/' +
        'Trebuchet;;1;12;HEAVY;Energy;Straight;1100;19320;1;1.00;0.00;23.00;;0;6000000.00;0D 0H 00M;;/' +
        'Trebuchet MK2;;2;1;HEAVY;Energy;Straight;1100;8400;1;1.00;0.00;23.00;;20000;6200000.00;0D 0H 10M;;/' +
        'Trebuchet MK2;;2;2;HEAVY;Energy;Straight;1100;9120;1;1.00;0.00;23.00;;40000;6204000.00;0D 1H 00M;;/' +
        'Trebuchet MK2;;2;3;HEAVY;Energy;Straight;1100;10080;1;1.00;0.00;23.00;;80000;6208000.00;0D 2H 00M;;/' +
        'Trebuchet MK2;;2;4;HEAVY;Energy;Straight;1100;11040;1;1.00;0.00;23.00;;400000;6216000.00;0D 8H 00M;;/' +
        'Trebuchet MK2;;2;5;HEAVY;Energy;Straight;1100;12000;1;1.00;0.00;23.00;;800000;6280000.00;0D 16H 48M;;/' +
        'Trebuchet MK2;;2;6;HEAVY;Energy;Straight;1100;13200;1;1.00;0.00;23.00;;1600000;6360000.00;1D 9H 00M;;/' +
        'Trebuchet MK2;;2;7;HEAVY;Energy;Straight;1100;14400;1;1.00;0.00;23.00;;3000000;6520000.00;1D 18H 00M;;/' +
        'Trebuchet MK2;;2;8;HEAVY;Energy;Straight;1100;15840;1;1.00;0.00;23.00;;6000000;6800000.00;2D 2H 24M;;/' +
        'Trebuchet MK2;;2;9;HEAVY;Energy;Straight;1100;17520;1;1.00;0.00;23.00;;10000000;7400000.00;2D 12H 00M;;/' +
        'Trebuchet MK2;;2;10;HEAVY;Energy;Straight;1100;19200;1;1.00;0.00;23.00;;16000000;8200000.00;3D 12H 00M;;/' +
        'Trebuchet MK2;;2;11;HEAVY;Energy;Straight;1100;21120;1;1.00;0.00;23.00;;26000000;9400000.00;4D 18H 00M;;/' +
        'Trebuchet MK2;;2;12;HEAVY;Energy;Straight;1100;23180;1;1.00;0.00;23.00;;0;11400000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Trident;;1;1;HEAVY;Explosive;Straight;600;2550;3;1.00;3.00;9.00;;10000;400000.00;0D 0H 05M;;;1;3;2;/' +
        'Trident;;1;2;HEAVY;Explosive;Straight;600;2800;3;1.00;3.00;9.00;;20000;402000.00;0D 0H 30M;;/' +
        'Trident;;1;3;HEAVY;Explosive;Straight;600;3080;3;1.00;3.00;9.00;;40000;404000.00;0D 1H 00M;;/' +
        'Trident;;1;4;HEAVY;Explosive;Straight;600;3380;3;1.00;3.00;9.00;;200000;408000.00;0D 4H 00M;;/' +
        'Trident;;1;5;HEAVY;Explosive;Straight;600;3710;3;1.00;3.00;9.00;;400000;440000.00;0D 8H 00M;;/' +
        'Trident;;1;6;HEAVY;Explosive;Straight;600;4080;3;1.00;3.00;9.00;;800000;480000.00;0D 17H 00M;;/' +
        'Trident;;1;7;HEAVY;Explosive;Straight;600;4480;3;1.00;3.00;9.00;;1500000;560000.00;0D 21H 00M;;/' +
        'Trident;;1;8;HEAVY;Explosive;Straight;600;4920;3;1.00;3.00;9.00;;3000000;700000.00;1D 0H 00M;;/' +
        'Trident;;1;9;HEAVY;Explosive;Straight;600;5410;3;1.00;3.00;9.00;;5000000;1000000.00;1D 7H 00M;;/' +
        'Trident;;1;10;HEAVY;Explosive;Straight;600;5950;3;1.00;3.00;9.00;;8000000;1400000.00;1D 18H 00M;;/' +
        'Trident;;1;11;HEAVY;Explosive;Straight;600;6540;3;1.00;3.00;9.00;;13000000;2000000.00;2D 9H 00M;;/' +
        'Trident;;1;12;HEAVY;Explosive;Straight;600;7190;3;1.00;3.00;9.00;;0;3000000.00;0D 0H 00M;;/' +
        'Trident MK2;;2;1;HEAVY;Explosive;Straight;600;3060;3;1.00;3.00;9.00;;10000;3200000.00;0D 0H 05M;;/' +
        'Trident MK2;;2;2;HEAVY;Explosive;Straight;600;3360;3;1.00;3.00;9.00;;20000;3202000.00;0D 0H 30M;;/' +
        'Trident MK2;;2;3;HEAVY;Explosive;Straight;600;3696;3;1.00;3.00;9.00;;40000;3204000.00;0D 1H 00M;;/' +
        'Trident MK2;;2;4;HEAVY;Explosive;Straight;600;4056;3;1.00;3.00;9.00;;200000;3208000.00;0D 4H 00M;;/' +
        'Trident MK2;;2;5;HEAVY;Explosive;Straight;600;4452;3;1.00;3.00;9.00;;400000;3240000.00;0D 8H 00M;;/' +
        'Trident MK2;;2;6;HEAVY;Explosive;Straight;600;4896;3;1.00;3.00;9.00;;800000;3280000.00;0D 17H 00M;;/' +
        'Trident MK2;;2;7;HEAVY;Explosive;Straight;600;5376;3;1.00;3.00;9.00;;1500000;3360000.00;0D 21H 00M;;/' +
        'Trident MK2;;2;8;HEAVY;Explosive;Straight;600;5904;3;1.00;3.00;9.00;;3000000;3500000.00;1D 0H 00M;;/' +
        'Trident MK2;;2;9;HEAVY;Explosive;Straight;600;6492;3;1.00;3.00;9.00;;5000000;3800000.00;1D 7H 00M;;/' +
        'Trident MK2;;2;10;HEAVY;Explosive;Straight;600;7140;3;1.00;3.00;9.00;;8000000;4200000.00;1D 18H 00M;;/' +
        'Trident MK2;;2;11;HEAVY;Explosive;Straight;600;7848;3;1.00;3.00;9.00;;13000000;4800000.00;2D 9H 00M;;/' +
        'Trident MK2;;2;12;HEAVY;Explosive;Straight;600;8628;3;1.00;3.00;9.00;;0;5800000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Tempest;;1;1;HEAVY;Kinetic;Straight;800;680;70;5.74;12.2;10.00;x2;100000;2000000.00;0D 3H 30M;;;0;;;1/' +
        'Tempest;;1;2;HEAVY;Kinetic;Straight;800;750;70;5.74;12.2;10.00;x2;200000;2020000.00;0D 6H 00M;;/' +
        'Tempest;;1;3;HEAVY;Kinetic;Straight;800;820;70;5.74;12.2;10.00;x2;400000;2040000.00;0D 12H 00M;;/' +
        'Tempest;;1;4;HEAVY;Kinetic;Straight;800;900;70;5.74;12.2;10.00;x2;2000000;2080000.00;0D 18H 00M;;/' +
        'Tempest;;1;5;HEAVY;Kinetic;Straight;800;990;70;5.74;12.2;10.00;x2;3000000;2400000.00;1D 0H 00M;;/' +
        'Tempest;;1;6;HEAVY;Kinetic;Straight;800;1090;70;5.74;12.2;10.00;x2;4000000;2600000.00;2D 0H 00M;;/' +
        'Tempest;;1;7;HEAVY;Kinetic;Straight;800;1200;70;5.74;12.2;10.00;x2;8000000;2800000.00;3D 0H 00M;;/' +
        'Tempest;;1;8;HEAVY;Kinetic;Straight;800;1330;70;5.74;12.2;10.00;x2;13000000;3600000.00;4D 0H 00M;;/' +
        'Tempest;;1;9;HEAVY;Kinetic;Straight;800;1460;70;5.74;12.2;10.00;x2;25000000;4600000.00;5D 0H 00M;;/' +
        'Tempest;;1;10;HEAVY;Kinetic;Straight;800;1610;70;5.74;12.2;10.00;x2;35000000;7000000.00;6D 0H 00M;;/' +
        'Tempest;;1;11;HEAVY;Kinetic;Straight;800;1770;70;5.74;12.2;10.00;x2;45000000;9000000.00;7D 0H 00M;;/' +
        'Tempest;;1;12;HEAVY;Kinetic;Straight;800;1940;70;5.74;12.2;10.00;x2;0;11000000.00;0D 0H 00M;;/' +
        'Tempest MK2;;2;1;HEAVY;Kinetic;Straight;800;820;70;5.74;12.2;10.00;x2;100000;11200000.00;0D 3H 30M;;/' +
        'Tempest MK2;;2;2;HEAVY;Kinetic;Straight;800;900;70;5.74;12.2;10.00;x2;200000;11220000.00;0D 6H 00M;;/' +
        'Tempest MK2;;2;3;HEAVY;Kinetic;Straight;800;980;70;5.74;12.2;10.00;x2;400000;11240000.00;0D 12H 00M;;/' +
        'Tempest MK2;;2;4;HEAVY;Kinetic;Straight;800;1080;70;5.74;12.2;10.00;x2;2000000;11280000.00;0D 18H 00M;;/' +
        'Tempest MK2;;2;5;HEAVY;Kinetic;Straight;800;1180;70;5.74;12.2;10.00;x2;3000000;11600000.00;1D 0H 00M;;/' +
        'Tempest MK2;;2;6;HEAVY;Kinetic;Straight;800;1310;70;5.74;12.2;10.00;x2;4000000;11800000.00;2D 0H 00M;;/' +
        'Tempest MK2;;2;7;HEAVY;Kinetic;Straight;800;1440;70;5.74;12.2;10.00;x2;8000000;12000000.00;3D 0H 00M;;/' +
        'Tempest MK2;;2;8;HEAVY;Kinetic;Straight;800;1590;70;5.74;12.2;10.00;x2;13000000;12800000.00;4D 0H 00M;;/' +
        'Tempest MK2;;2;9;HEAVY;Kinetic;Straight;800;1760;70;5.74;12.2;10.00;x2;25000000;13800000.00;5D 0H 00M;;/' +
        'Tempest MK2;;2;10;HEAVY;Kinetic;Straight;800;1930;70;5.74;12.2;10.00;x2;35000000;16200000.00;6D 0H 00M;;/' +
        'Tempest MK2;;2;11;HEAVY;Kinetic;Straight;800;2120;70;5.74;12.2;10.00;x2;45000000;18200000.00;7D 0H 00M;;/' +
        'Tempest MK2;;2;12;HEAVY;Kinetic;Straight;800;2330;70;5.74;12.2;10.00;x2;0;20200000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Ember;;1;1;HEAVY;Special;Straight;350;180;300;30.00;10.00;5.00;;100000;5600000.00;0D 5H 00M;;;0;;;/' +
        'Ember;;1;2;HEAVY;Special;Straight;350;200;300;30.00;10.00;5.00;;200000;5620000.00;0D 12H 00M;;/' +
        'Ember;;1;3;HEAVY;Special;Straight;350;220;300;30.00;10.00;5.00;;400000;5640000.00;1D 0H 00M;;/' +
        'Ember;;1;4;HEAVY;Special;Straight;350;250;300;30.00;10.00;5.00;;2000000;5680000.00;2D 0H 00M;;/' +
        'Ember;;1;5;HEAVY;Special;Straight;350;270;300;30.00;10.00;5.00;;4000000;6000000.00;3D 0H 00M;;/' +
        'Ember;;1;6;HEAVY;Special;Straight;350;300;300;30.00;10.00;5.00;;6000000;6400000.00;4D 0H 00M;;/' +
        'Ember;;1;7;HEAVY;Special;Straight;350;330;300;30.00;10.00;5.00;;11000000;6800000.00;5D 0H 00M;;/' +
        'Ember;;1;8;HEAVY;Special;Straight;350;370;300;30.00;10.00;5.00;;17000000;7800000.00;6D 0H 00M;;/' +
        'Ember;;1;9;HEAVY;Special;Straight;350;390;300;30.00;10.00;5.00;;32000000;9000000.00;7D 0H 00M;;/' +
        'Ember;;1;10;HEAVY;Special;Straight;350;440;300;30.00;10.00;5.00;;43000000;12000000.00;8D 0H 00M;;/' +
        'Ember;;1;11;HEAVY;Special;Straight;350;480;300;30.00;10.00;5.00;;55000000;14200000.00;9D 0H 00M;;/' +
        'Ember;;1;12;HEAVY;Special;Straight;350;525;300;30.00;10.00;5.00;;0;16600000.00;0D 0H 00M;;/' +
        'Ember MK2;;2;1;HEAVY;Special;Straight;350;220;300;30.00;10.00;5.00;;100000;16800000.00;0D 5H 00M;;/' +
        'Ember MK2;;2;2;HEAVY;Special;Straight;350;240;300;30.00;10.00;5.00;;200000;16820000.00;0D 12H 00M;;/' +
        'Ember MK2;;2;3;HEAVY;Special;Straight;350;270;300;30.00;10.00;5.00;;400000;16840000.00;1D 0H 00M;;/' +
        'Ember MK2;;2;4;HEAVY;Special;Straight;350;300;300;30.00;10.00;5.00;;2000000;16880000.00;2D 0H 00M;;/' +
        'Ember MK2;;2;5;HEAVY;Special;Straight;350;320;300;30.00;10.00;5.00;;4000000;17200000.00;3D 0H 00M;;/' +
        'Ember MK2;;2;6;HEAVY;Special;Straight;350;360;300;30.00;10.00;5.00;;6000000;17600000.00;4D 0H 00M;;/' +
        'Ember MK2;;2;7;HEAVY;Special;Straight;350;390;300;30.00;10.00;5.00;;11000000;18000000.00;5D 0H 00M;;/' +
        'Ember MK2;;2;8;HEAVY;Special;Straight;350;430;300;30.00;10.00;5.00;;17000000;19000000.00;6D 0H 00M;;/' +
        'Ember MK2;;2;9;HEAVY;Special;Straight;350;470;300;30.00;10.00;5.00;;32000000;20200000.00;7D 0H 00M;;/' +
        'Ember MK2;;2;10;HEAVY;Special;Straight;350;530;300;30.00;10.00;5.00;;43000000;23200000.00;8D 0H 00M;;/' +
        'Ember MK2;;2;11;HEAVY;Special;Straight;350;580;300;30.00;10.00;5.00;;55000000;25400000.00;9D 0H 00M;;/' +
        'Ember MK2;;2;12;HEAVY;Special;Straight;350;630;300;30.00;10.00;5.00;;0;27800000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Redeemer;;1;1;HEAVY;Energy;Straight;350;2540;18;1.95;9.2;5.00;;100000;3900000.00;0D 5H 00M;;;0;;;/' +
        'Redeemer;;1;2;HEAVY;Energy;Straight;350;2800;18;1.95;9.2;5.00;;200000;3920000.00;0D 12H 00M;;/' +
        'Redeemer;;1;3;HEAVY;Energy;Straight;350;3080;18;1.95;9.2;5.00;;400000;3940000.00;1D 0H 00M;;/' +
        'Redeemer;;1;4;HEAVY;Energy;Straight;350;3380;18;1.95;9.2;5.00;;2000000;3980000.00;2D 0H 00M;;/' +
        'Redeemer;;1;5;HEAVY;Energy;Straight;350;3720;18;1.95;9.2;5.00;;4000000;4300000.00;3D 0H 00M;;/' +
        'Redeemer;;1;6;HEAVY;Energy;Straight;350;4100;18;1.95;9.2;5.00;;6000000;4500000.00;4D 0H 00M;;/' +
        'Redeemer;;1;7;HEAVY;Energy;Straight;350;4500;18;1.95;9.2;5.00;;11000000;4700000.00;5D 0H 00M;;/' +
        'Redeemer;;1;8;HEAVY;Energy;Straight;350;4950;18;1.95;9.2;5.00;;17000000;5500000.00;6D 0H 00M;;/' +
        'Redeemer;;1;9;HEAVY;Energy;Straight;350;5450;18;1.95;9.2;5.00;;32000000;6500000.00;7D 0H 00M;;/' +
        'Redeemer;;1;10;HEAVY;Energy;Straight;350;6000;18;1.95;9.2;5.00;;43000000;8900000.00;8D 0H 00M;;/' +
        'Redeemer;;1;11;HEAVY;Energy;Straight;350;6600;18;1.95;9.2;5.00;;55000000;10900000.00;9D 0H 00M;;/' +
        'Redeemer;;1;12;HEAVY;Energy;Straight;350;7250;18;1.95;9.2;5.00;;0;12900000.00;0D 0H 00M;;/' +
        'Redeemer MK2;;2;1;HEAVY;Energy;Straight;350;3050;18;1.95;9.2;5.00;;100000;13100000.00;0D 5H 00M;;/' +
        'Redeemer MK2;;2;2;HEAVY;Energy;Straight;350;3360;18;1.95;9.2;5.00;;200000;13120000.00;0D 12H 00M;;/' +
        'Redeemer MK2;;2;3;HEAVY;Energy;Straight;350;3700;18;1.95;9.2;5.00;;400000;13140000.00;1D 0H 00M;;/' +
        'Redeemer MK2;;2;4;HEAVY;Energy;Straight;350;4050;18;1.95;9.2;5.00;;2000000;13180000.00;2D 0H 00M;;/' +
        'Redeemer MK2;;2;5;HEAVY;Energy;Straight;350;4460;18;1.95;9.2;5.00;;4000000;13500000.00;3D 0H 00M;;/' +
        'Redeemer MK2;;2;6;HEAVY;Energy;Straight;350;4920;18;1.95;9.2;5.00;;6000000;13700000.00;4D 0H 00M;;/' +
        'Redeemer MK2;;2;7;HEAVY;Energy;Straight;350;5400;18;1.95;9.2;5.00;;11000000;13900000.00;5D 0H 00M;;/' +
        'Redeemer MK2;;2;8;HEAVY;Energy;Straight;350;5940;18;1.95;9.2;5.00;;17000000;14700000.00;6D 0H 00M;;/' +
        'Redeemer MK2;;2;9;HEAVY;Energy;Straight;350;6540;18;1.95;9.2;5.00;;32000000;15700000.00;7D 0H 00M;;/' +
        'Redeemer MK2;;2;10;HEAVY;Energy;Straight;350;7200;18;1.95;9.2;5.00;;43000000;18100000.00;8D 0H 00M;;/' +
        'Redeemer MK2;;2;11;HEAVY;Energy;Straight;350;7920;18;1.95;9.2;5.00;;55000000;20100000.00;9D 0H 00M;;/' +
        'Redeemer MK2;;2;12;HEAVY;Energy;Straight;350;8700;18;1.95;9.2;5.00;;0;22100000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Dragoon;;1;1;HEAVY;Energy;Straight;600;3100;4;1.00;4.00;12.00;;100000;5600000.00;0D 5H 00M;;;1;3;3;/' +
        'Dragoon;;1;2;HEAVY;Energy;Straight;600;3410;4;1.00;4.00;12.00;;200000;5620000.00;0D 12H 00M;;/' +
        'Dragoon;;1;3;HEAVY;Energy;Straight;600;3750;4;1.00;4.00;12.00;;400000;5640000.00;1D 0H 00M;;/' +
        'Dragoon;;1;4;HEAVY;Energy;Straight;600;4120;4;1.00;4.00;12.00;;2000000;5680000.00;2D 0H 00M;;/' +
        'Dragoon;;1;5;HEAVY;Energy;Straight;600;4530;4;1.00;4.00;12.00;;4000000;6000000.00;3D 0H 00M;;/' +
        'Dragoon;;1;6;HEAVY;Energy;Straight;600;4970;4;1.00;4.00;12.00;;6000000;6400000.00;4D 0H 00M;;/' +
        'Dragoon;;1;7;HEAVY;Energy;Straight;600;5470;4;1.00;4.00;12.00;;11000000;6800000.00;5D 0H 00M;;/' +
        'Dragoon;;1;8;HEAVY;Energy;Straight;600;6000;4;1.00;4.00;12.00;;17000000;7800000.00;6D 0H 00M;;/' +
        'Dragoon;;1;9;HEAVY;Energy;Straight;600;6600;4;1.00;4.00;12.00;;32000000;9000000.00;7D 0H 00M;;/' +
        'Dragoon;;1;10;HEAVY;Energy;Straight;600;7250;4;1.00;4.00;12.00;;43000000;12000000.00;8D 0H 00M;;/' +
        'Dragoon;;1;11;HEAVY;Energy;Straight;600;7970;4;1.00;4.00;12.00;;55000000;14200000.00;9D 0H 00M;;/' +
        'Dragoon;;1;12;HEAVY;Energy;Straight;600;8750;4;1.00;4.00;12.00;;0;16600000.00;0D 0H 00M;;/' +
        'Dragoon MK2;;2;1;HEAVY;Energy;Straight;600;3720;4;1.00;4.00;12.00;;100000;16800000.00;0D 5H 00M;;/' +
        'Dragoon MK2;;2;2;HEAVY;Energy;Straight;600;4090;4;1.00;4.00;12.00;;200000;16820000.00;0D 12H 00M;;/' +
        'Dragoon MK2;;2;3;HEAVY;Energy;Straight;600;4500;4;1.00;4.00;12.00;;400000;16840000.00;1D 0H 00M;;/' +
        'Dragoon MK2;;2;4;HEAVY;Energy;Straight;600;4940;4;1.00;4.00;12.00;;2000000;16880000.00;2D 0H 00M;;/' +
        'Dragoon MK2;;2;5;HEAVY;Energy;Straight;600;5440;4;1.00;4.00;12.00;;4000000;17200000.00;3D 0H 00M;;/' +
        'Dragoon MK2;;2;6;HEAVY;Energy;Straight;600;5970;4;1.00;4.00;12.00;;6000000;17600000.00;4D 0H 00M;;/' +
        'Dragoon MK2;;2;7;HEAVY;Energy;Straight;600;6560;4;1.00;4.00;12.00;;11000000;18000000.00;5D 0H 00M;;/' +
        'Dragoon MK2;;2;8;HEAVY;Energy;Straight;600;7200;4;1.00;4.00;12.00;;17000000;19000000.00;6D 0H 00M;;/' +
        'Dragoon MK2;;2;9;HEAVY;Energy;Straight;600;7920;4;1.00;4.00;12.00;;32000000;20200000.00;7D 0H 00M;;/' +
        'Dragoon MK2;;2;10;HEAVY;Energy;Straight;600;8700;4;1.00;4.00;12.00;;43000000;23200000.00;8D 0H 00M;;/' +
        'Dragoon MK2;;2;11;HEAVY;Energy;Straight;600;9560;4;1.00;4.00;12.00;;55000000;25400000.00;9D 0H 00M;;/' +
        'Dragoon MK2;;2;12;HEAVY;Energy;Straight;600;10500;4;1.00;4.00;12.00;;0;27800000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Thermite;;1;1;HEAVY;Explosive;Homing;350;13560;1;4.00;0.00;10.00;;100000;3900000.00;0D 5H 00M;;;0;;;/' +
        'Thermite;;1;2;HEAVY;Explosive;Homing;350;14920;1;4.00;0.00;10.00;;200000;3920000.00;0D 12H 00M;;/' +
        'Thermite;;1;3;HEAVY;Explosive;Homing;350;16400;1;4.00;0.00;10.00;;400000;3940000.00;1D 0H 00M;;/' +
        'Thermite;;1;4;HEAVY;Explosive;Homing;350;18040;1;4.00;0.00;10.00;;2000000;3980000.00;2D 0H 00M;;/' +
        'Thermite;;1;5;HEAVY;Explosive;Homing;350;19840;1;4.00;0.00;10.00;;4000000;4300000.00;3D 0H 00M;;/' +
        'Thermite;;1;6;HEAVY;Explosive;Homing;350;21800;1;4.00;0.00;10.00;;6000000;4500000.00;4D 0H 00M;;/' +
        'Thermite;;1;7;HEAVY;Explosive;Homing;350;23960;1;4.00;0.00;10.00;;11000000;4700000.00;5D 0H 00M;;/' +
        'Thermite;;1;8;HEAVY;Explosive;Homing;350;26320;1;4.00;0.00;10.00;;17000000;5500000.00;6D 0H 00M;;/' +
        'Thermite;;1;9;HEAVY;Explosive;Homing;350;28920;1;4.00;0.00;10.00;;32000000;6500000.00;7D 0H 00M;;/' +
        'Thermite;;1;10;HEAVY;Explosive;Homing;350;31800;1;4.00;0.00;10.00;;43000000;8900000.00;8D 0H 00M;;/' +
        'Thermite;;1;11;HEAVY;Explosive;Homing;350;34960;1;4.00;0.00;10.00;;55000000;10900000.00;9D 0H 00M;;/' +
        'Thermite;;1;12;HEAVY;Explosive;Homing;350;38400;1;4.00;0.00;10.00;;0;12900000.00;0D 0H 00M;;/' +
        'Thermite MK2;;2;1;HEAVY;Explosive;Homing;350;16320;1;4.00;0.00;10.00;;100000;13100000.00;0D 5H 00M;;/' +
        'Thermite MK2;;2;2;HEAVY;Explosive;Homing;350;17920;1;4.00;0.00;10.00;;200000;13120000.00;0D 12H 00M;;/' +
        'Thermite MK2;;2;3;HEAVY;Explosive;Homing;350;19680;1;4.00;0.00;10.00;;400000;13140000.00;1D 0H 00M;;/' +
        'Thermite MK2;;2;4;HEAVY;Explosive;Homing;350;21640;1;4.00;0.00;10.00;;2000000;13180000.00;2D 0H 00M;;/' +
        'Thermite MK2;;2;5;HEAVY;Explosive;Homing;350;23800;1;4.00;0.00;10.00;;4000000;13500000.00;3D 0H 00M;;/' +
        'Thermite MK2;;2;6;HEAVY;Explosive;Homing;350;26160;1;4.00;0.00;10.00;;6000000;13700000.00;4D 0H 00M;;/' +
        'Thermite MK2;;2;7;HEAVY;Explosive;Homing;350;28760;1;4.00;0.00;10.00;;11000000;13900000.00;5D 0H 00M;;/' +
        'Thermite MK2;;2;8;HEAVY;Explosive;Homing;350;31600;1;4.00;0.00;10.00;;17000000;14700000.00;6D 0H 00M;;/' +
        'Thermite MK2;;2;9;HEAVY;Explosive;Homing;350;34720;1;4.00;0.00;10.00;;32000000;15700000.00;7D 0H 00M;;/' +
        'Thermite MK2;;2;10;HEAVY;Explosive;Homing;350;38160;1;4.00;0.00;10.00;;43000000;18100000.00;8D 0H 00M;;/' +
        'Thermite MK2;;2;11;HEAVY;Explosive;Homing;350;41920;1;4.00;0.00;10.00;;55000000;20100000.00;9D 0H 00M;;/' +
        'Thermite MK2;;2;12;HEAVY;Explosive;Homing;350;46080;1;4.00;0.00;10.00;;0;22100000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Flux;;1;1;HEAVY;Energy;Straight;1100;2380;30;10.00;3.8;11.00;;100000;2000000.00;0D 3H 30M;;;1;0.37;2.9/' +
        'Flux;;1;2;HEAVY;Energy;Straight;1100;2620;30;10.00;3.8;11.00;;200000;2020000.00;0D 6H 00M;;/' +
        'Flux;;1;3;HEAVY;Energy;Straight;1100;2880;30;10.00;3.8;11.00;;400000;2040000.00;0D 12H 00M;;/' +
        'Flux;;1;4;HEAVY;Energy;Straight;1100;3160;30;10.00;3.8;11.00;;2000000;2080000.00;0D 18H 00M;;/' +
        'Flux;;1;5;HEAVY;Energy;Straight;1100;3470;30;10.00;3.8;11.00;;3000000;2400000.00;1D 0H 00M;;/' +
        'Flux;;1;6;HEAVY;Energy;Straight;1100;3810;30;10.00;3.8;11.00;;4000000;2600000.00;2D 0H 00M;;/' +
        'Flux;;1;7;HEAVY;Energy;Straight;1100;4190;30;10.00;3.8;11.00;;8000000;2800000.00;3D 0H 00M;;/' +
        'Flux;;1;8;HEAVY;Energy;Straight;1100;4600;30;10.00;3.8;11.00;;13000000;3600000.00;4D 0H 00M;;/' +
        'Flux;;1;9;HEAVY;Energy;Straight;1100;5050;30;10.00;3.8;11.00;;25000000;4600000.00;5D 0H 00M;;/' +
        'Flux;;1;10;HEAVY;Energy;Straight;1100;5550;30;10.00;3.8;11.00;;35000000;7000000.00;6D 0H 00M;;/' +
        'Flux;;1;11;HEAVY;Energy;Straight;1100;6100;30;10.00;3.8;11.00;;45000000;9000000.00;7D 0H 00M;;/' +
        'Flux;;1;12;HEAVY;Energy;Straight;1100;6700;30;10.00;3.8;11.00;;0;11000000.00;0D 0H 00M;;/' +
        'Flux MK2;;2;1;HEAVY;Energy;Straight;1100;2940;30;10.00;3.8;11.00;;100000;11200000.00;0D 3H 30M;;/' +
        'Flux MK2;;2;2;HEAVY;Energy;Straight;1100;3210;30;10.00;3.8;11.00;;200000;11220000.00;0D 6H 00M;;/' +
        'Flux MK2;;2;3;HEAVY;Energy;Straight;1100;3500;30;10.00;3.8;11.00;;400000;11240000.00;0D 12H 00M;;/' +
        'Flux MK2;;2;4;HEAVY;Energy;Straight;1100;3820;30;10.00;3.8;11.00;;2000000;11280000.00;0D 18H 00M;;/' +
        'Flux MK2;;2;5;HEAVY;Energy;Straight;1100;4160;30;10.00;3.8;11.00;;3000000;11600000.00;1D 0H 00M;;/' +
        'Flux MK2;;2;6;HEAVY;Energy;Straight;1100;4570;30;10.00;3.8;11.00;;4000000;11800000.00;2D 0H 00M;;/' +
        'Flux MK2;;2;7;HEAVY;Energy;Straight;1100;5030;30;10.00;3.8;11.00;;8000000;12000000.00;3D 0H 00M;;/' +
        'Flux MK2;;2;8;HEAVY;Energy;Straight;1100;5520;30;10.00;3.8;11.00;;13000000;12800000.00;4D 0H 00M;;/' +
        'Flux MK2;;2;9;HEAVY;Energy;Straight;1100;6060;30;10.00;3.8;11.00;;25000000;13800000.00;5D 0H 00M;;/' +
        'Flux MK2;;2;10;HEAVY;Energy;Straight;1100;6660;30;10.00;3.8;11.00;;35000000;16200000.00;6D 0H 00M;;/' +
        'Flux MK2;;2;11;HEAVY;Energy;Straight;1100;7320;30;10.00;3.8;11.00;;45000000;18200000.00;7D 0H 00M;;/' +
        'Flux MK2;;2;12;HEAVY;Energy;Straight;1100;8040;30;10.00;3.8;11.00;;0;20200000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Exodus;;1;1;HEAVY;Explosive;Straight;300;1670;20;5.00;4.80;22.00;;100000;3120000.00;0D 5H 00M;;;1;1.1;3.8;/' +
        'Exodus;;1;2;HEAVY;Explosive;Straight;300;1830;20;5.00;4.80;22.00;;200000;3140000.00;0D 12H 00M;;/' +
        'Exodus;;1;3;HEAVY;Explosive;Straight;300;2010;20;5.00;4.80;22.00;;400000;3160000.00;1D 0H 00M;;/' +
        'Exodus;;1;4;HEAVY;Explosive;Straight;300;2210;20;5.00;4.80;22.00;;2000000;3200000.00;2D 0H 00M;;/' +
        'Exodus;;1;5;HEAVY;Explosive;Straight;300;2420;20;5.00;4.80;22.00;;4000000;3920000.00;3D 0H 00M;;/' +
        'Exodus;;1;6;HEAVY;Explosive;Straight;300;2670;20;5.00;4.80;22.00;;6000000;3920000.00;4D 0H 00M;;/' +
        'Exodus;;1;7;HEAVY;Explosive;Straight;300;2930;20;5.00;4.80;22.00;;11000000;4320000.00;5D 0H 00M;;/' +
        'Exodus;;1;8;HEAVY;Explosive;Straight;300;3210;20;5.00;4.80;22.00;;17000000;5320000.00;6D 0H 00M;;/' +
        'Exodus;;1;9;HEAVY;Explosive;Straight;300;3530;20;5.00;4.80;22.00;;32000000;6520000.00;7D 0H 00M;;/' +
        'Exodus;;1;10;HEAVY;Explosive;Straight;300;3880;20;5.00;4.80;22.00;;43000000;9520000.00;8D 0H 00M;;/' +
        'Exodus;;1;11;HEAVY;Explosive;Straight;300;4270;20;5.00;4.80;22.00;;55000000;11720000.00;9D 0H 00M;;/' +
        'Exodus;;1;12;HEAVY;Explosive;Straight;300;4690;20;5.00;4.80;22.00;;0;14120000.00;0D 0H 00M;;/' +
        'Exodus MK2;;2;1;HEAVY;Explosive;Straight;300;1990;20;5.00;4.80;22.00;;100000;14340000.00;0D 5H 00M;;/' +
        'Exodus MK2;;2;2;HEAVY;Explosive;Straight;300;2180;20;5.00;4.80;22.00;;200000;14340000.00;0D 12H 00M;;/' +
        'Exodus MK2;;2;3;HEAVY;Explosive;Straight;300;2400;20;5.00;4.80;22.00;;400000;14360000.00;1D 0H 00M;;/' +
        'Exodus MK2;;2;4;HEAVY;Explosive;Straight;300;2640;20;5.00;4.80;22.00;;2000000;14400000.00;2D 0H 00M;;/' +
        'Exodus MK2;;2;5;HEAVY;Explosive;Straight;300;2910;20;5.00;4.80;22.00;;4000000;14720000.00;3D 0H 00M;;/' +
        'Exodus MK2;;2;6;HEAVY;Explosive;Straight;300;3200;20;5.00;4.80;22.00;;6000000;15120000.00;4D 0H 00M;;/' +
        'Exodus MK2;;2;7;HEAVY;Explosive;Straight;300;3520;20;5.00;4.80;22.00;;11000000;15520000.00;5D 0H 00M;;/' +
        'Exodus MK2;;2;8;HEAVY;Explosive;Straight;300;3860;20;5.00;4.80;22.00;;17000000;16520000.00;6D 0H 00M;;/' +
        'Exodus MK2;;2;9;HEAVY;Explosive;Straight;300;4240;20;5.00;4.80;22.00;;32000000;17720000.00;7D 0H 00M;;/' +
        'Exodus MK2;;2;10;HEAVY;Explosive;Straight;300;4660;20;5.00;4.80;22.00;;43000000;20720000.00;8D 0H 00M;;/' +
        'Exodus MK2;;2;11;HEAVY;Explosive;Straight;300;5120;20;5.00;4.80;22.00;;55000000;22920000.00;9D 0H 00M;;/' +
        'Exodus MK2;;2;12;HEAVY;Explosive;Straight;300;5630;20;5.00;4.80;22.00;;0;25320000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Avenger;;1;1;HEAVY;Kinetic;Straight;500;300;220;14.1;15.6;10.00;x2;20000;1000000.00;0D 0H 10M;;;0;;;/' +
        'Avenger;;1;2;HEAVY;Kinetic;Straight;500;330;220;14.1;15.6;10.00;x2;40000;1014000.00;0D 1H 00M;;/' +
        'Avenger;;1;3;HEAVY;Kinetic;Straight;500;360;220;14.1;15.6;10.00;x2;80000;1020000.00;0D 2H 00M;;/' +
        'Avenger;;1;4;HEAVY;Kinetic;Straight;500;400;220;14.1;15.6;10.00;x2;400000;1040000.00;0D 8H 00M;;/' +
        'Avenger;;1;5;HEAVY;Kinetic;Straight;500;430;220;14.1;15.6;10.00;x2;800000;1200000.00;0D 16H 48M;;/' +
        'Avenger;;1;6;HEAVY;Kinetic;Straight;500;480;220;14.1;15.6;10.00;x2;1600000;1200000.00;1D 9H 00M;;/' +
        'Avenger;;1;7;HEAVY;Kinetic;Straight;500;520;220;14.1;15.6;10.00;x2;3000000;1400000.00;1D 18H 00M;;/' +
        'Avenger;;1;8;HEAVY;Kinetic;Straight;500;580;220;14.1;15.6;10.00;x2;6000000;1900000.00;2D 2H 24M;;/' +
        'Avenger;;1;9;HEAVY;Kinetic;Straight;500;630;220;14.1;15.6;10.00;x2;10000000;2700000.00;2D 12H 00M;;/' +
        'Avenger;;1;10;HEAVY;Kinetic;Straight;500;700;220;14.1;15.6;10.00;x2;16000000;4600000.00;3D 12H 00M;;/' +
        'Avenger;;1;11;HEAVY;Kinetic;Straight;500;770;220;14.1;15.6;10.00;x2;26000000;6200000.00;4D 18H 00M;;/' +
        'Avenger;;1;12;HEAVY;Kinetic;Straight;500;835;220;14.1;15.6;10.00;x2;0;8000000.00;0D 0H 00M;;/' +
        'Avenger MK2;;2;1;HEAVY;Kinetic;Straight;500;370;220;14.1;15.6;10.00;x2;20000;8214000.00;0D 0H 10M;;/' +
        'Avenger MK2;;2;2;HEAVY;Kinetic;Straight;500;400;220;14.1;15.6;10.00;x2;40000;8214000.00;0D 1H 00M;;/' +
        'Avenger MK2;;2;3;HEAVY;Kinetic;Straight;500;430;220;14.1;15.6;10.00;x2;80000;8220000.00;0D 2H 00M;;/' +
        'Avenger MK2;;2;4;HEAVY;Kinetic;Straight;500;480;220;14.1;15.6;10.00;x2;400000;8240000.00;0D 8H 00M;;/' +
        'Avenger MK2;;2;5;HEAVY;Kinetic;Straight;500;520;220;14.1;15.6;10.00;x2;800000;8350000.00;0D 16H 48M;;/' +
        'Avenger MK2;;2;6;HEAVY;Kinetic;Straight;500;580;220;14.1;15.6;10.00;x2;1600000;8400000.00;1D 9H 00M;;/' +
        'Avenger MK2;;2;7;HEAVY;Kinetic;Straight;500;630;220;14.1;15.6;10.00;x2;3000000;8600000.00;1D 18H 00M;;/' +
        'Avenger MK2;;2;8;HEAVY;Kinetic;Straight;500;690;220;14.1;15.6;10.00;x2;6000000;9100000.00;2D 2H 24M;;/' +
        'Avenger MK2;;2;9;HEAVY;Kinetic;Straight;500;760;220;14.1;15.6;10.00;x2;10000000;9900000.00;2D 12H 00M;;/' +
        'Avenger MK2;;2;10;HEAVY;Kinetic;Straight;500;840;220;14.1;15.6;10.00;x2;16000000;11800000.00;3D 12H 00M;;/' +
        'Avenger MK2;;2;11;HEAVY;Kinetic;Straight;500;910;220;14.1;15.6;10.00;x2;26000000;13400000.00;4D 18H 00M;;/' +
        'Avenger MK2;;2;12;HEAVY;Kinetic;Straight;500;1000;220;14.1;15.6;10.00;x2;0;15200000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Chimera;;1;1;HEAVY;Explosive;Homing;600;1150;9;1,7;5.20;12.00;;100000;2000000.00;0D 3H 30M;;;0;;;/' +
        'Chimera;;1;2;HEAVY;Explosive;Homing;600;1260;9;1,7;5.20;12.00;;200000;2020000.00;0D 6H 00M;;/' +
        'Chimera;;1;3;HEAVY;Explosive;Homing;600;1390;9;1,7;5.20;12.00;;400000;2040000.00;0D 12H 00M;;/' +
        'Chimera;;1;4;HEAVY;Explosive;Homing;600;1530;9;1,7;5.20;12.00;;2000000;2080000.00;0D 18H 00M;;/' +
        'Chimera;;1;5;HEAVY;Explosive;Homing;600;1680;9;1,7;5.20;12.00;;3000000;2600000.00;1D 0H 00M;;/' +
        'Chimera;;1;6;HEAVY;Explosive;Homing;600;1850;9;1,7;5.20;12.00;;4000000;2600000.00;2D 0H 00M;;/' +
        'Chimera;;1;7;HEAVY;Explosive;Homing;600;2030;9;1,7;5.20;12.00;;8000000;2800000.00;3D 0H 00M;;/' +
        'Chimera;;1;8;HEAVY;Explosive;Homing;600;2230;9;1,7;5.20;12.00;;13000000;3600000.00;4D 0H 00M;;/' +
        'Chimera;;1;9;HEAVY;Explosive;Homing;600;2450;9;1,7;5.20;12.00;;25000000;4600000.00;5D 0H 00M;;/' +
        'Chimera;;1;10;HEAVY;Explosive;Homing;600;2690;9;1,7;5.20;12.00;;35000000;7000000.00;6D 0H 00M;;/' +
        'Chimera;;1;11;HEAVY;Explosive;Homing;600;2960;9;1,7;5.20;12.00;;45000000;9000000.00;7D 0H 00M;;/' +
        'Chimera;;1;12;HEAVY;Explosive;Homing;600;3250;9;1,7;5.20;12.00;;0;11000000.00;0D 0H 00M;;/' +
        'Chimera MK2;;2;1;HEAVY;Explosive;Homing;600;1380;9;1,7;5.20;12.00;;100000;11220000.00;0D 3H 30M;;/' +
        'Chimera MK2;;2;2;HEAVY;Explosive;Homing;600;1512;9;1,7;5.20;12.00;;200000;11220000.00;0D 6H 00M;;/' +
        'Chimera MK2;;2;3;HEAVY;Explosive;Homing;600;1668;9;1,7;5.20;12.00;;400000;11240000.00;0D 12H 00M;;/' +
        'Chimera MK2;;2;4;HEAVY;Explosive;Homing;600;1836;9;1,7;5.20;12.00;;2000000;11280000.00;0D 18H 00M;;/' +
        'Chimera MK2;;2;5;HEAVY;Explosive;Homing;600;2016;9;1,7;5.20;12.00;;3000000;11600000.00;1D 0H 00M;;/' +
        'Chimera MK2;;2;6;HEAVY;Explosive;Homing;600;2220;9;1,7;5.20;12.00;;4000000;11800000.00;2D 0H 00M;;/' +
        'Chimera MK2;;2;7;HEAVY;Explosive;Homing;600;2436;9;1,7;5.20;12.00;;8000000;12000000.00;3D 0H 00M;;/' +
        'Chimera MK2;;2;8;HEAVY;Explosive;Homing;600;2676;9;1,7;5.20;12.00;;13000000;12800000.00;4D 0H 00M;;/' +
        'Chimera MK2;;2;9;HEAVY;Explosive;Homing;600;2940;9;1,7;5.20;12.00;;25000000;13800000.00;5D 0H 00M;;/' +
        'Chimera MK2;;2;10;HEAVY;Explosive;Homing;600;3228;9;1,7;5.20;12.00;;35000000;16200000.00;6D 0H 00M;;/' +
        'Chimera MK2;;2;11;HEAVY;Explosive;Homing;600;3552;9;1,7;5.20;12.00;;45000000;18200000.00;7D 0H 00M;;/' +
        'Chimera MK2;;2;12;HEAVY;Explosive;Homing;600;3900;9;1,7;5.20;12.00;;0;20200000.00;0D 0H 00M;;/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Glory;;1;1;HEAVY;Energy;Straight;500;6950;5;1.00;7.00;10.00;;100000;3120000.00;0D 5H 00M;;5;1;1.6;4;1/' +
        'Glory;;1;2;HEAVY;Energy;Straight;500;7670;5;1.00;7.00;10.00;;200000;3140000.00;0D 12H 00M;;5/' +
        'Glory;;1;3;HEAVY;Energy;Straight;500;8410;5;1.00;7.00;10.00;;400000;3160000.00;1D 0H 00M;;5/' +
        'Glory;;1;4;HEAVY;Energy;Straight;500;9260;5;1.00;7.00;10.00;;2000000;3200000.00;2D 0H 00M;;5/' +
        'Glory;;1;5;HEAVY;Energy;Straight;500;10170;5;1.00;7.00;10.00;;4000000;3920000.00;3D 0H 00M;;5/' +
        'Glory;;1;6;HEAVY;Energy;Straight;500;11170;5;1.00;7.00;10.00;;6000000;3920000.00;4D 0H 00M;;5/' +
        'Glory;;1;7;HEAVY;Energy;Straight;500;12280;5;1.00;7.00;10.00;;11000000;4320000.00;5D 0H 00M;;5/' +
        'Glory;;1;8;HEAVY;Energy;Straight;500;13480;5;1.00;7.00;10.00;;17000000;5320000.00;6D 0H 00M;;5/' +
        'Glory;;1;9;HEAVY;Energy;Straight;500;14810;5;1.00;7.00;10.00;;32000000;6520000.00;7D 0H 00M;;5/' +
        'Glory;;1;10;HEAVY;Energy;Straight;500;16270;5;1.00;7.00;10.00;;43000000;9520000.00;8D 0H 00M;;5/' +
        'Glory;;1;11;HEAVY;Energy;Straight;500;17900;5;1.00;7.00;10.00;;55000000;11720000.00;9D 0H 00M;;5/' +
        'Glory;;1;12;HEAVY;Energy;Straight;500;19650;5;1.00;7.00;10.00;;0;14120000.00;0D 0H 00M;;5/' +
        'Glory MK2;;2;1;HEAVY;Energy;Straight;500;8350;5;1.00;7.00;10.00;;100000;14140000.00;0D 5H 00M;;5/' +
        'Glory MK2;;2;2;HEAVY;Energy;Straight;500;9190;5;1.00;7.00;10.00;;200000;14140000.00;0D 12H 00M;;5/' +
        'Glory MK2;;2;3;HEAVY;Energy;Straight;500;10100;5;1.00;7.00;10.00;;400000;14160000.00;1D 0H 00M;;5/' +
        'Glory MK2;;2;4;HEAVY;Energy;Straight;500;11080;5;1.00;7.00;10.00;;2000000;14200000.00;2D 0H 00M;;5/' +
        'Glory MK2;;2;5;HEAVY;Energy;Straight;500;12180;5;1.00;7.00;10.00;;4000000;14520000.00;3D 0H 00M;;5/' +
        'Glory MK2;;2;6;HEAVY;Energy;Straight;500;13380;5;1.00;7.00;10.00;;6000000;14920000.00;4D 0H 00M;;5/' +
        'Glory MK2;;2;7;HEAVY;Energy;Straight;500;14710;5;1.00;7.00;10.00;;11000000;15320000.00;5D 0H 00M;;5/' +
        'Glory MK2;;2;8;HEAVY;Energy;Straight;500;16170;5;1.00;7.00;10.00;;17000000;16320000.00;6D 0H 00M;;5/' +
        'Glory MK2;;2;9;HEAVY;Energy;Straight;500;17770;5;1.00;7.00;10.00;;32000000;17520000.00;7D 0H 00M;;5/' +
        'Glory MK2;;2;10;HEAVY;Energy;Straight;500;19520;5;1.00;7.00;10.00;;43000000;20520000.00;8D 0H 00M;;5/' +
        'Glory MK2;;2;11;HEAVY;Energy;Straight;500;21470;5;1.00;7.00;10.00;;55000000;22720000.00;9D 0H 00M;;5/' +
        'Glory MK2;;2;12;HEAVY;Energy;Straight;500;23580;5;1.00;7.00;10.00;;0;25120000.00;0D 0H 00M;;5/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Viper;;1;1;HEAVY;Energy;Straight;500;361;150;10.00;15.00;10.00;;100000;2000000;0D 3H 30M;195;5;0;;;1/' +
        'Viper;;1;2;HEAVY;Energy;Straight;500;398;150;10.00;15.00;10.00;;200000;2020000;0D 6H 00M;215;5/' +
        'Viper;;1;3;HEAVY;Energy;Straight;500;437;150;10.00;15.00;10.00;;400000;2040000;0D 12H 00M;235;5/' +
        'Viper;;1;4;HEAVY;Energy;Straight;500;480;150;10.00;15.00;10.00;;2000000;2080000;0D 18H 00M;260;5/' +
        'Viper;;1;5;HEAVY;Energy;Straight;500;528;150;10.00;15.00;10.00;;3000000;2400000;1D 0H 00M;285;5/' +
        'Viper;;1;6;HEAVY;Energy;Straight;500;580;150;10.00;15.00;10.00;;4000000;2600000;2D 0H 00M;310;5/' +
        'Viper;;1;7;HEAVY;Energy;Straight;500;637;150;10.00;15.00;10.00;;8000000;2800000;3D 0H 00M;345;5/' +
        'Viper;;1;8;HEAVY;Energy;Straight;500;700;150;10.00;15.00;10.00;;13000000;3600000;4D 0H 00M;375;5/' +
        'Viper;;1;9;HEAVY;Energy;Straight;500;769;150;10.00;15.00;10.00;;25000000;4600000;5D 0H 00M;415;5/' +
        'Viper;;1;10;HEAVY;Energy;Straight;500;845;150;10.00;15.00;10.00;;35000000;7000000;6D 0H 00M;455;5/' +
        'Viper;;1;11;HEAVY;Energy;Straight;500;929;150;10.00;15.00;10.00;;45000000;9000000;7D 0H 00M;500;5/' +
        'Viper;;1;12;HEAVY;Energy;Straight;500;1021;150;10.00;15.00;10.00;;0;11000000;0D 0H 00M;550;5/' +
        'Viper MK2;;2;1;HEAVY;Energy;Straight;500;433;150;10.00;15.00;10.00;;100000;11200000;0D 3H 30M;235;5/' +
        'Viper MK2;;2;2;HEAVY;Energy;Straight;500;478;150;10.00;15.00;10.00;;200000;11220000;0D 6H 00M;255;5/' +
        'Viper MK2;;2;3;HEAVY;Energy;Straight;500;524;150;10.00;15.00;10.00;;400000;11240000;0D 12H 00M;280;5/' +
        'Viper MK2;;2;4;HEAVY;Energy;Straight;500;576;150;10.00;15.00;10.00;;2000000;11280000;0D 18H 00M;310;5/' +
        'Viper MK2;;2;5;HEAVY;Energy;Straight;500;634;150;10.00;15.00;10.00;;3000000;11600000;1D 0H 00M;340;5/' +
        'Viper MK2;;2;6;HEAVY;Energy;Straight;500;696;150;10.00;15.00;10.00;;4000000;11800000;2D 0H 00M;375;5/' +
        'Viper MK2;;2;7;HEAVY;Energy;Straight;500;764;150;10.00;15.00;10.00;;8000000;12000000;3D 0H 00M;410;5/' +
        'Viper MK2;;2;8;HEAVY;Energy;Straight;500;840;150;10.00;15.00;10.00;;13000000;12800000;4D 0H 00M;455;5/' +
        'Viper MK2;;2;9;HEAVY;Energy;Straight;500;923;150;10.00;15.00;10.00;;25000000;13800000;5D 0H 00M;495;5/' +
        'Viper MK2;;2;10;HEAVY;Energy;Straight;500;1014;150;10.00;15.00;10.00;;35000000;16200000;6D 0H 00M;545;5/' +
        'Viper MK2;;2;11;HEAVY;Energy;Straight;500;1115;150;10.00;15.00;10.00;;45000000;18200000;7D 0H 00M;600;5/' +
        'Viper MK2;;2;12;HEAVY;Energy;Straight;500;1225;150;10.00;15.00;10.00;;0;20200000;0D 0H 00M;660;5/%' +
        /*-----------------17 ур эфф/18 длит эфф/19 пер во вр стр/20 врем пер одн пули/21 врем разр обоймы/22 рассеив*/
        'Ancile;;1;3;HEAVY;;;;;;;;;;80000;600000;0D 2H 00M;;47000;1410;9400/' +
        'Ancile;;1;4;HEAVY;;;;;;;;;;400000;619000;0D 8H 00M;;52000;1560;10400/' +
        'Ancile;;1;5;HEAVY;;;;;;;;;;800000;696000;0D 16H 48M;;56000;1680;11200/' +
        'Ancile;;1;6;HEAVY;;;;;;;;;;1600000;792000;1D 9H 00M;;62000;1860;12400/' +
        'Ancile;;1;7;HEAVY;;;;;;;;;;3000000;980000;1D 18H 00M;;68000;2040;13600/' +
        'Ancile;;1;8;HEAVY;;;;;;;;;;6000000;1320000;2D 2H 24M;;75000;2250;15000/' +
        'Ancile;;1;9;HEAVY;;;;;;;;;;10000000;2040000;2D 12H 00M;;81000;2430;16200/' +
        'Ancile;;1;10;HEAVY;;;;;;;;;;16000000;3000000;3D 12H 00M;;89000;2670;17800/' +
        'Ancile;;1;11;HEAVY;;;;;;;;;;26000000;4400000;4D 18H 00M;;99000;2970;19800/' +
        'Ancile;;1;12;HEAVY;;;;;;;;;;0;6800000;0D 0H 00M;;109000;3270;21800/' +
        'Ancile MK2;;2;1;HEAVY;;;;;;;;;;20000;7000000;0D 0H 10M;;47000;1410;9400/' +
        'Ancile MK2;;2;2;HEAVY;;;;;;;;;;40000;7005000;0D 1H 00M;;52000;1560;10400/' +
        'Ancile MK2;;2;3;HEAVY;;;;;;;;;;80000;7010000;0D 2H 00M;;56000;1680;11200/' +
        'Ancile MK2;;2;4;HEAVY;;;;;;;;;;400000;7019000;0D 8H 00M;;62000;1860;12400/' +
        'Ancile MK2;;2;5;HEAVY;;;;;;;;;;800000;7096000;0D 16H 48M;;67000;2010;13400/' +
        'Ancile MK2;;2;6;HEAVY;;;;;;;;;;1600000;7192000;1D 9H 00M;;74000;2220;14800/' +
        'Ancile MK2;;2;7;HEAVY;;;;;;;;;;3000000;7380000;1D 18H 00M;;81000;2430;16200/' +
        'Ancile MK2;;2;8;HEAVY;;;;;;;;;;6000000;7720000;2D 2H 24M;;89000;2670;17800/' +
        'Ancile MK2;;2;9;HEAVY;;;;;;;;;;10000000;8440000;2D 12H 00M;;98000;2940;19600/' +
        'Ancile MK2;;2;10;HEAVY;;;;;;;;;;16000000;9400000;3D 12H 00M;;107000;3210;21400/' +
        'Ancile MK2;;2;11;HEAVY;;;;;;;;;;26000000;10800000;4D 18H 00M;;118000;3540;23600/' +
        'Ancile MK2;;2;12;HEAVY;;;;;;;;;;0;13200000;0D 0H 00M;;131000;3930;26200';

})();

