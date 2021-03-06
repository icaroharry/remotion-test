import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import TrybeLogo from '../assets/trybe-logo.png';

export const Logo: React.FC = () => {
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
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Img
				style={{
					position: 'absolute',
					width: 'auto',
					height: 600,
					marginTop: -200,
					transform: `scale(${scale})`,
				}}
				src={TrybeLogo}
				alt="trybe rocket"
			/>
		</div>
	);
};
