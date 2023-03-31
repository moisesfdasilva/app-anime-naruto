'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('characters',
    [
      {
       id: 1,
       name: "Naruto Uzumaki",
       level: "Genin (Naruto e Shippuden), Hokage (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Kage Bunshin no Jutsu, Rasengan",
       about: "Personagem principal de Naruto Shippuden, Naruto é um órfão cujo destino foi selado no dia em que ele nasceu. Nele, foi selada a Raposa de Nove Caudas (a Kyuubii), um monstro de poder imenso que atacou a Vila da Folha há muito tempo. Por causa disso, parte da Vila o rejeita, mas ao invés de se revoltar com a situação, Naruto tem o sonho de transformar-se no ninja mais forte da vila e provar o valor dele a todos.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 2,
       name: "Sasuke Uchiha",
       level: "Genin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Chidori, Katon Gokakyu no Jutsu (Bola de Fogo)",
       about: "Melhor amigo e rival de Naruto, Sasuke também tem um passado trágico. Último sobrevivente do clã dele, os Uchiha que até então eram os mais fortes da Vila da Folha, ele tem como objetivo vingar-se de Itachi, seu irmão mais velho e autor deste massacre. Sasuke é um gênio natural, mas tem trevas profundas rondando ele e esta sede de vingança pode ser sua perdição. Um dos personagens com maior destaque em Naruto. Depois de Naruto, ele é o segundo dos personagens mais importantes de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 3,
       name: "Sakura Haruno",
       level: "Genin (Naruto), Chunin (Shippuden), Jounin (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Ninjutsu Médico, Super Força",
       about: "Companheira de Naruto e Sasuke no Time 7, Sakura é uma jovem cheia de energia que está mais interessada em sua paixonite por Sasuke do que tornar-se uma ninja. Apesar disso, ela é bastante dedicada e inteligente, e logo vai perceber que precisa amadurecer para sobreviver neste mundo.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 4,
       name: "Kakashi Hatake",
       level: "Jounin (Naruto), Hokage (Shippuden), Hokage Aposentado (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Raikiri, Doton Doryuheki (Parede de Barro), Kamui",
       about: "Professor de Naruto, Sasuke e Sakura e líder do Time 7, Kakashi é um dos ninjas mais fortes e talentosos da Vila da Folha. Apesar de parecer distraído e estar sempre lendo um livro, ele é extremamente talentoso e tem uma grande lição sobre o trabalho em equipe para ensinar aos alunos dele.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 5,
       name: "Iruka Umino",
       level: "Chunin (Naruto, Shippuden e Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnicas básicas ninja",
       about: "Professor de Naruto e seus amigos durante a academia ninja (uma espécie de pré-escola ninja). Iruka foi o primeiro a acreditar verdadeiramente em Naruto e isso foi fundamental para o crescimento do nosso ninja favorito.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 6,
       name: "Hiruzen",
       level: "Hokage (Naruto)",
       resident: "Konoha",
       skills: "Selamento do Shinigami, Invocação do Rei Macaco, Invocação Fuma Shuriken",
       about: "O Terceiro Hokage é o atual líder da Vila da Folha. Apesar de estar sempre andando por aí distraído ou consultando sua bola de cristal, ele é um ninja extremamente forte que cuida dos principais detalhes da vila onde Naruto mora. Conhecido como “o professor” ele é profundamente respeitado pelos outros ninjas da vila. Apesar de estar aposentado há alguns anos, ele voltou a assumir o posto de líder da Vila Ninja após a morte do Quarto Hokage, e ainda pretende permanecer no posto por mais 4 ou 5 anos.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 7,
       name: "Konohamaru Sarutobi",
       level: "Genin (Naruto e Shippuden), Jounin (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Rasengan, Kage Bunshin no Jutsu, Projétil de Chama do Dragão de Fogo",
       about: "Neto do Terceiro Hokage e rival/aluno de Naruto, Konohamaru é um jovem talentoso que, assim como Naruto, quer tornar-se Hokage, mas só após Naruto conquistar o sonho dele.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 8,
       name: "Shikamaru Nara",
       level: "Genin e Chunin (Naruto), Jounin (Shippuden e Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnica do Aprisionamento das Sombras",
       about: "Um dos melhores amigos de Naruto e um dos personagens mais inteligentes da história. Konohamaru destaca-se por usar sempre o seu intelecto superior nos combates e ajustar-se às situações que as batalhas colocam contra ele.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 9,
       name: "Hinata Hyuga",
       level: "Genin (Naruto), Chunin (Shippuden e Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnica do Punho Gentil",
       about: "Detentora do Byakugan, Hinata é membro de um dos clãs mais prestigiosos de Konoha. Apesar disso, ela é bastante tímida e não leva muito jeito para o combate inicialmente. Por causa destes problemas, ela foi deserdada pelo pai como sucessora do clã dela. Além disso, ela também tem uma paixão oculta por Naruto e sempre fica nervosa quando ele está por perto.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 10,
       name: "Neji Hyuga",
       level: "Genin (Naruto), Jounin (Shippuden)",
       resident: "Konoha",
       skills: "Técnica do Punho Gentil",
       about: "Primo de Hinata e membro da família secundária dos Hyuga, Neji é um personagem que se ressente dessa dinâmica do clã em que ele é membro. Apesar disto, ele é extremamente talentoso e conseguiu inclusive aprender técnicas secretas da família principal apenas olhando para elas.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 11,
       name: "Ino Yamanaka",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Técnica de Transferência da Mente, Ninjutsu Médico",
       about: "Ino é a grande rival de Sakura, e uma das personagens femininas mais fortes de Naruto.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 12,
       name: "Chouji Akimichi",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Técnica da Expansão Corporal",
       about: "Chouji é integrante do time de Shikamaru e de Ino. Glutão, ele adora comer churrasco com seus colegas após as missões, e odeia que falem do peso dele. Um dos personagens de Naruto que os fãs não dão muita coisa por ele a princípio, mas que conta com um dos momentos mais incríveis do anime ainda na Parte 1.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 13,
       name: "Rock Lee",
       level: "Genin (Naruto), Chunin (Shippuden), Jounin (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnica dos Oito Portões",
       about: "Um dos personagens mais interessantes de Naruto, Rock Lee não consegue usar nem Ninjutsu nem Genjutsu. Por causa disso, ele concentrou-se em Taijutsu e possui técnicas de luta muito mais apuradas do que os seus colegas. Um verdadeiro gênio da força de vontade.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 14,
       name: "Tenten",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Ferramentas Ninja",
       about: "Uma ninja especializada em usar ferramentas como Kunai, Shurikens e assim por diante.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 15,
       name: "Kiba Inuzuka",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Presa sobre Presa",
       about: "Kiba é colega de Hinata no time com ela e Shino, e um dos ninjas rastreadores mais competentes de Konoha. Apesar de não ser muito forte, ele é parte importante da Vila da Folha quando o objetivo é ir atrás de algum ninja fugitivo, por exemplo. Ele forma uma parceria sólida com seu cachorro ninja: Akamaru.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 16,
       name: "Shino Aburame",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Insetos",
       about: "Shino é um dos mais discretos membros dos 11 de Konoha. Ele pertence ao clã Aburame, especializado em usar insetos para enfrentar seus adversários.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 17,
       name: "Sai Yamanaka",
       level: "ANBU (Shippuden)",
       resident: "Konoha",
       skills: "Técnica da Névoa de Tinta",
       about: "Sai é o décimo segundo de Konoha, e junta-se ao Time 7 de Naruto para a missão de Reconhecimento na Ponte Tenchi, segundo arco de Naruto Shippuden. Sai fazia parte da ANBU e está no Time 7 a mando de Danzou para ficar de olho em Naruto e também para tentar estabelecer contato com Orochimaru. Ele usa um tipo de Jutsu onde consegue transformar desenhos em seres de energia que podem transportá-lo ou atacar os adversários. Tido pelos fãs de Naruto Shippuden como um “Sasuke piorado”, este é um dos personagens com um dos melhores crescimentos dentro do anime.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 18,
       name: "Jiraiya",
       level: "Sannin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Rasengan, Jutsu de Invocação, Baforada de Fogo",
       about: "Um dos três ninjas sábios de Konoha, Jiraiya torna-se professor de Naruto por acaso e ensina a ele algumas das suas principais técnicas, além de lições de vida que ele traz até hoje. O Sannin dos sapos também é extremamente forte, tendo participado de algumas das batalhas mais épicas do anime. Certamente um dos personagens mais queridos de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 19,
       name: "Orochimaru",
       level: "Sannin (Naruto e Shippuden)",
       resident: "Vila do Som",
       skills: "Jutsus de Cobra",
       about: "Orochimaru tem como objetivo aprender todos os Jutsus do mundo e para isso ele busca o segredo da imortalidade. Além disso, ele quer vingar-se do Terceiro Hokage por um evento do passado deles.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 20,
       name: "Tsunade Senju",
       level: "Sannin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Ninjutsu Médico, Super Força",
       about: "Neta do primeiro Hokage, Tsunade é a ninja médica mais famosa do mundo e detentora de uma força física invejável. Ela assume o posto como Quinto Hokage após a morte de Hiruzen Sarutobi, e preside Konoha com sabedoria e estabilidade durante a maior parte do anime.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 21,
       name: "Kabuto Yakushi",
       level: "Genin (Naruto)",
       resident: "Konoha",
       skills: "Ninjutsu Médico",
       about: "Kabuto é um jovem que ajuda o time de Naruto durante o Exame Chunin, e que esconde muito por trás da aparência de bom moço. Um dos personagens mais complexos de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 22,
       name: "Asuma Sarutobi",
       level: "Jounin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Pilha Ardente de Cinzas, Técnica da Andorinha",
       about: "Professor de Shikamaru, Ino e Chouji, Asuma é um dos Jounin mais fortes de Konoha, juntamente com Kakashi. Ele é filho do Terceiro Hokage, e tem um passado interessante onde ele viveu um tempo fora da Vila Ninja.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 23,
       name: "Kurenai",
       level: "Jounin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Genjutsu",
       about: "Professora do time de Hinata, Kiba e Shino, Kurenai é uma das personagens femininas de Naruto mais fortes. Ela se especializa em Genjutsu para combate.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 24,
       name: "Might Guy",
       level: "Jounin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Taijutsu e Abertura dos Oito Portões",
       about: "Professor do time de Rock Lee, Tenten e Neji, é um dos jounins mais fortes da série. Sua personalidade excêntrica esconde o mais poderoso utilizador de taijutsu da série. Foi ele quem ensinou a Rock Lee a técnica dos Oito Portões, que ele utiliza em diversos dos seus combates.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 25,
       name: "Gaara",
       level: "Genin (Naruto), Kazekage (Shippuden)",
       resident: "Vila da Areia",
       skills: "Caixão de Areia",
       about: "Filho do Quarto Kazekage, Gaara é um ninja com um triste passado e muita sede de sangue. Após a luta dele contra Naruto, Gaara percebe que ele poderia deixar toda essa tristeza e raiva para trás, e acaba tornando-se o Kazekage da Vila da Areia, virando um sábio líder do seu povo. Gaara também é o Jinchuuriki de Uma Cauda, tendo selado dentro de si o Shukaku.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 26,
       name: "Kankuro",
       level: "Genin (Naruto), Jounin (Shippuden)",
       resident: "Vila da Areia",
       skills: "Marionetes",
       about: "Kankuro é um dos únicos usuários de Marionetes de Naruto e prefere enfrentar seus adversários à distância. Durante o anime, vemos ele enfrentando Shino Aburame no Naruto Clássico e depois Kakuzu em Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 27,
       name: "Temari",
       level: "Genin (Naruto), Jounin (Shippuden)",
       resident: "Vila da Areia",
       skills: "Leque de Vento",
       about: "Uma das personagens femininas mais poderosas de Naruto, Temari é a irmã mais velha de Gaara. Ela possui fortes jutsus de vento, e também uma relação interessante com Shikamaru, com quem ela luta no primeiro Exame Chunin.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 28,
       name: "Kurama",
       level: "Besta de Caudas",
       resident: "Jinchūriki",
       skills: "Bola da Besta com Cauda ",
       about: "Kurama é a Raposa de Nove Caudas. Responsável pelo ataque a Konoha que mudou completamente a vida de Naruto, Kurama foi selada dentro do protagonista do anime e conforme o tempo vai passando, os dois deixam de odiar um ao outro e fazem uma parceria, eventualmente tornando-se amigos.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 29,
       name: "Itachi Uchiha",
       level: "Chunin/ANBU",
       resident: "Vila da Folha",
       skills: "Jutsu da Bola de Fogo, Tsukuyomi, Amaterasu, Susano’o",
       about: "Itachi é o irmão mais velho de Sasuke. Responsável pelo extermínio dos Uchiha, o personagem é um dos mais fortes de Naruto Shippuden com sobras, tendo vencido Kakashi com certa facilidade quando ele e Hidan vão a Konoha no começo do anime. Este é tranquilamente um dos personagens mais complexos do anime.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 30,
       name: "Minato Namikaze",
       level: "Hokage",
       resident: "Vila da Folha",
       skills: "Teletransporte, Rasengan, Modo Sábio",
       about: "Minato é o Quarto Hokage da Vila da Folha. Responsável por salvar a vila do ataque de Kurama e selá-la dentro de Naruto, o personagem é um dos maiores gênios que já pisou na vila, tendo sido promovido muito cedo a Chunin, derrotado grandes inimigos sem ter nenhum tipo de Kekkei Genkai e criado a segunda técnica que Naruto mais usa: o Rasengan.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 31,
       name: "Kushina Uzumaki",
       level: "Jounin",
       resident: "Vila da Folha",
       skills: "Jutsu de Selamento",
       about: "Mãe de Naruto, Kushina fez o maior sacrifício de todos ao auxiliar Minato na luta contra Kurama, mesmo tendo recém dado a luz a Naruto. Kushina é expansiva e usa muitas gírias, exatamente como Naruto faz. Uma das personagens mais importantes da história de Naruto Shippuden, mesmo que tenha aparecido por pouco tempo nela.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 32,
       name: "Hashirama Senju",
       level: "Líder do clã Senju, Hokage",
       resident: "Vila da Folha",
       skills: "Estilo Madeira, Invocação do Rashōmon Quíntuplo, Senjutsu",
       about: "Hashirama Senju é o ninja mais poderoso que já existiu em Naruto até o começo do anime. O Primeiro Hokage fundou a Vila da Folha juntamente com Madara Uchiha. Detentor do Estilo Madeira, ele foi responsável por capturar todas as Bijuus e distribuí-las entre as Vilas Ocultas para que o equilíbrio de poder acabasse com as guerras entre elas. Até hoje não se sabe como Hashirama morreu.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 33,
       name: "Tobirama Senju",
       level: "Hokage",
       resident: "Vila da Folha",
       skills: "Técnica de Invocação, Kekkaijutsu, Técnica do Raijin Voador",
       about: "Tobirama Senju é o irmão mais novo de Hashirama e Segundo Hokage. O personagem é responsável por boa parte da organização burocrática da Vila da Folha, tendo criado o Exame Chunin, além de diversas outras táticas organizacionais da Vila. Além disso, Tobirama também era um criador polífico de Jutsus, tendo criado o Jutsu de Clone das Sombras, o Voo do Deus Trovão e o Edo Tensei. O personagem nutria uma forte desconfiança pelos Uchiha. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 34,
       name: "Anko Mitarashi",
       level: "Jounin",
       resident: "Vila da Folha",
       skills: "Técnica da Morte Mútua das Cobras Gêmeas, Técnica do Dragão de Fogo",
       about: "Anko Mitarashi é uma antiga aprendiz de Orochimaru que vive na Vila da Folha e que tem como objetivo caçá-lo para fazer que ele pague pelos crimes que cometeu. A personagem foi introduzida no anime durante o Exame Chunin, e assim como seu mestre, ela também utiliza jutsus de cobras para lutar.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 35,
       name: "Shizune",
       level: "Jounin",
       resident: "Vila da Folha",
       skills: "Ninjutsu Médico, Técnicas de Veneno",
       about: "Shizune é a ajudante de Tsunade e também é uma Ninja Médica. Apesar de bastante talentosa, ela acabou não conseguindo aprender a técnica de Byakugou, utilizada tanto por Tsunade quanto por Sakura. Apesar de sua afinidade com a medicina, muitos dos ataques que ela usa no anime utilizam envolvem o uso de veneno, incluindo o uso de agulhas envenenadas ou a emissão de gás tóxico da própria boca.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 36,
       name: "Yamato",
       level: "ANBU",
       resident: "Vila da Folha",
       skills: "Estilo Madeira, Supressão da Besta com Cauda",
       about: "Yamato é o líder substituto do Time 7 após Kakashi ficar com o corpo exausto devido ao uso do Mangekyo Sharingan. Ele é o único sobrevivente dos experimentos de Orochimaru, que tentava criar uma espécie de Clone de Hashirama Senju, inserindo as células dele em crianças. Por causa disso, ele consegue fazer uso do Estilo Madeira, ainda que não seja tão poderoso quanto o Primeiro Hokage. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 37,
       name: "Suigetsu Hozuki",
       level: "Protetor dos esconderijos de Orochimaru",
       resident: "Esconderijos de Orochimaru",
       skills: "Estilo Água",
       about: "Suigetsu foi o primeiro membro do Time Taka a juntar-se a Sasuke. Originalmente da Vila da Névoa, o personagem tem como objetivo obter todas as espadas empunhadas pelos Sete Espadachins da Névoa, por causa do irmão dele, Mangetsu, que também foi um membro deste grupo. O personagem ainda tem a habilidade de transformar qualquer parte do corpo dele em água, dando assim uma vantagem nos combates contra adversários que não saibam o Raiton.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 38,
       name: "Karin Uzumaki",
       level: "Genin / Protetora dos esconderijos de Orochimaru",
       resident: "Esconderijos de Orochimaru",
       skills: "Percepção Sensorial, cura",
       about: "Karin é uma ninja da Vila Oculta da Grama, a personagem foi levada por Orochimaru e transformada numa servo dele. A personagem é salva por Sasuke durante o Exame Chunin, e acaba apaixonando-se por ele. A personagem possui grandes reservas de chakra, além da habilidade de selar inimigos exatamente como Kushina por fazer parte do clã Uzumaki. Além disso, ela possui uma habilidade especial onde ela consegue transferir chakra a qualquer um que morda alguma parte do corpo dela, com o limite de uso de uma vez por dia. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 39,
       name: "Jugo",
       level: "Desconhecido",
       resident: "Esconderijos de Orochimaru",
       skills: "Transformação Eremita",
       about: "Jugo foi o último membro do Time Taka a juntar-se a Sasuke. Ele faz parte de um clã cuja habilidade especial é usar Senjutsu por meio da Marca da Maldição, a mesma que Sasuke possuía na época em que eles se conheceram. Jugo aprisionou-se por não conseguir manter o controle quando ele usa as habilidades dele, e após Sasuke conseguir acalmá-lo para que ele usasse os poderes dele corretamente, ele decidiu segui-lo, pois este lembrava-o de Kimimaro.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 40,
       name: "Killer Bee",
       level: "Jinchūriki",
       resident: "Vila Oculta da Nuvem",
       skills: "Taijutsu, Kenjutsu, Transformações do Jinchūriki",
       about: "Killer Bee é o Jinchuuriki das Oito Caudas. O personagem se auto-intitula um rapper ninja, apesar de fazer rimas terríveis, e é extremamente forte. Assim como Naruto, ele teve uma infância bem difícil por ter uma Bijuu selada dentro dele, mas ele também manteve a positividade e cativou todos os membros da Vila da Nuvem. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 41,
       name: "Kakuzu",
       level: "Membro da Akatsuki",
       resident: "Esconderijo da Akatsuki",
       skills: "Modificações Corporais, estilo água, fogo, raio, vento e terra",
       about: "Kakuzu é o parceiro de Hidan na Akatsuki, e ex-membro da Vila da Cachoeira. Expulso dela após falhar na missão de assassinar o Primeiro Hokage, ele juntou-se à Akatsuki atrás de dinheiro. O personagem possui 5 corações ao todo, todos eles exceto o próprio roubado de outros ninjas, o que o permite usar as Cinco Transformações da Natureza de forma independente. Durante a Quarta Grande Guerra Ninja, Kakuzu é rescucitado por Kabuto e enfrenta novamente vários ninjas da Vila da Folha até ser selado para sempre.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 42,
       name: "Kisame Hoshigaki",
       level: "Jōnin / Membro da Akatsuki",
       resident: "Esconderijo da Akatsuki",
       skills: "Onda de Impacto Explosiva, Deslocamento Subterrâneo",
       about: "Kisame Hoshigaki é um antigo membro da vila da Névoa e atual parceiro de Itachi na Akatsuki. O ninja possui reservas de chakra extremas, além de carregar a espada Samehada, conhecida por absorver o chakra dos adversários. Kisame é um ninja extremamente forte que presa pela verdade, além de ser o membro mais fiel da Akatsuki. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 43,
       name: "Deidara",
       level: "Jōnin / Membro da Akatsuki",
       resident: "Esconderijo da Akatsuki",
       skills: "Argila Explosiva",
       about: "Deidara é um ninja da Akatsuki que faz parceria inicialmente com Sasori. Apesar de ter juntado-se à Akatsuki, ele detesta a maioria dos membros do grupo, principalmente Itachi Uchiha, por ter sido vencido por ele quando mais novo. Deidara usa um jutsu extremamente poderoso composto por bonecos de argila com chakra, que explodem ao comando dele. Autoproclamado um artista, ele diz que a arte é uma explosão, e esse é o legado que ele quer deixar ao mundo.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 44,
       name: "Hidan",
       level: "Jōnin / Membro da Akatsuki",
       resident: "Esconderijo da Akatsuki",
       skills: "Imortalidade, Ritual Jashin",
       about: "Hidan é um membro da Akatsuki que faz dupla com Kakuzu. Ele é um imortal que venera o Deus Jashin e está sempre em busca de recompensas, sendo uma espécie de tesoureiro da Akatsuki. O jutsu de Hidan funciona como uma maldição onde o inimigo atingido por ela acaba sofrendo os mesmos danos que Hidan sofrer, mas por ele ser imortal, ele consegue sobreviver aos ataques, enquanto o mesmo não pode ser dito de quem o enfrenta. Um dos personagens mais bizarros de Naruto Shippuden. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 45,
       name: "Sasori",
       level: "Jōnin / Membro da Akatsuki",
       resident: "Esconderijo da Akatsuki",
       skills: "Mestre das Marionetes, Corpo de Marionete",
       about: "Sasori é um mestre em marionetes antigo membro da Vila da Areia e que faz dupla na Akatsuki com Deidara atualmente, apesar de ter sido parceiro de Orochimaru no passado. Com o passar dos anos, Sasori desenvolveu a habilidade de converter cadáveres humanos em marionetes, tendo acesso aos poderes que eles possuíam quando estavam vivos. Um dos principais objetivo do personagem é buscar a imortalidade, e por isso ele transformou o próprio corpo em uma marionete.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 46,
       name: "Nagato",
       level: "Líder da Akatsuki",
       resident: "Vila Oculta na Chuva",
       skills: "Rinnegan, Seis Caminhos de Pain",
       about: "Nagato é o líder da Akatsuki. Apesar de ter perdido a habilidade de comandar o próprio corpo para lutar anos antes, ele controla os Seis Caminhos de Pain, um temível inimigo que possui seis tipos de habilidade e seis corpos independentes, sendo estes fortes o suficiente para enfrentarem uma Vila Ninja inteira. Nagato possui o Rinnegan, o Dojutsu lendário do Sábio dos Seis Caminhos, que o confere habilidades incríveis. O personagem tem como objetivo acabar com a dor do mundo, e para isso ele quer reunir todas as Bestas de Cauda. De acordo com o plano de Pain, a paz só poderia ser alcançada se ensinasse ao mundo a dor causada pela guerra. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 47,
       name: "Yahiko",
       level: "Líder da Akatsuki",
       resident: "Vila Oculta na Chuva",
       skills: "Onda de Água Selvagem",
       about: "Primeiro líder da Akatsuki, é amigo de infância de Nagato e Konan, mas acabou morrendo numa emboscada planejada tanto por Hanzo da Salamandra quanto por Danzo Shimura. Yahiko tinha como plano acabar com as guerras do mundo, e para isso, ele iria tornar-se o governante de todos.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 48,
       name: "Konan",
       level: "Membro da Akatsuki",
       resident: "Vila Oculta na Chuva",
       skills: "Dança do Shikigami",
       about: "Konan foi colega de Nagato e Yahiko e assim como eles ela também foi treinada por Jiraiya enquanto este viajava pelo mundo. Detentora da habilidade de controlar papéis explosivos, Konan é uma personagem incrivelmente poderosa, e extremamente fiel a Nagato.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 49,
       name: "Madara Uchiha",
       level: "Líder do clã Uchiha",
       resident: "Esconderijo do Madara Uchiha",
       skills: "Genjutsu, Mangekyō Sharingan, Rinnegan, Rinne Sharingan",
       about: "Madara Uchiha é um dos grandes antagonistas de Naruto Shippuden. Antigo companheiro e amigo de Hashirama Senju, ele também ajudou a fundar a Vila da Folha e trazer o clã Uchiha para ela. Divergências entre ele e Hashirama acabaram resultando numa grande luta entre os dois. Madara acabou derrotado e quase morreu, não fosse o Izanagi, uma técnica proibida do clã Uchiha. Após esta luta, ele bola um plano de anos para dominar o mundo e colocar todos no Tsukuyomi Infinito.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 50,
       name: "Obito Uchiha",
       level: "Chunin / Membro da Akatsuki",
       resident: "Esconderijo do Madara Uchiha",
       skills: "Mangekyō Sharingan, Kamui",
       about: "Obito Uchiha é outro dos antagonistas e personagens mais importantes de Naruto Shippuden. Antigo companheiro de Kakashi e também aprendiz do Quarto Hokage, Obito é dado como “morto” numa missão em que Rin é sequestrada. Antes da morte, Obito dá de presente a Kakashi o Sharingan dele como presente de despedida. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 51,
       name: "Zabuza Momochi",
       level: "Jounin/ANBU",
       resident: "Vila Oculta da Névoa",
       skills: "Técnica da Prisão de Água, Técnica de Ocultação na Névoa",
       about: "Zabuza é o primeiro grande vilão que Naruto e seus amigos enfrentam. Um Jounin bastante forte, ele usa Jutsus de água para derrotar seus inimigos, e é conhecido como Zabuza da Névoa Assassina, por utilizar a técnica de “Silent Killing” para eliminar seus adversários. Após ser derrotado por Kakashi, Zabuza arrepende-se do caminho que ele levou ele e Haku a tomarem, graças a um discurso emocionado de Naruto.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 52,
       name: "Haku",
       level: "ANBU",
       resident: "País da Água",
       skills: "Espelhos Demoníacos de Cristais de Gelo, Sensatsu Suishō",
       about: "Haku é detentor de uma Kekkei Genkai extremamente rara: o gelo. Com ele e suas agulhas, ele dá bastante trabalho a Naruto e Sasuke e quase mata ambos na luta entre eles. No fim das contas, Haku se sacrifica para evitar a morte de Zabuza nas mãos de Kakashi, e ambos morrem um ao lado do outro no fim do combate. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 53,
       name: "A",
       level: "Raikage",
       resident: "Vila Oculta da Nuvem",
       skills: "Taijutsu, Modo de Chakra do Estilo Raio, Lariat",
       about: "Como o Quarto Raikage, A é um shinobi extremamente poderoso, sendo escolhido como o Líder Supremo das Forças Aliadas Shinobi, mesmo depois de perder seu braço dominante. Seu estilo de luta exclusivo combina os elementos do ninjutsu e do taijutsu para formar o nintaijutsu. Usando-o, ele poderia facilmente se envolver diretamente na batalha com uma Besta com Cauda, ​​derrotar um Jūgo totalmente transformado e dominar Sasuke empunhando o Mangekyō Sharingan.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 54,
       name: "Ohnoki",
       level: "Tsuchikage",
       resident: "Vila Oculta da Pedra",
       skills: "Estilo Pó, Golems de pedra",
       about: "Como o Terceiro Tsuchikage, Ōnoki foi facilmente um dos shinobi mais fortes que Iwagakure já produziu. Com mais de 80 anos, apesar de sua idade bastante avançada, deixando sua saúde geral um pouco frágil (queixando-se constantemente de dores nas costas e no quadril), ele ainda se mostrou capaz de liderar sua aldeia sem duvidar das pessoas. Na batalha, ele ainda se mostrou muito capaz, capaz de competir contra vários inimigos poderosos, incluindo seu antigo mestre reencarnado. Ele era bem visto como um shinobi lendário, como o próprio Madara reconheceu Ōnoki como a principal ameaça entre as Forças Aliadas Shinobi e a mais difícil de quebrar. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 55,
       name: "Mū",
       level: "Tsuchikage",
       resident: "Vila Oculta da Pedra",
       skills: "Estilo Pó, dividir-se",
       about: "Como o Segundo Tsuchikage, Mū era um shinobi imensamente poderoso, de tal forma que ele foi capaz de matar o Segundo Mizukage — embora ao custo de sua própria vida. Antes de se tornar Tsuchikage, ele foi escolhido para ser o guarda-costas de seu antecessor.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 56,
       name: "Danzō Shimura",
       level: "ANBU",
       resident: "Vila da Folha",
       skills: "Izanagi, ataque de vácuo",
       about: "Como o líder da Root e o Sexto Candidato Hokage, Danzō era um shinobi excepcionalmente poderoso. As habilidades de Danzō foram muito apreciadas pelos anciões Homura e Koharu, pois o consideravam um dos ninjas mais fortes de Konoha, mesmo até sua morte. Seu poder era tal que Kakashi expressou choque intenso ao saber que ele havia sido derrotado sozinho por Sasuke Uchiha. No entanto, esta derrota foi parcialmente atribuída à sua velhice, sua retenção durante a maior parte da luta para lutar contra Tobi, e ser incapaz de usar o Mangekyō Sharingan de Shisui Uchiha. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 57,
       name: "Rin Nohara",
       level: "Chunin",
       resident: "Vila da Folha",
       skills: "Ninjutsu Médico",
       about: "Rin era uma kunoichi competente e incrivelmente forte. Ela foi capaz de resistir a vazar qualquer informação mesmo quando sob o genjutsu de Kakkō. No anime, Rin mostrou pelo menos uma habilidade básica de taijutsu durante seu teste de genin contra Minato.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 58,
       name: "Shisui Uchiha",
       level: "Jounin/ANBU",
       resident: "Vila da Folha",
       skills: "Técnica do Deslocamento Instantâneo, invocar corvos",
       about: "Mesmo para os padrões Uchiha, Shisui foi considerado um dos membros mais talentosos que o famoso clã já teve. Danzō até o saudou como o Uchiha mais forte de seu tempo. Suas habilidades permitiram que ele se tornasse um jōnin quatro anos depois de se tornar um shinobi e eventualmente um capitão de seu próprio esquadrão. Logo depois, ele até se tornou um Anbu. Sua destreza era tão amplamente conhecida que um esquadrão inteiro de Kiri-nin rapidamente fugiu ao notá-lo ao invés de confrontá-lo.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 59,
       name: "Kaguya Otsutsuki",
       level: "Líder do clã Ōtsutsuki",
       resident: "Indeterminado",
       skills: "Progenitora do chakra",
       about: "No anime, Kaguya mostrou poderes sobrenaturais muito antes de consumir o fruto da Árvore Divina. Ela poderia realizar viagens interestelares, subjugar as pessoas ao sono, hipnotizá-las, apagar suas memórias, ou até mesmo liberar uma poderosa onda de choque de seus olhos capaz de explodir ou mutilar pessoas. Mesmo antes de comer a fruta, ela foi capaz de deixar o companheiro de clã Isshiki perto da morte, embora em um ataque surpresa.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 60,
       name: "Zetsu",
       level: "Membro da Akatsuki",
       resident: "Esconderijo da Akatsuki",
       skills: "Gravar os eventos observavados, Estilo Madeira",
       about: "Ajustando-se à sua natureza parasitária, o Zetsu Negro mostrou muitas habilidades que o ajudaram a enganar e manipular os outros por séculos, enquanto permanece oculto e anônimo. Com os poderes à sua disposição e capacidades táticas em combinação com as de Kaguya, os dois foram capazes de afastar Naruto Uzumaki e Sasuke por um tempo, apesar dos dois serem auxiliados por seus respectivos aprimoramentos e ajuda de seus aliados. Ele também pode usar todas as cinco transformações básicas da natureza e a Liberação de Yin e Yang. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 61,
       name: "Hagoromo Otsutsuki",
       level: "Eremita dos Seis Caminhos",
       resident: "Indeterminado",
       skills: "Rinnegan",
       about: "Hagoromo é amplamente aceito como a figura mais poderosa da história, perdendo apenas para sua mãe, tendo derrotado o Dez-Caudas e selado sua mãe ao lado de seu irmão, com Hamura reconhecendo seu irmão mais velho como o mais forte dos gêmeos. O poder e as façanhas de Hagoromo o tornaram reverenciado como um deus. Ele obteve um grande grupo de seguidores, como muitos em todo o mundo se esforçaram para aprender com seus ensinamentos.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 62,
       name: "Chiyo",
       level: "Conselheira",
       resident: "Vila Oculta da Areia",
       skills: "Mestre das Marionetes",
       about: "Apesar de sua idade avançada, Chiyo ainda era uma kunoichi muito poderosa, sendo muito respeitada em toda Suna. Até mesmo sua rival, Tsunade, tinha grande respeito por ela. Com a ajuda de Sakura, ela pode derrotar Sasori, um poderoso membro da Akatsuki. Suas habilidades eram grandes o suficiente para serem escolhidas para reencarnação por Kabuto Yakushi para a Quarta Guerra Mundial Shinobi. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 63,
       name: "Rasa",
       level: "Kazekage",
       resident: "Vila Oculta da Areia",
       skills: "Pó de Ouro, Estilo Magnetismo",
       about: "Rasa era um shinobi muito poderoso, como evidenciado por seu título de Kazekage. Ele poderia até mesmo subjugar uma Besta com Cauda totalmente liberada como Shukaku. A perspectiva de sua retaliação foi suficiente para evitar que um grande grupo de Iwa-nin deflagrasse um conflito na fronteira do País do Vento. Ele se mostrou bastante observador, identificando o Terceiro Olho de Gaara que estava espionando ele e os outros Kage reencarnados depois que Mū sentiu seu chakra.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 64,
       name: "Darui",
       level: "Jounin",
       resident: "Vila Oculta da Nuvem",
       skills: "Relâmpago Negro",
       about: "Darui é um shinobi altamente habilidoso e capaz: sendo escolhido como um dos guarda-costas do Quarto Raikage e seu braço direito, além de ser colocado como líder da Primeira Divisão das Forças Aliadas Shinobi durante a Quarta Guerra Mundial Ninja.Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 65,
       name: "Mei Terumi",
       level: "Mizukage",
       resident: "Vila Oculta da Névoa",
       skills: "Cuspir ácido, Técnica da Bomba do Dragão de Água",
       about: "Mei é uma poderosa kunoichi cujas habilidades lhe renderam o título de Quinta Mizukage. Ela é calma, observadora e perceptiva e pode perceber pequenas discrepâncias na personalidade de outra pessoa, como visto quando ela detectou a diferença no comportamento de Ao quando Fū Yamanaka habitava seu corpo.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 66,
       name: "Chojuro",
       level: "Jounin",
       resident: "Vila Oculta da Névoa",
       skills: "Hiramekarei",
       about: "Apesar de seu comportamento manso, Chōjūrō é um ninja altamente capaz, ganhando aceitação nos Sete Espadachins Ninja da Névoa, e sendo escolhido como um dos guarda-costas da Quinta Mizukage durante a Reunião dos Kage. Por fazer parte dos Sete Espadachins Ninja da Névoa, as habilidades de Chōjūrō já eram consideradas algumas das mais fortes de toda a vila, mostrando que ele tinha um grande potencial.Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 67,
       name: "Ao",
       level: "Jounin",
       resident: "Vila Oculta da Névoa",
       skills: "Projétil do Estilo Fogo, shinobi sensor",
       about: "Como um veterano dos ninjas caçadores de Kirigakure, Ao era um rastreador altamente capaz e possui amplo conhecimento do corpo humano. Ao tinha velocidade e reação bastante impressionantes, capaz de agarrar e redirecionar o kama de volta ao agressor antes que este pudesse atacá-lo por trás. Sua destreza era tal, que ele poderia sobreviver a uma luta com Shisui Uchiha, um temido shinobi que era considerado um gênio mesmo entre os Uchiha.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 68,
       name: "Gengetsu Hozuki",
       level: "Mizukage",
       resident: "Vila Oculta da Névoa",
       skills: "Técnica de Invocação, criação de miragens",
       about: "Como o Segundo Mizukage, Gengetsu era sem dúvida um shinobi imensamente poderoso, o shinobi mais forte da vila em seu tempo. Seu poder era tal que ele poderia matar o Segundo Tsuchikage – embora ao custo de sua própria vida. Mesmo quando ele informou grande parte da Quarta Divisão sobre como derrotá-lo e tentar se conter, nenhum foi capaz de superar suas técnicas, permitindo que ele derrotasse facilmente um número significativo delas.Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 69,
       name: "Kurotsuchi",
       level: "Tsuchikage ",
       resident: "Vila Oculta da Pedra",
       skills: "Abertura de Terra da Nascente de Escavação, Técnica de Congelamento de Cal, Trompete de Água",
       about: "Kurotsuchi é uma kunoichi altamente capaz, tendo sido escolhida para proteger o Terceiro Tsuchikage durante a Cúpula dos Kage, e fornecer apoio para Genbu. De sua participação na Quarta Guerra Mundial Shinobi, surgiu uma lenda de que ela não vacilou ao enfrentar cem mil Zetsus.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 70,
       name: "Hanzō",
       level: "Líder de Vila Oculta na Chuva",
       resident: "Vila Oculta na Chuva",
       skills: "Veneno, Ibuse",
       about: "Hanzō foi facilmente reconhecido como um dos ninjas mais fortes da história e um ícone para todo o mundo shinobi. Em seu auge, Hanzō sozinho derrotou e matou um esquadrão shinobi inteiro de Konoha, exceto os Sannin, a quem ele poupou por sobreviver ao ataque inicial. Ele é um dos principais personagens da história de Naruto Shippuden.",
       reference: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('characters', null, {});
  }
};
