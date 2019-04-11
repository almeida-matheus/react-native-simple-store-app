import React from 'react';

// eslint-disable-next-line
import Svg, {
	Path,
	G,
	Polygon,
	Rect
} from 'react-native-svg';

const PocketIconComponent = props => (
	<Svg
		{
		...props
		}
		viewBox="0 0 512 512"
	>
		<Path
			fill="#85B6FF"
			d="M365,241.5c12.5,0,22.7,10.2,22.7,22.7c0,12.5-10.2,22.7-22.7,22.7c-12.5,0-22.7-10.2-22.7-22.7
			C342.3,251.7,352.4,241.5,365,241.5z"
		/>
		<Path
			fill="#B8D4FF"
			d="M479.8,232.6v63.2c0,12.1-9.8,21.8-21.8,21.8h-11.9H326.4c-12.1,0-21.8-9.8-21.8-21.8v-63.2
			c0-12.1,9.8-21.8,21.8-21.8h119.6H458C470,210.8,479.8,220.6,479.8,232.6z M387.7,264.2c0-12.5-10.2-22.7-22.7-22.7
			c-12.5,0-22.7,10.2-22.7,22.7c0,12.5,10.2,22.7,22.7,22.7C377.5,286.9,387.7,276.8,387.7,264.2z"
		/>
		<Path
			fill="#5197FF"
			d="M446.1,317.6v57.9c0,25.2-20.4,45.7-45.7,45.7h-21.8H124.3H58.2H32.2V107.2H54h40.6h79.3h40.6h158.9h27
			c3.9,0,7.6,0.5,11.2,1.4c19.8,5,34.5,22.9,34.5,44.3v57.9H326.4c-12.1,0-21.8,9.8-21.8,21.8v63.2c0,12.1,9.8,21.8,21.8,21.8
			L446.1,317.6L446.1,317.6z"
		/>
		<G>
			<Polygon
				fill="#90BC42"
				points="282.5,456 124.3,421.2 378.6,421.2 363,473.7"
			/>
			<Polygon
				fill="#90BC42"
				points="282.5,456 252.3,503.1 58.2,421.2 124.3,421.2"
			/>
		</G>
		<Rect
			x="32.9"
			y="107.8"
			fill="#1F78FF"
			width="27"
			height="313.4"
		/>
		<Path
			fill="#90BC42"
			d="M393,51.3l18.6,57.3c-3.6-0.9-7.3-1.4-11.2-1.4h-27l-14.3-43.9L393,51.3z"
		/>
		<Path
			fill="#9AD14B"
			d="M359.1,63.4l14.3,43.9H214.5c1.1-5.3,1.6-10.8,1.6-16.4c0-5.5-0.5-10.9-1.6-16.1l132.9-47.2L359.1,63.4z"
		/>
		<Path
			fill="#E09B2D"
			d="M177.1,90.8c0,5.8-1.2,11.3-3.2,16.4H94.6c-2.1-5.1-3.2-10.6-3.2-16.4c0-23.7,19.2-42.9,42.9-42.9
			C157.9,47.9,177.1,67.2,177.1,90.8z"
		/>
		<Path
			fill="#F7B239"
			d="M216.1,90.8c0,5.6-0.6,11.1-1.6,16.4h-40.6c2.1-5.1,3.2-10.6,3.2-16.4c0-23.7-19.2-42.9-42.9-42.9
			c-23.7,0-42.9,19.2-42.9,42.9c0,5.8,1.2,11.3,3.2,16.4H54c-1.1-5.3-1.6-10.8-1.6-16.4c0-45.2,36.7-81.9,81.9-81.9
			c39.7,0,72.8,28.3,80.3,65.8C215.6,79.9,216.1,85.3,216.1,90.8z"
		/>
		<G>
			<Path
				d="M458,201.9h-3v-48.9c0-23.7-15.2-43.9-36.3-51.5l-17.2-52.9c-0.7-2.3-2.4-4.2-4.5-5.3c-2.2-1.1-4.7-1.2-6.9-0.4l-25.2,9
				L356,24.7c-0.7-2.3-2.4-4.2-4.5-5.3c-2.2-1.1-4.7-1.2-6.9-0.4L220.7,63c-11.8-36.5-46.1-63-86.5-63C84.1,0,43.4,40.8,43.4,90.8
				c0,2.5,0.1,5,0.3,7.5H32.2c-4.9,0-8.9,4-8.9,8.9v313.9c0,4.9,4,8.9,8.9,8.9h24.1l192.5,81.2c1.1,0.5,2.3,0.7,3.5,0.7
				c3,0,5.8-1.5,7.5-4.1l26.8-41.8l74.5,16.4c0.6,0.1,1.3,0.2,1.9,0.2c3.9,0,7.4-2.5,8.6-6.4l13.7-46.1h15.1
				c30.1,0,54.6-24.5,54.6-54.6v-48.9h3c17,0,30.7-13.8,30.7-30.7v-63.2C488.7,215.6,474.9,201.9,458,201.9z M387.3,62.8l11.5,35.5
				h-18.9l-9.6-29.5L387.3,62.8z M341.8,38.9l19.3,59.4H224.7c0.2-2.5,0.3-5,0.3-7.5c0-3.4-0.2-6.8-0.6-10.2L341.8,38.9z M61.3,90.8
				c0-40.2,32.7-73,73-73c40.2,0,73,32.7,73,73c0,2.5-0.1,5-0.4,7.5h-21.3c0.4-2.5,0.5-4.9,0.5-7.5c0-28.6-23.3-51.8-51.8-51.8
				S82.4,62.3,82.4,90.8c0,2.5,0.2,5,0.5,7.5H61.6C61.4,95.8,61.3,93.3,61.3,90.8z M101.1,98.3c-0.5-2.4-0.8-4.9-0.8-7.5
				c0-18.7,15.2-34,34-34s34,15.2,34,34c0,2.5-0.3,5-0.8,7.5H101.1z M248.8,491.9l-146.5-61.8h21L268.1,462L248.8,491.9z M356.8,463.2
				l-150.4-33.1h160.2L356.8,463.2z M437.1,375.5c0,20.3-16.5,36.7-36.7,36.7H41.1V116.2h359.2c20.3,0,36.7,16.5,36.7,36.7v48.9H326.4
				c-17,0-30.7,13.8-30.7,30.7v63.2c0,17,13.8,30.7,30.7,30.7h110.7L437.1,375.5L437.1,375.5L437.1,375.5z M470.9,295.8
				c0,7.1-5.8,12.9-12.9,12.9H326.4c-7.1,0-12.9-5.8-12.9-12.9v-63.2c0-7.1,5.8-12.9,12.9-12.9H458c7.1,0,12.9,5.8,12.9,12.9V295.8z"
			/>
			<Path
				d="M365,232.6c-17.4,0-31.6,14.2-31.6,31.6s14.2,31.6,31.6,31.6s31.6-14.2,31.6-31.6S382.4,232.6,365,232.6z M365,278
				c-7.6,0-13.8-6.2-13.8-13.8s6.2-13.8,13.8-13.8s13.8,6.2,13.8,13.8S372.6,278,365,278z"
			/>
		</G>
	</Svg>
);

export default PocketIconComponent;
