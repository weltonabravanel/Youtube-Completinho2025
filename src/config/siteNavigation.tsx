import YoutubeIcon from '@/assets/svgr/YoutubeIcon'
import YoutubeKids from '@/assets/svgr/YoutubeKids'
import YoutubeMusic from '@/assets/svgr/YoutubeMusic'
import { NavItem } from '@/types'
import {
	AddCircle,
	AddCircleOutline,
	EmojiEvents,
	EmojiEventsOutlined,
	Feedback,
	FeedbackOutlined,
	Flag,
	FlagOutlined,
	HelpOutline,
	HelpOutlineOutlined,
	Home,
	HomeOutlined,
	Lightbulb,
	LightbulbOutlined,
	LocalFireDepartment,
	LocalFireDepartmentOutlined,
	MusicNote,
	MusicNoteOutlined,
	Newspaper,
	NewspaperOutlined,
	OfflineBolt,
	OfflineBoltOutlined,
	Restore,
	RestoreOutlined,
	Sensors,
	SensorsOutlined,
	Settings,
	SettingsOutlined,
	Subscriptions,
	SubscriptionsOutlined,
	VideoLibrary,
	VideoLibraryOutlined,
	VideogameAsset,
	VideogameAssetOutlined,
} from '@mui/icons-material'

export const mainNavigation = {
	main: [
		{
			name: 'Home',
			href: 'https://youtubebrasil.vercel.app/',
			icon: <HomeOutlined />,
			selectedIcon: <Home />,
		},
		{
			name: 'Shorts',
			href: 'https://youtubebrasil.vercel.app/results/shorts',
			icon: <OfflineBoltOutlined />,
			selectedIcon: <OfflineBolt />,
		},
		{
			name: 'Inscrição',
			href: '#',
			icon: <SubscriptionsOutlined />,
			selectedIcon: <Subscriptions />,
		},
	] as NavItem[],
	user: [
		{
			name: 'Biblioteca',
			href: 'https://youtubebrasil.vercel.app/results/biblioteca',
			icon: <VideoLibraryOutlined />,
			selectedIcon: <VideoLibrary />,
		},
		{
			name: 'Historia',
			href: '#',
			icon: <RestoreOutlined />,
			selectedIcon: <Restore />,
		},
	] as NavItem[],
	explore: [
		{
			name: 'Trending',
			href: 'https://youtubebrasil.vercel.app/results/Trending',
			icon: <LocalFireDepartmentOutlined />,
			selectedIcon: <LocalFireDepartment />,
		},
		{
			name: 'Música',
			href: 'https://youtubebrasil.vercel.app/results/musicas',
			icon: <MusicNoteOutlined />,
			selectedIcon: <MusicNote />,
		},
		{
			name: 'Ao vivo',
			href: 'https://youtubebrasil.vercel.app/results/ao%20vivo',
			icon: <SensorsOutlined />,
			selectedIcon: <Sensors />,
		},
		{
			name: 'Jogos',
			href: 'https://youtubebrasil.vercel.app/results/jogos',
			icon: <VideogameAssetOutlined />,
			selectedIcon: <VideogameAsset />,
		},
		{
			name: 'Notícias',
			href: 'https://youtubebrasil.vercel.app/results/noticias',
			icon: <NewspaperOutlined />,
			selectedIcon: <Newspaper />,
		},
		{
			name: 'Esportes',
			href: 'https://youtubebrasil.vercel.app/results/esportes',
			icon: <EmojiEventsOutlined />,
			selectedIcon: <EmojiEvents />,
		},
		{
			name: 'Aprendizado',
			href: 'https://youtubebrasil.vercel.app/results/Aprendizado',
			icon: <LightbulbOutlined />,
			selectedIcon: <Lightbulb />,
		},
	] as NavItem[],
	browse: [
		{
			name: 'Canais do navegador',
			href: '#',
			icon: <AddCircleOutline />,
			selectedIcon: <AddCircle />,
		},
	] as NavItem[],
	more: [
		{
			name: 'YouTube Premium',
			href: 'https://www.youtube.com/premium',
			icon: <YoutubeIcon width={24} />,
			selectedIcon: <YoutubeIcon width={24} />,
		},
		{
			name: 'YouTube Music',
			href: 'https://music.youtube.com',
			icon: <YoutubeMusic width={24} />,
			selectedIcon: <YoutubeMusic width={24} />,
		},
		{
			name: 'YouTube Kids',
			href: 'https://www.youtubekids.com',
			icon: <YoutubeKids width={24} />,
			selectedIcon: <YoutubeKids width={24} />,
		},
	] as NavItem[],
	support: [
		{
			name: 'Configurações',
			href: '#',
			icon: <SettingsOutlined />,
			selectedIcon: <Settings />,
		},
		{
			name: 'Histórico de relatórios',
			href: '#',
			icon: <FlagOutlined />,
			selectedIcon: <Flag />,
		},
		{
			name: 'Ajuda',
			href: '#',
			icon: <HelpOutlineOutlined />,
			selectedIcon: <HelpOutline />,
		},
		{
			name: 'Enviar comentários',
			href: '#',
			icon: <FeedbackOutlined />,
			selectedIcon: <Feedback />,
		},
	] as NavItem[],
}

export const collapsedNavigation = [
	{
		name: 'Home',
		href: '/',
		icon: <HomeOutlined />,
		selectedIcon: <Home />,
	},
	{
		name: 'Shorts',
		href: '#',
		icon: <OfflineBoltOutlined />,
		selectedIcon: <OfflineBolt />,
	},
	{
		name: 'Inscrições',
		href: '#',
		icon: <SubscriptionsOutlined />,
		selectedIcon: <Subscriptions />,
	},
	{
		name: 'Biblioteca',
		href: '#',
		icon: <VideoLibraryOutlined />,
		selectedIcon: <VideoLibrary />,
	},
] as NavItem[]

type FooterNavItem = {
	name: string
	href: string
}

export const footerNavigation = {
	primary: [
		{
			name: 'Sobre nós',
			href: 'https://about.youtube/',
		},
		{
			name: 'Imprensa',
			href: 'https://blog.youtube/',
		},
		{
			name: 'Direitos autorais',
			href: 'https://www.youtube.com/howyoutubeworks/policies/copyright/',
		},
		{
			name: 'Contate-nos',
			href: 'https://www.youtube.com/t/contact_us/',
		},
		{
			name: 'Criadores',
			href: 'https://www.youtube.com/creators/',
		},
		{
			name: 'Anunciar',
			href: 'https://www.youtube.com/ads/',
		},
		{
			name: 'Desenvolvedores',
			href: 'https://developers.google.com/youtube',
		},
	] as FooterNavItem[],
	secondary: [
		{
			name: 'Termos',
			href: 'https://www.youtube.com/t/terms',
		},
		{
			name: 'Privacidade',
			href: 'https://policies.google.com/privacy?hl=en',
		},
		{
			name: 'Política e Segurança',
			href: 'https://www.youtube.com/howyoutubeworks/policies/community-guidelines/',
		},
		{
			name: 'Como funciona o YouTube',
			href: 'https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen',
		},
		{
			name: 'Teste novos recursos',
			href: 'https://www.youtube.com/new',
		},
	] as FooterNavItem[],
}

