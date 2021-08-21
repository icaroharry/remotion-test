import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {BackgroundLogo} from './HelloWorld/BackgroundLogo';
import {Logo} from './HelloWorld/Logo';
import {Project} from './HelloWorld/Project';
import {Rocket} from './HelloWorld/Rocket';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
	evaluation: Record<string, unknown>;
}> = ({titleText, titleColor, evaluation}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={150}>
					<BackgroundLogo />
				</Sequence>
				<Sequence from={0} durationInFrames={150}>
					<Rocket transitionStart={transitionStart} />
				</Sequence>
				<Sequence
					from={transitionStart + 15}
					durationInFrames={150 - transitionStart - 15}
				>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence
					from={transitionStart + 50}
					durationInFrames={150 - transitionStart - 50}
				>
					<Subtitle />
				</Sequence>
				<Sequence
					from={transitionStart + 15}
					durationInFrames={150 - transitionStart - 15}
				>
					<Logo />
				</Sequence>
				<Sequence from={150} durationInFrames={150}>
					<Project evaluation={evaluation} />
				</Sequence>
				<Sequence from={150} durationInFrames={150}>
					<BackgroundLogo color="white" />
				</Sequence>
			</div>
		</div>
	);
};
