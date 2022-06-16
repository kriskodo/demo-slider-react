import './App.css';
import Slider from "./components/Slider/Slider";
import Container from "./components/Container/Container";

const App = () => {
		const sliderContentData = [
				{
						sliderId: 1,
						title: "Alpha Suite",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						actions: [{ text: "Go to Alpha Suite" }],
				},
				{
						sliderId: 2,
						image: require("./images/photo.jpg"),
						title: "Wiki",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						actions: [{ text: "Go to Wiki" }],
				},
				{
						sliderId: 3,
						title: "Hot Takes",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						actions: [{ text: "Go to Hot Takes" }],
						image: require("./images/photo.jpg"),
				},
				{
						sliderId: 4,
						image: require("./images/photo.jpg"),
				},
				{
						sliderId: 5,
						title: "Smart Chat",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				}
		];
		return (
				<div className = "App">
						<Container title = "Just getting started">
								<Slider
										sliderContentData={sliderContentData}
										cardSizesConfig={[85,90,100,90,85]}
										buttonStyles={{fontSize: "50px"}}
								/>
						</Container>
				</div>
		);
};

export default App;
