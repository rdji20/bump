import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useRef, useState } from "react";
import {
  Image, Pressable, ScrollView, StyleSheet, Text, View
} from "react-native";
import * as RequestManager from '../../utils/RequestManager';
import Card from "../sharedComponents/card";

export function ProfileScreen() {
  const Tab = createMaterialTopTabNavigator();

  [tabState, setTabState] = useState(false);

const assets = {
   "202_sea.jpg": require("../../sea_images_folder_resized/202_sea.jpg"),
   "203_sea.jpg": require("../../sea_images_folder_resized/203_sea.jpg"),
   "204_sea.jpg": require("../../sea_images_folder_resized/204_sea.jpg"),
   "205_sea.jpg": require("../../sea_images_folder_resized/205_sea.jpg"),
   "206_sea.jpg": require("../../sea_images_folder_resized/206_sea.jpg"),
   "207_sea.jpg": require("../../sea_images_folder_resized/207_sea.jpg"),
   "208_sea.jpg": require("../../sea_images_folder_resized/208_sea.jpg"),
   "209_sea.jpg": require("../../sea_images_folder_resized/209_sea.jpg"),
   "210_sea.jpg": require("../../sea_images_folder_resized/210_sea.jpg"),
   "211_sea.jpg": require("../../sea_images_folder_resized/211_sea.jpg"),
   "212_sea.jpg": require("../../sea_images_folder_resized/212_sea.jpg"),
   "213_sea.jpg": require("../../sea_images_folder_resized/213_sea.jpg"),
   "214_sea.jpg": require("../../sea_images_folder_resized/214_sea.jpg"),
   "215_sea.jpg": require("../../sea_images_folder_resized/215_sea.jpg"),
   "216_sea.jpg": require("../../sea_images_folder_resized/216_sea.jpg"),
   "217_sea.jpg": require("../../sea_images_folder_resized/217_sea.jpg"),
   "218_sea.jpg": require("../../sea_images_folder_resized/218_sea.jpg"),
   "219_sea.jpg": require("../../sea_images_folder_resized/219_sea.jpg"),
   "220_sea.jpg": require("../../sea_images_folder_resized/220_sea.jpg"),
   "221_sea.jpg": require("../../sea_images_folder_resized/221_sea.jpg"),
   "222_sea.jpg": require("../../sea_images_folder_resized/222_sea.jpg"),
   "223_sea.jpg": require("../../sea_images_folder_resized/223_sea.jpg"),
   "224_sea.jpg": require("../../sea_images_folder_resized/224_sea.jpg"),
   "225_sea.jpg": require("../../sea_images_folder_resized/225_sea.jpg"),
   "226_sea.jpg": require("../../sea_images_folder_resized/226_sea.jpg"),
   "227_sea.jpg": require("../../sea_images_folder_resized/227_sea.jpg"),
   "228_sea.jpg": require("../../sea_images_folder_resized/228_sea.jpg"),
   "229_sea.jpg": require("../../sea_images_folder_resized/229_sea.jpg"),
   "230_sea.jpg": require("../../sea_images_folder_resized/230_sea.jpg"),
   "231_sea.jpg": require("../../sea_images_folder_resized/231_sea.jpg"),
   "232_sea.jpg": require("../../sea_images_folder_resized/232_sea.jpg"),
   "233_sea.jpg": require("../../sea_images_folder_resized/233_sea.jpg"),
   "234_sea.jpg": require("../../sea_images_folder_resized/234_sea.jpg"),
   "235_sea.jpg": require("../../sea_images_folder_resized/235_sea.jpg"),
   "236_sea.jpg": require("../../sea_images_folder_resized/236_sea.jpg"),
   "237_sea.jpg": require("../../sea_images_folder_resized/237_sea.jpg"),
   "238_sea.jpg": require("../../sea_images_folder_resized/238_sea.jpg"),
   "239_sea.jpg": require("../../sea_images_folder_resized/239_sea.jpg"),
   "240_sea.jpg": require("../../sea_images_folder_resized/240_sea.jpg"),
   "241_sea.jpg": require("../../sea_images_folder_resized/241_sea.jpg"),
   "242_sea.jpg": require("../../sea_images_folder_resized/242_sea.jpg"),
   "243_sea.jpg": require("../../sea_images_folder_resized/243_sea.jpg"),
   "244_sea.jpg": require("../../sea_images_folder_resized/244_sea.jpg"),
   "245_sea.jpg": require("../../sea_images_folder_resized/245_sea.jpg"),
   "246_sea.jpg": require("../../sea_images_folder_resized/246_sea.jpg"),
   "247_sea.jpg": require("../../sea_images_folder_resized/247_sea.jpg"),
   "248_sea.jpg": require("../../sea_images_folder_resized/248_sea.jpg"),
   "249_sea.jpg": require("../../sea_images_folder_resized/249_sea.jpg"),
   "250_sea.jpg": require("../../sea_images_folder_resized/250_sea.jpg"),
   "251_sea.jpg": require("../../sea_images_folder_resized/251_sea.jpg"),
   "252_sea.jpg": require("../../sea_images_folder_resized/252_sea.jpg"),
   "253_sea.jpg": require("../../sea_images_folder_resized/253_sea.jpg"),
   "254_sea.jpg": require("../../sea_images_folder_resized/254_sea.jpg"),
   "255_sea.jpg": require("../../sea_images_folder_resized/255_sea.jpg"),
   "256_sea.jpg": require("../../sea_images_folder_resized/256_sea.jpg"),
   "257_sea.jpg": require("../../sea_images_folder_resized/257_sea.jpg"),
   "258_sea.jpg": require("../../sea_images_folder_resized/258_sea.jpg"),
   "259_sea.jpg": require("../../sea_images_folder_resized/259_sea.jpg"),
   "260_sea.jpg": require("../../sea_images_folder_resized/260_sea.jpg"),
   "261_sea.jpg": require("../../sea_images_folder_resized/261_sea.jpg"),
   "262_sea.jpg": require("../../sea_images_folder_resized/262_sea.jpg"),
   "263_sea.jpg": require("../../sea_images_folder_resized/263_sea.jpg"),
   "264_sea.jpg": require("../../sea_images_folder_resized/264_sea.jpg"),
   "265_sea.jpg": require("../../sea_images_folder_resized/265_sea.jpg"),
   "266_sea.jpg": require("../../sea_images_folder_resized/266_sea.jpg"),
   "267_sea.jpg": require("../../sea_images_folder_resized/267_sea.jpg"),
   "268_sea.jpg": require("../../sea_images_folder_resized/268_sea.jpg"),
   "269_sea.jpg": require("../../sea_images_folder_resized/269_sea.jpg"),
   "270_sea.jpg": require("../../sea_images_folder_resized/270_sea.jpg"),
   "271_sea.jpg": require("../../sea_images_folder_resized/271_sea.jpg"),
   "272_sea.jpg": require("../../sea_images_folder_resized/272_sea.jpg"),
   "273_sea.jpg": require("../../sea_images_folder_resized/273_sea.jpg"),
   "274_sea.jpg": require("../../sea_images_folder_resized/274_sea.jpg"),
   "275_sea.jpg": require("../../sea_images_folder_resized/275_sea.jpg"),
   "276_sea.jpg": require("../../sea_images_folder_resized/276_sea.jpg"),
   "277_sea.jpg": require("../../sea_images_folder_resized/277_sea.jpg"),
   "278_sea.jpg": require("../../sea_images_folder_resized/278_sea.jpg"),
   "280_sea.jpg": require("../../sea_images_folder_resized/280_sea.jpg"),
   "281_sea.jpg": require("../../sea_images_folder_resized/281_sea.jpg"),
   "282_sea.jpg": require("../../sea_images_folder_resized/282_sea.jpg"),
   "283_sea.jpg": require("../../sea_images_folder_resized/283_sea.jpg"),
   "284_sea.jpg": require("../../sea_images_folder_resized/284_sea.jpg"),
   "285_sea.jpg": require("../../sea_images_folder_resized/285_sea.jpg"),
   "286_sea.jpg": require("../../sea_images_folder_resized/286_sea.jpg"),
   "287_sea.jpg": require("../../sea_images_folder_resized/287_sea.jpg"),
   "288_sea.jpg": require("../../sea_images_folder_resized/288_sea.jpg"),
   "289_sea.jpg": require("../../sea_images_folder_resized/289_sea.jpg"),
   "290_sea.jpg": require("../../sea_images_folder_resized/290_sea.jpg"),
   "291_sea.jpg": require("../../sea_images_folder_resized/291_sea.jpg"),
   "292_sea.jpg": require("../../sea_images_folder_resized/292_sea.jpg"),
   "293_sea.jpg": require("../../sea_images_folder_resized/293_sea.jpg"),
   "294_sea.jpg": require("../../sea_images_folder_resized/294_sea.jpg"),
   "295_sea.jpg": require("../../sea_images_folder_resized/295_sea.jpg"),
   "296_sea.jpg": require("../../sea_images_folder_resized/296_sea.jpg"),
   "297_sea.jpg": require("../../sea_images_folder_resized/297_sea.jpg"),
   "298_sea.jpg": require("../../sea_images_folder_resized/298_sea.jpg"),
   "299_sea.jpg": require("../../sea_images_folder_resized/299_sea.jpg"),
   "300_sea.jpg": require("../../sea_images_folder_resized/300_sea.jpg"),
   "301_sea.jpg": require("../../sea_images_folder_resized/301_sea.jpg"),
   "302_sea.jpg": require("../../sea_images_folder_resized/302_sea.jpg"),
   "303_sea.jpg": require("../../sea_images_folder_resized/303_sea.jpg"),
   "304_sea.jpg": require("../../sea_images_folder_resized/304_sea.jpg"),
   "305_sea.jpg": require("../../sea_images_folder_resized/305_sea.jpg"),
   "306_sea.jpg": require("../../sea_images_folder_resized/306_sea.jpg"),
   "307_sea.jpg": require("../../sea_images_folder_resized/307_sea.jpg"),
   "308_sea.jpg": require("../../sea_images_folder_resized/308_sea.jpg"),
   "309_sea.jpg": require("../../sea_images_folder_resized/309_sea.jpg"),
   "310_sea.jpg": require("../../sea_images_folder_resized/310_sea.jpg"),
   "311_sea.jpg": require("../../sea_images_folder_resized/311_sea.jpg"),
   "312_sea.jpg": require("../../sea_images_folder_resized/312_sea.jpg"),
   "313_sea.jpg": require("../../sea_images_folder_resized/313_sea.jpg"),
   "314_sea.jpg": require("../../sea_images_folder_resized/314_sea.jpg"),
   "315_sea.jpg": require("../../sea_images_folder_resized/315_sea.jpg"),
   "316_sea.jpg": require("../../sea_images_folder_resized/316_sea.jpg"),
   "317_sea.jpg": require("../../sea_images_folder_resized/317_sea.jpg"),
   "318_sea.jpg": require("../../sea_images_folder_resized/318_sea.jpg"),
   "319_sea.jpg": require("../../sea_images_folder_resized/319_sea.jpg"),
   "320_sea.jpg": require("../../sea_images_folder_resized/320_sea.jpg"),
   "321_sea.jpg": require("../../sea_images_folder_resized/321_sea.jpg"),
   "322_sea.jpg": require("../../sea_images_folder_resized/322_sea.jpg"),
   "323_sea.jpg": require("../../sea_images_folder_resized/323_sea.jpg"),
   "324_sea.jpg": require("../../sea_images_folder_resized/324_sea.jpg"),
   "325_sea.jpg": require("../../sea_images_folder_resized/325_sea.jpg"),
   "326_sea.jpg": require("../../sea_images_folder_resized/326_sea.jpg"),
   "327_sea.jpg": require("../../sea_images_folder_resized/327_sea.jpg"),
   "328_sea.jpg": require("../../sea_images_folder_resized/328_sea.jpg"),
   "329_sea.jpg": require("../../sea_images_folder_resized/329_sea.jpg"),
   "330_sea.jpg": require("../../sea_images_folder_resized/330_sea.jpg"),
   "331_sea.jpg": require("../../sea_images_folder_resized/331_sea.jpg"),
   "332_sea.jpg": require("../../sea_images_folder_resized/332_sea.jpg"),
   "333_sea.jpg": require("../../sea_images_folder_resized/333_sea.jpg"),
   "334_sea.jpg": require("../../sea_images_folder_resized/334_sea.jpg"),
   "335_sea.jpg": require("../../sea_images_folder_resized/335_sea.jpg"),
   "336_sea.jpg": require("../../sea_images_folder_resized/336_sea.jpg"),
   "337_sea.jpg": require("../../sea_images_folder_resized/337_sea.jpg"),
   "338_sea.jpg": require("../../sea_images_folder_resized/338_sea.jpg"),
   "339_sea.jpg": require("../../sea_images_folder_resized/339_sea.jpg"),
   "340_sea.jpg": require("../../sea_images_folder_resized/340_sea.jpg"),
   "341_sea.jpg": require("../../sea_images_folder_resized/341_sea.jpg"),
   "342_sea.jpg": require("../../sea_images_folder_resized/342_sea.jpg"),
   "343_sea.jpg": require("../../sea_images_folder_resized/343_sea.jpg"),
   "344_sea.jpg": require("../../sea_images_folder_resized/344_sea.jpg"),
   "345_sea.jpg": require("../../sea_images_folder_resized/345_sea.jpg"),
   "346_sea.jpg": require("../../sea_images_folder_resized/346_sea.jpg"),
   "347_sea.jpg": require("../../sea_images_folder_resized/347_sea.jpg"),
   "348_sea.jpg": require("../../sea_images_folder_resized/348_sea.jpg"),
   "349_sea.jpg": require("../../sea_images_folder_resized/349_sea.jpg"),
   "350_sea.jpg": require("../../sea_images_folder_resized/350_sea.jpg"),
   "351_sea.jpg": require("../../sea_images_folder_resized/351_sea.jpg"),
   "352_sea.jpg": require("../../sea_images_folder_resized/352_sea.jpg"),
   "353_sea.jpg": require("../../sea_images_folder_resized/353_sea.jpg"),
   "354_sea.jpg": require("../../sea_images_folder_resized/354_sea.jpg"),
   "355_sea.jpg": require("../../sea_images_folder_resized/355_sea.jpg"),
   "357_sea.jpg": require("../../sea_images_folder_resized/357_sea.jpg"),
   "358_sea.jpg": require("../../sea_images_folder_resized/358_sea.jpg"),
   "359_sea.jpg": require("../../sea_images_folder_resized/359_sea.jpg"),
   "360_sea.jpg": require("../../sea_images_folder_resized/360_sea.jpg"),
   "361_sea.jpg": require("../../sea_images_folder_resized/361_sea.jpg"),
   "362_sea.jpg": require("../../sea_images_folder_resized/362_sea.jpg"),
   "363_sea.jpg": require("../../sea_images_folder_resized/363_sea.jpg"),
   "364_sea.jpg": require("../../sea_images_folder_resized/364_sea.jpg"),
   "365_sea.jpg": require("../../sea_images_folder_resized/365_sea.jpg"),
   "366_sea.jpg": require("../../sea_images_folder_resized/366_sea.jpg"),
   "367_sea.jpg": require("../../sea_images_folder_resized/367_sea.jpg"),
   "368_sea.jpg": require("../../sea_images_folder_resized/368_sea.jpg"),
   "369_sea.jpg": require("../../sea_images_folder_resized/369_sea.jpg"),
   "370_sea.jpg": require("../../sea_images_folder_resized/370_sea.jpg"),
   "371_sea.jpg": require("../../sea_images_folder_resized/371_sea.jpg"),
   "372_sea.jpg": require("../../sea_images_folder_resized/372_sea.jpg"),
   "374_sea.jpg": require("../../sea_images_folder_resized/374_sea.jpg"),
   "375_sea.jpg": require("../../sea_images_folder_resized/375_sea.jpg"),
   "376_sea.jpg": require("../../sea_images_folder_resized/376_sea.jpg"),
   "377_sea.jpg": require("../../sea_images_folder_resized/377_sea.jpg"),
   "378_sea.jpg": require("../../sea_images_folder_resized/378_sea.jpg"),
   "379_sea.jpg": require("../../sea_images_folder_resized/379_sea.jpg"),
   "380_sea.jpg": require("../../sea_images_folder_resized/380_sea.jpg"),
   "381_sea.jpg": require("../../sea_images_folder_resized/381_sea.jpg"),
   "382_sea.jpg": require("../../sea_images_folder_resized/382_sea.jpg"),
   "383_sea.jpg": require("../../sea_images_folder_resized/383_sea.jpg"),
   "384_sea.jpg": require("../../sea_images_folder_resized/384_sea.jpg"),
   "385_sea.jpg": require("../../sea_images_folder_resized/385_sea.jpg"),
   "386_sea.jpg": require("../../sea_images_folder_resized/386_sea.jpg"),
   "387_sea.jpg": require("../../sea_images_folder_resized/387_sea.jpg"),
   "388_sea.jpg": require("../../sea_images_folder_resized/388_sea.jpg"),
   "389_sea.jpg": require("../../sea_images_folder_resized/389_sea.jpg"),
   "390_sea.jpg": require("../../sea_images_folder_resized/390_sea.jpg"),
   "391_sea.jpg": require("../../sea_images_folder_resized/391_sea.jpg"),
   "393_sea.jpg": require("../../sea_images_folder_resized/393_sea.jpg"),
   "394_sea.jpg": require("../../sea_images_folder_resized/394_sea.jpg"),
   "395_sea.jpg": require("../../sea_images_folder_resized/395_sea.jpg"),
   "396_sea.jpg": require("../../sea_images_folder_resized/396_sea.jpg"),
   "397_sea.jpg": require("../../sea_images_folder_resized/397_sea.jpg"),
   "398_sea.jpg": require("../../sea_images_folder_resized/398_sea.jpg"),
   "399_sea.jpg": require("../../sea_images_folder_resized/399_sea.jpg"),
   "400_sea.jpg": require("../../sea_images_folder_resized/400_sea.jpg"),
   "401_sea.jpg": require("../../sea_images_folder_resized/401_sea.jpg"),
   "402_sea.jpg": require("../../sea_images_folder_resized/402_sea.jpg"),
   "403_sea.jpg": require("../../sea_images_folder_resized/403_sea.jpg"),
   "404_sea.jpg": require("../../sea_images_folder_resized/404_sea.jpg"),
   "405_sea.jpg": require("../../sea_images_folder_resized/405_sea.jpg"),
   "406_sea.jpg": require("../../sea_images_folder_resized/406_sea.jpg"),
   "407_sea.jpg": require("../../sea_images_folder_resized/407_sea.jpg"),
   "408_sea.jpg": require("../../sea_images_folder_resized/408_sea.jpg"),
   "409_sea.jpg": require("../../sea_images_folder_resized/409_sea.jpg"),
   "410_sea.jpg": require("../../sea_images_folder_resized/410_sea.jpg"),
   "411_sea.jpg": require("../../sea_images_folder_resized/411_sea.jpg"),
   "412_sea.jpg": require("../../sea_images_folder_resized/412_sea.jpg"),
   "413_sea.jpg": require("../../sea_images_folder_resized/413_sea.jpg"),
   "414_sea.jpg": require("../../sea_images_folder_resized/414_sea.jpg"),
   "415_sea.jpg": require("../../sea_images_folder_resized/415_sea.jpg"),
   "416_sea.jpg": require("../../sea_images_folder_resized/416_sea.jpg"),
   "417_sea.jpg": require("../../sea_images_folder_resized/417_sea.jpg"),
   "418_sea.jpg": require("../../sea_images_folder_resized/418_sea.jpg"),
   "419_sea.jpg": require("../../sea_images_folder_resized/419_sea.jpg"),
   "420_sea.jpg": require("../../sea_images_folder_resized/420_sea.jpg"),
   "421_sea.jpg": require("../../sea_images_folder_resized/421_sea.jpg"),
   "423_sea.jpg": require("../../sea_images_folder_resized/423_sea.jpg"),
   "424_sea.jpg": require("../../sea_images_folder_resized/424_sea.jpg"),
   "425_sea.jpg": require("../../sea_images_folder_resized/425_sea.jpg"),
   "426_sea.jpg": require("../../sea_images_folder_resized/426_sea.jpg"),
   "427_sea.jpg": require("../../sea_images_folder_resized/427_sea.jpg"),
   "428_sea.jpg": require("../../sea_images_folder_resized/428_sea.jpg"),
   "429_sea.jpg": require("../../sea_images_folder_resized/429_sea.jpg"),
   "430_sea.jpg": require("../../sea_images_folder_resized/430_sea.jpg"),
   "432_sea.jpg": require("../../sea_images_folder_resized/432_sea.jpg"),
   "433_sea.jpg": require("../../sea_images_folder_resized/433_sea.jpg"),
   "434_sea.jpg": require("../../sea_images_folder_resized/434_sea.jpg"),
   "435_sea.jpg": require("../../sea_images_folder_resized/435_sea.jpg"),
   "437_sea.jpg": require("../../sea_images_folder_resized/437_sea.jpg"),
   "438_sea.jpg": require("../../sea_images_folder_resized/438_sea.jpg"),
   "439_sea.jpg": require("../../sea_images_folder_resized/439_sea.jpg"),
   "440_sea.jpg": require("../../sea_images_folder_resized/440_sea.jpg"),
   "441_sea.jpg": require("../../sea_images_folder_resized/441_sea.jpg"),
   "442_sea.jpg": require("../../sea_images_folder_resized/442_sea.jpg"),
   "443_sea.jpg": require("../../sea_images_folder_resized/443_sea.jpg"),
   "444_sea.jpg": require("../../sea_images_folder_resized/444_sea.jpg"),
   "445_sea.jpg": require("../../sea_images_folder_resized/445_sea.jpg"),
   "446_sea.jpg": require("../../sea_images_folder_resized/446_sea.jpg"),
   "447_sea.jpg": require("../../sea_images_folder_resized/447_sea.jpg"),
   "448_sea.jpg": require("../../sea_images_folder_resized/448_sea.jpg"),
   "449_sea.jpg": require("../../sea_images_folder_resized/449_sea.jpg"),
   "450_sea.jpg": require("../../sea_images_folder_resized/450_sea.jpg"),
   "451_sea.jpg": require("../../sea_images_folder_resized/451_sea.jpg"),
   "452_sea.jpg": require("../../sea_images_folder_resized/452_sea.jpg"),
   "453_sea.jpg": require("../../sea_images_folder_resized/453_sea.jpg"),
   "454_sea.jpg": require("../../sea_images_folder_resized/454_sea.jpg"),
   "455_sea.jpg": require("../../sea_images_folder_resized/455_sea.jpg"),
   "456_sea.jpg": require("../../sea_images_folder_resized/456_sea.jpg"),
   "457_sea.jpg": require("../../sea_images_folder_resized/457_sea.jpg"),
   "458_sea.jpg": require("../../sea_images_folder_resized/458_sea.jpg"),
   "459_sea.jpg": require("../../sea_images_folder_resized/459_sea.jpg"),
   "460_sea.jpg": require("../../sea_images_folder_resized/460_sea.jpg"),
   "461_sea.jpg": require("../../sea_images_folder_resized/461_sea.jpg"),
   "462_sea.jpg": require("../../sea_images_folder_resized/462_sea.jpg"),
   "463_sea.jpg": require("../../sea_images_folder_resized/463_sea.jpg"),
   "464_sea.jpg": require("../../sea_images_folder_resized/464_sea.jpg"),
   "465_sea.jpg": require("../../sea_images_folder_resized/465_sea.jpg"),
   "466_sea.jpg": require("../../sea_images_folder_resized/466_sea.jpg"),
   "467_sea.jpg": require("../../sea_images_folder_resized/467_sea.jpg"),
   "468_sea.jpg": require("../../sea_images_folder_resized/468_sea.jpg"),
   "469_sea.jpg": require("../../sea_images_folder_resized/469_sea.jpg"),
   "470_sea.jpg": require("../../sea_images_folder_resized/470_sea.jpg"),
   "471_sea.jpg": require("../../sea_images_folder_resized/471_sea.jpg"),
   "472_sea.jpg": require("../../sea_images_folder_resized/472_sea.jpg"),
   "473_sea.jpg": require("../../sea_images_folder_resized/473_sea.jpg"),
   "474_sea.jpg": require("../../sea_images_folder_resized/474_sea.jpg"),
   "476_sea.jpg": require("../../sea_images_folder_resized/476_sea.jpg"),
   "477_sea.jpg": require("../../sea_images_folder_resized/477_sea.jpg"),
   "478_sea.jpg": require("../../sea_images_folder_resized/478_sea.jpg"),
   "479_sea.jpg": require("../../sea_images_folder_resized/479_sea.jpg"),
   "480_sea.jpg": require("../../sea_images_folder_resized/480_sea.jpg"),
   "481_sea.jpg": require("../../sea_images_folder_resized/481_sea.jpg"),
   "482_sea.jpg": require("../../sea_images_folder_resized/482_sea.jpg"),
   "484_sea.jpg": require("../../sea_images_folder_resized/484_sea.jpg"),
   "485_sea.jpg": require("../../sea_images_folder_resized/485_sea.jpg"),
   "486_sea.jpg": require("../../sea_images_folder_resized/486_sea.jpg"),
   "487_sea.jpg": require("../../sea_images_folder_resized/487_sea.jpg"),
   "488_sea.jpg": require("../../sea_images_folder_resized/488_sea.jpg"),
   "489_sea.jpg": require("../../sea_images_folder_resized/489_sea.jpg"),
   "490_sea.jpg": require("../../sea_images_folder_resized/490_sea.jpg"),
   "491_sea.jpg": require("../../sea_images_folder_resized/491_sea.jpg"),
   "492_sea.jpg": require("../../sea_images_folder_resized/492_sea.jpg"),
   "493_sea.jpg": require("../../sea_images_folder_resized/493_sea.jpg"),
   "494_sea.jpg": require("../../sea_images_folder_resized/494_sea.jpg"),
   "495_sea.jpg": require("../../sea_images_folder_resized/495_sea.jpg"),
   "496_sea.jpg": require("../../sea_images_folder_resized/496_sea.jpg"),
   "498_sea.jpg": require("../../sea_images_folder_resized/498_sea.jpg"),
   "499_sea.jpg": require("../../sea_images_folder_resized/499_sea.jpg"),
   "500_sea.jpg": require("../../sea_images_folder_resized/500_sea.jpg"),
   "501_sea.jpg": require("../../sea_images_folder_resized/501_sea.jpg"),
   "502_sea.jpg": require("../../sea_images_folder_resized/502_sea.jpg"),
   "504_sea.jpg": require("../../sea_images_folder_resized/504_sea.jpg"),
   "505_sea.jpg": require("../../sea_images_folder_resized/505_sea.jpg"),
   "506_sea.jpg": require("../../sea_images_folder_resized/506_sea.jpg"),
   "507_sea.jpg": require("../../sea_images_folder_resized/507_sea.jpg"),
   "508_sea.jpg": require("../../sea_images_folder_resized/508_sea.jpg"),
   "509_sea.jpg": require("../../sea_images_folder_resized/509_sea.jpg"),
   "510_sea.jpg": require("../../sea_images_folder_resized/510_sea.jpg"),
   "511_sea.jpg": require("../../sea_images_folder_resized/511_sea.jpg"),
   "512_sea.jpg": require("../../sea_images_folder_resized/512_sea.jpg"),
   "513_sea.jpg": require("../../sea_images_folder_resized/513_sea.jpg"),
   "514_sea.jpg": require("../../sea_images_folder_resized/514_sea.jpg"),
   "515_sea.jpg": require("../../sea_images_folder_resized/515_sea.jpg"),
   "516_sea.jpg": require("../../sea_images_folder_resized/516_sea.jpg"),
   "518_sea.jpg": require("../../sea_images_folder_resized/518_sea.jpg"),
   "519_sea.jpg": require("../../sea_images_folder_resized/519_sea.jpg"),
   "520_sea.jpg": require("../../sea_images_folder_resized/520_sea.jpg"),
   "521_sea.jpg": require("../../sea_images_folder_resized/521_sea.jpg"),
   "522_sea.jpg": require("../../sea_images_folder_resized/522_sea.jpg"),
   "523_sea.jpg": require("../../sea_images_folder_resized/523_sea.jpg"),
   "524_sea.jpg": require("../../sea_images_folder_resized/524_sea.jpg"),
   "525_sea.jpg": require("../../sea_images_folder_resized/525_sea.jpg"),
   "526_sea.jpg": require("../../sea_images_folder_resized/526_sea.jpg"),
   "527_sea.jpg": require("../../sea_images_folder_resized/527_sea.jpg"),
   "528_sea.jpg": require("../../sea_images_folder_resized/528_sea.jpg"),
   "529_sea.jpg": require("../../sea_images_folder_resized/529_sea.jpg"),
   "530_sea.jpg": require("../../sea_images_folder_resized/530_sea.jpg"),
   "531_sea.jpg": require("../../sea_images_folder_resized/531_sea.jpg"),
   "532_sea.jpg": require("../../sea_images_folder_resized/532_sea.jpg"),
   "533_sea.jpg": require("../../sea_images_folder_resized/533_sea.jpg"),
   "534_sea.jpg": require("../../sea_images_folder_resized/534_sea.jpg"),
   "535_sea.jpg": require("../../sea_images_folder_resized/535_sea.jpg"),
   "536_sea.jpg": require("../../sea_images_folder_resized/536_sea.jpg"),
   "537_sea.jpg": require("../../sea_images_folder_resized/537_sea.jpg"),
   "538_sea.jpg": require("../../sea_images_folder_resized/538_sea.jpg"),
   "539_sea.jpg": require("../../sea_images_folder_resized/539_sea.jpg"),
   "540_sea.jpg": require("../../sea_images_folder_resized/540_sea.jpg"),
   "541_sea.jpg": require("../../sea_images_folder_resized/541_sea.jpg"),
   "542_sea.jpg": require("../../sea_images_folder_resized/542_sea.jpg"),
   "543_sea.jpg": require("../../sea_images_folder_resized/543_sea.jpg"),
   "545_sea.jpg": require("../../sea_images_folder_resized/545_sea.jpg"),
   "546_sea.jpg": require("../../sea_images_folder_resized/546_sea.jpg"),
   "548_sea.jpg": require("../../sea_images_folder_resized/548_sea.jpg"),
   "549_sea.jpg": require("../../sea_images_folder_resized/549_sea.jpg"),
   "550_sea.jpg": require("../../sea_images_folder_resized/550_sea.jpg"),
   "551_sea.jpg": require("../../sea_images_folder_resized/551_sea.jpg"),
   "552_sea.jpg": require("../../sea_images_folder_resized/552_sea.jpg"),
   "553_sea.jpg": require("../../sea_images_folder_resized/553_sea.jpg"),
   "554_sea.jpg": require("../../sea_images_folder_resized/554_sea.jpg"),
   "555_sea.jpg": require("../../sea_images_folder_resized/555_sea.jpg"),
   "556_sea.jpg": require("../../sea_images_folder_resized/556_sea.jpg"),
   "557_sea.jpg": require("../../sea_images_folder_resized/557_sea.jpg"),
   "558_sea.jpg": require("../../sea_images_folder_resized/558_sea.jpg"),
   "559_sea.jpg": require("../../sea_images_folder_resized/559_sea.jpg"),
   "560_sea.jpg": require("../../sea_images_folder_resized/560_sea.jpg"),
   "561_sea.jpg": require("../../sea_images_folder_resized/561_sea.jpg"),
   "562_sea.jpg": require("../../sea_images_folder_resized/562_sea.jpg"),
   "563_sea.jpg": require("../../sea_images_folder_resized/563_sea.jpg"),
   "564_sea.jpg": require("../../sea_images_folder_resized/564_sea.jpg"),
   "565_sea.jpg": require("../../sea_images_folder_resized/565_sea.jpg"),
   "566_sea.jpg": require("../../sea_images_folder_resized/566_sea.jpg"),
   "567_sea.jpg": require("../../sea_images_folder_resized/567_sea.jpg"),
   "568_sea.jpg": require("../../sea_images_folder_resized/568_sea.jpg"),
   "569_sea.jpg": require("../../sea_images_folder_resized/569_sea.jpg"),
   "570_sea.jpg": require("../../sea_images_folder_resized/570_sea.jpg"),
   "571_sea.jpg": require("../../sea_images_folder_resized/571_sea.jpg"),
   "572_sea.jpg": require("../../sea_images_folder_resized/572_sea.jpg"),
   "573_sea.jpg": require("../../sea_images_folder_resized/573_sea.jpg"),
   "574_sea.jpg": require("../../sea_images_folder_resized/574_sea.jpg"),
   "575_sea.jpg": require("../../sea_images_folder_resized/575_sea.jpg"),
   "576_sea.jpg": require("../../sea_images_folder_resized/576_sea.jpg"),
   "577_sea.jpg": require("../../sea_images_folder_resized/577_sea.jpg"),
   "578_sea.jpg": require("../../sea_images_folder_resized/578_sea.jpg"),
   "579_sea.jpg": require("../../sea_images_folder_resized/579_sea.jpg"),
   "580_sea.jpg": require("../../sea_images_folder_resized/580_sea.jpg"),
   "581_sea.jpg": require("../../sea_images_folder_resized/581_sea.jpg"),
   "582_sea.jpg": require("../../sea_images_folder_resized/582_sea.jpg"),
   "583_sea.jpg": require("../../sea_images_folder_resized/583_sea.jpg"),
   "584_sea.jpg": require("../../sea_images_folder_resized/584_sea.jpg"),
   "585_sea.jpg": require("../../sea_images_folder_resized/585_sea.jpg"),
   "586_sea.jpg": require("../../sea_images_folder_resized/586_sea.jpg"),
   "587_sea.jpg": require("../../sea_images_folder_resized/587_sea.jpg"),
   "588_sea.jpg": require("../../sea_images_folder_resized/588_sea.jpg"),
   "589_sea.jpg": require("../../sea_images_folder_resized/589_sea.jpg"),
   "590_sea.jpg": require("../../sea_images_folder_resized/590_sea.jpg"),
   "591_sea.jpg": require("../../sea_images_folder_resized/591_sea.jpg"),
   "592_sea.jpg": require("../../sea_images_folder_resized/592_sea.jpg"),
   "593_sea.jpg": require("../../sea_images_folder_resized/593_sea.jpg"),
   "594_sea.jpg": require("../../sea_images_folder_resized/594_sea.jpg"),
   "595_sea.jpg": require("../../sea_images_folder_resized/595_sea.jpg"),
   "596_sea.jpg": require("../../sea_images_folder_resized/596_sea.jpg"),
   "598_sea.jpg": require("../../sea_images_folder_resized/598_sea.jpg"),
   "599_sea.jpg": require("../../sea_images_folder_resized/599_sea.jpg"),
   "600_sea.jpg": require("../../sea_images_folder_resized/600_sea.jpg"),
   "602_sea.jpg": require("../../sea_images_folder_resized/602_sea.jpg"),
   "603_sea.jpg": require("../../sea_images_folder_resized/603_sea.jpg"),
   "604_sea.jpg": require("../../sea_images_folder_resized/604_sea.jpg"),
   "605_sea.jpg": require("../../sea_images_folder_resized/605_sea.jpg"),
   "606_sea.jpg": require("../../sea_images_folder_resized/606_sea.jpg"),
   "607_sea.jpg": require("../../sea_images_folder_resized/607_sea.jpg"),
   "608_sea.jpg": require("../../sea_images_folder_resized/608_sea.jpg"),
   "609_sea.jpg": require("../../sea_images_folder_resized/609_sea.jpg"),
   "610_sea.jpg": require("../../sea_images_folder_resized/610_sea.jpg"),
   "611_sea.jpg": require("../../sea_images_folder_resized/611_sea.jpg"),
   "612_sea.jpg": require("../../sea_images_folder_resized/612_sea.jpg"),
   "613_sea.jpg": require("../../sea_images_folder_resized/613_sea.jpg"),
   "614_sea.jpg": require("../../sea_images_folder_resized/614_sea.jpg"),
   "615_sea.jpg": require("../../sea_images_folder_resized/615_sea.jpg"),
   "616_sea.jpg": require("../../sea_images_folder_resized/616_sea.jpg"),
   "617_sea.jpg": require("../../sea_images_folder_resized/617_sea.jpg"),
   "618_sea.jpg": require("../../sea_images_folder_resized/618_sea.jpg"),
   "620_sea.jpg": require("../../sea_images_folder_resized/620_sea.jpg"),
   "621_sea.jpg": require("../../sea_images_folder_resized/621_sea.jpg"),
   "622_sea.jpg": require("../../sea_images_folder_resized/622_sea.jpg"),
   "623_sea.jpg": require("../../sea_images_folder_resized/623_sea.jpg"),
   "624_sea.jpg": require("../../sea_images_folder_resized/624_sea.jpg"),
   "625_sea.jpg": require("../../sea_images_folder_resized/625_sea.jpg"),
   "626_sea.jpg": require("../../sea_images_folder_resized/626_sea.jpg"),
   "627_sea.jpg": require("../../sea_images_folder_resized/627_sea.jpg"),
   "629_sea.jpg": require("../../sea_images_folder_resized/629_sea.jpg"),
   "630_sea.jpg": require("../../sea_images_folder_resized/630_sea.jpg"),
   "631_sea.jpg": require("../../sea_images_folder_resized/631_sea.jpg"),
   "632_sea.jpg": require("../../sea_images_folder_resized/632_sea.jpg"),
   "633_sea.jpg": require("../../sea_images_folder_resized/633_sea.jpg"),
   "634_sea.jpg": require("../../sea_images_folder_resized/634_sea.jpg"),
   "636_sea.jpg": require("../../sea_images_folder_resized/636_sea.jpg"),
   "637_sea.jpg": require("../../sea_images_folder_resized/637_sea.jpg"),
   "638_sea.jpg": require("../../sea_images_folder_resized/638_sea.jpg"),
   "639_sea.jpg": require("../../sea_images_folder_resized/639_sea.jpg"),
   "640_sea.jpg": require("../../sea_images_folder_resized/640_sea.jpg"),
   "641_sea.jpg": require("../../sea_images_folder_resized/641_sea.jpg"),
   "642_sea.jpg": require("../../sea_images_folder_resized/642_sea.jpg"),
   "643_sea.jpg": require("../../sea_images_folder_resized/643_sea.jpg"),
   "644_sea.jpg": require("../../sea_images_folder_resized/644_sea.jpg"),
   "645_sea.jpg": require("../../sea_images_folder_resized/645_sea.jpg"),
   "646_sea.jpg": require("../../sea_images_folder_resized/646_sea.jpg"),
   "647_sea.jpg": require("../../sea_images_folder_resized/647_sea.jpg"),
   "648_sea.jpg": require("../../sea_images_folder_resized/648_sea.jpg"),
   "649_sea.jpg": require("../../sea_images_folder_resized/649_sea.jpg"),
   "650_sea.jpg": require("../../sea_images_folder_resized/650_sea.jpg"),
   "651_sea.jpg": require("../../sea_images_folder_resized/651_sea.jpg"),
   "652_sea.jpg": require("../../sea_images_folder_resized/652_sea.jpg"),
   "653_sea.jpg": require("../../sea_images_folder_resized/653_sea.jpg"),
   "655_sea.jpg": require("../../sea_images_folder_resized/655_sea.jpg"),
   "656_sea.jpg": require("../../sea_images_folder_resized/656_sea.jpg"),
   "657_sea.jpg": require("../../sea_images_folder_resized/657_sea.jpg"),
   "658_sea.jpg": require("../../sea_images_folder_resized/658_sea.jpg"),
   "659_sea.jpg": require("../../sea_images_folder_resized/659_sea.jpg"),
   "661_sea.jpg": require("../../sea_images_folder_resized/661_sea.jpg"),
   "662_sea.jpg": require("../../sea_images_folder_resized/662_sea.jpg"),
   "663_sea.jpg": require("../../sea_images_folder_resized/663_sea.jpg"),
   "664_sea.jpg": require("../../sea_images_folder_resized/664_sea.jpg"),
   "665_sea.jpg": require("../../sea_images_folder_resized/665_sea.jpg"),
   "666_sea.jpg": require("../../sea_images_folder_resized/666_sea.jpg"),
   "668_sea.jpg": require("../../sea_images_folder_resized/668_sea.jpg"),
   "669_sea.jpg": require("../../sea_images_folder_resized/669_sea.jpg"),
   "670_sea.jpg": require("../../sea_images_folder_resized/670_sea.jpg")
}

  const getSavedCardData = async () => {
    const user = await RequestManager.getUser();
    console.log(JSON.stringify(user));
   return Promise.all(user.savedCards.map(cardId => {
      return RequestManager.getCard(cardId);
    }));
  };

  const getMyCardData = async () => {
   const user = await RequestManager.getUser();
   return Promise.all(user.myCards.map(cardId => {
      return RequestManager.getCard(cardId);
    }));
  };
  
  const SavedCards = () => {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
      getSavedCardData().then(data => {
        console.log(JSON.stringify(data));
        setCardData(data)
      });
    }, []);
   
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignContent: "flex-start",
            width: "100%",
            height: "100%",
            flexWrap: "wrap",
          }}
        >
          {cardData.map((post, index) => 
            <Card post={post} key={index}>
              <View style={{ width: "100%", height: "85%" }}>
                <Image
                  style={{ flex: 2, width: undefined }}
                  source={assets[post.img_name]}
                />
              </View>
              <Text style={{ flex: 1 }}>{post.title}</Text>
            </Card>
          )}
        </View>
      </ScrollView>
    );
  };

  const MyCards = () => {

    [cardData, setCardData] = useState([]);

    useEffect(() => {
      getMyCardData().then(data => setCardData(data));
    }, []);

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "left",
          width: "100%",
          height: "66%",
          flexWrap: 1,
        }}
      >
          {cardData.map((post, index) => 
            (<Card post={post} key={index}>
              <View style={{ width: "100%", height: "85%" }}>
                <Image
                  style={{ flex: 2, width: undefined }}
                  source={assets[post.img_name]}
                />
              </View>
              <Text style={{ flex: 1 }}>{post.title}</Text>
            </Card>
          ))}

      </View>
    );
  };

  const selectSavedCards = () => {
    if (tabState !== true) setTabState(true);
  };

  const selectMyCards = () => {
    if (tabState !== false) setTabState(false);
  };

  return (
    <View style={styles.main}>
      {/*
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                    <Image style={styles.pfp} source={require('../../images/sample-sarah.png')} />
                    <View style={{justifyContent: 'center', padding: 15}}>
                        <Text style={styles.name}>Sarah Hayes</Text>
                        <Text style={styles.stats}>0 Points</Text>
                        <Text style={styles.stats}>0 Acheivements</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 20, justifyContent: 'space-between'}}>
                    <Text style={styles.tag}>Foodie </Text>
                    <Text style={styles.tag}>animal lover</Text>
                    <Text style={styles.tag}>Cooking/Baking</Text>
                    
                </View>
        */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          style={tabState ? styles.activeButton : styles.button}
          title="Saved Cards"
          onPress={selectSavedCards}
        >
          <Text>Saved Cards</Text>
        </Pressable>
        <Pressable
          style={!tabState ? styles.activeButton : styles.button}
          title="My Cards"
          onPress={selectMyCards}
        >
          <Text>My Cards</Text>
        </Pressable>
      </View>
      {tabState ? <SavedCards /> : <MyCards />}

      {/*
            <TouchableOpacity style={styles.touchableOpacity}>
                <Image style={styles.floatingButton} source={require('../../images/addButton.png')}/>
            </TouchableOpacity>
        */}
    </View>
  );
}

const styles = StyleSheet.create({
  activeButton: {
    borderBottomColor: "rgb(0, 0, 0)",
    borderBottomWidth: 3,
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  main: {
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
  },
  stats: {
    fontSize: 16,
  },
  pfp: {
    maxWidth: 120,
    maxHeight: 120,
    borderRadius: 60,
  },
  tag: {
    backgroundColor: "#BEA4F5",
    fontSize: 16,
    padding: 5,
    borderRadius: 50,
    margin: 3,
  },

  savedCardImg: {
    maxWidth: 5,
    maxHeight: 5,
  },

  touchableOpacity: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#8664F6",
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  floatingButton: {
    resizeMode: "contain",
    width: 25,
    height: 25,
  },
});

