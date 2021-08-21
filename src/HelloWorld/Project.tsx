import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Project: React.FC<{evaluation: Record<string, unknown>}> = ({
	evaluation,
}) => {
	const videoConfig = useVideoConfig();
	const grade = (
		(evaluation.evaluations.filter((ev) => ev.grade === 3).length /
			evaluation.evaluations.length) *
		100
	).toFixed(0);
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 5], [0, 1]);
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
				fontFamily: 'Epilogue',
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
			<span
				style={{
					fontFamily: 'Epilogue',
					fontSize: 60,
					textAlign: 'center',
					width: '100%',
					opacity,
				}}
			>
				Projeto
			</span>
			<h1
				style={{
					fontFamily: 'Epilogue',
					fontWeight: 'bold',
					fontSize: 80,
					textAlign: 'center',
					bottom: 160,
					width: '100%',
				}}
			>
				{evaluation.github_repository_name
					.split('-project-')[1]
					.split('-')
					.map(
						(projectTitleWord) =>
							projectTitleWord.charAt(0).toUpperCase() +
							projectTitleWord.slice(1)
					)
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
			<p style={{fontSize: 27, opacity, transform: `scale(${scale})`}}>
				Parabéns <strong>@{evaluation?.github_username}</strong>! 👏👏👏
				<br />
				<br />
				Você conseguiu a sua aprovação realizando {grade}% dos requisitos totais
				do projeto.
			</p>
			<div style={{listStyle: 'none', fontSize: 25, marginTop: 30}}>
				{evaluation?.evaluations?.map((ev, i) => (
					<li
						style={{
							padding: 10,
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 5,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
						}}
					>
						{ev?.grade === 3 ? '✔️' : '❌'}
						{'  '}
						{ev?.description}
					</li>
				))}
			</div>
		</div>
	);
};
