import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticPaths, GetStaticProps } from 'next';
import {useRouter} from 'next/router';
import Image from 'next/image'
import { api } from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import styles from './episode.module.scss'

type Episode = {
    id: string;
    title: string;
    members: string;
    published_at: string;
    thumbnail:string;
    description:string;
    duration: number;
    durationAsString: string;
    url:string;
    publishedAt: string;
}

type EpisodeProps = {
    episode:Episode;
}

export default function Episode({episode}:EpisodeProps) {
    const router = useRouter();
    // HTML
    return(
        <div className={styles.episode}>
            <div className={styles.thumbnailContainer}>
                <button>
                    <img src="/arrow-left.svg" alt="voltar"/>
                </button>
            </div>

            <Image 
                width= {700}
                height={160}
                src={episode.thumbnail}
                objectFit="cover"
            />

            <button type="button">
                <img src="/play.svg" alt="tocar Episódio" />
            </button>

            <header >
                <h1>{episode.title}</h1>
                <span>{episode.members} </span>
                <span>{episode.publishedAt} </span>
                <span>{episode.durationAsString} </span>
                
            </header>

            <div className={styles.description}>
                {episode.description}
            </div>

        </div>
    );
}
// Função para deixar a tela dinamica
export const getStaticPaths: GetStaticPaths = async () =>{
    return{
        paths:[],
        fallback:'blocking'
    };
}
// Função que deixa a página estática e pega as propriedades 
export const getStaticProps: GetStaticProps = async (ctx) =>{
    const {slug} = ctx.params;
    const {data} = await api.get(`/episode/${slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        description: data.description,
        url: data.file.url,
    };

    return{
        props:{episode},
        revalidate: 60*60*24 // 24horas    
    }
}