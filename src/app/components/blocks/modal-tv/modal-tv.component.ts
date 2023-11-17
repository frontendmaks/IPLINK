import { Component, ViewEncapsulation } from '@angular/core';

interface TableRow {
  tv: {
    photo: string;
    name: string;
  };
  plan1: boolean;
  plan2: boolean;
  plan3: boolean;
  plan4: boolean;
}

@Component({
  selector: 'app-modal-tv',
  templateUrl: './modal-tv.component.html',
  styleUrls: ['./modal-tv.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalTVComponent {
  tableData: TableRow[] = [];
  constructor() {}

  ngOnInit() {
    this.tableData = [
      {
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1226-1-1-ukraina-hd.png',
          name: '1+1 Україна HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/5-novyy-kanal-hd.png',
          name: 'Новий канал HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/15-stb-hd.png',
          name: 'СТБ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1225-ictv-2-hd.png',
          name: 'ICTV 2 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1448-orel-reshka.png',
          name: 'Орел і Решка HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1574-veshdok-hd.png',
          name: 'Вещдок HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/397-2-2-hd.png',
          name: '2+2 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/484-tet-hd.png',
          name: 'ТЕТ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/186-bigudi-hd.png',
          name: 'Бігуді HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/103-plyusplyus-hd.png',
          name: 'ПЛЮСПЛЮС HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1780-tvoy-serial-hd.png',
          name: 'Твій серіал HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/512-comedy-central-hd.png',
          name: 'Comedy Central HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/899-misticheskie-istorii-hd.png',
          name: 'Містичні історії HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/456-kvartal-tv-hd.png',
          name: 'KVARTAV TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/555-detectives-hd.png',
          name: 'Детективи HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/890-melodrama-hd.png',
          name: 'Мелодрама HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/900-medicinskie-serialy-hd.png',
          name: 'Медичні серіали HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1326-now-series-hd.png',
          name: 'NOW Series HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/31-k1-hd.png',
          name: 'K1 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1575-gotuyemo-razom-hd.png',
          name: 'Готуємо разом HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1755-kasaetsya-kazhdogo-hd.png',
          name: 'Стосується кожного HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/6-ictv-hd.png',
          name: 'ICTV HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/240-1-1-infomarafon-hd.png',
          name: '1+1 Інфомарафон HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/409-svitlo-hd.png',
          name: 'Світло HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1775-gagsnetwork-hd.png',
          name: 'Gagsnetwork HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/296-telekanal-24-hd.png',
          name: 'Телеканал 24 HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1762-viasat-explore-eu.png',
          name: 'Viasat Explore EU'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1704-viasat-nature-eu.png',
          name: 'Viasat Nature EU'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1702-viasat-history-eu-hd.png',
          name: 'Viasat History EU HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/336-discovery-channel-hd.png',
          name: 'Discovery Channel HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true 
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/386-discovery-channel.png',
          name: 'Discovery Channel'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/143-national-geographic-hd.png',
          name: 'National Geographic HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/524-nat-geo-wild-hd.png',
          name: 'Nat Geo Wild HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1774-one-planet.png',
          name: 'One Planet +'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/901-sweet-istoriya.png',
          name: 'Історія HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/453-animal-planet-hd.png',
          name: 'Animal Planet HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/392-animal-planet.png',
          name: 'Animal Planet'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/389-discovery-investigation-id-xtra.png',
          name: 'Discovery Investigation ID Xtra HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/903-zoosweet-hd.png',
          name: 'Zoosweet HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/394-food-network-hd.png',
          name: 'Food Network HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/951-it-s-a-good-trip-hd.png',
          name: 'It\'s a good trip HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/258-travel-channel-hd.png',
          name: 'Travel Channel HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/19-mega-hd.png',
          name: 'Мега HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/200-travel-channel.png',
          name: 'Travel Channel'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1293-bednyakov-hd.png',
          name: 'БЄДНЯКОВ HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/208-travel-adventure-hd.png',
          name: 'Travel&Adventure HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/924-dizayn-hd.png',
          name: 'Дизайн HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/42-english-club-tv-hd.png',
          name: 'English Club TV HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1756-viasat-kino-megahit-eu-hd.png',
          name: 'Viasat Kino MegaHit EU HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1758-viasat-kino-action-eu-hd.png',
          name: 'Viasat Kino Action EU HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1703-viasat-kino-eu-hd.png',
          name: 'Viasat Kino EU HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1757-viasat-kino-world-eu.png',
          name: 'Viasat Kino World EU'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1705-viasat-kino-comedy-eu-hd.png',
          name: 'Viasat Kino Comedy EU HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1761-epic-drama-eu-hd.png',
          name: 'Epic Drama EU HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1772-viasat-serial-hd.png',
          name: 'SWEET КIНО HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1454-kino-premiere-hd.png',
          name: 'Kino Premiere HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1455-kino-action-hd.png',
          name: 'Kino Action HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/904-flixsnip-hd.png',
          name: 'FlixSnip HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1449-cine-hd.png',
          name: 'Cine+ HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1450-cine-hit-hd.png',
          name: 'Cine+ Hit HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1452-cine-legend.png',
          name: 'Cine+ Legend'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/262-amc.png',
          name: 'AMC'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/491-hollywood-hd.png',
          name: 'Hollywood HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/710-kinowood-hd.png',
          name: 'KINOWOOD HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1595-prokino-hd.png',
          name: 'PROKINO HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1766-kinosweet-hd.png',
          name: 'KINOSWEET HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1767-kinoliving-hd.png',
          name: 'KINOLIVING HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1765-nashe-lyubimoe-kino-hd.png',
          name: 'НАШЕ УЛЮБЛЕНЕ КІНО HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/525-fox-hd.png',
          name: 'FOX HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/528-fox-life-hd.png',
          name: 'Fox Life HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/391-tlc.png',
          name: 'TLC HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1456-kino-comedy-hd.png',
          name: 'Kino Comedy HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/83-televsesvit-hd.png',
          name: 'Телевсесвіт HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1532-movies-series-hd.png',
          name: 'Кіно та Серіали HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/709-dorama-hd.png',
          name: 'Дорама HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/427-bollywood-hd.png',
          name: 'Bollywood HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1553-dorama-hd.png',
          name: 'Дорама+ HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/44-enter-film-hd.png',
          name: 'Enter-фільм HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/502-star-cinema-hd.png',
          name: 'Star Cinema HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/511-star-family-hd.png',
          name: 'Star Family HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/503-bolt-hd.png',
          name: 'BOLT HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/369-filmualive-hd.png',
          name: 'FILMUALIVE HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/68-filmuadrama-hd.png',
          name: 'FILMUADRAMA HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/548-filmuadrama.png',
          name: 'FILMUADRAMA'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1776-gubka-bob-hd.png',
          name: 'Губка Боб HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1777-shchenyachiy-patrul-hd.png',
          name: 'Щенячий патруль HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1760-svinka-peppa-hd.png',
          name: 'Свинка Пеппа HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1763-pingviny-madagaskara-hd.png',
          name: 'Пінгвіни Мадагаскару HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1759-kung-fu-panda-hd.png',
          name: 'Кунг-фу Панда HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/556-sweet-multfilmy-hd.png',
          name: 'SWEET МУЛЬТФІЛЬМИ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/206-nickelodeon-hd.png',
          name: 'Nickelodeon HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1451-cine-kids-hd.png',
          name: 'Cine+ Kids HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/92-nickelodeon.png',
          name: 'Nickelodeon'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/58-nicktoons.png',
          name: 'Nicktoons'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/705-kinokazka.png',
          name: 'KinoKazka HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1771-agugugu-hd.png',
          name: '#Agugugu HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/268-tiji.png',
          name: 'TiJi'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/378-gulli.png',
          name: 'Gulli'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/86-cartoon-network.png',
          name: 'Cartoon Network'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/335-nick-junior.png',
          name: 'Nick Junior'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/374-niki-junior-hd.png',
          name: 'NIKI Junior HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/366-niki-kids-hd.png',
          name: 'NIKI Kids HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1770-jimjam.png',
          name: 'JimJam'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/410-baby-tv.png',
          name: 'Baby TV'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/47-piksel-tv-hd.png',
          name: 'Піксель ТВ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/294-lale-hd.png',
          name: 'Lale HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/144-da-vinci-learning-hd.png',
          name: 'Da Vinci Learning HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/141-setanta-sports-hd.png',
          name: 'Setanta Sports HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/479-setanta-sports-hd.png',
          name: 'Setanta Sports+ HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/78-eurosport-1-hd.png',
          name: 'Eurosport 1 HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/207-eurosport-2-hd.png',
          name: 'Eurosport 2 HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1580-upl-sw1-hd.png',
          name: 'UPL SW1 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1581-upl-sw2-hd.png',
          name: 'UPL SW2 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1582-upl-sw3-hd.png',
          name: 'UPL SW3 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/703-trace-sport-stars-hd.png',
          name: 'Trace Sport Stars HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/504-xsport-hd.png',
          name: 'Xsport HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/768-xsport-hd.png',
          name: 'XSport+ HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1593-suspilne-sport-hd.png',
          name: 'Суспільне Спорт HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/521-cars-stars-hd.png',
          name: 'Cars&Stars HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/300-pervyy-avtomobilnyy-telekanal-hd.png',
          name: 'ПЕРШИЙ АВТОМОБІЛЬНИЙ ТЕЛЕКАНАЛ HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/721-equalympic-hd.png',
          name: 'Equalympic HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/777-ruh-tv-hd.png',
          name: 'Ruh TV HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1594-divisport-hd.png',
          name: 'DiViSport HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1189-history-hd.png',
          name: 'History HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/17-m1-hd.png',
          name: 'M1 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/67-m2-hd.png',
          name: 'M2 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1276-catch-the-sound.png',
          name: 'Catch The Sound HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/557-inrating-tv-hd.png',
          name: 'InRating TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/87-club-mtv.png',
          name: 'Club MTV'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/415-mtv-hits.png',
          name: 'MTV Hits'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/242-mtv-live-hd.png',
          name: 'MTV Live HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/385-mcm-top.png',
          name: 'MCM Top'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1292-muzvar-hd.png',
          name: 'Muzvar HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/426-eu-music-hd.png',
          name: 'Eu.Music HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/371-nashe-retro-hd.png',
          name: '#Наше ретро HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/412-nashe-music-hd.png',
          name: '#НАШЕ music HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/411-etno-kanal-hd.png',
          name: 'ЕТНО канал HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/355-4ever-music-hd.png',
          name: '4ever music HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1773-music-box-hd.png',
          name: 'MUSIC BOX HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/554-kuhnya-hd.png',
          name: 'Кухня HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/912-vkusnye-blyuda-hd.png',
          name: 'Смачні страви HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/908-klopotenko-hd.png',
          name: 'Клопотенко HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/948-cooking-with-liza-glinskaya-hd.png',
          name: 'Готуємо разом із Лізою Глінською HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/917-poleznaya-eda-hd.png',
          name: 'Корисна їжа HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/918-mezhdunarodnaya-kuhnya-hd.png',
          name: 'Міжнародна кухня HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/245-kus-kus-hd.png',
          name: 'Кус-кус HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/920-zdorove-hd.png',
          name: 'Здоровʼя HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/138-36-6-tv-hd.png',
          name: '36,6 TV HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1398-fresh-motion-hd.png',
          name: 'Fresh Motion HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/922-pediatriya-hd.png',
          name: 'Педіатрія HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/923-zagorodnaya-zhizn-hd.png',
          name: 'Заміське життя HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/925-sadovodstvo-hd.png',
          name: 'Садівництво HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/450-dacha-hd.png',
          name: 'Дача HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/775-6-sotok-hd.png',
          name: '6 соток HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/949-maks-tv-hd.png',
          name: 'Макс ТВ HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/938-max-tv-hd.png',
          name: 'Max TV HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1239-gordon.png',
          name: 'Гордон HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/926-brodyachiy-stendap-hd.png',
          name: 'Бродячий Стендап HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/970-ua-stand-up-agency.png',
          name: 'UA Stand-Up Agency HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1002-bamper-i-sus-hd.png',
          name: 'Бампер і Сус HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1003-profan-hd.png',
          name: 'ПроФан HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1548-ukrainskaya-pravda-hd.png',
          name: 'Українська правда HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1004-toronto-tv.png',
          name: 'Телебачення Торонто HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/987-ramina-eskhakzai-s-channel.png',
          name: 'Канал Раміни Есхакзай HD'
        },
        plan1: true,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/919-armiya-tv-hd.png',
          name: 'Армія TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1768-islandiya-antipody.png',
          name: 'Ісландія. Антиподи.'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/384-travel-guide-tv-hd.png',
          name: 'TRAVEL GUIDE-TV HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/774-utravel-hd.png',
          name: 'Utravel HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/383-navigator-tv.png',
          name: 'Navigator TV'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/423-nauka.png',
          name: 'Наука'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/424-terra.png',
          name: 'Терра'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/439-fauna.png',
          name: 'Фауна'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/233-rybalka-tv-hd.png',
          name: 'Рибалка ТВ HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/451-trofey-hd.png',
          name: 'Трофей HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/772-mason-tv.png',
          name: 'Масон-ТВ'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/773-zakon-tv.png',
          name: 'Закон-ТВ'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/520-fireplace-4k.png',
          name: 'Fireplace 4K'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/358-aquarium-4k.png',
          name: 'Aquarium 4K'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/516-fashion-tv-hd-ukraine.png',
          name: 'Fashion TV HD Ukraine'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/45-zoom-hd.png',
          name: 'Zoom HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1533-solnce.png',
          name: 'Сонце'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/100-oce-hd.png',
          name: 'ОЦЕ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/32-k2-hd.png',
          name: 'К2 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/8-ntn-hd.png',
          name: 'НТН HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/66-glas.png',
          name: 'Глас'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/462-novyy-hristianskiy.png',
          name: 'Новий Христианський'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/353-vozrozhdenie-hd.png',
          name: 'Возрождение HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/290-nadezhda.png',
          name: 'Надія'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/23-ewtn.png',
          name: 'EWTN'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/228-8-kanal-hd.png',
          name: '8 Канал HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/644-dim-hd.png',
          name: 'Дім HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/359-eco-tv-hd.png',
          name: 'ECO TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/382-miledi.png',
          name: 'Міледі'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/151-natali.png',
          name: 'НАТАЛІ'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/455-karavan-tv.png',
          name: 'Караван TV'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/577-sonata-tv-hd.png',
          name: 'Sonata TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/376-atr-hd.png',
          name: 'ATR HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/461-pravda-tut-hd.png',
          name: 'Правда ТУТ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/476-prm-global-hd.png',
          name: 'PRM.GLOBAL HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/7-inter-hd.png',
          name: 'Інтер HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/517-pershiy-hd.png',
          name: 'Перший HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/10-rada-hd.png',
          name: 'РАДА HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/146-unian-tv-hd.png',
          name: 'Уніан ТВ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/402-kiev-tv-hd.png',
          name: 'Київ ТВ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/500-nastoyashchee-vremya-hd.png',
          name: 'Теперішній час HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/596-islandiya-hd.png',
          name: 'Ісландія HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/508-oboz-tv-hd.png',
          name: 'OBOZ TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/203-pryamoy-hd.png',
          name: 'ПРЯМИЙ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/158-espreso-tv-hd.png',
          name: 'Еспресо ТВ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/481-apostrof-tv-hd.png',
          name: 'Апостроф TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/9-5-kanal-hd.png',
          name: '5 Канал HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1530-mi-ukrajina.png',
          name: 'Ми – Україна'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1534-uwn-hd.png',
          name: 'UWN HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/269-bbc.png',
          name: 'BBC'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/172-cnni.png',
          name: 'CNNi'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/529-euronews-english-hd.png',
          name: 'Euronews English HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/365-euronews.png',
          name: 'Euronews'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/701-trt-world-hd.png',
          name: 'TRT World HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/434-deutsche-welle-hd.png',
          name: 'Deutsche Welle HD'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/457-deutsche-welle-deutsch.png',
          name: 'Deutsche Welle (Deutsch)'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/380-france-24-english-hd.png',
          name: 'France 24 English HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/711-france-24-arabic-hd.png',
          name: 'France 24 Arabic HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/712-france-24-french-hd.png',
          name: 'France 24 French HD'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/399-u-kultura.png',
          name: 'Суспільне Культура HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1565-konkurent-tv-hd.png',
          name: 'Конкурент TV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/55-12-kanal-luck-hd.png',
          name: '12 Канал (Луцьк) HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/595-suspilne-luck-hd.png',
          name: 'Суспільне Луцьк HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/793-d1-hd.png',
          name: 'D1 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/444-pervyy-gorodskoy-krivoy-rog-hd.png',
          name: 'Перший Міський Кривий Ріг HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/187-11-kanal-dnepr-hd.png',
          name: '11 канал Днепр HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/430-ptrk-hd.png',
          name: 'ПТРК HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/582-otv.png',
          name: 'ОТВ'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/583-suspilne-dnipro-hd.png',
          name: 'Суспільне Дніпро HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/445-suspilne-donbas-hd.png',
          name: 'Суспільне Донбас HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/458-suspilne-uzhgorod-hd.png',
          name: 'Суспільне Ужгород HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/573-uzhgorod-21.png',
          name: 'Ужгород 21'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/51-mtm-hd.png',
          name: 'МТМ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/584-suspilne-zaporizhzhya-hd.png',
          name: 'Суспільне Запоріжжя HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/459-otb-galichina-hd.png',
          name: 'ОТБ Галичина HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/498-rai-ivano-frankovsk-hd.png',
          name: 'РАI Івано-Франківськ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/204-kolomiya-ntk-hd.png',
          name: 'Коломия НТК HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/569-snyatin-hd.png',
          name: 'Снятин HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/585-suspilne-frankivsk-hd.png',
          name: 'Суспільне Франківськ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/152-suspilne-kijiv-hd.png',
          name: 'Суспільне Київ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/564-krokus-tv-hd.png',
          name: 'Крокус ТВ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/436-suspilne-krim-hd.png',
          name: 'Суспільне Крим HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/357-trk-chernomorskaya.png',
          name: 'ТРК Чорноморська'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/571-pravda-tut-lvov-hd.png',
          name: 'Правда ТУТ Львів HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/677-nta-hd.png',
          name: 'НТА HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/586-suspilne-lviv-hd.png',
          name: 'Суспільне Львів HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/1550-trk-pervyy-zapadnyy-hd.png',
          name: 'ТРК  ПЕРШИЙ ЗАХІДНИЙ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/443-glas.png',
          name: 'ГLAS'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/84-tk-krug.png',
          name: 'ТК Круг'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/566-pervyy-gorodskoy-odessa-hd.png',
          name: 'ПЕРШИЙ МІСЬКИЙ ОДЕСА HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/587-suspilne-odesa-hd.png',
          name: 'Суспільне Одеса HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/468-suspilne-rivne-hd.png',
          name: 'Суспільне Рівне HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/205-rivne-1-hd.png',
          name: 'Рівне 1 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/580-itv-hd.png',
          name: 'ITV HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/578-sfera-tv-hd.png',
          name: 'Сфера-ТВ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/469-suspilne-sumi-hd.png',
          name: 'Суспільне Суми HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/264-ternopol-1-hd.png',
          name: 'Тернопіль 1 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/169-telekompaniya-tv-4.png',
          name: 'Телекомпанія TV-4'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/579-intb.png',
          name: 'ІНТБ'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/588-suspilne-ternopil-hd.png',
          name: 'Суспільне Тернопіль HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/149-suspilne-herson-hd.png',
          name: 'Суспільне Херсон HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/487-ditinec.png',
          name: 'ДИТИНЕЦЬ'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/109-suspilne-chernigiv-hd.png',
          name: 'Суспільне Чернігів HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/448-suspilne-chernivci-hd.png',
          name: 'Суспільне Чернівці HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/515-tba-hd.png',
          name: 'TBA HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/168-c4-hd.png',
          name: 'C4 HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/470-cherniveckiy-promin-hd.png',
          name: 'Чернівецький Промінь HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/562-poltavskoe-tv-hd.png',
          name: 'Полтавське ТБ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/570-misto-plyus-hd.png',
          name: 'Місто Плюс'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/589-suspilne-poltava-hd.png',
          name: 'Суспільне Полтава HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/590-suspilne-harkiv-hd.png',
          name: 'Суспільне Харків HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/591-suspilne-mikolajiv-hd.png',
          name: 'Суспільне Миколаїв HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/572-mart-hd.png',
          name: 'Март HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/592-suspilne-krop-hd.png',
          name: 'Суспільне Кроп. HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/593-suspilne-vinnicya-hd.png',
          name: 'Суспільне Вінниця HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/597-vita-tv-hd.png',
          name: 'Віта ТБ HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/567-pershiy-podilskiy-hd.png',
          name: 'Перший Подільський HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/594-suspilne-hmeln-hd.png',
          name: 'Суспільне Хмельн. HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/763-tv7.png',
          name: 'TV7+'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/560-33-kanal-hd.png',
          name: '33 канал HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/598-mirgorod-hd.png',
          name: 'Миргород HD'
        },
        plan1: false,
        plan2: true,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/489-playboy-tv.png',
          name: 'Playboy TV'
        },
        plan1: false,
        plan2: false,
        plan3: true,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/714-blue-hustler.png',
          name: 'Blue Hustler'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      },{
        tv: {
          photo: 'https://static.sweet.tv/images/icons/channels/v2/713-barely-legal-tv.png',
          name: 'Barely legal TV'
        },
        plan1: false,
        plan2: false,
        plan3: false,
        plan4: true
      }
    ]
  }
}
