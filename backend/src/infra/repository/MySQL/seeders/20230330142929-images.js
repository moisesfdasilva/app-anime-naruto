'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('images',
    [
      {
       id: 1,
       char_id: 1,
       image: "https://img1.ak.crunchyroll.com/i/spire3/0789665e73cd684dc3eb8a002a8305c11633370981_large.jpg"
      },
      {
       id: 2,
       char_id: 1,
       image: "https://cdn.folhabv.com.br/images/noti-text-1664906351.webp"
      },
      {
       id: 3,
       char_id: 1,
       image: "https://www.giantbomb.com/a/uploads/original/0/5892/236171-naruto_naruto0890_1_.jpg"
      },
      {
       id: 4,
       char_id: 1,
       image: "http://pm1.narvii.com/7401/952a69440096ed2c449df65c356e15eaef4e8830r1-720-814v2_00.jpg"
      },
      {
       id: 5,
       char_id: 1,
       image: "https://i0.wp.com/narutokonoha.com/wp-content/uploads/2020/10/Quando-Naruto-aprendeu-o-modo-sabio-montanha-dos-sapos.jpg"
      },
      {
       id: 6,
       char_id: 2,
       image: "https://i0.wp.com/japaoreal.com/wp-content/uploads/2021/07/sasuke-naruto-japao-personagem_opt.jpg"
      },
      {
       id: 7,
       char_id: 2,
       image: "https://www.giantbomb.com/a/uploads/square_medium/1/10612/263539-sasuke.jpg"
      },
      {
       id: 8,
       char_id: 2,
       image: "http://3.bp.blogspot.com/_ZUUmt8s9Ivk/SUJLnJq-VXI/AAAAAAAAAF0/y6XSYQlh7Pw/s320/sasuke.bmp"
      },
      {
       id: 9,
       char_id: 2,
       image: "https://www.giantbomb.com/a/uploads/square_medium/3/33873/1705429-sasuke_uchiha.jpg"
      },
      {
       id: 10,
       char_id: 3,
       image: "https://upload.wikimedia.org/wikipedia/pt/0/03/Haruno_Sakura.jpg"
      },
      {
       id: 11,
       char_id: 3,
       image: "https://www.giantbomb.com/a/uploads/square_medium/0/5892/379802-naruto_sakura0587.jpg"
      },
      {
       id: 12,
       char_id: 3,
       image: "https://pm1.narvii.com/6529/f1acc55d42fb57cb16340f262f602b3347f5a4ea_hq.jpg"
      },
      {
       id: 13,
       char_id: 3,
       image: "https://criticalhits.com.br/wp-content/uploads/2020/01/sakura-shippuden-chunin.jpg"
      },
      {
       id: 14,
       char_id: 4,
       image: "https://img.ibxk.com.br/2021/11/18/18083259701025.jpg"
      },
      {
       id: 15,
       char_id: 4,
       image: "http://4.bp.blogspot.com/_a8qwjv-L210/TTGwADwUkZI/AAAAAAAAARM/ka5Z3SQT07s/s1600/Hatake_Kakashi_by_saishuu_hinoiri.png"
      },
      {
       id: 16,
       char_id: 4,
       image: "https://64.media.tumblr.com/1dd3afa97e9bd813e90148c7e642d549/tumblr_ont38k9K5s1w087c2o6_640.jpg"
      },
      {
       id: 17,
       char_id: 5,
       image: "https://criticalhits.com.br/wp-content/uploads/2019/04/Naruto_Shippuuden_176-341.jpg"
      },
      {
       id: 18,
       char_id: 5,
       image: "https://www.giantbomb.com/a/uploads/original/0/3201/604497-iruka.jpg"
      },
      {
       id: 19,
       char_id: 6,
       image: "https://criticalhits.com.br/wp-content/uploads/2019/10/Hiruzen-Sarutobi-.jpg"
      },
      {
       id: 20,
       char_id: 6,
       image: "https://qph.fs.quoracdn.net/main-qimg-56a99a43e6e593a1dc75b1b63f58b413-c"
      },
      {
       id: 21,
       char_id: 7,
       image: "https://pm1.narvii.com/6456/7f5ddafc0f24d643c9d13504b55ab6b307372db2_hq.jpg"
      },
      {
       id: 22,
       char_id: 7,
       image: "https://pm1.narvii.com/6456/bd3294c9fae0d03ef86c895980daf21e2b648ccb_hq.jpg"
      },
      {
       id: 23,
       char_id: 8,
       image: "https://narutokonoha.com/wp-content/uploads/2021/04/10-razoes-para-Shikamaru-ser-um-Hokage.jpg"
      },
      {
       id: 24,
       char_id: 8,
       image: "https://www.giantbomb.com/a/uploads/square_medium/0/5892/378895-naruto_shikamaru0038_1_.jpg"
      },
      {
       id: 25,
       char_id: 8,
       image: "https://img.quizur.com/f/img63c954ece7db90.50792156.png"
      },
      {
       id: 26,
       char_id: 9,
       image: "https://staticg.sportskeeda.com/editor/2022/07/cf75a-16584698259568.png"
      },
      {
       id: 27,
       char_id: 9,
       image: "https://www.giantbomb.com/a/uploads/square_medium/0/1122/489426-1113933857.jpg"
      },
      {
       id: 28,
       char_id: 9,
       image: "https://www.giantbomb.com/a/uploads/square_medium/0/1122/489429-hinata_hyuga_small.jpg"
      },
      {
       id: 29,
       char_id: 10,
       image: "http://pm1.narvii.com/6763/02c4bf5c301f4228afd24760460deefc7be34733v2_00.jpg"
      },
      {
       id: 30,
       char_id: 10,
       image: "https://www.giantbomb.com/a/uploads/scale_medium/3/33873/1701001-neji.jpg"
      },
      {
       id: 31,
       char_id: 11,
       image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Ino-At-The-Yamanaka-Flower-Shop-In-Naruto-Anime.jpg"
      },
      {
       id: 32,
       char_id: 11,
       image: "https://cdn.anisearch.de/images/character/cover/0/253_300.webp"
      },
      {
       id: 33,
       char_id: 12,
       image: "http://3.bp.blogspot.com/_63LDzdfOy0A/Sw7H3iFc_AI/AAAAAAAAAB4/ERPE43khPq8/s1600/akimichi_chouji.jpg"
      },
      {
       id: 34,
       char_id: 12,
       image: "https://cdn.anisearch.de/images/character/screen/0/251/full/106805.webp"
      },
      {
       id: 35,
       char_id: 12,
       image: "https://www.giantbomb.com/a/uploads/square_medium/0/521/1111356-choji_akimichi_6.gif"
      },
      {
       id: 36,
       char_id: 13,
       image: "https://pm1.narvii.com/6344/53a6aa043125f27b56ae8eea2e0f6a4fe3dd4a5f_hq.jpg"
      },
      {
       id: 37,
       char_id: 13,
       image: "https://www.giantbomb.com/a/uploads/square_medium/0/5892/371737-naruto_lee0210_1_.jpg"
      },
      {
       id: 38,
       char_id: 13,
       image: "https://cdn.anisearch.de/images/character/screen/0/73/full/691.webp"
      },
      {
       id: 39,
       char_id: 14,
       image: "https://criticalhits.com.br/wp-content/uploads/2021/12/tenten-768x502.jpg"
      },
      {
       id: 40,
       char_id: 14,
       image: "https://cdn.anisearch.de/images/character/screen/0/169/full/795.webp"
      },
      {
       id: 41,
       char_id: 14,
       image: "https://cdn.anisearch.de/images/character/screen/0/169/full/4551.webp"
      },
      {
       id: 42,
       char_id: 15,
       image: "https://pm1.narvii.com/6346/c9324af18c8a3663fa02558ece41f448878daa93_hq.jpg"
      },
      {
       id: 43,
       char_id: 15,
       image: "https://www.giantbomb.com/a/uploads/square_medium/0/5892/378597-naruto_kiba0083_1_.jpg"
      },
      {
       id: 44,
       char_id: 15,
       image: "https://cdn.anisearch.de/images/character/screen/0/238/full/106820.webp"
      },
      {
       id: 45,
       char_id: 15,
       image: "https://cdn.anisearch.de/images/character/screen/0/238/full/1808.webp"
      },
      {
       id: 46,
       char_id: 16,
       image: "https://images4.fanpop.com/image/photos/14800000/Shino-shino-aburame-14802018-500-375.jpg"
      },
      {
       id: 47,
       char_id: 16,
       image: "https://cdn.anisearch.de/images/character/screen/0/110/full/1804.webp"
      },
      {
       id: 48,
       char_id: 17,
       image: "https://m.media-amazon.com/images/M/MV5BZWJlOTFlYTctMzQ0OS00MjE3LWEwYmYtMjE5MWRlNDZlOTlmXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_.jpg"
      },
      {
       id: 49,
       char_id: 17,
       image: "https://cdn.anisearch.de/images/character/screen/0/512/full/1810.webp"
      },
      {
       id: 50,
       char_id: 18,
       image: "https://i0.wp.com/heroisx.com/wp-content/uploads/2019/10/Jiraiya-sannin-lend%C3%A1rio-ero-senin-Naruto.jpg?resize=640%2C360&amp;ssl=1"
      },
      {
       id: 51,
       char_id: 18,
       image: "https://www.giantbomb.com/a/uploads/square_medium/9/95613/2225260-jiraiya_legendary_three_ninja_13312138_640_480.jpg"
      },
      {
       id: 52,
       char_id: 18,
       image: "https://qph.cf2.quoracdn.net/main-qimg-0d4114956535c4a0939ce0ce86034b13-pjlq"
      },
      {
       id: 53,
       char_id: 19,
       image: "https://www.giantbomb.com/a/uploads/scale_small/0/5756/291689-orochimaru.jpg"
      },
      {
       id: 54,
       char_id: 19,
       image: "https://cdn.anisearch.de/images/character/screen/0/128/full/2540.webp"
      },
      {
       id: 55,
       char_id: 19,
       image: "https://i.pinimg.com/originals/dc/3e/2f/dc3e2f469dfe47dc0f5385bb96d5c748.jpg"
      },
      {
       id: 56,
       char_id: 20,
       image: "https://www.giantbomb.com/a/uploads/scale_small/0/1122/557289-ygt.jpg"
      },
      {
       id: 57,
       char_id: 20,
       image: "https://i0.wp.com/newsgeek.com.br/wp-content/uploads/2020/11/Tsunade-News-Geek.jpg"
      },
      {
       id: 58,
       char_id: 20,
       image: "https://cdn.anisearch.de/images/character/screen/0/83/full/4553.webp"
      },
      {
       id: 59,
       char_id: 21,
       image: "https://www.giantbomb.com/a/uploads/original/0/864/631637-kabuto_3.jpg"
      },
      {
       id: 60,
       char_id: 21,
       image: "https://i.pinimg.com/originals/10/b9/9a/10b99a69bded24c70649a5f9206bee21.jpg"
      },
      {
       id: 61,
       char_id: 21,
       image: "https://cdn.idntimes.com/content-images/duniaku/post/20220828/kabuto-028a800133503704ec191ca8f57d9de9.jpg"
      },
      {
       id: 62,
       char_id: 22,
       image: "https://cdn.idntimes.com/content-images/duniaku/post/20201018/asuma-sarutobi-1-722ad6691146822b34bdea2d66ae4f92.png"
      },
      {
       id: 63,
       char_id: 22,
       image: "http://4.bp.blogspot.com/-xJ50gua7WLw/T-D5qlk7pjI/AAAAAAAABt0/LMqjThDH9kY/s1600/Asuma+Sarutobi+(27).jpg"
      },
      {
       id: 64,
       char_id: 23,
       image: "https://nerdhits.com.br/wp-content/uploads/2022/07/kurenai-naruto-shippuden-768x433.jpg"
      },
      {
       id: 65,
       char_id: 23,
       image: "https://cdn.anisearch.de/images/character/screen/0/252/full/107105.webp"
      },
      {
       id: 66,
       char_id: 23,
       image: "https://cdn.anisearch.de/images/character/screen/0/252/full/2118.webp"
      },
      {
       id: 67,
       char_id: 24,
       image: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/08/legiao_5stiZngEmUe8.png.webp"
      },
      {
       id: 68,
       char_id: 24,
       image: "https://www.einerd.com.br/wp-content/uploads/2020/07/might-guy-naruto-e1594822212395-890x464.jpg"
      },
      {
       id: 69,
       char_id: 25,
       image: "https://i.pinimg.com/736x/a6/41/cd/a641cd8dd98311b893fb26a024f73c61.jpg"
      },
      {
       id: 70,
       char_id: 25,
       image: "https://cdn.anisearch.de/images/character/screen/0/109/full/107110.webp"
      },
      {
       id: 71,
       char_id: 25,
       image: "https://64.media.tumblr.com/49149eaad9060da9d7e91adcb1433fe0/tumblr_o2ttr0l2nn1s3h7g4o1_1280.png"
      },
      {
       id: 72,
       char_id: 26,
       image: "https://www.giantbomb.com/a/uploads/original/0/2218/347645-kankurou.jpg"
      },
      {
       id: 73,
       char_id: 26,
       image: "https://images2.fanpop.com/image/photos/11500000/Kankuro-naruto-11510456-640-480.jpg"
      },
      {
       id: 74,
       char_id: 27,
       image: "https://www.giantbomb.com/a/uploads/original/0/1051/829284-temari.jpg"
      },
      {
       id: 75,
       char_id: 27,
       image: "https://static.wikia.nocookie.net/naruto/images/b/bb/Temari_newshot.png"
      },
      {
       id: 76,
       char_id: 27,
       image: "https://static.wikia.nocookie.net/naruto/images/b/b2/Temari_Part_II.png"
      },
      {
       id: 77,
       char_id: 28,
       image: "https://static.wikia.nocookie.net/naruto/images/7/7b/Kurama2.png"
      },
      {
       id: 78,
       char_id: 28,
       image: "https://nerdhits.com.br/wp-content/uploads/2021/09/kurama-boruto-768x402.jpg"
      },
      {
       id: 79,
       char_id: 29,
       image: "http://1.bp.blogspot.com/-pWpHGeAeYso/TbEYu8_xVdI/AAAAAAAAACs/CfAPpuDTaQ0/s320/itachi.jpg"
      },
      {
       id: 80,
       char_id: 29,
       image: "https://i.pinimg.com/originals/ad/86/a0/ad86a0b093120020b6b0e44507048b34.jpg"
      },
      {
       id: 81,
       char_id: 29,
       image: "https://popularanime.com.br/wp-content/uploads/2022/09/itachi-uchiha-768x402.jpg"
      },
      {
       id: 82,
       char_id: 30,
       image: "https://criticalhits.com.br/wp-content/uploads/2018/05/minato-namikaze-01-740x416.jpg"
      },
      {
       id: 83,
       char_id: 30,
       image: "https://cdn.anisearch.de/images/character/screen/0/91/full/20759.webp"
      },
      {
       id: 84,
       char_id: 30,
       image: "https://popularanime.com.br/wp-content/uploads/2022/09/minato-768x402.jpg"
      },
      {
       id: 85,
       char_id: 31,
       image: "https://www.giantbomb.com/a/uploads/original/16/164924/2608007-6417847228-Kushi.png"
      },
      {
       id: 86,
       char_id: 31,
       image: "https://muramasa.com.br/wp-content/uploads/2022/06/Kushina_Parte_I-555x555.webp"
      },
      {
       id: 87,
       char_id: 31,
       image: "https://muramasa.com.br/wp-content/uploads/2022/06/Kushina-hugs-naruto.webp"
      },
      {
       id: 88,
       char_id: 32,
       image: "https://img.quizur.com/f/img61a0359d558861.61470670.jpg"
      },
      {
       id: 89,
       char_id: 32,
       image: "https://listasnerds.com.br/wp-content/uploads/2022/05/Hashirama-Senju-3.png"
      },
      {
       id: 90,
       char_id: 32,
       image: "https://listasnerds.com.br/wp-content/uploads/2022/05/Hashirama-Senju-2.png"
      },
      {
       id: 91,
       char_id: 32,
       image: "https://listasnerds.com.br/wp-content/uploads/2022/05/Hashirama-Senju-4.png"
      },
      {
       id: 92,
       char_id: 32,
       image: "https://listasnerds.com.br/wp-content/uploads/2022/05/Hashirama-Senju-9.png"
      },
      {
       id: 93,
       char_id: 32,
       image: "https://listasnerds.com.br/wp-content/uploads/2022/05/Hashirama-Senju-1.png"
      },
      {
       id: 94,
       char_id: 33,
       image: "http://1.bp.blogspot.com/_gzjFQTh9wXk/SbCBLud075I/AAAAAAAAAOE/TlKR2XHz_PY/s320/naruto_nidaime0001.jpg"
      },
      {
       id: 95,
       char_id: 33,
       image: "https://uploads.spiritfanfiction.com/historias/capitulos/202105/o-sacrificio-do-odio-tobirama-senju-22403408-310520212117.gif"
      },
      {
       id: 96,
       char_id: 33,
       image: "https://64.media.tumblr.com/0b3c77fbd709b42de673dfdbb30ee17d/01046ca5e53f16f7-29/s540x810/ce12ce2156d1c9dcb7aa4c618587cb656c8e0361.jpg"
      },
      {
       id: 97,
       char_id: 34,
       image: "https://comicvine.gamespot.com/a/uploads/scale_medium/0/6342/621948-naruto_anko0039.jpg"
      },
      {
       id: 98,
       char_id: 34,
       image: "https://nerdhits.com.br/wp-content/uploads/2022/10/anko-naruto-768x402.jpg"
      },
      {
       id: 99,
       char_id: 34,
       image: "https://nerdhits.com.br/wp-content/uploads/2022/07/anko-naruto-768x402.jpg"
      },
      {
       id: 100,
       char_id: 35,
       image: "https://de.narutopedia.eu/images/thumb/4/4d/Shizune.png/270px-Shizune.png"
      },
      {
       id: 101,
       char_id: 35,
       image: "https://i.pinimg.com/originals/73/7c/03/737c0376cace8eb002633392d98cd9d6.jpg"
      },
      {
       id: 102,
       char_id: 35,
       image: "https://i.pinimg.com/originals/cc/e6/e3/cce6e3e1d401bf7d9d06f305ad5659c4.jpg"
      },
      {
       id: 103,
       char_id: 36,
       image: "https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2020/08/fakta-yamato-640x360.jpg"
      },
      {
       id: 104,
       char_id: 36,
       image: "https://imgix.ranker.com/user_node_img/50120/1002391690/original/1002391690-photo-u1"
      },
      {
       id: 105,
       char_id: 36,
       image: "https://imgix.ranker.com/user_node_img/50120/1002391681/original/1002391681-photo-u1"
      },
      {
       id: 106,
       char_id: 37,
       image: "https://64.media.tumblr.com/311ec498d18b93238b790e356a7306e9/tumblr_pg8wbtoekU1sx8ybdo4_400.png"
      },
      {
       id: 107,
       char_id: 37,
       image: "https://i.pinimg.com/736x/00/4d/20/004d20061eb2cc8e63a943f9eb0c872a.jpg"
      },
      {
       id: 108,
       char_id: 38,
       image: "https://www.nautiljon.com/images/perso/00/55/mini/karin_5455.webp"
      },
      {
       id: 109,
       char_id: 38,
       image: "https://cdn.idntimes.com/content-images/duniaku/post/20200128/karin-uzumaki-muda-a9059d87695d945ee5157a34c8c3423f.jpg"
      },
      {
       id: 110,
       char_id: 38,
       image: "https://nerdhits.com.br/wp-content/uploads/2020/04/Karin-1.jpg"
      },
      {
       id: 111,
       char_id: 39,
       image: "https://pm1.narvii.com/6350/03e11bfef415060e73ad65c8150638620e351b94_hq.jpg"
      },
      {
       id: 112,
       char_id: 39,
       image: "https://pm1.narvii.com/6740/cabd6ce245caaddea67588904026ef79c372509dv2_hq.jpg"
      },
      {
       id: 113,
       char_id: 40,
       image: "https://www.giantbomb.com/a/uploads/square_medium/3/33873/1679766-killer_bee.jpg"
      },
      {
       id: 114,
       char_id: 40,
       image: "https://criticalhits.com.br/wp-content/uploads/2018/07/Killer-Bee-740x415.png"
      },
      {
       id: 115,
       char_id: 40,
       image: "https://nerdhits.com.br/wp-content/uploads/2020/08/killer-bee-livro-1-768x381.jpg"
      },
      {
       id: 116,
       char_id: 41,
       image: "https://uploads.spiritfanfiction.com/historias/capas/202005/kakuzu-x-luna-19444861-220520211534.jpg"
      },
      {
       id: 117,
       char_id: 41,
       image: "https://criticalhits.com.br/wp-content/uploads/2020/03/Kakuzu.jpg"
      },
      {
       id: 118,
       char_id: 42,
       image: "http://narutooblog.hupont.hu/felhasznalok_uj/2/1/218213/kepfeltoltes/kisame_dare.jpg"
      },
      {
       id: 119,
       char_id: 42,
       image: "https://www.manga-city.fr/wp-content/uploads/2021/09/kisame-In-Naruto-Shippuden415.jpg"
      },
      {
       id: 120,
       char_id: 42,
       image: "https://www.manga-city.fr/wp-content/uploads/2021/09/12781788621591766963.webp"
      },
      {
       id: 121,
       char_id: 43,
       image: "https://www.nautiljon.com/images/perso/00/73/mini/deidara_2737.webp"
      },
      {
       id: 122,
       char_id: 43,
       image: "https://nerdhits.com.br/wp-content/uploads/2021/07/deidara-naruto-vida-real-768x402.jpg"
      },
      {
       id: 123,
       char_id: 44,
       image: "http://pm1.narvii.com/8117/24e75baff552f3926767b727477cb4c2da11d1aer1-596-598v2_uhq.jpg"
      },
      {
       id: 124,
       char_id: 44,
       image: "https://nerdhits.com.br/wp-content/uploads/2021/07/deus-jashin-naruto-768x402.jpg"
      },
      {
       id: 125,
       char_id: 44,
       image: "https://img.ibxk.com.br/2021/11/11/11153251241430.jpg?ims=704x"
      },
      {
       id: 126,
       char_id: 45,
       image: "https://i.redd.it/27qaakl9ab251.jpg"
      },
      {
       id: 127,
       char_id: 45,
       image: "https://i.pinimg.com/originals/b9/34/3e/b9343e15bfe1a57dffad92e42620143c.jpg"
      },
      {
       id: 128,
       char_id: 45,
       image: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/09/legiao_I2GgMAmEybF_.png.webp"
      },
      {
       id: 129,
       char_id: 46,
       image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/01/20/3285282668.png"
      },
      {
       id: 130,
       char_id: 46,
       image: "https://criticalhits.com.br/wp-content/uploads/2019/02/A-fun%C3%A7%C3%A3o-de-cada-um-dos-Caminhos.jpg"
      },
      {
       id: 131,
       char_id: 47,
       image: "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/02/Yahiko-600x338.png"
      },
      {
       id: 132,
       char_id: 47,
       image: "https://qph.cf2.quoracdn.net/main-qimg-bfbb5167882570abedd4c2fc98d650c3-pjlq"
      },
      {
       id: 133,
       char_id: 48,
       image: "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/02/Konan-konan-18381752-1288-720-600x335.jpg"
      },
      {
       id: 134,
       char_id: 48,
       image: "https://i.pinimg.com/originals/51/7f/37/517f3798f476fc6288ce14badc3ba9e9.jpg"
      },
      {
       id: 135,
       char_id: 49,
       image: "https://i.pinimg.com/originals/a6/bf/88/a6bf8826b653fbe85a141e4926776d5d.jpg"
      },
      {
       id: 136,
       char_id: 49,
       image: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2017/11/legiao__0oYv9GdJbjUSqI7zraF1mfCBQiMehp2A84LstXglK.jpg"
      },
      {
       id: 137,
       char_id: 49,
       image: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2017/11/legiao_FjJlWmwzG6XvQBahq1tDO9senYU7gfVEKiSu3rbZNP.jpg"
      },
      {
       id: 138,
       char_id: 50,
       image: "https://static.quizur.com/i/b/585debbbbf0795.89186372Obito-Uchiha.png"
      },
      {
       id: 139,
       char_id: 50,
       image: "https://www.looper.com/img/gallery/untold-truth-of-obito-uchiha/early-life-1663605103.webp"
      },
      {
       id: 140,
       char_id: 50,
       image: "https://pm1.narvii.com/8227/caf68fd9614ec1610482975f51bfd10f61bceb9br1-736-736v2_uhq.jpg"
      },
      {
       id: 141,
       char_id: 51,
       image: "https://www.giantbomb.com/a/uploads/original/0/3880/688303-2.jpg"
      },
      {
       id: 142,
       char_id: 51,
       image: "https://www.animesoulking.com/wp-content/uploads/2021/02/zabuza-momochi-740x414.jpg"
      },
      {
       id: 143,
       char_id: 52,
       image: "https://staticg.sportskeeda.com/editor/2022/04/d4aee-16503503481338-1920.jpg"
      },
      {
       id: 144,
       char_id: 52,
       image: "https://www.nautiljon.com/images/perso/00/43/haku_634.webp"
      },
      {
       id: 145,
       char_id: 52,
       image: "https://i.pinimg.com/originals/f9/26/88/f926880f542b7a879342d2f77204e004.jpg"
      },
      {
       id: 146,
       char_id: 53,
       image: "https://www.giantbomb.com/a/uploads/square_medium/3/33873/1679783-a.png"
      },
      {
       id: 147,
       char_id: 53,
       image: "https://criticalhits.com.br/wp-content/uploads/2021/12/quarto-raikage-01-768x439.jpg"
      },
      {
       id: 148,
       char_id: 53,
       image: "https://2.bp.blogspot.com/-MLCvbmRJtlE/UJrJ9_lmEUI/AAAAAAAADxw/1HawEnVF4h8/s1600/e-raikage2.jpg"
      },
      {
       id: 149,
       char_id: 54,
       image: "https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2020/11/fakta-unik-onoki-640x360.jpg"
      },
      {
       id: 150,
       char_id: 54,
       image: "https://staticg.sportskeeda.com/editor/2022/09/86904-16625499009711.png"
      },
      {
       id: 151,
       char_id: 54,
       image: "https://staticg.sportskeeda.com/editor/2022/09/1610e-16625499012048.png"
      },
      {
       id: 152,
       char_id: 55,
       image: "https://i.pinimg.com/736x/89/39/c8/8939c88e324133dd41718ec33b16b040.jpg"
      },
      {
       id: 153,
       char_id: 55,
       image: "https://pm1.narvii.com/6288/d438bc25a96c177397b7b2395468cffa097b4b26_hq.jpg"
      },
      {
       id: 154,
       char_id: 55,
       image: "https://qph.cf2.quoracdn.net/main-qimg-bd85af35e75b426def4e2cfbd7f899da-pjlq"
      },
      {
       id: 155,
       char_id: 56,
       image: "https://static.wikia.nocookie.net/animated/images/a/a3/Danzo1.jpg"
      },
      {
       id: 156,
       char_id: 56,
       image: "https://animes.olanerd.com/wp-content/uploads/2022/08/Como-Danzo-se-tornou-o-vilao-de-maior-sucesso-da.png"
      },
      {
       id: 157,
       char_id: 56,
       image: "https://criticalhits.com.br/wp-content/uploads/2019/02/Danzos_arma-2-740x475.jpg"
      },
      {
       id: 158,
       char_id: 56,
       image: "https://criticalhits.com.br/wp-content/uploads/2019/02/danzo-shimura-02-1-740x416.jpg"
      },
      {
       id: 159,
       char_id: 56,
       image: "https://animes.olanerd.com/wp-content/uploads/2022/08/1660053782_736_Como-Danzo-se-tornou-o-vilao-de-maior-sucesso-da.jpg"
      },
      {
       id: 160,
       char_id: 57,
       image: "https://img.quizur.com/f/img6113f818ec1745.54207580.png?lastEdited=1628698659"
      },
      {
       id: 161,
       char_id: 57,
       image: "https://nerdhits.com.br/wp-content/uploads/2022/09/rin-2.jpg"
      },
      {
       id: 162,
       char_id: 58,
       image: "http://pm1.narvii.com/6844/b460df6f04b1afff58bb91e518621431781bab5bv2_00.jpg"
      },
      {
       id: 163,
       char_id: 58,
       image: "https://criticalhits.com.br/wp-content/uploads/2021/01/Shisui_Uchiha-768x432.jpg"
      },
      {
       id: 164,
       char_id: 58,
       image: "https://qph.cf2.quoracdn.net/main-qimg-dc5eceb900357662a00390ff17e433fc-lq"
      },
      {
       id: 165,
       char_id: 58,
       image: "https://criticalhits.com.br/wp-content/uploads/2021/03/Shisui-2-768x432.jpg"
      },
      {
       id: 166,
       char_id: 59,
       image: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/06/legiao_wrGj2NVmU5_l.jpg.webp"
      },
      {
       id: 167,
       char_id: 59,
       image: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/06/legiao_H9S4Cu8q7w61.jpg"
      },
      {
       id: 168,
       char_id: 59,
       image: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/06/legiao_Fzx8D5UrYt0N.jpg"
      },
      {
       id: 169,
       char_id: 59,
       image: "https://criticalhits.com.br/wp-content/uploads/2021/05/Kaguya_vs_Hagoromo-e-Hamura-768x431.jpg"
      },
      {
       id: 170,
       char_id: 60,
       image: "https://www.giantbomb.com/a/uploads/original/0/864/644878-zetsu.jpg"
      },
      {
       id: 171,
       char_id: 60,
       image: "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/12/f4dd5686c50aad484936e9520285213d-600x337.jpg"
      },
      {
       id: 172,
       char_id: 60,
       image: "https://i.pinimg.com/originals/0f/f7/2f/0ff72f8ef86fe5d69945bae9f9f006b3.jpg"
      },
      {
       id: 173,
       char_id: 60,
       image: "https://e0.pxfuel.com/wallpapers/507/974/desktop-wallpaper-white-and-black-zestu-madara-white-zetsu-black-zetsu.jpg"
      },
      {
       id: 174,
       char_id: 61,
       image: "https://staticg.sportskeeda.com/editor/2022/08/3a256-16601074577111.png"
      },
      {
       id: 175,
       char_id: 61,
       image: "https://criticalhits.com.br/wp-content/uploads/2019/02/Hagoromo_flutuando-768x433.png"
      },
      {
       id: 176,
       char_id: 61,
       image: "https://i.pinimg.com/originals/12/b3/3c/12b33c119eeca79dcd496b1ab460396a.png"
      },
      {
       id: 177,
       char_id: 61,
       image: "https://assets.pikiran-rakyat.com/crop/3x805:931x1402/x/photo/2022/10/28/1783362224.jpg"
      },
      {
       id: 178,
       char_id: 62,
       image: "https://pm1.narvii.com/6387/396c486994982cd332a00ae6f5d76470b5129324_hq.jpg"
      },
      {
       id: 179,
       char_id: 62,
       image: "https://i.pinimg.com/736x/f5/04/10/f50410464f35c4b4f3837c5a161917c2.jpg"
      },
      {
       id: 180,
       char_id: 62,
       image: "https://pm1.narvii.com/6387/d1725367d30a7c69ac5c9368ca4d4802598fe5a4_hq.jpg"
      },
      {
       id: 181,
       char_id: 62,
       image: "https://pm1.narvii.com/6390/c07baba27858e5976ed3c14ea207436664340874_hq.jpg"
      },
      {
       id: 182,
       char_id: 63,
       image: "http://pm1.narvii.com/6374/94eda8aaa4f16d0f80c5787ca18ebaa4ff467718_00.jpg"
      },
      {
       id: 183,
       char_id: 63,
       image: "http://pm1.narvii.com/6395/df3623f3d5e507bbd9b01418b292c3301bd5fe0d_00.jpg"
      },
      {
       id: 184,
       char_id: 64,
       image: "https://e0.pxfuel.com/wallpapers/372/921/desktop-wallpaper-darui-darui-naruto.jpg"
      },
      {
       id: 185,
       char_id: 64,
       image: "https://64.media.tumblr.com/d1aef1d56583eca97052cf0c4b9ef102/13587e6aac5d01b4-45/s540x810/82707988df825782d035506e404eb79767c3ebc2.pnj"
      },
      {
       id: 186,
       char_id: 65,
       image: "https://ami.animecharactersdatabase.com/uploads/chars/12602-236882671.jpg"
      },
      {
       id: 187,
       char_id: 65,
       image: "https://pm1.narvii.com/6267/fff28fd71da1163651d28670623a09a5b99c2e89_hq.jpg"
      },
      {
       id: 188,
       char_id: 65,
       image: "https://nerdhits.com.br/wp-content/uploads/2022/06/mei-terumi-naruto-shippuden-768x402.jpg"
      },
      {
       id: 189,
       char_id: 65,
       image: "https://nerdhits.com.br/wp-content/uploads/2023/01/naruto-21-768x402.jpg"
      },
      {
       id: 190,
       char_id: 66,
       image: "https://i.pinimg.com/736x/fe/55/93/fe5593136164ceb86d71df17af8e2af0.jpg"
      },
      {
       id: 191,
       char_id: 66,
       image: "https://ami.animecharactersdatabase.com/uploads/chars/2554-1863854399.png"
      },
      {
       id: 192,
       char_id: 66,
       image: "https://pm1.narvii.com/6313/1995e8720bb548c88ba6dea16025fcceeee7d3a3_hq.jpg"
      },
      {
       id: 193,
       char_id: 67,
       image: "https://ami.animecharactersdatabase.com/uploads/chars/12602-15150772.jpg"
      },
      {
       id: 194,
       char_id: 67,
       image: "https://www.giantbomb.com/a/uploads/square_medium/9/95613/2238511-374967_screenshot305.jpg"
      },
      {
       id: 195,
       char_id: 68,
       image: "https://ami.animecharactersdatabase.com/uploads/chars/38345-1121851247.png"
      },
      {
       id: 196,
       char_id: 68,
       image: "https://i.pinimg.com/originals/cc/ff/bc/ccffbc46ac68466ff52ce4ee6e3ccb3a.jpg"
      },
      {
       id: 197,
       char_id: 68,
       image: "https://i.pinimg.com/736x/44/65/79/44657995f7cd611470c2da4f11d1194f--funny-faces-naruto-shippuden.jpg"
      },
      {
       id: 198,
       char_id: 69,
       image: "https://ami.animecharactersdatabase.com/uploads/chars/2554-657787224.png"
      },
      {
       id: 199,
       char_id: 69,
       image: "https://pm1.narvii.com/7004/217d2b817cba653fd32b6b8377e147bb86a5c598r1-400-400v2_hq.jpg"
      },
      {
       id: 200,
       char_id: 70,
       image: "https://pm1.narvii.com/6286/68dbb91a76e201d99bd50ca087a629887884e6b5_hq.jpg"
      },
      {
       id: 201,
       char_id: 70,
       image: "https://www.animesoulking.com/wp-content/uploads/2021/03/ibuse.jpeg"
      },
      {
       id: 202,
       char_id: 70,
       image: "http://images2.wikia.nocookie.net/__cb20120919185341/naruto/images/1/15/Hanzo_and_his_poison_sac.png"
      }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});
  }
};
