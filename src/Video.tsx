import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Rocket} from './HelloWorld/Rocket';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {evaluation} from './data';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Projeto Concluído',
					titleColor: '#2fc18c',
					evaluation,
				}}
			/>
			<Composition
				id="Rocket"
				component={Rocket}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			{/* <Composition
				id="OtherLogo"
				component={Logo}
				durationInFrames={2000}
				fps={30}
				width={1920}
				height={1080}
			/> */}
		</>
	);
};
