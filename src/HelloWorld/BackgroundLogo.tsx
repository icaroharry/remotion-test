import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import TrybeBackgroundLogoWhite from '../assets/trybe-grafismo-branco.png';
import TrybeBackgroundLogo from '../assets/trybe-grafismo.png';

export const BackgroundLogo: React.FC<{color?: 'green' | 'white'}> = ({
	color = 'green',
}) => {
	const trybeBackgroundLogo = {
		green: TrybeBackgroundLogo,
		white: TrybeBackgroundLogoWhite,
	};
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleIn = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const scale = frame < 50 ? scaleIn : 1;

	return (
		<div
			style={{
				display: 'flex',
				height: '100%',
				width: '100%',
			}}
		>
			<Img
				style={{
					position: 'absolute',
					top: 0,
					right: -20,
					width: 'auto',
					height: 600,
					marginTop: -200,
					transform: `scale(${scale})`,
				}}
				src={trybeBackgroundLogo[color]}
				alt="trybe rocket"
			/>
		</div>
	);
};
