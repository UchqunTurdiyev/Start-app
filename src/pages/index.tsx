import { withLayout } from '@/layouts/layout';
import { HomePageComponent } from '@/page-component';
import {useEffect} from "react";
import {Articles} from "@/servises/article.service";

const Home = () => {

	useEffect(() => {
		Articles.getArtciles().then(data => console.log(data));
	}, [])
	return <HomePageComponent />;
};

export default withLayout(Home);
