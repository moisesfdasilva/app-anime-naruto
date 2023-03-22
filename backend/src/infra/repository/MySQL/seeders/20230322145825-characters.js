'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('characters',
      [
        {
          id: 1,
          name: 'Naruto Uzumaki',
          level: 'Genin (Naruto e Shippuden), Hokage (Boruto: Naruto Next Generations)',
          resident: 'Konoha',
          skills: 'Kage Bunshin no Jutsu, Rasengan',
          about: 'Personagem principal de Naruto Shippuden, Naruto é um órfão cujo destino foi selado no dia em que ele nasceu. Nele, foi selada a Raposa de Nove Caudas (a Kyuubii), um monstro de poder imenso que atacou a Vila da Folha há muito tempo. Por causa disso, parte da Vila o rejeita, mas ao invés de se revoltar com a situação, Naruto tem o sonho de transformar-se no ninja mais forte da vila e provar o valor dele a todos.',
          image1: 'https:\/\/static.wikia.nocookie.net\/universidade-de-magia-forte-revolucao\/images\/0\/08\/Naruto_na_Parte_2.png\/revision\/latest?cb=20160920121847&path-prefix=pt-br',
          image2: 'https:\/\/conteudo.imguol.com.br\/c\/entretenimento\/16\/2017\/06\/27\/naruto-1498593686428_v2_900x506.png',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 2,
          name: 'Sasuke Uchiha',
          level: 'Genin (Naruto e Shippuden)',
          resident: 'Konoha',
          skills: 'Chidori, Katon Gokakyu no Jutsu (Bola de Fogo)',
          about: 'Melhor amigo e rival de Naruto, Sasuke também tem um passado trágico. Último sobrevivente do clã dele, os Uchiha que até então eram os mais fortes da Vila da Folha, ele tem como objetivo vingar-se de Itachi, seu irmão mais velho e autor deste massacre. Sasuke é um gênio natural, mas tem trevas profundas rondando ele e esta sede de vingança pode ser sua perdição. Um dos personagens com maior destaque em Naruto. Depois de Naruto, ele é o segundo dos personagens mais importantes de Naruto Shippuden.',
          image1: 'https:\/\/static.wikia.nocookie.net\/naruto\/images\/e\/e7\/Sasuke_epi_319.png\/revision\/latest?cb=20130629210647&path-prefix=pt-br',
          image2: 'https:\/\/blogger.googleusercontent.com\/img\/a\/AVvXsEg6l3RD07kUSPBgmOpYmI0vbhPhNgd0MVBDg1-AOJKB-UIPWJdnEJm2MP1Jjw11RANOA4_evznAAwRuKe32pj_ai4O2ffqkWhiKemifegqkIG6aJXNLifnmuQpIE-Iw8zGbRIDezYjJjLuVii8-gzvwifB1HXy0qYPkc4_hdhfp5zha6cjCrzdaPNvFtg=w640-h334',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 3,
          name: 'Sakura Haruno',
          level: 'Genin (Naruto), Chunin (Shippuden), Jounin (Boruto: Naruto Next Generations)',
          resident: 'Konoha',
          skills: 'Ninjutsu Médico, Super Força',
          about: 'Companheira de Naruto e Sasuke no Time 7, Sakura é uma jovem cheia de energia que está mais interessada em sua paixonite por Sasuke do que tornar-se uma ninja. Apesar disso, ela é bastante dedicada e inteligente, e logo vai perceber que precisa amadurecer para sobreviver neste mundo.',
          image1: 'https:\/\/upload.wikimedia.org\/wikipedia\/pt\/0\/03\/Haruno_Sakura.jpg',
          image2: 'https:\/\/e.rpp-noticias.io\/xlarge\/2023\/01\/14\/005700_1375047.jpg',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 4,
          name: 'Kakashi Hatake',
          level: 'Jounin (Naruto), Hokage (Shippuden), Hokage Aposentado (Boruto: Naruto Next Generations)',
          resident: 'Konoha',
          skills: 'Raikiri, Doton Doryuheki (Parede de Barro), Kamui',
          about: 'Professor de Naruto, Sasuke e Sakura e líder do Time 7, Kakashi é um dos ninjas mais fortes e talentosos da Vila da Folha. Apesar de parecer distraído e estar sempre lendo um livro, ele é extremamente talentoso e tem uma grande lição sobre o trabalho em equipe para ensinar aos alunos dele.',
          image1: 'https:\/\/img.ibxk.com.br\/2021\/11\/18\/18083259701025.jpg',
          image2: 'https:\/\/i1.sndcdn.com\/artworks-000333094551-wb8q2v-t500x500.jpg',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 5,
          name: 'Iruka',
          level: 'Chunin (Naruto, Shippuden e Boruto: Naruto Next Generations)',
          resident: 'Konoha',
          skills: '?',
          about: 'Professor de Naruto e seus amigos durante a academia ninja (uma espécie de pré-escola ninja). Iruka foi o primeiro a acreditar verdadeiramente em Naruto e isso foi fundamental para o crescimento do nosso ninja favorito.',
          image1: 'https:\/\/static.wikia.nocookie.net\/dublagem\/images\/b\/b8\/Iruka_Umino.png\/revision\/latest?cb=20210629193045&path-prefix=pt-br',
          image2: 'https:\/\/i.pinimg.com\/originals\/4a\/76\/64\/4a7664205da812656225ef01cfbf1aad.jpg',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 6,
          name: 'Hiruzen (Terceiro Hokage)',
          level: 'Hokage (Naruto)',
          resident: 'Konoha',
          skills: 'Selamento do Shinigami, Invocação do Rei Macaco, Invocação Fuma Shuriken',
          about: 'O Terceiro Hokage é o atual líder da Vila da Folha. Apesar de estar sempre andando por aí distraído ou consultando sua bola de cristal, ele é um ninja extremamente forte que cuida dos principais detalhes da vila onde Naruto mora. Conhecido como “o professor” ele é profundamente respeitado pelos outros ninjas da vila. Apesar de estar aposentado há alguns anos, ele voltou a assumir o posto de líder da Vila Ninja após a morte do Quarto Hokage, e ainda pretende permanecer no posto por mais 4 ou 5 anos.',
          image1: 'https:\/\/criticalhits.com.br\/wp-content\/uploads\/2019\/10\/Hiruzen-Sarutobi-.jpg',
          image2: 'https:\/\/static.wikia.nocookie.net\/liberproeliis\/images\/d\/df\/Hiruzen_%28Render%29.png\/revision\/latest?cb=20180921141106&path-prefix=pt-br',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 7,
          name: 'Konohamaru Sarutobi',
          level: 'Genin (Naruto e Shippuden), Jounin (Boruto: Naruto Next Generations)',
          resident: 'Konoha',
          skills: 'Rasengan, Kage Bunshin no Jutsu, Projétil de Chama do Dragão de Fogo',
          about: 'Neto do Terceiro Hokage e rival\/aluno de Naruto, Konohamaru é um jovem talentoso que, assim como Naruto, quer tornar-se Hokage, mas só após Naruto conquistar o sonho dele.',
          image1: 'https:\/\/pm1.narvii.com\/6456\/7f5ddafc0f24d643c9d13504b55ab6b307372db2_hq.jpg',
          image2: 'https:\/\/static.wikia.nocookie.net\/dublagem\/images\/3\/37\/Konohamaru_Sarutobi.png\/revision\/latest?cb=20210629193246&path-prefix=pt-br',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 8,
          name: 'Shikamaru Nara',
          level: 'Genin e Chunin (Naruto), Jounin (Shippuden e Boruto: Naruto Next Generations)',
          resident: 'Konoha',
          skills: 'Técnica do Aprisionamento das Sombras',
          about: 'Um dos melhores amigos de Naruto e um dos personagens mais inteligentes da história. Konohamaru destaca-se por usar sempre o seu intelecto superior nos combates e ajustar-se às situações que as batalhas colocam contra ele.',
          image1: 'https:\/\/narutokonoha.com\/wp-content\/uploads\/2021\/04\/10-razoes-para-Shikamaru-ser-um-Hokage.jpg',
          image2: 'https:\/\/i0.wp.com\/images1.wikia.nocookie.net\/__cb20120629173753\/narutolendas\/pt-br\/images\/thumb\/1\/1f\/Naruto_shikamaru0025.jpg\/340px-Naruto_shikamaru0025.jpg',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 9,
          name: 'Hinata Hyuga',
          level: 'Genin (Naruto), Chunin (Shippuden e Boruto: Naruto Next Generations)',
          resident: 'Konoha',
          skills: 'Técnica do Punho Gentil',
          about: 'Detentora do Byakugan, Hinata é membro de um dos clãs mais prestigiosos de Konoha. Apesar disso, ela é bastante tímida e não leva muito jeito para o combate inicialmente. Por causa destes problemas, ela foi deserdada pelo pai como sucessora do clã dela. Além disso, ela também tem uma paixão oculta por Naruto e sempre fica nervosa quando ele está por perto.',
          image1: 'https:\/\/staticg.sportskeeda.com\/editor\/2022\/07\/cf75a-16584698259568.png',
          image2: 'https:\/\/sm.ign.com\/ign_br\/screenshot\/default\/quiz-hinata-hyuga-naruto-shippuden_ypu3.jpg',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        },
        {
          id: 10,
          name: 'Neji Hyuga',
          level: 'Genin (Naruto), Jounin (Shippuden)',
          resident: 'Konoha',
          skills: 'Técnica do Punho Gentil',
          about: 'Primo de Hinata e membro da família secundária dos Hyuga, Neji é um personagem que se ressente dessa dinâmica do clã em que ele é membro. Apesar disto, ele é extremamente talentoso e conseguiu inclusive aprender técnicas secretas da família principal apenas olhando para elas.',
          image1: 'http:\/\/pm1.narvii.com\/6763\/02c4bf5c301f4228afd24760460deefc7be34733v2_00.jpg',
          image2: 'https:\/\/www.fatosdesconhecidos.com.br\/wp-content\/uploads\/2017\/12\/Neji_Part_2.png',
          page: 'https:\/\/naruto.fandom.com\/pt-br\/wiki\/Wiki_Naruto'
        }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('characters', null, {});
  }
};
