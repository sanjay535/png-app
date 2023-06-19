import { Divider } from '@mui/material';
import _ from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
	const [isScrollToTop, setIsScrollToTop] = useState(true);
	useEffect(() => {
		const onScroll = (event: any) => {
			console.log('its scrooll', window.scrollY, window.innerHeight);
			setIsScrollToTop(!(window.scrollY < window.innerHeight));
			// console.info('scrolling', event);
		};
		const scrollEvent = _.throttle(onScroll, 500);
		window.addEventListener('scroll', scrollEvent);

		return () => {
			window.removeEventListener('scroll', scrollEvent);
		};
	}, []);
	return (
		<div className={`${isScrollToTop ? 'appHeader' : 'scrolledAppHeader'}`}>
			<div style={{ display: 'flex' }}>
				<Image
					src={`${process.env.NEXT_PUBLIC_BASE_URL}logo.png`}
					width="100"
					height="50"
					alt="logo"
					className="logo"
				/>
				<Divider
					orientation="vertical"
					variant="middle"
					style={{ color: 'red' }}
					flexItem
				/>
				<div
					style={{
						marginTop: 'auto',
						marginBottom: 'auto',
						padding: '5px',
						fontWeight: 'bolder',
						color: '#652D90',
						// color: !isScrollToTop ? 'white' : '#652D90',
					}}
				>
					PNG SOFTWARE TECHNOLOGIES
				</div>
				<Divider
					orientation="vertical"
					variant="middle"
					style={{ color: 'red' }}
					flexItem
				/>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					fontWeight: 'bolder',
					marginLeft: 'auto',
					// width: "100%",
					// color: '#652D90',
					color: '#652D90',

					// color: !isScrollToTop ? 'white' : '#652D90',
				}}
			>
				<div
					className="navItem"
					style={{
						marginRight: '1rem',
					}}
				>
					<span
						style={{ cursor: 'pointer' }}
						onClick={() => {
							const servicesSection: any = document.querySelector('#services');
							window.scrollTo({
								top:
									window.innerHeight +
									servicesSection.getBoundingClientRect().height,
								behavior: 'smooth',
							});
							// servicesSection.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						SERVICES
					</span>
				</div>
				{/* <Divider
          orientation="vertical"
          variant="middle"
          style={{ color: "red" }}
          flexItem
        /> */}
				<div
					className="navItem"
					style={{
						marginRight: '1rem',
					}}
				>
					<a href="#aboutus">ABOUT US</a>
				</div>
			</div>
		</div>
	);
};
export default Header;
