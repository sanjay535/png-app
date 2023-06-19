import styles from '@/styles/Home.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

import 'swiper/css';
import { useCallback, useMemo } from 'react';
import { Navigation } from 'swiper';

const ButtonComp = ({ body }: { body: string }) => {
	return (
		<>
			<Button size="small">
				<a target="_blank" href={`https://wa.me/918950848075?text?${body}`}>
					<WhatsAppIcon />
				</a>
			</Button>
			<Button size="small">
				<a
					target="_blank"
					href={`https://mail.google.com/mail/?view=cm&fs=1&to=pngsoftware22@gmail.com&su=I need a Mobile App&body=${body}`}
				>
					<EmailIcon />
				</a>
			</Button>
		</>
	);
};
const MobileAppDev = () => (
	<Card className="cardItem" sx={{ maxWidth: 345 }}>
		<CardMedia
			sx={{ height: 160 }}
			image="/mobile_app_dev.png"
			title="green iguana"
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				Need a Mobile App For Your Buisness?
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{
					'Mobile apps have become an integral part of our daily lives, offering a\
				range of benefits. Mobile apps provide convenience, efficiency and\
				connectivity. The scope of mobile apps today is incredibly broad and\
				diverse. Mobile apps are developed for a wide range of purposes. Some\
				prominent areas of mobile app scope include: E-commerce and retail,\
				Entertainment, Financial services anf many more.'
				}
			</Typography>
		</CardContent>
		<CardActions>
			Reach Us
			<ButtonComp
				body={
					'hey, I was checking out Mobile app development on your website. Please revert with more information on it'
				}
			/>
		</CardActions>
	</Card>
);

const WebAppDev = () => (
	<Card className="cardItem" sx={{ maxWidth: 345 }}>
		<CardMedia
			sx={{ height: 160 }}
			image="/web_app_dev.png"
			title="green iguana"
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				Need a Web App For Your Buisness?
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{
					'Responsive web applications have become a necessity in today`s digital\
				landscape. With the increasing use of mobile devices, responsive design\
				ensures that web applications adapt seamlessly to different screen sizes\
				and resolutions. This allows users to have a consistent and optimized\
				experience across desktops, laptops, tablets, and smartphones.'
				}
			</Typography>
		</CardContent>
		<CardActions>
			Reach Us
			<ButtonComp
				body={
					'hey, I was checking out Web app development on your website. Please revert with more information on it'
				}
			/>
		</CardActions>
	</Card>
);

const GetSlidesPerView = () => {
	if (window?.innerWidth < 552) {
		return 1;
	} else if (window?.innerWidth < 768) {
		return 2;
	} else if (window?.innerWidth < 1024) {
		return 3;
	}
	return 4;
};

const Hiredeveloper = () => {
	return (
		<Card className="cardItem" sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 160 }}
				image="/hire_dev.jpeg"
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Need a Dedicated Resource to work with you?
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{
						"If you are looking for a full time Resource but do not want to hire as\
					an employee to your Orgnisation, We are here to help. A clear job\
					description and fast interview turnarounds . PNG Software technologies\
					takes the responsibility of managing employees timesheet,\
					availability. One Senior Account manager will be assigned to each\
					project. We don't prefer bot on support. Just an Email/WhatsApp away."
					}
				</Typography>
			</CardContent>
			<CardActions>
				Know, how it works
				<ButtonComp
					body={
						'hey, I was checking out Hire a remote Developer on your website. Please revert with more information on it'
					}
				/>
			</CardActions>
		</Card>
	);
};

const Digimarket = () => {
	return (
		<Card className="cardItem" sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 160 }}
				image="/digital_market.jpeg"
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					SEO and Digital Marketing
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{
						"Digital marketing is crucial in today's business landscape due to its\
					unparalleled reach and measurability. With people using the internet\
					and various digital platforms, businesses can connect with a global\
					audience and target specific demographics with precision. Moreover,\
					digital marketing channels often require lower investments compared to\
					traditional marketing methods, enabling businesses of all sizes to\
					compete effectively. In a nutshell, digital marketing empowers\
					businesses to engage, attract, and convert customers in an\
					increasingly digital world."
					}
				</Typography>
			</CardContent>
			<CardActions>
				How Can I reach More Audience
				<ButtonComp
					body={
						'hey, I was checking out Hire a remote Developer on your website. Please revert with more information on it'
					}
				/>
			</CardActions>
		</Card>
	);
};

const Services = () => {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={4}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log('changes', swiper)}
			autoplay
			navigation
			modules={[Navigation]}
		>
			<SwiperSlide>
				<MobileAppDev />
			</SwiperSlide>
			<SwiperSlide>
				<WebAppDev />
			</SwiperSlide>
			<SwiperSlide>
				<Hiredeveloper />
			</SwiperSlide>
			<SwiperSlide>
				<Digimarket />
			</SwiperSlide>
		</Swiper>
	);
};
export default Services;
