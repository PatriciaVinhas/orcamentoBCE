import { useState, useMemo } from "react";

const CATALOGO = {
  "Alça Vazada": {
    "Alta Densidade": [
      {"tamanho":"15x25 cm","cor":"Preta Branca Rosa","impressao":"1x0","precos":{"500":0.949,"1000":0.759,"1500":0.699,"2000":0.664,"2500":0.646,"3000":0.634,"3500":0.6176,"4000":0.6115,"5000":0.595}},
      {"tamanho":"15x25 cm","cor":"Preta Branca Rosa","impressao":"1x1/ 2x0","precos":{"500":1.349,"1000":1.159,"1500":1.099,"2000":1.064,"2500":1.046,"3000":1.034,"3500":0.9776,"4000":0.9715,"5000":0.955}},
      {"tamanho":"15x25 cm","cor":"Preta Branca Rosa","impressao":"2x1/ 3x0","precos":{"500":1.749,"1000":1.559,"1500":1.499,"2000":1.464,"2500":1.446,"3000":1.434,"3500":1.3376,"4000":1.3315,"5000":1.315}},
      {"tamanho":"15x25 cm","cor":"Preta Branca Rosa","impressao":"2x2/ 3x1","precos":{"500":2.149,"1000":1.959,"1500":1.899,"2000":1.864,"2500":1.846,"3000":1.834,"3500":1.6976,"4000":1.6915,"5000":1.675}},
      {"tamanho":"15x25 cm","cor":"Preta Branca Rosa","impressao":"3x2","precos":{"500":2.549,"1000":2.359,"1500":2.299,"2000":2.264,"2500":2.246,"3000":2.234,"3500":2.0576,"4000":2.0515,"5000":2.035}},
      {"tamanho":"15x25 cm","cor":"Preta Branca Rosa","impressao":"3x3","precos":{"500":2.949,"1000":2.759,"1500":2.699,"2000":2.664,"2500":2.646,"3000":2.634,"3500":2.4176,"4000":2.4115,"5000":2.395}},
      {"tamanho":"15x25 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"0x0","precos":{"500":0.3937,"1000":0.3637,"1500":0.3537,"2000":0.3487,"2500":0.3457,"3000":0.3437,"3500":0.3422,"4000":0.3412,"5000":0.3397}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"1x0","precos":{"500":1.0737,"1000":0.8837,"1500":0.8237,"2000":0.7887,"2500":0.7707,"3000":0.7587,"3500":0.7422,"4000":0.7362,"5000":0.7197}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"1x1/ 2x0","precos":{"500":1.4737,"1000":1.2837,"1500":1.2237,"2000":1.1887,"2500":1.1707,"3000":1.1587,"3500":1.1022,"4000":1.0962,"5000":1.0797}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"2x1/ 3x0","precos":{"500":1.8737,"1000":1.6837,"1500":1.6237,"2000":1.5887,"2500":1.5707,"3000":1.5587,"3500":1.4622,"4000":1.4562,"5000":1.4397}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"2x2/ 3x1","precos":{"500":2.2737,"1000":2.0837,"1500":2.0237,"2000":1.9887,"2500":1.9707,"3000":1.9587,"3500":1.8222,"4000":1.8162,"5000":1.7997}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"3x2","precos":{"500":2.6737,"1000":2.4837,"1500":2.4237,"2000":2.3887,"2500":2.3707,"3000":2.3587,"3500":2.1822,"4000":2.1762,"5000":2.1597}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"3x3","precos":{"500":3.0737,"1000":2.8837,"1500":2.8237,"2000":2.7887,"2500":2.7707,"3000":2.7587,"3500":2.5422,"4000":2.5362,"5000":2.5197}},
      {"tamanho":"20x30 cm","cor":"Preta Branca Rosa","impressao":"0x0","precos":{"500":0.5477,"1000":0.5177,"1500":0.5077,"2000":0.5027,"2500":0.4997,"3000":0.4977,"3500":0.4962,"4000":0.4952,"5000":0.4937}},
      {"tamanho":"22x35 cm","cor":"Transparente Fosca","impressao":"0x0","precos":{"500":0.5422,"1000":0.5122,"1500":0.5022,"2000":0.4972,"2500":0.4942,"3000":0.4922,"3500":0.4907,"4000":0.4897,"5000":0.4882}},
      {"tamanho":"22x35 cm","cor":"Transparente Fosca","impressao":"1x0","precos":{"500":1.3762,"1000":1.1862,"1500":1.1262,"2000":1.0912,"2500":1.0732,"3000":1.0612,"3500":1.0447,"4000":1.0387,"5000":1.0222}},
      {"tamanho":"25x35 cm","cor":"Preta Branca Rosa","impressao":"1x0","precos":{"500":1.2277,"1000":1.0377,"1500":0.9777,"2000":0.9427,"2500":0.9247,"3000":0.9127,"3500":0.8962,"4000":0.8902,"5000":0.8737}},
      {"tamanho":"25x35 cm","cor":"Preta Branca Rosa","impressao":"1x1/ 2x0","precos":{"500":1.6277,"1000":1.4377,"1500":1.3777,"2000":1.3427,"2500":1.3247,"3000":1.3127,"3500":1.2562,"4000":1.2502,"5000":1.2337}},
      {"tamanho":"25x35 cm","cor":"Preta Branca Rosa","impressao":"2x1/ 3x0","precos":{"500":2.0277,"1000":1.8377,"1500":1.7777,"2000":1.7427,"2500":1.7247,"3000":1.7127,"3500":1.6162,"4000":1.6102,"5000":1.5937}},
      {"tamanho":"25x35 cm","cor":"Preta Branca Rosa","impressao":"2x2/ 3x1","precos":{"500":2.4277,"1000":2.2377,"1500":2.1777,"2000":2.1427,"2500":2.1247,"3000":2.1127,"3500":1.9762,"4000":1.9702,"5000":1.9537}},
      {"tamanho":"25x35 cm","cor":"Preta Branca Rosa","impressao":"3x2","precos":{"500":2.8277,"1000":2.6377,"1500":2.5777,"2000":2.5427,"2500":2.5247,"3000":2.5127,"3500":2.3362,"4000":2.3302,"5000":2.3137}},
      {"tamanho":"25x35 cm","cor":"Preta Branca Rosa","impressao":"3x3","precos":{"500":3.2277,"1000":3.0377,"1500":2.9777,"2000":2.9427,"2500":2.9247,"3000":2.9127,"3500":2.6962,"4000":2.6902,"5000":2.6737}},
      {"tamanho":"25x35 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"0x0","precos":{"500":0.7292,"1000":0.6992,"1500":0.6892,"2000":0.6842,"2500":0.6812,"3000":0.6792,"3500":0.6777,"4000":0.6767,"5000":0.6752}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"1x0","precos":{"500":1.4092,"1000":1.2192,"1500":1.1592,"2000":1.1242,"2500":1.1062,"3000":1.0942,"3500":1.0777,"4000":1.0717,"5000":1.0552}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"1x1/ 2x0","precos":{"500":1.8092,"1000":1.6192,"1500":1.5592,"2000":1.5242,"2500":1.5062,"3000":1.4942,"3500":1.4377,"4000":1.4317,"5000":1.4152}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"2x1/ 3x0","precos":{"500":2.2092,"1000":2.0192,"1500":1.9592,"2000":1.9242,"2500":1.9062,"3000":1.8942,"3500":1.7977,"4000":1.7917,"5000":1.7752}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"2x2/ 3x1","precos":{"500":2.6092,"1000":2.4192,"1500":2.3592,"2000":2.3242,"2500":2.3062,"3000":2.2942,"3500":2.1577,"4000":2.1517,"5000":2.1352}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"3x2","precos":{"500":3.0092,"1000":2.8192,"1500":2.7592,"2000":2.7242,"2500":2.7062,"3000":2.6942,"3500":2.5177,"4000":2.5117,"5000":2.4952}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"3x3","precos":{"500":3.4092,"1000":3.2192,"1500":3.1592,"2000":3.1242,"2500":3.1062,"3000":3.0942,"3500":2.8777,"4000":2.8717,"5000":2.8552}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"0x0","precos":{"500":1.0225,"1000":0.9925,"1500":0.9825,"2000":0.9775,"2500":0.9745,"3000":0.9725,"3500":0.9711,"4000":0.97,"5000":0.9685}},
      {"tamanho":"36x48 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"1x0","precos":{"500":1.7025,"1000":1.5125,"1500":1.4525,"2000":1.4175,"2500":1.3995,"3000":1.3875,"3500":1.3711,"4000":1.365,"5000":1.3485}},
      {"tamanho":"36x48 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"1x1/ 2x0","precos":{"500":2.1025,"1000":1.9125,"1500":1.8525,"2000":1.8175,"2500":1.7995,"3000":1.7875,"3500":1.7311,"4000":1.725,"5000":1.7085}},
      {"tamanho":"36x48 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"2x1/ 3x0","precos":{"500":2.5025,"1000":2.3125,"1500":2.2525,"2000":2.2175,"2500":2.1995,"3000":2.1875,"3500":2.0911,"4000":2.085,"5000":2.0685}},
      {"tamanho":"36x48 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"2x2/ 3x1","precos":{"500":2.9025,"1000":2.7125,"1500":2.6525,"2000":2.6175,"2500":2.5995,"3000":2.5875,"3500":2.4511,"4000":2.445,"5000":2.4285}},
      {"tamanho":"36x48 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"3x2","precos":{"500":3.3025,"1000":3.1125,"1500":3.0525,"2000":3.0175,"2500":2.9995,"3000":2.9875,"3500":2.8111,"4000":2.805,"5000":2.7885}},
      {"tamanho":"36x48 cm","cor":"Branca Preta Rosa Laranja Vermelha Amarela Prata Verde Limão","impressao":"3x3","precos":{"500":3.7025,"1000":3.5125,"1500":3.4525,"2000":3.4175,"2500":3.3995,"3000":3.3875,"3500":3.1711,"4000":3.165,"5000":3.1485}},
      {"tamanho":"36x48 cm","cor":"Branca Preta Rosa Prata","impressao":"0x0","precos":{"500":1.1747,"1000":1.1447,"1500":1.1347,"2000":1.1297,"2500":1.1267,"3000":1.1247,"3500":1.1232,"4000":1.1222,"5000":1.1207}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Rosa Prata","impressao":"1x0","precos":{"500":1.8547,"1000":1.6647,"1500":1.6047,"2000":1.5697,"2500":1.5517,"3000":1.5397,"3500":1.5232,"4000":1.5172,"5000":1.5007}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Rosa Prata","impressao":"1x1/ 2x0","precos":{"500":2.2547,"1000":2.0647,"1500":2.0047,"2000":1.9697,"2500":1.9517,"3000":1.9397,"3500":1.8832,"4000":1.8772,"5000":1.8607}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Rosa Prata","impressao":"2x1/ 3x0","precos":{"500":2.6547,"1000":2.4647,"1500":2.4047,"2000":2.3697,"2500":2.3517,"3000":2.3397,"3500":2.2432,"4000":2.2372,"5000":2.2207}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Rosa Prata","impressao":"2x2/ 3x1","precos":{"500":3.0547,"1000":2.8647,"1500":2.8047,"2000":2.7697,"2500":2.7517,"3000":2.7397,"3500":2.6032,"4000":2.5972,"5000":2.5807}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Rosa Prata","impressao":"3x2","precos":{"500":3.4547,"1000":3.2647,"1500":3.2047,"2000":3.1697,"2500":3.1517,"3000":3.1397,"3500":2.9632,"4000":2.9572,"5000":2.9407}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Rosa Prata","impressao":"3x3","precos":{"500":3.8547,"1000":3.6647,"1500":3.6047,"2000":3.5697,"2500":3.5517,"3000":3.5397,"3500":3.3232,"4000":3.3172,"5000":3.3007}}
    ],
    "Baixa Densidade": [
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Prata Verde Limão Vermelha Amarela","impressao":"1x0","precos":{"500":1.1635,"1000":0.9735,"1500":0.9135,"2000":0.8785,"2500":0.8605,"3000":0.8485,"3500":0.8321,"4000":0.826,"5000":0.8095}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Prata Verde Limão Vermelha Amarela","impressao":"1x1/ 2x0","precos":{"500":1.5635,"1000":1.3735,"1500":1.3135,"2000":1.2785,"2500":1.2605,"3000":1.2485,"3500":1.1921,"4000":1.186,"5000":1.1695}},
      {"tamanho":"20x30 cm","cor":"Branca Preta Rosa Laranja Prata Verde Limão Vermelha Amarela","impressao":"2x1/ 3x0","precos":{"500":1.9635,"1000":1.7735,"1500":1.7135,"2000":1.6785,"2500":1.6605,"3000":1.6485,"3500":1.5521,"4000":1.546,"5000":1.5295}},
      {"tamanho":"20x30 cm","cor":"Branca","impressao":"0x0","precos":{"500":0.7823,"1000":0.7523,"1500":0.7423,"2000":0.7373,"2500":0.7343,"3000":0.7323,"3500":0.7309,"4000":0.7298,"5000":0.7283}},
      {"tamanho":"25x35 cm","cor":"Branca","impressao":"1x0","precos":{"500":1.4623,"1000":1.2723,"1500":1.2123,"2000":1.1773,"2500":1.1593,"3000":1.1473,"3500":1.1309,"4000":1.1248,"5000":1.1083}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Prata Verde Limão Vermelha Amarela","impressao":"1x0","precos":{"500":1.8418,"1000":1.6518,"1500":1.5918,"2000":1.5568,"2500":1.5388,"3000":1.5268,"3500":1.5104,"4000":1.5043,"5000":1.4878}},
      {"tamanho":"30x40 cm","cor":"Branca Preta Rosa Laranja Prata Verde Limão Vermelha Amarela","impressao":"0x0","precos":{"500":1.6018,"1000":1.5718,"1500":1.5618,"2000":1.5568,"2500":1.5538,"3000":1.5518,"3500":1.5504,"4000":1.5493,"5000":1.5478}},
      {"tamanho":"35x48 cm","cor":"Branca Preta Rosa Laranja Prata Verde Limão Vermelha Amarela","impressao":"1x0","precos":{"500":2.2818,"1000":2.0918,"1500":2.0318,"2000":1.9968,"2500":1.9788,"3000":1.9668,"3500":1.9504,"4000":1.9443,"5000":1.9278}},
      {"tamanho":"45x51 cm Sanfona","cor":"Branca Preta","impressao":"1x0","precos":{"250":3.4968,"500":3.1068,"1000":2.9168,"1500":2.8568,"2000":2.8218,"2500":2.8038,"3000":2.7918,"3500":2.7754,"4000":2.7693,"5000":2.7528}}
    ]
  },
  "Alça Camiseta": {
    "Alta Densidade": [
      {"tamanho":"32x40 cm","cor":"Branca Preta Vermelha Amarela Laranja","impressao":"1x0","precos":{"1000":0.9955,"1500":0.9355,"2000":0.9005,"2500":0.8825,"3000":0.8705,"3500":0.8541,"4000":0.848,"5000":0.8315}},
      {"tamanho":"32x40 cm","cor":"Branca Preta Amarela Vermelha Laranja","impressao":"0x0","precos":{"1000":0.7267,"1500":0.7167,"2000":0.7117,"2500":0.7087,"3000":0.7067,"3500":0.7052,"4000":0.7042,"5000":0.7027}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Amarela Vermelha Laranja","impressao":"1x0","precos":{"1000":1.2467,"1500":1.1867,"2000":1.1517,"2500":1.1337,"3000":1.1217,"3500":1.1052,"4000":1.0992,"5000":1.0827}},
      {"tamanho":"40x50 cm","cor":"Branca Preta Amarela Vermelha Laranja","impressao":"0x0","precos":{"500":1.0005,"1000":0.9705,"1500":0.9605,"2000":0.9555,"2500":0.9525,"3000":0.9505,"3500":0.9491,"4000":0.948,"5000":0.9465}},
      {"tamanho":"45x60 cm","cor":"Branca Preta Amarela Vermelha Laranja","impressao":"1x0","precos":{"500":1.6805,"1000":1.4905,"1500":1.4305,"2000":1.3955,"2500":1.3775,"3000":1.3655,"3500":1.3491,"4000":1.343,"5000":1.3265}},
      {"tamanho":"50x70 cm","cor":"Branca Preta Amarela","impressao":"1x0","precos":{"500":1.9592,"1000":1.7692,"1500":1.7092,"2000":1.6742,"2500":1.6562,"3000":1.6442,"3500":1.6277,"4000":1.6217,"5000":1.6052}},
      {"tamanho":"60x80 cm","cor":"Branca Preta Amarela","impressao":"1x0","precos":{"500":2.7457,"1000":2.5557,"1500":2.4957,"2000":2.4607,"2500":2.4427,"3000":2.4307,"3500":2.4142,"4000":2.4082,"5000":2.3917}},
      {"tamanho":"70x90 cm","cor":"Branca","impressao":"1x0","precos":{"250":5.5447,"500":5.1547,"1000":4.9647,"1500":4.9047,"2000":4.8697,"2500":4.8517,"3000":4.8397,"3500":4.8232,"4000":4.8172,"5000":4.8007}},
      {"tamanho":"90x100 cm","cor":"Branca","impressao":"1x0","precos":{"250":7.4367,"500":7.0467,"1000":6.8567,"1500":6.7967,"2000":6.7617,"2500":6.7437,"3000":6.7317,"3500":6.7152,"4000":6.7092,"5000":6.6927}}
    ],
    "Baixa Densidade": [
      {"tamanho":"32x40 cm","cor":"Branca Preta","impressao":"1x0","precos":{"1000":1.166,"1500":1.106,"2000":1.071,"2500":1.053,"3000":1.041,"3500":1.0246,"4000":1.0185,"5000":1.002}},
      {"tamanho":"32x40 cm","cor":"Branca Preta","impressao":"0x0","precos":{"500":1.16,"1000":1.13,"1500":1.12,"2000":1.115,"2500":1.112,"3000":1.11,"3500":1.1086,"4000":1.1075,"5000":1.106}},
      {"tamanho":"40x50 cm","cor":"Branca Preta","impressao":"1x0","precos":{"500":1.84,"1000":1.65,"1500":1.59,"2000":1.555,"2500":1.537,"3000":1.525,"3500":1.5086,"4000":1.5025,"5000":1.486}},
      {"tamanho":"45x60 cm","cor":"Branca Preta","impressao":"1x0","precos":{"500":2.4102,"1000":2.2202,"1500":2.1602,"2000":2.1252,"2500":2.1072,"3000":2.0952,"3500":2.0787,"4000":2.0727,"5000":2.0562}}
    ]
  },
  "Alça Fita": {
    "Alta Densidade": [
      {"tamanho":"32x35 cm","cor":"Branca Preta Transparente fosca","impressao":"1x0","precos":{"250":3.0678,"500":2.6778,"1000":2.4878,"1500":2.4278,"2000":2.3928,"2500":2.3748,"3000":2.3628,"3500":2.3464,"4000":2.3403,"5000":2.3238}},
      {"tamanho":"32x35 cm","cor":"Branca Preta Transparente fosca","impressao":"1x1/ 2x0","precos":{"250":3.4678,"500":3.0778,"1000":2.8878,"1500":2.8278,"2000":2.7928,"2500":2.7748,"3000":2.7628,"3500":2.7064,"4000":2.7003,"5000":2.6838}},
      {"tamanho":"32x35 cm","cor":"Branca Preta Transparente fosca","impressao":"0x0","precos":{"250":2.6317,"500":2.5717,"1000":2.5417,"1500":2.5317,"2000":2.5267,"2500":2.5237,"3000":2.5217,"3500":2.5202,"4000":2.5192,"5000":2.5177}},
      {"tamanho":"40x40 cm","cor":"Branca Preta Transparente fosca","impressao":"1x0","precos":{"250":3.6417,"500":3.2517,"1000":3.0617,"1500":3.0017,"2000":2.9667,"2500":2.9487,"3000":2.9367,"3500":2.9202,"4000":2.9142,"5000":2.8977}},
      {"tamanho":"40x40 cm","cor":"Branca Preta Transparente fosca","impressao":"1x1/ 2x0","precos":{"250":4.0417,"500":3.6517,"1000":3.4617,"1500":3.4017,"2000":3.3667,"2500":3.3487,"3000":3.3367,"3500":3.2802,"4000":3.2742,"5000":3.2577}},
      {"tamanho":"40x40 cm","cor":"Branca Preta Transparente fosca","impressao":"0x0","precos":{"250":3.0148,"500":2.9548,"1000":2.9248,"1500":2.9148,"2000":2.9098,"2500":2.9068,"3000":2.9048,"3500":2.9034,"4000":2.9023,"5000":2.9008}},
      {"tamanho":"45x45 cm","cor":"Branca Preta Transparente fosca","impressao":"1x0","precos":{"250":4.0248,"500":3.6348,"1000":3.4448,"1500":3.3848,"2000":3.3498,"2500":3.3318,"3000":3.3198,"3500":3.3034,"4000":3.2973,"5000":3.2808}},
      {"tamanho":"45x45 cm","cor":"Branca Preta Transparente fosca","impressao":"1x1/ 2x0","precos":{"250":4.4248,"500":4.0348,"1000":3.8448,"1500":3.7848,"2000":3.7498,"2500":3.7318,"3000":3.7198,"3500":3.6634,"4000":3.6573,"5000":3.6408}},
      {"tamanho":"45x45 cm","cor":"Branca Preta Transparente fosca","impressao":"0x0","precos":{"250":3.3998,"500":3.3398,"1000":3.3098,"1500":3.2998,"2000":3.2948,"2500":3.2918,"3000":3.2898,"3500":3.2884,"4000":3.2873,"5000":3.2858}}
    ]
  }
};

function interpolarPreco(precos, qtde) {
  const qtdes = Object.keys(precos).map(Number).sort((a, b) => a - b);
  if (qtde <= qtdes[0]) return precos[qtdes[0]];
  if (qtde >= qtdes[qtdes.length - 1]) return precos[qtdes[qtdes.length - 1]];
  for (let i = 0; i < qtdes.length - 1; i++) {
    if (qtde >= qtdes[i] && qtde <= qtdes[i + 1]) {
      const t = (qtde - qtdes[i]) / (qtdes[i + 1] - qtdes[i]);
      return precos[qtdes[i]] + t * (precos[qtdes[i + 1]] - precos[qtdes[i]]);
    }
  }
  return null;
}

const BRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const hoje = () => new Date().toLocaleDateString("pt-BR");

const IMPRESSAO_LABELS = {
  "0x0": "Sem impressão (0x0)",
  "1x0": "1x0 — 1 cor, só frente",
  "1x1/ 2x0": "1x1 / 2x0 — 1 cor frente e verso / 2 cores só frente",
  "2x1/ 3x0": "2x1 / 3x0 — 2 cores frente, 1 verso / 3 cores só frente",
  "2x2/ 3x1": "2x2 / 3x1 — 2 cores frente e verso / 3 cores frente, 1 cor verso",
  "3x2": "3x2 — 3 cores frente / 2 cores verso",
  "3x3": "3x3 — 3 cores frente e verso",
};

const IMPRESSAO_DESC = {
  "0x0": "Sacola sem nenhuma impressão.",
  "1x0": "Impressão de uma cor apenas de um lado.",
  "1x1/ 2x0": "Impressão uma cor frente e verso — ou — duas cores apenas de um lado.",
  "2x1/ 3x0": "Impressão duas cores de um lado e uma cor do outro — ou — três cores apenas de um lado.",
  "2x2/ 3x1": "Impressão duas cores frente e verso — ou — três cores frente e uma cor verso.",
  "3x2": "Impressão três cores de um lado e duas cores do outro.",
  "3x3": "Impressão três cores frente e verso.",
};

const RODAPE = [
  "Os valores estão baseados em informações via telefone, WhatsApp e/ou e-mail, portanto após confirmação de informações e layout serão feitas as alterações necessárias quanto a valores e prazo.",
  "Logomarca – Fornecida pelo cliente em Corel Draw ou AI ou EPS ou PDF – vetorizado.",
  "Fotolitos / Chapas – Cortesia, sem sombras ou degrade.",
  "PRAZO DE PRODUÇÃO PADRÃO - 20 a 25 dias corridos após aprovação do layout e pagamento sinal/total.",
  "PRAZOS DE PRODUÇÃO ESPECIAIS (VERIFICAR POSSIBILIDADE)\nDe 15 à 20 dias: +20% do Valor Total\nDe 20 à 25 dias: +10% do Valor Total\nDe 25 à 30 dias: +05% do Valor Total",
  "ATENÇÃO: Em caso de frete via transportadora ou correios, o prazo de envio não está contabilizado",
  "Variação de produção: 10% para mais ou para menos. Só cobramos o que entregamos.",
  "Condição de pagamento\n50/50 - Sinal + Saldo na entrega\nÀ vista no pedido\nCartão de crédito em até 2x sem juros sem desconto",
  "Frete Grátis – Para pedidos acima de R$ 2.500,00 e com distância de 15km da Bela Cor Embalagens.",
  "Validade deste orçamento - 05 dias",
];

export default function App() {
  const [cliente, setCliente] = useState({ nome: "", telefone: "", email: "", empresa: "", vendedor: "", contato: "" });
  const [modelo, setModelo] = useState("");
  const [densidade, setDensidade] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [cor, setCor] = useState("");
  const [impressao, setImpressao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [resultado, setResultado] = useState(null);
  const [textoCopiado, setTextoCopiado] = useState("");

  const modelos = useMemo(() => Object.keys(CATALOGO), []);
  const densidades = useMemo(() => modelo ? Object.keys(CATALOGO[modelo]) : [], [modelo]);
  const tamanhos = useMemo(() => (modelo && densidade) ? [...new Set(CATALOGO[modelo][densidade].map(i => i.tamanho))] : [], [modelo, densidade]);
  const cores = useMemo(() => {
    if (!modelo || !densidade || !tamanho) return [];
    const grupos = CATALOGO[modelo][densidade].filter(i => i.tamanho === tamanho).map(i => i.cor);
    const todas = grupos.flatMap(g => g.split(" "));
    return [...new Set(todas)];
  }, [modelo, densidade, tamanho]);
  const impressoes = useMemo(() => (modelo && densidade && tamanho && cor) ? CATALOGO[modelo][densidade].filter(i => i.tamanho === tamanho && i.cor.split(" ").includes(cor)).map(i => i.impressao) : [], [modelo, densidade, tamanho, cor]);
  const qtdeMin = useMemo(() => {
    if (!modelo || !densidade || !tamanho || !cor || !impressao) return 250;
    const item = CATALOGO[modelo][densidade].find(i => i.tamanho === tamanho && i.cor.split(" ").includes(cor) && i.impressao === impressao);
    return item ? Math.min(...Object.keys(item.precos).map(Number)) : 250;
  }, [modelo, densidade, tamanho, cor, impressao]);

  function onModelo(v) { setModelo(v); setDensidade(""); setTamanho(""); setCor(""); setImpressao(""); setQuantidade(""); setResultado(null); }
  function onDensidade(v) { setDensidade(v); setTamanho(""); setCor(""); setImpressao(""); setQuantidade(""); setResultado(null); }
  function onTamanho(v) { setTamanho(v); setCor(""); setImpressao(""); setQuantidade(""); setResultado(null); }
  function onCor(v) { setCor(v); setImpressao(""); setQuantidade(""); setResultado(null); }

  function calcular() {
    const qtde = parseInt(quantidade);
    if (!modelo || !densidade || !tamanho || !cor || !impressao || isNaN(qtde) || qtde < qtdeMin) return;
    const item = CATALOGO[modelo][densidade].find(i => i.tamanho === tamanho && i.cor.split(" ").includes(cor) && i.impressao === impressao);
    if (!item) return;
    const precoUni = interpolarPreco(item.precos, qtde);
    const precoUniArred = Math.ceil(precoUni * 100) / 100;
    setResultado({ modelo, densidade, tamanho, cor, impressao, qtde, precoUni: precoUniArred.toFixed(2), totalBRL: qtde * precoUniArred });
  }

  function limpar() {
    setModelo(""); setDensidade(""); setTamanho(""); setCor(""); setImpressao(""); setQuantidade(""); setResultado(null); setTextoCopiado("");
  }

  const pronto = modelo && densidade && tamanho && cor && impressao && quantidade && parseInt(quantidade) >= qtdeMin;

  function gerarPDF() {
    if (!resultado) return;
    const imp = resultado.impressao === "0x0" ? "Sem impressão" : resultado.impressao;
    const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<title>Orçamento - Bela Cor Embalagens</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; font-size: 13px; color: #222; padding: 36px; background: #fff; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
  .empresa { font-size: 26px; font-weight: 900; color: #1A1A2E; letter-spacing: -0.03em; }
  .subtitulo { font-size: 12px; color: #888; margin-top: 3px; }
  .data-box { background: #1A1A2E; color: #fff; border-radius: 8px; padding: 10px 16px; text-align: right; min-width: 140px; }
  .data-label { font-size: 10px; color: #8888AA; text-transform: uppercase; letter-spacing: .06em; }
  .data-valor { font-size: 15px; font-weight: 700; margin-top: 2px; }
  .divider { height: 3px; background: linear-gradient(90deg, #1A1A2E 60%, #4A90D9); border-radius: 2px; margin: 16px 0 24px; }
  .secao { margin-bottom: 22px; }
  .secao-titulo { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: #4A90D9; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; }
  .secao-titulo::after { content: ""; flex: 1; height: 1px; background: #E5E7EB; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 32px; }
  .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px 24px; }
  .campo label { font-size: 9px; color: #999; text-transform: uppercase; letter-spacing: .06em; display: block; margin-bottom: 2px; }
  .campo p { font-size: 13px; font-weight: 600; color: #1A1A2E; }
  .total-box { background: #1A1A2E; color: #fff; border-radius: 12px; padding: 20px 24px; margin: 24px 0; display: flex; justify-content: space-between; align-items: center; }
  .total-esq .label { font-size: 11px; color: #8888AA; margin-bottom: 4px; }
  .total-esq .valor { font-size: 32px; font-weight: 900; color: #4ADE80; letter-spacing: -0.03em; }
  .total-esq .uni { font-size: 11px; color: #6B7280; margin-top: 4px; }
  .total-dir { text-align: right; }
  .total-dir .label { font-size: 10px; color: #8888AA; margin-bottom: 4px; }
  .total-dir .val { font-size: 13px; font-weight: 600; color: #E5E7EB; }
  .rodape { margin-top: 24px; border-top: 2px solid #F0F0F0; padding-top: 16px; }
  .rodape-titulo { font-size: 9px; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 10px; }
  .rodape-item { padding: 5px 0 5px 10px; border-left: 2px solid #E5E7EB; margin-bottom: 6px; font-size: 11px; line-height: 1.6; color: #444; }
  @media print { body { padding: 20px; } }
</style></head><body>

<div class="header">
  <div>
    <div class="empresa">Bela Cor Embalagens</div>
    <div class="subtitulo">Orçamento — Sacola Plástica</div>
  </div>
  <div class="data-box">
    <div class="data-label">Data do Orçamento</div>
    <div class="data-valor">${hoje()}</div>
  </div>
</div>
<div class="divider"></div>

<div class="secao">
  <div class="secao-titulo">Dados do Cliente</div>
  <div class="grid2">
    ${[["Nome", cliente.nome||"—"], ["Empresa", cliente.empresa||"—"], ["Telefone", cliente.telefone||"—"], ["E-mail", cliente.email||"—"], ["Vendedor", cliente.vendedor||"—"], ["Contato", cliente.contato||"—"]].map(([l,v]) => `<div class="campo"><label>${l}</label><p>${v}</p></div>`).join("")}
  </div>
</div>

<div class="secao">
  <div class="secao-titulo">Especificações do Produto</div>
  <div class="grid3">
    ${[["Modelo", resultado.modelo], ["Densidade", resultado.densidade], ["Tamanho", resultado.tamanho], ["Cor", resultado.cor], ["Impressão", IMPRESSAO_LABELS[resultado.impressao] || resultado.impressao], ["Quantidade", resultado.qtde.toLocaleString("pt-BR") + " peças"]].map(([l,v]) => `<div class="campo"><label>${l}</label><p>${v}</p></div>`).join("")}
  </div>
</div>

<div class="total-box">
  <div class="total-esq">
    <div class="label">Total do Pedido</div>
    <div class="valor">${BRL(resultado.totalBRL)}</div>
    <div class="uni">${resultado.qtde.toLocaleString("pt-BR")} peças × R$ ${parseFloat(resultado.precoUni).toFixed(2)} por unidade</div>
  </div>
  <div class="total-dir">
    <div class="label">Validade</div>
    <div class="val">05 dias</div>
  </div>
</div>

<div class="rodape">
  <div class="rodape-titulo">Condições Gerais</div>
  ${RODAPE.map(t => `<div class="rodape-item">${t.replace(/\n/g, "<br>")}</div>`).join("")}
</div>
</body></html>`;

    const win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(() => win.print(), 400);
  }

  function mostrarTextoWhatsApp() {
    if (!resultado) return;
    const imp = resultado.impressao === "0x0" ? "Sem impressão" : resultado.impressao;
    const txt = `🛍️ *Orçamento — Sacola Plástica*
*Bela Cor Embalagens* | ${hoje()}

*Cliente:* ${cliente.nome || "—"}${cliente.empresa ? ` / ${cliente.empresa}` : ""}
*Vendedor:* ${cliente.vendedor || "—"}

*Modelo:* ${resultado.modelo} — ${resultado.densidade}
*Tamanho:* ${resultado.tamanho}
*Cor:* ${resultado.cor.split(" ").join(", ")}
*Impressão:* ${imp}
*Quantidade:* ${resultado.qtde.toLocaleString("pt-BR")} peças
*Preço unitário:* R$ ${parseFloat(resultado.precoUni).toFixed(2)}
*Total:* ${BRL(resultado.totalBRL)}

_Validade: 05 dias_`;
    setTextoCopiado(txt);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F5F4F0", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div style={{ background: "#1A1A2E", padding: "18px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: "#4A90D9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🛍️</div>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>Orçamento Rápido</div>
          <div style={{ color: "#8888AA", fontSize: 12 }}>Bela Cor Embalagens — Sacolas Plásticas</div>
        </div>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "24px 16px 40px" }}>

        {/* Dados do cliente */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 16 }}>
          <h2 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#1A1A2E", textTransform: "uppercase", letterSpacing: ".06em" }}>Dados do Cliente</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[["nome","Nome","text"],["empresa","Empresa","text"],["email","E-mail","email"],["vendedor","Vendedor","text"]].map(([k,l,t]) => (
              <div key={k}>
                <label style={labelSt}>{l}</label>
                <input type={t} value={cliente[k]} onChange={e => setCliente(c => ({...c, [k]: e.target.value}))} placeholder={l} style={sel} />
              </div>
            ))}
            <div>
              <label style={labelSt}>Telefone</label>
              <input type="tel" value={cliente.telefone} onChange={e => setCliente(c => ({...c, telefone: e.target.value.replace(/\D/g,"")}))} placeholder="Somente números" style={sel} />
            </div>
            <div>
              <label style={labelSt}>Contato</label>
              <select value={cliente.contato} onChange={e => setCliente(c => ({...c, contato: e.target.value}))} style={sel}>
                <option value="">— escolha —</option>
                {["Telefone","WhatsApp","E-mail","Visita"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Especificações */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#1A1A2E", textTransform: "uppercase", letterSpacing: ".06em" }}>Especificações do Produto</h2>

          <Field label="Modelo"><select value={modelo} onChange={e => onModelo(e.target.value)} style={sel}><option value="">— escolha —</option>{modelos.map(m => <option key={m}>{m}</option>)}</select></Field>
          <Field label="Densidade" disabled={!modelo}><select value={densidade} onChange={e => onDensidade(e.target.value)} style={sel} disabled={!modelo}><option value="">— escolha —</option>{densidades.map(d => <option key={d}>{d}</option>)}</select></Field>
          <Field label="Tamanho" disabled={!densidade}><select value={tamanho} onChange={e => onTamanho(e.target.value)} style={sel} disabled={!densidade}><option value="">— escolha —</option>{tamanhos.map(t => <option key={t}>{t}</option>)}</select></Field>
          <Field label="Cor disponível" disabled={!tamanho}><select value={cor} onChange={e => onCor(e.target.value)} style={sel} disabled={!tamanho}><option value="">— escolha —</option>{cores.map(c => <option key={c} value={c}>{c.split(" ").join(", ")}</option>)}</select></Field>
          <Field label="Impressão" disabled={!cor}>
            <select value={impressao} onChange={e => { setImpressao(e.target.value); setQuantidade(""); setResultado(null); }} style={sel} disabled={!cor}>
              <option value="">— escolha —</option>
              {impressoes.map(i => <option key={i} value={i}>{IMPRESSAO_LABELS[i] || i}</option>)}
            </select>
            {impressao && IMPRESSAO_DESC[impressao] && (
              <div style={{ marginTop: 6, padding: "8px 10px", background: "#F0F4FF", borderRadius: 6, fontSize: 11.5, color: "#374151", lineHeight: 1.5 }}>
                💡 {IMPRESSAO_DESC[impressao]}
              </div>
            )}
          </Field>
          <Field label={`Quantidade${impressao ? ` (mínimo: ${qtdeMin} peças)` : ""}`} disabled={!impressao}>
            <input type="number" value={quantidade} min={qtdeMin} step={50} onChange={e => { setQuantidade(e.target.value); setResultado(null); }} placeholder={`Ex: ${qtdeMin}`} disabled={!impressao} style={{ ...sel, appearance: "none" }} />
            {quantidade && parseInt(quantidade) < qtdeMin && <div style={{ color: "#E53E3E", fontSize: 12, marginTop: 4 }}>Quantidade mínima: {qtdeMin} peças</div>}
          </Field>

          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <button onClick={calcular} disabled={!pronto} style={{ flex: 1, padding: "14px 0", borderRadius: 10, border: "none", cursor: pronto ? "pointer" : "not-allowed", background: pronto ? "#1A1A2E" : "#D1D5DB", color: pronto ? "#fff" : "#9CA3AF", fontWeight: 700, fontSize: 15 }}>Calcular preço</button>
            <button onClick={limpar} style={{ padding: "14px 16px", borderRadius: 10, border: "1.5px solid #E5E7EB", background: "#fff", color: "#6B7280", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>Limpar</button>
          </div>
        </div>

        {/* Resultado */}
        {resultado && (
          <div style={{ marginTop: 16, background: "#1A1A2E", borderRadius: 16, padding: 24, color: "#fff" }}>
            <div style={{ fontSize: 11, color: "#8888AA", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 14 }}>Resultado</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px", marginBottom: 18 }}>
              {[["Modelo", resultado.modelo], ["Densidade", resultado.densidade], ["Tamanho", resultado.tamanho], ["Cor", resultado.cor], ["Impressão", IMPRESSAO_LABELS[resultado.impressao] || resultado.impressao], ["Quantidade", resultado.qtde.toLocaleString("pt-BR") + " peças"], ["Preço unitário", "R$ " + parseFloat(resultado.precoUni).toFixed(2)]].map(([k,v]) => (
                <div key={k}><div style={{ fontSize: 10, color: "#6B7280", marginBottom: 2 }}>{k}</div><div style={{ fontSize: 13, fontWeight: 500, color: "#E5E7EB", wordBreak: "break-word" }}>{v}</div></div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #2D2D4E", paddingTop: 14, marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#8888AA", marginBottom: 4 }}>Total do pedido</div>
              <div style={{ fontSize: 30, fontWeight: 800, color: "#4ADE80" }}>{BRL(resultado.totalBRL)}</div>
              <div style={{ fontSize: 11, color: "#6B7280", marginTop: 3 }}>{resultado.qtde.toLocaleString("pt-BR")} peças × R$ {parseFloat(resultado.precoUni).toFixed(2)}</div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={gerarPDF} style={{ flex: 1, padding: "12px 0", borderRadius: 8, border: "none", background: "#4A90D9", color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                📄 Gerar PDF
              </button>
              <button onClick={mostrarTextoWhatsApp} style={{ flex: 1, padding: "12px 0", borderRadius: 8, border: "1.5px solid #2D2D4E", background: "transparent", color: "#8888AA", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                📋 WhatsApp
              </button>
            </div>
            <button onClick={limpar} style={{ marginTop: 10, width: "100%", padding: "12px 0", borderRadius: 8, border: "none", background: "#4ADE80", color: "#1A1A2E", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
              ➕ Novo Orçamento
            </button>

            {textoCopiado && (
              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 11, color: "#8888AA", marginBottom: 6 }}>Selecione o texto abaixo e copie (Ctrl+C / Cmd+C):</div>
                <textarea readOnly value={textoCopiado} onClick={e => e.target.select()} style={{ width: "100%", minHeight: 180, background: "#0D0D1E", color: "#E5E7EB", border: "1px solid #2D2D4E", borderRadius: 8, padding: 12, fontSize: 12, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box", cursor: "text" }} />
              </div>
            )}
          </div>
        )}

        <div style={{ textAlign: "center", color: "#9CA3AF", fontSize: 11, marginTop: 24 }}>
          Preços atualizados em 27/04/2026 · Fase 1 — Sacolas Plásticas
        </div>
      </div>
    </div>
  );
}

function Field({ label, disabled = false, children }) {
  return (
    <div style={{ marginBottom: 14, opacity: disabled ? 0.4 : 1, transition: "opacity .2s" }}>
      <label style={labelSt}>{label}</label>
      {children}
    </div>
  );
}

const labelSt = { display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 5 };
const sel = { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #E5E7EB", background: "#F9FAFB", color: "#111827", fontSize: 13, outline: "none", boxSizing: "border-box", cursor: "pointer" };
