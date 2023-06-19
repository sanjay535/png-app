import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TypeIt from 'typeit-react';
import styles from '@/styles/Home.module.css';

const InitSection = () => {
	return (
		<>
			<div
				className="initSection"
				style={{
					textAlign: 'center',
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',

					color: 'rgb(101,45,144, 0.9)',
				}}
			></div>

			<div
				style={{
					position: 'absolute',
					zIndex: 200,
					transform: '-50%',
					top: '50vh',
					width: '100vw',
					textAlign: 'center',
					color: 'rgb(101,45,144, 0.9)',
				}}
			>
				<h1>Welcome To PNG Software Technologies</h1>
				<h1 style={{ margin: 'auto', zIndex: 2 }}>
					<TypeIt> One Stop Solution For All Of Your Digital Needs</TypeIt>
				</h1>

				<div
					style={{
						zIndex: 2,
						height: '80px',
						margin: 'auto',
						// color: 'white',
						textAlign: 'center',
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
					}}
					className={styles.move_up_down}
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
						{' '}
						SCROLL DOWN <br />
						<b>
							<ArrowDownwardIcon
								style={{ height: '2rem', fontWeight: 'bolder' }}
							/>
						</b>
					</span>
				</div>
			</div>
		</>
	);
};
export default InitSection;
