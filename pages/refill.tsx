import Image from 'next/image';
import { useState } from 'react';
import RefillLayout from 'src/refill/layout';
import style from 'src/refill/refill.module.css';

const dev: ProgramItemProps[] = [
  {
    speaker: { name: 'Jacob Berglund', src: '/refill/people/jacob.jpg' },
    title: 'Det var en gång en request, en response och ett par headers',
    url: 'https://youtu.be/ck_VOCxTpWE?si=UXyQwjGxpJmgfOX3',
  },
  {
    speaker: {
      name: 'Jakob Endrestad Kielland',
      src: '/refill/people/jakob.jpg',
    },
    title: 'Hvordan bygge latterlig kule nettsider med View Transitions API',
    url: 'https://youtu.be/6YvDcPecICA?si=-AAPHbV3WeDZ7EJB',
  },
  {
    speaker: {
      name: 'Truls Henrik Jakobsen',
      src: '/refill/people/truls-henrik.jpg',
    },
    title: 'Skjema-endringer med lave skuldre: Bakover­kompatible APIer',
    url: 'https://youtu.be/gRZKqd8GQuE?si=_TZFW68WCZW4PRij',
  },
  {
    speaker: { name: 'Christian Brevik', src: '/refill/people/christian.jpg' },
    title: 'TestContainers er kulere enn ChatGPT',
    url: 'https://youtu.be/2DpZ3FyWd3k?si=B02412tfoGL9FFNj',
  },
  {
    speaker: { name: 'Thomas Hansen', src: '/refill/people/thomas.jpg' },
    title: 'Erfaringer med prosessarbeid',
    url: 'https://youtu.be/slu5oJ7Qqkw?si=4OSwN8SeR83HCGZK',
  },
  {
    speaker: {
      name: 'Anders Njøs Slinde',
      src: '/refill/people/anders-njos.jpg',
    },
    title: 'Plattform sa du? Ja det må vi selvfølgelig ha. Eller?',
    url: 'https://youtu.be/obJTeBTEg4I?si=LfPcac2s68JY-PQ-',
  },
  {
    speaker: { name: 'Mikael Brevik', src: '/refill/people/mikael.jpg' },
    title: 'RAG-arkitektur avmystifisert',
    url: 'https://youtu.be/RQypwHKWVI4?si=0aOYMXvflFNIWOp3',
  },
];
const design: ProgramItemProps[] = [
  {
    speaker: {
      name: 'Jonas Lillevold',
      src: '/refill/people/jonas.jpg',
    },
    title: 'UX Metrics - Hva, hvorfor og hvordan?',
    url: 'https://youtu.be/ZlOv0ggJLNI?si=kMfMScoYN7cka3FM',
  },
  {
    speaker: {
      name: 'Andreas Sætersdal Hartveit',
      src: '/refill/people/andreas.jpg',
    },
    title: 'En skikkelig nerdete preik om typografi',
    url: 'https://youtu.be/EKUIVpL9V7I?si=ZRbF_ZM0A20-sTdx',
  },
  {
    speaker: { name: 'Simen Strøm Braaten', src: '/refill/people/simen.jpg' },
    title: 'Fra å være en god designer til å bli en dårlig utvikler',
    url: 'https://youtu.be/UwYRcGc-W4s?si=ZNXltHdFp1ARLyPY',
  },
  {
    speaker: {
      name: 'Andreas Sætersdal Hartveit',
      src: '/refill/people/andreas.jpg',
    },
    title: 'Mitt voksende produkt / MVP arket',
    url: 'https://youtu.be/kAYDExZ0mzU?si=KSJlpqtaAf3nCKOZ',
  },
];

export default function Refill() {
  const [panel, setPanel] = useState<'design' | 'dev'>('design');

  return (
    <RefillLayout>
      <div className={style.header}>
        <Image
          src="/refill/header.png"
          alt="En mann og en kvinne som sitter i en sofa og ser på en laptop"
          width={360}
          height={360}
          role="none"
        />

        <div className={style.header__inner}>
          <h1>Refill 2024</h1>
          <p>
            7. juni inviterte Variant til vår første iterasjon av
            Refill-konferansen. En tverrfaglig konferanse fylt til randen med
            læreglede.
          </p>
          <p>
            Konferansen ble streamet med 2 tracks: utvikling og design. Om du
            gikk glipp av hendelsen har du ingen ting å frykte. Vi er jo åpne,
            tross alt, og du kan se alle foredrag lenket under her.
          </p>
        </div>
      </div>

      <div className={style.programSection}>
        <h2>Se track: Utvikling</h2>

        <ul className={style.programSectionGrid}>
          {dev.map((item, i) => (
            <ProgramItem key={i} {...item} />
          ))}
        </ul>
      </div>

      <div className={style.programSection}>
        <h2>Se track: Design</h2>

        <ul className={style.programSectionGrid}>
          {design.map((item, i) => (
            <ProgramItem key={i} {...item} />
          ))}
        </ul>
      </div>
    </RefillLayout>
  );
}

