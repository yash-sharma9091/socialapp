import LoginBanner from '../../images/login_banner.jpg';
import HomeBanner from '../../images/banner1.jpg';
export const style = {
	backgroundSize: 'cover',
	backgroundImage: 'url(' + LoginBanner + ')',
	backgroundPosition: 'top left',
	backgroundRepeat: 'no-repeat'
};

export const ImageStyle = {
	height: 150,
	margin: 'auto',
	padding: 15
};

export const SliderImages = [{
	image: {
		backgroundImage: 'url(' + HomeBanner + ')',	
	}
},{
	image: {
		backgroundImage: 'url(' + HomeBanner + ')',	
	}
},{
	image: {
		backgroundImage: 'url(' + HomeBanner + ')',	
	}
}];

export const SliderSettings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
};