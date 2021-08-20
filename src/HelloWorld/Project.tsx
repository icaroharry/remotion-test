import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {evaluation} from '../data';

export const Project: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 5], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Verdana',
				background: '#4a2396',
				color: 'white',
				display: 'flex',
				width: '100%',
				height: '100%',
				alignItems: 'center',
				flexDirection: 'column',
				padding: 100,
				opacity,
			}}
		>
			<h1
				style={{
					fontFamily: 'Verdana',
					fontWeight: 'bold',
					fontSize: 80,
					textAlign: 'center',
					bottom: 160,
					width: '100%',
				}}
			>
				{'Movie Cards Library Crud'
					.split(' ')
					.map((t) => ` ${t} `)
					.map((t, i) => {
						return (
							<span
								key={t}
								style={{
									color: 'white',
									marginLeft: 10,
									marginRight: 10,
									transform: `scale(${spring({
										fps: videoConfig.fps,
										frame: frame - i * 5,
										config: {
											damping: 100,
											stiffness: 200,
											mass: 0.5,
										},
									})})`,
									display: 'inline-block',
								}}
							>
								{t}
							</span>
						);
					})}
			</h1>
			<div>
				{evaluation.evaluations.map((ev) => (
					<li>{ev?.description}</li>
				))}
			</div>
		</div>
	);
};