type YoutubeEmbedProps = {
  title: string;
  src: string;
};
function EmbedYouTube({ title, src }: YoutubeEmbedProps) {
  return (
    <div className={style.ytVideo}>
      <iframe
        width="560"
        height="315"
        frameBorder={0}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

type ProgramItemProps = {
  speaker: {
    name: string;
    src?: string;
  };
  url: string;
  title: string;
};
function ProgramItem({ speaker, title, url }: ProgramItemProps) {
  return (
    <li className={style.programItem}>
      <a href={url}>
        <h3>{title}</h3>
        <Speaker {...speaker} />
      </a>
    </li>
  );
}

function Speaker({ name, src }: ProgramItemProps['speaker']) {
  return (
    <footer className={style.speaker}>
      {src && (
        <div className={style.avatarContainer}>
          <Image src={src} alt={name} height={50} width={50} />
        </div>
      )}
      <h4>{name}</h4>
    </footer>
  );
}

function DownloadIcont() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      role="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      fill="#000000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 612 612"
      role="none"
    >
      <g>
        <g>
          <path
            d="M612,463.781c0-70.342-49.018-129.199-114.75-144.379c-10.763-2.482-21.951-3.84-33.469-3.84
			c-3.218,0-6.397,0.139-9.562,0.34c-71.829,4.58-129.725,60.291-137.69,131.145c-0.617,5.494-0.966,11.073-0.966,16.734
			c0,10.662,1.152,21.052,3.289,31.078C333.139,561.792,392.584,612,463.781,612C545.641,612,612,545.641,612,463.781z
			 M463.781,561.797c-54.133,0-98.016-43.883-98.016-98.016s43.883-98.016,98.016-98.016s98.016,43.883,98.016,98.016
			S517.914,561.797,463.781,561.797z"
          />
          <polygon
            points="482.906,396.844 449.438,396.844 449.438,449.438 396.844,449.438 396.844,482.906 482.906,482.906 
			482.906,449.438 482.906,449.438 		"
          />
          <path
            d="M109.969,0c-9.228,0-16.734,7.507-16.734,16.734v38.25v40.641c0,9.228,7.506,16.734,16.734,16.734h14.344
			c9.228,0,16.734-7.507,16.734-16.734V54.984v-38.25C141.047,7.507,133.541,0,124.312,0H109.969z"
          />
          <path
            d="M372.938,0c-9.228,0-16.734,7.507-16.734,16.734v38.25v40.641c0,9.228,7.507,16.734,16.734,16.734h14.344
			c9.228,0,16.734-7.507,16.734-16.734V54.984v-38.25C404.016,7.507,396.509,0,387.281,0H372.938z"
          />
          <path
            d="M38.25,494.859h236.672c-2.333-11.6-3.572-23.586-3.572-35.859c0-4.021,0.177-7.999,0.435-11.953H71.719
			c-15.845,0-28.688-12.843-28.688-28.688v-229.5h411.188v88.707c3.165-0.163,6.354-0.253,9.562-0.253
			c11.437,0,22.61,1.109,33.469,3.141V93.234c0-21.124-17.126-38.25-38.25-38.25h-31.078v40.641c0,22.41-18.23,40.641-40.641,40.641
			h-14.344c-22.41,0-40.641-18.231-40.641-40.641V54.984H164.953v40.641c0,22.41-18.231,40.641-40.641,40.641h-14.344
			c-22.41,0-40.641-18.231-40.641-40.641V54.984H38.25C17.126,54.984,0,72.111,0,93.234v363.375
			C0,477.733,17.126,494.859,38.25,494.859z"
          />
          <circle cx="134.774" cy="260.578" r="37.954" />
          <circle cx="248.625" cy="260.578" r="37.954" />
          <circle cx="362.477" cy="260.578" r="37.954" />
          <circle cx="248.625" cy="375.328" r="37.953" />
          <circle cx="134.774" cy="375.328" r="37.953" />
        </g>
      </g>
    </svg>
  );
}
