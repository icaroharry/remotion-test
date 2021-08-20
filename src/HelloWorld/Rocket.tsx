import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import TrybeRocket from '../assets/trybe-foguete.png';

export const Rocket: React.FC<{
	transitionStart: number;
}> = ({transitionStart}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleIn = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const translation = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 20,
			},
		}),
		[0, 1],
		[0, -800]
	);

	const translationX = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 20,
			},
		}),
		[0, 1],
		[0, 800]
	);

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
					height: 250,
					transform: `scale(${scale}) translateY(${translation}px) translateX(${translationX}px)`,
				}}
				src={TrybeRocket}
				alt="trybe rocket"
			/>
		</div>
	);
};
