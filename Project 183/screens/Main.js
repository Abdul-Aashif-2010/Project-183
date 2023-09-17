import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';
import {StatusBar} from 'expo-status-bar'
import * as FaceDetector from 'expo-face-detector';

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasCameraPermission: null,
			faces: [],
		};
		this.onFacesDetected = this.onFacesDetected.bind(this);
	}

	async componentDidMount(){
		const { status } = await Camera.requestPermissionsAsync();
		thisx.setState({ hasCameraPermission: status === "granted" });
	}

	render() {
			const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		}
		if (hasCameraPermission === false) {
			return (
				<View style={styles.container}>
					<Text>No access to camera</Text>
				</View>
			);
		}
		console.log(this.state.faces);
		return (
			<View style={styles.UpperContainer}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.headingContainer}>
					<Text style={styles.titleText}>LOOK ME</Text>
				</View>
				
				<View style={styles.MiddleContainer}>
					<Camera
						style={{ flex: 1 }}
						type={Camera.Constants.Type.front}
						faceDetectorSettings={{
							mode: FaceDetector.FaceDetectorMode.fast,
							detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
							runClassifications: FaceDetector.FaceDetectorClassifications.all,
						}}
						onFacesDetected={this.onFacesDetected}
						onFacesDetectionError={this.onFacesDetectionError}
					/>

					{this.state.faces.map(face=>{
						if(this.state.current_filter === "crown-pic1") {
							return <Filter1 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "crown-pic2") {
							return <Filter2 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "crown-pic3") {
							return <Filter3 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "flower-pic1") {
							return <Filter4	 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "flower-pic2") {
							return <Filter5 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "flower-pic3") {
							return <Filter6 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "hair-pic1") {
							return <Filter7 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "hair-pic2") {
							return <Filter8 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "hair-pic3") {
							return <Filter9 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "other-pic1") {
							return <Filter10 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "other-pic2") {
							return <Filter11 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "other-pic3") {
							return <Filter12 key={face.faceID} face={face} />;
						}
					})}

					<View style={styles.LowerContainer}>
						<View style={styles.LowerTopContainer}></View>
						<View style={styles.LowerBottomContainer}>
							<ScrollView
								contentContainerStyle={styles.filters}
								horizontal
								showsHorizontalScrollIndicator={false}
							>
								{data.map(filter_data => {
									return (
										<TouchableOpacity
											key={`filter-button-${filter_data.id}`}
											style={[
												styles.filterButton,
												{
													borderColor:
														this.state.current_filter === filter_data.id
														?"#FFA384"
														:"#FFF"
												}
											]}
											onPress={()=> 
												this.setState({
													current_filter: `${filter_data.id}`,
												})
											}
										>
											<Image
												source={filter_data.src}
												style={styles.filterImage}
											></Image>
										</TouchableOpacity>
									);
								})}
							</ScrollView>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
	
styles = StyleSheet.create({
	container: {
		UpperContainer : Appname,
		LowerContainer : CameraSection,
		MiddleContainer : ActionSection,
	},
});

const data = [
	{ id: "crown-pic1", src: require("../assets/crown-pic1.png"),},
	{ id: "crown-pic1", src: require("../assets/crown-pic2.png"),},
	{ id: "crown-pic1", src: require("../assets/crown-pic3.png"),},
	{ id: "crown-pic1", src: require("../assets/flower-pic1.png"),},
	{ id: "crown-pic1", src: require("../assets/flower-pic2.png"),},
	{ id: "crown-pic1", src: require("../assets/flower-pic3.png"),},
	{ id: "crown-pic1", src: require("../assets/hair-pic1.png"),},
	{ id: "crown-pic1", src: require("../assets/hair-pic2.png"),},
	{ id: "crown-pic1", src: require("../assets/hair-pic3.png"),},
	{ id: "crown-pic1", src: require("../assets/other-pic1.png"),},
	{ id: "crown-pic1", src: require("../assets/other-pic2.png"),},
	{ id: "crown-pic1", src: require("../assets/other-pic3.png"),},
];