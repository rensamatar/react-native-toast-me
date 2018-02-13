import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'

// Colors for message type.
let COLOR_SUCCESS = '#4CAF50'
let COLOR_WARNING = '#F2BF26'
let COLOR_ERROR = '#DA394E'
let COLOR_INFO = '#5C92CA'

export default class ToastMe extends Component {

	constructor(props) {
		super(props)
		this.animatedValue = new Animated.Value(0)
		this.state = {
			modalShown: false,
			color: COLOR_SUCCESS,
			message: 'Unknown',
			modalHeight: 0,
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.visible !== nextProps.visible) {
			this.call(nextProps.message, nextProps.type)
		}
	}

	call(message, type) {
		if (this.state.modalShown) return
		this.setType(message, type)
		this.setState({ modalShown: true, modalHeight: (70) })
		Animated.timing(
			this.animatedValue,
			{
				toValue: 1,
				duration: 350,
			}
		).start(this.close())
	}

	close() {
		setTimeout(() => {
			this.setState({ modalShown: false })
			Animated.timing(
				this.animatedValue,
				{
					toValue: 0,
					duration: 350
				}
			).start()
		}, 2000)
	}

	setType(message = 'Unknown', type = 'success') {
		let color
		if (type == 'success') color = COLOR_SUCCESS
		if (type == 'warning') color = COLOR_WARNING
		if (type == 'error') color = COLOR_ERROR
		if (type == 'info') color = COLOR_INFO

		this.setState({
			color: color,
			message: message
		})
	}

	render() {
		let animation = this.animatedValue.interpolate({
			inputRange: [0, .3, 1],
			outputRange: [-70, -10, 0]
		})

		return (
			<Animated.View
				style={{
					...this.props.style,
					transform: [{ translateY: animation }],
					height: this.state.modalHeight,
					backgroundColor: this.state.color,
					justifyContent: 'center',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					zIndex: 1,
				}}>
				<Text
					numberOfLines={2}
					ellipsizeMode={'tail'}
					style={{
						marginHorizontal: 10,
						color: 'white',
						fontSize: 16,
						fontWeight: 'bold',
						textAlign: 'center'
					}}>
					{this.state.message}
				</Text>
			</Animated.View>
		)
	}
}
