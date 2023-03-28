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
       image1: "https://img1.ak.crunchyroll.com/i/spire3/0789665e73cd684dc3eb8a002a8305c11633370981_large.jpg",
       image2: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_900x506.png",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 2,
       name: "Sasuke Uchiha",
       level: "Genin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Chidori, Katon Gokakyu no Jutsu (Bola de Fogo)",
       about: "Melhor amigo e rival de Naruto, Sasuke também tem um passado trágico. Último sobrevivente do clã dele, os Uchiha que até então eram os mais fortes da Vila da Folha, ele tem como objetivo vingar-se de Itachi, seu irmão mais velho e autor deste massacre. Sasuke é um gênio natural, mas tem trevas profundas rondando ele e esta sede de vingança pode ser sua perdição. Um dos personagens com maior destaque em Naruto. Depois de Naruto, ele é o segundo dos personagens mais importantes de Naruto Shippuden.",
       image1: "https://i0.wp.com/japaoreal.com/wp-content/uploads/2021/07/sasuke-naruto-japao-personagem_opt.jpg?resize=800%2C593&ssl=1",
       image2: "https://blogger.googleusercontent.com/img/a/AVvXsEg6l3RD07kUSPBgmOpYmI0vbhPhNgd0MVBDg1-AOJKB-UIPWJdnEJm2MP1Jjw11RANOA4_evznAAwRuKe32pj_ai4O2ffqkWhiKemifegqkIG6aJXNLifnmuQpIE-Iw8zGbRIDezYjJjLuVii8-gzvwifB1HXy0qYPkc4_hdhfp5zha6cjCrzdaPNvFtg=w640-h334",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 3,
       name: "Sakura Haruno",
       level: "Genin (Naruto), Chunin (Shippuden), Jounin (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Ninjutsu Médico, Super Força",
       about: "Companheira de Naruto e Sasuke no Time 7, Sakura é uma jovem cheia de energia que está mais interessada em sua paixonite por Sasuke do que tornar-se uma ninja. Apesar disso, ela é bastante dedicada e inteligente, e logo vai perceber que precisa amadurecer para sobreviver neste mundo.",
       image1: "https://upload.wikimedia.org/wikipedia/pt/0/03/Haruno_Sakura.jpg",
       image2: "https://e.rpp-noticias.io/xlarge/2023/01/14/005700_1375047.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 4,
       name: "Kakashi Hatake",
       level: "Jounin (Naruto), Hokage (Shippuden), Hokage Aposentado (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Raikiri, Doton Doryuheki (Parede de Barro), Kamui",
       about: "Professor de Naruto, Sasuke e Sakura e líder do Time 7, Kakashi é um dos ninjas mais fortes e talentosos da Vila da Folha. Apesar de parecer distraído e estar sempre lendo um livro, ele é extremamente talentoso e tem uma grande lição sobre o trabalho em equipe para ensinar aos alunos dele.",
       image1: "https://img.ibxk.com.br/2021/11/18/18083259701025.jpg",
       image2: "https://i1.sndcdn.com/artworks-000333094551-wb8q2v-t500x500.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 5,
       name: "Iruka Umino",
       level: "Chunin (Naruto, Shippuden e Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnicas básicas ninja",
       about: "Professor de Naruto e seus amigos durante a academia ninja (uma espécie de pré-escola ninja). Iruka foi o primeiro a acreditar verdadeiramente em Naruto e isso foi fundamental para o crescimento do nosso ninja favorito.",
       image1: "https://criticalhits.com.br/wp-content/uploads/2019/04/Naruto_Shippuuden_176-341.jpg",
       image2: "https://i.pinimg.com/originals/4a/76/64/4a7664205da812656225ef01cfbf1aad.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 6,
       name: "Hiruzen (Terceiro Hokage)",
       level: "Hokage (Naruto)",
       resident: "Konoha",
       skills: "Selamento do Shinigami, Invocação do Rei Macaco, Invocação Fuma Shuriken",
       about: "O Terceiro Hokage é o atual líder da Vila da Folha. Apesar de estar sempre andando por aí distraído ou consultando sua bola de cristal, ele é um ninja extremamente forte que cuida dos principais detalhes da vila onde Naruto mora. Conhecido como “o professor” ele é profundamente respeitado pelos outros ninjas da vila. Apesar de estar aposentado há alguns anos, ele voltou a assumir o posto de líder da Vila Ninja após a morte do Quarto Hokage, e ainda pretende permanecer no posto por mais 4 ou 5 anos.",
       image1: "https://criticalhits.com.br/wp-content/uploads/2019/10/Hiruzen-Sarutobi-.jpg",
       image2: "https://static.wikia.nocookie.net/liberproeliis/images/d/df/Hiruzen_%28Render%29.png/revision/latest?cb=20180921141106&path-prefix=pt-br",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 7,
       name: "Konohamaru Sarutobi",
       level: "Genin (Naruto e Shippuden), Jounin (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Rasengan, Kage Bunshin no Jutsu, Projétil de Chama do Dragão de Fogo",
       about: "Neto do Terceiro Hokage e rival/aluno de Naruto, Konohamaru é um jovem talentoso que, assim como Naruto, quer tornar-se Hokage, mas só após Naruto conquistar o sonho dele.",
       image1: "https://pm1.narvii.com/6456/7f5ddafc0f24d643c9d13504b55ab6b307372db2_hq.jpg",
       image2: "https://static.wikia.nocookie.net/dublagem/images/3/37/Konohamaru_Sarutobi.png/revision/latest?cb=20210629193246&path-prefix=pt-br",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 8,
       name: "Shikamaru Nara",
       level: "Genin e Chunin (Naruto), Jounin (Shippuden e Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnica do Aprisionamento das Sombras",
       about: "Um dos melhores amigos de Naruto e um dos personagens mais inteligentes da história. Konohamaru destaca-se por usar sempre o seu intelecto superior nos combates e ajustar-se às situações que as batalhas colocam contra ele.",
       image1: "https://narutokonoha.com/wp-content/uploads/2021/04/10-razoes-para-Shikamaru-ser-um-Hokage.jpg",
       image2: "https://i0.wp.com/images1.wikia.nocookie.net/__cb20120629173753/narutolendas/pt-br/images/thumb/1/1f/Naruto_shikamaru0025.jpg/340px-Naruto_shikamaru0025.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 9,
       name: "Hinata Hyuga",
       level: "Genin (Naruto), Chunin (Shippuden e Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnica do Punho Gentil",
       about: "Detentora do Byakugan, Hinata é membro de um dos clãs mais prestigiosos de Konoha. Apesar disso, ela é bastante tímida e não leva muito jeito para o combate inicialmente. Por causa destes problemas, ela foi deserdada pelo pai como sucessora do clã dela. Além disso, ela também tem uma paixão oculta por Naruto e sempre fica nervosa quando ele está por perto.",
       image1: "https://staticg.sportskeeda.com/editor/2022/07/cf75a-16584698259568.png",
       image2: "https://staticg.sportskeeda.com/editor/2022/07/cf75a-16584698259568.png",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 10,
       name: "Neji Hyuga",
       level: "Genin (Naruto), Jounin (Shippuden)",
       resident: "Konoha",
       skills: "Técnica do Punho Gentil",
       about: "Primo de Hinata e membro da família secundária dos Hyuga, Neji é um personagem que se ressente dessa dinâmica do clã em que ele é membro. Apesar disto, ele é extremamente talentoso e conseguiu inclusive aprender técnicas secretas da família principal apenas olhando para elas.",
       image1: "http://pm1.narvii.com/6763/02c4bf5c301f4228afd24760460deefc7be34733v2_00.jpg",
       image2: "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/12/Neji_Part_2.png",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 11,
       name: "Ino Yamanaka",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Técnica de Transferência da Mente, Ninjutsu Médico",
       about: "Ino é a grande rival de Sakura, e uma das personagens femininas mais fortes de Naruto.",
       image1: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Ino-At-The-Yamanaka-Flower-Shop-In-Naruto-Anime.jpg?q=50&fit=crop&w=1500&dpr=1.5",
       image2: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Ino-At-The-Yamanaka-Flower-Shop-In-Naruto-Anime.jpg?q=50&fit=crop&w=1500&dpr=1.5",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 12,
       name: "Chouji Akimichi",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Técnica da Expansão Corporal",
       about: "Chouji é integrante do time de Shikamaru e de Ino. Glutão, ele adora comer churrasco com seus colegas após as missões, e odeia que falem do peso dele. Um dos personagens de Naruto que os fãs não dão muita coisa por ele a princípio, mas que conta com um dos momentos mais incríveis do anime ainda na Parte 1.",
       image1: "http://3.bp.blogspot.com/_63LDzdfOy0A/Sw7H3iFc_AI/AAAAAAAAAB4/ERPE43khPq8/s1600/akimichi_chouji.jpg",
       image2: "http://3.bp.blogspot.com/_63LDzdfOy0A/Sw7H3iFc_AI/AAAAAAAAAB4/ERPE43khPq8/s1600/akimichi_chouji.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 13,
       name: "Rock Lee",
       level: "Genin (Naruto), Chunin (Shippuden), Jounin (Boruto: Naruto Next Generations)",
       resident: "Konoha",
       skills: "Técnica dos Oito Portões",
       about: "Um dos personagens mais interessantes de Naruto, Rock Lee não consegue usar nem Ninjutsu nem Genjutsu. Por causa disso, ele concentrou-se em Taijutsu e possui técnicas de luta muito mais apuradas do que os seus colegas. Um verdadeiro gênio da força de vontade.",
       image1: "https://pm1.narvii.com/6344/53a6aa043125f27b56ae8eea2e0f6a4fe3dd4a5f_hq.jpg",
       image2: "https://pm1.narvii.com/6344/53a6aa043125f27b56ae8eea2e0f6a4fe3dd4a5f_hq.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 14,
       name: "Tenten",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Ferramentas Ninja",
       about: "Uma ninja especializada em usar ferramentas como Kunai, Shurikens e assim por diante.",
       image1: "https://criticalhits.com.br/wp-content/uploads/2021/12/tenten-768x502.jpg",
       image2: "https://criticalhits.com.br/wp-content/uploads/2021/12/tenten-768x502.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 15,
       name: "Kiba Inuzuka",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Presa sobre Presa",
       about: "Kiba é colega de Hinata no time com ela e Shino, e um dos ninjas rastreadores mais competentes de Konoha. Apesar de não ser muito forte, ele é parte importante da Vila da Folha quando o objetivo é ir atrás de algum ninja fugitivo, por exemplo. Ele forma uma parceria sólida com seu cachorro ninja: Akamaru.",
       image1: "https://pm1.narvii.com/6346/c9324af18c8a3663fa02558ece41f448878daa93_hq.jpg",
       image2: "https://pm1.narvii.com/6346/c9324af18c8a3663fa02558ece41f448878daa93_hq.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 16,
       name: "Shino Aburame",
       level: "Genin (Naruto), Chunin (Shippuden)",
       resident: "Konoha",
       skills: "Insetos",
       about: "Shino é um dos mais discretos membros dos 11 de Konoha. Ele pertence ao clã Aburame, especializado em usar insetos para enfrentar seus adversários.",
       image1: "https://images4.fanpop.com/image/photos/14800000/Shino-shino-aburame-14802018-500-375.jpg",
       image2: "https://images4.fanpop.com/image/photos/14800000/Shino-shino-aburame-14802018-500-375.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 17,
       name: "Sai Yamanaka",
       level: "ANBU (Shippuden)",
       resident: "Konoha",
       skills: "Técnica da Névoa de Tinta",
       about: "Sai é o décimo segundo de Konoha, e junta-se ao Time 7 de Naruto para a missão de Reconhecimento na Ponte Tenchi, segundo arco de Naruto Shippuden. Sai fazia parte da ANBU e está no Time 7 a mando de Danzou para ficar de olho em Naruto e também para tentar estabelecer contato com Orochimaru. Ele usa um tipo de Jutsu onde consegue transformar desenhos em seres de energia que podem transportá-lo ou atacar os adversários. Tido pelos fãs de Naruto Shippuden como um “Sasuke piorado”, este é um dos personagens com um dos melhores crescimentos dentro do anime.",
       image1: "https://m.media-amazon.com/images/M/MV5BZWJlOTFlYTctMzQ0OS00MjE3LWEwYmYtMjE5MWRlNDZlOTlmXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_.jpg",
       image2: "https://m.media-amazon.com/images/M/MV5BZWJlOTFlYTctMzQ0OS00MjE3LWEwYmYtMjE5MWRlNDZlOTlmXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_.jpg",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      },
      {
       id: 18,
       name: "Jiraiya",
       level: "Sannin (Naruto e Shippuden)",
       resident: "Konoha",
       skills: "Rasengan, Jutsu de Invocação, Baforada de Fogo",
       about: "Um dos três ninjas sábios de Konoha, Jiraiya torna-se professor de Naruto por acaso e ensina a ele algumas das suas principais técnicas, além de lições de vida que ele traz até hoje. O Sannin dos sapos também é extremamente forte, tendo participado de algumas das batalhas mais épicas do anime. Certamente um dos personagens mais queridos de Naruto Shippuden.",
       image1: "https://i0.wp.com/heroisx.com/wp-content/uploads/2019/10/Jiraiya-sannin-lend%C3%A1rio-ero-senin-Naruto.jpg?resize=640%2C360&ssl=1",
       image2: "https://i0.wp.com/heroisx.com/wp-content/uploads/2019/10/Jiraiya-sannin-lend%C3%A1rio-ero-senin-Naruto.jpg?resize=640%2C360&ssl=1",
       page: "https://naruto.fandom.com/pt-br/wiki/Wiki_Naruto"
      }
     ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('characters', null, {});
  }
};
